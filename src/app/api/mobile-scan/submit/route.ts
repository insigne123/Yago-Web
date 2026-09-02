import { NextResponse } from "next/server";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 90;

type UploadFile = File & {
  name: string;
  size: number;
  type: string;
};

const OCR_TRIAL_PATH = "/api/public/trial/v1/front-back";
const MAX_FILE_SIZE_BYTES = 12 * 1024 * 1024;
const MAX_REQUEST_SIZE_BYTES = 25 * 1024 * 1024;
const SUPPORTED_IMAGE_TYPES = new Set([
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
]);

function isUploadFile(value: FormDataEntryValue | null): value is UploadFile {
  if (!value || typeof value !== "object") return false;

  const file = value as Partial<UploadFile>;
  return (
    typeof file.arrayBuffer === "function" &&
    typeof file.size === "number" &&
    file.size > 0 &&
    typeof file.name === "string" &&
    typeof file.type === "string"
  );
}

function sanitizeFilename(name: string, fallback: string) {
  const safe = name.replace(/[^a-zA-Z0-9._-]/g, "_").slice(0, 120);
  return safe || fallback;
}

async function hasSupportedImageSignature(file: UploadFile) {
  const bytes = new Uint8Array(await file.slice(0, 16).arrayBuffer());
  const isJpeg = bytes[0] === 0xff && bytes[1] === 0xd8 && bytes[2] === 0xff;
  const isPng = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a].every(
    (value, index) => bytes[index] === value
  );
  const ascii = String.fromCharCode(...bytes);
  const isWebp = ascii.startsWith("RIFF") && ascii.slice(8, 12) === "WEBP";
  const isHeif =
    ascii.slice(4, 8) === "ftyp" &&
    /^(heic|heix|hevc|hevx|mif1|msf1)$/.test(ascii.slice(8, 12));

  return isJpeg || isPng || isWebp || isHeif;
}

function buildTrialUrl(req: Request) {
  const configuredBase = process.env.OCR_MOBILE_SCAN_API_BASE_URL?.trim();
  const base = configuredBase || new URL(req.url).origin;
  return `${base.replace(/\/+$/, "")}${OCR_TRIAL_PATH}`;
}

function errorForStatus(status: number) {
  if (status === 400) {
    return "Archivo invalido o falta una imagen del frente/reverso.";
  }

  if (status === 401 || status === 403) {
    return "Token trial invalido, vencido o con cuota agotada.";
  }

  if (status === 502) {
    return "Error temporal del OCR. Intenta nuevamente.";
  }

  if (status >= 500) {
    return "El servicio OCR no respondio correctamente. Intenta nuevamente.";
  }

  return "No se pudo procesar el carnet. Revisa las imagenes e intenta nuevamente.";
}

async function parseJsonSafely(response: Response) {
  const contentType = response.headers.get("content-type") || "";
  if (!contentType.includes("application/json")) return null;

  try {
    return await response.json();
  } catch {
    return null;
  }
}

export async function POST(req: Request) {
  const rateLimit = checkRateLimit(req, { namespace: "ocr-trial", limit: 3, windowMs: 15 * 60 * 1000 });
  if (!rateLimit.allowed) {
    return NextResponse.json(
      { error: "Alcanzaste el límite temporal de pruebas. Intenta nuevamente más tarde.", retryable: false, status: 429 },
      { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds), "Cache-Control": "no-store" } }
    );
  }

  const token = process.env.OCR_MOBILE_SCAN_TRIAL_TOKEN?.trim();

  if (!token) {
    return NextResponse.json(
      { error: "Token trial OCR no configurado en el servidor." },
      { status: 500 }
    );
  }

  const contentLength = Number(req.headers.get("content-length") || 0);
  if (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_SIZE_BYTES) {
    return NextResponse.json(
      { error: "La carga completa es demasiado grande. Usa imágenes más livianas." },
      { status: 413, headers: { "Cache-Control": "no-store" } }
    );
  }

  let incomingForm: FormData;
  try {
    incomingForm = await req.formData();
  } catch {
    return NextResponse.json(
      { error: "Solicitud invalida. Debes enviar frente y reverso como multipart/form-data." },
      { status: 400 }
    );
  }

  const frontFile = incomingForm.get("front_file");
  const backFile = incomingForm.get("back_file");

  if (!isUploadFile(frontFile) || !isUploadFile(backFile)) {
    return NextResponse.json(
      { error: "Debes adjuntar imagen del frente y del reverso." },
      { status: 400 }
    );
  }

  if (frontFile.size > MAX_FILE_SIZE_BYTES || backFile.size > MAX_FILE_SIZE_BYTES) {
    return NextResponse.json(
      { error: "Una de las imagenes es demasiado grande. Vuelve a tomarla o usa una version mas liviana." },
      { status: 400 }
    );
  }

  if (
    frontFile.size + backFile.size > MAX_FILE_SIZE_BYTES * 2 ||
    !SUPPORTED_IMAGE_TYPES.has(frontFile.type.toLowerCase()) ||
    !SUPPORTED_IMAGE_TYPES.has(backFile.type.toLowerCase()) ||
    !(await hasSupportedImageSignature(frontFile)) ||
    !(await hasSupportedImageSignature(backFile))
  ) {
    return NextResponse.json(
      { error: "Formato de imagen no compatible. Usa JPG, PNG, WebP, HEIC o HEIF." },
      { status: 400, headers: { "Cache-Control": "no-store" } }
    );
  }

  const outboundForm = new FormData();
  outboundForm.append(
    "front_file",
    frontFile,
    sanitizeFilename(frontFile.name, "carnet-frente.jpg")
  );
  outboundForm.append(
    "back_file",
    backFile,
    sanitizeFilename(backFile.name, "carnet-reverso.jpg")
  );
  outboundForm.append("document_family", "identity");
  outboundForm.append("country", "CL");
  outboundForm.append("response_mode", "json");

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 90_000);

  try {
    const upstreamResponse = await fetch(buildTrialUrl(req), {
      method: "POST",
      headers: {
        "x-api-key": token,
      },
      body: outboundForm,
      cache: "no-store",
      signal: controller.signal,
    });

    const data = await parseJsonSafely(upstreamResponse);

    if (!upstreamResponse.ok) {
      return NextResponse.json(
        {
          error: errorForStatus(upstreamResponse.status),
          retryable: upstreamResponse.status === 502 || upstreamResponse.status >= 500,
          status: upstreamResponse.status,
        },
        { status: upstreamResponse.status }
      );
    }

    if (!data) {
      return NextResponse.json(
        { error: "El OCR respondio en un formato inesperado.", retryable: true, status: 502 },
        { status: 502 }
      );
    }

    return NextResponse.json(data, {
      status: upstreamResponse.status,
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json(
      { error: "Error temporal OCR. Intenta nuevamente.", retryable: true, status: 502 },
      { status: 502 }
    );
  } finally {
    clearTimeout(timeout);
  }
}

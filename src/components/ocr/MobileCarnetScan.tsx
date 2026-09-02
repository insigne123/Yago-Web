"use client";

import * as React from "react";
import {
  AlertTriangle,
  Camera,
  CheckCircle2,
  FileText,
  Loader2,
  RefreshCw,
  RotateCcw,
  Send,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

type ScanStatus = "waiting" | "ready" | "processing" | "result" | "error";
type ScanSide = "front" | "back";

type CapturedFile = {
  file: File;
  previewUrl: string;
};

type OcrParameterValue =
  | string
  | number
  | boolean
  | null
  | undefined
  | Record<string, unknown>
  | unknown[];

type OcrResult = {
  decision?: string;
  reviewRequired?: boolean;
  globalConfidence?: number | string;
  parameters?: Record<string, OcrParameterValue> | OcrParameterValue[];
  issues?: OcrParameterValue[];
  humanSummary?: string;
};

type TrialResponse = {
  usage?: unknown;
  result?: OcrResult;
};

type ErrorState = {
  message: string;
  retryable: boolean;
};

type DecodedImage = {
  source: CanvasImageSource;
  width: number;
  height: number;
  close?: () => void;
};

const ACCEPTED_IMAGE_TYPES = "image/*,.heic,.heif";
const MAX_IMAGE_SIDE = 1800;
const JPEG_QUALITY = 0.82;

function replaceExtension(filename: string, extension: string) {
  const base = filename.replace(/\.[^.]+$/, "").trim() || "carnet";
  return `${base}.${extension}`;
}

function getScaledSize(width: number, height: number) {
  const longSide = Math.max(width, height);
  if (longSide <= MAX_IMAGE_SIDE) return { width, height };

  const ratio = MAX_IMAGE_SIDE / longSide;
  return {
    width: Math.round(width * ratio),
    height: Math.round(height * ratio),
  };
}

function loadImageWithElement(file: File): Promise<DecodedImage> {
  return new Promise<{ source: HTMLImageElement; width: number; height: number }>((resolve, reject) => {
    const url = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => {
      URL.revokeObjectURL(url);
      resolve({ source: image, width: image.naturalWidth, height: image.naturalHeight });
    };

    image.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error("Image decode failed"));
    };

    image.decoding = "async";
    image.src = url;
  });
}

async function decodeImage(file: File): Promise<DecodedImage> {
  if ("createImageBitmap" in window) {
    try {
      const bitmap = await createImageBitmap(file);
      return {
        source: bitmap,
        width: bitmap.width,
        height: bitmap.height,
        close: () => bitmap.close(),
      };
    } catch {
      // Some browsers cannot decode HEIC/HEIF. Fallback below may still handle regular images.
    }
  }

  return loadImageWithElement(file);
}

async function compressForUpload(file: File) {
  try {
    const decoded = await decodeImage(file);
    const size = getScaledSize(decoded.width, decoded.height);
    const canvas = document.createElement("canvas");
    canvas.width = size.width;
    canvas.height = size.height;

    const context = canvas.getContext("2d", { alpha: false });
    if (!context) return file;

    context.drawImage(decoded.source, 0, 0, size.width, size.height);
    decoded.close?.();

    const blob = await new Promise<Blob | null>((resolve) => {
      canvas.toBlob(resolve, "image/jpeg", JPEG_QUALITY);
    });

    if (!blob) return file;

    return new File([blob], replaceExtension(file.name, "jpg"), {
      type: "image/jpeg",
      lastModified: Date.now(),
    });
  } catch {
    // HEIC/HEIF may not decode in the browser. Keep the original file instead of blocking upload.
    return file;
  }
}

function formatFileSize(size: number) {
  if (size < 1024 * 1024) return `${Math.max(1, Math.round(size / 1024))} KB`;
  return `${(size / (1024 * 1024)).toFixed(1)} MB`;
}

function formatKey(key: string) {
  return key
    .replace(/[_-]+/g, " ")
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (char) => char.toUpperCase());
}

function stringifyValue(value: unknown): string {
  if (value === null || value === undefined || value === "") return "-";
  if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
    return String(value);
  }

  if (Array.isArray(value)) {
    return value.map((item) => stringifyValue(item)).join(", ");
  }

  try {
    return JSON.stringify(value);
  } catch {
    return String(value);
  }
}

function extractParameterValue(value: OcrParameterValue) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return value;

  const record = value as Record<string, unknown>;
  if ("value" in record) return record.value;
  if ("text" in record) return record.text;
  if ("raw" in record) return record.raw;
  if ("normalized" in record) return record.normalized;
  return record;
}

function extractParameterConfidence(value: OcrParameterValue) {
  if (!value || typeof value !== "object" || Array.isArray(value)) return "";

  const record = value as Record<string, unknown>;
  const confidence = record.confidence ?? record.score;
  return formatConfidence(confidence);
}

function parameterRows(parameters: OcrResult["parameters"]) {
  if (!parameters || typeof parameters !== "object") return [];

  if (Array.isArray(parameters)) {
    return parameters.map((value, index) => ({
      label: `Campo ${index + 1}`,
      value: stringifyValue(extractParameterValue(value)),
      confidence: extractParameterConfidence(value),
    }));
  }

  return Object.entries(parameters).map(([key, value]) => ({
    label: formatKey(key),
    value: stringifyValue(extractParameterValue(value)),
    confidence: extractParameterConfidence(value),
  }));
}

function formatConfidence(value: unknown) {
  if (typeof value === "number" && Number.isFinite(value)) {
    const percentage = value <= 1 ? value * 100 : value;
    return `${Math.round(percentage)}%`;
  }

  if (typeof value === "string" && value.trim()) return value;
  return "";
}

function formatDecision(decision?: string) {
  if (!decision) return "Sin decision";

  const normalized = decision.toLowerCase();
  if (["approved", "approve", "accepted", "ok", "pass"].includes(normalized)) return "Aprobado";
  if (["rejected", "reject", "failed", "fail"].includes(normalized)) return "Rechazado";
  if (["review", "manual_review", "needs_review"].includes(normalized)) return "Revision requerida";
  return decision;
}

function formatIssue(issue: unknown) {
  if (typeof issue === "string") return issue;
  if (!issue || typeof issue !== "object") return stringifyValue(issue);

  const record = issue as Record<string, unknown>;
  return stringifyValue(record.message ?? record.detail ?? record.code ?? issue);
}

function statusLabel(status: ScanStatus, hasFiles: boolean, hasConsent: boolean) {
  if (status === "processing") return "Procesando";
  if (status === "result") return "Resultado listo";
  if (status === "error") return "Error";
  if (!hasFiles) return "Esperando fotos";
  if (!hasConsent) return "Falta consentimiento";
  return "Listo para enviar";
}

function statusTone(status: ScanStatus, hasFiles: boolean, hasConsent: boolean) {
  if (status === "error") return "border-red-300/40 bg-red-100 text-red-800";
  if (status === "processing") return "border-sky-200/30 bg-sky-300/10 text-sky-700";
  if (status === "result") return "border-emerald-300/40 bg-emerald-100 text-emerald-800";
  if (hasFiles && hasConsent) return "border-sky-200/30 bg-sky-300/10 text-sky-700";
  return "border-slate-900/10 bg-white/[0.04] text-slate-600";
}

function CaptureStep({
  step,
  side,
  title,
  description,
  capture,
  disabled,
  onPick,
  onClear,
}: {
  step: string;
  side: ScanSide;
  title: string;
  description: string;
  capture: CapturedFile | null;
  disabled: boolean;
  onPick: (side: ScanSide, file: File) => void;
  onClear: (side: ScanSide) => void;
}) {
  const inputId = React.useId();
  const [previewFailed, setPreviewFailed] = React.useState(false);

  React.useEffect(() => {
    setPreviewFailed(false);
  }, [capture?.previewUrl]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];
    if (file) onPick(side, file);
    event.target.value = "";
  }

  return (
    <section className="rounded-[1.6rem] border border-slate-900/10 bg-white/[0.045] p-4 shadow-[0_18px_60px_rgba(30,58,95,0.08)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">{step}</div>
          <h2 className="mt-2 text-xl font-semibold text-slate-900">{title}</h2>
          <p className="mt-1 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>

        <div
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border",
            capture ? "border-sky-200/30 bg-sky-300/10 text-sky-700" : "border-slate-900/10 bg-slate-900/5 text-slate-600"
          )}
          aria-hidden="true"
        >
          {capture ? <CheckCircle2 className="h-4 w-4" /> : <Camera className="h-4 w-4" />}
        </div>
      </div>

      <input
        id={inputId}
        type="file"
        accept={ACCEPTED_IMAGE_TYPES}
        capture="environment"
        className="sr-only"
        disabled={disabled}
        onChange={handleChange}
      />

      <div className="mt-4 overflow-hidden rounded-[1.25rem] border border-slate-900/10 bg-slate-900/5">
        {capture && !previewFailed ? (
          <img
            src={capture.previewUrl}
            alt={`Preview ${title.toLowerCase()}`}
            className="aspect-[1.58/1] w-full object-cover"
            onError={() => setPreviewFailed(true)}
          />
        ) : (
          <div className="flex aspect-[1.58/1] w-full flex-col items-center justify-center gap-3 px-6 text-center text-slate-600">
            <FileText className="h-8 w-8 text-slate-500" aria-hidden="true" />
            <p className="text-sm">
              {capture ? "Vista previa no disponible, pero el archivo sera enviado." : "Aun no hay imagen seleccionada."}
            </p>
          </div>
        )}
      </div>

      {capture && (
        <div className="mt-3 flex items-center justify-between gap-3 text-xs text-slate-600">
          <span className="truncate">{capture.file.name || "Imagen seleccionada"}</span>
          <span className="shrink-0">{formatFileSize(capture.file.size)}</span>
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 gap-2 min-[380px]:grid-cols-2">
        <label
          htmlFor={inputId}
          className={cn(
            "inline-flex min-h-12 cursor-pointer items-center justify-center gap-2 rounded-full border px-4 text-sm font-semibold transition-[transform,background-color,border-color] duration-200 active:scale-[0.98]",
            disabled
              ? "pointer-events-none border-slate-900/10 bg-white/[0.03] text-slate-500"
              : "border-slate-900/10 bg-white text-slate-950 hover:bg-slate-100"
          )}
        >
          {capture ? <RotateCcw className="h-4 w-4" aria-hidden="true" /> : <Camera className="h-4 w-4" aria-hidden="true" />}
          {capture ? "Volver a tomar" : "Tomar foto"}
        </label>

        <Button
          type="button"
          variant="ghost"
          disabled={!capture || disabled}
          onClick={() => onClear(side)}
          className="min-h-12 rounded-full border border-slate-900/10 bg-white/[0.035] text-slate-800 transition-[transform,background-color] duration-200 hover:bg-slate-50 hover:text-slate-900 active:scale-[0.98] disabled:opacity-40"
        >
          Quitar imagen
        </Button>
      </div>
    </section>
  );
}

function ResultView({ response, onReset }: { response: TrialResponse; onReset: () => void }) {
  const result = response.result || {};
  const rows = parameterRows(result.parameters);
  const issues = Array.isArray(result.issues) ? result.issues : [];
  const confidence = formatConfidence(result.globalConfidence);

  return (
    <section className="rounded-[1.75rem] border border-sky-200/20 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 shadow-[0_24px_80px_rgba(30,58,95,0.14)]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Resultado OCR</div>
          <h2 className="mt-2 text-2xl font-semibold text-slate-900">{formatDecision(result.decision)}</h2>
        </div>
        <div className="rounded-full border border-slate-900/10 bg-white/[0.04] px-3 py-1 text-sm text-slate-800">
          {confidence || "Confianza no informada"}
        </div>
      </div>

      {typeof result.reviewRequired === "boolean" && (
        <div className="mt-4 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-800">
          Revision humana: {result.reviewRequired ? "requerida" : "no requerida"}
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
        <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">Resumen</div>
        <p className="mt-2 text-sm leading-relaxed text-slate-800">
          {result.humanSummary || "El servicio OCR no entrego resumen humano para esta lectura."}
        </p>
      </div>

      <div className="mt-4 overflow-hidden rounded-2xl border border-slate-900/10 bg-slate-900/5">
        <div className="border-b border-slate-900/10 px-4 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
          Campos detectados
        </div>
        {rows.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-xs uppercase tracking-[0.12em] text-slate-500">
                <tr className="border-b border-slate-900/10">
                  <th className="px-4 py-3 font-medium">Campo</th>
                  <th className="px-4 py-3 font-medium">Valor</th>
                  <th className="px-4 py-3 font-medium">Conf.</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-900/10 text-slate-800">
                {rows.map((row) => (
                  <tr key={`${row.label}-${row.value}`}>
                    <td className="px-4 py-3 align-top text-slate-600">{row.label}</td>
                    <td className="max-w-[13rem] break-words px-4 py-3 align-top">{row.value}</td>
                    <td className="px-4 py-3 align-top text-slate-600">{row.confidence || "-"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="px-4 py-5 text-sm text-slate-600">No se informaron campos estructurados.</div>
        )}
      </div>

      {issues.length > 0 && (
        <div className="mt-4 rounded-2xl border border-amber-200/20 bg-amber-300/10 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-amber-700">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            Issues detectados
          </div>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-amber-900">
            {issues.map((issue, index) => (
              <li key={`${index}-${formatIssue(issue)}`}>{formatIssue(issue)}</li>
            ))}
          </ul>
        </div>
      )}

      <Button
        type="button"
        onClick={onReset}
        className="mt-5 min-h-12 w-full rounded-full bg-white text-slate-950 transition-[transform,background-color] duration-200 hover:bg-slate-100 active:scale-[0.98]"
      >
        <RefreshCw className="h-4 w-4" aria-hidden="true" />
        Escanear otro carnet
      </Button>
    </section>
  );
}

export function MobileCarnetScan() {
  const [front, setFront] = React.useState<CapturedFile | null>(null);
  const [back, setBack] = React.useState<CapturedFile | null>(null);
  const [consent, setConsent] = React.useState(false);
  const [status, setStatus] = React.useState<ScanStatus>("waiting");
  const [error, setError] = React.useState<ErrorState | null>(null);
  const [response, setResponse] = React.useState<TrialResponse | null>(null);
  const frontRef = React.useRef<CapturedFile | null>(null);
  const backRef = React.useRef<CapturedFile | null>(null);

  const hasFiles = Boolean(front && back);
  const canSubmit = hasFiles && consent && status !== "processing";
  const currentStatus = status === "waiting" && hasFiles && consent ? "ready" : status;

  React.useEffect(() => {
    frontRef.current = front;
  }, [front]);

  React.useEffect(() => {
    backRef.current = back;
  }, [back]);

  React.useEffect(() => {
    return () => {
      if (frontRef.current) URL.revokeObjectURL(frontRef.current.previewUrl);
      if (backRef.current) URL.revokeObjectURL(backRef.current.previewUrl);
    };
  }, []);

  React.useEffect(() => {
    if (status === "processing" || status === "result" || status === "error") return;
    setStatus(hasFiles && consent ? "ready" : "waiting");
  }, [consent, hasFiles, status]);

  function setCapture(side: ScanSide, file: File) {
    const next = { file, previewUrl: URL.createObjectURL(file) };
    const update = (previous: CapturedFile | null) => {
      if (previous) URL.revokeObjectURL(previous.previewUrl);
      return next;
    };

    if (side === "front") setFront(update);
    if (side === "back") setBack(update);
    setError(null);
    setResponse(null);
    setStatus("waiting");
  }

  function clearCapture(side: ScanSide) {
    const update = (previous: CapturedFile | null) => {
      if (previous) URL.revokeObjectURL(previous.previewUrl);
      return null;
    };

    if (side === "front") setFront(update);
    if (side === "back") setBack(update);
    setError(null);
    setResponse(null);
    setStatus("waiting");
  }

  function resetScan() {
    if (front) URL.revokeObjectURL(front.previewUrl);
    if (back) URL.revokeObjectURL(back.previewUrl);
    setFront(null);
    setBack(null);
    setConsent(false);
    setStatus("waiting");
    setError(null);
    setResponse(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  async function submitScan() {
    if (!front || !back || !consent || status === "processing") return;

    setStatus("processing");
    setError(null);
    setResponse(null);

    try {
      const [frontFile, backFile] = await Promise.all([
        compressForUpload(front.file),
        compressForUpload(back.file),
      ]);

      const form = new FormData();
      form.append("front_file", frontFile);
      form.append("back_file", backFile);

      const res = await fetch("/api/mobile-scan/submit", {
        method: "POST",
        body: form,
      });

      const payload = await res.json().catch(() => null);

      if (!res.ok) {
        const message = typeof payload?.error === "string" ? payload.error : "No se pudo procesar el carnet.";
        setError({ message, retryable: Boolean(payload?.retryable || res.status === 502) });
        setStatus("error");
        return;
      }

      setResponse(payload as TrialResponse);
      setStatus("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setError({ message: "Error temporal OCR. Revisa la conexion e intenta nuevamente.", retryable: true });
      setStatus("error");
    }
  }

  return (
    <main id="main-content" className="min-h-[100svh] bg-slate-50 px-4 py-5 text-slate-900">
      <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[-8rem] top-[-7rem] h-72 w-72 rounded-full bg-sky-300/10 blur-[90px]" />
        <div className="absolute right-[-7rem] top-24 h-64 w-64 rounded-full bg-white/80 blur-[90px]" />
        <div className="absolute inset-x-8 bottom-[-8rem] h-56 rounded-full bg-sky-200/[0.08] blur-[80px]" />
      </div>

      <div className="relative mx-auto flex w-full max-w-md flex-col gap-4 pb-24">
        <header className="rounded-[1.75rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] p-5 shadow-[0_22px_70px_rgba(30,58,95,0.14)]">
          <div className="flex items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs text-slate-600">
              <ShieldCheck className="h-3.5 w-3.5 text-sky-700" aria-hidden="true" />
              Prueba OCR en vivo
            </div>
            <div
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium",
                statusTone(currentStatus, hasFiles, consent)
              )}
              aria-live="polite"
            >
              {statusLabel(currentStatus, hasFiles, consent)}
            </div>
          </div>

          <h1 className="mt-5 text-4xl font-semibold leading-none tracking-tight text-slate-900">Escaneo de Carnet</h1>
          <p className="mt-3 text-base leading-relaxed text-slate-600">
            Toma una foto clara del frente y reverso. Usa buena luz, evita reflejos y deja el carnet completo dentro del encuadre.
          </p>
        </header>

        {status === "result" && response ? (
          <ResultView response={response} onReset={resetScan} />
        ) : (
          <>
            <CaptureStep
              step="Paso 1"
              side="front"
              title="Tomar frente"
              description="Foto del lado donde aparecen la cara y los datos principales."
              capture={front}
              disabled={status === "processing"}
              onPick={setCapture}
              onClear={clearCapture}
            />

            <CaptureStep
              step="Paso 2"
              side="back"
              title="Tomar reverso"
              description="Foto del lado posterior completo, sin dedos tapando codigos o texto."
              capture={back}
              disabled={status === "processing"}
              onPick={setCapture}
              onClear={clearCapture}
            />

            <section className="rounded-[1.6rem] border border-slate-900/10 bg-white/[0.045] p-4">
              <div className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Paso 3</div>
              <h2 className="mt-2 text-xl font-semibold text-slate-900">Revisar y enviar</h2>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                Confirma que ambas imagenes se ven completas antes de enviarlas al OCR.
              </p>

              <label className="mt-4 flex items-start gap-3 rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4 text-sm leading-relaxed text-slate-800">
                <Checkbox
                  checked={consent}
                  disabled={status === "processing"}
                  onCheckedChange={(checked) => setConsent(checked === true)}
                  className="mt-0.5 border-slate-900/10 data-[state=checked]:border-sky-200 data-[state=checked]:bg-sky-200 data-[state=checked]:text-slate-950"
                  aria-label="Consentimiento para procesar imagenes"
                />
                <span>
                  Autorizo el procesamiento de estas imagenes solo para ejecutar esta prueba de OCR. No se guardan en este navegador.
                </span>
              </label>

              {status === "processing" && (
                <div className="mt-4 rounded-2xl border border-sky-300/40 bg-sky-100 p-4 text-sm text-sky-900" aria-live="polite">
                  <div className="flex items-center gap-2 font-semibold">
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                    Procesando OCR
                  </div>
                  <p className="mt-2 leading-relaxed text-sky-800">
                    Puede tardar entre 15 y 60 segundos. Mantente en esta pantalla mientras se procesa.
                  </p>
                </div>
              )}

              {status === "error" && error && (
                <div className="mt-4 rounded-2xl border border-red-300/40 bg-red-100 p-4 text-sm text-red-900" role="alert">
                  <div className="flex items-center gap-2 font-semibold">
                    <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                    No se pudo procesar
                  </div>
                  <p className="mt-2 leading-relaxed text-red-800">{error.message}</p>
                  {error.retryable && (
                    <Button
                      type="button"
                      onClick={submitScan}
                      className="mt-4 min-h-11 w-full rounded-full bg-white text-slate-950 hover:bg-slate-100 active:scale-[0.98]"
                    >
                      <RefreshCw className="h-4 w-4" aria-hidden="true" />
                      Reintentar
                    </Button>
                  )}
                </div>
              )}
            </section>

            <div className="fixed inset-x-0 bottom-0 z-20 border-t border-slate-900/10 bg-white/92 px-4 py-3 backdrop-blur-xl">
              <div className="mx-auto max-w-md">
                <Button
                  type="button"
                  disabled={!canSubmit}
                  onClick={submitScan}
                  className="min-h-[3.25rem] w-full rounded-full bg-white text-base font-semibold text-slate-950 shadow-[0_16px_42px_rgba(125,211,252,0.16)] transition-[transform,background-color] duration-200 hover:bg-slate-100 active:scale-[0.98] disabled:opacity-45"
                >
                  {status === "processing" ? (
                    <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  ) : (
                    <Send className="h-4 w-4" aria-hidden="true" />
                  )}
                  {status === "processing" ? "Procesando..." : "Enviar al OCR"}
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}

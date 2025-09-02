import { NextResponse } from "next/server";
import { buildContactTemplate, sendEmail } from "@/lib/email";
import { EmailFormPayload } from "@/types/contact";

export const runtime = "nodejs"; // requerido para SDKs (Resend/Nodemailer)
export const dynamic = "force-dynamic";


function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clampText(v: unknown, max = 2000) {
  const s = String(v ?? "").trim();
  return s.slice(0, max);
}

async function readBody(req: Request): Promise<EmailFormPayload> {
  const ct = req.headers.get("content-type") || "";
  if (ct.includes("application/json")) {
    return (await req.json()) as EmailFormPayload;
  }
  if (ct.includes("application/x-www-form-urlencoded")) {
    const text = await req.text();
    const u = new URLSearchParams(text);
    return {
      name: u.get("nombre") || "", // "nombre" from the form
      email: u.get("email") || "",
      company: u.get("empresa") || undefined, // "empresa" from the form
      message: u.get("mensaje") || "", // "mensaje" from the form
      hp: u.get("hp") || undefined,
    };
  }
  // Fallback: intentar JSON
  try {
    const json = await req.json();
    return {
      name: json.nombre || "",
      email: json.email || "",
      company: json.empresa || undefined,
      message: json.mensaje || "",
      hp: json.hp || undefined,
    }

  } catch {
    return { name: "", email: "", message: "" };
  }
}

export async function POST(req: Request) {
  try {
    const data = await readBody(req);

    // honeypot: si viene relleno, ignoramos en silencio
    if (data.hp && data.hp.trim().length > 0) {
      return NextResponse.json({ ok: true, message: "¡Mensaje enviado con éxito!" }, { status: 200 });
    }

    const name = clampText(data.name, 120);
    const email = clampText(data.email, 200);
    const company = clampText(data.company, 120);
    const message = clampText(data.message, 5000);

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email inválido." },
        { status: 400 }
      );
    }

    const TO =
      process.env.CONTACT_TO ||
      process.env.NEXT_PUBLIC_CONTACT_TO || // por si lo definiste público (no recomendado)
      "";
    const FROM =
      process.env.RESEND_FROM ||
      process.env.SMTP_FROM ||
      "Yago <no-reply@yago.local>";

    if (!TO) {
      console.error("[contact] error: No hay destinatario configurado. Define CONTACT_TO en .env.local");
      return NextResponse.json(
        {
          ok: false,
          error: "Error del servidor de correo.",
        },
        { status: 500 }
      );
    }

    const subject = `📩 [Contacto Yago] ${name} — ${company || "sin empresa"}`;
    const { html, text } = buildContactTemplate({
      name,
      email,
      phone: (data as any).phone,
      company,
      message,
    });

    await sendEmail({
      to: TO,
      from: FROM,
      subject,
      html,
      text,
      replyTo: email,
    });

    return NextResponse.json({ ok: true, message: "¡Mensaje enviado con éxito!" }, { status: 200 });
  } catch (err: any) {
    console.error("[contact] error:", err?.message || err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "No se pudo enviar el correo en este momento. Intenta nuevamente más tarde.",
      },
      { status: 500 }
    );
  }
}

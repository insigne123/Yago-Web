// Envío de correos para el formulario de contacto
// Proveedores: Resend (primario) y SMTP (fallback con Nodemailer).
// Usa variables de entorno; no expone secretos en el cliente.

import type { TransportOptions } from "nodemailer";
import type { EmailFormPayload } from "@/types/contact"; // opcional, ver tipo inline más abajo

export type SendEmailOptions = {
  to: string;
  from: string;
  subject: string;
  html: string;
  text?: string;
  replyTo?: string;
};

export async function sendEmail(opts: SendEmailOptions) {
  const hasResend = !!process.env.RESEND_API_KEY;
  if (hasResend) {
    return sendWithResend(opts);
  }
  const hasSMTP =
    !!process.env.SMTP_HOST &&
    !!process.env.SMTP_PORT &&
    !!process.env.SMTP_USER &&
    !!process.env.SMTP_PASS;
  if (hasSMTP) {
    return sendWithSMTP(opts);
  }
  throw new Error(
    "No hay proveedor configurado. Define RESEND_API_KEY o SMTP_HOST/SMTP_PORT/SMTP_USER/SMTP_PASS."
  );
}

async function sendWithResend(opts: SendEmailOptions) {
  const { Resend } = await import("resend");
  const resend = new Resend(process.env.RESEND_API_KEY!);
  // Nota: en el SDK de Resend el replyTo es "reply_to" en payload HTTP; usamos any para compatibilidad.
  const payload: any = {
    from: opts.from,
    to: Array.isArray(opts.to) ? opts.to : [opts.to],
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
  };
  if (opts.replyTo) payload.reply_to = opts.replyTo;
  const res = await resend.emails.send(payload);
  if ((res as any).error) {
    throw new Error(
      "Error Resend: " + ((res as any).error?.message || "desconocido")
    );
  }
  return res;
}

async function sendWithSMTP(opts: SendEmailOptions) {
  const nodemailer = await import("nodemailer");
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 587),
    secure: String(process.env.SMTP_SECURE || "false") === "true",
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!,
    },
  } as TransportOptions);

  const info = await transporter.sendMail({
    from: opts.from,
    to: opts.to,
    subject: opts.subject,
    html: opts.html,
    text: opts.text,
    replyTo: opts.replyTo,
  });
  return info;
}

// Utilidades para el HTML seguro
export function escapeHTML(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export function buildContactTemplate(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}) {
  const safe = {
    name: escapeHTML(data.name || ""),
    email: escapeHTML(data.email || ""),
    phone: escapeHTML(data.phone || ""),
    company: escapeHTML(data.company || ""),
    message: escapeHTML(data.message || ""),
  };

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;color:#0b0b0b">
    <h2 style="margin:0 0 8px">Nuevo contacto desde la web</h2>
    <p style="margin:0 0 16px">Has recibido un mensaje desde el formulario de Yago.</p>
    <table style="border-collapse:collapse;width:100%">
      <tbody>
        <tr><td style="padding:6px 0;width:140px;color:#555">Nombre</td><td>${safe.name}</td></tr>
        <tr><td style="padding:6px 0;color:#555">Email</td><td>${safe.email}</td></tr>
        ${
          safe.phone
            ? `<tr><td style="padding:6px 0;color:#555">Teléfono</td><td>${safe.phone}</td></tr>`
            : ""
        }
        ${
          safe.company
            ? `<tr><td style="padding:6px 0;color:#555">Empresa</td><td>${safe.company}</td></tr>`
            : ""
        }
      </tbody>
    </table>
    <hr style="margin:16px 0;border:0;border-top:1px solid #eee"/>
    <p style="white-space:pre-wrap">${safe.message}</p>
  </div>`.trim();

  const text = `Nuevo contacto desde la web

Nombre: ${data.name}
Email: ${data.email}
${data.phone ? `Teléfono: ${data.phone}\n` : ""}${
    data.company ? `Empresa: ${data.company}\n` : ""
  }
Mensaje:
${data.message}`;

  return { html, text };
}
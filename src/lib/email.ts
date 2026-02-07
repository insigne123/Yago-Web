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
  topic?: string;
  attribution?: {
    firstTouch?: {
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
      utm_term?: string;
      utm_content?: string;
      referrer?: string;
      landing?: string;
      ts?: string;
    };
    lastTouch?: {
      utm_source?: string;
      utm_medium?: string;
      utm_campaign?: string;
      utm_term?: string;
      utm_content?: string;
      referrer?: string;
      landing?: string;
      ts?: string;
    };
  };
  meta?: {
    userAgent?: string;
    referer?: string;
  };
}) {
  const safe = {
    name: escapeHTML(data.name || ""),
    email: escapeHTML(data.email || ""),
    phone: escapeHTML(data.phone || ""),
    company: escapeHTML(data.company || ""),
    message: escapeHTML(data.message || ""),
    topic: escapeHTML(data.topic || ""),

    ft_utm_source: escapeHTML(data.attribution?.firstTouch?.utm_source || ""),
    ft_utm_medium: escapeHTML(data.attribution?.firstTouch?.utm_medium || ""),
    ft_utm_campaign: escapeHTML(data.attribution?.firstTouch?.utm_campaign || ""),
    ft_utm_term: escapeHTML(data.attribution?.firstTouch?.utm_term || ""),
    ft_utm_content: escapeHTML(data.attribution?.firstTouch?.utm_content || ""),
    ft_referrer: escapeHTML(data.attribution?.firstTouch?.referrer || ""),
    ft_landing: escapeHTML(data.attribution?.firstTouch?.landing || ""),
    ft_ts: escapeHTML(data.attribution?.firstTouch?.ts || ""),

    lt_utm_source: escapeHTML(data.attribution?.lastTouch?.utm_source || ""),
    lt_utm_medium: escapeHTML(data.attribution?.lastTouch?.utm_medium || ""),
    lt_utm_campaign: escapeHTML(data.attribution?.lastTouch?.utm_campaign || ""),
    lt_utm_term: escapeHTML(data.attribution?.lastTouch?.utm_term || ""),
    lt_utm_content: escapeHTML(data.attribution?.lastTouch?.utm_content || ""),
    lt_referrer: escapeHTML(data.attribution?.lastTouch?.referrer || ""),
    lt_landing: escapeHTML(data.attribution?.lastTouch?.landing || ""),
    lt_ts: escapeHTML(data.attribution?.lastTouch?.ts || ""),

    meta_user_agent: escapeHTML(data.meta?.userAgent || ""),
    meta_referer: escapeHTML(data.meta?.referer || ""),
  };

  const hasFT = !!(
    safe.ft_utm_source ||
    safe.ft_utm_medium ||
    safe.ft_utm_campaign ||
    safe.ft_utm_term ||
    safe.ft_utm_content ||
    safe.ft_referrer ||
    safe.ft_landing ||
    safe.ft_ts
  );

  const hasLT = !!(
    safe.lt_utm_source ||
    safe.lt_utm_medium ||
    safe.lt_utm_campaign ||
    safe.lt_utm_term ||
    safe.lt_utm_content ||
    safe.lt_referrer ||
    safe.lt_landing ||
    safe.lt_ts
  );

  const hasMeta = !!(safe.meta_user_agent || safe.meta_referer);

  const html = `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5;color:#0b0b0b">
    <h2 style="margin:0 0 8px">Nuevo contacto desde la web</h2>
    <p style="margin:0 0 16px">Has recibido un mensaje desde el formulario de Yago.</p>
    <table style="border-collapse:collapse;width:100%">
      <tbody>
        ${safe.topic ? `<tr><td style="padding:6px 0;width:140px;color:#555">Motivo</td><td>${safe.topic}</td></tr>` : ""}
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

    ${
      hasFT || hasLT || hasMeta
        ? `
    <hr style="margin:16px 0;border:0;border-top:1px solid #eee"/>
    <h3 style="margin:0 0 8px;font-size:14px;color:#111">Origen / Atribución</h3>
    <table style="border-collapse:collapse;width:100%">
      <tbody>
        ${
          hasFT
            ? `
        <tr><td style="padding:6px 0;width:140px;color:#555">First touch</td><td>
          ${safe.ft_ts ? `<div><strong>TS:</strong> ${safe.ft_ts}</div>` : ""}
          ${safe.ft_landing ? `<div><strong>Landing:</strong> ${safe.ft_landing}</div>` : ""}
          ${safe.ft_referrer ? `<div><strong>Referrer:</strong> ${safe.ft_referrer}</div>` : ""}
          ${
            safe.ft_utm_source ||
            safe.ft_utm_medium ||
            safe.ft_utm_campaign ||
            safe.ft_utm_term ||
            safe.ft_utm_content
              ? `<div><strong>UTM:</strong> source=${safe.ft_utm_source || "-"} · medium=${safe.ft_utm_medium || "-"} · campaign=${safe.ft_utm_campaign || "-"} · term=${safe.ft_utm_term || "-"} · content=${safe.ft_utm_content || "-"}</div>`
              : ""
          }
        </td></tr>`
            : ""
        }

        ${
          hasLT
            ? `
        <tr><td style="padding:6px 0;color:#555">Last touch</td><td>
          ${safe.lt_ts ? `<div><strong>TS:</strong> ${safe.lt_ts}</div>` : ""}
          ${safe.lt_landing ? `<div><strong>Landing:</strong> ${safe.lt_landing}</div>` : ""}
          ${safe.lt_referrer ? `<div><strong>Referrer:</strong> ${safe.lt_referrer}</div>` : ""}
          ${
            safe.lt_utm_source ||
            safe.lt_utm_medium ||
            safe.lt_utm_campaign ||
            safe.lt_utm_term ||
            safe.lt_utm_content
              ? `<div><strong>UTM:</strong> source=${safe.lt_utm_source || "-"} · medium=${safe.lt_utm_medium || "-"} · campaign=${safe.lt_utm_campaign || "-"} · term=${safe.lt_utm_term || "-"} · content=${safe.lt_utm_content || "-"}</div>`
              : ""
          }
        </td></tr>`
            : ""
        }

        ${
          hasMeta
            ? `
        <tr><td style="padding:6px 0;color:#555">Meta</td><td>
          ${safe.meta_referer ? `<div><strong>Referer:</strong> ${safe.meta_referer}</div>` : ""}
          ${safe.meta_user_agent ? `<div><strong>User-Agent:</strong> ${safe.meta_user_agent}</div>` : ""}
        </td></tr>`
            : ""
        }
      </tbody>
    </table>`
        : ""
    }
    <hr style="margin:16px 0;border:0;border-top:1px solid #eee"/>
    <p style="white-space:pre-wrap">${safe.message}</p>
  </div>`.trim();

  const text = `Nuevo contacto desde la web

${data.topic ? `Motivo: ${data.topic}\n` : ""}
Nombre: ${data.name}
Email: ${data.email}
${data.phone ? `Teléfono: ${data.phone}\n` : ""}${
    data.company ? `Empresa: ${data.company}\n` : ""
  }
Mensaje:
${data.message}`;

  const attributionLines: string[] = [];
  if (hasFT) {
    attributionLines.push(
      `\nFirst touch:\n` +
        `${data.attribution?.firstTouch?.ts ? `- TS: ${data.attribution?.firstTouch?.ts}\n` : ""}` +
        `${data.attribution?.firstTouch?.landing ? `- Landing: ${data.attribution?.firstTouch?.landing}\n` : ""}` +
        `${data.attribution?.firstTouch?.referrer ? `- Referrer: ${data.attribution?.firstTouch?.referrer}\n` : ""}` +
        `- UTM: source=${data.attribution?.firstTouch?.utm_source || "-"} · medium=${data.attribution?.firstTouch?.utm_medium || "-"} · campaign=${data.attribution?.firstTouch?.utm_campaign || "-"} · term=${data.attribution?.firstTouch?.utm_term || "-"} · content=${data.attribution?.firstTouch?.utm_content || "-"}`
    );
  }
  if (hasLT) {
    attributionLines.push(
      `\nLast touch:\n` +
        `${data.attribution?.lastTouch?.ts ? `- TS: ${data.attribution?.lastTouch?.ts}\n` : ""}` +
        `${data.attribution?.lastTouch?.landing ? `- Landing: ${data.attribution?.lastTouch?.landing}\n` : ""}` +
        `${data.attribution?.lastTouch?.referrer ? `- Referrer: ${data.attribution?.lastTouch?.referrer}\n` : ""}` +
        `- UTM: source=${data.attribution?.lastTouch?.utm_source || "-"} · medium=${data.attribution?.lastTouch?.utm_medium || "-"} · campaign=${data.attribution?.lastTouch?.utm_campaign || "-"} · term=${data.attribution?.lastTouch?.utm_term || "-"} · content=${data.attribution?.lastTouch?.utm_content || "-"}`
    );
  }
  if (hasMeta) {
    attributionLines.push(
      `\nMeta:\n` +
        `${data.meta?.referer ? `- Referer: ${data.meta?.referer}\n` : ""}` +
        `${data.meta?.userAgent ? `- User-Agent: ${data.meta?.userAgent}\n` : ""}`
    );
  }

  const textWithAttribution = (text + (attributionLines.length ? `\n\nOrigen / Atribución:${attributionLines.join("\n")}` : "")).trim();

  return { html, text: textWithAttribution };
}

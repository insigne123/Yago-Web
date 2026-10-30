import { Webhook } from "svix";
import { z } from "zod";

export type MailNotificationConfig = {
  apiKey: string;
  webhookSecret: string;
  mailboxAddress: string;
  receivingAddress: string;
  notifyTo: string;
  notifyFrom: string;
};

const MAX_BODY_BYTES = 256 * 1024;
const PREFIX = "[Aviso pgongora]";
const receivedSchema = z.object({
  type: z.literal("email.received"),
  created_at: z.string().optional(),
  data: z.object({
    email_id: z.string().uuid(),
    created_at: z.string().optional(),
    from: z.string().max(2000),
    to: z.array(z.string().max(2000)).max(1000),
    cc: z.array(z.string().max(2000)).max(1000).optional(),
    bcc: z.array(z.string().max(2000)).max(1000).optional(),
    received_for: z.array(z.string().max(2000)).max(1000).optional(),
    subject: z.string().max(10_000).nullable().optional(),
    attachments: z.array(z.object({ filename: z.string().max(2000).nullable().optional() })).max(1000).optional(),
  }),
});

function respond(status: number, data: Record<string, unknown>) {
  return Response.json(data, { status, headers: { "Cache-Control": "no-store" } });
}

function address(value: string) {
  if (/[\r\n]/.test(value)) return "";
  const result = (value.trim().match(/<([^<>]+)>\s*$/)?.[1] || value).trim().toLowerCase();
  return /^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(result) ? result : "";
}

function line(value: string, limit: number) {
  return value.replace(/[\u0000-\u001f\u007f]/g, " ").replace(/\s+/g, " ").trim().slice(0, limit);
}

function escape(value: string) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
}

async function boundedBody(request: Request) {
  const declared = Number(request.headers.get("content-length") || 0);
  if (declared > MAX_BODY_BYTES) return null;
  const reader = request.body?.getReader();
  if (!reader) return "";
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > MAX_BODY_BYTES) {
        await reader.cancel();
        return null;
      }
      chunks.push(value);
    }
    return Buffer.concat(chunks).toString("utf8");
  } finally {
    reader.releaseLock();
  }
}

/** Procesa exclusivamente eventos firmados; no consulta el cuerpo ni descarga adjuntos. */
export async function handleMailNotification(
  request: Request,
  config: MailNotificationConfig,
  fetchImpl: typeof fetch = fetch,
) {
  if (request.method !== "POST") return respond(405, { ok: false });
  const mailbox = address(config.mailboxAddress);
  const receiving = address(config.receivingAddress);
  const notifyTo = address(config.notifyTo);
  const notifyFrom = address(config.notifyFrom);
  if (!config.apiKey || !config.webhookSecret || !mailbox || !receiving || !notifyTo || !notifyFrom || [mailbox, receiving].includes(notifyTo)) {
    return respond(503, { ok: false, error: "Notificador no configurado." });
  }
  const svixId = request.headers.get("svix-id") || "";
  const svixTimestamp = request.headers.get("svix-timestamp") || "";
  const svixSignature = request.headers.get("svix-signature") || "";
  if (!svixId || !svixTimestamp || !svixSignature) return respond(400, { ok: false, error: "Firma requerida." });

  let raw: string | null;
  try { raw = await boundedBody(request); } catch { return respond(400, { ok: false, error: "Solicitud inválida." }); }
  if (raw === null) return respond(413, { ok: false, error: "Solicitud demasiado grande." });

  let event: unknown;
  try {
    // Svix 2 verifica sin devolver JSON: se analiza únicamente después de verificar el texto original.
    new Webhook(config.webhookSecret).verify(raw, {
      "svix-id": svixId,
      "svix-timestamp": svixTimestamp,
      "svix-signature": svixSignature,
    });
    event = JSON.parse(raw);
  } catch {
    return respond(400, { ok: false, error: "Evento o firma inválidos." });
  }
  if (!event || typeof event !== "object" || !("type" in event) || typeof event.type !== "string") {
    return respond(400, { ok: false, error: "Evento inválido." });
  }
  if (event.type !== "email.received") return respond(200, { ok: true, ignored: true });
  const parsed = receivedSchema.safeParse(event);
  if (!parsed.success) return respond(400, { ok: false, error: "Evento de recepción inválido." });
  const email = parsed.data.data;
  const recipients = [...email.to, ...(email.cc || []), ...(email.bcc || []), ...(email.received_for || [])].map(address);
  if (!recipients.some((recipient) => recipient === mailbox || recipient === receiving)) {
    return respond(200, { ok: true, ignored: true });
  }
  if (address(email.from) === notifyFrom && (email.subject || "").startsWith(PREFIX)) {
    return respond(200, { ok: true, ignored: true });
  }

  const sender = line(email.from, 320) || "Sin remitente indicado";
  const subject = line(email.subject || "", 180) || "Sin asunto";
  const dateValue = email.created_at || parsed.data.created_at;
  const date = dateValue ? new Date(dateValue) : null;
  const receivedAt = date && Number.isFinite(date.getTime()) ? date.toLocaleString("es-CL", { timeZone: "America/Santiago" }) : "No indicado";
  const attachments = email.attachments || [];
  const filenames = attachments.slice(0, 20).map((attachment) => line(attachment.filename || "", 200) || "Archivo sin nombre");
  if (attachments.length > filenames.length) filenames.push(`Y ${attachments.length - filenames.length} archivos adicionales`);
  const text = [
    `Llegó un correo a ${mailbox}.`, "",
    `Remitente: ${sender}`, `Asunto: ${subject}`, `Recibido (Chile): ${receivedAt}`,
    `Adjuntos: ${attachments.length}`, ...filenames.map((filename) => `- ${filename}`), "",
    `Referencia del correo: ${email.email_id}`, "",
    "Puedes pedirme: Revisa pgongora y abre este correo.",
    "Bandeja en Resend: https://resend.com/emails/receiving",
    "Este aviso contiene solo metadatos; el mensaje y los archivos permanecen en Resend.",
  ].join("\n");
  const html = `<h2>Nuevo correo en ${escape(mailbox)}</h2>
<p><strong>Remitente:</strong> ${escape(sender)}<br/><strong>Asunto:</strong> ${escape(subject)}<br/><strong>Recibido (Chile):</strong> ${escape(receivedAt)}</p>
<p><strong>Adjuntos:</strong> ${attachments.length}</p>${filenames.length ? `<ul>${filenames.map((filename) => `<li>${escape(filename)}</li>`).join("")}</ul>` : ""}
<p><strong>Referencia:</strong> ${email.email_id}</p>
<p>Puedes pedirme: <em>Revisa pgongora y abre este correo.</em></p>
<p><a href="https://resend.com/emails/receiving">Abrir bandeja de Resend</a></p>
<p>Este aviso contiene solo metadatos; el mensaje y los archivos permanecen en Resend.</p>`;

  try {
    const response = await fetchImpl("https://api.resend.com/emails", {
      method: "POST", redirect: "error", signal: AbortSignal.timeout(15_000),
      headers: {
        authorization: `Bearer ${config.apiKey}`,
        "content-type": "application/json",
        "Idempotency-Key": `pgongora-notification:${email.email_id}`,
      },
      body: JSON.stringify({
        from: config.notifyFrom, to: [notifyTo], subject: `${PREFIX} Nuevo correo: ${subject}`,
        text, html, headers: { "Auto-Submitted": "auto-generated" },
        tags: [{ name: "source", value: "pgongora_notification" }],
      }),
    });
    if (!response.ok) {
      await response.body?.cancel();
      return respond(503, { ok: false, error: "Envío del aviso pendiente de reintento." });
    }
    const result = await response.json() as { id?: unknown };
    if (typeof result.id !== "string") return respond(503, { ok: false, error: "Respuesta de envío inválida." });
    return respond(200, { ok: true, notification_id: result.id });
  } catch {
    return respond(503, { ok: false, error: "Envío del aviso pendiente de reintento." });
  }
}

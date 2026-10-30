import { createHash } from "node:crypto";
import { readFile, stat, access, mkdir, writeFile } from "node:fs/promises";
import { basename, dirname, join, resolve } from "node:path";

const API = "https://api.resend.com";
const MAX_SEND_BYTES = 38_000_000; // Margen para los encabezados MIME dentro del límite de 40 MB de Resend.
const MAX_DOWNLOAD_BYTES = 50_000_000;
const ID = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/i;

export function emailAddress(value) {
  if (typeof value !== "string" || /[\r\n]/.test(value)) throw new Error("Dirección de correo inválida.");
  const text = value.trim();
  const address = (text.match(/<([^<>]+)>\s*$/)?.[1] || text).trim().toLowerCase();
  if (!/^[^\s<>@,;]+@[^\s<>@,;]+\.[^\s<>@,;]+$/.test(address)) throw new Error("Dirección de correo inválida.");
  return address;
}

function addresses(value) {
  const items = Array.isArray(value) ? value : value ? [value] : [];
  return items.flatMap((item) => { try { return [emailAddress(item)]; } catch { return []; } });
}

function header(email, name) {
  const entry = Object.entries(email.headers || {}).find(([key]) => key.toLowerCase() === name.toLowerCase());
  return entry ? String(entry[1]) : "";
}

export function belongsToMailbox(email, config) {
  const targets = new Set(addresses([config.address, config.receivingAddress].filter(Boolean)));
  return [email.to, email.cc, email.bcc, email.received_for, header(email, "x-gm-original-to"), header(email, "x-original-to")]
    .flatMap(addresses).some((address) => targets.has(address));
}

function assertId(value) {
  if (!ID.test(value || "")) throw new Error("El identificador de correo o adjunto no es válido.");
  return value;
}

function attachmentSummary(item) {
  return { id: item.id, filename: item.filename, contentType: item.content_type, size: item.size, disposition: item.content_disposition };
}

export function messageSummary(email) {
  return {
    id: email.id, receivedAt: email.created_at, from: email.from, to: email.to, subject: email.subject,
    replyTo: email.reply_to || [], attachments: (email.attachments || []).map(attachmentSummary),
  };
}

function messageId(value) {
  if (typeof value !== "string" || !/^<[^<>\r\n]{1,998}>$/.test(value)) throw new Error("El correo original no tiene un Message-ID válido para responder en el hilo.");
  return value;
}

export async function buildMail(config, { to, subject, text, files = [], original }, { maxBytes = MAX_SEND_BYTES } = {}) {
  if (typeof text !== "string" || !text.trim()) throw new Error("La respuesta debe tener contenido.");
  const from = emailAddress(config.address);
  if (typeof config.fromName !== "string" || /[\r\n<>]/.test(config.fromName)) throw new Error("Nombre del remitente inválido.");
  let recipients;
  const headers = {};
  if (original) {
    if (!belongsToMailbox(original, config)) throw new Error("El correo no pertenece a esta dirección.");
    const replies = original.reply_to || [];
    recipients = addresses(Array.isArray(replies) && replies.length ? replies : original.from);
    if (!recipients.length) throw new Error("El remitente del correo original no es válido.");
    const originalId = messageId(original.message_id);
    headers["In-Reply-To"] = originalId;
    const references = header(original, "references").match(/<[^<>\r\n]{1,998}>/g) || [];
    headers.References = [...new Set([...references, originalId])].join(" ");
    subject = /^re\s*:/i.test(original.subject || "") ? original.subject : `Re: ${original.subject || "Sin asunto"}`;
  } else {
    const inputs = Array.isArray(to) ? to : [to];
    recipients = inputs.map(emailAddress);
  }
  if (!recipients.length || recipients.length > 50) throw new Error("La cantidad de destinatarios no es válida.");
  if (typeof subject !== "string" || !subject.trim() || /[\r\n]/.test(subject)) throw new Error("El asunto no es válido.");

  const attachments = [];
  let encodedSize = Buffer.byteLength(text, "utf8") + Buffer.byteLength(subject, "utf8");
  for (const path of files) {
    const info = await stat(path);
    if (!info.isFile()) throw new Error("El adjunto debe ser un archivo.");
    encodedSize += 4 * Math.ceil(info.size / 3);
    if (encodedSize > maxBytes) throw new Error("El correo excede el tamaño permitido para adjuntos codificados en Base64.");
    const contents = await readFile(path);
    attachments.push({ filename: basename(path), content: contents.toString("base64") });
  }
  const payload = {
    from: `${config.fromName} <${from}>`, to: [...new Set(recipients)], reply_to: from,
    subject, text, ...(Object.keys(headers).length ? { headers } : {}),
    ...(attachments.length ? { attachments } : {}),
  };
  if (Buffer.byteLength(JSON.stringify(payload), "utf8") > maxBytes) throw new Error("El correo excede el tamaño permitido para envío.");
  const digest = createHash("sha256").update(JSON.stringify(payload)).digest("hex");
  const idempotencyKey = `${from}:${original ? original.id : "new"}:${digest}`;
  const preview = {
    from: payload.from, to: payload.to, subject: payload.subject, text: payload.text,
    replyTo: payload.reply_to, headers: payload.headers || {},
    attachments: attachments.map((file) => ({ filename: file.filename, size: Buffer.byteLength(file.content, "base64") })),
    idempotencyKey,
  };
  return { payload, idempotencyKey, preview };
}

async function limitedBuffer(response, limit) {
  const length = Number(response.headers.get("content-length") || 0);
  if (length > limit) throw new Error("El recurso supera el tamaño máximo de descarga.");
  const chunks = [];
  let total = 0;
  if (!response.body) return Buffer.alloc(0);
  for await (const part of response.body) {
    total += part.length;
    if (total > limit) throw new Error("El recurso supera el tamaño máximo de descarga.");
    chunks.push(Buffer.from(part));
  }
  return Buffer.concat(chunks);
}

export class ResendMailbox {
  constructor({ apiKey, config, fetchImpl = fetch, wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms)) }) {
    if (!apiKey) throw new Error("Falta la clave de Resend.");
    emailAddress(config.address);
    if (config.receivingAddress) emailAddress(config.receivingAddress);
    this.apiKey = apiKey;
    this.config = config;
    this.fetch = fetchImpl;
    this.wait = wait;
  }

  async request(path, { method = "GET", body, idempotencyKey } = {}) {
    for (let attempt = 0; attempt < 3; attempt++) {
      const response = await this.fetch(`${API}${path}`, {
        method, redirect: "error", signal: AbortSignal.timeout(30_000),
        headers: {
          authorization: `Bearer ${this.apiKey}`,
          ...(body ? { "content-type": "application/json" } : {}),
          ...(idempotencyKey ? { "Idempotency-Key": idempotencyKey } : {}),
        },
        ...(body ? { body: JSON.stringify(body) } : {}),
      });
      if (response.status === 429 && method === "GET" && attempt < 2) {
        await response.body?.cancel();
        const seconds = Number(response.headers.get("retry-after") || 1);
        await this.wait(Math.min(10, Math.max(1, Number.isFinite(seconds) ? seconds : 1)) * 1000);
        continue;
      }
      const bytes = await limitedBuffer(response, 40_000_000);
      let data;
      try { data = JSON.parse(bytes.toString("utf8")); } catch { throw new Error(`Resend devolvió una respuesta no válida (HTTP ${response.status}).`); }
      if (!response.ok) {
        const detail = String(data.message || data.error?.message || "Solicitud rechazada").replaceAll(this.apiKey, "[clave omitida]");
        const error = new Error(`Resend HTTP ${response.status}: ${detail}`);
        error.status = response.status;
        throw error;
      }
      return data;
    }
  }

  async check() {
    await this.request("/emails/receiving?limit=1");
    return { address: this.config.address, canReadReceiving: true, receivingAddress: this.config.receivingAddress || null };
  }

  async list({ limit = 20, after, maxPages = 20 } = {}) {
    if (!Number.isInteger(limit) || limit < 1 || limit > 100) throw new Error("Limit debe estar entre 1 y 100.");
    if (after) assertId(after);
    const messages = [];
    let cursor = after;
    for (let scannedPages = 1; scannedPages <= maxPages; scannedPages++) {
      const params = new URLSearchParams({ limit: "100" });
      if (cursor) params.set("after", cursor);
      const page = await this.request(`/emails/receiving?${params}`);
      if (!Array.isArray(page.data)) throw new Error("La lista de correos de Resend no es válida.");
      for (let index = 0; index < page.data.length; index++) {
        const email = page.data[index];
        if (belongsToMailbox(email, this.config)) messages.push(messageSummary(email));
        if (messages.length === limit) {
          return { address: this.config.address, messages, scannedPages, nextCursor: email.id, hasMore: index < page.data.length - 1 || Boolean(page.has_more) };
        }
      }
      if (!page.has_more || !page.data.length) return { address: this.config.address, messages, scannedPages, nextCursor: null, hasMore: false };
      const nextCursor = assertId(page.data.at(-1).id);
      if (nextCursor === cursor) throw new Error("Resend devolvió un cursor repetido.");
      cursor = nextCursor;
    }
    return { address: this.config.address, messages, nextCursor: cursor, hasMore: true, scanLimited: true };
  }

  async original(id) {
    const email = await this.request(`/emails/receiving/${assertId(id)}?html_format=cid`);
    if (!belongsToMailbox(email, this.config)) throw new Error("El correo no pertenece a esta dirección.");
    return email;
  }

  async read(id) {
    const email = await this.original(id);
    return { ...messageSummary(email), messageId: email.message_id, text: email.text || null, html: email.text ? undefined : email.html, authentication: email.authentication || null };
  }

  async attachments(id) {
    await this.original(id);
    const items = [];
    let cursor;
    do {
      const params = new URLSearchParams({ limit: "100" });
      if (cursor) params.set("after", cursor);
      const page = await this.request(`/emails/receiving/${assertId(id)}/attachments?${params}`);
      if (!Array.isArray(page.data)) throw new Error("La lista de adjuntos no es válida.");
      items.push(...page.data.map(attachmentSummary));
      if (!page.has_more || !page.data.length) return items;
      const nextCursor = assertId(page.data.at(-1).id);
      if (cursor === nextCursor) throw new Error("Resend devolvió un cursor de adjuntos repetido.");
      cursor = nextCursor;
      if (items.length >= 1000) throw new Error("La cantidad de adjuntos excede el límite de consulta.");
    } while (true);
  }

  async download(id, attachmentId, directory) {
    await this.original(id);
    assertId(attachmentId);
    const attachment = await this.request(`/emails/receiving/${assertId(id)}/attachments/${attachmentId}`);
    const url = new URL(attachment.download_url);
    if (url.protocol !== "https:") throw new Error("La URL de descarga de Resend no utiliza HTTPS.");
    if (attachment.size > MAX_DOWNLOAD_BYTES) throw new Error("El adjunto supera el tamaño máximo de descarga.");
    const response = await this.fetch(url, { redirect: "error", signal: AbortSignal.timeout(60_000) });
    if (!response.ok) throw new Error(`No se pudo descargar el adjunto (HTTP ${response.status}).`);
    const contents = await limitedBuffer(response, MAX_DOWNLOAD_BYTES);
    const root = resolve(directory);
    await access(dirname(root));
    await mkdir(root, { recursive: true });
    const safeName = String(attachment.filename || "adjunto").replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_").replace(/^[. ]+|[. ]+$/g, "").slice(0, 100) || "adjunto";
    const filename = join(root, `${attachmentId}_${safeName}`);
    await writeFile(filename, contents, { flag: "wx" });
    return { ...attachmentSummary(attachment), path: filename, downloadedBytes: contents.length };
  }

  async compose(options, { send = false } = {}) {
    const mail = await buildMail(this.config, options);
    if (!send) return { mode: "preview", ...mail.preview };
    const result = await this.request("/emails", { method: "POST", body: mail.payload, idempotencyKey: mail.idempotencyKey });
    return { mode: "sent", accepted: true, id: result.id, ...mail.preview };
  }

  async reply(id, options, { send = false } = {}) {
    const original = await this.original(id);
    return this.compose({ ...options, original }, { send });
  }
}

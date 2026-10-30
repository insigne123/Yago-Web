import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, readFile, rm, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { ResendMailbox, belongsToMailbox, buildMail } from "../../scripts/mailbox/resend-client.mjs";

const EMAIL_ID = "11111111-1111-4111-8111-111111111111";
const SECOND_ID = "22222222-2222-4222-8222-222222222222";
const ATTACHMENT_ID = "33333333-3333-4333-8333-333333333333";
const KEY = "re_test_fixture_not_a_real_key";
const config = { address: "pgongora@yago.cl", fromName: "YAGO", receivingAddress: "pgongora@test-tenant.resend.app" };
const original = {
  id: EMAIL_ID, to: ["PGongora@yago.cl"], from: "Cliente <cliente@example.com>", reply_to: ["Respuestas <respuesta@example.com>"],
  subject: "Documentos del proyecto", message_id: "<original@example.com>", text: "Adjunto mis documentos.",
  headers: { References: "<anterior@example.com> <anterior@example.com>" }, attachments: [],
};

function json(data, status = 200, headers = {}) {
  return new Response(JSON.stringify(data), { status, headers: { "content-type": "application/json", ...headers } });
}

async function fixtures(t) {
  const directory = await mkdtemp(join(process.env.YAGO_MAIL_TEST_TMP || tmpdir(), "yago-mail-test-"));
  t.after(() => rm(directory, { recursive: true, force: true }));
  return directory;
}

test("list scans past other recipients and returns only the configured mailbox", async () => {
  const calls = [];
  const client = new ResendMailbox({ apiKey: KEY, config, fetchImpl: async (url) => {
    calls.push(url);
    if (!new URL(url).searchParams.has("after")) return json({ has_more: true, data: [{ id: SECOND_ID, to: ["otro@yago.cl"], subject: "Privado" }] });
    return json({ has_more: false, data: [original] });
  } });
  const result = await client.list();
  assert.equal(result.messages.length, 1);
  assert.equal(result.messages[0].id, EMAIL_ID);
  assert.ok(!JSON.stringify(result).includes("Privado"));
  assert.equal(new URL(calls[1]).searchParams.get("after"), SECOND_ID);
});

test("forwarded recipient and original-recipient headers identify mailbox messages", () => {
  assert.ok(belongsToMailbox({ to: [config.receivingAddress] }, config));
  assert.ok(belongsToMailbox({ received_for: [config.address] }, config));
  assert.ok(belongsToMailbox({ headers: { "X-Gm-Original-To": config.address } }, config));
  assert.ok(belongsToMailbox({ cc: [config.address] }, config));
  assert.ok(!belongsToMailbox({ to: ["otro@yago.cl"] }, config));
});

test("reply uses Reply-To, fixed sender, threading and Base64 file content", async (t) => {
  const directory = await fixtures(t);
  const path = join(directory, "resultado.txt");
  const contents = Buffer.from("Resultado verificado.");
  await writeFile(path, contents);
  const mail = await buildMail(config, { original, text: "Adjunto el resultado.", files: [path] });
  assert.equal(mail.payload.from, "YAGO <pgongora@yago.cl>");
  assert.deepEqual(mail.payload.to, ["respuesta@example.com"]);
  assert.equal(mail.payload.reply_to, config.address);
  assert.equal(mail.payload.subject, "Re: Documentos del proyecto");
  assert.equal(mail.payload.headers["In-Reply-To"], original.message_id);
  assert.equal(mail.payload.headers.References, "<anterior@example.com> <original@example.com>");
  assert.deepEqual(Buffer.from(mail.payload.attachments[0].content, "base64"), contents);
  assert.equal(mail.preview.attachments[0].size, contents.length);
  assert.ok(!JSON.stringify(mail.preview).includes(mail.payload.attachments[0].content));
});

test("reply remains a preview unless sending is explicitly requested", async () => {
  const calls = [];
  const client = new ResendMailbox({ apiKey: KEY, config, fetchImpl: async (url, options) => {
    calls.push({ url, options });
    return options.method === "POST" ? json({ id: SECOND_ID }) : json(original);
  } });
  const preview = await client.reply(EMAIL_ID, { text: "Gracias por los documentos." });
  assert.equal(preview.mode, "preview");
  assert.equal(calls.filter((call) => call.options.method === "POST").length, 0);
  const sent = await client.reply(EMAIL_ID, { text: "Gracias por los documentos." }, { send: true });
  assert.equal(sent.mode, "sent");
  assert.equal(sent.id, SECOND_ID);
  const submission = calls.find((call) => call.options.method === "POST");
  assert.equal(submission.options.headers["Idempotency-Key"], preview.idempotencyKey);
});

test("messages outside this mailbox cannot be displayed or replied to", async () => {
  let posts = 0;
  const client = new ResendMailbox({ apiKey: KEY, config, fetchImpl: async (_url, options) => {
    if (options.method === "POST") posts++;
    return json({ ...original, to: ["otro@yago.cl"] });
  } });
  await assert.rejects(client.read(EMAIL_ID), /no pertenece/);
  await assert.rejects(client.reply(EMAIL_ID, { text: "Respuesta" }, { send: true }), /no pertenece/);
  assert.equal(posts, 0);
});

test("invalid threading and oversized encoded payload are rejected before sending", async (t) => {
  await assert.rejects(buildMail(config, { original: { ...original, message_id: "<id>\r\nBcc: otro@example.com" }, text: "Hola" }), /Message-ID/);
  const directory = await fixtures(t);
  const path = join(directory, "archivo.txt");
  await writeFile(path, Buffer.alloc(100));
  await assert.rejects(buildMail(config, { to: "cliente@example.com", subject: "Documento", text: "Adjunto", files: [path] }, { maxBytes: 100 }), /tamaño/);
});

test("identical submissions have the same idempotency key, changed responses do not", async () => {
  const first = await buildMail(config, { original, text: "Respuesta A" });
  const retry = await buildMail(config, { original, text: "Respuesta A" });
  const changed = await buildMail(config, { original, text: "Respuesta B" });
  assert.equal(first.idempotencyKey, retry.idempotencyKey);
  assert.notEqual(first.idempotencyKey, changed.idempotencyKey);
});

test("attachment downloads do not send API credentials to the CDN or allow path traversal", async (t) => {
  const directory = await fixtures(t);
  const destination = join(directory, "descargas");
  const downloadUrl = "https://inbound-cdn.resend.com/test?signature=temporary";
  const calls = [];
  const client = new ResendMailbox({ apiKey: KEY, config, fetchImpl: async (url, options) => {
    calls.push({ url: String(url), options });
    if (String(url) === downloadUrl) return new Response("contenido del archivo");
    if (String(url).includes(`/attachments/${ATTACHMENT_ID}`)) return json({ id: ATTACHMENT_ID, filename: "../../resultado.txt", size: 21, download_url: downloadUrl });
    return json(original);
  } });
  const result = await client.download(EMAIL_ID, ATTACHMENT_ID, destination);
  assert.equal(dirname(result.path), resolve(destination));
  assert.equal(await readFile(result.path, "utf8"), "contenido del archivo");
  assert.equal(calls.find((call) => call.url === downloadUrl).options.headers, undefined);
  assert.ok(!JSON.stringify(result).includes("signature="));
});

test("API failures redact the key and GET rate limits respect retry-after", async () => {
  const waits = [];
  let attempts = 0;
  const client = new ResendMailbox({ apiKey: KEY, config, wait: async (time) => waits.push(time), fetchImpl: async () => {
    if (attempts++ === 0) return json({ message: "Rate limited" }, 429, { "retry-after": "2" });
    return json({ data: [] });
  } });
  await client.check();
  assert.deepEqual(waits, [2000]);
  const forbidden = new ResendMailbox({ apiKey: KEY, config, fetchImpl: async () => json({ message: `Restricted key ${KEY}` }, 403) });
  await assert.rejects(forbidden.check(), (error) => error.status === 403 && !error.message.includes(KEY));
});

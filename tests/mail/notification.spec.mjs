import test from "node:test";
import assert from "node:assert/strict";
import { Webhook } from "svix";
import { handleMailNotification } from "../../src/lib/mail-notification.ts";

const secret = `whsec_${Buffer.from("notification-test-fixture-secret-32").toString("base64")}`;
const emailId = "11111111-1111-4111-8111-111111111111";
const config = {
  apiKey: "re_notification_test_not_real", webhookSecret: secret,
  mailboxAddress: "pgongora@yago.cl", receivingAddress: "pgongora@galook.resend.app",
  notifyTo: "nicolas.yarur.g@yago.cl", notifyFrom: "YAGO <no-reply@yago.cl>",
};
const event = {
  type: "email.received", created_at: "2026-10-05T16:00:00.000Z",
  data: {
    email_id: emailId, from: "Cliente <cliente@example.com>", to: [config.receivingAddress],
    subject: "Documentos del proyecto", attachments: [{ filename: "propuesta.pdf" }],
    text: "Contenido privado y código 123456", html: "https://private.example/token",
  },
};

function signed(value = event, { date = new Date(), raw, id = "msg_test_notification" } = {}) {
  const body = raw === undefined ? JSON.stringify(value) : raw;
  return new Request("https://yago.cl/api/webhooks/resend", {
    method: "POST", headers: {
      "content-type": "application/json", "svix-id": id,
      "svix-timestamp": String(Math.floor(date.getTime() / 1000)),
      "svix-signature": new Webhook(secret).sign(id, date, body),
    }, body,
  });
}

function sentResponse() {
  return Response.json({ id: "22222222-2222-4222-8222-222222222222" });
}

test("only signed mailbox receipts send an escaped metadata notice to the fixed destination", async () => {
  let call;
  const value = { ...event, data: { ...event.data, subject: '<img src="x">\r\nBcc: test', attachments: [{ filename: "<script>.pdf" }] } };
  const response = await handleMailNotification(signed(value), config, async (url, options) => {
    call = { url, options, payload: JSON.parse(options.body) };
    return sentResponse();
  });
  assert.equal(response.status, 200);
  assert.deepEqual(call.payload.to, [config.notifyTo]);
  assert.equal(call.options.headers["Idempotency-Key"], `pgongora-notification:${emailId}`);
  assert.ok(call.payload.html.includes("&lt;script&gt;.pdf"));
  assert.ok(!call.payload.html.includes('<img src="x">'));
  assert.ok(!call.payload.subject.includes("\r\n"));
  assert.ok(!JSON.stringify(call.payload).includes("123456"));
  assert.ok(!JSON.stringify(call.payload).includes("private.example"));
  assert.equal(call.payload.attachments, undefined);
  assert.equal(call.payload.reply_to, undefined);
  assert.equal(call.payload.headers["Auto-Submitted"], "auto-generated");
});

test("missing, tampered and expired signatures never send an email", async () => {
  const fetchImpl = async () => { throw new Error("Must not send"); };
  const unsigned = new Request("https://yago.cl/api/webhooks/resend", { method: "POST", body: JSON.stringify(event) });
  assert.equal((await handleMailNotification(unsigned, config, fetchImpl)).status, 400);
  const request = signed();
  const tampered = new Request(request.url, { method: "POST", headers: request.headers, body: JSON.stringify({ ...event, type: "tampered" }) });
  assert.equal((await handleMailNotification(tampered, config, fetchImpl)).status, 400);
  assert.equal((await handleMailNotification(signed(event, { date: new Date(Date.now() - 10 * 60_000) }), config, fetchImpl)).status, 400);
});

test("other recipients, outgoing events and a received notification loop are ignored", async () => {
  const fetchImpl = async () => { throw new Error("Must not send"); };
  for (const value of [
    { type: "email.sent", data: {} },
    { ...event, data: { ...event.data, to: ["otro@galook.resend.app"] } },
    { ...event, data: { ...event.data, from: config.notifyFrom, subject: "[Aviso pgongora] Nuevo correo: ejemplo" } },
  ]) {
    const response = await handleMailNotification(signed(value), config, fetchImpl);
    assert.equal(response.status, 200);
    assert.equal((await response.json()).ignored, true);
  }
});

test("public mailbox and forwarded received_for matches are accepted", async () => {
  for (const data of [
    { ...event.data, to: ["PGongora@yago.cl"] },
    { ...event.data, to: ["otro@example.com"], received_for: ["pgongora@yago.cl"] },
  ]) assert.equal((await handleMailNotification(signed({ ...event, data }), config, async () => sentResponse())).status, 200);
});

test("malformed receipt and both declared and streamed oversized bodies are rejected", async () => {
  const fetchImpl = async () => { throw new Error("Must not send"); };
  assert.equal((await handleMailNotification(signed({ ...event, data: { ...event.data, email_id: "bad-id" } }), config, fetchImpl)).status, 400);
  assert.equal((await handleMailNotification(signed(event, { raw: "not-json" }), config, fetchImpl)).status, 400);
  assert.equal((await handleMailNotification(signed(event, { raw: "x".repeat(256 * 1024 + 1) }), config, fetchImpl)).status, 413);
  const declared = signed();
  declared.headers.set("content-length", String(256 * 1024 + 1));
  assert.equal((await handleMailNotification(declared, config, fetchImpl)).status, 413);
});

test("missing configuration or notification address pointing at the mailbox cannot send", async () => {
  const fetchImpl = async () => { throw new Error("Must not send"); };
  for (const changes of [{ webhookSecret: "" }, { apiKey: "" }, { notifyTo: config.mailboxAddress }, { notifyTo: config.receivingAddress }]) {
    assert.equal((await handleMailNotification(signed(), { ...config, ...changes }, fetchImpl)).status, 503);
  }
});

test("Resend failures return a retryable status without leaking upstream contents", async () => {
  const response = await handleMailNotification(signed(), config, async () => Response.json({ message: config.apiKey }, { status: 429 }));
  assert.equal(response.status, 503);
  assert.ok(!(await response.text()).includes(config.apiKey));
  const timedOut = await handleMailNotification(signed(), config, async () => { throw new Error("Timeout"); });
  assert.equal(timedOut.status, 503);
});

test("redeliveries use the same idempotency key and identical message regardless of Svix attempt", async () => {
  const sends = [];
  const fetchImpl = async (_url, options) => { sends.push(options); return sentResponse(); };
  for (const id of ["msg_first_attempt", "msg_replay_attempt"]) await handleMailNotification(signed(event, { id }), config, fetchImpl);
  assert.equal(sends[0].headers["Idempotency-Key"], sends[1].headers["Idempotency-Key"]);
  assert.equal(sends[0].body, sends[1].body);
});

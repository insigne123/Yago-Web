import assert from "node:assert/strict";
import test from "node:test";
import { AXIS_PUBLICATION_CONSENT_TEXT, axisFeedbackSchema, handleAxisFeedback } from "../../src/lib/axis-feedback.ts";

const id = "e6781e84-cd85-44a6-a667-187dd1fd54cb";
const payload = { submissionId: id, usage: "Uso consultas por lote.", consent: true };
const request = (data, headers = {}) => new Request("https://yago.cl/api/axis-feedback", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: typeof data === "string" ? data : JSON.stringify(data) });
function setup() {
  const sent = [];
  return { sent, config: { to: "owner@example.com", from: "YAGO <no-reply@example.com>", publicOrigin: "https://yago.cl", send: async (message) => { sent.push(message); } } };
}

test("opinions can be sent without identity, with every question recorded and a stable reference", async () => {
  const { sent, config } = setup();
  const result = await handleAxisFeedback(request(payload), config);
  assert.equal(result.status, 200);
  assert.deepEqual(await result.json(), { ok: true, feedbackId: id });
  assert.equal(sent.length, 1);
  assert.equal(sent[0].to, "owner@example.com");
  assert.equal(sent[0].replyTo, undefined);
  assert.equal(sent[0].idempotencyKey, `axis-feedback:${id}`);
  assert.ok(sent[0].text.includes("8. ¿Recomendarías AXIS"));
  assert.ok(sent[0].text.includes("No autoriza publicación"));
});

test("negative recommendations and problems are accepted and HTML is escaped", async () => {
  const { sent, config } = setup();
  const result = await handleAxisFeedback(request({ ...payload, usage: "<script>alert(1)</script>", recommendation: "No", recommendationReason: "Necesito mejoras.", email: "user@example.com" }), config);
  assert.equal(result.status, 200);
  assert.equal(sent[0].replyTo, "user@example.com");
  assert.ok(sent[0].html.includes("&lt;script&gt;"));
  assert.ok(!sent[0].html.includes("<script>"));
  assert.ok(sent[0].text.includes("Necesito mejoras."));
});

test("empty feedback, missing consent, invalid choices and malformed email do not send mail", async () => {
  for (const data of [{ submissionId: id, consent: true }, { ...payload, consent: false }, { ...payload, ease: "5 stars" }, { ...payload, features: ["Inventado"] }, { ...payload, email: "bad\r\nBcc: user@example.com" }]) {
    const { sent, config } = setup();
    assert.equal((await handleAxisFeedback(request(data), config)).status, 400);
    assert.equal(sent.length, 0);
  }
  assert.equal(axisFeedbackSchema.safeParse({ ...payload, usage: "a".repeat(1801) }).success, false);
});

test("honeypot, wrong origin and malformed JSON avoid delivery", async () => {
  const { sent, config } = setup();
  assert.equal((await handleAxisFeedback(request({ hp: "bot" }), config)).status, 200);
  assert.equal((await handleAxisFeedback(request(payload, { Origin: "https://other.example" }), config)).status, 403);
  assert.equal((await handleAxisFeedback(request("broken"), config)).status, 400);
  assert.equal((await handleAxisFeedback(request(payload, { "Content-Type": "text/plain" }), config)).status, 415);
  assert.equal(sent.length, 0);
});

test("actual body size is limited even when content-length is omitted", async () => {
  const { sent, config } = setup();
  assert.equal((await handleAxisFeedback(request({ ...payload, usage: "a".repeat(70000) }), config)).status, 413);
  assert.equal(sent.length, 0);
});

test("send failures are generic and a retry keeps the same mail and idempotency key", async () => {
  const { sent, config } = setup();
  await handleAxisFeedback(request(payload), config);
  await handleAxisFeedback(request(payload), config);
  assert.deepEqual(sent[0], sent[1]);
  const result = await handleAxisFeedback(request(payload), { ...config, send: async () => { throw new Error("private-api-key"); } });
  assert.equal(result.status, 503);
  assert.ok(!(await result.text()).includes("private-api-key"));
});

test("old clients stay unauthorized and their mail content remains stable", async () => {
  const { sent, config } = setup();
  const parsed = axisFeedbackSchema.parse(payload);
  assert.equal(parsed.publicationConsent, false);
  assert.equal(parsed.formVersion, "axis-feedback-v1");
  await handleAxisFeedback(request(payload), config);
  assert.ok(sent[0].text.includes("No autoriza publicación"));
  assert.ok(!sent[0].text.includes("Versión del formulario"));
  assert.equal(axisFeedbackSchema.safeParse({ ...payload, publicationConsent: true }).success, false);
});

test("explicit anonymous authorization records scope and attribution without publishing identity", async () => {
  const { sent, config } = setup();
  const data = { ...payload, formVersion: "axis-feedback-v2", publicationConsent: true, publicationAttribution: "anonymous", name: "Identidad privada" };
  assert.equal((await handleAxisFeedback(request(data), config)).status, 200);
  assert.ok(sent[0].text.includes("Autorización de publicación: SÍ"));
  assert.ok(sent[0].text.includes("Sin nombre, cargo ni empresa"));
  assert.ok(sent[0].text.includes(AXIS_PUBLICATION_CONSENT_TEXT));
  assert.ok(sent[0].text.includes("axis-publication-2026-10-08"));
});

test("identified authorization needs a name and unselected authorization stays negative", async () => {
  const data = { ...payload, formVersion: "axis-feedback-v2", publicationConsent: true, publicationAttribution: "identified" };
  assert.equal(axisFeedbackSchema.safeParse(data).success, false);
  assert.equal(axisFeedbackSchema.safeParse({ ...data, name: "Persona de prueba" }).success, true);
  const { sent, config } = setup();
  await handleAxisFeedback(request({ ...payload, formVersion: "axis-feedback-v2" }), config);
  assert.ok(sent[0].text.includes("Autorización de publicación: NO"));
});

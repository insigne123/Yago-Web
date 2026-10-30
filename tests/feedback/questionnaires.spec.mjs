import assert from "node:assert/strict";
import test from "node:test";
import { QUESTIONNAIRES, QUESTIONNAIRE_VERSION, questionnairePublicationText } from "../../src/config/questionnaires.ts";
import { handleQuestionnaireFeedback, questionnaireFeedbackSchema } from "../../src/lib/questionnaire-feedback.ts";

const id = "619dbf81-f4f4-4e38-bbe6-e060802154db";
const variants = QUESTIONNAIRES.filter((item) => !item.legacyAxis);
const request = (payload, headers = {}) => new Request("https://yago.cl/api/questionnaire-feedback", { method: "POST", headers: { "Content-Type": "application/json", ...headers }, body: typeof payload === "string" ? payload : JSON.stringify(payload) });
const payloadFor = (questionnaire) => ({ submissionId: id, variant: questionnaire.slug, formVersion: QUESTIONNAIRE_VERSION, responses: { [questionnaire.questions[0].id]: "Respuesta técnica de prueba." }, consent: true });
function setup() {
  const messages = [];
  return { messages, config: { to: "owner@example.com", from: "YAGO <no-reply@example.com>", publicOrigin: "https://yago.cl", send: async (message) => { messages.push(message); } } };
}

for (const questionnaire of variants) {
  test(`${questionnaire.slug}: accepts optional identity and sends the correct audience and questions`, async () => {
    const { messages, config } = setup();
    const result = await handleQuestionnaireFeedback(request(payloadFor(questionnaire)), config);
    assert.equal(result.status, 200);
    assert.deepEqual(await result.json(), { ok: true, feedbackId: id });
    assert.equal(messages.length, 1);
    assert.equal(messages[0].to, "owner@example.com");
    assert.equal(messages[0].replyTo, undefined);
    assert.ok(messages[0].subject.includes(questionnaire.product));
    assert.ok(messages[0].subject.includes(questionnaire.audience));
    assert.ok(messages[0].text.includes(`Cuestionario: ${questionnaire.slug}`));
    assert.ok(messages[0].text.includes(questionnaire.questions.at(-1).title));
    assert.ok(messages[0].text.includes("Autorización de publicación: NO"));
    assert.equal(messages[0].idempotencyKey, `questionnaire:${questionnaire.slug}:${id}`);
  });
}

test("forged product, unknown questions and AXIS legacy payloads are rejected without sending", async () => {
  const { messages, config } = setup();
  const valid = payloadFor(variants[0]);
  for (const payload of [
    { ...valid, variant: "unknown" },
    { ...valid, variant: "axis" },
    { ...valid, responses: { outside_question: "not in this survey" } },
    { ...valid, to: "intruder@example.com" },
    { ...valid, formVersion: "outdated-version" },
  ]) assert.equal((await handleQuestionnaireFeedback(request(payload), config)).status, 400);
  assert.equal(messages.length, 0);
});

test("typed choices and an answer are required, but receipt authorization does not imply publication", async () => {
  const sofia = QUESTIONNAIRES.find((item) => item.slug === "sofia");
  const valid = payloadFor(sofia);
  const { messages, config } = setup();
  for (const payload of [
    { ...valid, responses: {} },
    { ...valid, responses: { usage: "   " } },
    { ...valid, responses: { ease: "wrong-option" } },
    { ...valid, responses: { usage: ["wrong-type"] } },
    { ...valid, consent: false },
    { ...valid, email: "bad\r\nBcc: intruder@example.com" },
  ]) assert.equal((await handleQuestionnaireFeedback(request(payload), config)).status, 400);
  assert.equal(messages.length, 0);
  assert.equal(questionnaireFeedbackSchema.parse(valid).publicationConsent, false);
  assert.equal((await handleQuestionnaireFeedback(request({ ...valid, responses: { recommendation: "No" } }), config)).status, 200);
});

test("publication scope belongs to the selected survey and identified attribution needs a name", async () => {
  const sofia = QUESTIONNAIRES.find((item) => item.slug === "sofia-gerentes");
  const payload = { ...payloadFor(sofia), publicationConsent: true, publicationAttribution: "identified" };
  const { messages, config } = setup();
  assert.equal((await handleQuestionnaireFeedback(request(payload), config)).status, 400);
  assert.equal((await handleQuestionnaireFeedback(request({ ...payload, name: "Persona de prueba" }), config)).status, 200);
  assert.ok(messages[0].text.includes(questionnairePublicationText(sofia)));
  assert.ok(messages[0].text.includes("desde mi rol de responsable"));
  assert.ok(messages[0].text.includes("Autorización de publicación: SÍ"));
  assert.ok(messages[0].text.includes("correo no autorizado para publicación"));
});

test("app name and user comments are escaped, and unrelated products cannot claim app context", async () => {
  const apps = QUESTIONNAIRES.find((item) => item.slug === "apps-usuarios");
  const { messages, config } = setup();
  const payload = { ...payloadFor(apps), project: "Portal <script>alert(1)</script>", responses: { usage: "<img src=x onerror=alert(1)>" }, email: "user@example.com" };
  assert.equal((await handleQuestionnaireFeedback(request(payload), config)).status, 200);
  assert.ok(messages[0].html.includes("&lt;script&gt;"));
  assert.ok(!messages[0].html.includes("<script>"));
  assert.ok(!messages[0].html.includes("<img"));
  assert.equal(messages[0].replyTo, "user@example.com");
  assert.equal((await handleQuestionnaireFeedback(request({ ...payloadFor(variants[0]), project: "unrelated app" }), config)).status, 400);
});

test("actual body limits, malformed JSON, origin and honeypot are enforced", async () => {
  const { messages, config } = setup();
  assert.equal((await handleQuestionnaireFeedback(request({ hp: "bot" }), config)).status, 200);
  assert.equal((await handleQuestionnaireFeedback(request(payloadFor(variants[0]), { Origin: "https://other.example" }), config)).status, 403);
  assert.equal((await handleQuestionnaireFeedback(request(payloadFor(variants[0]), { "Content-Type": "text/plain" }), config)).status, 415);
  assert.equal((await handleQuestionnaireFeedback(request("invalid JSON"), config)).status, 400);
  assert.equal((await handleQuestionnaireFeedback(request({ ...payloadFor(variants[0]), responses: { need: "a".repeat(70000) } }), config)).status, 413);
  assert.equal(messages.length, 0);
});

test("retries keep payload stable and keys separate surveys without disclosing provider errors", async () => {
  const { messages, config } = setup();
  const payload = payloadFor(variants[0]);
  await handleQuestionnaireFeedback(request(payload), config);
  await handleQuestionnaireFeedback(request(payload), config);
  assert.deepEqual(messages[0], messages[1]);
  await handleQuestionnaireFeedback(request(payloadFor(variants[1])), config);
  assert.notEqual(messages[0].idempotencyKey, messages[2].idempotencyKey);
  const result = await handleQuestionnaireFeedback(request(payload), { ...config, send: async () => { throw new Error("private-api-token"); } });
  assert.equal(result.status, 503);
  assert.ok(!(await result.text()).includes("private-api-token"));
});

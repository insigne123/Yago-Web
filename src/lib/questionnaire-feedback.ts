import { z } from "zod";
import { getQuestionnaire, QUESTIONNAIRE_CONSENT_VERSION, QUESTIONNAIRE_VERSION, questionnairePublicationText } from "../config/questionnaires.ts";

const answer = z.string().trim().max(1800, "La respuesta es demasiado larga.");
export const questionnaireFeedbackSchema = z.object({
  submissionId: z.string().uuid("La referencia del envío no es válida."),
  variant: z.string().max(80),
  formVersion: z.literal(QUESTIONNAIRE_VERSION, { errorMap: () => ({ message: "Actualiza el formulario antes de enviar." }) }),
  responses: z.record(z.union([answer, z.array(z.string().trim().max(160)).max(8)])),
  project: z.string().trim().max(160).default(""),
  name: z.string().trim().max(100).default(""),
  role: z.string().trim().max(120).default(""),
  company: z.string().trim().max(140).default(""),
  email: z.string().trim().max(254).email("Revisa el correo que ingresaste.").or(z.literal("")).default(""),
  consent: z.literal(true, { errorMap: () => ({ message: "Confirma que podemos recibir tus respuestas." }) }),
  publicationConsent: z.boolean().default(false),
  publicationAttribution: z.enum(["anonymous", "identified"]).default("anonymous"),
  hp: z.string().trim().max(100).default(""),
}).strict().superRefine((data, context) => {
  const questionnaire = getQuestionnaire(data.variant);
  if (!questionnaire || questionnaire.legacyAxis) {
    context.addIssue({ code: "custom", message: "Este cuestionario no está disponible en este enlace de envío.", path: ["variant"] });
    return;
  }
  const ids = new Set(questionnaire.questions.map((question) => question.id));
  for (const id of Object.keys(data.responses)) {
    if (!ids.has(id)) context.addIssue({ code: "custom", message: "El envío contiene una pregunta que no corresponde a este cuestionario.", path: ["responses", id] });
  }
  let answered = false;
  for (const question of questionnaire.questions) {
    const value = data.responses[question.id];
    if (value === undefined) continue;
    if (question.type === "multiple") {
      if (!Array.isArray(value) || value.some((item) => !question.options?.includes(item))) {
        context.addIssue({ code: "custom", message: "Revisa las opciones seleccionadas.", path: ["responses", question.id] });
      } else if (value.length) answered = true;
    } else if (typeof value !== "string" || (question.type === "choice" && value !== "" && !question.options?.includes(value))) {
      context.addIssue({ code: "custom", message: "Revisa la respuesta seleccionada.", path: ["responses", question.id] });
    } else if (value) answered = true;
  }
  if (!answered) context.addIssue({ code: "custom", message: "Responde al menos una pregunta para enviar tu opinión.", path: ["responses"] });
  if (data.publicationConsent && data.publicationAttribution === "identified" && !data.name) context.addIssue({ code: "custom", message: "Indica tu nombre o elige publicar sin identificarte.", path: ["name"] });
  if (data.project && !questionnaire.projectField) context.addIssue({ code: "custom", message: "Ese campo no corresponde a este cuestionario.", path: ["project"] });
});

export type QuestionnaireFeedbackData = z.infer<typeof questionnaireFeedbackSchema>;
type Mail = { to: string; from: string; subject: string; html: string; text: string; replyTo?: string; idempotencyKey?: string };
type Config = { to: string; from: string; publicOrigin: string; send: (message: Mail) => Promise<unknown> };
const escape = (value: string) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");

export function buildQuestionnaireTemplate(data: QuestionnaireFeedbackData) {
  const questionnaire = getQuestionnaire(data.variant);
  if (!questionnaire || questionnaire.legacyAxis) throw new Error("Cuestionario no válido.");
  const identity = [["Nombre", data.name], ["Cargo", data.role], ["Empresa", data.company], ["Correo", data.email]];
  const metadata = [
    `Referencia: ${data.submissionId}`, `Cuestionario: ${questionnaire.slug}`,
    `Producto o servicio: ${questionnaire.product}`, `Perfil: ${questionnaire.audience}`,
    ...(questionnaire.projectField ? [`Aplicación o proyecto: ${data.project || "No indicado"}`] : []),
    ...identity.map(([label, value]) => `${label}: ${value || "No indicado"}`),
  ];
  const answers = questionnaire.questions.map((question) => {
    const value = data.responses[question.id];
    return { title: question.title, value: Array.isArray(value) ? [...new Set(value)].join(", ") || "Sin respuesta" : value || "Sin respuesta" };
  });
  const permission = [
    `Versión del formulario: ${data.formVersion}`, `Autorización de publicación: ${data.publicationConsent ? "SÍ" : "NO"}`,
    `Atribución autorizada: ${!data.publicationConsent ? "No aplica" : data.publicationAttribution === "anonymous" ? "Sin nombre, cargo ni empresa" : "Nombre y los datos de cargo y empresa indicados; correo no autorizado para publicación"}`,
    `Versión del texto: ${QUESTIONNAIRE_CONSENT_VERSION}`, `Texto mostrado: ${questionnairePublicationText(questionnaire)}`,
    "La fecha de recepción consta en los metadatos del correo y la referencia identifica este envío.",
  ];
  const notice = data.publicationConsent ? "Publicación autorizada para yago.cl según el texto y la atribución registrados. Conservar el sentido del extracto y respetar la atribución elegida."
    : "No autoriza publicación. Solicitar autorización por separado antes de publicar un testimonio.";
  const title = `Nueva opinión: ${questionnaire.product} · ${questionnaire.audience}`;
  const text = [title, ...metadata, "", ...answers.flatMap((item, index) => [`${index + 1}. ${item.title}`, item.value, ""]), "Autorización y atribución", ...permission, "", notice].join("\n");
  const html = `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0b1220;max-width:760px"><h1 style="font-size:24px">${escape(title)}</h1>
    ${metadata.map((line) => `<p>${escape(line)}</p>`).join("")}<hr>
    ${answers.map((item, index) => `<h2 style="font-size:17px">${index + 1}. ${escape(item.title)}</h2><p style="white-space:pre-wrap">${escape(item.value)}</p>`).join("")}
    <hr><h2 style="font-size:17px">Autorización y atribución</h2>${permission.map((line) => `<p>${escape(line)}</p>`).join("")}<p>${escape(notice)}</p></div>`;
  return { title, html, text };
}

const MAX_BYTES = 64 * 1024;
const reply = (body: object, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

export async function handleQuestionnaireFeedback(request: Request, config: Config) {
  const origin = request.headers.get("origin");
  if (origin && origin !== config.publicOrigin && origin !== new URL(request.url).origin) return reply({ ok: false, error: "Origen de solicitud no permitido." }, 403);
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) return reply({ ok: false, error: "Formato de envío no válido." }, 415);
  if (Number(request.headers.get("content-length") || 0) > MAX_BYTES) return reply({ ok: false, error: "La respuesta supera el tamaño permitido." }, 413);
  let raw: unknown;
  try {
    if (!request.body) return reply({ ok: false, error: "No recibimos respuestas." }, 400);
    const reader = request.body.getReader();
    const decoder = new TextDecoder();
    let body = "";
    let total = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        total += value.byteLength;
        if (total > MAX_BYTES) { await reader.cancel(); return reply({ ok: false, error: "La respuesta supera el tamaño permitido." }, 413); }
        body += decoder.decode(value, { stream: true });
      }
      body += decoder.decode();
    } finally { reader.releaseLock(); }
    raw = JSON.parse(body);
  } catch { return reply({ ok: false, error: "No pudimos leer el envío. Intenta nuevamente." }, 400); }
  if (raw && typeof raw === "object" && "hp" in raw && typeof raw.hp === "string" && raw.hp.trim()) return reply({ ok: true, feedbackId: crypto.randomUUID() });
  const parsed = questionnaireFeedbackSchema.safeParse(raw);
  if (!parsed.success) return reply({ ok: false, error: parsed.error.issues[0]?.message || "Revisa las respuestas." }, 400);
  if (!config.to || !config.from) return reply({ ok: false, error: "El formulario no está disponible en este momento." }, 503);
  const data = parsed.data;
  const questionnaire = getQuestionnaire(data.variant)!;
  const template = buildQuestionnaireTemplate(data);
  try {
    await config.send({ to: config.to, from: config.from, subject: `[Opinión ${questionnaire.product} | ${questionnaire.audience}] Respuesta ${data.submissionId}`,
      html: template.html, text: template.text, ...(data.email ? { replyTo: data.email } : {}), idempotencyKey: `questionnaire:${data.variant}:${data.submissionId}` });
    return reply({ ok: true, feedbackId: data.submissionId });
  } catch { return reply({ ok: false, error: "No pudimos recibir tus respuestas. Intenta nuevamente; el formulario conserva lo que escribiste." }, 503); }
}

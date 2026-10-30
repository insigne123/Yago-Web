import { z } from "zod";

export const AXIS_FEEDBACK_QUESTIONS = {
  usage: "¿En qué tareas de tu trabajo utilizas AXIS?",
  before: "Antes de usar AXIS, ¿cómo realizabas esas consultas o revisiones?",
  ease: "¿Qué tan fácil te resulta utilizar AXIS?",
  features: "¿Qué funciones utilizas y cuáles te resultan más útiles?",
  changes: "¿Qué ha cambiado, si algo, en tu trabajo desde que utilizas AXIS?",
  improvements: "¿Has encontrado alguna dificultad, error o información poco clara? ¿Qué mejorarías?",
  support: "Si has necesitado ayuda, ¿cómo fue tu experiencia con el soporte de YAGO?",
  recommendation: "¿Recomendarías AXIS a alguien que realiza tareas similares? ¿Por qué?",
} as const;

export const AXIS_EASE_OPTIONS = ["Muy difícil", "Difícil", "Ni fácil ni difícil", "Fácil", "Muy fácil"] as const;
export const AXIS_FEATURE_OPTIONS = ["Consulta individual", "Consulta por lote", "Reportes y evidencia", "Monitoreo y alertas", "Otra", "No sé el nombre de la función"] as const;
export const AXIS_RECOMMENDATION_OPTIONS = ["Sí", "No", "No estoy seguro"] as const;
export const AXIS_FEEDBACK_VERSION = "axis-feedback-v2" as const;
export const AXIS_PUBLICATION_CONSENT_VERSION = "axis-publication-2026-10-08" as const;
export const AXIS_PUBLICATION_CONSENT_TEXT = "Autorizo a Yago SpA a publicar mis respuestas o extractos fieles, sin cambiar su sentido, en yago.cl como testimonio de mi experiencia con AXIS. Puedo solicitar el retiro escribiendo a nicolas.yarur.g@yago.cl.";

const answer = (max = 1800) => z.string().trim().max(max, "La respuesta es demasiado larga.").default("");
export const axisFeedbackSchema = z.object({
  submissionId: z.string().uuid("La referencia del envío no es válida."),
  formVersion: z.enum(["axis-feedback-v1", AXIS_FEEDBACK_VERSION]).default("axis-feedback-v1"),
  usage: answer(), before: answer(),
  ease: z.enum(AXIS_EASE_OPTIONS).or(z.literal("")).default(""),
  easeComment: answer(1000),
  features: z.array(z.enum(AXIS_FEATURE_OPTIONS)).max(6).default([]).transform((items) => [...new Set(items)]),
  featuresComment: answer(1000),
  changes: answer(), improvements: answer(), support: answer(),
  recommendation: z.enum(AXIS_RECOMMENDATION_OPTIONS).or(z.literal("")).default(""),
  recommendationReason: answer(1000),
  name: answer(100), role: answer(120), company: answer(140),
  email: z.string().trim().max(254).email("Revisa el correo que ingresaste.").or(z.literal("")).default(""),
  consent: z.literal(true, { errorMap: () => ({ message: "Confirma que podemos recibir tus respuestas." }) }),
  publicationConsent: z.boolean().default(false),
  publicationAttribution: z.enum(["anonymous", "identified"]).default("anonymous"),
  hp: answer(100),
}).refine((data) => Boolean(data.usage || data.before || data.ease || data.easeComment || data.features.length || data.featuresComment || data.changes || data.improvements || data.support || data.recommendation || data.recommendationReason), {
  message: "Responde al menos una pregunta para enviar tu opinión.", path: ["usage"],
}).refine((data) => !data.publicationConsent || data.formVersion === AXIS_FEEDBACK_VERSION, {
  message: "Actualiza el formulario para registrar la autorización de publicación.", path: ["publicationConsent"],
}).refine((data) => !data.publicationConsent || data.publicationAttribution !== "identified" || Boolean(data.name), {
  message: "Indica tu nombre o elige publicar sin identificarte.", path: ["name"],
});

export type AxisFeedbackData = z.infer<typeof axisFeedbackSchema>;
type FeedbackMail = { to: string; from: string; subject: string; html: string; text: string; replyTo?: string; idempotencyKey?: string };
type FeedbackConfig = { to: string; from: string; publicOrigin: string; send: (message: FeedbackMail) => Promise<unknown> };

function escape(value: string) {
  return value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

export function buildAxisFeedbackTemplate(data: AxisFeedbackData) {
  const blank = "Sin respuesta";
  const answers = [
    [AXIS_FEEDBACK_QUESTIONS.usage, data.usage || blank],
    [AXIS_FEEDBACK_QUESTIONS.before, data.before || blank],
    [AXIS_FEEDBACK_QUESTIONS.ease, [data.ease, data.easeComment].filter(Boolean).join("\n") || blank],
    [AXIS_FEEDBACK_QUESTIONS.features, [data.features.join(", "), data.featuresComment].filter(Boolean).join("\n") || blank],
    [AXIS_FEEDBACK_QUESTIONS.changes, data.changes || blank],
    [AXIS_FEEDBACK_QUESTIONS.improvements, data.improvements || blank],
    [AXIS_FEEDBACK_QUESTIONS.support, data.support || blank],
    [AXIS_FEEDBACK_QUESTIONS.recommendation, [data.recommendation, data.recommendationReason].filter(Boolean).join("\n") || blank],
  ];
  const identity = [["Nombre", data.name], ["Cargo", data.role], ["Empresa", data.company], ["Correo", data.email]];
  const notice = data.publicationConsent
    ? "Publicación autorizada para yago.cl según el texto y la atribución registrados. Revisar el extracto para conservar su sentido y respetar esa atribución."
    : "Opinión recibida para revisar y mejorar AXIS. No autoriza publicación: solicitar aprobación del extracto y atribución por separado.";
  const publication = data.formVersion === AXIS_FEEDBACK_VERSION ? [
    `Versión del formulario: ${data.formVersion}`,
    `Autorización de publicación: ${data.publicationConsent ? "SÍ" : "NO"}`,
    `Atribución autorizada: ${!data.publicationConsent ? "No aplica" : data.publicationAttribution === "anonymous" ? "Sin nombre, cargo ni empresa" : "Nombre y los datos de cargo y empresa indicados; correo no autorizado para publicación"}`,
    `Versión del texto: ${AXIS_PUBLICATION_CONSENT_VERSION}`,
    `Texto mostrado: ${AXIS_PUBLICATION_CONSENT_TEXT}`,
    "La fecha de recepción consta en los metadatos del correo y la referencia identifica este envío.",
  ] : [];
  const text = ["Nueva opinión de un usuario de AXIS", `Referencia: ${data.submissionId}`, "",
    ...identity.map(([label, value]) => `${label}: ${value || "No indicado"}`), "",
    ...answers.flatMap(([question, value], index) => [`${index + 1}. ${question}`, value, ""]),
    ...(publication.length ? ["Autorización y atribución", ...publication, ""] : []), notice].join("\n");
  const html = `<div style="font-family:system-ui,sans-serif;line-height:1.6;color:#0b1220;max-width:760px">
    <h1 style="font-size:24px">Nueva opinión de un usuario de AXIS</h1><p>Referencia: ${escape(data.submissionId)}</p>
    ${identity.map(([label, value]) => `<p><strong>${label}:</strong> ${escape(value || "No indicado")}</p>`).join("")}
    <hr>${answers.map(([question, value], index) => `<h2 style="font-size:17px">${index + 1}. ${escape(question)}</h2><p style="white-space:pre-wrap">${escape(value)}</p>`).join("")}${publication.length ? `<hr><h2 style="font-size:17px">Autorización y atribución</h2>${publication.map((line) => `<p>${escape(line)}</p>`).join("")}` : ""}
    <hr><p style="font-size:13px;color:#475569">${notice}</p></div>`;
  return { text, html };
}

const MAX_BYTES = 64 * 1024;
function reply(body: object, status = 200) {
  return Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function handleAxisFeedback(request: Request, config: FeedbackConfig) {
  const origin = request.headers.get("origin");
  if (origin && origin !== config.publicOrigin && origin !== new URL(request.url).origin) return reply({ ok: false, error: "Origen de solicitud no permitido." }, 403);
  if (!request.headers.get("content-type")?.toLowerCase().includes("application/json")) return reply({ ok: false, error: "Formato de envío no válido." }, 415);
  if (Number(request.headers.get("content-length") || 0) > MAX_BYTES) return reply({ ok: false, error: "La respuesta supera el tamaño permitido." }, 413);
  let raw: unknown;
  try {
    if (!request.body) return reply({ ok: false, error: "No recibimos respuestas." }, 400);
    const reader = request.body.getReader();
    const decoder = new TextDecoder();
    let total = 0;
    let body = "";
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
  const result = axisFeedbackSchema.safeParse(raw);
  if (!result.success) return reply({ ok: false, error: result.error.issues[0]?.message || "Revisa las respuestas." }, 400);
  if (!config.to || !config.from) return reply({ ok: false, error: "El formulario no está disponible en este momento." }, 503);
  const data = result.data;
  const template = buildAxisFeedbackTemplate(data);
  try {
    await config.send({ to: config.to, from: config.from, subject: `[Opinión AXIS] Respuesta ${data.submissionId}`, ...template,
      ...(data.email ? { replyTo: data.email } : {}), idempotencyKey: `axis-feedback:${data.submissionId}` });
    return reply({ ok: true, feedbackId: data.submissionId });
  } catch { return reply({ ok: false, error: "No pudimos recibir tus respuestas. Intenta nuevamente; el formulario conserva lo que escribiste." }, 503); }
}

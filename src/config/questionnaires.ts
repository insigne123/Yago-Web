export type FeedbackQuestion = {
  id: string;
  title: string;
  type: "text" | "choice" | "multiple";
  hint?: string;
  options?: readonly string[];
};

export type Questionnaire = {
  slug: string;
  product: string;
  audience: string;
  title: string;
  summary: string;
  description: string;
  help: string;
  publicationContext: string;
  questions: FeedbackQuestion[];
  projectField?: boolean;
  legacyAxis?: boolean;
};

export const QUESTIONNAIRE_VERSION = "questionnaire-v1";
export const QUESTIONNAIRE_CONSENT_VERSION = "questionnaire-publication-2026-10-13";
const EASE = ["Muy difícil", "Difícil", "Ni fácil ni difícil", "Fácil", "Muy fácil"];
const RECOMMEND = ["Sí", "No", "No estoy seguro"];
const recommendation = (subject: string): FeedbackQuestion => ({ id: "recommendation", type: "choice", title: `¿Recomendarías ${subject} a alguien con una necesidad similar?`, options: RECOMMEND });
const reason: FeedbackQuestion = { id: "recommendation_reason", type: "text", title: "¿Por qué?" };
const improvement = (subject: string): FeedbackQuestion => ({ id: "improvements", type: "text", title: `¿Qué dificultades has encontrado o qué mejorarías de ${subject}?` });
const support: FeedbackQuestion = { id: "support", type: "text", title: "Si has necesitado ayuda, ¿cómo fue tu experiencia con el soporte de YAGO?", hint: "Si no lo has utilizado, puedes indicarlo o dejar esta pregunta en blanco." };

export const QUESTIONNAIRES: Questionnaire[] = [
  {
    slug: "axis", product: "AXIS", audience: "Usuarios", legacyAxis: true,
    title: "Cuéntanos tu experiencia con AXIS.",
    summary: "Para quienes realizan consultas, revisan reportes o utilizan el monitoreo de AXIS.",
    description: "Comparte tu experiencia de uso de AXIS: facilidad, funciones, soporte y oportunidades de mejora.",
    help: "Evita incluir nombres, RUT o detalles de las personas o causas consultadas.",
    publicationContext: "mi experiencia con AXIS", questions: [],
  },
  {
    slug: "axis-gerentes", product: "AXIS", audience: "Gerentes y responsables",
    title: "AXIS en la operación de tu equipo.",
    summary: "Para quienes supervisan el proceso, la adopción y el uso de AXIS en su organización.",
    description: "Queremos conocer qué necesidad aborda AXIS, cómo lo utiliza tu equipo y qué resultados o dificultades has observado desde tu rol de responsable.",
    help: "No incluyas datos de las personas o causas consultadas. Puedes indicar cuando un resultado no está medido o no corresponde a tu rol.",
    publicationContext: "mi experiencia con AXIS desde mi rol de responsable",
    questions: [
      { id: "need", type: "text", title: "¿Qué necesidad del equipo buscaban atender con AXIS?" },
      { id: "previous_process", type: "text", title: "¿Cómo se organizaba ese proceso antes de incorporar AXIS?" },
      { id: "adoption", type: "text", title: "¿Cómo ha sido la adopción de AXIS por parte del equipo?", hint: "Puedes comentar capacitación, frecuencia de uso o dificultades para incorporarlo al trabajo." },
      { id: "observed_results", type: "text", title: "¿Qué cambios has observado, si alguno, en la operación?", hint: "Puede haber mejoras, dificultades o ningún cambio. Distingue lo observado de lo medido." },
      { id: "measurement", type: "text", title: "Si evaluaron resultados, ¿qué midieron y durante qué período?", hint: "Es opcional; puedes indicar que todavía no han realizado una medición. No se solicita presupuesto." },
      { id: "oversight", type: "text", title: "¿Cómo utiliza el equipo los reportes, la evidencia o el seguimiento?", hint: "Responde solo sobre las funciones que conozcas o utilicen." },
      improvement("AXIS"), recommendation("AXIS"), reason,
    ],
  },
  {
    slug: "sofia", product: "SOF.IA", audience: "Usuarios",
    title: "Cuéntanos tu experiencia con SOF.IA.",
    summary: "Para quienes consultan información, procedimientos o documentos con SOF.IA.",
    description: "Queremos conocer cómo utilizas SOF.IA, si las respuestas te resultan útiles y qué podríamos mejorar en la experiencia diaria.",
    help: "Describe tu experiencia sin copiar documentos internos ni datos confidenciales de tu organización.",
    publicationContext: "mi experiencia con SOF.IA",
    questions: [
      { id: "usage", type: "text", title: "¿Para qué consultas o tareas utilizas SOF.IA?" },
      { id: "before", type: "text", title: "Antes de usar SOF.IA, ¿cómo encontrabas esa información?" },
      { id: "ease", type: "choice", title: "¿Qué tan fácil te resulta utilizar SOF.IA?", options: EASE },
      { id: "response_quality", type: "text", title: "¿Cómo han sido las respuestas de SOF.IA en las consultas que realizas?", hint: "Puedes comentar claridad, pertinencia, información incompleta o respuestas que no resolvieron tu consulta." },
      { id: "sources", type: "text", title: "Si utilizas las referencias a documentos, ¿te ayudan a revisar la respuesta?", hint: "Si no usas esa función, puedes indicarlo." },
      { id: "changes", type: "text", title: "¿Qué ha cambiado, si algo, en tu forma de buscar información o resolver dudas?" },
      improvement("SOF.IA"), support, recommendation("SOF.IA"), reason,
    ],
  },
  {
    slug: "sofia-gerentes", product: "SOF.IA", audience: "Gerentes y responsables",
    title: "SOF.IA y el conocimiento de tu equipo.",
    summary: "Para responsables de adopción, conocimiento interno, soporte u operación de SOF.IA.",
    description: "Comparte tu evaluación de SOF.IA desde el rol de responsable: necesidad, adopción, mantenimiento del conocimiento y cambios observados.",
    help: "Puedes omitir lo que no conozcas y distinguir percepciones de resultados medidos. No incluyas documentos internos ni información confidencial.",
    publicationContext: "mi experiencia con SOF.IA desde mi rol de responsable",
    questions: [
      { id: "need", type: "text", title: "¿Qué necesidad de conocimiento o soporte querían abordar con SOF.IA?" },
      { id: "audience", type: "text", title: "¿Qué equipos o tipos de consulta utilizan SOF.IA actualmente?" },
      { id: "adoption", type: "text", title: "¿Cómo ha sido la adopción y qué ha facilitado o dificultado su uso?" },
      { id: "knowledge", type: "text", title: "¿Cómo ha sido preparar y mantener actualizadas las fuentes de conocimiento?", hint: "Si esa tarea no depende de ti, puedes dejarla en blanco." },
      { id: "observed_results", type: "text", title: "¿Qué cambios has observado, si alguno, en consultas internas o búsqueda de información?" },
      { id: "measurement", type: "text", title: "Si midieron resultados, ¿qué indicadores o ejemplos utilizaron?", hint: "Indica el período y si son datos medidos o una percepción del equipo. Puedes responder que no hay medición." },
      improvement("SOF.IA"), recommendation("SOF.IA"), reason,
    ],
  },
  {
    slug: "apps-usuarios", product: "Aplicaciones YAGO", audience: "Usuarios", projectField: true,
    title: "Tu experiencia usando una aplicación de YAGO.",
    summary: "Para usuarios de una aplicación, portal o herramienta interna desarrollada con YAGO.",
    description: "Queremos conocer cómo funciona la aplicación en tu trabajo diario, qué te resulta claro y qué podemos mejorar.",
    help: "Puedes responder aunque no conozcas detalles de contratación o desarrollo. Describe la experiencia sin incluir datos de clientes, usuarios o documentos internos.",
    publicationContext: "mi experiencia utilizando una aplicación de YAGO",
    questions: [
      { id: "usage", type: "text", title: "¿En qué tareas de tu trabajo utilizas la aplicación?" },
      { id: "before", type: "text", title: "¿Cómo realizabas esas tareas antes de usarla?", hint: "Puedes indicar que no realizabas esas tareas antes." },
      { id: "ease", type: "choice", title: "¿Qué tan fácil te resulta utilizar la aplicación?", options: EASE },
      { id: "useful_features", type: "text", title: "¿Qué pantallas o funciones utilizas y cuáles te resultan útiles?" },
      { id: "changes", type: "text", title: "¿Qué ha cambiado, si algo, en tu trabajo desde que utilizas la aplicación?" },
      improvement("la aplicación"), support, recommendation("la aplicación"), reason,
    ],
  },
  {
    slug: "apps-gerentes", product: "Aplicaciones YAGO", audience: "Gerentes y responsables", projectField: true,
    title: "La aplicación en la operación de tu organización.",
    summary: "Para quienes supervisan el uso, la implementación y los resultados de una aplicación.",
    description: "Comparte tu experiencia sobre el alcance de la aplicación, su adopción, las integraciones y los resultados observados en el equipo.",
    help: "Responde sobre lo que conozcas desde tu rol. Puedes dejar en blanco los indicadores que todavía no se hayan medido.",
    publicationContext: "mi experiencia con una aplicación de YAGO desde mi rol de responsable",
    questions: [
      { id: "need", type: "text", title: "¿Qué problema o necesidad buscaban resolver con la aplicación?" },
      { id: "scope", type: "text", title: "¿Qué parte del proceso gestiona hoy y qué queda fuera de su alcance?" },
      { id: "adoption", type: "text", title: "¿Cómo se incorporó la aplicación al trabajo del equipo?" },
      { id: "integrations", type: "text", title: "Si se conecta a otras herramientas, ¿cómo ha funcionado esa integración?", hint: "Si no aplica o no es tu responsabilidad, puedes indicarlo." },
      { id: "observed_results", type: "text", title: "¿Qué cambios has observado, si alguno, en control, coordinación o capacidad operativa?" },
      { id: "measurement", type: "text", title: "Si evaluaron resultados, ¿qué indicadores o ejemplos utilizaron y durante qué período?", hint: "Distingue datos medidos de estimaciones o percepciones. No se solicita información de presupuesto." },
      improvement("la aplicación"), recommendation("trabajar con YAGO"), reason,
    ],
  },
  {
    slug: "proyectos", product: "Proyectos YAGO", audience: "Contrapartes de desarrollo", projectField: true,
    title: "Tu experiencia definiendo y construyendo un proyecto con YAGO.",
    summary: "Para las personas que definen requisitos, revisan avances, prueban o coordinan el desarrollo contigo.",
    description: "Queremos conocer cómo fue trabajar juntos desde la definición de la necesidad hasta las pruebas, entrega y seguimiento del proyecto.",
    help: "No necesitas conocer el presupuesto. Puedes responder sobre las etapas en las que participaste.",
    publicationContext: "mi experiencia trabajando en un proyecto con YAGO",
    questions: [
      { id: "participation", type: "text", title: "¿En qué proyecto y etapas participaste como contraparte de YAGO?" },
      { id: "requirements", type: "text", title: "¿Cómo fue definir y aclarar la necesidad, los requisitos y el alcance?" },
      { id: "communication", type: "text", title: "¿Cómo fue la comunicación y la revisión de avances?" },
      { id: "iterations", type: "text", title: "¿Cómo se trabajaron los cambios, comentarios o dudas durante el desarrollo?" },
      { id: "testing", type: "text", title: "¿Cómo fue participar en las pruebas y validar lo entregado?" },
      { id: "handoff", type: "text", title: "Si participaste en la entrega o puesta en marcha, ¿cómo fue esa experiencia?", hint: "Puedes comentar documentación, capacitación, accesos o acompañamiento, cuando correspondan." },
      improvement("la forma de trabajar juntos"), recommendation("trabajar con YAGO"), reason,
    ],
  },
];

export function getQuestionnaire(slug: string) {
  return QUESTIONNAIRES.find((item) => item.slug === slug);
}

export function questionnairePublicationText(questionnaire: Questionnaire) {
  return `Autorizo a Yago SpA a publicar mis respuestas o extractos fieles, sin cambiar su sentido, en yago.cl como testimonio de ${questionnaire.publicationContext}. Puedo solicitar el retiro escribiendo a nicolas.yarur.g@yago.cl.`;
}

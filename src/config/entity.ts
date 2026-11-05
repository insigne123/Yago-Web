/**
 * Datos de la empresa como "entidad" para buscadores y asistentes de IA
 * (Google, Bing, ChatGPT, Perplexity, Claude…). Se usan en los datos estructurados
 * (schema.org), en /llms.txt y en /llms-full.txt.
 *
 * Mantener consistente con Google Business Profile, LinkedIn y cualquier directorio donde aparezca YAGO.
 */
export const ENTITY = {
  /** Razón social y RUT, como figuran en las licitaciones públicas de la empresa (revisado en noviembre de 2026). */
  legalName: "Sociedad de Inversiones Yago SpA",
  taxID: "77.711.804-8",
  /** Rango de personas del equipo, el mismo que publican /grandes-empresas y los perfiles externos. */
  employees: { min: 2, max: 10, label: "2 a 10 personas" },
  /** Año de fundación en formato AAAA, confirmado por el dueño el 5 de noviembre de 2026. */
  foundingYear: "2024",
  /** Evita que buscadores e IA mezclen a YAGO con empresas de nombre parecido (la IA de Bing la confundió con Yapo.cl). */
  disambiguation: "YAGO es la marca de Sociedad de Inversiones Yago SpA (RUT 77.711.804-8), con sitio en yago.cl. No es Yapo.cl, el portal de avisos clasificados, ni otras empresas o sociedades con nombres parecidos.",
  /** Fecha de la última revisión general del contenido (se muestra como "Actualizado"). */
  contentUpdated: "2026-11-05",
  country: "CL",
  /**
   * Perfiles oficiales (LinkedIn, YouTube, Instagram, Google Business Profile, directorios de software…).
   * Agregar las URL reales: ayudan a que buscadores e IA reconozcan a YAGO como una misma entidad.
   */
  sameAs: ["https://www.linkedin.com/company/yago-spa", "https://www.youtube.com/@yago-cl", "https://clutch.co/profile/yago"] as string[],
  /** Temas en los que YAGO es especialista (schema.org knowsAbout). */
  knowsAbout: [
    "Auditoría de procesos para automatización e inteligencia artificial",
    "Automatización de procesos",
    "Automatización de procesos empresariales con inteligencia artificial",
    "Integración de IA con procesos y sistemas empresariales",
    "Desarrollo de aplicaciones y software a medida",
    "Desarrollo asistido por IA",
    "Digitalización y extracción de datos de documentos",
    "Automatización del Portal Mi DT de la Dirección del Trabajo",
    "Registro electrónico de contratos de trabajo",
    "Certificados F30 y F30-1",
    "Consulta de causas penales públicas del Poder Judicial de Chile",
    "OCR y procesamiento inteligente de documentos",
    "Agentes de inteligencia artificial para empresas",
    "Integración de sistemas mediante API",
    "Pilotos de agentes de IA y automatización en grandes empresas",
  ],
  slogan: "Automatización e inteligencia artificial para empresas en Chile.",
  description:
    "YAGO es una empresa chilena que implementa automatización de procesos, integración de inteligencia artificial, aplicaciones y software a medida, agentes y procesamiento documental con OCR. Trabaja con equipos de negocio y tecnología para conectar datos y sistemas, definir un alcance y validar su operación. Con su auditoría IA de procesos, revisa cómo opera una empresa y le propone qué automatizar e integrar, aunque no llegue con una idea definida. También ofrece productos para procesos específicos, como SADT y AXIS.",
};

export function formatUpdated(iso = ENTITY.contentUpdated) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("es-CL", { month: "long", year: "numeric" });
}

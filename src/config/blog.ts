// src/config/blog.ts
// Artículos del blog de YAGO orientados a SEO sobre automatización con IA.

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string; // meta description SEO
  excerpt: string; // resumen para la tarjeta
  image: string;
  category: string;
  date: string; // ISO
  modifiedDate?: string; // ISO
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  sources?: { title: string; url: string }[];
};

export const BLOG_AUTHOR = {
  name: "Equipo YAGO",
  role: "Automatización de procesos e IA aplicada a operaciones",
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-la-automatizacion-de-procesos-con-ia",
    title: "Qué es la automatización de procesos con IA (y qué no es)",
    description:
      "Guía clara sobre automatización de procesos con IA para empresas: qué es, cómo funciona, qué procesos conviene automatizar primero y qué esperar del retorno.",
    excerpt:
      "Una guía sin humo: qué significa realmente automatizar con IA, qué procesos conviene partir automatizando y cómo se mide el retorno.",
    image: "/images/blog-automatizacion-ia.png",
    category: "Fundamentos",
    date: "2026-06-24",
    modifiedDate: "2026-09-01",
    readingTime: "6 min",
    keywords: ["automatización de procesos", "IA para empresas", "automatización con IA", "procesos empresariales"],
    intro:
      "La automatización de procesos con IA combina flujos de trabajo automatizados con modelos de inteligencia artificial que entienden texto, documentos y contexto. El resultado: tareas que antes requerían horas de trabajo manual se resuelven en minutos, con trazabilidad y menos errores.",
    sections: [
      {
        heading: "Qué es (en términos simples)",
        paragraphs: [
          "Automatizar con IA no es reemplazar personas por robots. Es tomar las tareas repetitivas y tediosas de un proceso —copiar datos, clasificar correos, validar documentos, generar reportes— y delegarlas a un sistema que las ejecuta de forma consistente, 24/7.",
          "La diferencia con la automatización tradicional es que la IA puede trabajar con información no estructurada: un PDF escaneado, un correo mal redactado o una planilla desordenada dejan de ser un bloqueo.",
        ],
      },
      {
        heading: "Qué procesos conviene automatizar primero",
        paragraphs: [
          "No todos los procesos entregan el mismo retorno. Los mejores candidatos comparten tres características:",
        ],
        bullets: [
          "Alto volumen: se repiten muchas veces por semana o por día",
          "Reglas claras: los pasos son predecibles, aunque los datos varíen",
          "Costo de error alto: un error manual genera retrabajo o multas",
        ],
      },
      {
        heading: "Qué NO es la automatización con IA",
        paragraphs: [
          "No es un chatbot genérico pegado a tu web. No es 'poner ChatGPT' en la empresa sin diseño de flujos. Y no es un proyecto de años: una automatización bien acotada puede estar productiva en semanas.",
          "Tampoco significa perder control: los procesos críticos mantienen puntos de validación humana (human-in-the-loop), donde la IA propone y una persona decide.",
        ],
      },
    ],
    conclusion:
      "La automatización con IA es hoy la palanca de eficiencia más accesible para equipos de operaciones, backoffice y finanzas. La clave está en partir por procesos de alto volumen y reglas claras, medir el ahorro en horas-hombre y escalar desde ahí.",
    sources: [
      { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { title: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" },
    ],
  },
  {
    slug: "como-calcular-el-roi-de-automatizar-procesos",
    title: "Cómo calcular el ROI de automatizar un proceso paso a paso",
    description:
      "Aprende a calcular el retorno de inversión (ROI) de automatizar un proceso: fórmula, variables clave, ejemplo ilustrativo y errores comunes al estimar el ahorro.",
    excerpt:
      "La fórmula práctica para saber si automatizar un proceso se paga solo: horas ahorradas, costo de errores y un ejemplo con números reales.",
    image: "/images/blog-roi-automatizacion.png",
    category: "Negocio",
    date: "2026-06-17",
    modifiedDate: "2026-09-01",
    readingTime: "7 min",
    keywords: ["ROI automatización", "retorno de inversión", "ahorro horas hombre", "costo automatización"],
    intro:
      "Antes de automatizar cualquier proceso, la pregunta correcta es: ¿cuánto cuesta hoy hacerlo a mano y cuánto costaría automatizado? Este artículo te da la fórmula y un ejemplo concreto para responderla con números.",
    sections: [
      {
        heading: "La fórmula base",
        paragraphs: [
          "El ROI de una automatización se calcula comparando el costo actual del proceso manual contra el costo del proceso automatizado, incluyendo la inversión inicial.",
          "Costo manual mensual = (horas dedicadas al mes) × (costo hora del equipo) + (costo mensual de errores y retrabajo).",
          "ROI = (ahorro mensual × 12 − inversión inicial) / inversión inicial.",
        ],
      },
      {
        heading: "Ejemplo ilustrativo: digitación de facturas",
        paragraphs: [
          "Supongamos que un equipo de backoffice procesa 800 facturas al mes. Si cada una toma 6 minutos entre digitación y validación, el proceso ocupa 80 horas mensuales. Con un costo interno supuesto de $12.000 CLP por hora, la digitación representa $960.000 mensuales.",
          "El ahorro no debe asumirse: se calcula midiendo cuánto baja el tiempo de revisión en un piloto y comparando ese resultado con el costo total de implementación, soporte y consumo. El periodo de recuperación depende de esa medición.",
        ],
      },
      {
        heading: "Errores comunes al estimar",
        paragraphs: ["Al calcular el retorno, evita estas trampas frecuentes:"],
        bullets: [
          "Ignorar el costo del retrabajo y no medir cuánto tiempo ocupa corregir cada error",
          "No valorizar el tiempo del equipo senior que revisa y corrige",
          "Medir solo el ahorro directo y olvidar la capacidad liberada para tareas de mayor valor",
          "Subestimar el costo de oportunidad de reportes lentos o datos atrasados",
        ],
      },
    ],
    conclusion:
      "Un proceso de alto volumen y reglas claras merece evaluación, pero el ROI no debe presumirse. El primer paso es medir: sin línea base y un piloto comparable, no hay caso de negocio verificable.",
  },
  {
    slug: "ocr-con-ia-digitalizar-documentos",
    title: "OCR con IA: cómo convertir documentos en datos útiles",
    description:
      "Cómo funciona el OCR con IA para digitalizar facturas, contratos y formularios: precisión real, casos de uso y cómo integrarlo con tus sistemas.",
    excerpt:
      "Facturas, contratos y PDFs escaneados dejan de ser un cuello de botella: cómo funciona el OCR moderno y dónde genera más impacto.",
    image: "/images/blog-ocr-ia.png",
    category: "Tecnología",
    date: "2026-06-10",
    modifiedDate: "2026-09-01",
    readingTime: "6 min",
    keywords: ["OCR con IA", "digitalización de documentos", "extracción de datos", "procesamiento de facturas"],
    intro:
      "El OCR tradicional convertía imágenes en texto plano, con resultados mediocres en documentos reales. El OCR con IA entiende la estructura del documento: sabe qué es un RUT, un monto, una fecha de vencimiento o una glosa, y entrega datos listos para tus sistemas.",
    sections: [
      {
        heading: "Qué cambió con la IA",
        paragraphs: [
          "Los modelos actuales de visión y lenguaje pueden procesar documentos escaneados, fotos de celular y formatos irregulares sin depender siempre de una plantilla rígida. La precisión varía por campo, calidad de imagen, idioma y tipo documental, por lo que debe medirse con una muestra representativa.",
          "Además, la IA valida el contexto: detecta montos inconsistentes, fechas imposibles o campos faltantes, y deriva esos casos a revisión humana en lugar de ingresarlos con errores.",
        ],
      },
      {
        heading: "Casos de uso con mayor impacto",
        paragraphs: ["Donde vemos más retorno en empresas de LATAM:"],
        bullets: [
          "Facturas y órdenes de compra: de digitación manual a registro automático en el ERP",
          "Contratos y anexos laborales: extracción de cláusulas, fechas y firmas",
          "Formularios y fichas: carnets, licencias y certificados a datos estructurados",
          "Respaldo documental: clasificación y archivo automático con índice buscable",
        ],
      },
      {
        heading: "Cómo se integra con tu operación",
        paragraphs: [
          "El flujo típico: los documentos llegan por correo, carpeta compartida o carga directa; el OCR extrae y valida los datos; los casos dudosos pasan a una bandeja de revisión; y los datos aprobados se registran automáticamente en tu ERP, CRM o planilla.",
          "Todo queda con trazabilidad: sabes qué documento originó cada registro y quién validó cada excepción.",
        ],
      },
    ],
    conclusion:
      "Si tu equipo digita datos desde documentos todos los días, OCR es un candidato razonable para un piloto. El plazo de puesta en marcha depende de la variedad documental, las validaciones y las integraciones necesarias.",
    sources: [
      { title: "Google Cloud Document AI documentation", url: "https://cloud.google.com/document-ai/docs" },
      { title: "Azure AI Document Intelligence documentation", url: "https://learn.microsoft.com/azure/ai-services/document-intelligence/" },
    ],
  },
  {
    slug: "agentes-de-ia-para-empresas",
    title: "Agentes de IA para empresas: qué hacen y cuándo usarlos",
    description:
      "Qué son los agentes de IA, en qué se diferencian de un chatbot, casos de uso reales en operaciones y backoffice, y cómo implementarlos con control.",
    excerpt:
      "Más que chatbots: agentes que consultan sistemas, ejecutan tareas y escalan a humanos cuando corresponde. Cuándo tienen sentido y cuándo no.",
    image: "/images/blog-agentes-ia.png",
    category: "Tecnología",
    date: "2026-06-03",
    modifiedDate: "2026-09-01",
    readingTime: "7 min",
    keywords: ["agentes de IA", "agentes inteligentes", "IA empresarial", "asistentes virtuales empresas"],
    intro:
      "Un agente de IA no solo responde preguntas: consulta tus sistemas, ejecuta acciones y sigue procesos de varios pasos. Es la diferencia entre un chatbot que dice 'consulta el manual' y un asistente que busca el dato, lo valida y registra la gestión.",
    sections: [
      {
        heading: "Chatbot vs. agente: la diferencia práctica",
        paragraphs: [
          "Un chatbot clásico sigue un guion. Un agente de IA razona sobre el objetivo, decide qué herramientas usar (buscar en documentos, consultar una API, crear un ticket) y encadena pasos hasta resolver la tarea.",
          "Ejemplo: ante 'necesito el certificado F30 de marzo', un chatbot entrega un link genérico. Un agente identifica la empresa, consulta el portal, descarga el certificado y lo envía con registro de la gestión.",
        ],
      },
      {
        heading: "Casos de uso que funcionan hoy",
        paragraphs: ["Los agentes generan más valor en tareas acotadas y repetitivas:"],
        bullets: [
          "Soporte interno: responder consultas de RRHH, TI o procedimientos con acceso a la documentación real",
          "Gestión documental: buscar, clasificar y despachar documentos entre áreas",
          "Seguimiento de causas y trámites: monitorear portales públicos y alertar cambios",
          "Prospección: investigar leads, prellenar fichas y preparar outreach personalizado",
        ],
      },
      {
        heading: "Cómo mantener el control",
        paragraphs: [
          "El error común es dar a un agente permisos amplios sin límites. Las buenas prácticas: acciones acotadas por rol, montos y tipos de operación; log completo de cada acción; y validación humana obligatoria en pasos críticos.",
          "Un agente bien diseñado es más auditable que un proceso manual: cada decisión queda registrada con su contexto.",
        ],
      },
    ],
    conclusion:
      "Los agentes de IA son la evolución natural de la automatización: útiles cuando la tarea requiere entender contexto y tomar decisiones simples. Parte con un caso acotado, mide, y expande el alcance con evidencia.",
    sources: [
      { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
    ],
  },
  {
    slug: "automatizacion-para-pymes-por-donde-partir",
    title: "Automatización para pymes: por dónde partir sin sobre-invertir",
    description:
      "Guía práctica de automatización para pymes: cinco procesos candidatos, cómo evaluar el costo y cómo partir con un piloto de bajo riesgo.",
    excerpt:
      "No necesitas un ERP nuevo ni un equipo de TI: los 5 procesos donde una pyme obtiene retorno más rápido al automatizar.",
    image: "/images/blog-procesos-pyme.png",
    category: "Negocio",
    date: "2026-05-27",
    modifiedDate: "2026-09-01",
    readingTime: "6 min",
    keywords: ["automatización pymes", "digitalización pyme", "procesos pyme", "eficiencia operacional"],
    intro:
      "La automatización dejó de ser exclusiva de grandes empresas. Hoy una pyme puede automatizar procesos clave con herramientas cloud y modelos de IA, sin proyectos millonarios ni equipos técnicos internos. La clave: partir por el proceso correcto.",
    sections: [
      {
        heading: "Cinco procesos que conviene evaluar primero",
        paragraphs: ["Estos procesos suelen ser buenos candidatos cuando tienen volumen, reglas claras y una línea base medible:"],
        bullets: [
          "Registro de facturas y conciliación: de horas de digitación a revisión de excepciones",
          "Cotizaciones y seguimiento comercial: respuestas en minutos, no días",
          "Reportes operativos: consolidación automática desde planillas y sistemas",
          "Onboarding y documentos de RRHH: contratos, anexos y certificados sin persecución manual",
          "Respuesta a consultas frecuentes: clientes y equipo interno con respuestas al instante",
        ],
      },
      {
        heading: "Cuánto cuesta realmente",
        paragraphs: [
          "Una automatización acotada (un proceso, integraciones estándar) parte típicamente en el rango de un proyecto de semanas, no de meses. El costo relevante no es la herramienta: es el diseño del flujo y las integraciones con lo que ya usas.",
          "Las horas mensuales ayudan a priorizar, pero no bastan para prometer retorno. También deben medirse errores, esperas, excepciones, costo de integración y mantenimiento.",
        ],
      },
      {
        heading: "Cómo partir con bajo riesgo",
        paragraphs: [
          "Evita el error de intentar automatizar todo de una vez. El camino recomendado es elegir un proceso doloroso y medible, implementar un piloto acotado, medir el cambio real y recién entonces escalar al siguiente proceso.",
          "Exige entregables concretos en cada etapa: blueprint del flujo, MVP con datos reales y documentación operativa. Sin caja negra.",
        ],
      },
    ],
    conclusion:
      "Para una pyme, automatizar bien es cuestión de foco: un proceso a la vez, con retorno medido. El piloto correcto genera evidencia y financia el siguiente paso.",
    sources: [
      { title: "Digitaliza tu Pyme, Ministerio de Economía de Chile", url: "https://www.digitalizatupyme.cl/" },
    ],
  },
  {
    slug: "herramientas-automatizacion-n8n-make-ia",
    title: "n8n, Make y IA: las herramientas detrás de la automatización moderna",
    description:
      "Comparativa práctica de herramientas de automatización: n8n, Make, APIs e IA. Cuándo usar cada una y cómo se combinan en flujos empresariales reales.",
    excerpt:
      "El stack real detrás de las automatizaciones: qué hace n8n, qué hace Make, dónde entra la IA y cómo se combinan sin fragilidad.",
    image: "/images/blog-herramientas.png",
    category: "Tecnología",
    date: "2026-05-20",
    modifiedDate: "2026-09-01",
    readingTime: "8 min",
    keywords: ["n8n", "Make", "herramientas automatización", "integración de sistemas", "workflows"],
    intro:
      "Detrás de cada automatización robusta hay un stack de herramientas que orquesta datos entre sistemas. Entender qué hace cada pieza te ayuda a evaluar propuestas, evitar dependencias innecesarias y exigir soluciones mantenibles.",
    sections: [
      {
        heading: "Orquestadores: n8n y Make",
        paragraphs: [
          "n8n y Make son plataformas de orquestación: conectan aplicaciones (correo, ERP, CRM, planillas, WhatsApp) y ejecutan flujos con lógica condicional, reintentos y manejo de errores.",
          "Make brilla en flujos simples y rápidos de montar. n8n destaca cuando necesitas control: se puede alojar en tu propia infraestructura, maneja lógica compleja y escala mejor en volumen. Para procesos con datos sensibles, n8n self-hosted suele ser la elección correcta.",
        ],
      },
      {
        heading: "Dónde entra la IA en el flujo",
        paragraphs: [
          "La IA no reemplaza al orquestador: se inserta como un paso más del flujo, en los puntos donde hay información no estructurada o decisiones de contexto.",
        ],
        bullets: [
          "Extracción: convertir documentos, correos y notas en datos estructurados",
          "Clasificación: derivar casos al flujo correcto según contenido",
          "Generación: redactar respuestas, resúmenes y reportes a partir de datos",
          "Validación: detectar inconsistencias antes de registrar información",
        ],
      },
      {
        heading: "Señales de una buena arquitectura",
        paragraphs: [
          "Independiente de las herramientas, una automatización mantenible tiene: manejo de errores explícito (qué pasa cuando algo falla), logs consultables, alertas cuando un flujo se detiene, y documentación del flujo que cualquier técnico pueda leer.",
          "Desconfía de automatizaciones 'mágicas' sin trazabilidad: cuando fallan —y todas fallan alguna vez— el costo de no saber por qué es altísimo.",
        ],
      },
    ],
    conclusion:
      "Las herramientas importan menos que el diseño: un flujo con IA en los puntos correctos, manejo de errores explícito y documentación clara es más fácil de operar, auditar y mantener.",
    sources: [
      { title: "n8n documentation", url: "https://docs.n8n.io/" },
      { title: "Make Help Center", url: "https://help.make.com/" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

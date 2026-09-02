// src/config/productos.ts
// Fuente única de productos para la landing y las mini-páginas.

export type ProductDetails = {
  description: string;
  timeToValue: string;           // tiempo típico de puesta en marcha
  modules: string[];             // funcionalidades/módulos clave
  integrations?: string[];       // integraciones frecuentes
  stages?: { name: string; description: string; outputs?: string[] }[];
  notes?: string[];
};

export type ProductResult = {
  title: string;
  description: string;
};

export type ProductFaq = {
  question: string;
  answer: string;
};

export type ProductCloseCta = {
  title: string;
  text: string;
  primary: string;
  secondary: string;
};

export type Product = {
  slug: "sofia" | "antonia" | "massimo" | "procedura";
  name: string;
  tagline: string;               // 1–2 frases simples para tarjeta
  highlights: string[];          // 2–4 bullets cortos y entendibles
  badge?: "Nuevo" | "Beta" | "Pro" | "—";
  details: ProductDetails;
  pageTitle?: string;
  pageSubtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  supportPoints?: string[];
  results?: ProductResult[];
  idealFor?: string[];
  faq?: ProductFaq[];
  closeCta?: ProductCloseCta;
  seoTitle?: string;
  seoDescription?: string;
};

export const PRODUCTS: Product[] = [
  {
    slug: "sofia",
    name: "SOF.IA",
    badge: "Pro",
    tagline:
      "Tu propio ChatGPT corporativo: privado y experto en responder dudas inmediatas usando solo los documentos de tu empresa.",
    highlights: [
      "Se conecta a tu Google Drive/SharePoint y está listo en días, no meses.",
      "Respuestas precisas en WhatsApp o Web, citando tus propios archivos.",
    ],
    pageTitle: "Tu asistente interno con IA, entrenado con tu propio conocimiento.",
    pageSubtitle:
      "SOF.IA responde dudas operativas en segundos, entrega fuentes verificables y reduce la dependencia de expertos para tareas repetitivas.",
    ctaPrimary: "Quiero demo guiada",
    ctaSecondary: "Ver módulos",
    supportPoints: [
      "RAG con trazabilidad de fuentes",
      "Canales WhatsApp, Telegram y Web",
      "Control de acceso por roles",
      "Panel de uso y adopción",
    ],
    results: [
      {
        title: "Menos tiempo perdido buscando información",
        description:
          "Centraliza respuestas sobre políticas, procedimientos y documentos sin depender de múltiples chats o correos.",
      },
      {
        title: "Onboarding más rápido",
        description:
          "Nuevos integrantes acceden al conocimiento interno con respuestas contextualizadas desde el día uno.",
      },
      {
        title: "Soporte interno más consistente",
        description:
          "Estandariza respuestas y reduce variaciones entre áreas gracias a una base única de conocimiento.",
      },
      {
        title: "Escalamiento inteligente",
        description:
          "Cuando falta contexto, deriva al equipo correcto con trazabilidad para mantener continuidad en la atención.",
      },
    ],
    idealFor: [
      "Equipos de Operaciones, Soporte o RR. HH. con alto volumen de consultas internas.",
      "Empresas con documentación dispersa en Drive, SharePoint u otros repositorios.",
      "Organizaciones que necesitan respuestas auditables y control de permisos.",
    ],
    faq: [
      {
        question: "¿SOF.IA puede responder con información sensible?",
        answer:
          "Sí, siempre que las fuentes y permisos estén bien configurados. El acceso se controla por rol y origen documental.",
      },
      {
        question: "¿Qué pasa cuando no encuentra una respuesta confiable?",
        answer:
          "Puede devolver una respuesta con bajo nivel de certeza y derivar automáticamente a un flujo de soporte humano.",
      },
      {
        question: "¿Cuánto tarda tener un piloto operando?",
        answer:
          "Normalmente entre 1 y 2 semanas, dependiendo de la calidad de las fuentes y definición de permisos.",
      },
      {
        question: "¿Se integra con nuestros canales actuales?",
        answer:
          "Sí. Puede publicarse en Web, WhatsApp o Telegram y conectarse con tus sistemas internos vía APIs.",
      },
    ],
    closeCta: {
      title: "Convierte tu conocimiento interno en respuestas accionables.",
      text:
        "Te mostramos un piloto con tus propios documentos para que evalúes impacto real en tiempos de respuesta y adopción.",
      primary: "Agendar demo",
      secondary: "Hablar por WhatsApp",
    },
    seoTitle: "SOF.IA | Asistente corporativo con IA para conocimiento interno",
    seoDescription:
      "Asistente con IA para responder consultas internas con RAG, control de acceso por roles y trazabilidad de fuentes.",
    details: {
      description:
        "SOF.IA ayuda a tu equipo a encontrar procedimientos, políticas y respuestas en segundos, integrándose con tus repositorios de documentos y respetando permisos.",
      timeToValue: "Onboarding 3–7 días; primer MVP en 1–2 semanas.",
      modules: [
        "Q&A sobre documentos (RAG) con trazabilidad de fuentes.",
        "Envío/descarga de archivos y versiones.",
        "Panel de administración y métricas de uso.",
        "Flujos de tickets/derivaciones (opcional).",
      ],
      integrations: [
        "Google Drive/SharePoint",
        "Supabase/Postgres (vector store)",
        "WhatsApp/Telegram",
        "n8n/Make",
      ],
      stages: [
        {
          name: "Descubrimiento",
          description: "Fuentes de conocimiento, permisos y casos de uso.",
          outputs: ["Mapa de fuentes", "Backlog priorizado"],
        },
        {
          name: "MVP",
          description: "Carga inicial de documentos y Q&A básico.",
          outputs: ["Bot operativo", "Guías de uso"],
        },
        {
          name: "Escala",
          description: "Más fuentes, métricas y flujos avanzados.",
          outputs: ["Reportes", "Playbooks de operación"],
        },
      ],
      notes: [
        "Requiere política de permisos y limpieza básica de documentos para mejores resultados.",
      ],
    },
  },
  {
    slug: "antonia",
    name: "ANTON.IA LeadFlow",
    badge: "Pro",
    tagline:
      "Tu nuevo SDR impulsado por IA que busca, califica y contacta a tus prospectos B2B ideales en piloto automático.",
    highlights: [
      "Encuentra leads precalificados 24/7 y llena tu pipeline sin trabajo manual.",
      "Integración directa con tu CRM, enriquecimiento y borradores de outreach.",
    ],
    pageTitle: "Prospección B2B más rápida, con mejor foco comercial.",
    pageSubtitle:
      "ANTON.IA LeadFlow encuentra cuentas objetivo, enriquece datos y prioriza oportunidades para que tu equipo comercial llegue mejor preparado.",
    ctaPrimary: "Quiero demo comercial",
    ctaSecondary: "Ver módulos",
    supportPoints: [
      "Búsqueda y deduplicación de prospectos",
      "Enriquecimiento de datos comerciales",
      "Scoring dinámico por ICP",
      "Borradores de outreach con IA",
    ],
    results: [
      {
        title: "Pipeline más limpio y priorizado",
        description:
          "Reduce ruido en bases de leads y enfoca al equipo en cuentas con mayor probabilidad de avance.",
      },
      {
        title: "Menos tiempo operativo por ejecutivo",
        description:
          "Automatiza tareas repetitivas de búsqueda, normalización y enriquecimiento de datos comerciales.",
      },
      {
        title: "Outreach más relevante",
        description:
          "Genera borradores de contacto alineados al perfil del prospecto y su contexto de negocio.",
      },
      {
        title: "Mejor control del proceso",
        description:
          "Monitorea fuentes, criterios de scoring y resultados para iterar con foco en conversión.",
      },
    ],
    idealFor: [
      "Equipos de ventas B2B que quieren escalar prospección sin sumar carga manual.",
      "Áreas comerciales con múltiples fuentes de datos y baja estandarización.",
      "Empresas que necesitan alinear generación de demanda con un ICP claro.",
    ],
    faq: [
      {
        question: "¿Reemplaza a mi equipo comercial?",
        answer:
          "No. Acelera investigación y preparación para que el equipo venda con más foco y menos trabajo operativo.",
      },
      {
        question: "¿Podemos ajustar el scoring a nuestro ICP?",
        answer:
          "Sí. El modelo de priorización se adapta a tus criterios comerciales, segmento e historial de cierre.",
      },
      {
        question: "¿Cómo se evitan duplicados o datos inconsistentes?",
        answer:
          "Incluye lógica de deduplicación, normalización y validación para mantener una base utilizable por ventas.",
      },
      {
        question: "¿Cuándo se ven resultados?",
        answer:
          "El primer batch útil suele estar en 3 a 5 días, y el flujo completo en 1 a 2 semanas.",
      },
    ],
    closeCta: {
      title: "Llena tu pipeline con mejores oportunidades, no con más ruido.",
      text:
        "Revisamos tu ICP y armamos una prueba con cuentas reales para validar velocidad, calidad y conversión.",
      primary: "Agendar demo",
      secondary: "Hablar por WhatsApp",
    },
    seoTitle: "ANTON.IA LeadFlow | Prospección B2B con IA",
    seoDescription:
      "Plataforma para búsqueda, enriquecimiento y scoring de leads B2B con IA y apoyo en outreach comercial.",
    details: {
      description:
        "ANTON.IA automatiza la prospección: encuentra empresas/personas objetivo, enriquece datos y sugiere mensajes de contacto adaptados al buyer persona.",
      timeToValue: "Primer batch de leads en 3–5 días; flujo completo en 1–2 semanas.",
      modules: [
        "Scraping/ingesta de fuentes (listings, webs, redes).",
        "Enriquecimiento (cargos, mails, compañía).",
        "Scoring dinámico por buyer persona.",
        "Borradores de email y seguimiento.",
      ],
      integrations: [
        "Outlook/Gmail",
        "Apify/APIs de datos",
        "Supabase/Postgres",
        "n8n/Make",
      ],
      stages: [
        {
          name: "Brief de ICP",
          description: "Definición de industria, geos y criterios.",
          outputs: ["Perfil objetivo", "Lista semilla"],
        },
        {
          name: "MVP",
          description: "Primer lote + enriquecimiento + borradores.",
          outputs: ["CSV/Panel de leads", "Plantillas de correo"],
        },
        {
          name: "Optimización",
          description: "Scoring, iteración de fuentes y automatización de outreach.",
          outputs: ["Playbooks", "KPIs de respuesta"],
        },
      ],
      notes: [
        "Respeta las políticas anti-spam; se recomiendan dominios de envío dedicados.",
      ],
    },
  },
  {
    slug: "massimo",
    name: "MASSIMO",
    badge: "Nuevo",
    tagline:
      "Tu agencia de marketing digital automatizada: planifica campañas, analiza tendencias y crea contenidos sin fricción.",
    highlights: [
      "Aumenta la capacidad de creación de contenido con un flujo estratégico y medible.",
      "Alineación total entre la investigación y la ejecución automática multicanal.",
    ],
    pageTitle: "Marketing operativo con IA, de la idea al reporte.",
    pageSubtitle:
      "MASSIMO centraliza campañas, contenidos y social listening para que tu equipo ejecute más rápido con control de resultados.",
    ctaPrimary: "Quiero demo de marketing",
    ctaSecondary: "Ver módulos",
    supportPoints: [
      "Campañas y automatizaciones multicanal",
      "Social listening y detección de tendencias",
      "Copys y contenidos asistidos por IA",
      "Métricas de desempeño por campaña",
    ],
    results: [
      {
        title: "Más velocidad de ejecución",
        description:
          "Reduce el tiempo entre planificación y publicación con plantillas, flujos y reutilización de activos.",
      },
      {
        title: "Contenido con dirección clara",
        description:
          "Alinea generación de copys y piezas al objetivo de cada campaña, canal y etapa del funnel.",
      },
      {
        title: "Decisiones con datos",
        description:
          "Consolida señales de rendimiento y escucha de mercado para iterar estrategia con evidencia.",
      },
      {
        title: "Menos fricción entre equipos",
        description:
          "Coordina marketing, contenido y aprobación desde un flujo compartido con visibilidad del estado.",
      },
    ],
    idealFor: [
      "Equipos de marketing que operan varios canales y necesitan orden operativo.",
      "Empresas que quieren aumentar volumen de contenido sin sacrificar consistencia.",
      "Áreas comerciales y de marca que requieren visibilidad continua del rendimiento.",
    ],
    faq: [
      {
        question: "¿MASSIMO sirve para equipos pequeños?",
        answer:
          "Sí. Parte con módulos base para campañas y contenidos, y luego escala según complejidad de operación.",
      },
      {
        question: "¿Podemos mantener nuestras herramientas actuales?",
        answer:
          "Sí. Se integra con stack existente para evitar reemplazos forzados y acelerar adopción.",
      },
      {
        question: "¿Cómo se mide el impacto?",
        answer:
          "Con KPIs de ejecución, respuesta y conversión, trazados por campaña y canal.",
      },
      {
        question: "¿Incluye soporte para buenas prácticas de entregabilidad?",
        answer:
          "Sí. Se recomienda configurar SPF/DKIM/DMARC y mantener higiene de listas para mejores resultados.",
      },
    ],
    closeCta: {
      title: "Transforma marketing en un sistema operativo medible.",
      text:
        "Te mostramos cómo orquestar campañas, contenidos y medición en un solo flujo adaptado a tu equipo.",
      primary: "Agendar demo",
      secondary: "Hablar por WhatsApp",
    },
    seoTitle: "MASSIMO | Suite de automatización de marketing con IA",
    seoDescription:
      "Suite para campañas, social listening y generación de contenidos con IA, con métricas de desempeño en una sola vista.",
    details: {
      description:
        "MASSIMO centraliza la operación de marketing: investiga tendencias, genera contenidos, ejecuta campañas y mide resultados con soporte de IA.",
      timeToValue: "Onboarding 3–5 días; MVP en 1–2 semanas.",
      modules: [
        "Campañas (email/push) y listas.",
        "Social listening (YouTube/Google/TikTok).",
        "Generación de contenidos y biblioteca de prompts.",
        "Calendario editorial y aprobaciones.",
        "Dashboard y UTMs.",
      ],
      integrations: [
        "Outlook/Gmail",
        "n8n/Make",
        "Supabase/Postgres",
        "Google Analytics/Tag Manager",
      ],
      stages: [
        { name: "Descubrimiento", description: "Canales, objetivos y KPIs." },
        { name: "MVP", description: "1–2 campañas + listening + plantillas." },
        { name: "Escala", description: "Integraciones, calendario y dashboards." },
      ],
      notes: [
        "Para mejor entregabilidad, configurar SPF/DKIM/DMARC del dominio.",
      ],
    },
  },
  {
    slug: "procedura",
    name: "PROCEDURA",
    badge: "Pro",
    tagline:
      "El software integral que automatiza el cumplimiento ISO 9001: pasa de una conversación a normativas aprobadas en minutos.",
    highlights: [
      "De la voz o notas a documentos normativos con auditoría garantizada.",
      "Trazabilidad total, control por roles, versionado y múltiples formatos (PDF/BPMN).",
    ],
    pageTitle: "Procedimientos ISO 9001 listos para auditoría, con menos trabajo manual.",
    pageSubtitle:
      "PROCEDURA centraliza la creación, revisión, aprobación y versionado de procedimientos en una plataforma SaaS multiempresa con trazabilidad completa.",
    ctaPrimary: "Quiero demo de Procedura",
    ctaSecondary: "Ver módulos",
    supportPoints: [
      "Captura por chat, voz, formularios y DOCX",
      "Flujo de revisión y aprobación por roles",
      "Versionado automático con historial",
      "Exportación PDF, DOCX, HTML, JSON y BPMN",
    ],
    results: [
      {
        title: "Ahorro de tiempo documental",
        description:
          "Convierte notas y entrevistas en borradores estructurados para evitar empezar desde cero en cada procedimiento.",
      },
      {
        title: "Mejor preparación para auditorías",
        description:
          "Trabaja con validaciones y reglas de calidad que fortalecen la readiness ISO 9001.",
      },
      {
        title: "Estandarización entre áreas",
        description:
          "Unifica formato, flujo de estados y criterios de revisión para mantener consistencia organizacional.",
      },
      {
        title: "Gobernanza con evidencia",
        description:
          "Mantiene trazabilidad de cambios, comentarios y aprobaciones para respaldar decisiones internas y externas.",
      },
    ],
    idealFor: [
      "Equipos de Calidad y Compliance que necesitan control del ciclo documental.",
      "Operaciones con procedimientos críticos y múltiples revisores.",
      "Organizaciones que preparan auditorías y requieren evidencia trazable.",
    ],
    faq: [
      {
        question: "¿PROCEDURA garantiza certificación ISO 9001?",
        answer:
          "No. Mejora la readiness y control documental, pero la certificación depende del organismo evaluador.",
      },
      {
        question: "¿Podemos migrar procedimientos desde Word?",
        answer:
          "Sí. Puedes cargar DOCX como base para generación o actualización con asistencia de IA.",
      },
      {
        question: "¿Se puede trabajar con distintos perfiles y aprobadores?",
        answer:
          "Sí. Incluye roles y trazabilidad de acciones para cada etapa del proceso.",
      },
      {
        question: "¿Qué formatos de salida soporta?",
        answer:
          "PDF, DOCX, HTML, JSON y BPMN (SVG/XML) para operación interna y auditorías.",
      },
    ],
    closeCta: {
      title: "Pasa de documentos dispersos a un sistema ISO gobernado.",
      text:
        "Evalúa la plataforma con tus propios procedimientos y define un plan de adopción por etapas.",
      primary: "Agendar demo",
      secondary: "Solicitar propuesta",
    },
    seoTitle: "PROCEDURA | Software ISO 9001 con IA",
    seoDescription:
      "Plataforma SaaS para crear, revisar y aprobar procedimientos ISO 9001 con IA, versionado y trazabilidad completa.",
    details: {
      description:
        "PROCEDURA digitaliza el ciclo completo de documentación de calidad: desde la captura del proceso hasta la publicación aprobada, con asistencia de IA, versionado y evidencia auditable.",
      timeToValue: "Piloto en 2–4 semanas; despliegue por áreas en 4–8 semanas.",
      modules: [
        "Creación asistida por IA para estructurar y actualizar procedimientos.",
        "Flujo de estados de borrador, revisión, aprobación y publicación.",
        "Versionado automático con historial y comparación de cambios.",
        "Validación de calidad/compliance orientada a ISO 9001 readiness.",
        "Exportación multi-formato: PDF, DOCX, HTML, JSON y BPMN.",
      ],
      stages: [
        {
          name: "Captura",
          description: "Ingreso del proceso por chat, formulario guiado, voz o importación DOCX.",
          outputs: ["Contexto inicial", "Fuentes base", "Brief del procedimiento"],
        },
        {
          name: "Generación",
          description: "La IA construye o actualiza el borrador con estructura documental consistente.",
          outputs: ["Borrador estructurado", "Secciones completadas"],
        },
        {
          name: "Colaboración",
          description: "Equipo y revisores comentan en contexto y aplican ajustes.",
          outputs: ["Comentarios", "Cambios sugeridos", "Consenso de revisión"],
        },
        {
          name: "Validación",
          description: "Controles de calidad/compliance y aprobación por rol antes de publicar.",
          outputs: ["Checks de calidad", "Aprobación", "Trazabilidad de decisiones"],
        },
        {
          name: "Publicación",
          description: "Salida a formato final y distribución para operación y auditoría.",
          outputs: ["Documento publicado", "Exportables", "Evidencia para auditoría"],
        },
      ],
      notes: [
        "Ideal para áreas de Operaciones, Calidad y Compliance que necesitan gobernanza documental real.",
        "Mejora la readiness para auditorías, pero no reemplaza la certificación por un organismo externo.",
      ],
    },
  },
];

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

export type Product = {
  slug: "sofia" | "antonia" | "massimo";
  name: string;
  tagline: string;               // 1–2 frases simples para tarjeta
  highlights: string[];          // 2–4 bullets cortos y entendibles
  badge?: "Nuevo" | "Beta" | "Pro" | "—";
  details: ProductDetails;
};

export const PRODUCTS: Product[] = [
  {
    slug: "sofia",
    name: "SOF.IA",
    badge: "Pro",
    tagline:
      "Asistente corporativo con IA para responder preguntas internas y entregar documentos al instante.",
    highlights: [
      "Búsqueda en documentos internos (RAG) con control de acceso.",
      "Disponible en WhatsApp, Telegram o Web.",
    ],
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
      "Generación y enriquecimiento de leads B2B con IA: busca, prioriza y prepara el contacto.",
    highlights: [
      "Búsqueda/apilado de prospectos y deduplicación.",
      "Enriquecimiento y borradores de outreach.",
    ],
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
        "Apify/Apis de datos",
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
      "Suite de automatización de marketing con IA: campañas, social listening y contenidos.",
    highlights: [
      "Campañas con plantillas y tracking.",
      "Tendencias + generación de copys con IA.",
    ],
    details: {
      description:
        "MASSIMO centraliza la operación de marketing: investiga tendencias, genera contenidos, ejecuta campañas y mide resultados con soporte de IA.",
      timeToValue: "Onboarding 3–5 días; MVP en 1–2 semanas.",
      modules: [
        "Campañas (email/push) y listas.",
        "Social listening (YouTube/Google/TikTok).",
        "Generación de contenidos y prompts library.",
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
];

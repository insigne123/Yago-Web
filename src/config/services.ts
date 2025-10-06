// src/config/services.ts
// Definición centralizada de los servicios y su contenido para mini-páginas.

export type ServiceStage = {
  name: string;
  description: string;
  outputs?: string[];
};

export type Service = {
  slug: "automatizacion-procesos" | "apps-automatizacion" | "paginas-web" | "capacitacion-ia";
  title: string;
  short: string; // resumen para la tarjeta
  duration: string; // tiempo típico de producción
  stack?: string[]; // tecnologías frecuentes
  stages: ServiceStage[]; // etapas del proyecto
  deliverables: string[]; // entregables estándar
  notes?: string[]; // consideraciones, límites, etc.
};

export const SERVICES: Service[] = [
  {
    slug: "automatizacion-procesos",
    title: "Automatización de procesos",
    short: "Orquestamos tareas repetitivas con IA y APIs para ahorrar HH y reducir errores.",
    duration: "MVP en 1–2 semanas; productivo en 3–6 semanas (según integraciones).",
    stack: ["n8n/Make", "Genkit/Vertex/OpenAI", "APIs REST/Graph", "Google/Microsoft 365", "DB SQL/NoSQL"],
    stages: [
      {
        name: "Discovery & ROI",
        description: "Mapeo as-is/to-be, definición de KPIs, cálculo de retorno.",
        outputs: ["Backlog priorizado", "Blueprint del flujo", "Estimación de ROI"],
      },
      {
        name: "Diseño & Conectores",
        description: "Arquitectura, permisos, conectores a sistemas del cliente.",
        outputs: ["Diagrama de arquitectura", "Plan de accesos/seguridad"],
      },
      {
        name: "MVP / PoC",
        description: "Automatización acotada con datos reales y control de errores.",
        outputs: ["MVP funcional", "KPIs iniciales"],
      },
      {
        name: "UAT & Despliegue",
        description: "Pruebas con usuarios, documentación y monitoreo.",
        outputs: ["Runbook", "Monitoreo/alertas", "Checklist de operación"],
      },
    ],
    deliverables: [
      "Flujo(s) automatizados con control de errores",
      "Conectores a sistemas internos",
      "Documentación operativa y de soporte",
      "Panel de métricas/KPIs (si aplica)",
    ],
    notes: [
      "Procesos de alta ambigüedad usan validación humana (Human-in-the-Loop).",
      "Requerimos accesos y políticas de seguridad del cliente para integraciones.",
    ],
  },
  {
    slug: "apps-automatizacion",
    title: "Apps que centralizan automatización",
    short: "Aplicaciones web para operar y monitorear flujos: panel, permisos, logs y acciones.",
    duration: "2–4 semanas el primer módulo; evolución continua por sprints.",
    stack: ["Next.js", "TypeScript", "Tailwind + ShadCN", "Supabase/Postgres", "APIs internas"],
    stages: [
      {
        name: "UX Funcional",
        description: "Casos de uso, mapas de navegación y permisos.",
        outputs: ["Wireframes", "Modelo de datos"],
      },
      {
        name: "Build del Panel",
        description: "Vistas, roles, auditoría y acciones sobre flujos.",
        outputs: ["Módulos de UI", "APIs seguras"],
      },
      {
        name: "Integración",
        description: "Conexión con automatizaciones existentes (n8n/Make/Jobs).",
        outputs: ["Endpoints / webhooks", "Logs centralizados"],
      },
      {
        name: "UAT & Go-live",
        description: "Pruebas, hardening y despliegue.",
        outputs: ["Manual de usuario", "SLA/soporte"],
      },
    ],
    deliverables: [
      "Aplicación web administrable",
      "Roles y permisos",
      "Registro de eventos y auditoría",
      "Manual de operación",
    ],
  },
  {
    slug: "paginas-web",
    title: "Páginas web personalizadas",
    short: "Sitios modernos y performantes que comunican productos y capturan demanda.",
    duration: "1–3 semanas según número de secciones e integraciones.",
    stack: ["Next.js", "Tailwind", "Vercel/Firebase", "Analytics/SEO"],
    stages: [
      {
        name: "Brief & Contenidos",
        description: "Definición de objetivo, mapa del sitio e identidad visual.",
        outputs: ["Site-map", "Guía de estilo"],
      },
      {
        name: "Implementación",
        description: "Componentes, animaciones, responsivo, SEO técnico.",
        outputs: ["Página funcional", "Optimización Core Web Vitals"],
      },
      {
        name: "Integraciones",
        description: "Formularios, CRM, chat, analytics, pixel.",
        outputs: ["Conexión a herramientas", "Eventos de conversión"],
      },
      {
        name: "Lanzamiento",
        description: "QA, accesibilidad e indexación.",
        outputs: ["Checklist SEO", "Deploy y DNS"],
      },
    ],
    deliverables: [
      "Repositorio y deploy del sitio",
      "Manual de edición de contenidos",
      "Integraciones requeridas",
    ],
  },
  {
    slug: "capacitacion-ia",
    title: "Capacitación de equipos en IA",
    short: "Workshops prácticos y guías operativas para adoptar IA con seguridad y ROI.",
    duration: "Bootcamp de 6–12 horas; programas a medida desde 2 semanas.",
    stack: ["Playbooks de prompts", "Plantillas", "Buenas prácticas de datos/seguridad"],
    stages: [
      {
        name: "Diagnóstico",
        description: "Niveles de madurez y casos de uso por área.",
        outputs: ["Mapa de casos por área", "Plan de contenidos"],
      },
      {
        name: "Talleres",
        description: "Sesiones prácticas con datasets y herramientas del cliente.",
        outputs: ["Materiales y ejercicios", "Guías de referencia"],
      },
      {
        name: "Acompañamiento",
        description: "Soporte en la adopción inicial y medición de impacto.",
        outputs: ["KPIs de adopción", "Buenas prácticas"],
      },
    ],
    deliverables: [
      "Materiales de capacitación y grabaciones (si aplica)",
      "Playbooks por rol/área",
      "Plan de adopción",
    ],
  },
];

// Helper para obtener un servicio por slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

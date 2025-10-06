// src/config/productos.ts
// Fuente única de productos mostrados en la sección "Productos".

export type Product = {
  slug: string;
  name: string;
  tagline: string;        // resumen corto visible en la tarjeta
  highlights: string[];   // bullets rápidos
  cta?: { label: string; href: string; external?: boolean };
  badge?: "Nuevo" | "Beta" | "Pro" | "—";
};

export const PRODUCTS: Product[] = [
  {
    slug: "massimo",
    name: "MASSIMO",
    badge: "Nuevo",
    tagline:
      "Suite de automatización de marketing con IA: campañas, social listening y contenidos en minutos.",
    highlights: [
      "Campañas de email con plantillas y tracking (aperturas, clics, respuestas).",
      "Social listening (YouTube/Google Trends/TikTok) para detectar tendencias.",
      "Generación de copys y creatividades con IA + repositorio de prompts.",
      "Calendario editorial, programación y aprobaciones por equipo.",
      "Dashboard de métricas y scoring por buyer persona.",
      "Integraciones: Outlook/Gmail, n8n/Make, APIs externas.",
    ],
    cta: {
      label: "Conocer MASSIMO",
      href: "/#contacto",
    },
  },
  // Si luego agregas más productos, añádelos aquí.
];

export type OcrMasterFeature = {
  title: string;
  description: string;
};

export type OcrMasterApiDetail = {
  label: string;
  value: string;
};

export type OcrMasterBenefit = {
  title: string;
  description: string;
  tone: "sky" | "amber" | "mint";
};

export type OcrMasterPlan = {
  name: string;
  documentsPerMonth: string;
  summary: string;
  annualPrice: string;
  monthlyPrice: string;
  extraDocPrice: string;
  tone: "sky" | "mint" | "amber";
  cta: string;
};

export const OCR_MASTER = {
  badge: "OCR Premium vía API",
  title: "OCR Master",
  subtitle: "OCR premium para integración API.",
  description:
    "Procesa PDF e imágenes y entrega JSON estructurado listo para sistemas, onboarding y operaciones documentales. Pensado para uso comercial B2B con una meta operativa de hasta 95% de confianza de datos en flujos compatibles.",
  supportingText:
    "Tecnología, presentación comercial clara y propuesta lista para demo o piloto.",
  featurePills: ["Integración simple", "Salida JSON", "Escalable por volumen"],
  apiBadge: "API-First Premium",
  apiTitle: "Integración lista",
  apiDescription:
    "Endpoint central para integrar OCR Master con sistemas, portales y automatización documental.",
  apiDetails: [
    { label: "Endpoint", value: "POST /v1/process" },
    { label: "Auth", value: "x-api-key" },
    { label: "Formatos", value: "PDF | JPG | PNG | HEIC" },
    { label: "Salida", value: "JSON estructurado" },
  ] as OcrMasterApiDetail[],
  metaTitle: "Meta operativa",
  metaValue: "Hasta 95% de confianza de datos",
  metaDescription:
    "Según calidad del archivo, tipo documental y configuración del flujo.",
  proposalTitle: "Propuesta comercial",
  proposalDescription:
    "Brochure premium de una hoja para explicar producto, API, precisión objetivo y precios.",
  benefits: [
    {
      title: "Integración simple",
      description:
        "Implementación rápida sobre un endpoint central, autenticado y listo para flujos B2B.",
      tone: "sky",
    },
    {
      title: "Precisión objetivo",
      description:
        "Meta operativa de hasta 95% de confianza de datos en escenarios compatibles.",
      tone: "amber",
    },
    {
      title: "Escala comercial",
      description:
        "Planes mensuales desde 2,500 hasta 20,000 documentos, con extras en Pro y Premium.",
      tone: "mint",
    },
  ] as OcrMasterBenefit[],
  pricingTitle: "Planes y precios",
  pricingDescription: "Valores mensuales en USD. Pago anual o mensual según el plan.",
  plans: [
    {
      name: "Standard",
      documentsPerMonth: "2,500",
      summary:
        "Base comercial para equipos que necesitan una propuesta clara, moderna y lista para empezar.",
      annualPrice: "USD 170",
      monthlyPrice: "USD 190",
      extraDocPrice: "Volumen mensual incluido.",
      tone: "sky",
      cta: "Solicitar demo",
    },
    {
      name: "Pro",
      documentsPerMonth: "10,000",
      summary:
        "Mayor capacidad para operaciones con más carga y crecimiento controlado por documento adicional.",
      annualPrice: "USD 500",
      monthlyPrice: "USD 570",
      extraDocPrice: "Documentos extra: USD 0.04 por documento.",
      tone: "mint",
      cta: "Solicitar demo Pro",
    },
    {
      name: "Premium",
      documentsPerMonth: "20,000",
      summary:
        "Versión de mayor volumen, mejor valor para extras y posicionamiento más premium para cuentas exigentes.",
      annualPrice: "USD 850",
      monthlyPrice: "USD 969",
      extraDocPrice: "Documentos extra: USD 0.03 por documento.",
      tone: "amber",
      cta: "Hablar con ventas",
    },
  ] as OcrMasterPlan[],
  footerTitle: "YAGO SPA",
  footerDescription:
    "OCR Master se presenta como propuesta premium para automatización documental mediante API. Brochure refinado para propuesta comercial, demo o presentación ejecutiva.",
  footerHighlights: ["Hasta 95% de confianza de datos", "POST /v1/process -> JSON"],
};

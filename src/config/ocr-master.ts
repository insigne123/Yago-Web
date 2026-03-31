export type OcrMasterApiDetail = {
  label: string;
  value: string;
};

export type OcrMasterBenefit = {
  title: string;
  description: string;
  tone: "sky" | "amber" | "mint";
};

export type OcrMasterResult = {
  title: string;
  description: string;
};

export type OcrMasterBuyerBlock = {
  buyer: string;
  summary: string;
  items: string[];
};

export type OcrMasterStage = {
  name: string;
  description: string;
  outputs?: string[];
};

export type OcrMasterPlan = {
  name: string;
  audience: string;
  documentsPerMonth: string;
  summary: string;
  includes: string[];
  annualPrice: string;
  monthlyPrice: string;
  extraDocPrice: string;
  tone: "sky" | "mint" | "amber";
  cta: string;
};

export type OcrMasterFaq = {
  question: string;
  answer: string;
};

export type OcrMasterCloseCta = {
  title: string;
  text: string;
  primary: string;
  secondary: string;
};

export const OCR_MASTER = {
  badge: "OCR Premium via API",
  title: "OCR Master",
  subtitle: "OCR premium para integracion API.",
  description:
    "Procesa PDF e imagenes y entrega JSON estructurado listo para sistemas, onboarding y operaciones documentales. Pensado para uso comercial B2B con una meta operativa de hasta 95% de confianza de datos en flujos compatibles.",
  supportingText:
    "Tecnologia, presentacion comercial clara y propuesta lista para demo o piloto.",
  featurePills: ["Integracion simple", "Salida JSON", "Escalable por volumen"],
  apiBadge: "API-First Premium",
  apiTitle: "Integracion lista",
  apiDescription:
    "Endpoint central para integrar OCR Master con sistemas, portales y automatizacion documental.",
  apiDetails: [
    { label: "Endpoint", value: "POST /v1/process" },
    { label: "Auth", value: "x-api-key" },
    { label: "Formatos", value: "PDF | JPG | PNG | HEIC" },
    { label: "Salida", value: "JSON estructurado" },
  ] as OcrMasterApiDetail[],
  metaTitle: "Meta operativa",
  metaValue: "Hasta 95% de confianza de datos",
  metaDescription:
    "Segun calidad del archivo, tipo documental y configuracion del flujo.",
  proposalTitle: "Propuesta comercial",
  proposalDescription:
    "Brochure premium de una hoja para explicar producto, API, precision objetivo y precios.",
  pageTitle: "OCR premium para integracion API en operaciones documentales.",
  pageSubtitle:
    "Centraliza captura documental, extrae campos listos para sistema y escala la operacion con una experiencia mas comercial, clara y facil de integrar.",
  pageSupportPoints: [
    "Endpoint autenticado y listo para portales, onboarding y backoffice",
    "JSON estructurado para integraciones y automatizacion",
    "Escalamiento comercial con planes definidos por volumen",
    "Posibilidad de demo o piloto rapido con propuesta clara",
  ],
  benefits: [
    {
      title: "Integracion simple",
      description:
        "Implementacion rapida sobre un endpoint central, autenticado y listo para flujos B2B.",
      tone: "sky",
    },
    {
      title: "Precision objetivo",
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
  results: [
    {
      title: "Ahorro de tiempo operacional",
      description:
        "Convierte PDF, imagenes y documentos en datos estructurados para que tu equipo deje de copiar, revisar y normalizar a mano.",
    },
    {
      title: "Preparacion para flujos criticos",
      description:
        "Mejora la consistencia de captura para onboarding, backoffice y procesos documentales donde el dato debe entrar limpio al sistema.",
    },
    {
      title: "Estandarizacion de entradas",
      description:
        "Unifica formatos y reduce variaciones entre tipos documentales compatibles para simplificar validacion y downstream.",
    },
    {
      title: "Operacion con evidencia",
      description:
        "Combina endpoint, autenticacion y medicion para que el producto se pueda presentar, pilotear y operar como una oferta comercial seria.",
    },
  ] as OcrMasterResult[],
  buyerBlocks: [
    {
      buyer: "Operaciones",
      summary: "Documenta y procesa mas rapido sin detener el flujo operativo.",
      items: [
        "Ingestion de PDF e imagenes desde portales o procesos internos.",
        "Salida lista para sistemas con una sola integracion central.",
        "Menos trabajo manual para carga, digitacion y validacion inicial.",
        "Mejor trazabilidad de que entra al flujo y como se usa.",
      ],
    },
    {
      buyer: "Calidad y control documental",
      summary: "Reduce variabilidad y mejora consistencia de datos en escenarios compatibles.",
      items: [
        "Estandarizacion de entradas para procesos documentales recurrentes.",
        "Meta operativa clara para conversaciones comerciales y pilotos.",
        "Configuracion pensada para flujos con precision como requisito.",
        "Mejor base para revisiones humanas donde el caso lo amerita.",
      ],
    },
    {
      buyer: "Compliance y backoffice",
      summary: "Refuerza control y reduce friccion en la captura de datos documentales.",
      items: [
        "Autenticacion por API key para un consumo simple y controlado.",
        "Compatibilidad con procesos internos, portales y automatizaciones.",
        "Formato de salida estructurado para trazabilidad y auditoria operativa.",
        "Escalamiento por volumen segun plan y necesidad de la cuenta.",
      ],
    },
    {
      buyer: "Direccion y liderazgo",
      summary: "Presenta una oferta premium, entendible y lista para salir a vender.",
      items: [
        "Propuesta comercial clara con producto, API, precision y pricing.",
        "Posibilidad de demo o piloto rapido sin construir desde cero.",
        "Escalamiento con planes Standard, Pro y Premium.",
        "Mensaje facil de comunicar a clientes, partners y areas internas.",
      ],
    },
  ] as OcrMasterBuyerBlock[],
  stages: [
    {
      name: "Captura",
      description: "Ingresa el documento desde portal, sistema o flujo automatizado y envialo al endpoint central.",
      outputs: ["PDF", "JPG", "PNG", "HEIC"],
    },
    {
      name: "Procesamiento",
      description: "OCR Master interpreta el archivo y prepara una salida util para tu caso documental compatible.",
      outputs: ["OCR premium", "Normalizacion inicial"],
    },
    {
      name: "Estructuracion",
      description: "La respuesta vuelve en JSON estructurado para ser consumida por sistemas, workflows o backoffice.",
      outputs: ["JSON", "Campos listos para integracion"],
    },
    {
      name: "Integracion",
      description: "Conecta la salida a onboarding, automatizacion documental o procesos internos via API.",
      outputs: ["Portales", "Automatizaciones", "Sistemas internos"],
    },
    {
      name: "Escala",
      description: "Ajusta capacidad, costos y politica de volumen segun la etapa comercial de la cuenta.",
      outputs: ["Standard", "Pro", "Premium"],
    },
  ] as OcrMasterStage[],
  pricingTitle: "Planes y precios",
  pricingDescription: "Valores mensuales en USD. Pago anual o mensual segun el plan.",
  plans: [
    {
      name: "Standard",
      audience: "Equipos en implementacion inicial",
      documentsPerMonth: "2,500",
      summary:
        "Base comercial para equipos que necesitan una propuesta clara, moderna y lista para empezar.",
      includes: [
        "Integracion API simple",
        "Salida JSON estructurada",
        "Volumen mensual incluido",
      ],
      annualPrice: "USD 170",
      monthlyPrice: "USD 190",
      extraDocPrice: "Volumen mensual incluido.",
      tone: "sky",
      cta: "Solicitar demo",
    },
    {
      name: "Pro",
      audience: "Organizaciones en crecimiento",
      documentsPerMonth: "10,000",
      summary:
        "Mayor capacidad para operaciones con mas carga y crecimiento controlado por documento adicional.",
      includes: [
        "Mayor volumen mensual",
        "Mejor fit para procesos recurrentes",
        "Documentos extra a USD 0.04",
      ],
      annualPrice: "USD 500",
      monthlyPrice: "USD 570",
      extraDocPrice: "Documentos extra: USD 0.04 por documento.",
      tone: "mint",
      cta: "Solicitar demo Pro",
    },
    {
      name: "Premium",
      audience: "Cuentas exigentes y de mayor volumen",
      documentsPerMonth: "20,000",
      summary:
        "Version de mayor volumen, mejor valor para extras y posicionamiento mas premium para cuentas exigentes.",
      includes: [
        "Mayor capacidad mensual",
        "Mejor valor para documentos extra",
        "Orientado a cuentas con exigencia comercial alta",
      ],
      annualPrice: "USD 850",
      monthlyPrice: "USD 969",
      extraDocPrice: "Documentos extra: USD 0.03 por documento.",
      tone: "amber",
      cta: "Hablar con ventas",
    },
  ] as OcrMasterPlan[],
  faqs: [
    {
      question: "¿La precision siempre llega a 95%?",
      answer:
        "No. Es una meta operativa en flujos compatibles y depende de calidad del archivo, tipo documental y configuracion del caso.",
    },
    {
      question: "¿Podemos integrarlo a nuestros sistemas actuales?",
      answer:
        "Si. El enfoque principal es API-first, con un endpoint central y salida JSON para portales, automatizaciones y sistemas internos.",
    },
    {
      question: "¿Que formatos soporta?",
      answer:
        "PDF, JPG, PNG y HEIC segun la propuesta comercial actual.",
    },
    {
      question: "¿Sirve para una demo o piloto rapido?",
      answer:
        "Si. El producto esta planteado con propuesta comercial clara para demo, piloto o conversacion ejecutiva sin necesidad de una construccion larga previa.",
    },
    {
      question: "¿La salida siempre es JSON estructurado?",
      answer:
        "Ese es el formato de salida comercial propuesto para integracion, de modo que el dato sea consumible por sistemas y flujos posteriores.",
    },
    {
      question: "¿Como escala el costo?",
      answer:
        "Con planes Standard, Pro y Premium, mas politica de documentos extra segun el nivel de volumen contratado.",
    },
  ] as OcrMasterFaq[],
  closeCta: {
    title: "Pasa de capturar documentos a operar una oferta OCR lista para escalar.",
    text:
      "Evalua OCR Master con tus propios documentos y define un plan de adopcion o salida comercial por etapas, con una propuesta que se entiende rapido y se integra facil.",
    primary: "Agendar demo",
    secondary: "Solicitar propuesta",
  } as OcrMasterCloseCta,
  footerTitle: "YAGO SPA",
  footerDescription:
    "OCR Master se presenta como propuesta premium para automatizacion documental mediante API. Brochure refinado para propuesta comercial, demo o presentacion ejecutiva.",
  footerHighlights: ["Hasta 95% de confianza de datos", "POST /v1/process -> JSON"],
  seoTitle: "OCR premium via API | OCR Master by YAGO",
  seoDescription:
    "OCR Master procesa PDF e imagenes y entrega JSON estructurado para sistemas, onboarding y automatizacion documental con una propuesta premium lista para demo o piloto.",
};

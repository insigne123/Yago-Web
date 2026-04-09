export type OcrPain = {
  eyebrow: string;
  title: string;
  description: string;
};

export type OcrStep = {
  name: string;
  description: string;
  outputs: string[];
};

export type OcrUseCase = {
  title: string;
  description: string;
};

export type OcrBenefit = {
  title: string;
  description: string;
};

export type OcrDifferentiator = {
  title: string;
  description: string;
};

export type OcrFaq = {
  question: string;
  answer: string;
};

export const OCR_PAGE = {
  seoTitle: "OCR para empresas | Automatizacion documental | YAGO",
  seoDescription:
    "OCR para empresas en YAGO. Convierte facturas, contratos, formularios y PDFs escaneados en datos utiles para reducir digitacion manual, errores y tiempos operativos.",
  nav: [
    { name: "Inicio", href: "#inicio" },
    { name: "Problema", href: "#problema" },
    { name: "Como funciona", href: "#como-funciona" },
    { name: "Casos", href: "#casos-de-uso" },
    { name: "FAQ", href: "#faq" },
  ],
  hero: {
    badge: "OCR para empresas",
    title: "Automatiza la lectura de documentos en tu empresa",
    description:
      "Convierte facturas, contratos, formularios y PDFs escaneados en datos utiles para tu operacion, reduciendo digitacion manual, errores y tiempos de gestion.",
    proofSignals: [
      "Facturas, contratos y formularios",
      "PDFs e imagenes escaneadas",
      "Integracion a planillas, sistemas y flujos",
    ],
    trustSignals: [
      "Evaluacion con documentos reales",
      "Pensado para operaciones y backoffice",
      "Implementacion adaptable al proceso actual",
    ],
    primaryCta: "Solicitar demo",
    secondaryCta: "Hablar por WhatsApp",
    tertiaryCta: "Probar con mis documentos",
    previewTitle: "Documento escaneado -> datos listos para operar",
    previewDescription:
      "La idea no es solo leer texto. La idea es dejar informacion util, revisable e integrable para tu proceso.",
    previewFields: [
      { label: "Proveedor", value: "Transporte Andino" },
      { label: "Folio", value: "FC-20481" },
      { label: "Monto", value: "CLP 1.248.000" },
      { label: "Fecha", value: "08/04/2026" },
    ],
    previewTargets: ["Planilla", "ERP", "Backoffice", "Workflow"],
  },
  problem: {
    title: "Muchos procesos siguen dependiendo de la digitacion manual",
    description:
      "Las empresas siguen perdiendo tiempo al revisar documentos, copiar datos desde PDFs o imagenes, validar informacion manualmente y traspasarla a planillas o sistemas internos.",
  },
  pains: [
    {
      eyebrow: "01",
      title: "Digitacion manual",
      description: "Equipos copiando datos documento por documento para poder operar.",
    },
    {
      eyebrow: "02",
      title: "Errores operativos",
      description: "Montos, fechas o campos mal ingresados que despues generan retrabajo.",
    },
    {
      eyebrow: "03",
      title: "Procesos lentos",
      description: "La informacion llega tarde a quienes la necesitan para revisar, aprobar o cargar.",
    },
    {
      eyebrow: "04",
      title: "Informacion poco accesible",
      description: "Datos atrapados en imagenes, PDFs escaneados o archivos historicos no estructurados.",
    },
  ] as OcrPain[],
  solution: {
    title: "Yago convierte documentos en datos utiles para tu operacion",
    description:
      "Recibimos PDFs, imagenes o documentos escaneados, identificamos informacion relevante, la ordenamos y la dejamos lista para revision, planillas o integracion a sistemas internos.",
    inputLabel: "Lo que entra",
    inputItems: [
      "Facturas y ordenes de compra",
      "Contratos y formularios",
      "Guias y documentos administrativos",
      "PDFs, imagenes y archivos escaneados",
    ],
    outputLabel: "Lo que sale",
    outputItems: [
      "Campos estructurados para revisar o validar",
      "Datos listos para planillas y sistemas",
      "Informacion mas facil de buscar y reutilizar",
      "Base para automatizacion documental",
    ],
    support: [
      "OCR e IA subordinados al resultado operativo",
      "Salida util para procesos reales, no solo lectura de texto",
      "Adaptable al flujo actual de tu empresa",
    ],
  },
  steps: [
    {
      name: "Recibe tus documentos",
      description:
        "Facturas, ordenes de compra, contratos, formularios, guias y otros documentos administrativos.",
      outputs: ["PDF", "Imagen", "Escaneado"],
    },
    {
      name: "Extrae la informacion automaticamente",
      description:
        "Leemos texto, campos relevantes y datos utiles desde archivos documentales de uso cotidiano.",
      outputs: ["Campos", "Texto", "Datos clave"],
    },
    {
      name: "Estructura la informacion",
      description:
        "Ordenamos los datos para que sean faciles de revisar, buscar o reutilizar en tu operacion.",
      outputs: ["Revision", "Busqueda", "Reutilizacion"],
    },
    {
      name: "Integra a tu operacion",
      description:
        "La informacion puede conectarse a planillas, sistemas internos o flujos administrativos.",
      outputs: ["Planillas", "Sistemas", "Flujos"],
    },
  ] as OcrStep[],
  useCases: [
    {
      title: "Facturas",
      description: "Extrae datos clave para acelerar revision, registro y validacion.",
    },
    {
      title: "Ordenes de compra",
      description: "Organiza informacion para comparar, aprobar y continuar el proceso mas rapido.",
    },
    {
      title: "Contratos",
      description: "Convierte documentos extensos en informacion mas accesible y utilizable.",
    },
    {
      title: "Formularios",
      description: "Digitaliza informacion capturada manualmente y la ordena automaticamente.",
    },
    {
      title: "Guias y logistica",
      description: "Facilita seguimiento documental y reduce trabajo manual en operaciones logisticas.",
    },
    {
      title: "Documentacion administrativa",
      description: "Mejora acceso, trazabilidad y consistencia sobre documentos de uso interno.",
    },
    {
      title: "Archivos historicos escaneados",
      description: "Recupera informacion util desde documentos antiguos que hoy son dificiles de consultar.",
    },
  ] as OcrUseCase[],
  benefits: [
    {
      title: "Reduce digitacion manual",
      description: "Menos tiempo copiando datos y mas tiempo en tareas que si agregan valor.",
    },
    {
      title: "Disminuye errores operativos",
      description: "Menos retrabajo por campos mal ingresados o informacion traspasada de forma inconsistente.",
    },
    {
      title: "Acelera procesos administrativos",
      description: "La informacion llega antes a quienes deben revisar, validar o cargar datos.",
    },
    {
      title: "Mejora trazabilidad",
      description: "Datos mas ordenados y faciles de seguir a lo largo del flujo documental.",
    },
    {
      title: "Facilita busqueda y reutilizacion",
      description: "La informacion deja de quedar atrapada en archivos no estructurados.",
    },
    {
      title: "Permite escalar procesos",
      description: "Procesos documentales mas preparados para crecer sin multiplicar trabajo manual.",
    },
  ] as OcrBenefit[],
  differentiators: [
    {
      title: "Pensado para negocio, no para impresionar tecnicamente",
      description: "Priorizamos el impacto en tu operacion antes que una narrativa tecnica compleja.",
    },
    {
      title: "Trabajamos con documentos reales del cliente",
      description: "La evaluacion inicial se hace sobre casos concretos, no sobre promesas abstractas.",
    },
    {
      title: "Mirada de automatizacion, no solo lectura",
      description: "Buscamos que el dato quede util para el siguiente paso del proceso.",
    },
    {
      title: "Implementacion adaptable",
      description: "Se puede conectar a planillas, sistemas internos o flujos ya existentes segun el caso.",
    },
  ] as OcrDifferentiator[],
  demo: {
    title: "Te mostramos una prueba con tus propios documentos",
    description:
      "Podemos revisar una muestra real de tu operacion y mostrarte como se extrae la informacion, que campos pueden estructurarse y como eso podria integrarse a tu flujo actual.",
    bullets: [
      "Evaluacion inicial con documentos reales",
      "Definicion de campos utiles para tu operacion",
      "Siguiente paso claro para demo, piloto o implementacion",
    ],
    primaryCta: "Solicitar demo",
    secondaryCta: "Hablar por WhatsApp",
  },
  form: {
    title: "Pide una evaluacion inicial",
    description:
      "Cuentanos que documentos quieres procesar y te respondemos con el siguiente paso recomendado para tu caso.",
    submitLabel: "Solicitar evaluacion",
    documentOptions: [
      "Facturas",
      "Ordenes de compra",
      "Contratos",
      "Formularios",
      "Guias y logistica",
      "Documentacion administrativa",
      "Archivos historicos escaneados",
      "Mixto / varios tipos",
    ],
    volumeOptions: [
      "Menos de 500 documentos / mes",
      "500 a 2.000 documentos / mes",
      "2.000 a 10.000 documentos / mes",
      "Mas de 10.000 documentos / mes",
      "Aun no lo se",
    ],
  },
  faqs: [
    {
      question: "Que tipo de documentos pueden procesar?",
      answer:
        "Podemos evaluar facturas, contratos, formularios, ordenes de compra, guias y otros documentos administrativos o escaneados.",
    },
    {
      question: "Funciona con PDFs escaneados e imagenes?",
      answer:
        "Si. La idea es precisamente convertir PDFs, imagenes y documentos escaneados en informacion util para la operacion.",
    },
    {
      question: "Se puede adaptar a distintos formatos?",
      answer:
        "Si. La evaluacion inicial nos permite revisar variaciones de formato y proponer el mejor enfoque para tu flujo documental.",
    },
    {
      question: "La informacion se puede integrar a otros sistemas?",
      answer:
        "Si. Dependiendo del caso, los datos pueden quedar listos para planillas, sistemas internos o flujos administrativos.",
    },
    {
      question: "Como se realiza la evaluacion inicial?",
      answer:
        "Revisamos tu tipo de documento, volumen aproximado y objetivo operativo para proponerte un siguiente paso claro.",
    },
    {
      question: "Sirve para facturas, contratos y formularios?",
      answer:
        "Si, esos son precisamente algunos de los casos de uso mas frecuentes que podemos evaluar contigo.",
    },
    {
      question: "Necesito cambiar mis sistemas actuales?",
      answer:
        "No necesariamente. La idea es adaptarnos a tu operacion actual y definir la integracion que tenga mas sentido para el proceso.",
    },
  ] as OcrFaq[],
  finalCta: {
    title: "Reduce trabajo manual y convierte tus documentos en datos utiles",
    text: "Agenda una demo y revisemos como aplicar OCR y automatizacion documental en tu operacion.",
    primary: "Solicitar demo",
    secondary: "Hablar por WhatsApp",
  },
};

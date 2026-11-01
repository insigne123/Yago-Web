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

export type OcrCapability = {
  service: string;
  title: string;
  description: string;
  label: string;
  href: string;
};

export type OcrFaq = {
  question: string;
  answer: string;
};

const EVALUATION_CTA = "Solicitar evaluación";

export const OCR_PAGE = {
  modifiedDate: "2026-11-01",
  seoTitle: "Digitalización de documentos con OCR en Chile | YAGO",
  seoDescription:
    "Servicio de digitalización de documentos con OCR e IA para empresas en Chile: extrae y valida datos de facturas, contratos y PDFs para tu planilla o ERP.",
  nav: [
    { name: "Resumen", href: "#resumen" },
    { name: "El problema", href: "#problema" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Servicio", href: "#servicio-digitalizacion" },
    { name: "Casos de uso", href: "#casos-de-uso" },
    { name: "Más que OCR", href: "#mas-que-ocr" },
    { name: "Preguntas", href: "#faq" },
    { name: "Evaluación", href: "#formulario" },
  ],
  hero: {
    badge: "OCR para empresas",
    title: "Digitalización de documentos con OCR para empresas",
    description:
      "Convierte facturas, contratos y PDFs escaneados en datos estructurados para tu planilla, ERP o aplicación. Evaluamos tus archivos, definimos campos y validaciones, e integramos el resultado en tu proceso.",
    proofSignals: [
      "Facturas, contratos y formularios",
      "PDFs e imágenes escaneadas",
      "Integración a planillas, sistemas y flujos",
    ],
    trustSignals: [
      "Evaluación con documentos reales",
      "Pensado para operaciones y backoffice",
      "Implementación adaptable al proceso actual",
    ],
    primaryCta: EVALUATION_CTA,
    secondaryCta: "Hablar por WhatsApp",
    tertiaryCta: EVALUATION_CTA,
    previewTitle: "Documento escaneado → datos listos para operar",
    previewDescription:
      "No se trata solo de leer texto: la información queda útil, revisable e integrable para tu proceso.",
    previewFields: [
      { label: "Proveedor", value: "Proveedor de ejemplo SpA" },
      { label: "Folio", value: "FC-20481" },
      { label: "Monto", value: "CLP 1.248.000" },
      { label: "Fecha", value: "08/04/2026" },
    ],
    previewTargets: ["Planilla", "ERP", "Backoffice", "Workflow"],
  },
  documentExample: {
    title: "Una factura, de entrada a salida.",
    label: "Ejemplo ilustrativo · datos ficticios",
    filename: "factura_ejemplo_20481.pdf",
    stages: [
      { title: "Documento de entrada", description: "PDF escaneado de una factura de proveedor." },
      { title: "Campos extraídos", description: "Información estructurada que se puede revisar." },
      { title: "Validación", description: "Se marca la excepción para que tu equipo complete el dato. La carga queda pendiente." },
      { title: "Salida prevista", description: "Una vez revisados y aprobados, los datos pueden enviarse a una planilla o ERP por la conexión acordada." },
    ],
    exception: "Orden de compra no identificada",
    note: "Las reglas, la revisión y la conexión se definen para tu proceso.",
  },
  problem: {
    title: "Muchos procesos siguen dependiendo de la digitación manual",
    description:
      "Las empresas siguen perdiendo tiempo al revisar documentos, copiar datos desde PDFs o imágenes, validar información a mano y traspasarla a planillas o sistemas internos.",
  },
  comparison: [
    {
      today: "Equipos copiando datos documento por documento para poder operar.",
      withProduct: "Los campos se extraen desde el PDF o la imagen y quedan listos para revisar.",
    },
    {
      today: "Montos, fechas o campos mal ingresados que después generan retrabajo.",
      withProduct: "Datos estructurados y validados antes de llegar a tu planilla o sistema.",
    },
    {
      today: "La información llega tarde a quienes deben revisar, aprobar o cargar.",
      withProduct: "El dato está disponible apenas entra el documento.",
    },
    {
      today: "Datos atrapados en imágenes, PDFs escaneados o archivos históricos.",
      withProduct: "Documentos convertidos en información fácil de buscar y reutilizar.",
    },
  ],
  pains: [
    {
      eyebrow: "01",
      title: "Digitación manual",
      description: "Equipos copiando datos documento por documento para poder operar.",
    },
    {
      eyebrow: "02",
      title: "Errores operativos",
      description: "Montos, fechas o campos mal ingresados que después generan retrabajo.",
    },
    {
      eyebrow: "03",
      title: "Procesos lentos",
      description: "La información llega tarde a quienes la necesitan para revisar, aprobar o cargar.",
    },
    {
      eyebrow: "04",
      title: "Información poco accesible",
      description: "Datos atrapados en imágenes, PDFs escaneados o archivos históricos no estructurados.",
    },
  ] as OcrPain[],
  solution: {
    title: "YAGO convierte documentos en datos útiles para tu operación",
    description:
      "Recibimos PDFs, imágenes o documentos escaneados, identificamos la información relevante, la ordenamos y la dejamos lista para revisión, planillas o integración a sistemas internos.",
    inputLabel: "Lo que entra",
    inputItems: [
      "Facturas y órdenes de compra",
      "Contratos y formularios",
      "Guías y documentos administrativos",
      "PDFs, imágenes y archivos escaneados",
    ],
    outputLabel: "Lo que sale",
    outputItems: [
      "Campos estructurados para revisar o validar",
      "Datos listos para planillas y sistemas",
      "Información más fácil de buscar y reutilizar",
      "Base para automatización documental",
    ],
    support: [
      "OCR e IA al servicio del resultado operativo",
      "Salida útil para procesos reales, no solo lectura de texto",
      "Adaptable al flujo actual de tu empresa",
    ],
  },
  digitization: {
    eyebrow: "Digitalización de documentos",
    title: "Servicio de digitalización de documentos para empresas",
    paragraphs: [
      "Nuestro servicio de digitalización de documentos convierte PDFs, imágenes y escaneos en datos que tu operación puede usar. Está pensado para empresas en Chile que reciben facturas, órdenes de compra, contratos, formularios, guías, certificados y otros documentos administrativos, incluidos archivos históricos escaneados: extraemos los campos que necesita cada proceso.",
      "A diferencia de un software que tu equipo debe configurar por su cuenta, el servicio incluye la definición de campos, las reglas de validación y la integración. Los casos dudosos quedan marcados para que tu equipo los revise antes de la carga, y los datos aprobados llegan a tu planilla, ERP o sistema interno por la conexión que acordemos.",
      "Partimos desde archivos digitales o ya escaneados: no hacemos escaneo físico ni custodia de archivos en papel. El servicio se cotiza según volumen, tipos de documento e integraciones, después de evaluar una muestra de tus documentos reales.",
    ],
    bullets: [
      "Evaluación inicial con una muestra de tus documentos reales.",
      "Campos y reglas de validación definidos para tu proceso.",
      "Extracción desde PDFs, imágenes y escaneos, incluidos archivos históricos.",
      "Casos dudosos marcados para revisión de tu equipo antes de la carga.",
      "Integración con planillas, ERP o sistemas internos, y API con OCR Master.",
      "Cotización según volumen, tipos de documento e integraciones.",
    ],
    guides: [
      { label: "Digitalización de documentos: qué es y cómo se hace", href: "/blog/ocr-con-ia-digitalizar-documentos" },
      { label: "Cuánto cuesta digitalizar documentos", href: "/blog/cuanto-cuesta-digitalizar-documentos" },
      { label: "Validez legal de documentos digitalizados en Chile", href: "/blog/validez-legal-documentos-digitalizados-chile" },
    ],
  },
  steps: [
    {
      name: "Recibe tus documentos",
      description: "Facturas, órdenes de compra, contratos, formularios, guías y otros documentos administrativos.",
      outputs: ["PDF", "Imagen", "Escaneado"],
    },
    {
      name: "Extrae la información",
      description: "Leemos texto, campos relevantes y datos útiles desde los archivos de uso cotidiano.",
      outputs: ["Campos", "Texto", "Datos clave"],
    },
    {
      name: "Estructura los datos",
      description: "Ordenamos la información para que sea fácil de revisar, buscar o reutilizar en tu operación.",
      outputs: ["Revisión", "Búsqueda", "Reutilización"],
    },
    {
      name: "Integra a tu operación",
      description: "La información se conecta a planillas, sistemas internos o flujos administrativos.",
      outputs: ["Planillas", "Sistemas", "Flujos"],
    },
  ] as OcrStep[],
  useCases: [
    { title: "Facturas", description: "Extrae datos clave para acelerar revisión, registro y validación." },
    { title: "Órdenes de compra", description: "Organiza la información para comparar, aprobar y continuar el proceso más rápido." },
    { title: "Contratos", description: "Convierte documentos extensos en información accesible y utilizable." },
    { title: "Formularios", description: "Digitaliza información capturada a mano y la ordena automáticamente." },
    { title: "Guías y logística", description: "Facilita el seguimiento documental y reduce trabajo manual en operaciones logísticas." },
    { title: "Documentación administrativa", description: "Mejora acceso, trazabilidad y consistencia sobre documentos de uso interno." },
    { title: "Archivos históricos escaneados", description: "Recupera información útil desde documentos antiguos que hoy son difíciles de consultar." },
  ] as OcrUseCase[],
  benefits: [
    { title: "Reduce digitación manual", description: "Menos tiempo copiando datos y más tiempo en tareas que sí agregan valor." },
    { title: "Disminuye errores operativos", description: "Menos retrabajo por campos mal ingresados o información traspasada de forma inconsistente." },
    { title: "Acelera procesos administrativos", description: "La información llega antes a quienes deben revisar, validar o cargar datos." },
    { title: "Mejora trazabilidad", description: "Datos más ordenados y fáciles de seguir a lo largo del flujo documental." },
    { title: "Facilita búsqueda y reutilización", description: "La información deja de quedar atrapada en archivos no estructurados." },
    { title: "Permite escalar procesos", description: "Procesos documentales preparados para crecer sin multiplicar el trabajo manual." },
  ] as OcrBenefit[],
  capabilities: {
    title: "Leer el documento es el primer paso. Podemos conectar lo que sigue.",
    description: "En YAGO convertimos documentos en datos y conectamos esa información con sistemas, aprobaciones, aplicaciones y asistentes de IA. Podemos implementar una parte o definir el flujo completo según tu operación.",
    items: [
      {
        service: "integracion-ia",
        title: "Llevar los datos a tu ERP o CRM",
        description: "Conectamos la información revisada con tus sistemas mediante las interfaces disponibles.",
        label: "Ver integración de sistemas e IA",
        href: "/servicios/integracion-ia",
      },
      {
        service: "automatizacion-procesos",
        title: "Continuar con aprobaciones y avisos",
        description: "Unimos recepción, validaciones, responsables y seguimiento en un flujo de trabajo trazable.",
        label: "Ver automatización de procesos",
        href: "/servicios/automatizacion-procesos",
      },
      {
        service: "apps-automatizacion",
        title: "Gestionar documentos en tu propio portal",
        description: "Desarrollamos aplicaciones para cargar archivos, revisar excepciones y operar con distintos roles.",
        label: "Ver aplicaciones a medida",
        href: "/servicios/apps-automatizacion",
      },
      {
        service: "agentes-ia",
        title: "Consultar documentos con referencias",
        description: "Implementamos asistentes conectados a tu información, como SOF.IA, con fuentes y permisos definidos.",
        label: "Ver agentes y asistentes de IA",
        href: "/servicios/agentes-ia",
      },
    ] as OcrCapability[],
    prompt: "Cuéntanos qué debería pasar después de leer tu documento.",
    companyLabel: "Conoce cómo trabaja YAGO",
  },
  demo: {
    title: "Evaluemos tus documentos y el siguiente paso",
    description:
      "Cuéntanos qué documentos recibes y qué necesitas hacer con sus datos. Revisamos formatos, campos, validaciones y conexiones para proponerte un alcance y coordinar la evaluación de una muestra.",
    bullets: [
      "Evaluación inicial con documentos reales",
      "Definición de campos útiles para tu operación",
      "Siguiente paso claro: muestra, piloto o implementación",
    ],
    primaryCta: EVALUATION_CTA,
    secondaryCta: "Hablar por WhatsApp",
  },
  form: {
    title: "Solicita una evaluación inicial",
    description: "Cuéntanos qué documentos quieres procesar y qué debería pasar con sus datos. Te responderemos para definir el siguiente paso.",
    submitLabel: EVALUATION_CTA,
    documentOptions: [
      "Facturas",
      "Órdenes de compra",
      "Contratos",
      "Formularios",
      "Guías y logística",
      "Documentación administrativa",
      "Archivos históricos escaneados",
      "Mixto / varios tipos",
    ],
    volumeOptions: [
      "Menos de 500 documentos / mes",
      "500 a 2.000 documentos / mes",
      "2.000 a 10.000 documentos / mes",
      "Más de 10.000 documentos / mes",
      "Aún no lo sé",
    ],
  },
  faqs: [
    {
      question: "¿Qué significa digitalizar documentos con OCR?",
      answer: "Significa convertir el texto y los campos de un PDF o imagen en información que un sistema puede buscar y procesar. Nuestro servicio parte de archivos digitales o ya escaneados y añade extracción, estructuración y validación de datos.",
    },
    {
      question: "¿Cómo se evalúa la precisión del OCR?",
      answer: "Con una muestra representativa de tus formatos y calidad de archivos, comparando los campos extraídos con valores revisados. Medimos errores por campo, documentos que requieren intervención y tiempo de revisión; el resultado depende de los documentos y del alcance acordado.",
    },
    {
      question: "¿En qué se diferencia OCR de automatización documental?",
      answer: "OCR lee y extrae información. La automatización documental conecta ese paso con recepción, clasificación, validación, aprobación y carga a sistemas. Podemos implementar la extracción o integrarla en el flujo completo según tu necesidad.",
    },
    {
      question: "¿YAGO puede implementar lo que viene después del OCR?",
      answer: "Sí. Además de extraer datos, YAGO implementa integraciones con sistemas, flujos de aprobación y avisos, aplicaciones a medida y asistentes que consultan documentos con referencias. La evaluación define las conexiones, los permisos y las revisiones que necesita tu proceso.",
    },
    {
      question: "¿En qué se diferencia de un servicio de escaneo de documentos?",
      answer: "Un servicio de escaneo convierte papel en imágenes o PDFs. Nuestro servicio parte de esos archivos y extrae, valida e integra los datos que contienen. Si tus documentos están en papel, el escaneo se hace antes, con tu equipo o con un proveedor de escaneo.",
    },
    {
      question: "¿Qué documentos pueden digitalizar?",
      answer: "Podemos evaluar facturas, órdenes de compra, contratos, formularios, guías, certificados y otros documentos administrativos, en PDF, imagen o escaneo, incluidos archivos históricos. Si recibes facturas electrónicas con su XML, revisamos si conviene usar esos datos directamente en lugar de leer el PDF.",
    },
    {
      question: "¿Funciona con PDFs escaneados e imágenes?",
      answer: "Sí. La idea es precisamente convertir PDFs, imágenes y documentos escaneados en información útil para la operación.",
    },
    {
      question: "¿Se puede adaptar a distintos formatos?",
      answer: "Sí. La evaluación inicial nos permite revisar variaciones de formato y proponer el mejor enfoque para tu flujo documental.",
    },
    {
      question: "¿Cómo llegan los datos a mi ERP o planilla?",
      answer: "Una vez revisados y aprobados, los datos se envían a planillas, ERP o sistemas internos por la conexión que acordemos, según las interfaces y accesos disponibles. Si tu equipo técnico prefiere conectarse por API, OCR Master entrega JSON estructurado.",
    },
    {
      question: "¿Qué necesito para empezar?",
      answer: "Una muestra de documentos reales, el volumen mensual aproximado, los campos que necesitas y el sistema donde deben quedar los datos. Con eso revisamos formatos, campos, validaciones y conexiones, y te proponemos un siguiente paso: muestra, piloto o implementación.",
    },
    {
      question: "¿Necesito cambiar mis sistemas actuales?",
      answer: "No necesariamente. Nos adaptamos a tu operación actual y definimos la integración que tenga más sentido para el proceso.",
    },
  ] as OcrFaq[],
  finalCta: {
    title: "Reduce trabajo manual y convierte tus documentos en datos útiles",
    text: "Solicita una evaluación y revisemos cómo aplicar OCR y automatización documental en tu operación.",
    primary: EVALUATION_CTA,
    secondary: "Hablar por WhatsApp",
  },
};

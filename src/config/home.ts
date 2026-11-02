// Contenido del home (yago.cl). Todo el texto visible vive aquí para editarlo sin tocar componentes.

export const HOME_HERO = {
  eyebrow: "Automatización e IA · Chile",
  titleStart: "Automatización e",
  titleHighlight: "inteligencia artificial",
  titleEnd: "para empresas.",
  description:
    "Integramos IA en tus procesos, desarrollamos aplicaciones y software a medida, y convertimos documentos en datos útiles. Conectamos tus sistemas y dejamos la operación trazable.",
  secondaryCta: "Ver servicios",
  note: "¿No sabes por dónde partir? Investigamos tu empresa y te proponemos qué automatizar.",
  noteLink: { label: "Conoce la auditoría IA", href: "/servicios/auditoria-ia" },
};

export const HOME_FACTS = [
  { value: "Flujos", label: "automatización de tareas y procesos empresariales", href: "/servicios/automatizacion-procesos" },
  { value: "IA", label: "integración con tus datos, documentos y sistemas", href: "/servicios/integracion-ia" },
  { value: "Apps", label: "software a medida y desarrollo asistido por IA", href: "/servicios/apps-automatizacion" },
  { value: "OCR", label: "documentos convertidos en datos para tu operación", href: "/ocr" },
];

export const CLIENT_LOGOS = [
  { name: "PSOL", src: "/images/optimized/psol.webp", width: 291, height: 84, href: "https://psol.cl" },
  { name: "GrupoExpro", src: "/images/optimized/grupoexpro.webp", width: 245, height: 84, href: "https://grupoexpro.com" },
];

export const INTEGRATIONS = [
  "Portal Mi DT",
  "PJUD",
  "Workges",
  "Microsoft 365",
  "SharePoint",
  "Google Drive",
  "Google Workspace",
  "WhatsApp",
  "Excel y Sheets",
  "PostgreSQL",
  "Tu ERP vía API",
  "Gmail y Outlook",
];

export const HOME_STEPS = [
  {
    name: "Diagnóstico",
    description: "Revisamos tu proceso, volumen, sistemas y KPIs para encontrar el cuello de botella con más impacto.",
    output: "Una recomendación concreta",
  },
  {
    name: "Blueprint",
    description: "Diseñamos el flujo, los datos y las reglas antes de construir, para que el alcance quede claro desde el inicio.",
    output: "Flujo, datos y KPIs definidos",
  },
  {
    name: "Build",
    description: "Construimos en iteraciones quincenales, con QA y pruebas junto a tu equipo (UAT).",
    output: "Versiones funcionando cada 2 semanas",
  },
  {
    name: "Go-live",
    description: "Ponemos la automatización en producción y te acompañamos con soporte mientras opera.",
    output: "Operación en marcha y soporte",
  },
];

export const HOME_SERVICES = [
  {
    icon: "audit",
    title: "Auditoría IA de procesos",
    description: "No necesitas llegar con una idea: revisamos tu empresa y te proponemos qué automatizar, qué integrar y por dónde partir.",
    time: "Te proponemos ideas",
    href: "/servicios/auditoria-ia",
  },
  {
    icon: "flow",
    title: "Automatización de procesos con IA",
    description: "Conectamos tareas, datos y sistemas con reglas, APIs e IA según lo que necesita cada paso.",
    time: "Flujos y trazabilidad",
    href: "/servicios/automatizacion-procesos",
  },
  {
    icon: "integration",
    title: "Integración de IA en empresas",
    description: "Incorporamos inteligencia artificial a tus procesos, ERP, CRM y fuentes de información.",
    time: "Datos e integraciones",
    href: "/servicios/integracion-ia",
  },
  {
    icon: "apps",
    title: "Aplicaciones y software con IA",
    description: "Apps empresariales a medida, funciones de IA y desarrollo asistido por IA con revisión y pruebas.",
    time: "Software a medida",
    href: "/servicios/apps-automatizacion",
  },
  {
    icon: "bot",
    title: "Agentes y asistentes de IA",
    description: "Asistentes internos y agentes conectados a tus documentos y herramientas, con permisos definidos.",
    time: "Conocimiento y tareas",
    href: "/servicios/agentes-ia",
  },
  {
    icon: "ocr",
    title: "OCR y digitalización de documentos",
    description: "Leemos PDFs e imágenes, extraemos campos y preparamos datos para planillas, ERP y aplicaciones.",
    time: "Documentos a datos",
    href: "/ocr",
  },
] as const;

export const HOME_AGENTS = [
  {
    name: "SOF.IA",
    tag: "Asistente interno",
    description: "Responde dudas de tu equipo usando solo los documentos de tu empresa, en WhatsApp o web.",
    href: "/productos/sofia",
  },
  {
    name: "ANTON.IA",
    tag: "Prospección B2B",
    description: "Busca, califica y prepara el contacto con prospectos, conectado a tu CRM.",
    href: "/productos/antonia",
  },
  {
    name: "PROCEDURA",
    tag: "Calidad ISO 9001",
    description: "Convierte voz o notas en procedimientos con versionado y control por roles.",
    href: "/productos/procedura",
  },
  {
    name: "MASSIMO",
    tag: "Marketing",
    description: "Planifica campañas, analiza tendencias y crea contenidos para varios canales.",
    href: "/productos/massimo",
  },
];

/**
 * Caso destacado. Reemplaza los textos entre corchetes con datos reales de un cliente
     * (con su autorización). Mientras `placeholder` sea true no se publica el bloque.
 */
export const FEATURED_CASE = {
  placeholder: true,
  client: "[Cliente]",
  quote: "[Cita real del cliente: qué cambió en su operación después de automatizar con YAGO.]",
  person: "[Nombre y apellido]",
  role: "[Cargo] · [Empresa cliente]",
  metrics: [
    { value: "[XX] h", label: "de trabajo manual liberadas al mes" },
    { value: "[XX] %", label: "menos errores de digitación" },
    { value: "[XX] días", label: "desde el diagnóstico hasta el go-live" },
  ],
};

export const HOME_FAQ = [
  {
    q: "¿Qué pasa en la sesión de diagnóstico?",
    a: "Revisamos el problema, el volumen, los datos y los sistemas que usas hoy. Te proponemos un punto de partida: automatización, integración de IA, una aplicación, un asistente u OCR. No necesitas llegar con el flujo resuelto; basta con describir la tarea o necesidad.",
  },
  {
    q: "¿Necesito llegar con una idea de qué automatizar?",
    a: "No. Con la auditoría IA investigamos tus procesos, aplicaciones y datos, y te proponemos qué automatizar, qué unir en un solo sistema y por dónde partir, ordenado por impacto y esfuerzo.",
  },
  {
    q: "¿Tengo que cambiar mis sistemas actuales?",
    a: "No. Integramos APIs, documentos, canales y bases de datos sobre lo que ya usas, de forma gradual y sin romper tus herramientas actuales.",
  },
  {
    q: "¿Cuánto demora en estar funcionando?",
    a: "Un MVP simple de automatización puede tomar 1–2 semanas y un primer módulo de una aplicación, 2–4 semanas. El plazo depende de alcance, integraciones y accesos, y se confirma en la propuesta. Las implementaciones con varias fuentes o sistemas requieren una evaluación específica.",
  },
  {
    q: "¿Cómo se cobra?",
    a: "Los servicios se cotizan según alcance, integraciones, volumen y soporte. La propuesta distingue implementación, operación y consumo de herramientas externas cuando corresponde. Los productos como SADT y AXIS tienen planes publicados en UF.",
  },
  {
    q: "¿Qué pasa si el Portal DT o el PJUD fallan?",
    a: "Los productos reintentan de forma controlada, guardan los artefactos de cada consulta y dejan cada registro con su estado, para reprocesar sin perder el contexto.",
  },
  {
    q: "¿Qué nivel de seguridad aplican?",
    a: "Aislamos secretos, ciframos datos en tránsito y en reposo y trabajamos con el principio de menor privilegio. Respetamos las políticas de tu empresa (Microsoft 365 o Google, auditoría y retención).",
  },
  {
    q: "¿Desarrollan apps que usan IA o también software con desarrollo asistido por IA?",
    a: "Ambos. Podemos incorporar funciones inteligentes en una aplicación y utilizar IA como apoyo durante el desarrollo de software. En cada proyecto definimos entregables, revisión del código, pruebas y criterios de aceptación.",
  },
  {
    q: "¿Trabajan con empresas en Chile?",
    a: "Sí. Chile es nuestro mercado principal. Trabajamos con equipos de negocio y tecnología para implementar automatización, integraciones de IA, aplicaciones y procesamiento documental sobre su operación.",
  },
];

export const CONTACT_SERVICE_OPTIONS = [
  { value: "automatizacion-procesos", label: "Automatización de procesos" },
  { value: "integracion-ia", label: "Integración de IA" },
  { value: "apps-automatizacion", label: "Apps y desarrollo con IA" },
  { value: "agentes-ia", label: "Agentes y asistentes" },
  { value: "ocr", label: "Documentos y OCR" },
  { value: "auditoria-ia", label: "Auditoría IA" },
  { value: "otro", label: "Otro proyecto" },
] as const;

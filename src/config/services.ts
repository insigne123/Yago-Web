// src/config/services.ts
// Definición centralizada de los servicios y su contenido para mini-páginas.

export type ServiceStage = {
  name: string;
  description: string;
  outputs?: string[];
};

export type ServiceResult = {
  title: string;
  description: string;
};

export type ServiceBuyerBlock = {
  buyer: string;
  summary: string;
  items: string[];
};

export type ServicePlan = {
  name: string;
  audience: string;
  includes: string;
  priceHint: string;
  cta: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceCloseCta = {
  title: string;
  text: string;
  primary: string;
  secondary: string;
};

export type ServiceWorkflow = {
  title: string;
  description: string;
  input: string;
  output: string;
  connections: string;
  steps: { title: string; description: string }[];
  acceptance: string[];
  links: { label: string; href: string }[];
};

export type Service = {
  slug:
    | "auditoria-ia"
    | "automatizacion-procesos"
    | "integracion-ia"
    | "apps-automatizacion"
    | "agentes-ia"
    | "paginas-web"
    | "capacitacion-ia";
  title: string;
  short: string; // resumen para la tarjeta
  image: string; // ilustración del servicio
  imageAlt?: string;
  duration: string; // tiempo típico de producción
  stack?: string[]; // tecnologías frecuentes
  stages: ServiceStage[]; // etapas del proyecto
  deliverables: string[]; // entregables estándar
  notes?: string[]; // consideraciones, límites, etc.
  pageTitle?: string;
  pageSubtitle?: string;
  ctaPrimary?: string;
  ctaSecondary?: string;
  supportPoints?: string[];
  results?: ServiceResult[];
  buyerBlocks?: ServiceBuyerBlock[];
  pricingPlans?: ServicePlan[];
  closeCta?: ServiceCloseCta;
  faq?: ServiceFaq[];
  seoTitle?: string;
  seoDescription?: string;
  definition?: string;
  audience?: string;
  approach?: string; // "Implementación" en la ficha En resumen
  pricing?: string; // "Precio" en la ficha En resumen
  useCases?: ServiceResult[];
  costFactors?: string[];
  relatedGuides?: { label: string; href: string }[];
  relatedProducts?: { label: string; href: string }[];
  workflow?: ServiceWorkflow;
  modifiedDate?: string;
  relatedServiceSlugs?: Service["slug"][];
};

export const SERVICES: Service[] = [
  {
    slug: "auditoria-ia",
    modifiedDate: "2026-10-29",
    seoTitle: "Auditoría IA de procesos para empresas en Chile | YAGO",
    seoDescription: "Auditamos los procesos de tu empresa para descubrir qué automatizar, qué apps unir en un solo sistema y dónde aplicar IA, con una hoja de ruta priorizada.",
    title: "Auditoría IA de procesos",
    short: "Investigamos tu empresa y te proponemos qué automatizar, qué integrar y por dónde empezar. No necesitas llegar con una idea.",
    pageTitle: "Auditoría IA: descubrimos qué automatizar en tu empresa",
    pageSubtitle: "No necesitas llegar con una idea. Investigamos cómo trabaja tu empresa, qué aplicaciones usa y por dónde se mueven sus datos, y te proponemos qué automatizar, qué unir en un solo sistema y por dónde empezar.",
    definition: "Una auditoría IA de procesos revisa cómo opera una empresa para identificar tareas automatizables, aplicaciones que conviene integrar y usos de inteligencia artificial con impacto medible. YAGO la realiza en Chile con entrevistas por área y revisión de herramientas y datos, y entrega oportunidades priorizadas por impacto y esfuerzo, una propuesta para unir sistemas en una plataforma o panel común y una hoja de ruta por etapas.",
    audience: "Gerencias y dueños de empresa que quieren automatizar, pero no saben por dónde partir",
    approach: "Entrevistas por área, revisión de herramientas y datos, propuesta y hoja de ruta",
    pricing: "Cotización según áreas, procesos y sistemas a revisar",
    ctaPrimary: "Solicitar auditoría",
    ctaSecondary: "Ver cómo funciona",
    image: "/images/optimized/service-auditoria-ia.webp",
    imageAlt: "Ilustración de un mapa de procesos con pasos marcados para automatizar e integrar, conectados a un panel único con indicadores.",
    duration: "Hoja de ruta al cierre; el plazo se acuerda según áreas y procesos a revisar.",
    supportPoints: ["No necesitas llegar con una idea", "Procesos de toda tu empresa", "Apps y datos en un solo sistema", "Hoja de ruta priorizada"],
    stack: ["Mapas de procesos", "Inventario de aplicaciones y datos", "Matriz de impacto y esfuerzo", "Prototipos de panel", "ERP, CRM y planillas"],
    stages: [
      {
        name: "Levantamiento",
        description: "Entrevistamos a los responsables de cada área y observamos cómo se hace el trabajo hoy, con sus herramientas reales.",
        outputs: ["Entrevistas por área", "Mapa de procesos actual", "Inventario de herramientas"],
      },
      {
        name: "Análisis",
        description: "Medimos volúmenes, tiempos y errores, y seguimos el recorrido de los datos para encontrar dónde se copian, se esperan o se pierden.",
        outputs: ["Línea base", "Puntos de fricción", "Datos duplicados entre sistemas"],
      },
      {
        name: "Propuesta",
        description: "Ordenamos las oportunidades por impacto y esfuerzo, y diseñamos cómo unir aplicaciones y datos en un sistema o panel común.",
        outputs: ["Oportunidades priorizadas", "Arquitectura propuesta", "Estimación de plazos y costos"],
      },
      {
        name: "Hoja de ruta",
        description: "Presentamos los resultados a tu equipo y dejamos un plan por etapas, con victorias rápidas y el primer piloto recomendado.",
        outputs: ["Hoja de ruta por etapas", "Primer piloto definido", "Presentación ejecutiva"],
      },
    ],
    deliverables: [
      "Mapa de procesos por área, con tiempos, volúmenes y sistemas involucrados",
      "Inventario de aplicaciones, planillas y flujos de datos entre ellas",
      "Oportunidades priorizadas: qué automatizar, qué integrar y qué conviene dejar manual",
      "Propuesta para unir aplicaciones y datos en un solo sistema o panel",
      "Hoja de ruta por etapas con plazos y costos estimados",
      "Presentación de resultados al equipo directivo",
    ],
    notes: [
      "Necesitamos acceso a los responsables de cada área y, cuando corresponda, ver las herramientas en uso. Si lo requieres, firmamos un acuerdo de confidencialidad.",
      "La auditoría estima impacto y esfuerzo con los datos disponibles; las cifras se confirman en cada piloto antes de ampliar el alcance.",
    ],
    useCases: [
      { title: "Procesos repartidos en planillas y correos", description: "Detectamos dónde el mismo dato se escribe varias veces y proponemos un flujo que lo capture una vez y lo lleve a donde se necesita." },
      { title: "Muchas aplicaciones que no se conectan", description: "Hacemos un inventario de las herramientas y proponemos cómo integrarlas en un solo sistema, con una fuente de datos común." },
      { title: "Gerencia sin visibilidad de la operación", description: "Definimos los indicadores que importan y proponemos un panel que reúna la información de cada área y sistema." },
    ],
    workflow: {
      title: "De no saber por dónde partir a una hoja de ruta priorizada.",
      description: "Ejemplo de auditoría para una empresa con varias áreas: conocer su operación, seguir sus datos entre aplicaciones y proponer qué automatizar, qué unir y en qué orden.",
      input: "Acceso a los responsables de cada área, sus herramientas actuales y ejemplos del trabajo diario.",
      output: "Mapa de procesos, oportunidades priorizadas, propuesta de sistema unificado y hoja de ruta con costos estimados.",
      connections: "Planillas, correo, ERP, CRM, sistemas de RRHH y cualquier aplicación que el equipo use hoy.",
      steps: [
        { title: "Conocer la operación", description: "Conversamos con cada área sobre sus tareas, volúmenes y problemas, y vemos cómo se trabaja en las herramientas reales." },
        { title: "Seguir los datos", description: "Recorremos cómo viaja la información entre planillas, correos y sistemas, y marcamos dónde se copia a mano, se espera o se pierde." },
        { title: "Detectar y priorizar", description: "Cada oportunidad se evalúa por impacto y esfuerzo: automatización, integración, uso de IA o simplemente ordenar el proceso." },
        { title: "Proponer el sistema", description: "Diseñamos cómo unir aplicaciones y datos en un sistema o panel común y armamos la hoja de ruta, empezando por un piloto acotado." },
      ],
      acceptance: [
        "Cada oportunidad indica el proceso, su volumen y el tiempo que hoy consume, con la fuente del dato.",
        "Los responsables de cada área revisan el mapa de su proceso antes del informe final.",
        "La hoja de ruta separa victorias rápidas de proyectos mayores, con supuestos y costos estimados explícitos.",
      ],
      links: [
        { label: "Automatización de procesos con IA", href: "/servicios/automatizacion-procesos" },
        { label: "Aplicaciones y paneles a medida", href: "/servicios/apps-automatizacion" },
        { label: "Integración de IA con tus sistemas", href: "/servicios/integracion-ia" },
      ],
    },
    relatedServiceSlugs: ["automatizacion-procesos", "apps-automatizacion", "integracion-ia"],
    costFactors: ["Número de áreas y procesos a revisar", "Cantidad de sistemas y aplicaciones en uso", "Entrevistas y horas de observación", "Profundidad de la propuesta técnica y de costos"],
    faq: [
      { question: "¿Qué es una auditoría IA de procesos?", answer: "Es una revisión de cómo trabaja tu empresa para encontrar qué tareas se pueden automatizar, qué aplicaciones conviene integrar y dónde la inteligencia artificial aporta valor. Termina con una propuesta priorizada y una hoja de ruta, no con un informe genérico." },
      { question: "¿Necesito llegar con una idea de qué automatizar?", answer: "No. Ese es el sentido de la auditoría: investigamos tus procesos, conversamos con los equipos y te proponemos las oportunidades, ordenadas por impacto y esfuerzo." },
      { question: "¿Qué áreas revisan?", answer: "Las que definamos contigo: administración, finanzas, RRHH, operaciones, comercial o atención. Se puede partir por una sola área o recorrer toda la empresa." },
      { question: "¿Pueden unir nuestras aplicaciones en un solo sistema?", answer: "Es uno de los resultados más frecuentes. La auditoría identifica qué datos viven en cada herramienta y propone cómo integrarlas en un sistema o panel común, ya sea conectando lo que existe o desarrollando una aplicación a medida." },
      { question: "¿Qué recibo al terminar?", answer: "Mapa de procesos, inventario de herramientas, oportunidades priorizadas con impacto y esfuerzo estimados, una propuesta para unir sistemas y una hoja de ruta por etapas. Lo presentamos a tu equipo y queda por escrito." },
      { question: "¿En qué se diferencia de la sesión de diagnóstico?", answer: "El diagnóstico es una conversación inicial sobre una necesidad que ya identificaste. La auditoría es una investigación más profunda de varios procesos, con entrevistas y revisión de herramientas y datos, para descubrir oportunidades que quizás no tenías en el radar." },
      { question: "¿Tengo que implementar la propuesta con YAGO?", answer: "No. La hoja de ruta queda en manos de tu empresa y puedes ejecutarla con tu equipo o con otro proveedor. Si decides avanzar con nosotros, el primer piloto ya queda definido." },
    ],
    relatedGuides: [
      { label: "Automatización para pymes: elegir el primer proceso y evaluar el piloto", href: "/blog/automatizacion-para-pymes-por-donde-partir" },
      { label: "Cómo calcular el ROI de una automatización", href: "/blog/como-calcular-el-roi-de-automatizar-procesos" },
      { label: "Cómo elegir un proveedor de automatización e IA en Chile", href: "/blog/elegir-proveedor-automatizacion-ia-chile" },
    ],
    closeCta: {
      title: "¿Sabes que hay procesos que mejorar, pero no cuáles?",
      text: "Cuéntanos cómo está organizada tu empresa. Te proponemos el alcance de la auditoría y qué áreas revisar primero.",
      primary: "Solicitar auditoría",
      secondary: "Escribir por WhatsApp",
    },
  },
  {
    slug: "automatizacion-procesos",
    modifiedDate: "2026-10-27",
    seoTitle: "Automatización de procesos con IA para empresas en Chile | YAGO",
    seoDescription: "Automatizamos tareas repetitivas de backoffice, RRHH y finanzas con IA e integraciones por API. Primer MVP en 1–2 semanas, con control de errores y trazabilidad.",
    title: "Automatización de procesos con IA",
    short: "Conectamos tareas, datos y sistemas para reducir trabajo manual y dejar cada paso trazable.",
    pageTitle: "Automatización de procesos con IA para empresas en Chile",
    pageSubtitle: "Automatizamos carga de datos, aprobaciones, documentos y reportes sobre los sistemas que ya usa tu empresa. Combinamos reglas, APIs e IA según lo que necesita cada paso.",
    definition: "La automatización de procesos empresariales usa software para ejecutar tareas repetitivas, intercambiar datos y coordinar etapas de trabajo. YAGO diseña e implementa estos flujos en Chile, incorporando IA cuando hace falta interpretar documentos, clasificar información o asistir una decisión. El alcance incluye validaciones, manejo de errores y seguimiento de la ejecución.",
    audience: "Operaciones, administración, RRHH y finanzas",
    image: "/images/optimized/service-automatizacion-procesos.webp",
    imageAlt: "Ilustración de documentos, componentes de automatización y un panel de datos conectados entre sí.",
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
    useCases: [
      { title: "Carga y validación de datos", description: "Recibir archivos o formularios, verificar campos y registrar información en una planilla, base de datos o sistema con API." },
      { title: "Aprobaciones y seguimiento", description: "Asignar responsables, aplicar reglas y generar recordatorios, con registro del estado y de las excepciones." },
      { title: "Documentos y reportes", description: "Extraer información de documentos y consolidar datos de varias fuentes para continuar un proceso o preparar un reporte." },
    ],
    workflow: {
      title: "De una solicitud por correo a una aprobación registrada.",
      description: "Ejemplo de alcance para operaciones y administración: recibir una solicitud, comprobar sus datos, asignar un responsable y registrar el resultado en las herramientas de la empresa.",
      input: "Correo o formulario con solicitud, responsable y archivos de respaldo.",
      output: "Registro con estado, responsable, decisión y bitácora de ejecución.",
      connections: "Correo, formularios, planillas y sistemas con API o webhooks disponibles.",
      steps: [
        { title: "Recibir y ordenar", description: "El flujo recoge la solicitud y normaliza los campos. Si hay documentos, se evalúa extracción con OCR; si falta información, genera un pendiente." },
        { title: "Validar y asignar", description: "Las reglas comprueban campos obligatorios y duplicados y asignan el responsable según el tipo de solicitud. La IA puede proponer una clasificación cuando aporta valor." },
        { title: "Resolver la aprobación", description: "La persona responsable revisa el respaldo y aprueba o rechaza. El flujo mantiene el estado y envía los recordatorios acordados." },
        { title: "Registrar y seguir", description: "Se registra la decisión en el sistema acordado, se notifica el resultado y se dejan visibles los errores de integración para su revisión." },
      ],
      acceptance: [
        "Probar solicitudes completas, incompletas, duplicadas y rechazadas.",
        "Comprobar que cada cambio de estado conserva su responsable y registro.",
        "Medir tiempo de intervención humana y esperas frente a la línea base del mismo proceso.",
      ],
      links: [
        { label: "Automatización de aprobaciones", href: "/soluciones/automatizacion-aprobaciones" },
        { label: "Automatización para empresas de servicios", href: "/soluciones/automatizacion-para-servicios" },
        { label: "SADT: automatización de trámites de Mi DT", href: "/sadt" },
      ],
    },
    relatedServiceSlugs: ["integracion-ia", "apps-automatizacion", "agentes-ia"],
    costFactors: ["Cantidad de pasos y sistemas a conectar", "Volumen, frecuencia y calidad de los datos", "Reglas, excepciones y revisión humana", "Monitoreo, soporte y consumo de servicios externos"],
    faq: [
      { question: "¿Qué procesos se pueden automatizar con IA?", answer: "Procesos con tareas repetitivas y entradas identificables, como clasificación de solicitudes, lectura de documentos, carga de datos, aprobaciones y reportes. Primero revisamos si basta con reglas y APIs o si hay un paso que realmente requiere IA." },
      { question: "¿La automatización exige cambiar el ERP o CRM?", answer: "No necesariamente. Evaluamos APIs, archivos, webhooks y otras interfaces disponibles para conectar los sistemas actuales. El método y los accesos se definen en el diagnóstico." },
      { question: "¿Cuánto cuesta automatizar un proceso empresarial?", answer: "Se cotiza según los pasos, sistemas, volumen, excepciones y soporte requerido. Separaremos implementación, operación y consumo de herramientas externas para que puedas evaluar el costo completo." },
      { question: "¿Cuánto demora una automatización?", answer: "Un MVP acotado puede tomar 1–2 semanas y una implementación productiva 3–6 semanas, según integraciones y disponibilidad de accesos. El plazo se confirma después de revisar el proceso y sus criterios de aceptación." },
      { question: "¿Cómo se mide el resultado?", answer: "Definimos una línea base de tiempo de intervención humana, volumen, errores y esperas. Comparamos períodos equivalentes y documentamos el método; el tiempo de ejecución de una máquina no se presenta como horas de trabajo humano ahorradas." },
    ],
    relatedGuides: [
      { label: "Cómo elegir un proveedor de automatización e IA en Chile", href: "/blog/elegir-proveedor-automatizacion-ia-chile" },
      { label: "Cómo calcular el ROI de una automatización", href: "/blog/como-calcular-el-roi-de-automatizar-procesos" },
      { label: "Automatización para pymes: elegir el primer proceso y evaluar el piloto", href: "/blog/automatizacion-para-pymes-por-donde-partir" },
    ],
  },
  {
    slug: "integracion-ia",
    modifiedDate: "2026-10-27",
    title: "Integración de IA en empresas",
    seoTitle: "Integración de IA en procesos empresariales en Chile | YAGO",
    seoDescription: "Integramos inteligencia artificial con los datos y sistemas de tu empresa: ERP, CRM, documentos y flujos internos. Diagnóstico, piloto y operación en Chile.",
    short: "Incorpora IA en tus sistemas y procesos, con datos, permisos y validaciones definidos.",
    pageTitle: "Integra inteligencia artificial en los procesos de tu empresa",
    pageSubtitle: "Conectamos modelos de IA con tus aplicaciones, documentos y datos para resolver una tarea concreta. Partimos con un piloto evaluable y definimos cómo operarlo, revisarlo y mantenerlo.",
    definition: "Integrar IA en una empresa significa conectar una capacidad de inteligencia artificial con un proceso y sus fuentes de datos, para que su resultado pueda usarse en la operación. YAGO implementa estas integraciones en Chile mediante APIs, flujos y aplicaciones, con permisos, validaciones y revisión humana cuando corresponde.",
    audience: "Gerencia, tecnología, operaciones y equipos de negocio",
    image: "/images/optimized/service-automatizacion-procesos.webp",
    imageAlt: "Ilustración de documentos y sistemas conectados con un panel de datos.",
    duration: "Plazo definido según sistemas, accesos y alcance del piloto.",
    stack: ["APIs y webhooks", "OpenAI / Vertex AI", "n8n / Make", "ERP y CRM vía API", "SQL / PostgreSQL"],
    stages: [
      { name: "Proceso y datos", description: "Elegimos una tarea, sus fuentes de información y una línea base para evaluar utilidad.", outputs: ["Caso de uso", "Fuentes y accesos", "Criterios de aceptación"] },
      { name: "Diseño de integración", description: "Definimos conexiones, permisos, formato de salida y puntos de revisión.", outputs: ["Arquitectura", "Reglas de validación", "Estimación de consumo"] },
      { name: "Piloto evaluable", description: "Probamos con una muestra representativa, incluyendo excepciones y casos ambiguos.", outputs: ["Integración funcional", "Evaluación de resultados", "Ajustes del piloto"] },
      { name: "Operación", description: "Conectamos el flujo aprobado y documentamos monitoreo, fallos y mantenimiento.", outputs: ["Despliegue", "Bitácora y alertas", "Documentación"] },
    ],
    deliverables: ["Integración con los sistemas acordados", "Configuración de la tarea y salidas estructuradas", "Validaciones, permisos y revisión cuando aplica", "Evaluación del piloto y documentación operativa"],
    useCases: [
      { title: "Clasificación de solicitudes", description: "Interpretar un correo o formulario y proponer una categoría, prioridad o responsable para el sistema que gestiona la atención." },
      { title: "Datos de documentos al sistema", description: "Extraer campos, validar su consistencia y preparar la carga a un ERP, CRM o flujo administrativo." },
      { title: "Conocimiento interno", description: "Consultar documentos autorizados desde una aplicación, con referencias a las fuentes y permisos acordes al usuario." },
    ],
    workflow: {
      title: "De una factura PDF a datos revisados para tu ERP.",
      description: "Ejemplo de integración documental: incorporar extracción con IA a un proceso existente, mantener la revisión de excepciones y entregar una salida que el sistema de destino pueda utilizar.",
      input: "PDF o imagen de una factura y la definición de campos que necesita tu proceso.",
      output: "Campos estructurados, resultado de validación y referencia al documento original.",
      connections: "OCR Master API, almacenamiento de documentos y ERP o CRM con interfaces autorizadas.",
      steps: [
        { title: "Recibir el documento", description: "Se recibe el archivo por el canal acordado y se conserva una referencia para vincular la extracción con su origen." },
        { title: "Extraer los campos", description: "La API devuelve datos estructurados. Se seleccionan los campos acordados, como proveedor, folio, fecha y monto, según el formato documental evaluado." },
        { title: "Validar y revisar", description: "Las reglas verifican formatos, campos requeridos y posibles duplicados. Los documentos ambiguos o incompletos pasan a revisión antes de continuar." },
        { title: "Conectar al sistema", description: "El resultado aprobado se prepara para carga por API o archivo. Si la interfaz lo permite, se registra y se comprueba su respuesta; los fallos quedan en una cola de revisión." },
      ],
      acceptance: [
        "Comparar cada campo con una muestra de documentos revisada por el equipo.",
        "Probar formatos distintos, documentos incompletos y fallos del sistema de destino.",
        "Medir errores por campo, documentos que requieren revisión y costo del proceso completo.",
      ],
      links: [
        { label: "OCR para empresas: evaluación de documentos", href: "/ocr" },
        { label: "OCR Master: formatos y salida JSON", href: "/ocr-master" },
        { label: "Automatización documental de principio a fin", href: "/soluciones/automatizacion-documental" },
      ],
    },
    relatedServiceSlugs: ["automatizacion-procesos", "agentes-ia", "apps-automatizacion"],
    costFactors: ["Acceso y calidad de las fuentes", "Interfaces disponibles en ERP, CRM y aplicaciones", "Volumen y consumo de modelos de IA", "Evaluación, permisos y requisitos de operación"],
    notes: ["La disponibilidad de una integración depende de las interfaces y autorizaciones de cada sistema.", "El modelo, tratamiento de datos y consumo se acuerdan según el alcance del proyecto."],
    faq: [
      { question: "¿Cómo empezar a implementar IA en una empresa?", answer: "Con una tarea concreta, un responsable, datos disponibles y un criterio de éxito. Evaluamos si la IA aporta valor frente al proceso actual, hacemos un piloto y definimos la operación antes de ampliar el alcance." },
      { question: "¿Pueden integrar IA con un ERP o CRM existente?", answer: "Sí, cuando hay interfaces y accesos adecuados. Revisamos APIs, archivos, webhooks y restricciones del proveedor; después definimos qué datos entran y qué resultado puede registrarse en el sistema." },
      { question: "¿Necesito entrenar un modelo propio?", answer: "No siempre. Muchas tareas se resuelven con modelos disponibles, reglas y contexto obtenido de tus fuentes. Entrenamiento, ajuste o recuperación de documentos se evalúan según la tarea, calidad, costo y tratamiento de datos." },
      { question: "¿Cómo se revisan las respuestas de la IA?", answer: "Usamos muestras representativas, criterios por tarea y validaciones del formato y los datos. Los casos ambiguos pueden pasar a revisión humana y se registra el resultado para detectar problemas y ajustar el flujo." },
      { question: "¿Cuánto cuesta una integración de IA?", answer: "La implementación se cotiza según sistemas, fuentes y alcance. La operación puede incluir consumo de modelos, infraestructura y soporte; esos componentes se explican por separado en la propuesta." },
    ],
    relatedGuides: [
      { label: "Cómo integrar IA sin reemplazar tus sistemas", href: "/blog/integrar-ia-procesos-empresa" },
      { label: "Cómo elegir un proveedor de automatización e IA", href: "/blog/elegir-proveedor-automatizacion-ia-chile" },
      { label: "n8n, Make e IA: herramientas y criterios para integrar tus sistemas", href: "/blog/herramientas-automatizacion-n8n-make-ia" },
    ],
  },
  {
    slug: "apps-automatizacion",
    modifiedDate: "2026-10-08",
    seoTitle: "Desarrollo de aplicaciones y software con IA en Chile | YAGO",
    seoDescription: "Desarrollamos aplicaciones empresariales a medida, funciones de IA y software con desarrollo asistido por IA. Integraciones, permisos, pruebas y documentación.",
    title: "Aplicaciones y software con IA",
    short: "Aplicaciones a medida, funciones de IA y desarrollo asistido por IA para tu operación.",
    pageTitle: "Desarrollo de aplicaciones y software a medida con IA",
    pageSubtitle: "Construimos aplicaciones empresariales en Chile: paneles, portales y herramientas internas conectadas a tus procesos. Integramos IA en el producto cuando aporta valor y usamos desarrollo asistido por IA con revisión y pruebas.",
    definition: "El desarrollo de aplicaciones con IA puede incorporar funciones inteligentes al software que usa la empresa, como búsqueda, clasificación o extracción de datos. El desarrollo asistido por IA usa herramientas de IA durante la construcción del software. YAGO ofrece ambas modalidades en proyectos a medida, con alcance, integraciones y criterios de aceptación definidos.",
    audience: "Empresas que necesitan aplicaciones internas o software a medida",
    image: "/images/optimized/service-apps-automatizacion.webp",
    imageAlt: "Ilustración de un panel con gráficos e indicadores conectado a documentos, usuarios y una base de datos.",
    duration: "2–4 semanas el primer módulo; evolución continua por sprints.",
    stack: ["Next.js", "TypeScript", "Tailwind + ShadCN", "Supabase/Postgres", "APIs internas"],
    stages: [
      {
        name: "UX Funcional",
        description: "Casos de uso, mapas de navegación y permisos.",
        outputs: ["Wireframes", "Modelo de datos"],
      },
      {
        name: "Aplicación y funciones",
        description: "Construcción de módulos, roles y funciones de IA acordadas, con revisión del código y pruebas.",
        outputs: ["Módulos funcionales", "APIs", "Pruebas de aceptación"],
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
      "Aplicación web con módulos y funciones de IA del alcance aprobado",
      "Modelo de datos, roles y permisos",
      "Integraciones por API y registro de eventos",
      "Pruebas de aceptación, despliegue y documentación de operación",
    ],
    useCases: [
      { title: "Aplicaciones que incorporan IA", description: "Búsqueda sobre documentos, extracción de campos, clasificación o asistencia dentro de un portal o herramienta empresarial." },
      { title: "Desarrollo asistido por IA", description: "Herramientas de IA apoyan la construcción y documentación. El equipo revisa el código, valida integraciones y comprueba los criterios de aceptación." },
      { title: "Apps internas y paneles", description: "Centralizar solicitudes, aprobaciones, estados y acciones en una aplicación con usuarios, permisos y bitácora." },
    ],
    workflow: {
      title: "Un portal para recibir documentos, revisar datos y operar solicitudes.",
      description: "Ejemplo de aplicación empresarial completa: una interfaz para el usuario, un modelo de datos para el proceso y una función de IA que propone información revisable dentro del software.",
      input: "Usuarios con distintos roles, una solicitud y sus documentos de respaldo.",
      output: "Solicitud gestionada desde un panel, con datos revisados, estados e historial.",
      connections: "Aplicación web, base de datos, APIs de IA y sistemas del proceso acordado.",
      steps: [
        { title: "Ingresar la solicitud", description: "El usuario accede al portal, completa los campos y adjunta archivos. La aplicación guarda la solicitud y su estado inicial." },
        { title: "Preparar información con IA", description: "Una función de extracción o clasificación propone campos a partir del documento. La interfaz distingue la propuesta de los valores ya revisados." },
        { title: "Revisar y gestionar", description: "El equipo corrige datos, asigna responsables y actualiza estados desde un panel. Los permisos determinan qué puede ver y modificar cada usuario." },
        { title: "Integrar y operar", description: "La aplicación entrega la salida al sistema acordado y registra eventos. El despliegue incluye las pruebas y documentación del alcance definido." },
      ],
      acceptance: [
        "Validar recorridos completos por rol: ingreso, revisión, aprobación y consulta del historial.",
        "Probar errores de integración y corrección de datos propuestos por la IA.",
        "Acordar en la propuesta acceso al código, infraestructura, documentación y soporte posterior.",
      ],
      links: [
        { label: "ANTON.IA: plataforma de prospección B2B", href: "/productos/antonia" },
        { label: "OCR Master: una API para integrar al portal", href: "/ocr-master" },
        { label: "Apps con IA y desarrollo asistido: diferencias", href: "/blog/apps-ia-desarrollo-asistido-diferencias" },
      ],
    },
    relatedServiceSlugs: ["integracion-ia", "automatizacion-procesos", "agentes-ia"],
    costFactors: ["Módulos, usuarios y permisos", "Integraciones y migración de datos", "Funciones de IA y criterios de evaluación", "Infraestructura, soporte y evolución del software"],
    faq: [
      { question: "¿Qué diferencia hay entre una app con IA y desarrollo asistido por IA?", answer: "En una app con IA, el usuario utiliza una función inteligente del producto. En desarrollo asistido por IA, las herramientas ayudan al equipo a construir el software, que puede tener o no funciones de IA. Podemos trabajar ambas modalidades." },
      { question: "¿Qué aplicaciones empresariales pueden desarrollar?", answer: "Aplicaciones web internas, portales, paneles y herramientas para solicitudes, documentos y flujos de trabajo, con integraciones y permisos definidos. El diagnóstico permite acotar módulos y requisitos." },
      { question: "¿Usar IA para desarrollar garantiza un proyecto más rápido o barato?", answer: "El efecto depende del alcance, las integraciones y la revisión necesaria. Definimos entregables y estimamos el proyecto; la calidad se comprueba con revisión del código, pruebas y criterios de aceptación." },
      { question: "¿Qué recibe mi empresa al terminar?", answer: "Los entregables y condiciones de acceso al repositorio, despliegue, documentación y soporte se acuerdan en la propuesta. La aplicación incluye los módulos, roles e integraciones del alcance aprobado." },
      { question: "¿Cuánto demora desarrollar una app interna?", answer: "Un primer módulo acotado puede tomar 2–4 semanas; el plazo completo depende de módulos, integraciones y disponibilidad de datos. Confirmamos el calendario después de definir el alcance." },
    ],
    relatedGuides: [
      { label: "Apps con IA y desarrollo asistido: diferencias", href: "/blog/apps-ia-desarrollo-asistido-diferencias" },
      { label: "Integrar IA en procesos empresariales", href: "/blog/integrar-ia-procesos-empresa" },
    ],
  },
  {
    slug: "agentes-ia",
    modifiedDate: "2026-11-01",
    title: "Agentes y asistentes de IA",
    seoTitle: "Agentes y asistentes de IA para empresas en Chile | YAGO",
    seoDescription: "Implementamos agentes de IA, asistentes internos y chatbots para empresas en Chile, conectados a tus documentos y sistemas, con permisos y evaluación definidos.",
    short: "Asistentes y agentes conectados a tus documentos y herramientas, con un alcance definido.",
    pageTitle: "Agentes y asistentes de IA para empresas en Chile",
    pageSubtitle: "Implementamos asistentes que consultan conocimiento interno y agentes que utilizan herramientas para resolver tareas. Definimos qué pueden hacer, qué fuentes utilizan y cuándo debe intervenir una persona.",
    definition: "Un asistente de IA responde o ayuda a una persona con una tarea; un agente también puede elegir pasos y usar herramientas dentro de un alcance definido. YAGO implementa agentes, asistentes y chatbots empresariales en Chile, conectados a fuentes autorizadas, aplicaciones y procesos con evaluación y registro de actividad.",
    audience: "Soporte interno, operaciones y equipos con conocimiento distribuido",
    image: "/images/optimized/product-sofia.webp",
    imageAlt: "Ilustración de una esfera central conectada con documentos, carpetas y mensajes.",
    duration: "Piloto y despliegue definidos según fuentes, canales y herramientas.",
    stack: ["RAG y búsqueda semántica", "OpenAI / Vertex AI", "APIs y herramientas", "Web / WhatsApp según alcance", "Bases de datos y documentos"],
    stages: [
      { name: "Tarea y límites", description: "Definimos quién usa el asistente, qué puede resolver y qué requiere aprobación.", outputs: ["Casos de uso", "Permisos", "Criterios de éxito"] },
      { name: "Fuentes y herramientas", description: "Preparamos conocimiento autorizado y conexiones con sistemas o acciones.", outputs: ["Fuentes", "Conectores", "Reglas de acceso"] },
      { name: "Evaluación", description: "Probamos preguntas, referencias, acciones y fallos con ejemplos del proceso.", outputs: ["Piloto", "Resultados de evaluación", "Revisión de excepciones"] },
      { name: "Puesta en marcha", description: "Integramos el canal acordado y documentamos operación y actualización del conocimiento.", outputs: ["Canal habilitado", "Registro de actividad", "Guía operativa"] },
    ],
    deliverables: ["Asistente o agente configurado para la tarea acordada", "Conexión a fuentes y herramientas autorizadas", "Evaluación con preguntas y casos del proceso", "Permisos, registros y documentación operativa"],
    useCases: [
      { title: "Asistente de conocimiento interno", description: "Consultar procedimientos y documentos autorizados, mostrando referencias y respetando los accesos del usuario." },
      { title: "Preparación de solicitudes", description: "Recopilar datos, clasificar una necesidad y proponer un registro o ticket para su revisión." },
      { title: "Agente conectado a herramientas", description: "Consultar estados o preparar acciones en un sistema, con aprobación humana en los pasos que la empresa determine." },
    ],
    workflow: {
      title: "Consultar un procedimiento y preparar una solicitud de soporte.",
      description: "Ejemplo que distingue responder de actuar: el asistente busca una respuesta con referencias y, cuando el alcance lo incluye, utiliza una herramienta para preparar un ticket revisable.",
      input: "Pregunta de un usuario, documentos autorizados y datos necesarios para una solicitud.",
      output: "Respuesta con referencias o propuesta de ticket, con registro de la consulta y la acción.",
      connections: "Documentos de Drive o SharePoint, canal web y herramienta de tickets vía API, según accesos.",
      steps: [
        { title: "Identificar la necesidad", description: "El asistente recoge la pregunta y los datos disponibles. Si falta contexto, pide una aclaración antes de seleccionar el siguiente paso." },
        { title: "Consultar las fuentes", description: "La búsqueda recupera información de los documentos autorizados. La respuesta incluye referencias para que el usuario pueda revisar el procedimiento." },
        { title: "Preparar la acción", description: "Si corresponde derivar, el agente propone un ticket con categoría, descripción y responsable. La herramienta y sus campos se definen con el sistema de soporte." },
        { title: "Confirmar y registrar", description: "Cuando se acuerda aprobación, el usuario revisa antes de crear el registro. El resultado o el error de la herramienta queda vinculado a la consulta." },
      ],
      acceptance: [
        "Evaluar preguntas conocidas, ambiguas y sin respuesta en las fuentes disponibles.",
        "Comprobar referencias, permisos y comportamiento ante herramientas que fallan.",
        "Medir respuestas útiles, derivaciones y acciones correctamente ejecutadas con casos del equipo.",
      ],
      links: [
        { label: "SOF.IA: conocimiento interno y fuentes", href: "/productos/sofia" },
        { label: "Integración de IA con procesos y sistemas", href: "/servicios/integracion-ia" },
        { label: "Agentes de IA: tareas y criterios de evaluación", href: "/blog/agentes-de-ia-para-empresas" },
      ],
    },
    relatedServiceSlugs: ["integracion-ia", "apps-automatizacion", "automatizacion-procesos"],
    costFactors: ["Fuentes y actualización del conocimiento", "Canales, usuarios y volumen de consultas", "Herramientas, acciones y permisos", "Evaluación, consumo de modelos y soporte"],
    notes: ["Las acciones disponibles y los puntos de aprobación se acuerdan antes del despliegue.", "La calidad de una respuesta depende también de la calidad y vigencia de las fuentes.", "El plazo depende del estado de las fuentes, las integraciones y accesos, los canales, las acciones con sus aprobaciones y el tiempo de tu equipo para revisar casos de evaluación. Por eso partimos con un piloto acotado y confirmamos el calendario después de revisar fuentes, interfaces y criterios de aceptación."],
    faq: [
      { question: "¿Qué es un agente de IA para empresas?", answer: "Es un sistema que usa un modelo para seleccionar pasos y herramientas con el fin de completar una tarea. En una implementación empresarial se define su alcance, permisos, fuentes, registro y puntos de revisión." },
      { question: "¿Puede responder usando los documentos de mi empresa?", answer: "Sí. Podemos implementar recuperación de información, conocida como RAG, sobre fuentes autorizadas. Evaluamos la pertinencia de las respuestas, las referencias y el acceso a la información." },
      { question: "¿En qué se diferencia de un chatbot?", answer: "Un chatbot es una interfaz de conversación. Puede contener un asistente que responde o un agente que también usa herramientas. La diferencia importante es la tarea y las acciones que realmente puede ejecutar." },
      { question: "¿Puede usar WhatsApp o una aplicación web?", answer: "Podemos evaluar esos canales según accesos, requisitos y alcance. La conexión con sistemas y las acciones disponibles se definen por separado del canal de conversación." },
      { question: "¿Cómo se actualiza y supervisa?", answer: "Acordamos cómo actualizar fuentes, revisar consultas y registrar resultados. El soporte y mantenimiento se definen según el uso y las herramientas de la solución." },
      { question: "¿Cuánto cuesta implementar un agente de IA en una empresa en Chile?", answer: "Se cotiza según la tarea, las fuentes que hay que preparar, las integraciones, los canales y el volumen de consultas. Separamos la implementación de los costos de operación, como el consumo de modelos, la infraestructura y el soporte, para que puedas comparar el costo completo. El monto se confirma después de revisar el alcance del piloto." },
      { question: "¿Un agente de IA se puede conectar con el ERP, el CRM u otros sistemas de mi empresa?", answer: "Sí, cuando el sistema ofrece una API u otra interfaz autorizada para consultar o registrar datos. En el diagnóstico revisamos qué interfaces existen, qué accesos se necesitan y qué debe aportar el proveedor de cada sistema. Si no hay API, evaluamos alternativas como archivos de intercambio o automatización de pantalla, y definimos qué acciones requieren aprobación antes de ejecutarse." },
      { question: "¿Cómo se protegen los datos personales y la información confidencial que usa el agente?", answer: "El agente consulta solo fuentes autorizadas, respeta los permisos de cada usuario y deja registro de cada consulta y acción. Revisamos con tu equipo qué datos personales necesita realmente la tarea, dónde los procesa el proveedor del modelo y quién puede verlos. En Chile, el tratamiento de datos personales se rige por la Ley 19.628, que la Ley 21.719 modifica; su aplicación a tu caso se define con tu equipo legal." },
    ],
    relatedGuides: [
      { label: "Qué es un agente de IA: cómo funciona y ejemplos", href: "/blog/agentes-de-ia-para-empresas" },
      { label: "Integrar IA en procesos empresariales", href: "/blog/integrar-ia-procesos-empresa" },
    ],
    relatedProducts: [{ label: "SOF.IA: asistente corporativo configurable", href: "/productos/sofia" }],
  },
  {
    slug: "paginas-web",
    modifiedDate: "2026-10-29",
    seoTitle: "Desarrollo de páginas web personalizadas en Chile | YAGO",
    seoDescription: "Diseñamos y programamos sitios web a medida para empresas: rápidos, accesibles y preparados para Google y buscadores con IA, con formularios y medición.",
    title: "Páginas web personalizadas",
    short: "Sitios a medida, rápidos y preparados para Google y buscadores con IA, con formularios y medición conectados.",
    pageTitle: "Desarrollo de páginas web personalizadas para empresas",
    pageSubtitle: "Diseñamos y programamos sitios corporativos, landings y sitios con contenido editable a partir de tus objetivos, sin plantillas genéricas. Cada sitio sale con SEO técnico, datos estructurados, accesibilidad y medición de contactos.",
    definition: "Una página web personalizada se diseña y programa a partir de los objetivos, contenidos e identidad de una empresa, en lugar de adaptar una plantilla genérica. YAGO desarrolla sitios web en Chile con código propio, SEO técnico, datos estructurados para buscadores y asistentes de IA, accesibilidad y formularios conectados a las herramientas comerciales de la empresa.",
    audience: "Empresas que necesitan un sitio corporativo, una landing de producto o renovar su web actual",
    approach: "Brief, diseño, desarrollo, pruebas y lanzamiento con medición",
    pricing: "Cotización según páginas, contenidos, integraciones y mantenimiento",
    ctaPrimary: "Cotizar mi sitio web",
    image: "/images/optimized/service-paginas-web.webp",
    imageAlt: "Ilustración de una página web en construcción, con bloques de contenido y botones que una grúa ordena.",
    duration: "1–3 semanas según número de secciones, contenidos e integraciones.",
    supportPoints: ["Diseño a medida, sin plantillas", "SEO técnico y datos estructurados", "Preparado para buscadores con IA", "Formularios y medición conectados"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel / Firebase", "Search Console y Analytics", "schema.org y llms.txt"],
    stages: [
      {
        name: "Brief y arquitectura",
        description: "Definimos objetivo, público, mapa del sitio, búsquedas que debe responder y la acción principal de cada página.",
        outputs: ["Mapa del sitio", "Búsquedas por página", "Ruta de contacto"],
      },
      {
        name: "Diseño y contenidos",
        description: "Proponemos la línea visual a partir de tu marca y ordenamos los textos para que expliquen la oferta con claridad.",
        outputs: ["Diseño de páginas clave", "Guía de estilo", "Textos revisados"],
      },
      {
        name: "Desarrollo",
        description: "Programamos componentes responsivos, animaciones medidas y SEO técnico, cuidando el rendimiento en móvil.",
        outputs: ["Sitio funcional", "Datos estructurados", "Optimización Core Web Vitals"],
      },
      {
        name: "Lanzamiento y medición",
        description: "Probamos accesibilidad y formularios, conectamos el dominio, enviamos el sitio a indexar y activamos los eventos de conversión.",
        outputs: ["Checklist SEO", "Search Console y Analytics", "Deploy y DNS"],
      },
    ],
    deliverables: [
      "Sitio publicado en tu dominio, con repositorio y despliegue documentados",
      "Diseño responsivo para móvil, tablet y escritorio",
      "SEO técnico: metadatos, sitemap, robots, URLs canónicas y datos estructurados schema.org",
      "Formularios conectados a correo, CRM o WhatsApp, con eventos de conversión",
      "Google Search Console y Analytics configurados",
      "Manual de edición de contenidos",
    ],
    notes: [
      "Recomendamos que dominio, hosting y cuentas de medición queden a nombre de tu empresa; el acceso al repositorio se acuerda en la propuesta.",
      "Los textos e imágenes los aporta la empresa o se preparan junto a ella; fotografía profesional y video se cotizan aparte.",
      "Un buen SEO técnico facilita la indexación, pero la posición en Google depende también del contenido, la competencia y la autoridad del dominio.",
    ],
    useCases: [
      { title: "Sitio corporativo", description: "Presentar la empresa, sus servicios y su forma de trabajo, con páginas pensadas para lo que buscan tus clientes y un contacto claro en cada una." },
      { title: "Landing de producto o campaña", description: "Una página enfocada en una oferta, con mensajes, pruebas y formulario medibles, conectada a tus campañas y a tu CRM." },
      { title: "Rediseño de un sitio existente", description: "Renovar diseño, velocidad y estructura cuidando el posicionamiento: redirecciones, URLs y contenidos que ya reciben visitas." },
    ],
    workflow: {
      title: "De un brief a un sitio publicado, indexable y medido.",
      description: "Ejemplo de proyecto para un sitio corporativo: ordenar la oferta, diseñar a partir de la marca, programar con SEO técnico y dejar la medición lista el día del lanzamiento.",
      input: "Objetivos comerciales, servicios o productos, identidad de marca y contenidos disponibles.",
      output: "Sitio publicado en tu dominio, con formularios conectados, datos estructurados y medición de contactos.",
      connections: "Dominio y DNS, formularios a correo o CRM, WhatsApp, Google Search Console y Analytics.",
      steps: [
        { title: "Ordenar la oferta", description: "Definimos qué páginas necesita el sitio, qué búsqueda responde cada una y qué acción esperamos del visitante en cada caso." },
        { title: "Diseñar con tu marca", description: "Proponemos el diseño de las páginas clave en móvil y escritorio. Logo, colores y tipografía se aplican de forma consistente en todo el sitio." },
        { title: "Programar y optimizar", description: "Desarrollamos con código propio, imágenes optimizadas y datos estructurados para que Google y los asistentes de IA entiendan quién eres y qué ofreces." },
        { title: "Lanzar y medir", description: "Conectamos dominio, formularios y analítica, enviamos el sitemap a Search Console y verificamos que cada contacto quede registrado." },
      ],
      acceptance: [
        "Revisar el rendimiento móvil de las páginas principales (Lighthouse y Core Web Vitals) antes del lanzamiento.",
        "Comprobar accesibilidad WCAG 2.2 AA con pruebas automáticas y navegación con teclado.",
        "Probar cada formulario de punta a punta: envío, notificación y registro en la herramienta acordada.",
      ],
      links: [
        { label: "Aplicaciones y software a medida con IA", href: "/servicios/apps-automatizacion" },
        { label: "Asistentes de IA para atender en tu sitio", href: "/servicios/agentes-ia" },
        { label: "Cómo trabajamos un proyecto", href: "/proceso" },
      ],
    },
    relatedServiceSlugs: ["apps-automatizacion", "agentes-ia", "automatizacion-procesos"],
    costFactors: ["Número de páginas y secciones", "Contenidos: textos, imágenes e idiomas", "Integraciones: CRM, agenda, WhatsApp o pagos", "Gestor de contenidos, hosting y mantenimiento"],
    faq: [
      { question: "¿Cuánto demora desarrollar una página web a medida?", answer: "Entre 1 y 3 semanas para la mayoría de los sitios corporativos y landings, según el número de secciones, la disponibilidad de contenidos y las integraciones. El calendario se confirma en la propuesta." },
      { question: "¿En qué se diferencia de un sitio hecho con plantilla?", answer: "El diseño, la estructura y el código se hacen para tu empresa. Eso permite controlar la velocidad, el SEO técnico y la accesibilidad, y evita cargar funciones que el sitio no usa." },
      { question: "¿El sitio queda preparado para Google y para buscadores con IA?", answer: "Sí, en lo técnico: metadatos, sitemap, URLs limpias, datos estructurados schema.org, rendimiento móvil y archivos como llms.txt para asistentes de IA. La posición depende además del contenido, la competencia y la autoridad del dominio, por eso la seguimos en Search Console." },
      { question: "¿Podré editar los contenidos?", answer: "Sí. Según cuánto vaya a cambiar el sitio, dejamos un gestor de contenidos o un flujo de edición documentado, con un manual para tu equipo. Lo definimos en el brief." },
      { question: "¿Pueden rediseñar mi sitio actual sin perder posicionamiento?", answer: "Antes de cambiar revisamos las URLs y páginas que hoy reciben visitas, preparamos redirecciones y conservamos el contenido que funciona. Después del lanzamiento seguimos la indexación en Search Console." },
      { question: "¿Qué necesito tener listo para partir?", answer: "El objetivo del sitio, tu logo e identidad visual, y la información de tus servicios o productos. Si faltan textos, los ordenamos contigo durante el brief." },
    ],
    closeCta: {
      title: "¿Tu sitio debería traerte más clientes?",
      text: "Cuéntanos qué vendes y a quién. Te proponemos la estructura del sitio y lo que necesita para medirse desde el primer día.",
      primary: "Cotizar mi sitio web",
      secondary: "Escribir por WhatsApp",
    },
  },
  {
    slug: "capacitacion-ia",
    modifiedDate: "2026-10-29",
    seoTitle: "Capacitación en IA para empresas y equipos en Chile | YAGO",
    seoDescription: "Talleres prácticos de IA para equipos: casos de cada área, uso seguro de datos, playbooks por rol y seguimiento de la adopción. Bootcamp de 6 a 12 horas.",
    title: "Capacitación de equipos en IA",
    short: "Talleres prácticos para que tu equipo use IA en su trabajo diario, con reglas de uso de datos y casos de su área.",
    pageTitle: "Capacitación en inteligencia artificial para equipos de empresa",
    pageSubtitle: "Talleres prácticos donde cada persona resuelve tareas reales de su trabajo con las herramientas de IA que tu empresa ya tiene. Incluimos reglas de uso de datos, playbooks por rol y seguimiento para que la adopción no termine el día del taller.",
    definition: "La capacitación en IA para empresas enseña a los equipos a usar herramientas de inteligencia artificial en sus tareas, con criterios para revisar resultados y proteger la información. YAGO diseña programas prácticos en Chile a partir de las tareas de cada área y las herramientas disponibles en la empresa, y deja materiales, playbooks por rol y un plan de adopción con indicadores.",
    audience: "Gerencias, líderes de área y equipos de RRHH, finanzas, operaciones y comercial",
    approach: "Diagnóstico por área, talleres prácticos y seguimiento de la adopción",
    pricing: "Cotización según participantes, horas, formato y personalización",
    ctaPrimary: "Cotizar capacitación",
    ctaSecondary: "Ver el programa",
    image: "/images/optimized/service-capacitacion-ia.webp",
    imageAlt: "Ilustración de una sala de capacitación con puestos de trabajo y un modelo de inteligencia artificial al centro.",
    duration: "Bootcamp de 6–12 horas; programas a medida desde 2 semanas.",
    supportPoints: ["Casos de tu propia operación", "Uso seguro de datos", "Playbooks por rol", "Seguimiento de la adopción"],
    stack: ["ChatGPT, Gemini o Copilot (según la empresa)", "Microsoft 365 / Google Workspace", "Asistentes personalizados", "n8n / Make para automatizaciones simples", "Biblioteca de prompts"],
    stages: [
      {
        name: "Diagnóstico",
        description: "Levantamos tareas frecuentes por rol, herramientas disponibles, políticas de datos y nivel de uso actual del equipo.",
        outputs: ["Mapa de casos por área", "Nivel inicial", "Plan de contenidos"],
      },
      {
        name: "Diseño del programa",
        description: "Preparamos ejercicios con documentos y situaciones de tu operación, con datos de prueba o anonimizados.",
        outputs: ["Agenda por sesión", "Ejercicios por área", "Reglas de uso de datos"],
      },
      {
        name: "Talleres prácticos",
        description: "Sesiones en vivo donde cada participante resuelve tareas reales y revisa los resultados con criterios claros.",
        outputs: ["Materiales y ejercicios", "Biblioteca de prompts", "Guías de referencia"],
      },
      {
        name: "Acompañamiento",
        description: "Seguimiento para resolver dudas, ajustar los playbooks y revisar los indicadores de adopción.",
        outputs: ["Playbooks ajustados", "Indicadores de adopción", "Casos para automatizar"],
      },
    ],
    deliverables: [
      "Programa y materiales de cada sesión, con ejercicios de tu operación",
      "Playbooks por rol o área: casos, prompts y criterios de revisión",
      "Guía de uso responsable de IA: qué datos usar, en qué herramientas y cómo revisar",
      "Plan de adopción con indicadores y casos priorizados",
      "Grabaciones de las sesiones remotas (si se acuerda)",
    ],
    notes: [
      "Los ejercicios usan las herramientas y licencias que la empresa ya tiene o decide contratar; no se ingresan datos sensibles en cuentas personales.",
      "La guía de uso se alinea con la política de seguridad de la empresa y con su área de TI; no la reemplaza.",
      "El formato (remoto, presencial o mixto) y el tamaño de cada grupo se acuerdan en la propuesta.",
    ],
    useCases: [
      { title: "Bootcamp para un área", description: "Un programa intensivo de 6 a 12 horas para un equipo: fundamentos, ejercicios con sus tareas diarias y un playbook al cierre." },
      { title: "Programa para varias áreas", description: "Rutas distintas para RRHH, finanzas, operaciones o comercial, con una base común de uso seguro y casos propios de cada equipo." },
      { title: "Líderes y gerencias", description: "Sesiones para decidir dónde aplicar IA: cómo priorizar casos, qué riesgos y costos considerar y cómo medir el resultado." },
    ],
    workflow: {
      title: "De un equipo que prueba IA por su cuenta a un uso acordado y medido.",
      description: "Ejemplo de programa para un área: partir de sus tareas reales, practicar con las herramientas autorizadas y dejar reglas, playbooks e indicadores para seguir después del taller.",
      input: "Tareas frecuentes del área, herramientas de IA disponibles y políticas de datos de la empresa.",
      output: "Casos practicados por cada participante, playbook del área, guía de uso y plan de adopción.",
      connections: "Herramientas que la empresa ya usa: Microsoft 365, Google Workspace, ChatGPT, Gemini o Copilot.",
      steps: [
        { title: "Levantar tareas y nivel", description: "Una encuesta breve y conversaciones con los líderes identifican qué tareas consumen más tiempo y cómo usa IA hoy el equipo." },
        { title: "Preparar ejercicios propios", description: "Convertimos esas tareas en ejercicios: redactar y revisar correos, resumir documentos, analizar planillas o preparar informes, con datos de prueba o anonimizados." },
        { title: "Practicar con criterio", description: "En el taller cada persona resuelve sus ejercicios, compara resultados y aprende a detectar errores, verificar fuentes y decidir qué no delegar en la IA." },
        { title: "Seguir la adopción", description: "Después del taller revisamos qué casos se están usando, resolvemos dudas y ajustamos el playbook. Los casos muy repetitivos pueden pasar a una automatización." },
      ],
      acceptance: [
        "Cada participante resuelve al menos un caso de su propio trabajo durante el programa.",
        "Una evaluación breve antes y después compara conocimientos y confianza del equipo.",
        "Los indicadores de adopción acordados, como casos en uso y tiempo declarado por tarea, se revisan en el seguimiento.",
      ],
      links: [
        { label: "Agentes y asistentes de IA para tu equipo", href: "/servicios/agentes-ia" },
        { label: "Automatización de procesos con IA", href: "/servicios/automatizacion-procesos" },
        { label: "Automatización de procesos: qué es, tipos y ejemplos", href: "/blog/que-es-la-automatizacion-de-procesos-con-ia" },
      ],
    },
    relatedServiceSlugs: ["agentes-ia", "automatizacion-procesos", "integracion-ia"],
    costFactors: ["Número de participantes y grupos", "Horas de taller y sesiones de seguimiento", "Personalización de ejercicios por área", "Formato remoto, presencial o mixto"],
    faq: [
      { question: "¿Qué aprende un equipo en una capacitación de IA?", answer: "A usar IA en tareas concretas de su trabajo: redactar, resumir, analizar información, preparar documentos y armar asistentes simples. También aprende a revisar resultados, detectar errores y decidir qué información no debe ingresar a una herramienta." },
      { question: "¿Se necesitan conocimientos técnicos?", answer: "No. Los talleres para equipos de negocio no requieren programar. Ajustamos el nivel según el diagnóstico y, si participan equipos técnicos, podemos sumar contenidos de automatización e integración." },
      { question: "¿Con qué herramientas trabajan?", answer: "Con las que tu empresa ya tiene o decide adoptar, como ChatGPT, Gemini o Microsoft Copilot. Si todavía no hay herramientas definidas, la capacitación incluye criterios para elegir y qué revisar en sus condiciones de uso de datos." },
      { question: "¿Cómo se cuida la información de la empresa?", answer: "Los ejercicios usan datos de prueba o anonimizados, y la guía de uso define qué información se puede ingresar y en qué herramientas. Esa guía se alinea con las políticas de seguridad y con el área de TI." },
      { question: "¿Cuánto dura y cómo se mide el resultado?", answer: "Un bootcamp toma entre 6 y 12 horas, y un programa para varias áreas parte en 2 semanas. Medimos con una evaluación antes y después, los casos resueltos durante el programa y los indicadores de adopción revisados en el seguimiento." },
      { question: "¿Qué pasa después de la capacitación?", answer: "El equipo queda con playbooks, la guía de uso y un plan de adopción. Los casos que se repiten mucho pueden convertirse en una automatización o un asistente, que evaluamos por separado." },
    ],
    relatedGuides: [
      { label: "Automatización de procesos: qué es, tipos y ejemplos", href: "/blog/que-es-la-automatizacion-de-procesos-con-ia" },
      { label: "Qué es un agente de IA y ejemplos en empresas", href: "/blog/agentes-de-ia-para-empresas" },
      { label: "Cómo integrar IA en los procesos de una empresa", href: "/blog/integrar-ia-procesos-empresa" },
    ],
    closeCta: {
      title: "¿Quieres que tu equipo use IA con criterio?",
      text: "Cuéntanos qué áreas participarían y qué herramientas usan. Te proponemos un programa con casos de tu operación.",
      primary: "Cotizar capacitación",
      secondary: "Escribir por WhatsApp",
    },
  },
];

// Helper para obtener un servicio por slug
export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

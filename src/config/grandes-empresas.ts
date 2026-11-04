// Contenido de /grandes-empresas. Cada afirmación debe poder respaldarse: lo que depende del proyecto se dice como
// "se acuerda en la propuesta". No agregar certificaciones, cifras ni clientes sin evidencia y autorización.

export const ENTERPRISE_UPDATED = "2026-11-04";

export const ENTERPRISE_PAGE = {
  seoTitle: "IA y agentes para grandes empresas en Chile | YAGO",
  seoDescription: "Agentes de IA y automatización para grandes empresas en Chile: un proceso acotado, un piloto medible y los controles que piden TI, seguridad y compras.",
  hero: {
    eyebrow: "Grandes empresas · Chile",
    title: "IA y agentes para grandes empresas,",
    highlight: "empezando por un proceso.",
    description: "No hace falta partir con un programa de transformación. Elegimos un proceso, medimos una línea base y hacemos un piloto con los controles que piden TI, seguridad y compras. Con esos datos decides si ampliar.",
  },
  summary: {
    eyebrow: "En resumen",
    title: "Alcance acotado, resultado medible.",
    description: "YAGO trabaja con grandes empresas en alcances acotados: un proceso, un agente de IA o una integración con indicadores definidos. Es un equipo especializado de 2 a 10 personas, con productos propios para trámites en el Portal Mi DT (SADT) y consultas de causas públicas en el Poder Judicial (AXIS).",
    facts: [
      { label: "Para quién", value: "Áreas de operaciones, finanzas, RRHH y TI de empresas grandes en Chile." },
      { label: "Cómo parte", value: "Un proceso con línea base, criterios de aceptación y un piloto." },
      { label: "Especialidades", value: "Agentes de IA, automatización, OCR, cumplimiento laboral y consultas al Poder Judicial." },
      { label: "Modalidad", value: "Atención remota, con tu equipo de negocio y tecnología." },
    ],
  },
  fit: {
    eyebrow: "Dónde encajamos",
    title: "Cuándo YAGO es una buena opción.",
    description: "Una empresa grande no siempre necesita un proveedor grande. Si la tarea es específica, importa más conocer el proceso y poder medir el resultado.",
    good: [
      { title: "Un agente de IA para una tarea concreta", description: "Consulta documentos y sistemas autorizados, con permisos por usuario y aprobación humana en lo sensible.", href: "/servicios/agentes-ia", label: "Agentes y asistentes de IA" },
      { title: "Un proceso repetitivo entre áreas", description: "Solicitudes, aprobaciones, carga de datos o reportes conectados a tu ERP o CRM, sin reemplazarlos.", href: "/servicios/automatizacion-procesos", label: "Automatización de procesos" },
      { title: "Trámites masivos en el Portal Mi DT", description: "Para empleadores con alta rotación: registro de contratos y términos, y certificados F30 y F30-1 por lote, con validación y evidencia.", href: "/sadt", label: "Conocer SADT" },
      { title: "Consultas de causas públicas a volumen", description: "Revisión individual o por lote de causas penales públicas del Poder Judicial, con evidencia y monitoreo diario.", href: "/axis", label: "Conocer AXIS" },
      { title: "Documentos que hoy se digitan", description: "Facturas, contratos y formularios convertidos en datos validados para tus sistemas. Los casos dudosos pasan a revisión.", href: "/ocr", label: "OCR y digitalización" },
      { title: "Todavía no sabes por dónde partir", description: "Una auditoría revisa procesos, herramientas y datos, y deja una hoja de ruta con el primer piloto definido.", href: "/servicios/auditoria-ia", label: "Auditoría IA" },
    ],
    otherTitle: "Cuándo conviene otro proveedor.",
    otherDescription: "Decirlo desde el inicio ahorra tiempo a los dos.",
    other: [
      { title: "Reemplazar o migrar el ERP", description: "Se define con el proveedor del ERP o un integrador especializado. Nosotros podemos conectar y automatizar alrededor del sistema." },
      { title: "Ciberseguridad o infraestructura administrada", description: "Corresponde a tu área de TI o a un especialista. Trabajamos con las políticas de seguridad que ellos definen." },
      { title: "Un programa en muchas áreas a la vez", description: "Si necesitas un equipo grande dedicado, conviene un integrador de mayor tamaño. Podemos hacernos cargo de una parte acotada." },
    ],
  },
  pilot: {
    eyebrow: "Cómo parte",
    title: "De un proceso a una decisión con datos.",
    steps: [
      { title: "Elegir el proceso", description: "Partimos por un proceso con volumen y un responsable claro. Si no está claro cuál, la auditoría IA ayuda a priorizar." },
      { title: "Medir la línea base", description: "Medimos volumen, tiempo manual, errores, esperas y responsables antes de automatizar." },
      { title: "Acordar alcance y controles", description: "Definimos qué hará la solución, qué seguirá revisando una persona y cómo se manejan las excepciones." },
      { title: "Probar con tu equipo", description: "Probamos con datos y usuarios del proceso antes de considerar terminada la implementación." },
      { title: "Decidir con datos", description: "Comparamos contra la línea base y documentamos el método de cálculo. Con eso decides si ampliar, ajustar o detener." },
    ],
  },
  controls: {
    eyebrow: "Para TI y seguridad",
    title: "Lo que van a preguntar tus equipos.",
    items: [
      { title: "Accesos y permisos", description: "Trabajamos con los accesos y las políticas de seguridad que define tu empresa. Los permisos determinan qué puede ver y hacer cada usuario." },
      { title: "Fuentes autorizadas", description: "Un agente consulta solo las fuentes autorizadas y respeta los permisos de cada usuario." },
      { title: "Registro de actividad", description: "Las soluciones dejan registro de consultas, acciones y excepciones, para poder revisar lo que pasó." },
      { title: "Revisión humana", description: "Definimos qué requiere la aprobación de una persona, como excepciones, montos altos o casos dudosos." },
      { title: "Integración con tus sistemas", description: "Evaluamos APIs, archivos, webhooks y otras interfaces para conectar el ERP o el CRM. El método y los accesos se definen en el diagnóstico." },
      { title: "Datos personales", description: "Revisamos qué datos necesita la tarea, dónde los procesa el proveedor del modelo y quién puede verlos. En Chile rige la Ley 19.628, que la Ley 21.719 modifica; su aplicación a tu caso se define con tu equipo legal." },
    ],
  },
  written: {
    eyebrow: "Por escrito",
    title: "Qué queda definido en la propuesta.",
    items: [
      "Alcance, entregables y criterios de aceptación.",
      "Costos de implementación separados de los de operación, como consumo de modelos, infraestructura y soporte.",
      "Acceso al código, a la infraestructura y a la documentación.",
      "Soporte y mantenimiento después de la puesta en marcha.",
      "Acuerdo de confidencialidad, si lo requieres.",
    ],
    continuityTitle: "Un equipo chico, con la continuidad acordada.",
    continuity: "Trabajas directo con quienes diseñan y construyen la solución. Es válido preguntarse qué pasa si dependes de un equipo chico, y por eso se resuelve desde el inicio: documentamos integraciones, excepciones y mantenimiento según el proyecto, y acordamos el acceso al código y al despliegue. El piloto acotado permite probar antes de comprometer más operación.",
  },
  procurement: {
    eyebrow: "Para compras y legal",
    title: "Datos de la empresa e integridad.",
    integrityTitle: "Programa de Integridad",
    integrity: "Versión 2.0, aprobada por el representante legal el 12 de octubre de 2026. Cubre conflictos de interés, veracidad de la información, libre competencia, obligaciones laborales y un canal de reporte sin represalias. Los datos personales de clientes se usan solo para el servicio contratado, con acceso restringido, y no se cargan en herramientas de inteligencia artificial no aprobadas. Lo compartimos si lo solicitas.",
    certifications: "Si tu empresa exige certificaciones específicas al proveedor, revísalo con nosotros antes de partir.",
  },
  faqTitle: "Preguntas de una empresa grande.",
  faqs: [
    { question: "¿YAGO trabaja con grandes empresas?", answer: "Sí, cuando el alcance es acotado: un proceso, un agente de IA o una integración con indicadores definidos. Si necesitas un programa en muchas áreas a la vez, conviene un integrador de mayor tamaño, y podemos hacernos cargo de una parte concreta." },
    { question: "¿Cómo se implementa un agente de IA en una empresa grande?", answer: "Se parte con una tarea acotada. Definimos fuentes y permisos, evaluamos con casos reales del proceso y dejamos registro de cada consulta y acción. Lo sensible queda con aprobación humana. Si el piloto cumple los criterios acordados, se amplía." },
    { question: "¿Cuándo conviene un equipo especializado y cuándo un integrador grande?", answer: "Un equipo especializado conviene cuando la tarea es específica y quieres trabajar directo con quienes la construyen. Un integrador grande conviene para programas en muchas áreas a la vez, reemplazo de sistemas críticos o cuando necesitas un equipo grande dedicado." },
    { question: "¿Qué pasa con la solución si dejamos de trabajar con YAGO?", answer: "Las condiciones de acceso al repositorio, despliegue, documentación y soporte se acuerdan en la propuesta, para que tu empresa sepa desde el inicio cómo seguir operando. La hoja de ruta de una auditoría IA queda en tu empresa y puedes ejecutarla con tu equipo o con otro proveedor." },
    { question: "¿YAGO firma acuerdos de confidencialidad?", answer: "Sí, si lo requieres. Además, el Programa de Integridad de la empresa establece que los datos personales de clientes se usan solo para el servicio contratado, con acceso restringido, y que no se cargan en herramientas de inteligencia artificial no aprobadas." },
    { question: "¿Hay que cambiar el ERP para usar IA?", answer: "No necesariamente. Evaluamos APIs, archivos, webhooks y otras interfaces disponibles para conectar los sistemas actuales. Si el objetivo es cambiar de ERP, eso se define con el proveedor del ERP o un integrador especializado." },
  ],
  cta: {
    title: "Conversemos sobre un primer proceso.",
    text: "Cuéntanos qué proceso te preocupa y qué pide tu área de TI. Te decimos con claridad si YAGO es una buena opción y cómo sería el piloto.",
  },
};

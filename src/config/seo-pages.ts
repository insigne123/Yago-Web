export type SeoPage = {
  slug: string;
  /** Nombre corto para tarjetas, migas de pan y etiquetas. */
  name: string;
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  eyebrow: string;
  title: string;
  description: string;
  proof: string[];
  problemTitle: string;
  problemDescription: string;
  painPoints: string[];
  fitTitle: string;
  fitItems: string[];
  startingTitle: string;
  startingItems: string[];
  outcomesTitle: string;
  outcomes: { title: string; description: string }[];
  processTitle: string;
  processSteps: { title: string; description: string }[];
  faq: { question: string; answer: string }[];
  relatedLinks: { href: string; label: string }[];
  modifiedDate?: string;
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "automatizacion-backoffice",
    name: "Backoffice",
    seoTitle: "Automatización de backoffice para empresas | YAGO",
    seoDescription:
      "Automatización de backoffice para equipos que siguen operando con correos, planillas, documentos y carga manual. Menos fricción, más trazabilidad y mejor control operativo.",
    keywords: [
      "automatizacion de backoffice",
      "automatizacion backoffice empresas",
      "automatizacion procesos administrativos",
      "automatizacion operativa",
    ],
    eyebrow: "Solución",
    title: "Automatización de backoffice para empresas que ya no quieren depender de tanto trabajo manual.",
    description:
      "Ayudamos a equipos de operaciones, administración y backoffice a sacar carga manual de correos, planillas, documentos y seguimientos dispersos, sin rehacer toda la operación desde cero.",
    proof: [
      "PSOL y GrupoExpro ya trabajan con YAGO",
      "Quick wins detectables en una sesión de descubrimiento",
      "Integración gradual sin romper tu stack actual",
    ],
    problemTitle: "Dónde suele trabarse el backoffice",
    problemDescription:
      "Cuando el backoffice crece sin una capa clara de automatización, el equipo termina absorbiendo carga manual, validaciones repetidas y seguimiento operativo invisible.",
    painPoints: [
      "Digitación manual entre correos, planillas y sistemas",
      "Seguimiento por mail o WhatsApp para que el proceso avance",
      "Errores de carga, retrabajo y validaciones repetidas",
      "Poca visibilidad de responsables, estados y tiempos reales",
    ],
    fitTitle: "Dónde mejor encaja",
    fitItems: [
      "Equipos administrativos con alto volumen de carga y validación de datos",
      "Backoffice financiero que procesa documentos, aprobaciones y registros repetitivos",
      "Empresas medianas con varios responsables y poca trazabilidad transversal",
      "Operaciones que quieren ordenar primero el cuello de botella más evidente",
    ],
    startingTitle: "Qué conviene automatizar primero",
    startingItems: [
      "Carga de datos repetitiva desde correos, planillas o formularios",
      "Aprobaciones internas con reglas claras y responsables definidos",
      "OCR y extracción de información desde documentos operativos",
      "Alertas, ownership y estados para dejar el flujo visible",
    ],
    outcomesTitle: "Qué cambia cuando el backoffice deja de empujar tanto trabajo manual",
    outcomes: [
      {
        title: "Menos HH consumidas en tareas repetitivas",
        description: "El equipo deja de perder tiempo copiando, consolidando y persiguiendo información dispersa.",
      },
      {
        title: "Menos errores y menos retrabajo",
        description: "La información entra con reglas más claras, validaciones y mejor trazabilidad.",
      },
      {
        title: "Más visibilidad del proceso",
        description: "Queda más claro dónde se traba el flujo, quién debe actuar y qué paso sigue.",
      },
    ],
    processTitle: "Cómo entra YAGO en este tipo de operación",
    processSteps: [
      {
        title: "Sesión de descubrimiento",
        description: "Ubicamos el cuello de botella con más fricción y evaluamos si conviene partir por OCR, automatización o una app interna.",
      },
      {
        title: "Quick win operativo",
        description: "Partimos por un flujo acotado pero visible, para demostrar valor sin abrir un proyecto gigantesco.",
      },
      {
        title: "Escala con control",
        description: "Una vez probado el primer movimiento, extendemos reglas, integraciones y visibilidad al resto del proceso.",
      },
    ],
    faq: [
      {
        question: "¿Hace falta cambiar todos los sistemas para automatizar backoffice?",
        answer: "No. En la mayoría de los casos conviene partir integrando lo que ya existe y ordenar el flujo más crítico primero.",
      },
      {
        question: "¿Se puede partir con algo pequeño?",
        answer: "Sí. Lo normal es partir con un quick win claro para validar impacto operativo antes de ampliar el alcance.",
      },
      {
        question: "¿Esto sirve solo para documentos?",
        answer: "No. Puede incluir documentos, aprobaciones, consolidación de datos, seguimiento interno y tareas repetitivas entre sistemas.",
      },
    ],
    relatedLinks: [
      { href: "/servicios/automatizacion-procesos", label: "Servicio de automatización de procesos" },
      { href: "/ocr", label: "OCR para empresas" },
      { href: "/soluciones/automatizacion-aprobaciones", label: "Automatización de aprobaciones" },
    ],
  },
  {
    slug: "automatizacion-finanzas",
    name: "Finanzas y administración",
    seoTitle: "Automatización de procesos financieros y administrativos | YAGO",
    seoDescription:
      "Automatización para equipos de finanzas y administración con validación documental, conciliaciones, aprobaciones y reportes manuales. Menos carga operativa y más control.",
    keywords: [
      "automatizacion de procesos financieros",
      "automatizacion finanzas empresas",
      "automatizacion administrativa",
      "automatizacion cuentas por pagar",
    ],
    eyebrow: "Solución",
    title: "Automatización para finanzas y administración con foco en control, velocidad y trazabilidad.",
    description:
      "Si tu equipo todavía procesa facturas, respaldos, aprobaciones, conciliaciones o reportes con demasiada carga manual, YAGO puede ayudarte a ordenar el primer flujo que más tiempo consume.",
    proof: [
      "Pensado para equipos con alto flujo documental y validaciones repetitivas",
      "Integración con OCR, reglas de negocio y aprobaciones",
      "Ruta recomendada según el nivel de control que exige el proceso",
    ],
    problemTitle: "Fricciones típicas en finanzas y administración",
    problemDescription:
      "En finanzas, el costo del trabajo manual no es solo tiempo. También afecta control, trazabilidad, tiempos de cierre y capacidad de auditoría.",
    painPoints: [
      "Facturas, OC y respaldos entrando por distintos canales",
      "Aprobaciones financieras que se pierden entre correos y seguimiento manual",
      "Consolidación de datos y reportes con mucho copy-paste",
      "Procesos lentos por validaciones repetidas y poca visibilidad de estados",
    ],
    fitTitle: "Cuándo esta solución tiene mejor fit",
    fitItems: [
      "Administración y finanzas con volumen creciente y poco tiempo operativo",
      "Equipos que necesitan reducir digitación sin sacrificar control",
      "Procesos con reglas claras, responsables definidos y alto costo de error",
      "Operaciones que necesitan trazabilidad más visible para auditoría o seguimiento",
    ],
    startingTitle: "Puntos de partida habituales",
    startingItems: [
      "OCR y extracción de datos desde facturas y respaldos",
      "Validaciones y aprobaciones por monto, área o responsable",
      "Carga automatizada a planillas, ERP o bases internas",
      "Consolidación de reportes operativos y financieros",
    ],
    outcomesTitle: "Resultados que se buscan primero",
    outcomes: [
      {
        title: "Menos digitación y menos errores de carga",
        description: "La información deja de depender tanto del ingreso manual y se normaliza mejor desde el inicio.",
      },
      {
        title: "Aprobaciones más rápidas y más claras",
        description: "Las reglas y responsables quedan más visibles, lo que reduce esperas y seguimiento innecesario.",
      },
      {
        title: "Más trazabilidad para control y revisión",
        description: "Queda un rastro más claro del flujo, sus validaciones y sus puntos de decisión.",
      },
    ],
    processTitle: "Cómo trabajamos estos procesos",
    processSteps: [
      {
        title: "Mapeo del flujo actual",
        description: "Revisamos dónde entra la información, cómo se valida y en qué parte se concentra la fricción más cara.",
      },
      {
        title: "Automatización del tramo crítico",
        description: "Atacamos primero la carga, aprobación o consolidación que más HH o más error está generando.",
      },
      {
        title: "Escalamiento con gobernanza",
        description: "Extendemos el flujo con más reglas, más integraciones y mejores puntos de control.",
      },
    ],
    faq: [
      {
        question: "¿Sirve para cuentas por pagar o flujo documental?",
        answer: "Sí. Es uno de los casos donde mejor encajan OCR, validaciones y carga estructurada hacia sistemas o reportes.",
      },
      {
        question: "¿La automatización elimina la revisión humana?",
        answer: "No necesariamente. Cuando hace falta, dejamos validación humana en los puntos donde el control sigue siendo clave.",
      },
      {
        question: "¿Se puede medir el impacto?",
        answer: "Sí. Normalmente se puede estimar por HH ahorradas, tiempos de ciclo, errores evitados y capacidad de trazabilidad ganada.",
      },
    ],
    relatedLinks: [
      { href: "/ocr", label: "OCR para finanzas y documentos" },
      { href: "/servicios/automatizacion-procesos", label: "Automatización de procesos a medida" },
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
    ],
  },
  {
    slug: "automatizacion-aprobaciones",
    name: "Aprobaciones",
    seoTitle: "Automatización de aprobaciones y seguimiento | YAGO",
    seoDescription:
      "Automatiza aprobaciones internas, responsables, recordatorios y trazabilidad para procesos que hoy dependen de correo, planillas y seguimiento manual.",
    keywords: [
      "automatizacion de aprobaciones",
      "flujo de aprobaciones empresas",
      "automatizacion de seguimiento",
      "workflow de aprobaciones",
    ],
    eyebrow: "Solución",
    title: "Automatización de aprobaciones para equipos que necesitan menos espera y más claridad operativa.",
    description:
      "Si las solicitudes siguen pasando por correo, aprobaciones informales o seguimiento manual, YAGO puede ayudarte a convertir ese flujo en un proceso más visible, trazable y rápido.",
    proof: [
      "Ideal para aprobaciones con reglas claras y múltiples responsables",
      "Más visibilidad de estados, ownership y tiempos de ciclo",
      "Escalable a flujos humanos, automatizados o mixtos",
    ],
    problemTitle: "Problemas típicos en un flujo de aprobaciones manual",
    problemDescription:
      "Cuando las aprobaciones no tienen una ruta clara, el problema no es solo la demora. También aparecen dudas, retrabajo, responsables difusos y poca trazabilidad.",
    painPoints: [
      "Solicitudes que llegan por correo, chat o planillas sin un punto único de entrada",
      "Esperas largas entre etapas por falta de ownership visible",
      "Dudas sobre quién aprobó, cuándo y bajo qué criterio",
      "Seguimiento manual para destrabar etapas o recordar pendientes",
    ],
    fitTitle: "Dónde suele haber mejor encaje",
    fitItems: [
      "Aprobaciones internas entre áreas operativas, financieras o administrativas",
      "Flujos con montos, tipos de solicitud o reglas que definen responsables",
      "Procesos donde la visibilidad de estados importa tanto como la velocidad",
      "Equipos que quieren dejar de perseguir aprobaciones por correo o chat",
    ],
    startingTitle: "Qué se automatiza primero",
    startingItems: [
      "Ingreso estructurado de solicitudes",
      "Ruteo por reglas, responsables o niveles de aprobación",
      "Alertas, recordatorios y escalamiento de pendientes",
      "Registro de estados, logs y ownership del flujo",
    ],
    outcomesTitle: "Qué cambia cuando el flujo queda ordenado",
    outcomes: [
      {
        title: "Menos espera entre etapas",
        description: "El flujo se mueve con reglas y avisos más claros, sin depender tanto del seguimiento manual.",
      },
      {
        title: "Más claridad sobre responsables y estados",
        description: "El equipo sabe mejor quién debe actuar y en qué parte exacta está cada solicitud.",
      },
      {
        title: "Más trazabilidad para control operativo",
        description: "Queda registro de decisiones, tiempos y cuellos de botella para mejorar el proceso después.",
      },
    ],
    processTitle: "Cómo lo ordenamos con YAGO",
    processSteps: [
      {
        title: "Detectamos la ruta real",
        description: "Revisamos cómo se mueve hoy la solicitud y en qué parte se pierde tiempo o visibilidad.",
      },
      {
        title: "Diseñamos reglas y ownership",
        description: "Definimos responsables, estados, alertas y criterios para que el flujo avance con menos fricción.",
      },
      {
        title: "Dejamos el proceso visible",
        description: "Implementamos seguimiento, trazabilidad y puntos de control para que el equipo pueda operar mejor.",
      },
    ],
    faq: [
      {
        question: "¿Esto sirve aunque haya personas aprobando?",
        answer: "Sí. Muchos de estos flujos mejoran justamente combinando reglas claras con decisión humana en los puntos importantes.",
      },
      {
        question: "¿Hay que construir una app desde cero?",
        answer: "No siempre. A veces basta con ordenar ingreso, reglas, estados y avisos sobre herramientas ya existentes.",
      },
      {
        question: "¿Cómo se parte?",
        answer: "Normalmente partimos por el tramo del flujo que más espera o seguimiento manual genera hoy.",
      },
    ],
    relatedLinks: [
      { href: "/servicios/automatizacion-procesos", label: "Servicio de automatización de procesos" },
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatización para finanzas" },
    ],
  },
  {
    slug: "automatizacion-carga-de-datos",
    name: "Carga de datos",
    seoTitle: "Automatización de carga de datos para empresas | YAGO",
    seoDescription:
      "Automatiza carga de datos desde correos, planillas, formularios y documentos hacia tus sistemas internos. Menos digitación, menos errores y más velocidad operativa.",
    keywords: [
      "automatizacion carga de datos",
      "automatizar ingreso de datos",
      "automatizacion digitacion",
      "automatizacion de data entry",
    ],
    eyebrow: "Solución",
    title: "Automatización de carga de datos para equipos que ya no quieren seguir digitando lo mismo una y otra vez.",
    description:
      "Si tu operación sigue copiando información desde correos, planillas, formularios o documentos a otros sistemas, YAGO puede ayudarte a convertir ese trabajo repetitivo en un flujo más rápido, más limpio y más trazable.",
    proof: [
      "Ideal para backoffice, administración y operaciones",
      "Integración gradual con OCR, validaciones y sistemas internos",
      "Menos digitación manual y menos retrabajo",
    ],
    problemTitle: "Cuando la carga manual empieza a frenar la operación",
    problemDescription:
      "La carga de datos parece un problema pequeño hasta que se multiplica. Ahí aparecen errores, atrasos, baja trazabilidad y personas dedicando demasiado tiempo a tareas que no deberían absorber tantas horas.",
    painPoints: [
      "Copiar datos entre correos, planillas y plataformas internas",
      "Errores por digitación, formato o información incompleta",
      "Validaciones repetitivas antes de cargar al sistema",
      "Dependencia de personas clave para que la información avance",
    ],
    fitTitle: "Equipos donde esta solución suele tener mejor retorno",
    fitItems: [
      "Backoffice con alto volumen de registros o actualizaciones",
      "Administración y finanzas con carga repetitiva desde documentos o planillas",
      "Operaciones que consolidan datos desde varias fuentes manuales",
      "Empresas que quieren mejorar velocidad sin rehacer todo su stack",
    ],
    startingTitle: "Por dónde conviene partir",
    startingItems: [
      "Extracción de datos desde correos o adjuntos",
      "Validación de campos antes del ingreso",
      "Carga automatizada a planillas, CRM, ERP o bases internas",
      "Alertas para errores, excepciones o datos faltantes",
    ],
    outcomesTitle: "Qué se gana cuando la digitación deja de ser manual",
    outcomes: [
      {
        title: "Menos tiempo operativo perdido",
        description: "El equipo deja de gastar horas copiando y corrigiendo registros una y otra vez.",
      },
      {
        title: "Mejor calidad de datos",
        description: "Las validaciones y reglas reducen errores de formato, campos incompletos y retrabajo posterior.",
      },
      {
        title: "Más trazabilidad del flujo",
        description: "Queda más claro de dónde vino la información, cuándo se cargó y qué excepciones aparecieron.",
      },
    ],
    processTitle: "Cómo lo implementamos",
    processSteps: [
      {
        title: "Detectamos el tramo más repetitivo",
        description: "Ubicamos el ingreso manual que más HH consume o más errores genera hoy.",
      },
      {
        title: "Automatizamos validación y carga",
        description: "Diseñamos el flujo para que los datos entren mejor estructurados y lleguen a destino con menos fricción.",
      },
      {
        title: "Dejamos excepciones visibles",
        description: "Los casos fuera de regla quedan claros para que el equipo los revise sin perder control.",
      },
    ],
    faq: [
      {
        question: "¿Esto sirve si los datos vienen en distintos formatos?",
        answer: "Sí. Se puede combinar extracción, normalización y validación antes de la carga final.",
      },
      {
        question: "¿Hace falta usar OCR?",
        answer: "No siempre. Depende de si los datos vienen en documentos, correos, planillas o formularios. A veces basta con reglas e integraciones.",
      },
      {
        question: "¿Cómo se controla que no entren errores al sistema?",
        answer: "Con reglas de validación, manejo de excepciones y trazabilidad de cada paso del flujo.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatización para finanzas" },
      { href: "/ocr", label: "OCR para empresas" },
    ],
  },
  {
    slug: "automatizacion-documental",
    name: "Documentos",
    seoTitle: "Automatización documental para empresas | YAGO",
    seoDescription:
      "Automatización documental con OCR, validaciones y trazabilidad para facturas, respaldos, formularios y otros flujos con documentos operativos.",
    keywords: [
      "automatizacion documental",
      "automatizacion de documentos",
      "ocr empresas",
      "procesamiento documental automatizado",
    ],
    eyebrow: "Solución",
    title: "Automatización documental para procesos que hoy siguen dependiendo de revisar, leer y cargar documentos a mano.",
    description:
      "YAGO ayuda a equipos que trabajan con facturas, respaldos, formularios, solicitudes y otros documentos operativos a extraer datos, validarlos y moverlos con más velocidad y mejor control.",
    proof: [
      "Combinable con OCR, reglas de negocio y aprobaciones",
      "Pensado para procesos donde importa tanto velocidad como trazabilidad",
      "Escalable a backoffice, finanzas y operaciones documentales",
    ],
    problemTitle: "El problema no es solo leer el documento",
    problemDescription:
      "En muchos equipos, el verdadero costo de un documento no está en recibirlo, sino en revisarlo, extraer la información, validarla y moverla al siguiente paso del proceso.",
    painPoints: [
      "Lectura manual de documentos repetitivos",
      "Extracción de datos que luego hay que revisar y corregir",
      "Validaciones hechas a mano antes de aprobar o cargar",
      "Poca trazabilidad entre recepcion, validación y uso final del documento",
    ],
    fitTitle: "Cuándo esta solución tiene más sentido",
    fitItems: [
      "Equipos con alto flujo de documentos operativos o administrativos",
      "Procesos donde el documento define el siguiente paso del flujo",
      "Operaciones que necesitan bajar digitación sin perder control humano",
      "Empresas que quieren ordenar primero la extracción y la validación",
    ],
    startingTitle: "Puntos de partida frecuentes",
    startingItems: [
      "OCR para extraer datos clave desde documentos",
      "Validación de campos antes de registrar o aprobar",
      "Clasificación de documentos por tipo o prioridad",
      "Integración con sistemas de carga, reportes o seguimiento",
    ],
    outcomesTitle: "Qué cambia cuando el documento deja de ser un cuello de botella",
    outcomes: [
      {
        title: "Procesamiento más rápido",
        description: "El equipo deja de revisar manualmente cada documento de punta a punta para tareas repetitivas.",
      },
      {
        title: "Menos trabajo manual de extracción",
        description: "Los datos clave se capturan mejor y se revisan solo donde hace falta.",
      },
      {
        title: "Más control y trazabilidad",
        description: "Queda más claro qué documento entró, qué datos se leyeron y en qué estado quedó el proceso.",
      },
    ],
    processTitle: "Cómo lo aterrizamos con YAGO",
    processSteps: [
      {
        title: "Revisamos tipos documentales y reglas",
        description: "Definimos qué datos importan, qué validaciones aplican y qué salidas necesita el negocio.",
      },
      {
        title: "Implementamos extracción y control",
        description: "Combinamos OCR, validación y trazabilidad para dejar un flujo más útil que solo leer texto.",
      },
      {
        title: "Conectamos con el siguiente paso operativo",
        description: "El documento procesado alimenta aprobaciones, cargas, reportes o alertas según el caso.",
      },
    ],
    faq: [
      {
        question: "¿Esto es solo OCR?",
        answer: "No. OCR puede ser una parte, pero el valor real suele estar en la validación, el control y la integración del documento al flujo operativo.",
      },
      {
        question: "¿Se puede dejar revisión humana?",
        answer: "Sí. En muchos casos conviene dejar validación humana en excepciones o documentos sensibles.",
      },
      {
        question: "¿Qué tipo de documentos se pueden trabajar?",
        answer: "Facturas, respaldos, formularios, solicitudes, guías y otros documentos con una estructura suficientemente útil para el proceso.",
      },
    ],
    relatedLinks: [
      { href: "/ocr", label: "OCR para empresas" },
      { href: "/soluciones/automatizacion-carga-de-datos", label: "Automatización de carga de datos" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatización para finanzas" },
    ],
  },
  {
    slug: "automatizacion-reportes",
    name: "Reportes",
    seoTitle: "Automatización de reportes y consolidación de datos | YAGO",
    seoDescription:
      "Automatiza reportes operativos, consolidación de datos y actualizacion de indicadores desde múltiples fuentes. Menos planillas manuales y más visibilidad.",
    keywords: [
      "automatizacion de reportes",
      "consolidacion automatica de datos",
      "automatizacion de informes",
      "reportes automaticos empresas",
    ],
    eyebrow: "Solución",
    title: "Automatización de reportes para equipos que siguen armando indicadores a mano desde demasiadas fuentes.",
    description:
      "Si tus reportes dependen de copiar datos desde planillas, correos, sistemas o cierres manuales, YAGO puede ayudarte a consolidar mejor la información y dejar indicadores más visibles y menos frágiles.",
    proof: [
      "Ideal para operaciones, administración y finanzas",
      "Reduce consolidación manual y dependencia de planillas intermedias",
      "Mejora visibilidad de indicadores y tiempos de cierre",
    ],
    problemTitle: "Cuando reportar consume demasiado tiempo operativo",
    problemDescription:
      "Muchas veces el problema no es falta de datos, sino exceso de trabajo manual para consolidarlos, validarlos y presentarlos con algo de confianza.",
    painPoints: [
      "Reportes armados desde múltiples planillas o sistemas",
      "Cierres lentos por consolidación y validación manual",
      "Indicadores poco confiables o muy dependientes de una persona",
      "Demasiado tiempo perdido preparando información en vez de usarla",
    ],
    fitTitle: "Dónde se nota más rápido el impacto",
    fitItems: [
      "Equipos que reportan semanal o mensualmente desde varias fuentes",
      "Operaciones con indicadores que dependen de consolidación manual",
      "Finanzas y administración que necesitan cierres más ordenados",
      "Empresas donde los reportes llegan tarde o con mucha fragilidad operativa",
    ],
    startingTitle: "Primeras mejoras habituales",
    startingItems: [
      "Extracción automatizada de datos desde varias fuentes",
      "Normalización y consolidación de indicadores",
      "Alertas cuando falta información o hay desajustes",
      "Entrega automatica de reportes o tableros de seguimiento",
    ],
    outcomesTitle: "Qué cambia cuando el reporte deja de hacerse a mano",
    outcomes: [
      {
        title: "Menos tiempo en consolidación",
        description: "El equipo reduce el trabajo operativo necesario para juntar, limpiar y ordenar la información.",
      },
      {
        title: "Indicadores más consistentes",
        description: "Las reglas de origen y consolidación ayudan a bajar variaciones y errores evitables.",
      },
      {
        title: "Más tiempo para interpretar y decidir",
        description: "El valor se mueve desde armar el reporte hacia usarlo para operar mejor.",
      },
    ],
    processTitle: "Cómo lo trabaja YAGO",
    processSteps: [
      {
        title: "Mapeamos fuentes y tiempos de cierre",
        description: "Revisamos de dónde salen los datos, quién los mueve y dónde se rompe hoy la consistencia.",
      },
      {
        title: "Automatizamos consolidación y control",
        description: "Definimos cómo normalizar, cruzar y validar la información para dejar un flujo más robusto.",
      },
      {
        title: "Dejamos una salida útil para el equipo",
        description: "Reportes, tableros o alertas quedan listos para ser usados con menos dependencia de trabajo manual.",
      },
    ],
    faq: [
      {
        question: "¿Esto reemplaza mis planillas?",
        answer: "No siempre. A veces conviene integrarlas mejor primero y luego reducir su rol a medida que el flujo madura.",
      },
      {
        question: "¿Sirve para indicadores operativos y financieros?",
        answer: "Sí. Mientras existan fuentes, reglas y una necesidad clara de consolidación, se puede ordenar el flujo.",
      },
      {
        question: "¿Cómo se evita que salgan reportes con errores?",
        answer: "Con reglas de validación, control de origen y alertas para datos faltantes o inconsistentes.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatización para finanzas" },
      { href: "/servicios/apps-automatizacion", label: "Apps para operar automatizaciones" },
    ],
  },
  {
    slug: "automatizacion-para-logistica",
    name: "Logística",
    seoTitle: "Automatización para logística y operaciones documentales | YAGO",
    seoDescription:
      "Automatización para operaciones logísticas con guías, documentos, seguimiento, aprobaciones y carga manual de datos. Menos fricción operativa y más trazabilidad.",
    keywords: [
      "automatizacion para logistica",
      "automatizacion operaciones logisticas",
      "automatizacion guias despacho",
      "automatizacion documental logistica",
    ],
    eyebrow: "Industria",
    title: "Automatización para logística cuando la operación depende de documentos, seguimiento y demasiada coordinación manual.",
    description:
      "YAGO ayuda a equipos logísticos que trabajan con guías, respaldos, aprobaciones, estados y consolidación de datos a ordenar el flujo operativo sin romper las herramientas que ya usan.",
    proof: [
      "Pensado para flujos con alto movimiento documental y seguimiento operativo",
      "Combinable con OCR, trazabilidad y reglas por etapa",
      "Mejora visibilidad en procesos con varios responsables",
    ],
    problemTitle: "Dónde suele doler más en logística",
    problemDescription:
      "En logística, una parte importante del desgaste operativo viene de perseguir estados, mover información entre sistemas y revisar documentos una y otra vez para que el proceso siga avanzando.",
    painPoints: [
      "Guías, respaldos y documentos entrando por varios canales",
      "Seguimiento manual para saber en qué etapa va cada caso",
      "Carga repetitiva de datos en planillas o sistemas internos",
      "Poca visibilidad cuando hay varios responsables o puntos de control",
    ],
    fitTitle: "Cuándo encaja mejor",
    fitItems: [
      "Operaciones logísticas con alto flujo documental",
      "Procesos donde el estado del caso importa tanto como el documento",
      "Equipos que necesitan trazabilidad sin agregar más carga manual",
      "Empresas que quieren ordenar primero el tramo más repetitivo del flujo",
    ],
    startingTitle: "Primeros frentes que suele valer la pena atacar",
    startingItems: [
      "Extracción y validación de datos desde guías y respaldos",
      "Seguimiento de estados y responsables por etapa",
      "Alertas cuando un caso se detiene o sale de regla",
      "Consolidación de información para reportes o control operativo",
    ],
    outcomesTitle: "Qué cambia cuando la logística deja de depender tanto del seguimiento manual",
    outcomes: [
      {
        title: "Menos tiempo persiguiendo estados",
        description: "El equipo gana visibilidad sobre el flujo y reduce coordinación manual innecesaria.",
      },
      {
        title: "Menos retrabajo documental",
        description: "La información se captura, valida y mueve con más consistencia a lo largo del proceso.",
      },
      {
        title: "Más trazabilidad operativa",
        description: "Queda más claro qué pasó con cada caso, en qué etapa está y quién debe actuar.",
      },
    ],
    processTitle: "Cómo entra YAGO en operaciones logísticas",
    processSteps: [
      {
        title: "Mapeamos puntos ciegos del flujo",
        description: "Revisamos dónde se pierde tiempo entre documento, estado, aprobación y seguimiento.",
      },
      {
        title: "Ordenamos el tramo más costoso",
        description: "Automatizamos primero la parte del proceso donde más fricción operativa se acumula.",
      },
      {
        title: "Escalamos con más control",
        description: "Sumamos integraciones, alertas y visibilidad para que la operación siga siendo gobernable.",
      },
    ],
    faq: [
      {
        question: "¿Sirve para guías, respaldos y otros documentos logísticos?",
        answer: "Sí. Son justamente algunos de los casos donde combinar extracción, validación y trazabilidad tiene más sentido.",
      },
      {
        question: "¿Se puede integrar con herramientas que ya usamos?",
        answer: "Sí. En la mayoría de los casos conviene integrarse primero a lo que ya existe y luego ampliar el alcance.",
      },
      {
        question: "¿Esto ordena estados y seguimiento o solo lee documentos?",
        answer: "Puede hacer ambas cosas. El objetivo no es solo leer información, sino dejar el flujo más visible y útil para operar.",
      },
    ],
    relatedLinks: [
      { href: "/ocr", label: "OCR para documentos operativos" },
      { href: "/soluciones/automatizacion-documental", label: "Automatización documental" },
      { href: "/soluciones/automatizacion-reportes", label: "Automatización de reportes" },
    ],
  },
  {
    slug: "automatizacion-para-servicios",
    modifiedDate: "2026-10-08",
    name: "Empresas de servicios",
    seoTitle: "Automatización para empresas de servicios | YAGO",
    seoDescription:
      "Automatización para empresas de servicios con backoffice, aprobaciones, reportes, atención interna y carga manual de datos. Menos fricción y más capacidad operativa.",
    keywords: [
      "automatizacion empresas de servicios",
      "automatizacion operativa servicios",
      "automatizacion backoffice servicios",
      "automatizacion procesos administrativos servicios",
    ],
    eyebrow: "Industria",
    title: "Automatización para empresas de servicios que crecen más rápido que su operación interna.",
    description:
      "Cuando una empresa de servicios crece, suelen crecer también las aprobaciones, la coordinación interna, los reportes, la carga manual y el seguimiento entre equipos. YAGO ayuda a ordenar ese desgaste sin rehacer toda la estructura operativa.",
    proof: [
      "Especialmente útil para operaciones internas, administración y backoffice",
      "Pensado para procesos que cruzan varias áreas",
      "Primeros quick wins visibles sin abrir proyectos gigantes",
    ],
    problemTitle: "Lo que suele pasar en empresas de servicios",
    problemDescription:
      "Muchas empresas de servicios no fallan por falta de demanda, sino porque la operación interna se llena de coordinación manual, validaciones y tareas repetitivas que escalan peor que el negocio.",
    painPoints: [
      "Demasiadas tareas repetitivas entre áreas internas",
      "Seguimiento manual de estados, pendientes y responsables",
      "Backoffice sobrecargado por carga de datos y consolidación",
      "Reportes y aprobaciones que consumen tiempo de equipos clave",
    ],
    fitTitle: "Cuándo esta solución tiene más sentido",
    fitItems: [
      "Empresas de servicios con crecimiento operativo desordenado",
      "Equipos administrativos que absorben demasiada carga manual",
      "Operaciones donde varias áreas dependen de información compartida",
      "Negocios que necesitan ordenar procesos antes de escalar más",
    ],
    startingTitle: "Dónde suele haber primeras oportunidades claras",
    startingItems: [
      "Aprobaciones internas y traspasos entre áreas",
      "Carga y validación de datos repetitiva",
      "Reportes y consolidación operativa",
      "Flujos documentales o de soporte interno",
    ],
    outcomesTitle: "Qué cambia cuando la operación interna deja de empujar tanta fricción",
    outcomes: [
      {
        title: "Más capacidad operativa con el mismo equipo",
        description: "Se reduce el tiempo perdido en tareas repetitivas y coordinación innecesaria.",
      },
      {
        title: "Menos dependencia de seguimiento manual",
        description: "Los procesos ganan reglas, visibilidad y ownership más claro entre equipos.",
      },
      {
        title: "Mejor base para seguir creciendo",
        description: "La operación queda más ordenada y lista para ampliar servicios sin tanto desgaste interno.",
      },
    ],
    processTitle: "Cómo lo trabajamos con empresas de servicios",
    processSteps: [
      {
        title: "Ubicamos el cuello de botella real",
        description: "Revisamos dónde se están yendo más HH en procesos internos que no agregan suficiente valor.",
      },
      {
        title: "Armamos un quick win útil",
        description: "Partimos por un flujo acotado que reduzca fricción visible y deje aprendizaje para escalar mejor.",
      },
      {
        title: "Extendemos al resto de la operación",
        description: "Con el primer caso andando, conectamos nuevos procesos según impacto y viabilidad.",
      },
    ],
    faq: [
      {
        question: "¿Esto sirve si tenemos varios tipos de proceso interno?",
        answer: "Sí. La idea es no intentar automatizar todo de una vez, sino priorizar el primer flujo con mejor retorno operativo.",
      },
      {
        question: "¿Hay que construir un sistema nuevo completo?",
        answer: "No necesariamente. Muchas veces conviene integrar, ordenar y automatizar sobre herramientas existentes.",
      },
      {
        question: "¿Qué área se beneficia primero?",
        answer: "Depende del caso, pero normalmente el impacto aparece antes en operaciones, backoffice, administración o reportes internos.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
      { href: "/soluciones/automatizacion-aprobaciones", label: "Automatización de aprobaciones" },
      { href: "/soluciones/automatizacion-carga-de-datos", label: "Automatización de carga de datos" },
      { href: "/servicios/automatizacion-procesos#ejemplo-de-flujo", label: "Ejemplo: de una solicitud a una aprobación registrada" },
      { href: "/servicios/apps-automatizacion#ejemplo-de-flujo", label: "Ejemplo: portal para gestionar solicitudes y documentos" },
    ],
  },
  {
    slug: "automatizacion-para-rrhh-y-dotacion",
    name: "RRHH y dotación",
    seoTitle: "Automatización para RRHH y dotación | YAGO",
    seoDescription:
      "Automatización para equipos de RRHH y dotación con formularios, documentos, validaciones, seguimiento y carga manual de datos. Menos fricción y mejor control operativo.",
    keywords: [
      "automatizacion rrhh",
      "automatizacion dotacion",
      "automatizacion recursos humanos",
      "automatizacion procesos rrhh",
    ],
    eyebrow: "Industria",
    title: "Automatización para RRHH y dotación cuando el proceso interno depende de demasiados documentos, validaciones y seguimiento manual.",
    description:
      "YAGO ayuda a equipos de RRHH y dotación a ordenar tareas repetitivas ligadas a formularios, documentos, estados, validaciones y carga de datos para que la operación gane velocidad sin perder trazabilidad.",
    proof: [
      "Útil para procesos con alto componente documental y administrativo",
      "Combinable con OCR, formularios, reglas y seguimiento",
      "Mejora visibilidad de estados y responsables en procesos internos",
    ],
    problemTitle: "Dónde suele cargarse de fricción RRHH y dotación",
    problemDescription:
      "Cuando los procesos dependen de formularios, documentos, aprobaciones y seguimiento manual, RRHH termina gastando demasiado tiempo en coordinación operativa que debería ser mucho más liviana.",
    painPoints: [
      "Documentos y antecedentes entrando por distintos canales",
      "Validaciones y revisiones manuales antes de seguir avanzando",
      "Estados poco visibles entre solicitud, revisión y cierre",
      "Carga de datos repetitiva hacia planillas o sistemas internos",
    ],
    fitTitle: "Cuándo tiene más sentido",
    fitItems: [
      "Equipos de RRHH con alto volumen administrativo",
      "Procesos de dotación o gestión interna con muchos pasos manuales",
      "Operaciones donde importan trazabilidad, estados y responsables",
      "Equipos que quieren reducir retrabajo sin perder control humano",
    ],
    startingTitle: "Puntos de partida habituales",
    startingItems: [
      "Ingreso estructurado de formularios y antecedentes",
      "Extracción de datos desde documentos",
      "Validaciones, estados y seguimiento entre responsables",
      "Carga automatizada a reportes o sistemas internos",
    ],
    outcomesTitle: "Qué cambia cuando RRHH deja de empujar tanta carga manual",
    outcomes: [
      {
        title: "Menos tiempo en administración repetitiva",
        description: "El equipo puede sacar trabajo operativo de tareas que hoy consumen demasiadas HH.",
      },
      {
        title: "Más claridad del proceso",
        description: "Los estados, responsables y excepciones quedan mucho más visibles para operar.",
      },
      {
        title: "Mejor trazabilidad documental",
        description: "La información se mueve con más orden, control y seguimiento a lo largo del flujo.",
      },
    ],
    processTitle: "Cómo aterrizamos este tipo de procesos",
    processSteps: [
      {
        title: "Revisamos el flujo real",
        description: "Ubicamos dónde se concentran documentos, validaciones, esperas y carga repetitiva.",
      },
      {
        title: "Ordenamos el primer tramo clave",
        description: "Automatizamos la parte que más fricción genera hoy, sin sacar control donde todavía hace falta criterio humano.",
      },
      {
        title: "Escalamos con trazabilidad",
        description: "Ampliamos el flujo con mejores estados, reglas, integraciones y visibilidad operativa.",
      },
    ],
    faq: [
      {
        question: "¿Esto reemplaza la revisión humana?",
        answer: "No. En procesos de RRHH suele ser clave mantener validación humana en puntos sensibles o ambiguos.",
      },
      {
        question: "¿Sirve para formularios y documentos a la vez?",
        answer: "Sí. De hecho, muchas oportunidades aparecen justamente al ordenar cómo se reciben, validan y mueven ambos tipos de información.",
      },
      {
        question: "¿Se puede partir por una parte del proceso?",
        answer: "Sí. Normalmente conviene partir por el tramo que más seguimiento manual o más trabajo administrativo genera.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-documental", label: "Automatización documental" },
      { href: "/soluciones/automatizacion-carga-de-datos", label: "Automatización de carga de datos" },
      { href: "/soluciones/automatizacion-aprobaciones", label: "Automatización de aprobaciones" },
    ],
  },
];

export function getSeoPageBySlug(slug: string) {
  return SEO_PAGES.find((page) => page.slug === slug);
}

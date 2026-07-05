export type SeoPage = {
  slug: string;
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
};

export const SEO_PAGES: SeoPage[] = [
  {
    slug: "automatizacion-backoffice",
    seoTitle: "Automatizacion de backoffice para empresas | YAGO",
    seoDescription:
      "Automatizacion de backoffice para equipos que siguen operando con correos, planillas, documentos y carga manual. Menos friccion, mas trazabilidad y mejor control operativo.",
    keywords: [
      "automatizacion de backoffice",
      "automatizacion backoffice empresas",
      "automatizacion procesos administrativos",
      "automatizacion operativa",
    ],
    eyebrow: "Solucion",
    title: "Automatizacion de backoffice para empresas que ya no quieren depender de tanto trabajo manual.",
    description:
      "Ayudamos a equipos de operaciones, administracion y backoffice a sacar carga manual de correos, planillas, documentos y seguimientos dispersos, sin rehacer toda la operacion desde cero.",
    proof: [
      "PSOL y GrupoExpro ya trabajan con YAGO",
      "Quick wins detectables en una sesion de descubrimiento",
      "Integracion gradual sin romper tu stack actual",
    ],
    problemTitle: "Donde suele trabarse el backoffice",
    problemDescription:
      "Cuando el backoffice crece sin una capa clara de automatizacion, el equipo termina absorbiendo carga manual, validaciones repetidas y seguimiento operativo invisible.",
    painPoints: [
      "Digitacion manual entre correos, planillas y sistemas",
      "Seguimiento por mail o WhatsApp para que el proceso avance",
      "Errores de carga, retrabajo y validaciones repetidas",
      "Poca visibilidad de responsables, estados y tiempos reales",
    ],
    fitTitle: "Donde mejor encaja",
    fitItems: [
      "Equipos administrativos con alto volumen de carga y validacion de datos",
      "Backoffice financiero que procesa documentos, aprobaciones y registros repetitivos",
      "Empresas medianas con varios responsables y poca trazabilidad transversal",
      "Operaciones que quieren ordenar primero el cuello de botella mas evidente",
    ],
    startingTitle: "Que conviene automatizar primero",
    startingItems: [
      "Carga de datos repetitiva desde correos, planillas o formularios",
      "Aprobaciones internas con reglas claras y responsables definidos",
      "OCR y extraccion de informacion desde documentos operativos",
      "Alertas, ownership y estados para dejar el flujo visible",
    ],
    outcomesTitle: "Que cambia cuando el backoffice deja de empujar tanto trabajo manual",
    outcomes: [
      {
        title: "Menos HH consumidas en tareas repetitivas",
        description: "El equipo deja de perder tiempo copiando, consolidando y persiguiendo informacion dispersa.",
      },
      {
        title: "Menos errores y menos retrabajo",
        description: "La informacion entra con reglas mas claras, validaciones y mejor trazabilidad.",
      },
      {
        title: "Mas visibilidad del proceso",
        description: "Queda mas claro donde se traba el flujo, quien debe actuar y que paso sigue.",
      },
    ],
    processTitle: "Como entra YAGO en este tipo de operacion",
    processSteps: [
      {
        title: "Sesion de descubrimiento",
        description: "Ubicamos el cuello de botella con mas friccion y evaluamos si conviene partir por OCR, automatizacion o una app interna.",
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
        answer: "No. En la mayoria de los casos conviene partir integrando lo que ya existe y ordenar el flujo mas critico primero.",
      },
      {
        question: "¿Se puede partir con algo pequeno?",
        answer: "Si. Lo normal es partir con un quick win claro para validar impacto operativo antes de ampliar el alcance.",
      },
      {
        question: "¿Esto sirve solo para documentos?",
        answer: "No. Puede incluir documentos, aprobaciones, consolidacion de datos, seguimiento interno y tareas repetitivas entre sistemas.",
      },
    ],
    relatedLinks: [
      { href: "/servicios/automatizacion-procesos", label: "Servicio de automatizacion de procesos" },
      { href: "/ocr", label: "OCR para empresas" },
      { href: "/soluciones/automatizacion-aprobaciones", label: "Automatizacion de aprobaciones" },
    ],
  },
  {
    slug: "automatizacion-finanzas",
    seoTitle: "Automatizacion de procesos financieros y administrativos | YAGO",
    seoDescription:
      "Automatizacion para equipos de finanzas y administracion con validacion documental, conciliaciones, aprobaciones y reportes manuales. Menos carga operativa y mas control.",
    keywords: [
      "automatizacion de procesos financieros",
      "automatizacion finanzas empresas",
      "automatizacion administrativa",
      "automatizacion cuentas por pagar",
    ],
    eyebrow: "Solucion",
    title: "Automatizacion para finanzas y administracion con foco en control, velocidad y trazabilidad.",
    description:
      "Si tu equipo todavia procesa facturas, respaldos, aprobaciones, conciliaciones o reportes con demasiada carga manual, YAGO puede ayudarte a ordenar el primer flujo que mas tiempo consume.",
    proof: [
      "Pensado para equipos con alto flujo documental y validaciones repetitivas",
      "Integracion con OCR, reglas de negocio y aprobaciones",
      "Ruta recomendada segun el nivel de control que exige el proceso",
    ],
    problemTitle: "Fricciones tipicas en finanzas y administracion",
    problemDescription:
      "En finanzas, el costo del trabajo manual no es solo tiempo. Tambien afecta control, trazabilidad, tiempos de cierre y capacidad de auditoria.",
    painPoints: [
      "Facturas, OC y respaldos entrando por distintos canales",
      "Aprobaciones financieras que se pierden entre correos y seguimiento manual",
      "Consolidacion de datos y reportes con mucho copy-paste",
      "Procesos lentos por validaciones repetidas y poca visibilidad de estados",
    ],
    fitTitle: "Cuando esta solucion tiene mejor fit",
    fitItems: [
      "Administracion y finanzas con volumen creciente y poco tiempo operativo",
      "Equipos que necesitan reducir digitacion sin sacrificar control",
      "Procesos con reglas claras, responsables definidos y alto costo de error",
      "Operaciones que necesitan trazabilidad mas visible para auditoria o seguimiento",
    ],
    startingTitle: "Puntos de partida habituales",
    startingItems: [
      "OCR y extraccion de datos desde facturas y respaldos",
      "Validaciones y aprobaciones por monto, area o responsable",
      "Carga automatizada a planillas, ERP o bases internas",
      "Consolidacion de reportes operativos y financieros",
    ],
    outcomesTitle: "Resultados que se buscan primero",
    outcomes: [
      {
        title: "Menos digitacion y menos errores de carga",
        description: "La informacion deja de depender tanto del ingreso manual y se normaliza mejor desde el inicio.",
      },
      {
        title: "Aprobaciones mas rapidas y mas claras",
        description: "Las reglas y responsables quedan mas visibles, lo que reduce esperas y seguimiento innecesario.",
      },
      {
        title: "Mas trazabilidad para control y revision",
        description: "Queda un rastro mas claro del flujo, sus validaciones y sus puntos de decision.",
      },
    ],
    processTitle: "Como trabajamos estos procesos",
    processSteps: [
      {
        title: "Mapeo del flujo actual",
        description: "Revisamos donde entra la informacion, como se valida y en que parte se concentra la friccion mas cara.",
      },
      {
        title: "Automatizacion del tramo critico",
        description: "Atacamos primero la carga, aprobacion o consolidacion que mas HH o mas error esta generando.",
      },
      {
        title: "Escalamiento con gobernanza",
        description: "Extendemos el flujo con mas reglas, mas integraciones y mejores puntos de control.",
      },
    ],
    faq: [
      {
        question: "¿Sirve para cuentas por pagar o flujo documental?",
        answer: "Si. Es uno de los casos donde mejor encajan OCR, validaciones y carga estructurada hacia sistemas o reportes.",
      },
      {
        question: "¿La automatizacion elimina la revision humana?",
        answer: "No necesariamente. Cuando hace falta, dejamos validacion humana en los puntos donde el control sigue siendo clave.",
      },
      {
        question: "¿Se puede medir el impacto?",
        answer: "Si. Normalmente se puede estimar por HH ahorradas, tiempos de ciclo, errores evitados y capacidad de trazabilidad ganada.",
      },
    ],
    relatedLinks: [
      { href: "/ocr", label: "OCR para finanzas y documentos" },
      { href: "/servicios/automatizacion-procesos", label: "Automatizacion de procesos a medida" },
      { href: "/soluciones/automatizacion-backoffice", label: "Automatizacion de backoffice" },
    ],
  },
  {
    slug: "automatizacion-aprobaciones",
    seoTitle: "Automatizacion de aprobaciones y seguimiento | YAGO",
    seoDescription:
      "Automatiza aprobaciones internas, responsables, recordatorios y trazabilidad para procesos que hoy dependen de correo, planillas y seguimiento manual.",
    keywords: [
      "automatizacion de aprobaciones",
      "flujo de aprobaciones empresas",
      "automatizacion de seguimiento",
      "workflow de aprobaciones",
    ],
    eyebrow: "Solucion",
    title: "Automatizacion de aprobaciones para equipos que necesitan menos espera y mas claridad operativa.",
    description:
      "Si las solicitudes siguen pasando por correo, aprobaciones informales o seguimiento manual, YAGO puede ayudarte a convertir ese flujo en un proceso mas visible, trazable y rapido.",
    proof: [
      "Ideal para aprobaciones con reglas claras y multiples responsables",
      "Mas visibilidad de estados, ownership y tiempos de ciclo",
      "Escalable a flujos humanos, automatizados o mixtos",
    ],
    problemTitle: "Problemas tipicos en un flujo de aprobaciones manual",
    problemDescription:
      "Cuando las aprobaciones no tienen una ruta clara, el problema no es solo la demora. Tambien aparecen dudas, retrabajo, responsables difusos y poca trazabilidad.",
    painPoints: [
      "Solicitudes que llegan por correo, chat o planillas sin un punto unico de entrada",
      "Esperas largas entre etapas por falta de ownership visible",
      "Dudas sobre quien aprobo, cuando y bajo que criterio",
      "Seguimiento manual para destrabar etapas o recordar pendientes",
    ],
    fitTitle: "Donde suele haber mejor encaje",
    fitItems: [
      "Aprobaciones internas entre areas operativas, financieras o administrativas",
      "Flujos con montos, tipos de solicitud o reglas que definen responsables",
      "Procesos donde la visibilidad de estados importa tanto como la velocidad",
      "Equipos que quieren dejar de perseguir aprobaciones por correo o chat",
    ],
    startingTitle: "Que se automatiza primero",
    startingItems: [
      "Ingreso estructurado de solicitudes",
      "Ruteo por reglas, responsables o niveles de aprobacion",
      "Alertas, recordatorios y escalamiento de pendientes",
      "Registro de estados, logs y ownership del flujo",
    ],
    outcomesTitle: "Que cambia cuando el flujo queda ordenado",
    outcomes: [
      {
        title: "Menos espera entre etapas",
        description: "El flujo se mueve con reglas y avisos mas claros, sin depender tanto del seguimiento manual.",
      },
      {
        title: "Mas claridad sobre responsables y estados",
        description: "El equipo sabe mejor quien debe actuar y en que parte exacta esta cada solicitud.",
      },
      {
        title: "Mas trazabilidad para control operativo",
        description: "Queda registro de decisiones, tiempos y cuellos de botella para mejorar el proceso despues.",
      },
    ],
    processTitle: "Como lo ordenamos con YAGO",
    processSteps: [
      {
        title: "Detectamos la ruta real",
        description: "Revisamos como se mueve hoy la solicitud y en que parte se pierde tiempo o visibilidad.",
      },
      {
        title: "Diseñamos reglas y ownership",
        description: "Definimos responsables, estados, alertas y criterios para que el flujo avance con menos friccion.",
      },
      {
        title: "Dejamos el proceso visible",
        description: "Implementamos seguimiento, trazabilidad y puntos de control para que el equipo pueda operar mejor.",
      },
    ],
    faq: [
      {
        question: "¿Esto sirve aunque haya personas aprobando?",
        answer: "Si. Muchos de estos flujos mejoran justamente combinando reglas claras con decision humana en los puntos importantes.",
      },
      {
        question: "¿Hay que construir una app desde cero?",
        answer: "No siempre. A veces basta con ordenar ingreso, reglas, estados y avisos sobre herramientas ya existentes.",
      },
      {
        question: "¿Como se parte?",
        answer: "Normalmente partimos por el tramo del flujo que mas espera o seguimiento manual genera hoy.",
      },
    ],
    relatedLinks: [
      { href: "/servicios/automatizacion-procesos", label: "Servicio de automatizacion de procesos" },
      { href: "/soluciones/automatizacion-backoffice", label: "Automatizacion de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatizacion para finanzas" },
    ],
  },
  {
    slug: "automatizacion-carga-de-datos",
    seoTitle: "Automatizacion de carga de datos para empresas | YAGO",
    seoDescription:
      "Automatiza carga de datos desde correos, planillas, formularios y documentos hacia tus sistemas internos. Menos digitacion, menos errores y mas velocidad operativa.",
    keywords: [
      "automatizacion carga de datos",
      "automatizar ingreso de datos",
      "automatizacion digitacion",
      "automatizacion de data entry",
    ],
    eyebrow: "Solucion",
    title: "Automatizacion de carga de datos para equipos que ya no quieren seguir digitando lo mismo una y otra vez.",
    description:
      "Si tu operacion sigue copiando informacion desde correos, planillas, formularios o documentos a otros sistemas, YAGO puede ayudarte a convertir ese trabajo repetitivo en un flujo mas rapido, mas limpio y mas trazable.",
    proof: [
      "Ideal para backoffice, administracion y operaciones",
      "Integracion gradual con OCR, validaciones y sistemas internos",
      "Menos digitacion manual y menos retrabajo",
    ],
    problemTitle: "Cuando la carga manual empieza a frenar la operacion",
    problemDescription:
      "La carga de datos parece un problema pequeno hasta que se multiplica. Ahi aparecen errores, atrasos, baja trazabilidad y personas dedicando demasiado tiempo a tareas que no deberian absorber tantas horas.",
    painPoints: [
      "Copiar datos entre correos, planillas y plataformas internas",
      "Errores por digitacion, formato o informacion incompleta",
      "Validaciones repetitivas antes de cargar al sistema",
      "Dependencia de personas clave para que la informacion avance",
    ],
    fitTitle: "Equipos donde esta solucion suele tener mejor retorno",
    fitItems: [
      "Backoffice con alto volumen de registros o actualizaciones",
      "Administracion y finanzas con carga repetitiva desde documentos o planillas",
      "Operaciones que consolidan datos desde varias fuentes manuales",
      "Empresas que quieren mejorar velocidad sin rehacer todo su stack",
    ],
    startingTitle: "Por donde conviene partir",
    startingItems: [
      "Extraccion de datos desde correos o adjuntos",
      "Validacion de campos antes del ingreso",
      "Carga automatizada a planillas, CRM, ERP o bases internas",
      "Alertas para errores, excepciones o datos faltantes",
    ],
    outcomesTitle: "Que se gana cuando la digitacion deja de ser manual",
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
        title: "Mas trazabilidad del flujo",
        description: "Queda mas claro de donde vino la informacion, cuando se cargo y que excepciones aparecieron.",
      },
    ],
    processTitle: "Como lo implementamos",
    processSteps: [
      {
        title: "Detectamos el tramo mas repetitivo",
        description: "Ubicamos el ingreso manual que mas HH consume o mas errores genera hoy.",
      },
      {
        title: "Automatizamos validacion y carga",
        description: "Diseñamos el flujo para que los datos entren mejor estructurados y lleguen a destino con menos friccion.",
      },
      {
        title: "Dejamos excepciones visibles",
        description: "Los casos fuera de regla quedan claros para que el equipo los revise sin perder control.",
      },
    ],
    faq: [
      {
        question: "¿Esto sirve si los datos vienen en distintos formatos?",
        answer: "Si. Se puede combinar extraccion, normalizacion y validacion antes de la carga final.",
      },
      {
        question: "¿Hace falta usar OCR?",
        answer: "No siempre. Depende de si los datos vienen en documentos, correos, planillas o formularios. A veces basta con reglas e integraciones.",
      },
      {
        question: "¿Como se controla que no entren errores al sistema?",
        answer: "Con reglas de validacion, manejo de excepciones y trazabilidad de cada paso del flujo.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-backoffice", label: "Automatizacion de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatizacion para finanzas" },
      { href: "/ocr", label: "OCR para empresas" },
    ],
  },
  {
    slug: "automatizacion-documental",
    seoTitle: "Automatizacion documental para empresas | YAGO",
    seoDescription:
      "Automatizacion documental con OCR, validaciones y trazabilidad para facturas, respaldos, formularios y otros flujos con documentos operativos.",
    keywords: [
      "automatizacion documental",
      "automatizacion de documentos",
      "ocr empresas",
      "procesamiento documental automatizado",
    ],
    eyebrow: "Solucion",
    title: "Automatizacion documental para procesos que hoy siguen dependiendo de revisar, leer y cargar documentos a mano.",
    description:
      "YAGO ayuda a equipos que trabajan con facturas, respaldos, formularios, solicitudes y otros documentos operativos a extraer datos, validarlos y moverlos con mas velocidad y mejor control.",
    proof: [
      "Combinable con OCR, reglas de negocio y aprobaciones",
      "Pensado para procesos donde importa tanto velocidad como trazabilidad",
      "Escalable a backoffice, finanzas y operaciones documentales",
    ],
    problemTitle: "El problema no es solo leer el documento",
    problemDescription:
      "En muchos equipos, el verdadero costo de un documento no esta en recibirlo, sino en revisarlo, extraer la informacion, validarla y moverla al siguiente paso del proceso.",
    painPoints: [
      "Lectura manual de documentos repetitivos",
      "Extraccion de datos que luego hay que revisar y corregir",
      "Validaciones hechas a mano antes de aprobar o cargar",
      "Poca trazabilidad entre recepcion, validacion y uso final del documento",
    ],
    fitTitle: "Cuando esta solucion tiene mas sentido",
    fitItems: [
      "Equipos con alto flujo de documentos operativos o administrativos",
      "Procesos donde el documento define el siguiente paso del flujo",
      "Operaciones que necesitan bajar digitacion sin perder control humano",
      "Empresas que quieren ordenar primero la extraccion y la validacion",
    ],
    startingTitle: "Puntos de partida frecuentes",
    startingItems: [
      "OCR para extraer datos clave desde documentos",
      "Validacion de campos antes de registrar o aprobar",
      "Clasificacion de documentos por tipo o prioridad",
      "Integracion con sistemas de carga, reportes o seguimiento",
    ],
    outcomesTitle: "Que cambia cuando el documento deja de ser un cuello de botella",
    outcomes: [
      {
        title: "Procesamiento mas rapido",
        description: "El equipo deja de revisar manualmente cada documento de punta a punta para tareas repetitivas.",
      },
      {
        title: "Menos trabajo manual de extraccion",
        description: "Los datos clave se capturan mejor y se revisan solo donde hace falta.",
      },
      {
        title: "Mas control y trazabilidad",
        description: "Queda mas claro que documento entro, que datos se leyeron y en que estado quedo el proceso.",
      },
    ],
    processTitle: "Como lo aterrizamos con YAGO",
    processSteps: [
      {
        title: "Revisamos tipos documentales y reglas",
        description: "Definimos que datos importan, que validaciones aplica y que salidas necesita el negocio.",
      },
      {
        title: "Implementamos extraccion y control",
        description: "Combinamos OCR, validacion y trazabilidad para dejar un flujo mas util que solo leer texto.",
      },
      {
        title: "Conectamos con el siguiente paso operativo",
        description: "El documento procesado alimenta aprobaciones, cargas, reportes o alertas segun el caso.",
      },
    ],
    faq: [
      {
        question: "¿Esto es solo OCR?",
        answer: "No. OCR puede ser una parte, pero el valor real suele estar en la validacion, el control y la integracion del documento al flujo operativo.",
      },
      {
        question: "¿Se puede dejar revision humana?",
        answer: "Si. En muchos casos conviene dejar validacion humana en excepciones o documentos sensibles.",
      },
      {
        question: "¿Que tipo de documentos se pueden trabajar?",
        answer: "Facturas, respaldos, formularios, solicitudes, guias y otros documentos con una estructura suficientemente util para el proceso.",
      },
    ],
    relatedLinks: [
      { href: "/ocr", label: "OCR para empresas" },
      { href: "/soluciones/automatizacion-carga-de-datos", label: "Automatizacion de carga de datos" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatizacion para finanzas" },
    ],
  },
  {
    slug: "automatizacion-reportes",
    seoTitle: "Automatizacion de reportes y consolidacion de datos | YAGO",
    seoDescription:
      "Automatiza reportes operativos, consolidacion de datos y actualizacion de indicadores desde multiples fuentes. Menos planillas manuales y mas visibilidad.",
    keywords: [
      "automatizacion de reportes",
      "consolidacion automatica de datos",
      "automatizacion de informes",
      "reportes automaticos empresas",
    ],
    eyebrow: "Solucion",
    title: "Automatizacion de reportes para equipos que siguen armando indicadores a mano desde demasiadas fuentes.",
    description:
      "Si tus reportes dependen de copiar datos desde planillas, correos, sistemas o cierres manuales, YAGO puede ayudarte a consolidar mejor la informacion y dejar indicadores mas visibles y menos fragiles.",
    proof: [
      "Ideal para operaciones, administracion y finanzas",
      "Reduce consolidacion manual y dependencia de planillas intermedias",
      "Mejora visibilidad de indicadores y tiempos de cierre",
    ],
    problemTitle: "Cuando reportar consume demasiado tiempo operativo",
    problemDescription:
      "Muchas veces el problema no es falta de datos, sino exceso de trabajo manual para consolidarlos, validarlos y presentarlos con algo de confianza.",
    painPoints: [
      "Reportes armados desde multiples planillas o sistemas",
      "Cierres lentos por consolidacion y validacion manual",
      "Indicadores poco confiables o muy dependientes de una persona",
      "Demasiado tiempo perdido preparando informacion en vez de usarla",
    ],
    fitTitle: "Donde se nota mas rapido el impacto",
    fitItems: [
      "Equipos que reportan semanal o mensualmente desde varias fuentes",
      "Operaciones con indicadores que dependen de consolidacion manual",
      "Finanzas y administracion que necesitan cierres mas ordenados",
      "Empresas donde los reportes llegan tarde o con mucha fragilidad operativa",
    ],
    startingTitle: "Primeras mejoras habituales",
    startingItems: [
      "Extraccion automatizada de datos desde varias fuentes",
      "Normalizacion y consolidacion de indicadores",
      "Alertas cuando falta informacion o hay desajustes",
      "Entrega automatica de reportes o tableros de seguimiento",
    ],
    outcomesTitle: "Que cambia cuando el reporte deja de hacerse a mano",
    outcomes: [
      {
        title: "Menos tiempo en consolidacion",
        description: "El equipo reduce el trabajo operativo necesario para juntar, limpiar y ordenar la informacion.",
      },
      {
        title: "Indicadores mas consistentes",
        description: "Las reglas de origen y consolidacion ayudan a bajar variaciones y errores evitables.",
      },
      {
        title: "Mas tiempo para interpretar y decidir",
        description: "El valor se mueve desde armar el reporte hacia usarlo para operar mejor.",
      },
    ],
    processTitle: "Como lo trabaja YAGO",
    processSteps: [
      {
        title: "Mapeamos fuentes y tiempos de cierre",
        description: "Revisamos de donde salen los datos, quien los mueve y donde se rompe hoy la consistencia.",
      },
      {
        title: "Automatizamos consolidacion y control",
        description: "Definimos como normalizar, cruzar y validar la informacion para dejar un flujo mas robusto.",
      },
      {
        title: "Dejamos una salida util para el equipo",
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
        answer: "Si. Mientras existan fuentes, reglas y una necesidad clara de consolidacion, se puede ordenar el flujo.",
      },
      {
        question: "¿Como se evita que salgan reportes con errores?",
        answer: "Con reglas de validacion, control de origen y alertas para datos faltantes o inconsistentes.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-backoffice", label: "Automatizacion de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatizacion para finanzas" },
      { href: "/servicios/apps-automatizacion", label: "Apps para operar automatizaciones" },
    ],
  },
  {
    slug: "automatizacion-para-logistica",
    seoTitle: "Automatizacion para logistica y operaciones documentales | YAGO",
    seoDescription:
      "Automatizacion para operaciones logisticas con guias, documentos, seguimiento, aprobaciones y carga manual de datos. Menos friccion operativa y mas trazabilidad.",
    keywords: [
      "automatizacion para logistica",
      "automatizacion operaciones logisticas",
      "automatizacion guias despacho",
      "automatizacion documental logistica",
    ],
    eyebrow: "Industria",
    title: "Automatizacion para logistica cuando la operacion depende de documentos, seguimiento y demasiada coordinacion manual.",
    description:
      "YAGO ayuda a equipos logisticos que trabajan con guias, respaldos, aprobaciones, estados y consolidacion de datos a ordenar el flujo operativo sin romper las herramientas que ya usan.",
    proof: [
      "Pensado para flujos con alto movimiento documental y seguimiento operativo",
      "Combinable con OCR, trazabilidad y reglas por etapa",
      "Mejora visibilidad en procesos con varios responsables",
    ],
    problemTitle: "Donde suele doler mas en logistica",
    problemDescription:
      "En logistica, una parte importante del desgaste operativo viene de perseguir estados, mover informacion entre sistemas y revisar documentos una y otra vez para que el proceso siga avanzando.",
    painPoints: [
      "Guias, respaldos y documentos entrando por varios canales",
      "Seguimiento manual para saber en que etapa va cada caso",
      "Carga repetitiva de datos en planillas o sistemas internos",
      "Poca visibilidad cuando hay varios responsables o puntos de control",
    ],
    fitTitle: "Cuando encaja mejor",
    fitItems: [
      "Operaciones logisticas con alto flujo documental",
      "Procesos donde el estado del caso importa tanto como el documento",
      "Equipos que necesitan trazabilidad sin agregar mas carga manual",
      "Empresas que quieren ordenar primero el tramo mas repetitivo del flujo",
    ],
    startingTitle: "Primeros frentes que suele valer la pena atacar",
    startingItems: [
      "Extraccion y validacion de datos desde guias y respaldos",
      "Seguimiento de estados y responsables por etapa",
      "Alertas cuando un caso se detiene o sale de regla",
      "Consolidacion de informacion para reportes o control operativo",
    ],
    outcomesTitle: "Que cambia cuando la logistica deja de depender tanto del seguimiento manual",
    outcomes: [
      {
        title: "Menos tiempo persiguiendo estados",
        description: "El equipo gana visibilidad sobre el flujo y reduce coordinacion manual innecesaria.",
      },
      {
        title: "Menos retrabajo documental",
        description: "La informacion se captura, valida y mueve con mas consistencia a lo largo del proceso.",
      },
      {
        title: "Mas trazabilidad operativa",
        description: "Queda mas claro que paso con cada caso, en que etapa esta y quien debe actuar.",
      },
    ],
    processTitle: "Como entra YAGO en operaciones logisticas",
    processSteps: [
      {
        title: "Mapeamos puntos ciegos del flujo",
        description: "Revisamos donde se pierde tiempo entre documento, estado, aprobacion y seguimiento.",
      },
      {
        title: "Ordenamos el tramo mas costoso",
        description: "Automatizamos primero la parte del proceso donde mas friccion operativa se acumula.",
      },
      {
        title: "Escalamos con mas control",
        description: "Sumamos integraciones, alertas y visibilidad para que la operacion siga siendo gobernable.",
      },
    ],
    faq: [
      {
        question: "¿Sirve para guias, respaldos y otros documentos logisticos?",
        answer: "Si. Son justamente algunos de los casos donde combinar extraccion, validacion y trazabilidad tiene mas sentido.",
      },
      {
        question: "¿Se puede integrar con herramientas que ya usamos?",
        answer: "Si. En la mayoria de los casos conviene integrarse primero a lo que ya existe y luego ampliar el alcance.",
      },
      {
        question: "¿Esto ordena estados y seguimiento o solo lee documentos?",
        answer: "Puede hacer ambas cosas. El objetivo no es solo leer informacion, sino dejar el flujo mas visible y util para operar.",
      },
    ],
    relatedLinks: [
      { href: "/ocr", label: "OCR para documentos operativos" },
      { href: "/soluciones/automatizacion-documental", label: "Automatizacion documental" },
      { href: "/soluciones/automatizacion-reportes", label: "Automatizacion de reportes" },
    ],
  },
  {
    slug: "automatizacion-para-servicios",
    seoTitle: "Automatizacion para empresas de servicios | YAGO",
    seoDescription:
      "Automatizacion para empresas de servicios con backoffice, aprobaciones, reportes, atencion interna y carga manual de datos. Menos friccion y mas capacidad operativa.",
    keywords: [
      "automatizacion empresas de servicios",
      "automatizacion operativa servicios",
      "automatizacion backoffice servicios",
      "automatizacion procesos administrativos servicios",
    ],
    eyebrow: "Industria",
    title: "Automatizacion para empresas de servicios que crecen mas rapido que su operacion interna.",
    description:
      "Cuando una empresa de servicios crece, suelen crecer tambien las aprobaciones, la coordinacion interna, los reportes, la carga manual y el seguimiento entre equipos. YAGO ayuda a ordenar ese desgaste sin rehacer toda la estructura operativa.",
    proof: [
      "Especialmente util para operaciones internas, administracion y backoffice",
      "Pensado para procesos que cruzan varias areas",
      "Primeros quick wins visibles sin abrir proyectos gigantes",
    ],
    problemTitle: "Lo que suele pasar en empresas de servicios",
    problemDescription:
      "Muchas empresas de servicios no fallan por falta de demanda, sino porque la operacion interna se llena de coordinacion manual, validaciones y tareas repetitivas que escalan peor que el negocio.",
    painPoints: [
      "Demasiadas tareas repetitivas entre areas internas",
      "Seguimiento manual de estados, pendientes y responsables",
      "Backoffice sobrecargado por carga de datos y consolidacion",
      "Reportes y aprobaciones que consumen tiempo de equipos clave",
    ],
    fitTitle: "Cuando esta pagina tiene mas sentido",
    fitItems: [
      "Empresas de servicios con crecimiento operativo desordenado",
      "Equipos administrativos que absorben demasiada carga manual",
      "Operaciones donde varias areas dependen de informacion compartida",
      "Negocios que necesitan ordenar procesos antes de escalar mas",
    ],
    startingTitle: "Donde suele haber primeras oportunidades claras",
    startingItems: [
      "Aprobaciones internas y traspasos entre areas",
      "Carga y validacion de datos repetitiva",
      "Reportes y consolidacion operativa",
      "Flujos documentales o de soporte interno",
    ],
    outcomesTitle: "Que cambia cuando la operacion interna deja de empujar tanta friccion",
    outcomes: [
      {
        title: "Mas capacidad operativa con el mismo equipo",
        description: "Se reduce el tiempo perdido en tareas repetitivas y coordinacion innecesaria.",
      },
      {
        title: "Menos dependencia de seguimiento manual",
        description: "Los procesos ganan reglas, visibilidad y ownership mas claro entre equipos.",
      },
      {
        title: "Mejor base para seguir creciendo",
        description: "La operacion queda mas ordenada y lista para ampliar servicios sin tanto desgaste interno.",
      },
    ],
    processTitle: "Como lo trabajamos con empresas de servicios",
    processSteps: [
      {
        title: "Ubicamos el cuello de botella real",
        description: "Revisamos donde se estan yendo mas HH en procesos internos que no agregan suficiente valor.",
      },
      {
        title: "Armamos un quick win util",
        description: "Partimos por un flujo acotado que reduzca friccion visible y deje aprendizaje para escalar mejor.",
      },
      {
        title: "Extendemos al resto de la operacion",
        description: "Con el primer caso andando, conectamos nuevos procesos segun impacto y viabilidad.",
      },
    ],
    faq: [
      {
        question: "¿Esto sirve si tenemos varios tipos de proceso interno?",
        answer: "Si. La idea es no intentar automatizar todo de una vez, sino priorizar el primer flujo con mejor retorno operativo.",
      },
      {
        question: "¿Hay que construir un sistema nuevo completo?",
        answer: "No necesariamente. Muchas veces conviene integrar, ordenar y automatizar sobre herramientas existentes.",
      },
      {
        question: "¿Que area se beneficia primero?",
        answer: "Depende del caso, pero normalmente el impacto aparece antes en operaciones, backoffice, administracion o reportes internos.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-backoffice", label: "Automatizacion de backoffice" },
      { href: "/soluciones/automatizacion-aprobaciones", label: "Automatizacion de aprobaciones" },
      { href: "/soluciones/automatizacion-carga-de-datos", label: "Automatizacion de carga de datos" },
    ],
  },
  {
    slug: "automatizacion-para-rrhh-y-dotacion",
    seoTitle: "Automatizacion para RRHH y dotacion | YAGO",
    seoDescription:
      "Automatizacion para equipos de RRHH y dotacion con formularios, documentos, validaciones, seguimiento y carga manual de datos. Menos friccion y mejor control operativo.",
    keywords: [
      "automatizacion rrhh",
      "automatizacion dotacion",
      "automatizacion recursos humanos",
      "automatizacion procesos rrhh",
    ],
    eyebrow: "Industria",
    title: "Automatizacion para RRHH y dotacion cuando el proceso interno depende de demasiados documentos, validaciones y seguimiento manual.",
    description:
      "YAGO ayuda a equipos de RRHH y dotacion a ordenar tareas repetitivas ligadas a formularios, documentos, estados, validaciones y carga de datos para que la operacion gane velocidad sin perder trazabilidad.",
    proof: [
      "Util para procesos con alto componente documental y administrativo",
      "Combinable con OCR, formularios, reglas y seguimiento",
      "Mejora visibilidad de estados y responsables en procesos internos",
    ],
    problemTitle: "Donde suele cargarse de friccion RRHH y dotacion",
    problemDescription:
      "Cuando los procesos dependen de formularios, documentos, aprobaciones y seguimiento manual, RRHH termina gastando demasiado tiempo en coordinacion operativa que deberia ser mucho mas liviana.",
    painPoints: [
      "Documentos y antecedentes entrando por distintos canales",
      "Validaciones y revisiones manuales antes de seguir avanzando",
      "Estados poco visibles entre solicitud, revision y cierre",
      "Carga de datos repetitiva hacia planillas o sistemas internos",
    ],
    fitTitle: "Cuando tiene mas sentido",
    fitItems: [
      "Equipos de RRHH con alto volumen administrativo",
      "Procesos de dotacion o gestion interna con muchos pasos manuales",
      "Operaciones donde importan trazabilidad, estados y responsables",
      "Equipos que quieren reducir retrabajo sin perder control humano",
    ],
    startingTitle: "Puntos de partida habituales",
    startingItems: [
      "Ingreso estructurado de formularios y antecedentes",
      "Extraccion de datos desde documentos",
      "Validaciones, estados y seguimiento entre responsables",
      "Carga automatizada a reportes o sistemas internos",
    ],
    outcomesTitle: "Que cambia cuando RRHH deja de empujar tanta carga manual",
    outcomes: [
      {
        title: "Menos tiempo en administracion repetitiva",
        description: "El equipo puede sacar trabajo operativo de tareas que hoy consumen demasiadas HH.",
      },
      {
        title: "Mas claridad del proceso",
        description: "Los estados, responsables y excepciones quedan mucho mas visibles para operar.",
      },
      {
        title: "Mejor trazabilidad documental",
        description: "La informacion se mueve con mas orden, control y seguimiento a lo largo del flujo.",
      },
    ],
    processTitle: "Como aterrizamos este tipo de procesos",
    processSteps: [
      {
        title: "Revisamos el flujo real",
        description: "Ubicamos donde se concentran documentos, validaciones, esperas y carga repetitiva.",
      },
      {
        title: "Ordenamos el primer tramo clave",
        description: "Automatizamos la parte que mas friccion genera hoy, sin sacar control donde todavia hace falta criterio humano.",
      },
      {
        title: "Escalamos con trazabilidad",
        description: "Ampliamos el flujo con mejores estados, reglas, integraciones y visibilidad operativa.",
      },
    ],
    faq: [
      {
        question: "¿Esto reemplaza la revision humana?",
        answer: "No. En procesos de RRHH suele ser clave mantener validacion humana en puntos sensibles o ambiguos.",
      },
      {
        question: "¿Sirve para formularios y documentos a la vez?",
        answer: "Si. De hecho, muchas oportunidades aparecen justamente al ordenar como se reciben, validan y mueven ambos tipos de informacion.",
      },
      {
        question: "¿Se puede partir por una parte del proceso?",
        answer: "Si. Normalmente conviene partir por el tramo que mas seguimiento manual o mas trabajo administrativo genera.",
      },
    ],
    relatedLinks: [
      { href: "/soluciones/automatizacion-documental", label: "Automatizacion documental" },
      { href: "/soluciones/automatizacion-carga-de-datos", label: "Automatizacion de carga de datos" },
      { href: "/soluciones/automatizacion-aprobaciones", label: "Automatizacion de aprobaciones" },
    ],
  },
];

export function getSeoPageBySlug(slug: string) {
  return SEO_PAGES.find((page) => page.slug === slug);
}

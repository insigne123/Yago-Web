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
  /** Situaciones típicas: cómo se hace hoy y cómo queda con automatización. */
  scenarios?: { title: string; before: string; after: string }[];
  /** Guía práctica para aplicar la solución (prioridad, datos, controles, medición). */
  guide?: { heading: string; paragraphs: string[]; bullets?: string[] }[];
  faq: { question: string; answer: string }[];
  relatedLinks: { href: string; label: string }[];
  modifiedDate?: string;
  /** Países que atiende la página (Service.areaServed). Si no se indica, Chile. */
  areaServed?: string[];
  /** Fuentes oficiales citadas en la guía, enlazadas al final de la guía práctica. */
  sources?: { label: string; href: string }[];
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
    modifiedDate: "2026-11-01",
    seoTitle: "Automatización de procesos financieros en Chile | YAGO",
    seoDescription:
      "Automatiza cuentas por pagar, conciliación bancaria, rendiciones de gastos, cobranza y cierre de mes, con revisión humana donde importa. Para empresas en Chile.",
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
    scenarios: [
      {
        title: "Facturas de proveedores y cuentas por pagar",
        before: "Las facturas llegan por correo a distintas casillas. Alguien descarga cada PDF, busca la orden de compra y la recepción en el ERP y anota en una planilla cuáles están listas para pagar.",
        after: "El flujo toma cada factura recibida, por ejemplo desde el correo o desde el Registro de Compras del SII, y la cruza con su orden de compra y su recepción. Solo pasan a revisión las que no calzan en proveedor, monto o cantidad."
      },
      {
        title: "Conciliación bancaria",
        before: "Cada semana alguien descarga la cartola, la pega en Excel y marca a mano qué movimiento corresponde a qué pago o factura. Los abonos sin glosa clara se acumulan hasta fin de mes.",
        after: "La cartola se importa en un formato estándar y las reglas proponen el calce por monto, fecha, RUT o número de documento. Los movimientos sin calce quedan en una lista corta, con las facturas candidatas para resolverlos."
      },
      {
        title: "Rendiciones de gastos y fondos por rendir",
        before: "Las boletas llegan como fotos por WhatsApp o en un sobre a fin de mes. Finanzas digita cada gasto, persigue los respaldos que faltan y revisa uno por uno si cumplen la política.",
        after: "Cada persona registra su gasto desde el celular con la foto del documento. Se extraen fecha, monto y RUT del emisor, se revisa contra la política y a finanzas llegan marcados los gastos fuera de regla."
      },
      {
        title: "Cobranza a clientes",
        before: "Alguien revisa el listado de facturas vencidas y escribe a cada cliente. Como los pagos recibidos no siempre están conciliados, a veces se cobra una factura que ya estaba pagada.",
        after: "Los recordatorios salen según la fecha de vencimiento y se detienen cuando el pago aparece conciliado en la cartola. Los casos que requieren conversar, como un reclamo o un abono parcial, pasan a una persona."
      }
    ],
    guide: [
      {
        heading: "Qué proceso financiero automatizar primero",
        paragraphs: [
          "En finanzas casi todo parece urgente. Por eso conviene priorizar con criterios y no según quién presiona. Un buen primer candidato se repite todas las semanas, tiene reglas que el equipo sabe explicar y hoy obliga a copiar datos entre el correo, el banco, las planillas y el ERP. Cuentas por pagar y conciliación bancaria suelen cumplir varias de estas condiciones.",
          "Si no tienes claro por dónde partir, YAGO suele empezar con un diagnóstico o con la Auditoría IA, que revisa varios procesos a la vez y entrega una hoja de ruta priorizada. Si ya tienes candidatos, revisa cada uno con estas preguntas:"
        ],
        bullets: [
          "¿Cuántos documentos o movimientos pasan por el proceso al mes y cuánto toma cada uno?",
          "¿Las reglas están escritas o viven en la cabeza de una persona?",
          "¿Qué cuesta un error: un pago duplicado, intereses por atraso, un proveedor molesto o solo un retraso?",
          "¿Los datos ya existen en formato digital, como el XML de las facturas, las cartolas o exportaciones del ERP?",
          "¿El proceso retrasa el cierre de mes?"
        ]
      },
      {
        heading: "Facturas recibidas: el plazo de 8 días y el Registro de Compras",
        paragraphs: [
          "En Chile, las facturas electrónicas que recibe tu empresa quedan en el Registro de Compras del SII, que forma parte del Registro de Compras y Ventas. Según el SII, el comprador tiene 8 días corridos, contados desde que la factura llega al SII, para aceptarla o reclamarla. Si no hace nada en ese plazo, la factura se entiende aceptada.",
          "Esto cambia el orden del trabajo. Si la factura se revisa recién cuando toca pagarla, un precio mal cobrado o una mercadería que nunca llegó se detecta cuando ya no se puede reclamar. Un flujo puede revisar cada factura apenas aparece, cruzarla con la orden de compra y con la recepción o, si es un servicio, con la hoja de entrada de servicios (HES), y avisar a tiempo cuando algo no calza.",
          "El Registro de Compras también sirve como control de completitud. Si una factura está en el SII pero no en tu ERP, falta registrarla. Si está en el ERP pero no en el SII, hay que revisar por qué. Confirma con tu contador cómo se resuelven estos casos en tu empresa."
        ]
      },
      {
        heading: "Controles que conviene dejar en manos de personas",
        paragraphs: [
          "Automatizar finanzas no saca a las personas del proceso. Les cambia el foco: dejan de revisar todo y revisan diferencias, montos altos y cambios sensibles. Antes de implementar, define qué decide el sistema, qué solo propone y qué aprueba siempre una persona.",
          "La IA aporta en los pasos ambiguos, como leer una boleta fotografiada o sugerir a qué factura corresponde un abono con glosa incompleta. En esos pasos su resultado es una propuesta, y una persona confirma los casos dudosos. Estos controles conviene dejarlos explícitos:"
        ],
        bullets: [
          "El flujo prepara la nómina de pagos, pero la autorización en el banco la hace una persona con sus propias credenciales.",
          "Un cambio en los datos bancarios de un proveedor se confirma por un canal distinto al correo que lo pidió.",
          "Quien registra una factura no es quien aprueba su pago.",
          "Los montos sobre un umbral que define tu empresa pasan siempre por revisión.",
          "Toda corrección manual queda registrada con usuario, fecha y motivo."
        ]
      },
      {
        heading: "Cómo medir el resultado y qué cambia en el cierre de mes",
        paragraphs: [
          "El cierre de mes es donde se acumula todo lo anterior. Si las facturas se revisaron al llegar, la cartola se concilió durante el mes y las rendiciones entraron con respaldo, el cierre deja de ser una carrera para cuadrar y pasa a ser una revisión de excepciones. Por eso conviene medir el efecto en el cierre y no solo en cada tarea.",
          "Toma una línea base de algunas semanas antes de partir y compárala con un período equivalente después. Estas métricas suelen servir:"
        ],
        bullets: [
          "Días hábiles entre el fin de mes y el cierre contable.",
          "Facturas que pasan sin intervención y facturas que requieren revisión.",
          "Movimientos de la cartola sin conciliar y su antigüedad.",
          "Facturas con errores detectados después del plazo para reclamarlas.",
          "Días entre la recepción de una factura y su pago, un dato útil para seguir el cumplimiento de la Ley 21.131 de pago a 30 días.",
          "Horas del equipo dedicadas a digitar y cuadrar, medidas de la misma forma antes y después."
        ]
      }
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
      {
        question: "¿Se puede conectar con el ERP que ya usamos, como Defontana, Softland o SAP Business One?",
        answer: "Depende de las interfaces que tenga tu versión y tu contrato. Algunos sistemas ofrecen API y otros permiten importar archivos o programar exportaciones. Lo revisamos al inicio, antes de comprometer un alcance, y si no hay conexión directa se puede trabajar con archivos de carga validados."
      },
      {
        question: "¿Qué accesos necesita la automatización a nuestros sistemas y al banco?",
        answer: "Los mínimos para cada tarea. Para conciliar basta con recibir la cartola, por ejemplo como archivo exportado, sin permisos para mover dinero. Los accesos al ERP se limitan a las operaciones acordadas y cada acción queda registrada."
      },
      {
        question: "¿Sirve si la contabilidad la lleva un contador externo?",
        answer: "Sí. El flujo puede dejar ordenadas las facturas, las rendiciones y la conciliación, cada una con su respaldo, y entregarlas en el formato que usa tu contador. Así el cierre no depende de juntar documentos a última hora."
      },
    ],
    relatedLinks: [
      { href: "/servicios/auditoria-ia", label: "Auditoría IA: qué automatizar primero" },
      { href: "/ocr", label: "OCR para finanzas y documentos" },
      { href: "/servicios/automatizacion-procesos", label: "Automatización de procesos a medida" },
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
    ],
  },
  {
    slug: "automatizacion-aprobaciones",
    name: "Aprobaciones",
    modifiedDate: "2026-11-01",
    seoTitle: "Automatización de aprobaciones y seguimiento | YAGO",
    seoDescription:
      "Automatiza aprobaciones de compras, gastos, vacaciones y contratos con reglas por monto y rol, recordatorios y registro de cada decisión. Empresas en Chile.",
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
    scenarios: [
      {
        title: "Solicitudes de compra",
        before: "Una jefatura pide una compra por correo, finanzas pregunta si hay presupuesto y la gerencia aprueba con una respuesta de una línea. Meses después nadie encuentra quién autorizó ni con qué cotización.",
        after: "La solicitud entra por un formulario con monto, centro de costo y cotización adjunta. Según el monto, pasa por jefatura, finanzas o gerencia, y cada decisión queda registrada con fecha y comentario."
      },
      {
        title: "Vacaciones y permisos",
        before: "El trabajador pide días por correo o WhatsApp y su jefatura responde cuando puede. RRHH se entera tarde, revisa el saldo en otra planilla y a veces lo registrado no coincide con lo aprobado.",
        after: "La solicitud muestra el saldo disponible antes de enviarse y llega a la jefatura que corresponde. Al aprobarse, se actualiza el registro de RRHH y se avisa al equipo, sin volver a digitar."
      },
      {
        title: "Contratos con proveedores",
        before: "El contrato va y vuelve entre legal y gerencia con cambios por correo. Nadie tiene claro cuál es la versión vigente y la firma se coordina persona por persona.",
        after: "Cada versión queda en un solo lugar y el flujo sigue un orden definido: revisión legal, aprobación según monto y envío a firma electrónica. El contrato firmado se archiva junto a su historial de aprobaciones."
      },
      {
        title: "Cuando quien aprueba no está",
        before: "Una solicitud urgente queda detenida porque la gerencia está de viaje o de vacaciones. Alguien tiene que llamar para destrabarla y la excepción no queda registrada en ninguna parte.",
        after: "Si una etapa no se resuelve en el plazo acordado, el flujo envía un recordatorio y después escala a un suplente definido. Queda registrado quién aprobó, en nombre de quién y por qué."
      }
    ],
    guide: [
      {
        heading: "Cómo diseñar la matriz de aprobación",
        paragraphs: [
          "Una matriz de aprobación define quién aprueba qué según el tipo de solicitud, el monto y el área. Los tipos habituales son compras, gastos y reembolsos, vacaciones y permisos, contratos y descuentos comerciales. Escribirla es el primer paso, y muchas veces muestra que las reglas reales no coinciden con las que todos creen que existen.",
          "Al definirla, cuida estos puntos:"
        ],
        bullets: [
          "Asigna cada aprobación a un rol y no a una persona. Si cambia quien ocupa el cargo, el flujo sigue funcionando.",
          "Define los tramos de monto en la moneda que usa tu empresa, sea pesos o UF, y qué pasa con una solicitud que queda justo en el límite.",
          "Separa funciones: nadie aprueba su propia solicitud y los montos altos requieren la aprobación de dos personas distintas.",
          "Fija los datos y respaldos obligatorios de cada tipo de solicitud, como cotización, centro de costo, contrato o certificado.",
          "Deja escrito qué aprobaciones pueden ir en paralelo y cuáles necesitan un orden."
        ]
      },
      {
        heading: "Recordatorios y escalamiento sin llenar de avisos",
        paragraphs: [
          "Muchas aprobaciones se traban por olvido y no por desacuerdo. Por eso cada etapa necesita un plazo acordado y una regla para cuando se cumple: primero un recordatorio y después un aviso a la jefatura o el traspaso a un suplente.",
          "Cuida la cantidad de avisos. Si cada solicitud genera varios correos, la gente deja de leerlos. Ayuda agrupar los pendientes en un resumen diario, avisar por el canal que el equipo ya usa, como correo, Teams o WhatsApp, y permitir aprobar desde el celular.",
          "Quien aprueba debe ver el monto, el respaldo y el historial sin abrir otros sistemas. Si para decidir tiene que buscar la cotización en otra carpeta, la solicitud vuelve a quedar en espera."
        ]
      },
      {
        heading: "Trazabilidad y auditoría: qué debe quedar registrado",
        paragraphs: [
          "Una aprobación por correo deja rastro, pero disperso y difícil de reconstruir. Para una auditoría interna o externa sirve un registro único por solicitud, que se pueda exportar y que no se pueda modificar sin dejar huella.",
          "Ese registro también resuelve preguntas del día a día. Cuando un proveedor consulta por una orden de compra o un trabajador por sus días aprobados, la respuesta está en un solo lugar y no en la bandeja de alguien. Como mínimo, debería incluir:"
        ],
        bullets: [
          "Quién creó la solicitud, cuándo y con qué datos y respaldos.",
          "Qué regla de la matriz se aplicó y qué responsables le correspondían.",
          "Cada decisión, con persona, fecha, hora y comentario.",
          "Las delegaciones y escalamientos, indicando en nombre de quién se aprobó.",
          "La versión exacta del documento aprobado y, si corresponde, la versión firmada.",
          "Los cambios en la propia matriz: quién modificó una regla y desde cuándo rige."
        ]
      },
      {
        heading: "Qué medir y errores que conviene evitar",
        paragraphs: [
          "Mide el tiempo de ciclo total y también el de cada etapa, separado por tipo de solicitud. Así sabes si la espera está en una persona, en un paso o en solicitudes que llegan incompletas. Otras métricas útiles son las solicitudes devueltas por falta de información, las aprobaciones resueltas por delegación, los recordatorios que necesita cada etapa y los pendientes ordenados por antigüedad.",
          "Entre los errores comunes están copiar en el sistema el mismo desorden que había en el correo, sumar niveles de aprobación que no cambian ninguna decisión, pedir aprobaciones sin mostrar el respaldo y no definir qué pasa cuando alguien rechaza. Cuando conviven varios flujos de aprobación y no hay claridad sobre cuál abordar antes, YAGO suele comenzar con una sesión de diagnóstico o con una Auditoría IA para mapearlos y priorizarlos."
        ]
      }
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
      {
        question: "¿Dónde aporta la IA en un flujo de aprobaciones?",
        answer: "En pasos acotados. Puede revisar que la solicitud traiga los datos y respaldos requeridos, leer una cotización para completar proveedor y monto o resumir un contrato largo para quien debe aprobarlo. La decisión sigue siendo de una persona, y un resumen no reemplaza la revisión legal."
      },
      {
        question: "¿Qué pasa con una solicitud rechazada o incompleta?",
        answer: "Vuelve a quien la creó con el motivo y las observaciones de quien la revisó. Se puede corregir y reenviar sin partir de cero, y el historial conserva ambas versiones. Si falta un dato obligatorio, el formulario lo pide antes de enviar, así se evitan devoluciones por datos faltantes."
      },
      {
        question: "¿Una aprobación en el flujo reemplaza la firma de un contrato?",
        answer: "No. La aprobación registra una decisión interna, y la firma de un documento puede tener requisitos legales propios según su tipo. El flujo conecta ambas cosas: cuando el contrato queda aprobado, lo envía a la plataforma de firma electrónica que use tu empresa y archiva la versión firmada con su historial."
      },
    ],
    relatedLinks: [
      { href: "/servicios/auditoria-ia", label: "Auditoría IA: qué automatizar primero" },
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
    modifiedDate: "2026-11-01",
    seoTitle: "Automatización de reportes y consolidación de datos | YAGO",
    seoDescription:
      "Automatiza reportes recurrentes, dashboards y alertas con datos del ERP, planillas y otros sistemas, con reglas de calidad de datos. Para empresas en Chile.",
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
    scenarios: [
      {
        title: "Reporte semanal de ventas por sucursal",
        before: "Cada lunes alguien exporta las ventas del ERP, pega las planillas que mandan las sucursales y arma tablas dinámicas en Excel. Si una sucursal se atrasa, todo el reporte se atrasa.",
        after: "Las ventas se extraen del ERP de forma programada y cada sucursal carga sus datos en un formato fijo. El reporte se arma solo y avisa qué sucursal todavía no envía su información."
      },
      {
        title: "Informe mensual para gerencia o directorio",
        before: "Finanzas, operaciones y comercial mandan cada uno su planilla, con formatos y fechas de corte distintos. Antes de analizar, alguien tiene que cuadrar cifras que no coinciden entre áreas.",
        after: "Cada indicador tiene una definición única, una fuente acordada y una fecha de corte. El informe parte con datos validados y el equipo dedica su tiempo a explicar las variaciones."
      },
      {
        title: "Un dashboard que depende de una persona",
        before: "Existe un tablero en Power BI o Looker Studio, pero se alimenta de una planilla que alguien actualiza a mano. Si esa persona sale de vacaciones, el tablero queda congelado y nadie lo nota.",
        after: "El tablero lee una base consolidada que se actualiza con una frecuencia definida. Muestra la fecha de la última carga y avisa al responsable si una fuente falló."
      },
      {
        title: "Alertas en vez de revisar todo",
        before: "Para detectar un problema, como una caída en la venta diaria o un gasto que se sale del presupuesto, alguien tiene que abrir el reporte y revisarlo línea por línea.",
        after: "El equipo define umbrales y el sistema avisa por correo, Teams o WhatsApp cuando un indicador sale de rango, junto con el dato que gatilló la alerta. El reporte completo queda para analizar, no para vigilar."
      }
    ],
    guide: [
      {
        heading: "Qué reporte automatizar primero",
        paragraphs: [
          "No todos los reportes merecen automatizarse. Algunos se preparan una vez al año y otros ya nadie los lee. El candidato correcto se arma con frecuencia, junta datos de varias fuentes y alimenta una decisión concreta, como reponer stock, ajustar una meta comercial o aprobar un gasto.",
          "Haz un inventario simple de los reportes recurrentes de tu empresa. Para cada uno, responde:"
        ],
        bullets: [
          "¿Cada cuánto se prepara y cuántas horas toma armarlo?",
          "¿De cuántas fuentes saca datos y cuántas personas intervienen?",
          "¿Qué decisión se toma con él y qué pasa si llega tarde o con errores?",
          "¿Depende de una sola persona que sabe cómo armarlo?",
          "¿Alguien lo lee completo o solo mira unas pocas cifras?"
        ]
      },
      {
        heading: "Calidad de datos: el trabajo que no se ve",
        paragraphs: [
          "Automatizar un reporte con datos inconsistentes solo entrega errores más rápido. Antes de construir el tablero, conviene resolver los problemas que hoy alguien corrige a mano sin dejarlo escrito.",
          "Algunos casos típicos en empresas chilenas: el mismo cliente escrito de varias formas, el RUT con y sin puntos o con el dígito verificador mal ingresado, códigos de producto distintos entre el ERP y la planilla comercial, montos en pesos, UF y dólares mezclados en una misma columna y fechas con formatos distintos según quién exportó el archivo.",
          "Cada problema se resuelve con una regla explícita. Por ejemplo, normalizar el RUT y validar su dígito verificador, mantener una tabla de equivalencias de clientes y productos, convertir montos con el valor de la UF o del dólar de la fecha que corresponde y rechazar registros incompletos con un aviso a quien los cargó. Esas reglas quedan documentadas, así el reporte deja de depender de lo que una persona recuerda."
        ]
      },
      {
        heading: "Fuentes, accesos y frecuencia de actualización",
        paragraphs: [
          "Cada fuente entrega datos a su manera. Un ERP como SAP Business One, Defontana, Softland o Manager puede ofrecer API, consultas a su base de datos o exportaciones programadas, según la versión y el contrato. Otras fuentes son planillas compartidas, archivos que llegan por correo o portales que solo permiten descargar un reporte.",
          "Para cada fuente define un responsable, un acceso de solo lectura y una frecuencia de actualización. La frecuencia depende de la decisión que apoya el reporte: un informe de gestión mensual no necesita datos en tiempo real, mientras que una alerta operativa sí necesita actualizarse durante el día.",
          "La información consolidada se guarda en una base intermedia, que puede ser una base de datos o, si el volumen es chico, una planilla bien estructurada. Desde ahí se alimentan el tablero, el informe en PDF y las alertas. Si mañana cambias de herramienta de visualización, no tienes que rehacer la consolidación."
        ]
      },
      {
        heading: "Cómo saber si el reporte automatizado funciona",
        paragraphs: [
          "Los errores comunes son automatizar un reporte que nadie usa, sumar indicadores hasta que el tablero se vuelve ilegible y crear alertas sin un responsable que las atienda. Una alerta que nadie revisa es ruido, y con el tiempo el equipo empieza a ignorarlas todas.",
          "Si tu empresa tiene muchos reportes y no está claro cuál conviene ordenar primero, en YAGO solemos partir por un diagnóstico acotado o por la Auditoría IA, que recorre las fuentes de datos de cada área y propone por dónde empezar. Para evaluar el resultado, compara el mismo reporte antes y después con estas métricas:"
        ],
        bullets: [
          "Horas dedicadas a preparar el reporte en cada ciclo.",
          "Día y hora en que el reporte queda disponible.",
          "Correcciones hechas después de publicarlo.",
          "Cargas fallidas o fuentes atrasadas, y cuánto demora resolverlas.",
          "Alertas atendidas frente a alertas descartadas."
        ]
      }
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
      {
        question: "¿Necesito Power BI u otra herramienta de BI para automatizar reportes?",
        answer: "No necesariamente. El trabajo principal está en extraer, limpiar y consolidar los datos. La salida puede ser un tablero en Power BI o Looker Studio, una planilla que se actualiza sola o un PDF que llega por correo, según quién usa el reporte y cómo lo usa."
      },
      {
        question: "¿Qué pasa si uno de mis sistemas no tiene API?",
        answer: "Se puede trabajar con exportaciones programadas, archivos que llegan por correo o reportes que el sistema ya genera. Si el formato es estable, suele bastar. Lo importante es que el proceso detecte cuando un archivo no llegó o cambió de estructura y avise antes de publicar cifras incompletas."
      },
      {
        question: "¿La IA puede escribir el análisis del reporte?",
        answer: "Puede preparar un primer borrador que resuma las variaciones y destaque las cifras fuera de rango, siempre a partir de datos ya validados. Ese texto lo revisa el responsable antes de enviarlo, porque el contexto del negocio y la interpretación siguen siendo de tu equipo."
      },
    ],
    relatedLinks: [
      { href: "/servicios/auditoria-ia", label: "Auditoría IA: qué automatizar primero" },
      { href: "/soluciones/automatizacion-backoffice", label: "Automatización de backoffice" },
      { href: "/soluciones/automatizacion-finanzas", label: "Automatización para finanzas" },
      { href: "/servicios/apps-automatizacion", label: "Apps para operar automatizaciones" },
    ],
  },
  {
    slug: "automatizacion-para-logistica",
    name: "Logística",
    modifiedDate: "2026-11-01",
    seoTitle: "Automatización para logística: guías y despachos | YAGO",
    seoDescription:
      "Automatiza pedidos, guías de despacho, seguimiento de entregas y prueba de entrega, con los datos del transporte validados antes de emitir. Empresas en Chile.",
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
    scenarios: [
      {
        title: "Pedidos que llegan por varios canales",
        before: "Los pedidos entran por correo, por el WhatsApp de los vendedores y por la tienda online. Alguien los transcribe a una planilla de despacho o al ERP, y a veces el mismo pedido se ingresa dos veces.",
        after: "Los pedidos de todos los canales llegan a una sola bandeja con el mismo formato. Antes de pasar a bodega se validan cliente, dirección y stock, y los duplicados se detectan antes de despachar."
      },
      {
        title: "Guías de despacho con los datos del transporte",
        before: "La guía se emite con lo que hay a mano, y el chofer y la patente se confirman por WhatsApp minutos antes de salir. Si cambia el camión, hay que rehacer documentos con el vehículo esperando.",
        after: "El flujo pide al transportista los datos del vehículo y del chofer, los valida y los deja listos antes de emitir la guía. Si algo cambia, queda registro de la guía original y de la que la reemplaza."
      },
      {
        title: "Seguimiento de entregas y consultas de clientes",
        before: "Para saber si un pedido llegó, el equipo revisa el portal de cada transportista o llama al chofer. Mientras tanto, los clientes escriben por correo y teléfono para preguntar dónde está su pedido.",
        after: "Los estados de todos los transportistas se consolidan en una sola vista. El cliente recibe avisos en hitos acordados, como despachado, en ruta y entregado, y el equipo atiende solo los casos con problemas."
      },
      {
        title: "Prueba de entrega",
        before: "El chofer vuelve con la copia firmada de la guía y alguien la escanea días después. Cuando un cliente dice que no recibió, encontrar el respaldo toma tiempo.",
        after: "Al entregar, el chofer registra desde el celular una foto, el nombre y el RUT de quien recibe. La prueba queda asociada al número de guía y disponible el mismo día para facturar o responder un reclamo."
      }
    ],
    guide: [
      {
        heading: "Qué tramo de la operación ordenar primero",
        paragraphs: [
          "Una operación logística es una cadena: pedido, preparación, guía de despacho, transporte, entrega, prueba de entrega y facturación. El trabajo manual se concentra en los traspasos entre eslabones, donde alguien copia datos de un sistema a otro o pregunta por WhatsApp en qué va cada caso.",
          "Para elegir el primer tramo, busca dónde hay más transcripción, más llamadas para conocer estados y más reclamos de clientes. Estos frentes suelen ser buenos candidatos:"
        ],
        bullets: [
          "Ingreso de pedidos desde correo, WhatsApp o tienda online a un formato único.",
          "Captura de los datos del transporte antes de emitir la guía de despacho.",
          "Seguimiento consolidado de entregas, con avisos al cliente.",
          "Prueba de entrega digital asociada a cada guía.",
          "Cuadratura de inventario entre el ERP, la bodega y los conteos físicos."
        ]
      },
      {
        heading: "Guías de despacho: los datos que pide el SII desde noviembre de 2026",
        paragraphs: [
          "La Resolución Exenta SII N° 144, del 23 de octubre de 2026, reúne en un solo cuerpo las exigencias para las guías de despacho y facturas que amparan el traslado de bienes, y deja sin efecto la Resolución 154 de 2025. Entre ellos están el origen y el destino con dirección y comuna, el nombre y la cédula del chofer, el RUT del transportista, la patente del vehículo o carro y una descripción clara de la carga.",
          "Según el SII, quienes ya pueden informar los datos del traslado deben aplicar la norma desde el 1 de noviembre de 2026. Quienes no tienen esa información al emitir el documento, por ejemplo cuando el transporte lo hace un tercero, tienen hasta el 1 de mayo de 2027 para hacer las adecuaciones, y la resolución permite complementar electrónicamente los datos que falten.",
          "En la práctica, hay que tener los datos del transporte ordenados antes de emitir. Si hoy el chofer y la patente se coordinan por WhatsApp o viven en la planilla del jefe de bodega, un flujo puede pedirlos al transportista, validar el RUT y los campos obligatorios y dejarlos listos para el sistema de facturación. Revisa con tu contador o asesor tributario cómo aplica la norma a tu forma de transportar."
        ]
      },
      {
        heading: "Datos, integraciones y canales que se necesitan",
        paragraphs: [
          "La automatización logística se apoya en tres maestros ordenados: clientes con direcciones y comunas normalizadas, productos con códigos únicos y transportistas con sus choferes y vehículos. Si cada sistema tiene su propia versión de estos datos, el primer trabajo es definir cuál manda.",
          "Después vienen los accesos: el ERP o sistema de facturación que emite las guías, el sistema de bodega (WMS) o la planilla de inventario, los portales o API de los transportistas y el canal para avisar a clientes, como correo o WhatsApp, respetando las reglas de uso de cada plataforma. La IA ayuda donde la información llega desordenada, por ejemplo al leer un pedido escrito en texto libre o al clasificar los mensajes de clientes por motivo.",
          "Considera también el terreno. Los choferes no siempre tienen buena señal, así que el registro de entrega debe guardar los datos en el celular y enviarlos cuando vuelva la conexión, sin perder la hora real de la entrega."
        ]
      },
      {
        heading: "Excepciones y métricas para operar con control",
        paragraphs: [
          "Una entrega puede fallar de muchas formas: entregas parciales, rechazos, direcciones incorrectas, clientes ausentes y devoluciones. Cada excepción necesita un estado propio, un responsable y una acción siguiente, para que no se pierda en un chat.",
          "Si no tienes claro cuál de estos problemas es prioritario en tu operación, lo habitual en YAGO es medir primero volúmenes y tiempos, ya sea en una sesión de diagnóstico o en la Auditoría IA, antes de proponer una solución. Para saber si la automatización funciona, compara antes y después:"
        ],
        bullets: [
          "Pedidos ingresados sin digitación manual.",
          "Tiempo entre la recepción del pedido y el despacho.",
          "Guías anuladas o reemitidas por datos incorrectos.",
          "Entregas con prueba de entrega completa el mismo día.",
          "Consultas de clientes sobre el estado de su pedido.",
          "Diferencias de inventario en cada conteo."
        ]
      }
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
      {
        question: "¿Funciona si trabajamos con varios transportistas o couriers?",
        answer: "Sí. Cada transportista entrega la información a su manera: algunos tienen API o portal y otros mandan planillas o responden por WhatsApp. El flujo traduce esos formatos a estados comunes, así tu equipo ve todas las entregas en un solo lugar."
      },
      {
        question: "¿Los choferes tienen que instalar una aplicación?",
        answer: "No necesariamente. La prueba de entrega puede registrarse con un formulario web desde el celular o con la aplicación que ya usa el transportista. Lo importante es que la foto, el nombre de quien recibe y la hora queden asociados al número de guía sin que alguien los transcriba."
      },
      {
        question: "¿Sirve si no tenemos WMS ni TMS?",
        answer: "Sí. Muchas operaciones funcionan con un ERP, planillas y WhatsApp, y ahí suele estar el trabajo manual repetitivo. Se puede partir ordenando ese flujo y, si más adelante implementas un WMS o un TMS, la información ya estará estructurada para conectarla."
      },
    ],
    relatedLinks: [
      { href: "/servicios/auditoria-ia", label: "Auditoría IA: qué automatizar primero" },
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
  {
    slug: "automatizacion-latinoamerica",
    name: "Latinoamérica",
    modifiedDate: "2026-11-11",
    seoTitle: "Automatización de procesos y apps para Latinoamérica | YAGO",
    seoDescription:
      "Automatizamos procesos y desarrollamos apps a medida para empresas de Perú, Colombia, México y Ecuador, de forma remota y sobre los sistemas que ya usan.",
    keywords: [
      "automatización de procesos Perú",
      "automatización de procesos Colombia",
      "automatización de procesos México",
      "automatización de procesos Ecuador",
      "desarrollo de apps a medida Latinoamérica",
      "software a medida para empresas",
      "empresa de automatización Latinoamérica",
    ],
    eyebrow: "Región",
    title: "Automatización de procesos y apps a medida para empresas de Perú, Colombia, México y Ecuador.",
    description:
      "YAGO trabaja de forma remota con empresas de Latinoamérica. Automatizamos las tareas repetitivas entre tus sistemas y desarrollamos aplicaciones internas cuando una hoja de cálculo o el ERP ya no alcanzan.",
    proof: [
      "Trabajo remoto con tu equipo de negocio y tecnología",
      "Sobre los sistemas que ya usa tu empresa",
      "Primero un proceso acotado, después escalar",
    ],
    problemTitle: "Dónde se pierde tiempo cuando la operación crece",
    problemDescription:
      "En empresas de cualquier país, el trabajo manual se concentra en los traspasos: datos que se copian de un sistema a otro, aprobaciones que avanzan por correo y hojas de cálculo que se volvieron la herramienta principal de un área.",
    painPoints: [
      "Facturas que llegan como XML y alguien igual digita en el ERP",
      "Aprobaciones y seguimiento por correo o WhatsApp, sin registro",
      "Reportes que se arman a mano cada semana",
      "Hojas de cálculo compartidas que hacen el trabajo de una aplicación",
    ],
    fitTitle: "Cuándo encaja",
    fitItems: [
      "Empresas de Perú, Colombia, México o Ecuador con procesos repetitivos y volumen",
      "Equipos que ya usan un ERP, un CRM u hojas de cálculo y no quieren cambiarlos",
      "Áreas que necesitan una herramienta interna propia, con permisos y registro",
      "Empresas que prefieren un piloto acotado antes de un proyecto grande",
    ],
    startingTitle: "Por dónde suele convenir partir",
    startingItems: [
      "Lectura de facturas electrónicas en XML y carga validada al ERP",
      "Aprobaciones con responsables, plazos y registro de cada decisión",
      "Una aplicación interna que reemplace una hoja de cálculo crítica",
      "Reportes que se arman solos con los datos de tus sistemas",
    ],
    outcomesTitle: "Qué cambia",
    outcomes: [
      {
        title: "Menos digitación",
        description: "Los datos pasan entre sistemas validados, y el equipo revisa solo las excepciones.",
      },
      {
        title: "Procesos con registro",
        description: "Cada paso queda con responsable, fecha y resultado, para revisar qué pasó con cada caso.",
      },
      {
        title: "Herramientas a la medida",
        description: "La aplicación sigue tu proceso, con los permisos y las reglas de tu empresa.",
      },
    ],
    processTitle: "Cómo trabajamos a distancia",
    processSteps: [
      {
        title: "Revisamos el proceso",
        description: "En videollamadas con tu equipo revisamos el proceso, tus sistemas y tus datos, y elegimos el tramo con más trabajo manual.",
      },
      {
        title: "Construimos un primer alcance",
        description: "Implementamos una automatización o el primer módulo de la aplicación con datos reales, accesos definidos y control de errores.",
      },
      {
        title: "Operamos y ampliamos",
        description: "Medimos contra la línea base, documentamos la solución y sumamos procesos o módulos si el resultado lo justifica.",
      },
    ],
    scenarios: [
      {
        title: "Perú: facturas de proveedores al ERP",
        before: "Las facturas llegan por correo con el XML y el PDF. Alguien abre el PDF y copia RUC, montos e IGV al ERP, y los errores aparecen al cerrar el mes.",
        after: "El flujo lee el XML, lo cruza con la orden de compra y lo deja cargado en el ERP. Las diferencias de montos o de proveedor quedan en una bandeja para revisión.",
      },
      {
        title: "Colombia: guías de transporte de varias transportadoras",
        before: "Cada transportadora entrega sus guías y estados en un formato distinto, y el equipo arma una hoja de cálculo para saber qué envío salió, cuál se entregó y cuál tiene problemas.",
        after: "Los datos de todas las transportadoras se consolidan en una sola vista con estados comunes. El equipo atiende solo los envíos con novedades y el cliente recibe avisos en hitos acordados.",
      },
      {
        title: "México: CFDI recibidos y conciliación",
        before: "El equipo descarga los CFDI de proveedores y los cuadra a mano con órdenes de compra y pagos, en hojas de cálculo que cambian cada mes.",
        after: "El flujo lee el XML de cada CFDI, lo cruza con la orden y con el pago, y deja las diferencias listas para que contabilidad las revise.",
      },
      {
        title: "Ecuador: una aplicación para despachos y guías de remisión",
        before: "Los datos del despacho viven en una hoja de cálculo compartida y se copian al sistema de facturación cuando hay que emitir la guía de remisión.",
        after: "Una aplicación interna reúne los datos del despacho, el destinatario y el transporte, los valida y los envía al sistema de facturación electrónica que ya usa la empresa.",
      },
    ],
    guide: [
      {
        heading: "Cómo trabajamos con empresas fuera de Chile",
        paragraphs: [
          "La atención y la implementación se coordinan de forma remota, igual que con empresas de Chile. Las reuniones son por videollamada y los accesos se definen con tu equipo de tecnología, con las políticas de seguridad que fija tu empresa.",
          "Entre Chile y Perú, Colombia, Ecuador o México hay entre una y tres horas de diferencia, según la época del año, así que las reuniones coinciden con el horario laboral de ambos países. La propuesta indica alcance, plazos, entregables, moneda y forma de pago.",
        ],
      },
      {
        heading: "Automatización de procesos: qué conviene automatizar primero",
        paragraphs: [
          "Busca procesos con volumen, pasos que se repiten y datos que ya existen en algún sistema. Antes de elegir herramienta, conviene medir cuánto tiempo toma hoy el proceso, cuántos errores tiene y quién interviene en cada paso.",
        ],
        bullets: [
          "Carga de facturas, órdenes o pedidos desde correo y archivos al ERP.",
          "Aprobaciones de compras, gastos o descuentos con responsables y plazos.",
          "Conciliaciones entre el ERP, el banco y las hojas de cálculo de apoyo.",
          "Reportes semanales o mensuales que hoy se arman a mano.",
        ],
      },
      {
        heading: "Apps a medida: cuándo una hoja de cálculo ya no alcanza",
        paragraphs: [
          "Una aplicación interna conviene cuando varias personas trabajan sobre la misma hoja de cálculo, cuando necesitas permisos distintos por rol o cuando quieres que cada cambio quede registrado. También cuando un proceso necesita un formulario en terreno, un portal para clientes o proveedores, o un panel con los datos de varios sistemas.",
          "La aplicación se conecta con lo que ya usa tu empresa, como el ERP, el CRM o el correo, y puede incluir funciones de IA cuando aportan, por ejemplo leer un documento o clasificar una solicitud. Se parte por un primer módulo y se amplía por etapas.",
        ],
      },
      {
        heading: "Facturas electrónicas: el dato ya viene estructurado",
        paragraphs: [
          "En los cuatro países la factura electrónica es un archivo XML. En Perú, la Resolución de Superintendencia N.° 117-2017/SUNAT establece que la factura, la boleta, las notas y la guía de remisión electrónicas usan XML con el estándar UBL, y que un Operador de Servicios Electrónicos (OSE) comprueba lo emitido. En Colombia, la DIAN indica que la factura electrónica es el XML firmado y validado por ella, y que debe estar validada antes de entregarse al comprador.",
          "En México, el SAT indica que desde el 1 de abril de 2023 la versión 4.0 del CFDI es la única válida. En Ecuador, el SRI publica los esquemas XML de la factura, las notas de crédito y débito, la guía de remisión y el comprobante de retención, y exige firma electrónica para que el comprobante tenga validez.",
          "Por eso, para cargar facturas al ERP conviene leer el XML en vez de digitarlo o aplicar OCR al PDF, y dejar el OCR para lo que llega en papel o imagen. La emisión la sigue haciendo el sistema autorizado que ya usa tu empresa. Revisa con tu contador o asesor tributario cómo aplica cada norma a tu caso.",
        ],
      },
    ],
    faq: [
      {
        question: "¿YAGO trabaja con empresas de Perú, Colombia, México y Ecuador?",
        answer: "Sí. La atención y la implementación se coordinan de forma remota, igual que con empresas de Chile. Partimos por revisar el proceso, tus sistemas y tus datos, y te proponemos un primer alcance acotado.",
      },
      {
        question: "¿Desarrollan aplicaciones a medida para empresas fuera de Chile?",
        answer: "Sí. Desarrollamos aplicaciones internas, portales y paneles conectados a tus procesos, con permisos, pruebas y documentación. Se parte por un primer módulo y se amplía por etapas.",
      },
      {
        question: "¿Pueden conectarse con el ERP y la facturación electrónica de mi país?",
        answer: "Evaluamos las API, archivos y otras interfaces que ofrecen tu ERP y tu proveedor de facturación electrónica. La emisión ante SUNAT, DIAN, SAT o SRI la sigue haciendo el sistema autorizado que ya usas; la automatización prepara, valida y mueve los datos.",
      },
      {
        question: "¿Cómo son las reuniones si estamos en otro país?",
        answer: "Por videollamada. Entre Chile y Perú, Colombia, Ecuador o México hay entre una y tres horas de diferencia según la época del año, así que las reuniones coinciden con el horario laboral de ambos países.",
      },
      {
        question: "¿SADT y AXIS sirven fuera de Chile?",
        answer: "No. SADT trabaja con el Portal Mi DT de la Dirección del Trabajo y AXIS con el Poder Judicial de Chile, así que solo aplican a empresas que operan en Chile. La automatización de procesos y las aplicaciones a medida sí se ofrecen en Latinoamérica.",
      },
    ],
    relatedLinks: [
      { href: "/servicios/automatizacion-procesos", label: "Automatización de procesos" },
      { href: "/servicios/apps-automatizacion", label: "Aplicaciones y software a medida" },
      { href: "/ocr", label: "Digitalización de documentos con OCR" },
      { href: "/soluciones/automatizacion-para-logistica", label: "Automatización para logística" },
    ],
    areaServed: ["Perú", "Colombia", "México", "Ecuador", "Chile"],
    sources: [
      { label: "SUNAT: Resolución de Superintendencia N.° 117-2017/SUNAT", href: "https://www.sunat.gob.pe/legislacion/superin/2017/117-2017.pdf" },
      { label: "DIAN: preguntas frecuentes de facturación electrónica", href: "https://micrositios.dian.gov.co/sistema-de-facturacion-electronica/facturacion-preguntas-frecuentes/" },
      { label: "SAT: formato de factura electrónica (Anexo 20)", href: "https://wwwmatnp.sat.gob.mx/consultas/35025/formato-de-factura-electronica-(anexo-20)" },
      { label: "SRI: facturación electrónica", href: "https://www.sri.gob.ec/facturacion-electronica" },
    ],
  },
];

export function getSeoPageBySlug(slug: string) {
  return SEO_PAGES.find((page) => page.slug === slug);
}

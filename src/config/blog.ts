// src/config/blog.ts
// Blog de YAGO: artículos como data local para SEO.

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  date: string; // ISO
  readTime: string;
  keywords: string[];
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-automatizacion-procesos-ia-pyme",
    title: "Qué es la automatización de procesos con IA y por qué tu PYME la necesita",
    excerpt:
      "La automatización con IA dejó de ser cosa de grandes corporaciones. Te explicamos qué es, cómo funciona y por qué tu PYME puede empezar hoy con inversiones acotadas.",
    image: "/images/blog-automatizacion-ia.png",
    category: "Automatización",
    date: "2026-06-24",
    readTime: "9 min",
    keywords: [
      "automatización de procesos con IA",
      "automatización PYME",
      "inteligencia artificial empresas Chile",
      "automatizar procesos empresa",
    ],
    sections: [
      {
        paragraphs: [
          "Si en tu empresa todavía hay personas copiando datos de un correo a una planilla, revisando PDFs uno por uno o persiguiendo aprobaciones por WhatsApp, este artículo es para ti. La automatización de procesos con IA es, en simple, delegar en software las tareas repetitivas que hoy consumen horas de tu equipo, agregando una capa de inteligencia que permite manejar casos que antes solo podía resolver una persona.",
          "Durante años, automatizar significaba proyectos de software caros y largos, reservados para corporaciones con presupuestos millonarios. Eso cambió. Hoy una PYME chilena puede automatizar su primer proceso en semanas, con una inversión acotada y retorno medible desde el primer mes.",
        ],
      },
      {
        heading: "Qué es exactamente la automatización de procesos con IA",
        paragraphs: [
          "La automatización tradicional sigue reglas fijas: si pasa A, haz B. Funciona muy bien para tareas estructuradas, como mover un archivo de una carpeta a otra o enviar un correo cuando se completa un formulario.",
          "La IA agrega la capacidad de interpretar información no estructurada: leer una factura escaneada y extraer sus datos, entender la intención de un correo, clasificar documentos o resumir un contrato. La combinación de ambas —reglas más interpretación— es lo que permite automatizar procesos completos de principio a fin.",
          "Un ejemplo concreto: antes, para registrar una factura de proveedor, alguien la recibía por correo, la abría, digitaba los datos en el ERP y archivaba el PDF. Con automatización + IA, el sistema detecta el correo, lee la factura con OCR, valida los datos contra la orden de compra y la deja registrada, notificando solo si algo no calza.",
        ],
      },
      {
        heading: "Señales de que tu PYME necesita automatizar",
        paragraphs: [
          "No todas las empresas necesitan automatizar todo. Pero hay señales claras de que un proceso está pidiendo ayuda a gritos:",
        ],
        bullets: [
          "Tu equipo dedica horas cada semana a digitar datos que ya existen en otro formato (PDFs, correos, planillas).",
          "Los errores de digitación generan retrabajo, notas de crédito o problemas con clientes y proveedores.",
          "Las aprobaciones se pierden en cadenas de correo y nadie sabe en qué estado está una solicitud.",
          "Los reportes se arman a mano cada semana o mes, copiando y pegando desde varias fuentes.",
          "Contratar más gente para 'apagar incendios' operativos se volvió la solución por defecto.",
        ],
      },
      {
        heading: "Los beneficios reales (más allá del ahorro de tiempo)",
        paragraphs: [
          "El beneficio más obvio es el ahorro de horas hombre. Pero en nuestra experiencia con empresas de operaciones, backoffice y finanzas, los beneficios más valorados suelen ser otros:",
        ],
        bullets: [
          "Trazabilidad: cada documento y cada aprobación queda registrada, con responsable y fecha.",
          "Menos errores: la IA no se cansa ni se equivoca al copiar un dígito de un RUT o un monto.",
          "Escalabilidad: procesar el doble de facturas no requiere el doble de personas.",
          "Mejor clima laboral: el equipo deja las tareas tediosas y se enfoca en trabajo de mayor valor.",
          "Datos para decidir: al pasar por un sistema, cada proceso genera métricas que antes no existían.",
        ],
      },
      {
        heading: "¿Y no es muy caro para una PYME?",
        paragraphs: [
          "Esta es la objeción más común, y la respuesta corta es no. Herramientas como n8n o Make, combinadas con modelos de IA que se pagan por uso, permiten construir automatizaciones robustas sin licencias corporativas millonarias.",
          "La clave está en partir por el proceso correcto: uno que sea repetitivo, de alto volumen y con reglas relativamente claras. Ese primer 'quick win' suele pagarse solo en pocos meses y financia los siguientes pasos.",
          "En YAGO trabajamos justamente así: una sesión de descubrimiento para identificar el proceso con mejor retorno, un MVP en una a dos semanas y una versión productiva en tres a seis semanas.",
        ],
      },
      {
        heading: "Cómo dar el primer paso",
        paragraphs: [
          "No necesitas tener el proceso documentado ni saber de tecnología. Basta con identificar cuál es la tarea que más tiempo consume en tu operación y conversarlo con un especialista.",
          "Si quieres profundizar, te recomendamos leer sobre cómo calcular el ROI de automatizar tu backoffice y conocer los 5 procesos que toda PYME debería automatizar primero. Y si prefieres ir directo al grano, agenda una sesión de descubrimiento con nosotros: en una conversación de 45 minutos te decimos si tu caso tiene sentido automatizarlo y por dónde partir.",
        ],
      },
    ],
  },
  {
    slug: "ocr-con-ia-facturas-pdfs-sin-digitacion",
    title: "OCR con IA: convierte facturas y PDFs en datos sin digitación manual",
    excerpt:
      "El OCR con IA permite extraer datos de facturas, contratos y formularios escaneados con precisión y a volumen. Así funciona y esto es lo que puede hacer por tu backoffice.",
    image: "/images/blog-ocr-ia.png",
    category: "OCR e IA documental",
    date: "2026-06-10",
    readTime: "8 min",
    keywords: [
      "OCR con IA",
      "OCR facturas Chile",
      "extraer datos de PDF",
      "digitación manual de documentos",
      "procesamiento inteligente de documentos",
    ],
    sections: [
      {
        paragraphs: [
          "Cada día, en miles de empresas, alguien abre un PDF, lee un dato y lo escribe en otro sistema. Factura por factura, contrato por contrato, formulario por formulario. Es trabajo necesario, pero es exactamente el tipo de trabajo que una máquina hace mejor, más rápido y sin errores.",
          "El OCR con IA (también llamado procesamiento inteligente de documentos o IDP) es la tecnología que convierte esos documentos en datos estructurados y listos para usar. En este artículo te explicamos cómo funciona, en qué se diferencia del OCR tradicional y qué procesos puedes destrabar con él.",
        ],
      },
      {
        heading: "OCR tradicional vs. OCR con IA",
        paragraphs: [
          "El OCR (reconocimiento óptico de caracteres) existe hace décadas: toma una imagen y la convierte en texto. El problema es que el texto plano por sí solo no sirve de mucho. Saber que en algún lugar del documento dice '1.245.890' no te dice si eso es el monto total, el neto o el número de folio.",
          "El OCR con IA da el paso siguiente: entiende el documento. Sabe que ese número es el total de la factura, que el RUT que aparece arriba es del emisor y que la fecha del costado es la de vencimiento. Y lo hace aunque cada proveedor use un formato distinto, el documento venga escaneado torcido o sea una foto tomada con celular.",
        ],
        bullets: [
          "OCR tradicional: extrae texto plano. Requiere plantillas por cada formato de documento.",
          "OCR con IA: extrae datos estructurados (campos con significado) de formatos variables, sin plantillas.",
          "Bonus: la IA puede validar los datos extraídos contra otras fuentes, como órdenes de compra o bases de datos internas.",
        ],
      },
      {
        heading: "Casos de uso típicos en empresas chilenas",
        paragraphs: [
          "Estos son los procesos documentales que más vemos en operaciones y backoffice, y donde el OCR con IA tiene impacto inmediato:",
        ],
        bullets: [
          "Facturas de proveedores: extracción de folio, RUT, montos, fechas e ítems, con validación contra OC.",
          "Contratos y anexos laborales: extracción de datos clave para registro y cumplimiento.",
          "Formularios y fichas: digitalización de formularios en papel o PDF (fichas de clientes, postulaciones, encuestas).",
          "Carnets y documentos de identidad: verificación y registro de datos para onboarding.",
          "Respaldos y rendiciones: boletas y comprobantes que hoy se revisan y digitan a mano.",
        ],
      },
      {
        heading: "¿Qué precisión se puede esperar?",
        paragraphs: [
          "Con los modelos actuales, la extracción de campos en documentos razonablemente legibles supera consistentemente el 95% de precisión. Pero el diseño correcto no busca el 100% automático: busca que el sistema sepa cuándo no está seguro.",
          "La arquitectura que recomendamos incluye validación humana selectiva (human-in-the-loop): los documentos con baja confianza o con datos que no calzan pasan a revisión de una persona, y el resto fluye directo. Así, en vez de revisar 500 facturas, tu equipo revisa las 20 que realmente lo necesitan.",
        ],
      },
      {
        heading: "Cómo se implementa en la práctica",
        paragraphs: [
          "Un proyecto de OCR con IA bien acotado no es un proyecto largo. El flujo típico que implementamos en YAGO se ve así:",
        ],
        bullets: [
          "Ingesta: los documentos llegan por correo, carpeta compartida, WhatsApp o carga directa.",
          "Extracción: la IA lee el documento y extrae los campos definidos.",
          "Validación: se aplican reglas de negocio y cruces con otros sistemas.",
          "Registro: los datos quedan en tu ERP, planilla o base de datos, con el documento original adjunto.",
          "Trazabilidad: cada documento tiene estado, historial y responsable visible.",
        ],
      },
      {
        heading: "El siguiente paso",
        paragraphs: [
          "Si en tu empresa hay un flujo de documentos que consume horas de digitación, es casi seguro que se puede automatizar con buen retorno. En YAGO tenemos OCR como app lista para usar, además de implementaciones a medida cuando el proceso lo requiere.",
          "Puedes ver una demo en nuestra página de OCR para empresas, o agendar una sesión para revisar tu caso concreto. También te puede interesar nuestro artículo sobre cómo calcular el ROI de automatizar tu backoffice.",
        ],
      },
    ],
  },
  {
    slug: "como-calcular-roi-automatizar-backoffice",
    title: "Cómo calcular el ROI de automatizar tu backoffice",
    excerpt:
      "Antes de automatizar, conviene hacer números. Te mostramos un método simple para estimar el retorno de automatizar procesos de backoffice, con ejemplos y errores comunes.",
    image: "/images/blog-roi-automatizacion.png",
    category: "Gestión y ROI",
    date: "2026-05-28",
    readTime: "10 min",
    keywords: [
      "ROI automatización",
      "retorno automatización procesos",
      "costo automatizar backoffice",
      "business case automatización",
    ],
    sections: [
      {
        paragraphs: [
          "La pregunta correcta antes de automatizar no es '¿qué tecnología uso?' sino '¿cuánto me cuesta hoy este proceso y cuánto me costaría automatizado?'. La buena noticia es que calcular el ROI de una automatización de backoffice es más simple de lo que parece, y hacerlo bien te ayuda a priorizar los procesos correctos.",
          "En este artículo te compartimos el método que usamos en YAGO en las sesiones de descubrimiento, con un ejemplo numérico completo.",
        ],
      },
      {
        heading: "Paso 1: calcula el costo actual del proceso",
        paragraphs: [
          "El costo de un proceso manual tiene tres componentes. El primero y más visible son las horas hombre: cuántas horas al mes dedica el equipo a esa tarea, multiplicadas por el costo hora de cada persona (sueldo bruto más costos de empleador, dividido por horas mensuales).",
          "El segundo es el costo de los errores: notas de crédito, pagos duplicados, multas por atrasos, retrabajo. Suele estimarse como un porcentaje de los casos procesados por un costo promedio por error.",
          "El tercero es el costo de oportunidad: qué deja de hacer el equipo por estar digitando. Este es el más difícil de cuantificar, pero muchas veces es el más relevante.",
        ],
        bullets: [
          "Costo HH = horas mensuales dedicadas × costo hora del equipo",
          "Costo de errores = casos con error al mes × costo promedio por error",
          "Costo de oportunidad = valor del trabajo que no se está haciendo",
        ],
      },
      {
        heading: "Paso 2: estima el costo de automatizar",
        paragraphs: [
          "Una automatización tiene dos tipos de costos: la implementación inicial (diseño, construcción, integraciones y pruebas) y la operación mensual (licencias de herramientas, consumo de IA por uso, mantención y soporte).",
          "Para un proceso acotado de backoffice —por ejemplo, la recepción y registro de facturas de proveedores— la implementación suele estar en el rango de un proyecto de semanas, no meses, y la operación mensual es una fracción del costo de las horas hombre que reemplaza.",
        ],
      },
      {
        heading: "Paso 3: un ejemplo con números",
        paragraphs: [
          "Imaginemos una empresa que procesa 800 facturas de proveedores al mes. Una persona dedica aproximadamente 6 minutos por factura entre abrir el correo, digitar los datos y archivar: son 80 horas al mes.",
          "Con un costo hora de $12.000 CLP, el costo directo es de $960.000 mensuales. Sumemos errores: si el 3% de las facturas tiene algún error de digitación que cuesta en promedio $15.000 corregir, agregamos $360.000 al mes. Total: alrededor de $1.320.000 mensuales, más de $15 millones al año.",
          "Si la automatización cuesta el equivalente a 3 meses de ese gasto en implementación y un 15% mensual en operación, el proyecto se paga en menos de 5 meses y ahorra más de $10 millones el primer año. Y eso sin contar el costo de oportunidad ni la escalabilidad.",
        ],
      },
      {
        heading: "Los errores más comunes al calcular ROI",
        paragraphs: [
          "Hemos visto business cases fallar por errores evitables. Los más frecuentes:",
        ],
        bullets: [
          "Ignorar los casos borde: si el 10% de los casos requiere intervención humana, inclúyelo en el cálculo (con human-in-the-loop sigue habiendo ahorro).",
          "Asumir 100% de automatización desde el día uno: los primeros meses hay ajustes y el ahorro es progresivo.",
          "No contar el costo de errores actuales: suele ser el argumento más fuerte a favor de automatizar.",
          "Elegir el proceso equivocado: automatizar un proceso de bajo volumen o muy ambiguo destruye el ROI. Parte por volumen alto y reglas claras.",
          "Olvidar la mantención: toda automatización necesita monitoreo y ajustes; presupuéstalo desde el inicio.",
        ],
      },
      {
        heading: "Más allá del ahorro: los KPIs que conviene seguir",
        paragraphs: [
          "El ROI financiero justifica el proyecto, pero para gestionar la automatización en el tiempo recomendamos seguir métricas operativas: tiempo de ciclo (cuánto demora un caso de punta a punta), tasa de automatización (% de casos sin intervención humana), tasa de error y volumen procesado.",
          "Estas métricas, además, suelen ser un subproducto gratuito de automatizar: al pasar el proceso por un sistema, los datos quedan disponibles por primera vez.",
        ],
      },
      {
        heading: "Hagamos números juntos",
        paragraphs: [
          "Si quieres aterrizar estos cálculos a tu operación, en la sesión de descubrimiento de YAGO hacemos exactamente esto: mapeamos el proceso, levantamos los números y te entregamos una estimación de ROI antes de escribir una línea de código.",
          "También te puede servir nuestro artículo sobre los 5 procesos que toda PYME debería automatizar primero para elegir bien por dónde partir.",
        ],
      },
    ],
  },
  {
    slug: "agentes-ia-empresas-casos-uso-operaciones",
    title: "Agentes de IA para empresas: casos de uso reales en operaciones",
    excerpt:
      "Los agentes de IA van más allá del chatbot: ejecutan tareas, consultan sistemas y toman decisiones acotadas. Estos son los casos de uso que ya funcionan en operaciones.",
    image: "/images/blog-agentes-ia.png",
    category: "Agentes de IA",
    date: "2026-05-12",
    readTime: "9 min",
    keywords: [
      "agentes de IA empresas",
      "agentes IA operaciones",
      "asistentes IA corporativos",
      "IA para backoffice",
    ],
    sections: [
      {
        paragraphs: [
          "El 2023 fue el año de los chatbots. Pero un chatbot que solo conversa tiene un techo bajo: responde preguntas y ahí queda. Los agentes de IA son el paso siguiente: sistemas que además de entender lenguaje natural pueden ejecutar acciones, consultar tus sistemas internos y completar tareas de principio a fin.",
          "En este artículo dejamos el hype de lado y revisamos casos de uso de agentes que ya funcionan en operaciones reales de empresas, con sus alcances y sus límites.",
        ],
      },
      {
        heading: "Qué es (y qué no es) un agente de IA",
        paragraphs: [
          "Un agente de IA es un sistema que recibe un objetivo, decide qué pasos tomar y usa herramientas para ejecutarlos: buscar en una base de datos, llamar una API, enviar un correo, crear un registro en el ERP. La diferencia con un chatbot es la capacidad de actuar; la diferencia con una automatización tradicional es la flexibilidad para manejar casos no previstos.",
          "Lo que un agente no es: un empleado digital autónomo al que le entregas el departamento completo. Los agentes que funcionan en producción tienen alcances acotados, permisos definidos y supervisión. La autonomía total es un mal objetivo; la autonomía útil y controlada es el estándar real.",
        ],
      },
      {
        heading: "Caso 1: soporte interno que resuelve, no solo responde",
        paragraphs: [
          "El caso más maduro. Un agente conectado a la documentación interna, políticas y sistemas de la empresa puede responder consultas del equipo ('¿cuántos días de vacaciones me quedan?', '¿cuál es el procedimiento para rendir gastos?') y además ejecutar la acción: generar el certificado, crear el ticket, iniciar el flujo de rendición.",
          "El impacto se nota rápido en áreas como RRHH y TI, donde un porcentaje alto de las consultas son repetitivas y tienen respuesta en algún documento que nadie encuentra.",
        ],
      },
      {
        heading: "Caso 2: gestión documental inteligente",
        paragraphs: [
          "Combinando OCR con IA y capacidad de acción, un agente puede recibir documentos por correo o WhatsApp, clasificarlos, extraer sus datos, validarlos contra sistemas internos y registrarlos, escalando a una persona solo los casos dudosos.",
          "Es la evolución natural del OCR: en vez de un flujo fijo, un agente que entiende qué tipo de documento llegó y qué hacer con él.",
        ],
      },
      {
        heading: "Caso 3: seguimiento y coordinación de procesos",
        paragraphs: [
          "Un uso menos vistoso pero de altísimo valor: agentes que monitorean procesos y persiguen a los responsables. Aprobaciones pendientes, documentos vencidos, tareas atrasadas: el agente detecta el cuello de botella, notifica al responsable por el canal correcto y escala si no hay respuesta.",
          "Este 'project manager digital' elimina una de las tareas más desgastantes de operaciones: perseguir gente.",
        ],
      },
      {
        heading: "Caso 4: prospección y calificación de leads",
        paragraphs: [
          "En el área comercial, agentes que investigan empresas, califican leads según el perfil de cliente ideal, preparan borradores de correos personalizados y mantienen el CRM al día. La persona vendedora decide y cierra; el agente elimina las horas de trabajo administrativo previo.",
        ],
      },
      {
        heading: "Las claves para que un agente funcione en producción",
        paragraphs: [
          "La diferencia entre una demo entretenida y un agente confiable en producción está en la ingeniería alrededor del modelo:",
        ],
        bullets: [
          "Alcance acotado: un agente que hace pocas cosas bien supera siempre a uno que intenta hacerlo todo.",
          "Permisos mínimos: el agente solo accede a lo que necesita, con credenciales auditables.",
          "Validación humana en decisiones sensibles: pagos, despidos y compromisos con clientes siempre pasan por una persona.",
          "Trazabilidad total: cada acción del agente queda registrada con contexto y justificación.",
          "Métricas de calidad: tasa de resolución, escalamientos y errores se miden desde el día uno.",
        ],
      },
      {
        heading: "¿Tiene sentido un agente para tu operación?",
        paragraphs: [
          "Si tu equipo dedica horas a responder consultas repetitivas, procesar documentos o perseguir aprobaciones, probablemente sí. En YAGO diseñamos e implementamos agentes con alcance realista y ROI medible; puedes conocer nuestro proceso de trabajo o agendar una sesión de descubrimiento para evaluar tu caso.",
        ],
      },
    ],
  },
  {
    slug: "5-procesos-pyme-automatizar-primero",
    title: "5 procesos que toda PYME debería automatizar primero",
    excerpt:
      "No todos los procesos valen lo mismo al automatizar. Estos cinco tienen la mejor combinación de volumen, simpleza y retorno para dar el primer paso con éxito.",
    image: "/images/blog-procesos-pyme.png",
    category: "Automatización",
    date: "2026-04-22",
    readTime: "8 min",
    keywords: [
      "qué procesos automatizar",
      "automatización para PYMES",
      "primeros procesos automatizar",
      "quick wins automatización",
    ],
    sections: [
      {
        paragraphs: [
          "El error más común al empezar a automatizar no es técnico: es elegir mal el primer proceso. Un primer proyecto demasiado ambicioso o demasiado ambiguo se alarga, frustra al equipo y quema la confianza en la automatización por años.",
          "El primer proceso ideal tiene tres características: volumen alto (pasa muchas veces al mes), reglas relativamente claras y dolor visible (alguien lo sufre todas las semanas). Con ese filtro, estos son los cinco procesos que recomendamos mirar primero en una PYME.",
        ],
      },
      {
        heading: "1. Recepción y registro de facturas de proveedores",
        paragraphs: [
          "El clásico por una razón: es puro trabajo mecánico de alto volumen. Facturas que llegan por correo, se abren, se digitan en el ERP o la planilla y se archivan. Con OCR + IA, el flujo completo se automatiza y tu equipo solo revisa las excepciones.",
          "Señal de que es tu caso: alguien en administración dedica bloques de horas fijas cada semana solo a 'meter facturas'.",
        ],
      },
      {
        heading: "2. Aprobaciones internas (compras, gastos, permisos)",
        paragraphs: [
          "Solicitudes que viajan por correo o WhatsApp, se pierden, se aprueban sin registro y nadie sabe en qué estado están. Un flujo de aprobación automatizado define responsables, plazos y recordatorios automáticos, con historial completo.",
          "El beneficio no es solo velocidad: es trazabilidad. Cuando llega la auditoría o hay un problema, el historial está a un clic.",
        ],
      },
      {
        heading: "3. Reportes operativos recurrentes",
        paragraphs: [
          "Si cada lunes alguien arma 'el Excel' copiando datos de tres sistemas distintos, ese reporte es un candidato perfecto. La automatización consolida las fuentes, genera el reporte y lo distribuye, siempre a tiempo y sin errores de copiado.",
          "Bonus: al automatizar el reporte, suele descubrirse que la mitad de las columnas no las mira nadie. Automatizar también ordena.",
        ],
      },
      {
        heading: "4. Onboarding de clientes o proveedores",
        paragraphs: [
          "Recolectar documentos, validar datos, crear registros en sistemas, enviar accesos y correos de bienvenida. Es un proceso con pasos claros que hoy depende de que una persona se acuerde de cada uno.",
          "Automatizado, cada nuevo cliente o proveedor pasa por el mismo camino, sin pasos olvidados, y el equipo solo interviene cuando falta algo.",
        ],
      },
      {
        heading: "5. Respuestas a consultas frecuentes (internas o de clientes)",
        paragraphs: [
          "Estados de pedido, políticas, procedimientos, requisitos: consultas que se responden decenas de veces con la misma información. Un asistente con IA conectado a tu información responde al instante y escala a una persona los casos que lo requieren.",
          "Funciona igual de bien hacia adentro (RRHH, TI, operaciones) que hacia afuera (clientes y proveedores).",
        ],
      },
      {
        heading: "Cómo elegir entre estos cinco",
        paragraphs: [
          "Si más de uno te hizo sentido, usa esta regla simple: parte por el que tenga mayor volumen mensual y reglas más claras. Ese balance maximiza la probabilidad de éxito y el retorno del primer proyecto.",
          "Y si quieres una recomendación específica para tu operación, en la sesión de descubrimiento de YAGO evaluamos tus procesos y te entregamos un backlog priorizado con estimación de ROI. También te recomendamos leer cómo calcular el ROI de automatizar tu backoffice antes de decidir.",
        ],
      },
    ],
  },
  {
    slug: "n8n-make-herramientas-elegir-stack-automatizacion",
    title: "n8n, Make y otras herramientas: cómo elegir tu stack de automatización",
    excerpt:
      "n8n, Make, Zapier, código a medida... el ecosistema de automatización es amplio y confuso. Esta guía práctica te ayuda a elegir el stack correcto según tu caso.",
    image: "/images/blog-herramientas.png",
    category: "Herramientas",
    date: "2026-04-08",
    readTime: "10 min",
    keywords: [
      "n8n vs Make",
      "herramientas de automatización",
      "stack automatización empresa",
      "Zapier alternativas",
      "n8n empresas",
    ],
    sections: [
      {
        paragraphs: [
          "Una de las primeras preguntas al automatizar es qué herramienta usar. Y la respuesta honesta es: depende del proceso, del volumen y de quién lo va a mantener. En esta guía repasamos las opciones principales del mercado —las que usamos a diario en proyectos reales— con sus fortalezas y sus límites.",
        ],
      },
      {
        heading: "Las categorías del ecosistema",
        paragraphs: [
          "Antes de comparar marcas, conviene entender las categorías:",
        ],
        bullets: [
          "Plataformas no-code/low-code (Zapier, Make): conectan apps con interfaz visual, mínima curva de entrada.",
          "Plataformas open-source orquestadoras (n8n): interfaz visual + capacidad de código, auto-hospedables.",
          "Código a medida (scripts, servicios, funciones cloud): máxima flexibilidad, requiere desarrollo.",
          "Capa de IA (OpenAI, Google Vertex, etc.): se integra con cualquiera de las anteriores para tareas de interpretación.",
        ],
      },
      {
        heading: "Zapier: el punto de entrada",
        paragraphs: [
          "Zapier es la puerta de entrada clásica: miles de integraciones listas y flujos que se arman en minutos. Es ideal para automatizaciones simples y personales (cuando llegue este correo, crea esta tarea).",
          "Sus límites aparecen con el volumen y la complejidad: el modelo de precios por tarea se encarece rápido, y los flujos con lógica condicional compleja se vuelven difíciles de mantener.",
        ],
      },
      {
        heading: "Make: potencia visual a buen precio",
        paragraphs: [
          "Make (ex-Integromat) ofrece más potencia que Zapier a menor costo: flujos visuales con ramificaciones, iteraciones y manejo de errores decente. Es una buena opción intermedia para PYMES con procesos de complejidad media.",
          "Su límite: sigue siendo una plataforma cerrada, con costos que escalan por operaciones, y para lógica muy específica terminas peleando contra la herramienta.",
        ],
      },
      {
        heading: "n8n: nuestro caballo de batalla",
        paragraphs: [
          "n8n combina lo mejor de dos mundos: interfaz visual para armar flujos rápido y nodos de código cuando la lógica lo exige. Al ser open-source y auto-hospedable, los costos no escalan por operación y los datos pueden quedarse en tu infraestructura, algo relevante para información sensible.",
          "Para procesos de backoffice con volumen —facturas, documentos, integraciones con ERP— es nuestra recomendación por defecto. Su curva de aprendizaje es algo mayor que Make, pero el techo es mucho más alto.",
        ],
      },
      {
        heading: "¿Y cuándo conviene código a medida?",
        paragraphs: [
          "Cuando el proceso es el corazón de tu negocio, el volumen es muy alto o necesitas una experiencia de usuario propia (un panel para tu equipo, una app para clientes), el código a medida gana. Frameworks modernos permiten construir aplicaciones robustas en semanas, no meses.",
          "En la práctica, la mejor arquitectura suele ser híbrida: n8n orquestando integraciones y flujos, servicios a medida para la lógica de negocio crítica, y una capa de IA para interpretación de documentos y lenguaje natural.",
        ],
      },
      {
        heading: "Criterios para decidir (checklist rápido)",
        paragraphs: [
          "Nuestro checklist al elegir stack en cada proyecto:",
        ],
        bullets: [
          "Volumen mensual: bajo → Zapier/Make; alto → n8n o código.",
          "Sensibilidad de los datos: alta → auto-hospedado (n8n) o infraestructura propia.",
          "Complejidad de la lógica: alta → n8n con código o desarrollo a medida.",
          "Quién mantiene: equipo no técnico → Make; equipo técnico o partner → n8n/código.",
          "Necesidad de interfaz propia: sí → app a medida sobre la capa de automatización.",
        ],
      },
      {
        heading: "No te cases con la herramienta",
        paragraphs: [
          "La herramienta es un medio. Lo que importa es que el proceso quede automatizado, con trazabilidad, control de errores y alguien responsable de mantenerlo. Un buen partner te recomienda el stack según tu caso, no según lo que le conviene vender.",
          "En YAGO trabajamos con todo este ecosistema y elegimos según el proceso. Si estás evaluando por dónde partir, conversemos: en una sesión de descubrimiento te recomendamos el stack y el primer quick win para tu operación.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getLatestPosts(count = 3): BlogPost[] {
  return [...BLOG_POSTS]
    .sort((a, b) => (a.date < b.date ? 1 : -1))
    .slice(0, count);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

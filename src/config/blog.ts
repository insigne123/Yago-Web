// src/config/blog.ts
// Artículos del blog de YAGO orientados a SEO sobre automatización con IA.

import { EDITORIAL_AUTHOR } from "@/config/team";

export type BlogSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: { columns: string[]; rows: string[][] };
  links?: { label: string; href: string }[];
};

export type BlogPost = {
  slug: string;
  title: string;
  /** Título para Google si el título visible es muy largo (máx. ~60 caracteres). */
  seoTitle?: string;
  description: string; // meta description SEO
  excerpt: string; // resumen para la tarjeta
  image: string;
  category: string;
  date: string; // ISO
  modifiedDate?: string; // ISO
  readingTime: string;
  keywords: string[];
  intro: string;
  sections: BlogSection[];
  conclusion: string;
  sources?: { title: string; url: string }[];
  /** Producto relacionado que se muestra al final del artículo. */
  product?: { name: string; href: string; text: string };
  service?: { name: string; href: string; text: string };
  relatedSlugs?: string[];
  resource?: { label: string; description: string; href: string; service: string };
};

export const BLOG_AUTHOR = {
  ...EDITORIAL_AUTHOR,
  type: "Person" as const,
  url: `/nosotros#${EDITORIAL_AUTHOR.slug}`,
};

export const BLOG_COLLECTIONS = [
  { id: "automatizacion", title: "Automatización y retorno", description: "Priorizar un proceso, comparar proveedores y evaluar herramientas y costo.", slugs: ["elegir-proveedor-automatizacion-ia-chile", "que-es-la-automatizacion-de-procesos-con-ia", "como-calcular-el-roi-de-automatizar-procesos", "automatizacion-para-pymes-por-donde-partir", "herramientas-automatizacion-n8n-make-ia"] },
  { id: "integracion", title: "Integración, aplicaciones y agentes", description: "Distinguir qué construir, cómo conectarlo y qué resultado comprobar.", slugs: ["integrar-ia-procesos-empresa", "apps-ia-desarrollo-asistido-diferencias", "agentes-de-ia-para-empresas"] },
  { id: "documentos", title: "OCR y documentos", description: "Extraer datos, medir calidad y preparar una integración documental.", slugs: ["evaluar-piloto-ocr-precision-costos", "ocr-con-ia-digitalizar-documentos"] },
  { id: "laboral", title: "RRHH y Portal Mi DT", description: "Entender registros, plazos y certificados laborales de Chile.", slugs: ["registro-contratos-terminos-mi-dt-plazos", "certificados-f30-y-f30-1-diferencias"] },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "integrar-ia-procesos-empresa",
    modifiedDate: "2026-10-26",
    title: "Cómo integrar IA en los procesos de una empresa sin reemplazar sus sistemas",
    seoTitle: "Integración de IA en empresas: cómo empezar | YAGO Chile",
    description: "Cómo implementar IA conectada a ERP, CRM, documentos y procesos: elegir una tarea, revisar datos y accesos, evaluar un piloto y definir su operación.",
    excerpt: "Una ruta práctica para pasar de una idea de IA a una integración evaluable sobre los sistemas de tu empresa.",
    image: "/images/blog-automatizacion-ia.png",
    category: "Integración de IA",
    date: "2026-10-03",
    readingTime: "5 min",
    keywords: ["integración de IA en empresas", "implementar inteligencia artificial", "IA en procesos empresariales", "integrar IA con ERP", "integración de IA Chile"],
    intro: "Integrar IA en una empresa significa conectar una capacidad inteligente con una tarea, datos y un destino operativo. Puede ser clasificar solicitudes, extraer campos de un documento o consultar conocimiento interno. El punto de partida es el proceso que necesita mejorar: sus sistemas actuales pueden seguir siendo la fuente y el destino de la información.",
    sections: [
      {
        heading: "Elegir una tarea que permita comprobar el resultado",
        paragraphs: ["Una primera integración necesita una entrada identificable, un responsable y un resultado que se pueda evaluar. Por ejemplo: leer una solicitud y proponer su categoría antes de crear un ticket. Conviene registrar el volumen, el tiempo de intervención humana y los errores del proceso actual.", "Para pasos con reglas estables, como validar un formato o sumar montos, una automatización convencional puede ser suficiente. La IA aporta cuando la tarea necesita interpretar texto, documentos o información variable. Ambas pueden convivir en un mismo flujo."],
      },
      {
        heading: "Revisar cómo se conectan los datos y sistemas",
        paragraphs: ["Antes de elegir un modelo, identifica dónde está la información, quién puede utilizarla y cómo se registra el resultado. Una integración con ERP o CRM depende de sus interfaces, accesos y restricciones: nombrar un sistema no demuestra que cualquier conexión esté disponible."],
        table: {
          columns: ["Elemento", "Qué definir"],
          rows: [["Entrada", "Correo, documento, formulario o registro de sistema"], ["Conexión", "API, webhook, archivo u otra interfaz autorizada"], ["Salida", "Campos, categoría, respuesta o propuesta de acción"], ["Validación", "Formato esperado, reglas y revisión de excepciones"], ["Destino", "ERP, CRM, aplicación o responsable que usa el resultado"]],
        },
      },
      {
        heading: "Preparar un piloto con ejemplos representativos",
        paragraphs: ["La muestra debe incluir formatos habituales, datos incompletos y casos ambiguos. Reserva ejemplos para evaluar el flujo después de configurarlo; probar únicamente con los mismos documentos usados para ajustar la solución puede dar una impresión demasiado favorable.", "Define qué cuenta como una respuesta correcta. En clasificación, se compara con categorías revisadas. En extracción, se comprueba cada campo. En un asistente, se revisa si la respuesta está sustentada en una fuente pertinente. El criterio se acuerda con quienes conocen el proceso."],
      },
      {
        heading: "Conectar el piloto con la operación real",
        paragraphs: ["Un resultado útil en una demostración todavía necesita un destino, reglas y manejo de fallos. El flujo debe contemplar registros duplicados, indisponibilidad de sistemas, errores de formato y casos que requieren una persona.", "Documenta qué se ejecuta automáticamente, qué queda pendiente de aprobación y cómo se reintenta una tarea. También define quién revisa las incidencias y cómo se actualizan las fuentes o la configuración."],
      },
      {
        heading: "Ejemplo de alcance: una factura conectada al ERP",
        paragraphs: ["Imagina una factura que llega en PDF. La extracción identifica proveedor, folio y monto; una validación comprueba campos obligatorios y duplicados. Si falta la orden de compra, el registro queda pendiente para que una persona complete y apruebe el dato antes de continuar. Este es un ejemplo de diseño, no un caso de cliente ni un resultado medido.", "El criterio de aceptación debe incluir lo que sucede cuando la conexión al ERP falla: conservar el estado y la evidencia, evitar crear dos registros al reintentar y mostrar qué necesita revisión. La interfaz y el comportamiento concreto se acuerdan con el responsable del sistema."],
        table: { columns: ["Situación de prueba", "Resultado que se debería comprobar"], rows: [["Falta un dato obligatorio", "El registro queda pendiente y se identifica el dato que falta"], ["La factura ya fue registrada", "La validación evita una carga duplicada"], ["El destino no responde", "La tarea conserva su estado y permite un reintento controlado"], ["Una persona corrige el dato", "La revisión queda registrada antes de continuar"]] },
        links: [{ label: "Cómo evaluar extracción, excepciones y costo de OCR", href: "/blog/evaluar-piloto-ocr-precision-costos" }, { label: "Qué implementa Yago SpA y cómo se acuerdan los entregables", href: "/nosotros" }],
      },
      {
        heading: "Evaluar el costo completo de implementar IA",
        paragraphs: ["La propuesta debería distinguir implementación, consumo de modelos, infraestructura y soporte cuando corresponda. El costo por uso puede depender del tamaño de los documentos, número de consultas, modelo y volumen de operación.", "Compara tiempo de intervención humana antes y después, costo operativo y resultados de calidad con períodos y volúmenes equivalentes. Las proyecciones se identifican como estimaciones hasta medir la operación. El marco AI RMF de NIST es una referencia voluntaria para considerar diseño, uso y evaluación; no acredita por sí mismo una implementación."],
        bullets: ["Proceso, responsable y línea base definidos.", "Fuentes, accesos y destino revisados.", "Piloto con criterios de aceptación y excepciones.", "Costos, monitoreo y mantenimiento explicados."],
      },
    ],
    conclusion: "Para integrar IA en una empresa, parte por una tarea evaluable y conecta sus datos con un resultado que la operación pueda usar. Revisa interfaces, prueba con ejemplos representativos y define validaciones, costo y mantenimiento antes de ampliar el alcance.",
    sources: [{ title: "NIST: AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
    service: { name: "Integración de IA", href: "/servicios/integracion-ia", text: "YAGO revisa tu proceso, fuentes e interfaces para definir una integración de IA con un piloto evaluable y una operación documentada." },
    relatedSlugs: ["elegir-proveedor-automatizacion-ia-chile", "apps-ia-desarrollo-asistido-diferencias", "agentes-de-ia-para-empresas"],
  },
  {
    slug: "elegir-proveedor-automatizacion-ia-chile",
    title: "Cómo elegir un proveedor de automatización e IA en Chile",
    seoTitle: "Proveedor de automatización e IA en Chile: cómo elegir | YAGO",
    description: "Qué preguntar a una empresa de automatización e IA en Chile: alcance, integraciones, evidencia, costos, pruebas, documentación y soporte de un proyecto.",
    excerpt: "Criterios para comparar propuestas de implementación y entender qué recibirá tu empresa.",
    image: "/images/blog-procesos-pyme.png",
    category: "Automatización empresarial",
    date: "2026-10-03",
    readingTime: "4 min",
    keywords: ["empresa de automatización Chile", "proveedor de automatización con IA", "implementación IA empresas Chile", "automatización empresarial"],
    intro: "Elegir un proveedor de automatización e IA requiere comparar cómo resolverá un proceso y cómo lo dejará operando. Una propuesta útil explica entradas, sistemas, entregables, validación y costo. Esta guía ofrece criterios para conversar con proveedores en Chile y evaluar alternativas según la necesidad de tu empresa.",
    sections: [
      {
        heading: "Describir el problema antes de solicitar una propuesta",
        paragraphs: ["Prepara un ejemplo del trabajo actual, volumen mensual, sistemas y responsables. Explica qué falla o consume tiempo: digitación, esperas, revisión de documentos, coordinación o falta de una aplicación. Con esa información se puede evaluar una automatización, una integración de IA o desarrollo a medida.", "El proveedor debería distinguir qué puede resolver con reglas y conexiones y dónde necesita IA. Pedir que todos los pasos utilicen IA puede añadir complejidad sin mejorar el resultado."],
      },
      {
        heading: "Comparar alcance y pruebas, además del precio",
        paragraphs: ["Solicita entregables y criterios de aceptación concretos. Si una propuesta habla de integrar un ERP, pregunta qué interfaz usará, qué accesos necesita y qué debe aportar el proveedor del sistema. Una demostración general no valida esas dependencias."],
        table: {
          columns: ["Aspecto", "Pregunta para el proveedor", "Evidencia útil"],
          rows: [["Alcance", "¿Qué entradas, pasos y salidas incluye?", "Diagrama y entregables"], ["Integraciones", "¿Qué interfaces y accesos necesita?", "Revisión de APIs y dependencias"], ["Calidad", "¿Cómo se aceptará el resultado?", "Piloto, muestra y pruebas"], ["Operación", "¿Cómo se detectan y resuelven fallos?", "Registros, responsables y procedimiento"], ["Continuidad", "¿Qué recibe la empresa y cómo se mantiene?", "Documentación y condiciones de soporte"]],
        },
      },
      {
        heading: "Leer casos y reseñas con contexto",
        paragraphs: ["Un caso debería explicar qué se implementó, para qué empresa o tipo de operación y cómo se comprobó el resultado. Si publica horas ahorradas, es importante conocer volumen, período y tiempo de intervención humana comparado. Una meta o una estimación puede ser útil cuando está identificada como tal.", "Las reseñas ayudan a conocer la experiencia con comunicación, entrega y soporte. Revisa fecha, tipo de proyecto y fuente. Puedes pedir referencias pertinentes a tu necesidad: experiencia en una automatización específica no demuestra por sí sola experiencia en cualquier desarrollo."],
      },
      {
        heading: "Entender el costo de implementación y operación",
        paragraphs: ["Pregunta qué incluye el precio, moneda, impuestos aplicables y vigencia de la propuesta. En Chile puedes recibir cotizaciones en pesos o UF; lo importante es poder comparar los mismos componentes y condiciones.", "Identifica licencias, consumo de modelos, infraestructura, soporte y cambios fuera del alcance. Una tarifa inicial pequeña puede corresponder a un piloto acotado, mientras otra oferta incluye operación o mantenimiento. Pide esa distinción antes de comparar totales."],
      },
      {
        heading: "Acordar el primer hito y los responsables",
        paragraphs: ["Un proyecto avanza mejor cuando el primer hito tiene entradas, salidas y una persona que puede validarlo. El calendario también depende de datos, accesos e intervención del equipo del cliente; conviene dejar esas dependencias explícitas.", "Al cerrar el hito, revisa las pruebas, excepciones y documentación. Después decide si el resultado justifica ampliar el alcance. Esta evaluación gradual permite aprender del proceso real y ajustar la propuesta."],
        bullets: ["Problema y responsables claros.", "Entregables, dependencias y criterios de aceptación.", "Casos o referencias relacionados con el servicio.", "Costo total y condiciones de continuidad.", "Primer hito comprobable por el equipo del cliente."],
      },
    ],
    conclusion: "Para elegir una empresa de automatización e IA en Chile, compara alcance, interfaces, evidencia, pruebas y continuidad. La mejor propuesta para tu caso es la que permite entender qué recibes, cómo se valida y qué necesita para seguir operando.",
    sources: [{ title: "NIST: diseño, uso y evaluación de sistemas de IA", url: "https://www.nist.gov/itl/ai-risk-management-framework" }],
    service: { name: "Automatización de procesos", href: "/servicios/automatizacion-procesos", text: "En el diagnóstico de YAGO revisamos proceso, volumen y sistemas para definir un primer alcance de automatización y sus criterios de aceptación." },
    relatedSlugs: ["integrar-ia-procesos-empresa", "como-calcular-el-roi-de-automatizar-procesos", "apps-ia-desarrollo-asistido-diferencias"],
  },
  {
    slug: "apps-ia-desarrollo-asistido-diferencias",
    title: "Aplicaciones con IA y desarrollo asistido por IA: qué recibe la empresa en cada caso",
    seoTitle: "Apps con IA y desarrollo asistido: diferencias | YAGO",
    description: "Diferencias entre desarrollar aplicaciones que incorporan inteligencia artificial y usar IA durante el desarrollo de software a medida. Entregables y evaluación.",
    excerpt: "Dos usos de IA en desarrollo de software, con objetivos, entregables y pruebas diferentes.",
    image: "/images/service-apps-automatizacion.png",
    category: "Aplicaciones y desarrollo",
    date: "2026-10-03",
    readingTime: "4 min",
    keywords: ["desarrollo de aplicaciones con IA", "desarrollo asistido por IA", "software a medida con IA", "apps empresariales Chile"],
    intro: "La expresión desarrollo con IA puede describir dos cosas: construir una aplicación con funciones inteligentes para sus usuarios o usar herramientas de IA durante la construcción del software. Una empresa puede contratar cualquiera de las dos o combinarlas. Distinguirlas permite definir mejor alcance, pruebas y entregables.",
    sections: [
      {
        heading: "Una aplicación que incorpora inteligencia artificial",
        paragraphs: ["En esta modalidad, la IA forma parte del producto: el usuario puede consultar documentos, clasificar una solicitud, extraer información de un archivo o preparar un contenido. Hay que diseñar la función, sus fuentes y cómo se utilizará el resultado.", "Además de comprobar que la aplicación funciona, se evalúa la tarea de IA con ejemplos representativos. Una salida con el formato correcto puede contener un dato incorrecto; por eso se necesitan criterios de contenido, validaciones y revisión según el proceso."],
      },
      {
        heading: "Software construido con desarrollo asistido por IA",
        paragraphs: ["Aquí la IA ayuda al equipo a preparar código, explorar soluciones, documentar o revisar cambios. La aplicación entregada puede ser un panel, portal o herramienta administrativa sin ninguna función de IA para el usuario.", "El equipo debe revisar y probar el resultado. La documentación de GitHub sobre herramientas de Copilot describe límites de las sugerencias y la necesidad de validar el código. Utilizar una herramienta de IA no demuestra por sí mismo que una aplicación sea correcta, mantenible o más rápida de construir."],
      },
      {
        heading: "Comparación de las dos modalidades",
        paragraphs: ["La distinción principal es dónde interviene la IA. En ambos casos, la empresa debería recibir el software y la documentación del alcance acordado."],
        table: {
          columns: ["Aspecto", "Aplicación con IA", "Desarrollo asistido por IA"],
          rows: [["Uso de IA", "Función del producto que utiliza el usuario", "Herramienta del equipo que desarrolla"], ["Ejemplo", "Asistente que consulta documentos", "Panel de aprobaciones construido con apoyo de IA"], ["Evaluación", "Pruebas de software y calidad de la tarea de IA", "Revisión del código y pruebas de software"], ["Operación", "Puede incluir consumo de modelos y fuentes", "No requiere consumo de IA si el producto no la incorpora"], ["Entrega", "Aplicación, integración y configuración acordadas", "Aplicación y documentación acordadas"]],
        },
      },
      {
        heading: "Qué acordar antes de desarrollar una app empresarial",
        paragraphs: ["Define usuarios, permisos, módulos, sistemas a integrar y datos a migrar. Si la aplicación incorpora IA, agrega fuentes, ejemplos de evaluación, tratamiento de respuestas ambiguas y costo de consumo.", "La propuesta debe explicar condiciones de acceso al repositorio, despliegue, infraestructura, documentación y mantenimiento. Estos acuerdos importan tanto si se usa IA para programar como si se desarrolla con otras herramientas."],
        bullets: ["Módulos y flujos de usuario incluidos.", "Integraciones, datos y responsabilidades.", "Criterios de aceptación y pruebas.", "Acceso, despliegue y documentación.", "Soporte y evolución posterior."],
      },
      {
        heading: "Cómo comparar costo y plazo",
        paragraphs: ["El plazo depende del alcance y de sus dependencias: permisos, interfaces, datos, revisión e integración pueden requerir más trabajo que escribir una primera versión de código. Una estimación debe indicar esos factores.", "Para evaluar si el desarrollo asistido mejora la entrega, se pueden comparar tareas y resultados equivalentes, incluyendo revisión y correcciones. Cualquier ahorro previsto se presenta como una estimación hasta contar con datos comparables."],
      },
    ],
    conclusion: "Una app con IA ofrece una función inteligente al usuario; el desarrollo asistido por IA apoya al equipo que construye el software. Ambas modalidades necesitan alcance, revisión y pruebas. Al contratar, pide claridad sobre el producto, integraciones, entrega y costo de operación.",
    sources: [{ title: "GitHub: capacidades, límites y revisión de herramientas Copilot", url: "https://docs.github.com/en/copilot/responsible-use-of-github-copilot-features/responsible-use-of-github-copilot-code-review" }],
    service: { name: "Aplicaciones y software con IA", href: "/servicios/apps-automatizacion", text: "YAGO desarrolla aplicaciones empresariales en Chile, integra funciones de IA y utiliza desarrollo asistido por IA con revisión y criterios de aceptación." },
    relatedSlugs: ["integrar-ia-procesos-empresa", "elegir-proveedor-automatizacion-ia-chile", "agentes-de-ia-para-empresas"],
  },
  {
    slug: "evaluar-piloto-ocr-precision-costos",
    modifiedDate: "2026-10-26",
    resource: { label: "Descargar plantilla de evaluación OCR", description: "CSV editable para registrar documento, campo, valor esperado, valor extraído, revisión y tiempo de intervención. Las filas iniciales son referencias vacías para completar, no resultados de una prueba.", href: "/recursos/plantilla-evaluacion-ocr.csv", service: "ocr" },
    title: "Cómo evaluar un proyecto OCR: precisión, validaciones y costo por documento",
    seoTitle: "Cómo evaluar OCR empresarial: calidad y costo | YAGO",
    description: "Cómo probar OCR y extracción de datos con documentos reales: muestra, métricas por campo, validaciones, revisión humana y costo del proceso completo.",
    excerpt: "Una prueba OCR útil mide qué datos llegan correctamente al proceso, qué requiere revisión y cuánto cuesta operar.",
    image: "/images/blog-ocr-ia.png",
    category: "Documentos y OCR",
    date: "2026-10-03",
    readingTime: "5 min",
    keywords: ["evaluar OCR", "OCR para empresas Chile", "precisión OCR", "digitalización de documentos", "extracción de datos PDF", "costo OCR"],
    intro: "Evaluar OCR empresarial requiere comprobar cómo una muestra de documentos se convierte en datos útiles para una tarea. Leer texto es una etapa; extraer campos, validarlos y enviarlos al sistema son otras. La prueba debería medir calidad por campo, casos que necesitan revisión y costo del flujo completo.",
    sections: [
      {
        heading: "Construir una muestra que represente la operación",
        paragraphs: ["Incluye tipos de documento, proveedores, formatos, calidad de escaneo, tablas y campos opcionales que aparecen en el trabajo real. Identifica cuáles son relevantes para el proceso, como folio, fecha, monto o identificación de un proveedor.", "Prepara valores revisados contra los que comparar y conserva ejemplos para la evaluación final. Una prueba con documentos limpios de un único formato puede ocultar problemas que aparecerán en producción."],
      },
      {
        heading: "Medir los campos que importan",
        paragraphs: ["Un porcentaje global puede esconder que un campo crítico falla con frecuencia. Separa resultados por campo y tipo de documento. Define qué cuenta como una coincidencia: fecha normalizada, separador decimal, moneda y campos ausentes pueden afectar la comparación.", "Document AI de Google explica precisión, recall y F1 para comparar predicciones con anotaciones. Estas métricas son útiles para extracción de entidades; no deben confundirse con la proporción de documentos que el flujo puede procesar sin intervención."],
        table: {
          columns: ["Indicador", "Qué permite observar"],
          rows: [["Precisión por campo", "Qué proporción de las predicciones corresponde a valores correctos"], ["Recall por campo", "Qué proporción de los valores esperados fue recuperada"], ["F1", "Equilibrio entre precisión y recall bajo el criterio acordado"], ["Documentos sin intervención", "Qué parte de la muestra completa el flujo sin revisión humana"], ["Tiempo de revisión", "Trabajo humano que sigue requiriendo cada documento"]],
        },
      },
      {
        heading: "Distinguir confianza del modelo y resultado comprobado",
        paragraphs: ["Una puntuación de confianza es una señal del sistema, no una comprobación independiente de exactitud. Su relación con la calidad se evalúa sobre la muestra. Un umbral más exigente puede enviar más casos a revisión y cambiar el volumen que se procesa automáticamente.", "Reglas como formato de identificadores, fechas válidas, consistencia de montos o detección de duplicados ayudan a revisar las salidas. Cuando existe información estructurada de origen, por ejemplo un XML disponible, conviene evaluar si puede usarse directamente."],
      },
      {
        heading: "Probar la carga al sistema y las excepciones",
        paragraphs: ["La prueba debe comprobar el resultado en su destino: planilla, ERP, base de datos o aplicación. Revisa la normalización, campos obligatorios, duplicados y comportamiento cuando el sistema receptor está indisponible.", "Si hay aprobación o corrección, registra quién interviene y qué dato cambia. Guarda una referencia al documento y al estado del proceso para que el equipo pueda revisar y reprocesar las excepciones."],
      },
      {
        heading: "Qué registrar en cada prueba: plantilla editable",
        paragraphs: ["Registra una fila por documento y campo. Completa el valor esperado con una referencia revisada, anota la salida del OCR y clasifica si coincide bajo la regla acordada. Deja visible si fue necesaria una corrección y cuánto tiempo de revisión consumió.", "La plantilla descargable usa identificadores de ejemplo y no contiene resultados ni fórmulas de rendimiento. Permite separar errores de extracción de datos ausentes en el documento. Con esas observaciones puedes calcular las métricas por campo y comparar formatos con el mismo criterio."],
        bullets: ["Documento y tipo: identificador para volver al archivo de la muestra.", "Campo y valores: qué se esperaba y qué entregó la extracción.", "Coincide y requiere revisión: decisión según el criterio acordado.", "Segundos de revisión y observación: trabajo humano y motivo de la excepción."],
        links: [{ label: "Descargar la plantilla editable de evaluación OCR", href: "/recursos/plantilla-evaluacion-ocr.csv" }, { label: "Cómo conectar la extracción con validaciones y un ERP", href: "/blog/integrar-ia-procesos-empresa" }],
      },
      {
        heading: "Calcular el costo del proceso completo",
        paragraphs: ["El costo operativo por documento puede estimarse como la suma del consumo de OCR o modelos, infraestructura, revisión humana y soporte, dividida por el volumen del período. Explica por separado la inversión de implementación y cualquier costo fijo.", "Para proyectar horas liberadas, compara el tiempo de intervención humana antes y después y multiplica la diferencia por el volumen equivalente. La ejecución técnica del OCR no representa todo el tiempo operativo: también cuentan validación, corrección y carga."],
        bullets: ["Muestra representativa y valores revisados.", "Resultados por campo y reglas de comparación.", "Intervención humana y excepciones.", "Carga al destino y reproceso.", "Costo operativo e implementación diferenciados."],
      },
    ],
    conclusion: "Una evaluación OCR útil combina calidad por campo, documentos que completan el flujo, tiempo de revisión y costo total. Prueba con tus formatos reales y comprueba la integración antes de proyectar el resultado a todo el volumen de la empresa.",
    sources: [{ title: "Google Cloud Document AI: evaluar rendimiento, precisión y recall", url: "https://cloud.google.com/document-ai/docs/evaluate" }],
    service: { name: "OCR para empresas", href: "/ocr", text: "YAGO parte de una evaluación con tus documentos para definir campos, validaciones y la integración que necesita tu proceso." },
    relatedSlugs: ["ocr-con-ia-digitalizar-documentos", "como-calcular-el-roi-de-automatizar-procesos", "integrar-ia-procesos-empresa"],
  },
  {
    slug: "registro-contratos-terminos-mi-dt-plazos",
    title: "Registro de contratos y términos en Mi DT: plazos y cómo hacerlo a volumen",
    seoTitle: "Registro de contratos en Mi DT: plazos y cómo hacerlo | YAGO",
    description:
      "Plazos para registrar contratos (15 días hábiles) y términos (3 a 10 días hábiles) en Mi DT, paso a paso y cómo sostenerlo con cientos de registros al mes.",
    excerpt:
      "Qué exige la Dirección del Trabajo, en qué plazos, cómo se registra en Mi DT y qué se complica cuando la operación tiene alta rotación.",
    image: "/images/blog-registro-mi-dt.png",
    category: "RRHH y cumplimiento",
    date: "2026-09-23",
    readingTime: "7 min",
    keywords: [
      "registro de contratos DT",
      "registro electrónico laboral",
      "plazo registro contrato de trabajo",
      "registro término de contrato Mi DT",
      "Portal Mi DT empleador",
    ],
    intro:
      "Desde la modernización de la Dirección del Trabajo, los empleadores registran en línea sus contratos de trabajo y los términos de contrato en el Portal Mi DT. Son trámites simples cuando son pocos, pero con plazos cortos: en operaciones con alta rotación se transforman en una carga diaria. Esta guía resume qué exige la DT, en qué plazos y cómo sostenerlo a volumen sin perder control.",
    sections: [
      {
        heading: "Qué es el registro electrónico laboral",
        paragraphs: [
          "Es la sección del Portal Mi DT donde el empleador registra los contratos de trabajo, sus anexos y el término de cada relación laboral. Se basa en el artículo 9 bis del Código del Trabajo y en el Decreto Supremo N° 14 de 2023 del Ministerio del Trabajo y Previsión Social.",
          "Para entrar se usa ClaveÚnica y se elige el perfil de empleador. Si la empresa es persona jurídica, el trámite lo hace un representante laboral electrónico registrado en Mi DT.",
        ],
      },
      {
        heading: "Plazo para registrar un contrato de trabajo",
        paragraphs: [
          "La Dirección del Trabajo indica que el contrato debe registrarse en su sitio web dentro de los 15 días hábiles siguientes a su celebración, y que antes de registrarlo debe estar firmado por el empleador y por el trabajador.",
          "Si pasa ese plazo sin registro, el empleador está incumpliendo una obligación legal y puede ser sancionado por la DT. Los anexos de contrato también se registran en Mi DT.",
        ],
      },
      {
        heading: "Plazos para registrar el término de un contrato",
        paragraphs: [
          "El registro del término de contrato es obligatorio desde el 8 de junio de 2023 y el plazo depende de la causal. El contrato tiene que estar registrado previamente en la DT. Según la Dirección del Trabajo:",
        ],
        bullets: [
          "10 días hábiles desde el término, para las causales 1 a 3 del artículo 159 (mutuo acuerdo, renuncia y muerte del trabajador).",
          "3 días hábiles, para las causales 4 y 5 del artículo 159 (vencimiento del plazo y conclusión del trabajo o servicio) y para las del artículo 160.",
          "6 días hábiles, para la causal 6 del artículo 159 (caso fortuito o fuerza mayor) o desde la resolución de liquidación de la empresa.",
          "Junto con la carta de aviso, cuando el despido es por las causales del artículo 161 (necesidades de la empresa o desahucio).",
        ],
      },
      {
        heading: "Cómo se registra en Mi DT, paso a paso",
        paragraphs: ["El flujo base que describe la DT para registrar un contrato es:"],
        bullets: [
          "Entrar a Mi DT con ClaveÚnica y elegir el perfil de empleador.",
          "Ir a Registro electrónico laboral y luego a Registro de contrato de trabajo.",
          "Completar los datos del trabajador y del contrato, que ya debe estar firmado por ambas partes.",
          "Guardar el comprobante del registro como respaldo.",
        ],
      },
      {
        heading: "Qué se complica cuando son cientos de registros al mes",
        paragraphs: [
          "En empresas de servicios transitorios, outsourcing, construcción, seguridad o retail, la rotación hace que los registros se acumulen en pocos días, sobre todo a inicio de mes. Con plazos de 3 a 15 días hábiles, cualquier atraso se nota rápido.",
          "Los problemas típicos no son de conocimiento sino de operación: datos que vienen incompletos desde el sistema de remuneraciones, un RUT mal digitado que rechaza el registro, comprobantes que quedan en el computador de una persona y poca visibilidad sobre qué se registró, qué falló y qué falta.",
        ],
      },
      {
        heading: "Cómo automatizarlo sin perder control",
        paragraphs: [
          "Automatizar este trámite no significa soltar el control. Un buen flujo valida los datos antes de ir al portal, ejecuta en una cola ordenada, guarda el comprobante o folio de cada registro y deja los errores a la vista para corregirlos y reprocesarlos por lote.",
          "Así el equipo de RRHH deja de copiar datos pantalla por pantalla y pasa a revisar solo las excepciones, con evidencia de cada registro para auditorías o fiscalizaciones.",
        ],
      },
    ],
    conclusion:
      "Registrar contratos y términos en Mi DT es obligatorio y tiene plazos cortos: 15 días hábiles para el contrato y entre 3 y 10 días hábiles para el término, según la causal. Con pocos trabajadores basta con hacerlo a mano; con alta rotación conviene validar los datos antes, ejecutar por lotes y guardar evidencia de cada registro. Revisa siempre el detalle vigente en el sitio de la Dirección del Trabajo.",
    sources: [
      { title: "Dirección del Trabajo: Registro de contrato de trabajo", url: "https://dt.gob.cl/portal/1626/w3-article-121013.html" },
      { title: "Dirección del Trabajo: Registro de término de contrato de trabajo", url: "https://www.dt.gob.cl/portal/1626/w3-article-121011.html" },
      { title: "Dirección del Trabajo: ¿Qué sucede si no se registra el contrato en 15 días hábiles?", url: "https://www.dt.gob.cl/portal/1628/w3-article-121039.html" },
      { title: "Dirección del Trabajo: Registro de anexo de contrato", url: "https://www.dt.gob.cl/portal/1626/w3-article-121615.html" },
    ],
    product: {
      name: "SADT",
      href: "/sadt",
      text: "SADT registra contratos y términos de contrato en Mi DT por lote, valida los datos antes de ejecutar y guarda el comprobante de cada registro.",
    },
  },
  {
    slug: "certificados-f30-y-f30-1-diferencias",
    title: "Certificados F30 y F30-1: qué son, en qué se diferencian y cómo obtenerlos",
    seoTitle: "F30 y F30-1: qué son, diferencias y cómo obtenerlos | YAGO",
    description:
      "Qué acredita el certificado F30 y qué el F30-1, en qué se diferencian, qué requisitos piden y cómo se obtienen en el Portal Mi DT de la Dirección del Trabajo.",
    excerpt:
      "El F30 muestra multas y deudas previsionales; el F30-1 acredita que pagaste a tus trabajadores en un período. Diferencias, requisitos y cómo pedirlos.",
    image: "/images/blog-f30-f30-1.png",
    category: "RRHH y cumplimiento",
    date: "2026-09-23",
    readingTime: "6 min",
    keywords: [
      "certificado F30",
      "certificado F30-1",
      "diferencia F30 y F30-1",
      "certificado de cumplimiento de obligaciones laborales y previsionales",
      "certificado de antecedentes laborales y previsionales",
    ],
    intro:
      "El F30 y el F30-1 son los dos certificados de la Dirección del Trabajo que más se piden en Chile, sobre todo en subcontratación. Tienen nombres parecidos pero acreditan cosas distintas. Esta guía explica qué es cada uno, en qué se diferencian y cómo se obtienen en el Portal Mi DT.",
    sections: [
      {
        heading: "Qué es el certificado F30",
        paragraphs: [
          "Su nombre oficial es Certificado de antecedentes laborales y previsionales. Muestra la situación de un empleador ante la Dirección del Trabajo: las multas que le ha aplicado la DT y sus deudas previsionales.",
          "Lo pueden pedir personas naturales o jurídicas que son empleadores. En línea, por Mi DT con ClaveÚnica, no tiene costo; también se puede pedir de forma presencial en una Inspección del Trabajo.",
        ],
      },
      {
        heading: "Qué es el certificado F30-1",
        paragraphs: [
          "Su nombre oficial es Certificado de cumplimiento de obligaciones laborales y previsionales. Acredita que el empleador pagó las remuneraciones y cotizaciones de sus trabajadores en un período, incluidas las indemnizaciones por término de contrato.",
          "Se usa sobre todo en subcontratación: el contratista lo presenta a la empresa principal para demostrar que está al día con sus trabajadores, por ejemplo para cursar un estado de pago o la devolución de una garantía. Su base legal es el artículo 183-C del Código del Trabajo.",
        ],
      },
      {
        heading: "Diferencias entre F30 y F30-1",
        paragraphs: ["En resumen:"],
        bullets: [
          "Qué acredita: el F30 muestra multas de la DT y deudas previsionales; el F30-1 acredita el cumplimiento de obligaciones laborales y previsionales con los trabajadores.",
          "Para qué se usa: el F30 sirve como antecedente general del empleador; el F30-1 se exige típicamente entre contratista y empresa principal.",
          "Período: el F30-1 se pide por períodos mensuales, de 1 a 3 meses consecutivos por solicitud.",
          "Dónde: ambos se tramitan en el Portal Mi DT con ClaveÚnica.",
        ],
      },
      {
        heading: "Cómo se obtiene el F30-1 en Mi DT",
        paragraphs: [
          "Desde el 30 de agosto de 2023 el F30-1 se obtiene en el Portal Mi DT. La Dirección del Trabajo pide estos requisitos:",
        ],
        bullets: [
          "Entrar con ClaveÚnica.",
          "Tener pagadas electrónicamente las cotizaciones de los trabajadores a través de PreviRed, Caja Los Andes o Caja La Araucana.",
          "Si la empresa es persona jurídica, contar con uno o más representantes laborales electrónicos registrados en Mi DT.",
          "Descargar el PDF desde Mis solicitudes, en la sección Certificado de cumplimiento. El documento incluye un código QR para verificarlo.",
        ],
      },
      {
        heading: "Cuando son muchas obras, faenas o períodos",
        paragraphs: [
          "Un contratista con varias faenas y varios mandantes puede necesitar decenas de certificados cada mes: uno por período y por obra. Pedirlos y descargarlos uno por uno toma horas y es fácil perder la pista de cuál falta o cuál se entregó.",
          "Automatizar la solicitud y la descarga permite tener todos los PDF ordenados por obra y período, con un registro de qué se pidió, cuándo y con qué resultado.",
        ],
      },
    ],
    conclusion:
      "El F30 muestra multas y deudas previsionales del empleador; el F30-1 acredita que pagó a sus trabajadores en un período y es clave en subcontratación. Ambos se obtienen en Mi DT con ClaveÚnica. Si tu operación necesita muchos certificados al mes, conviene automatizar la solicitud y el orden de los documentos.",
    sources: [
      { title: "Dirección del Trabajo: Certificado de antecedentes laborales y previsionales (F30)", url: "https://www.dt.gob.cl/portal/1626/w3-article-100351.html" },
      { title: "Dirección del Trabajo: Certificado de cumplimiento de obligaciones laborales y previsionales (F30-1)", url: "https://www.dt.gob.cl/portal/1626/w3-article-100359.html" },
      { title: "Dirección del Trabajo: Así se obtiene ahora el certificado F30-1 (agosto de 2023)", url: "https://dt.gob.cl/portal/1627/w3-article-124815.html" },
      { title: "Dirección del Trabajo: Subcontratación", url: "https://www.dt.gob.cl/portal/1626/w3-article-93827.html" },
    ],
    product: {
      name: "SADT",
      href: "/sadt",
      text: "SADT solicita y descarga certificados F30 y F30-1 por lote y los deja ordenados por obra y período, con registro de cada solicitud.",
    },
  },
  {
    slug: "que-es-la-automatizacion-de-procesos-con-ia",
    title: "Qué es la automatización de procesos con IA (y qué no es)",
    seoTitle: "Qué es la automatización de procesos con IA | YAGO",
    description:
      "Guía clara sobre automatización de procesos con IA para empresas: qué es, cómo funciona, qué procesos conviene automatizar primero y qué esperar del retorno.",
    excerpt:
      "Una guía sin humo: qué significa realmente automatizar con IA, qué procesos conviene partir automatizando y cómo se mide el retorno.",
    image: "/images/blog-automatizacion-ia.png",
    category: "Fundamentos",
    date: "2026-06-24",
    modifiedDate: "2026-09-01",
    readingTime: "6 min",
    keywords: ["automatización de procesos", "IA para empresas", "automatización con IA", "procesos empresariales"],
    intro:
      "La automatización de procesos con IA combina flujos de trabajo automatizados con modelos de inteligencia artificial que entienden texto, documentos y contexto. El resultado: tareas que antes requerían horas de trabajo manual se resuelven en minutos, con trazabilidad y menos errores.",
    sections: [
      {
        heading: "Qué es (en términos simples)",
        paragraphs: [
          "Automatizar con IA no es reemplazar personas por robots. Es tomar las tareas repetitivas y tediosas de un proceso —copiar datos, clasificar correos, validar documentos, generar reportes— y delegarlas a un sistema que las ejecuta de forma consistente, 24/7.",
          "La diferencia con la automatización tradicional es que la IA puede trabajar con información no estructurada: un PDF escaneado, un correo mal redactado o una planilla desordenada dejan de ser un bloqueo.",
        ],
      },
      {
        heading: "Qué procesos conviene automatizar primero",
        paragraphs: [
          "No todos los procesos entregan el mismo retorno. Los mejores candidatos comparten tres características:",
        ],
        bullets: [
          "Alto volumen: se repiten muchas veces por semana o por día",
          "Reglas claras: los pasos son predecibles, aunque los datos varíen",
          "Costo de error alto: un error manual genera retrabajo o multas",
        ],
      },
      {
        heading: "Qué NO es la automatización con IA",
        paragraphs: [
          "No es un chatbot genérico pegado a tu web. No es 'poner ChatGPT' en la empresa sin diseño de flujos. Y no es un proyecto de años: una automatización bien acotada puede estar productiva en semanas.",
          "Tampoco significa perder control: los procesos críticos mantienen puntos de validación humana (human-in-the-loop), donde la IA propone y una persona decide.",
        ],
      },
    ],
    conclusion:
      "La automatización con IA es hoy la palanca de eficiencia más accesible para equipos de operaciones, backoffice y finanzas. La clave está en partir por procesos de alto volumen y reglas claras, medir el ahorro en horas-hombre y escalar desde ahí.",
    sources: [
      { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { title: "OECD AI Principles", url: "https://oecd.ai/en/ai-principles" },
    ],
  },
  {
    slug: "como-calcular-el-roi-de-automatizar-procesos",
    title: "Cómo calcular el ROI de automatizar un proceso paso a paso",
    seoTitle: "ROI de automatizar un proceso: cómo calcularlo | YAGO",
    description:
      "Aprende a calcular el retorno de inversión (ROI) de automatizar un proceso: fórmula, variables clave, ejemplo ilustrativo y errores comunes al estimar el ahorro.",
    excerpt:
      "La fórmula para evaluar una automatización: costos, tiempo de intervención y un ejemplo numérico identificado como ilustrativo.",
    image: "/images/blog-roi-automatizacion.png",
    category: "Negocio",
    date: "2026-06-17",
    modifiedDate: "2026-09-01",
    readingTime: "7 min",
    keywords: ["ROI automatización", "retorno de inversión", "ahorro horas hombre", "costo automatización"],
    intro:
      "Antes de automatizar cualquier proceso, la pregunta correcta es: ¿cuánto cuesta hoy hacerlo a mano y cuánto costaría automatizado? Este artículo te da la fórmula y un ejemplo concreto para responderla con números.",
    sections: [
      {
        heading: "La fórmula base",
        paragraphs: [
          "El ROI de una automatización se calcula comparando el costo actual del proceso manual contra el costo del proceso automatizado, incluyendo la inversión inicial.",
          "Costo manual mensual = (horas dedicadas al mes) × (costo hora del equipo) + (costo mensual de errores y retrabajo).",
          "ROI = (ahorro mensual × 12 − inversión inicial) / inversión inicial.",
        ],
      },
      {
        heading: "Ejemplo ilustrativo: digitación de facturas",
        paragraphs: [
          "Supongamos que un equipo de backoffice procesa 800 facturas al mes. Si cada una toma 6 minutos entre digitación y validación, el proceso ocupa 80 horas mensuales. Con un costo interno supuesto de $12.000 CLP por hora, la digitación representa $960.000 mensuales.",
          "El ahorro no debe asumirse: se calcula midiendo cuánto baja el tiempo de revisión en un piloto y comparando ese resultado con el costo total de implementación, soporte y consumo. El periodo de recuperación depende de esa medición.",
        ],
      },
      {
        heading: "Errores comunes al estimar",
        paragraphs: ["Al calcular el retorno, evita estas trampas frecuentes:"],
        bullets: [
          "Ignorar el costo del retrabajo y no medir cuánto tiempo ocupa corregir cada error",
          "No valorizar el tiempo del equipo senior que revisa y corrige",
          "Medir solo el ahorro directo y olvidar la capacidad liberada para tareas de mayor valor",
          "Subestimar el costo de oportunidad de reportes lentos o datos atrasados",
        ],
      },
    ],
    conclusion:
      "Un proceso de alto volumen y reglas claras merece evaluación, pero el ROI no debe presumirse. El primer paso es medir: sin línea base y un piloto comparable, no hay caso de negocio verificable.",
  },
  {
    slug: "ocr-con-ia-digitalizar-documentos",
    title: "OCR con IA: cómo convertir documentos en datos útiles",
    seoTitle: "OCR con IA: convertir documentos en datos | YAGO",
    description:
      "Cómo funciona el OCR con IA para digitalizar facturas, contratos y formularios: precisión real, casos de uso y cómo integrarlo con tus sistemas.",
    excerpt:
      "Facturas, contratos y PDFs escaneados dejan de ser un cuello de botella: cómo funciona el OCR moderno y dónde genera más impacto.",
    image: "/images/blog-ocr-ia.png",
    category: "Tecnología",
    date: "2026-06-10",
    modifiedDate: "2026-09-01",
    readingTime: "6 min",
    keywords: ["OCR con IA", "digitalización de documentos", "extracción de datos", "procesamiento de facturas"],
    intro:
      "El OCR tradicional convertía imágenes en texto plano, con resultados mediocres en documentos reales. El OCR con IA entiende la estructura del documento: sabe qué es un RUT, un monto, una fecha de vencimiento o una glosa, y entrega datos listos para tus sistemas.",
    sections: [
      {
        heading: "Qué cambió con la IA",
        paragraphs: [
          "Los modelos actuales de visión y lenguaje pueden procesar documentos escaneados, fotos de celular y formatos irregulares sin depender siempre de una plantilla rígida. La precisión varía por campo, calidad de imagen, idioma y tipo documental, por lo que debe medirse con una muestra representativa.",
          "Además, la IA valida el contexto: detecta montos inconsistentes, fechas imposibles o campos faltantes, y deriva esos casos a revisión humana en lugar de ingresarlos con errores.",
        ],
      },
      {
        heading: "Casos de uso con mayor impacto",
        paragraphs: ["Donde vemos más retorno en empresas de LATAM:"],
        bullets: [
          "Facturas y órdenes de compra: de digitación manual a registro automático en el ERP",
          "Contratos y anexos laborales: extracción de cláusulas, fechas y firmas",
          "Formularios y fichas: carnets, licencias y certificados a datos estructurados",
          "Respaldo documental: clasificación y archivo automático con índice buscable",
        ],
      },
      {
        heading: "Cómo se integra con tu operación",
        paragraphs: [
          "El flujo típico: los documentos llegan por correo, carpeta compartida o carga directa; el OCR extrae y valida los datos; los casos dudosos pasan a una bandeja de revisión; y los datos aprobados se registran automáticamente en tu ERP, CRM o planilla.",
          "Todo queda con trazabilidad: sabes qué documento originó cada registro y quién validó cada excepción.",
        ],
      },
    ],
    conclusion:
      "Si tu equipo digita datos desde documentos todos los días, OCR es un candidato razonable para un piloto. El plazo de puesta en marcha depende de la variedad documental, las validaciones y las integraciones necesarias.",
    sources: [
      { title: "Google Cloud Document AI documentation", url: "https://cloud.google.com/document-ai/docs" },
      { title: "Azure AI Document Intelligence documentation", url: "https://learn.microsoft.com/azure/ai-services/document-intelligence/" },
    ],
  },
  {
    slug: "agentes-de-ia-para-empresas",
    title: "Agentes de IA para empresas: qué hacen y cuándo usarlos",
    seoTitle: "Agentes de IA para empresas: qué hacen y cuándo | YAGO",
    description:
      "Cómo elegir un asistente documental, un flujo con IA o un agente con herramientas. Ejemplo de alcance, pruebas, permisos y costo para empresas en Chile.",
    excerpt:
      "Más que chatbots: agentes que consultan sistemas, ejecutan tareas y escalan a humanos cuando corresponde. Cuándo tienen sentido y cuándo no.",
    image: "/images/blog-agentes-ia.png",
    category: "Tecnología",
    date: "2026-06-03",
    modifiedDate: "2026-10-26",
    readingTime: "7 min",
    keywords: ["agentes de IA", "agentes inteligentes", "IA empresarial", "asistentes virtuales empresas"],
    intro:
      "Un agente de IA puede utilizar fuentes y herramientas para avanzar hacia un objetivo, en vez de limitarse a generar una respuesta. Para una empresa, la decisión es qué información podrá consultar, qué acciones podrá preparar o ejecutar y cómo se comprobará el resultado. Un asistente documental o un flujo de pasos fijos puede ser suficiente cuando la tarea no necesita esa autonomía.",
    sections: [
      {
        heading: "Chatbot vs. agente: la diferencia práctica",
        paragraphs: [
          "Una interfaz de chat puede ser la entrada a soluciones distintas. Un asistente puede recuperar información de documentos; un workflow puede combinar IA con pasos definidos; un agente puede elegir herramientas y siguientes pasos dentro de un alcance. La etiqueta comercial no demuestra qué hace cada implementación.",
          "Anthropic distingue workflows con rutas de código predefinidas de agentes donde el modelo dirige dinámicamente el proceso y las herramientas. Es una distinción de arquitectura, no una garantía de calidad ni una obligación de construir la opción más compleja.",
        ],
        table: { columns: ["Necesidad", "Primer enfoque a evaluar", "Qué comprobar"], rows: [["Responder con documentos internos", "Asistente con recuperación y referencias", "Respuesta respaldada por fuentes pertinentes"], ["Clasificar y derivar solicitudes", "Flujo con pasos y reglas definidos", "Categoría, responsable y manejo de excepciones"], ["Resolver tareas con distintos caminos", "Agente con herramientas acotadas", "Elección de herramientas, resultado y condiciones de parada"]] },
      },
      {
        heading: "Necesidades que conviene evaluar",
        paragraphs: ["Estos ejemplos ayudan a definir un alcance. Su viabilidad depende de las fuentes, las interfaces y la evaluación del proceso:"],
        bullets: [
          "Soporte interno: responder consultas de RRHH, TI o procedimientos con acceso a la documentación real",
          "Gestión documental: buscar, clasificar y despachar documentos entre áreas",
          "Seguimiento de causas y trámites: monitorear portales públicos y alertar cambios",
          "Prospección: investigar leads, prellenar fichas y preparar outreach personalizado",
        ],
      },
      {
        heading: "Ejemplo de alcance: de un procedimiento a una propuesta de ticket",
        paragraphs: ["Un usuario pregunta cómo resolver una incidencia. El asistente busca el procedimiento vigente y responde con la referencia. Si corresponde una gestión, prepara los campos de un ticket; una persona confirma la propuesta antes de enviarla mediante la interfaz acordada. Es un ejemplo de diseño, no un caso de cliente ni una integración universal disponible.", "Si falta información, el flujo debe solicitarla o dejar la gestión pendiente. Una API indisponible no se interpreta como una tarea completada: se conserva el estado y se muestra qué necesita revisión."],
        links: [{ label: "Alcances de agentes y asistentes que implementa YAGO", href: "/servicios/agentes-ia" }, { label: "SOF.IA para consultas sobre documentación interna", href: "/productos/sofia" }],
      },
      {
        heading: "Cómo evaluar el resultado antes de ampliar el alcance",
        paragraphs: ["Prepara consultas habituales, fuentes contradictorias, datos incompletos y casos fuera de alcance. Define qué respuesta se espera, qué fuente la respalda y en qué punto el sistema debe pedir una aclaración o dejar una acción pendiente."],
        table: { columns: ["Prueba", "Criterio de aceptación"], rows: [["La respuesta no está en las fuentes", "Explica la falta de información sin presentar un dato inventado como hecho"], ["El usuario no tiene acceso a un documento", "La respuesta respeta el acceso definido para ese usuario"], ["Se propone crear o modificar un registro", "Se comprueban campos y confirmaciones acordadas"], ["Una herramienta falla", "El estado indica el fallo y permite revisión o reintento controlado"]] },
      },
      {
        heading: "Cómo mantener el control",
        paragraphs: [
          "Define las fuentes, herramientas y acciones disponibles para cada rol. Acordar qué requiere confirmación, cómo se registran las gestiones y cuándo termina una ejecución permite evaluar la implementación con el equipo que utilizará el resultado.",
          "El costo también incluye preparación de fuentes, integraciones, consumo de modelos, revisión humana y mantenimiento cuando corresponda. Compara tareas y períodos equivalentes antes de proyectar ahorro o ampliar la autonomía.",
        ],
      },
    ],
    conclusion:
      "Elige la solución por la tarea: consultar documentos, ejecutar un flujo definido o utilizar herramientas con flexibilidad. Un primer alcance útil tiene fuentes, acciones, responsables y pruebas concretas. Amplíalo cuando la evaluación demuestre que funciona para tu operación.",
    sources: [
      { title: "NIST AI Risk Management Framework", url: "https://www.nist.gov/itl/ai-risk-management-framework" },
      { title: "Anthropic: Building effective agents, distinción entre workflows y agentes", url: "https://www.anthropic.com/engineering/building-effective-agents" },
    ],
    service: { name: "Agentes y asistentes de IA", href: "/servicios/agentes-ia", text: "YAGO define fuentes, herramientas, acciones y criterios de aceptación para implementar asistentes y agentes conectados a la operación." },
    relatedSlugs: ["integrar-ia-procesos-empresa", "apps-ia-desarrollo-asistido-diferencias", "elegir-proveedor-automatizacion-ia-chile"],
  },
  {
    slug: "automatizacion-para-pymes-por-donde-partir",
    title: "Automatización para pymes: por dónde partir sin sobre-invertir",
    seoTitle: "Automatización para pymes: por dónde partir | YAGO",
    description:
      "Guía práctica de automatización para pymes: cinco procesos candidatos, cómo evaluar el costo y cómo partir con un piloto de bajo riesgo.",
    excerpt:
      "No necesitas un ERP nuevo ni un equipo de TI: los 5 procesos donde una pyme obtiene retorno más rápido al automatizar.",
    image: "/images/blog-procesos-pyme.png",
    category: "Negocio",
    date: "2026-05-27",
    modifiedDate: "2026-09-01",
    readingTime: "6 min",
    keywords: ["automatización pymes", "digitalización pyme", "procesos pyme", "eficiencia operacional"],
    intro:
      "La automatización dejó de ser exclusiva de grandes empresas. Hoy una pyme puede automatizar procesos clave con herramientas cloud y modelos de IA, sin proyectos millonarios ni equipos técnicos internos. La clave: partir por el proceso correcto.",
    sections: [
      {
        heading: "Cinco procesos que conviene evaluar primero",
        paragraphs: ["Estos procesos suelen ser buenos candidatos cuando tienen volumen, reglas claras y una línea base medible:"],
        bullets: [
          "Registro de facturas y conciliación: de horas de digitación a revisión de excepciones",
          "Cotizaciones y seguimiento comercial: respuestas en minutos, no días",
          "Reportes operativos: consolidación automática desde planillas y sistemas",
          "Onboarding y documentos de RRHH: contratos, anexos y certificados sin persecución manual",
          "Respuesta a consultas frecuentes: clientes y equipo interno con respuestas al instante",
        ],
      },
      {
        heading: "Cuánto cuesta realmente",
        paragraphs: [
          "Una automatización acotada (un proceso, integraciones estándar) parte típicamente en el rango de un proyecto de semanas, no de meses. El costo relevante no es la herramienta: es el diseño del flujo y las integraciones con lo que ya usas.",
          "Las horas mensuales ayudan a priorizar, pero no bastan para prometer retorno. También deben medirse errores, esperas, excepciones, costo de integración y mantenimiento.",
        ],
      },
      {
        heading: "Cómo partir con bajo riesgo",
        paragraphs: [
          "Evita el error de intentar automatizar todo de una vez. El camino recomendado es elegir un proceso doloroso y medible, implementar un piloto acotado, medir el cambio real y recién entonces escalar al siguiente proceso.",
          "Exige entregables concretos en cada etapa: blueprint del flujo, MVP con datos reales y documentación operativa. Sin caja negra.",
        ],
      },
    ],
    conclusion:
      "Para una pyme, automatizar bien es cuestión de foco: un proceso a la vez, con retorno medido. El piloto correcto genera evidencia y financia el siguiente paso.",
    sources: [
      { title: "Digitaliza tu Pyme, Ministerio de Economía de Chile", url: "https://www.digitalizatupyme.cl/" },
    ],
  },
  {
    slug: "herramientas-automatizacion-n8n-make-ia",
    title: "n8n, Make y IA: las herramientas detrás de la automatización moderna",
    seoTitle: "n8n, Make e IA: herramientas de automatización | YAGO",
    description:
      "Comparativa práctica de herramientas de automatización: n8n, Make, APIs e IA. Cuándo usar cada una y cómo se combinan en flujos empresariales reales.",
    excerpt:
      "El stack real detrás de las automatizaciones: qué hace n8n, qué hace Make, dónde entra la IA y cómo se combinan sin fragilidad.",
    image: "/images/blog-herramientas.png",
    category: "Tecnología",
    date: "2026-05-20",
    modifiedDate: "2026-09-01",
    readingTime: "8 min",
    keywords: ["n8n", "Make", "herramientas automatización", "integración de sistemas", "workflows"],
    intro:
      "Detrás de cada automatización robusta hay un stack de herramientas que orquesta datos entre sistemas. Entender qué hace cada pieza te ayuda a evaluar propuestas, evitar dependencias innecesarias y exigir soluciones mantenibles.",
    sections: [
      {
        heading: "Orquestadores: n8n y Make",
        paragraphs: [
          "n8n y Make son plataformas de orquestación: conectan aplicaciones (correo, ERP, CRM, planillas, WhatsApp) y ejecutan flujos con lógica condicional, reintentos y manejo de errores.",
          "Make brilla en flujos simples y rápidos de montar. n8n destaca cuando necesitas control: se puede alojar en tu propia infraestructura, maneja lógica compleja y escala mejor en volumen. Para procesos con datos sensibles, n8n self-hosted suele ser la elección correcta.",
        ],
      },
      {
        heading: "Dónde entra la IA en el flujo",
        paragraphs: [
          "La IA no reemplaza al orquestador: se inserta como un paso más del flujo, en los puntos donde hay información no estructurada o decisiones de contexto.",
        ],
        bullets: [
          "Extracción: convertir documentos, correos y notas en datos estructurados",
          "Clasificación: derivar casos al flujo correcto según contenido",
          "Generación: redactar respuestas, resúmenes y reportes a partir de datos",
          "Validación: detectar inconsistencias antes de registrar información",
        ],
      },
      {
        heading: "Señales de una buena arquitectura",
        paragraphs: [
          "Independiente de las herramientas, una automatización mantenible tiene: manejo de errores explícito (qué pasa cuando algo falla), logs consultables, alertas cuando un flujo se detiene, y documentación del flujo que cualquier técnico pueda leer.",
          "Desconfía de automatizaciones 'mágicas' sin trazabilidad: cuando fallan —y todas fallan alguna vez— el costo de no saber por qué es altísimo.",
        ],
      },
    ],
    conclusion:
      "Las herramientas importan menos que el diseño: un flujo con IA en los puntos correctos, manejo de errores explícito y documentación clara es más fácil de operar, auditar y mantener.",
    sources: [
      { title: "n8n documentation", url: "https://docs.n8n.io/" },
      { title: "Make Help Center", url: "https://help.make.com/" },
    ],
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getBlogCollections(posts: BlogPost[] = BLOG_POSTS) {
  const collections = BLOG_COLLECTIONS.map((collection) => ({ ...collection, posts: posts.filter((post) => collection.slugs.includes(post.slug)) })).filter((collection) => collection.posts.length);
  const assigned = new Set(BLOG_COLLECTIONS.flatMap((collection) => collection.slugs));
  const others = posts.filter((post) => !assigned.has(post.slug));
  if (others.length) collections.push({ id: "otras", title: "Más guías", description: "Otras decisiones y procesos empresariales.", slugs: others.map((post) => post.slug), posts: others });
  return collections;
}

/**
 * Glosario de YAGO (/glosario). Definiciones cortas y directas, con fuente oficial cuando el término
 * es regulatorio. Pensado para búsquedas del tipo "qué es…" en Google y en asistentes de IA.
 * Revisar las definiciones laborales si cambia la normativa (fecha de revisión en ENTITY.contentUpdated).
 */

export type GlossaryTerm = {
  id: string;
  term: string;
  /** Otros nombres o siglas con que se busca. */
  aka?: string[];
  definition: string;
  /** Detalle adicional opcional (una o dos frases). */
  detail?: string;
  related?: { label: string; href: string }[];
  source?: { label: string; href: string };
};

export type GlossaryGroup = {
  id: string;
  title: string;
  description: string;
  terms: GlossaryTerm[];
};

export const GLOSSARY: GlossaryGroup[] = [
  {
    id: "ia-empresarial",
    title: "IA y desarrollo empresarial",
    description: "Conceptos para evaluar cómo incorporar IA, aplicaciones y documentos a los procesos de una empresa.",
    terms: [
      {
        id: "integracion-ia",
        term: "Integración de IA",
        definition: "Conexión de una capacidad de inteligencia artificial con los datos, aplicaciones y pasos de un proceso para que su resultado pueda utilizarse en la operación.",
        related: [{ label: "Integración de IA en empresas", href: "/servicios/integracion-ia" }, { label: "Guía para integrar IA", href: "/blog/integrar-ia-procesos-empresa" }],
      },
      {
        id: "aplicacion-con-ia",
        term: "Aplicación con IA",
        definition: "Software que incorpora una función inteligente para sus usuarios, como consultar documentos, clasificar solicitudes, extraer datos o preparar contenido.",
        related: [{ label: "Desarrollo de aplicaciones con IA", href: "/servicios/apps-automatizacion" }],
      },
      {
        id: "desarrollo-asistido-ia",
        term: "Desarrollo asistido por IA",
        definition: "Uso de herramientas de IA para apoyar la construcción, revisión o documentación de software. La aplicación entregada puede tener o no funciones de IA; su calidad se comprueba mediante revisión y pruebas.",
        related: [{ label: "Apps con IA y desarrollo asistido: diferencias", href: "/blog/apps-ia-desarrollo-asistido-diferencias" }],
      },
      {
        id: "digitalizacion-documental",
        term: "Digitalización de documentos",
        definition: "Conversión de información documental a una forma digital utilizable. El escaneo genera un archivo; el OCR y la extracción de campos permiten buscar o procesar su contenido.",
        detail: "El servicio OCR de YAGO trabaja sobre PDFs e imágenes disponibles y prepara los datos para validación e integración.",
        related: [{ label: "OCR y procesamiento documental", href: "/ocr" }],
      },
      {
        id: "evaluacion-ia",
        term: "Evaluación de IA",
        definition: "Comparación del resultado de una tarea de IA con criterios y ejemplos revisados, para conocer calidad, errores y necesidad de intervención antes y durante su operación.",
        related: [{ label: "Evaluar un proyecto OCR", href: "/blog/evaluar-piloto-ocr-precision-costos" }],
      },
    ],
  },
  {
    id: "tramites-laborales",
    title: "Trámites laborales en Chile",
    description: "Términos del Portal Mi DT y de la Dirección del Trabajo que aparecen en el día a día de RRHH.",
    terms: [
      {
        id: "portal-mi-dt",
        term: "Portal Mi DT",
        aka: ["Mi DT", "Portal DT"],
        definition:
          "Portal en línea de la Dirección del Trabajo de Chile donde empleadores y trabajadores hacen trámites laborales con ClaveÚnica, como el registro electrónico de contratos y la solicitud de certificados.",
        related: [{ label: "SADT automatiza el Portal Mi DT", href: "/sadt" }],
        source: { label: "Dirección del Trabajo", href: "https://www.dt.gob.cl/portal/1626/w3-channel.html" },
      },
      {
        id: "claveunica",
        term: "ClaveÚnica",
        definition:
          "Credencial digital del Estado de Chile, entregada por el Servicio de Registro Civil e Identificación, que se usa para entrar a Mi DT y a otros servicios públicos en línea.",
        source: { label: "Dirección del Trabajo · F30-1", href: "https://dt.gob.cl/portal/1627/w3-article-124815.html" },
      },
      {
        id: "registro-electronico-laboral",
        term: "Registro electrónico laboral",
        definition:
          "Sección de Mi DT donde el empleador registra contratos de trabajo, anexos y términos de contrato. Se basa en el artículo 9 bis del Código del Trabajo y en el Decreto Supremo N° 14 de 2023 del Ministerio del Trabajo.",
        related: [{ label: "Guía: registro de contratos y términos en Mi DT", href: "/blog/registro-contratos-terminos-mi-dt-plazos" }],
        source: { label: "DT · Registro de contrato de trabajo", href: "https://dt.gob.cl/portal/1626/w3-article-121013.html" },
      },
      {
        id: "registro-de-contrato",
        term: "Registro de contrato de trabajo",
        definition:
          "Obligación del empleador de registrar cada contrato en el sitio de la Dirección del Trabajo dentro de los 15 días hábiles siguientes a su celebración, con el contrato ya firmado por ambas partes.",
        detail: "Si no se registra en ese plazo, el empleador incumple una obligación legal y puede ser sancionado por la Dirección del Trabajo.",
        related: [{ label: "SADT registra contratos a volumen", href: "/sadt" }],
        source: { label: "DT · Plazo de registro", href: "https://www.dt.gob.cl/portal/1628/w3-article-121039.html" },
      },
      {
        id: "registro-de-termino",
        term: "Registro de término de contrato",
        aka: ["Registro de desvinculación"],
        definition:
          "Registro en Mi DT del fin de una relación laboral. El plazo va de 3 a 10 días hábiles según la causal, o se hace junto con la carta de aviso cuando el despido es por el artículo 161. Es obligatorio desde el 8 de junio de 2023.",
        detail: "El contrato debe estar registrado previamente en la Dirección del Trabajo.",
        source: { label: "DT · Registro de término de contrato", href: "https://www.dt.gob.cl/portal/1626/w3-article-121011.html" },
      },
      {
        id: "certificado-f30",
        term: "Certificado F30",
        aka: ["Certificado de antecedentes laborales y previsionales"],
        definition:
          "Certificado de la Dirección del Trabajo que muestra la situación de un empleador: las multas que le ha aplicado la DT y sus deudas previsionales.",
        detail: "Se pide en línea por Mi DT sin costo, o de forma presencial en una Inspección del Trabajo.",
        related: [{ label: "Guía: F30 y F30-1", href: "/blog/certificados-f30-y-f30-1-diferencias" }],
        source: { label: "DT · Certificado F30", href: "https://www.dt.gob.cl/portal/1626/w3-article-100351.html" },
      },
      {
        id: "certificado-f30-1",
        term: "Certificado F30-1",
        aka: ["Certificado de cumplimiento de obligaciones laborales y previsionales"],
        definition:
          "Certificado de la Dirección del Trabajo que acredita que un empleador cumplió sus obligaciones laborales y previsionales con sus trabajadores en un período, incluidas las indemnizaciones por término de contrato. Es clave en subcontratación (artículo 183-C del Código del Trabajo).",
        detail:
          "Cada solicitud cubre de 1 a 3 meses consecutivos. Desde el 30 de agosto de 2023 se obtiene en Mi DT e incluye verificación por código QR.",
        related: [
          { label: "Guía: F30 y F30-1", href: "/blog/certificados-f30-y-f30-1-diferencias" },
          { label: "SADT descarga certificados a volumen", href: "/sadt" },
        ],
        source: { label: "DT · Certificado F30-1", href: "https://www.dt.gob.cl/portal/1626/w3-article-100359.html" },
      },
      {
        id: "subcontratacion",
        term: "Ley de Subcontratación",
        aka: ["Ley 20.123"],
        definition:
          "Normas del Código del Trabajo (artículos 183-A y siguientes) que regulan el trabajo en régimen de subcontratación y los servicios transitorios, incluida la responsabilidad de la empresa principal sobre las obligaciones laborales y previsionales de sus contratistas.",
        source: { label: "DT · Subcontratación", href: "https://www.dt.gob.cl/portal/1626/w3-article-93827.html" },
      },
    ],
  },
  {
    id: "poder-judicial",
    title: "Poder Judicial",
    description: "Conceptos para entender de dónde sale la información que revisa AXIS.",
    terms: [
      {
        id: "pjud",
        term: "PJUD",
        aka: ["Poder Judicial de Chile"],
        definition: "Sigla con que se conoce al Poder Judicial de Chile y a su sitio web, pjud.cl, donde se publica información de causas y tribunales.",
        related: [{ label: "AXIS consulta causas en PJUD", href: "/axis" }],
        source: { label: "Poder Judicial de Chile", href: "https://www.pjud.cl/" },
      },
      {
        id: "oficina-judicial-virtual",
        term: "Oficina Judicial Virtual",
        aka: ["OJV"],
        definition: "Plataforma en línea del Poder Judicial de Chile para consultar causas y hacer trámites judiciales.",
        source: { label: "Oficina Judicial Virtual", href: "https://oficinajudicialvirtual.pjud.cl/" },
      },
      {
        id: "causa-penal",
        term: "Causa penal",
        definition:
          "Proceso judicial por la posible comisión de un delito. Parte de la información de las causas penales es de acceso público a través del Poder Judicial, con las reservas que establece la ley.",
        related: [{ label: "AXIS revisa causas penales públicas", href: "/axis" }],
      },
    ],
  },
  {
    id: "documentos-e-ia",
    title: "Documentos e inteligencia artificial",
    description: "Tecnologías que usamos para convertir documentos y conocimiento interno en datos útiles.",
    terms: [
      {
        id: "ocr",
        term: "OCR",
        aka: ["Reconocimiento óptico de caracteres"],
        definition:
          "Tecnología que lee el texto de imágenes y PDFs escaneados y lo convierte en texto digital que un sistema puede buscar, copiar o procesar.",
        related: [
          { label: "OCR para empresas", href: "/ocr" },
          { label: "Guía: OCR con IA", href: "/blog/ocr-con-ia-digitalizar-documentos" },
        ],
      },
      {
        id: "idp",
        term: "Procesamiento inteligente de documentos",
        aka: ["IDP"],
        definition:
          "Combinación de OCR e inteligencia artificial que, además de leer el texto, identifica el tipo de documento, extrae campos concretos (proveedor, folio, monto, fecha) y los valida antes de enviarlos a otro sistema.",
        related: [{ label: "OCR para empresas", href: "/ocr" }],
      },
      {
        id: "agente-de-ia",
        term: "Agente de IA",
        definition:
          "Sistema que usa un modelo de lenguaje para decidir pasos y usar herramientas (buscar, consultar una base de datos, llenar un formulario) hasta completar una tarea, con reglas y límites definidos por la empresa.",
        related: [{ label: "Agentes y asistentes empresariales", href: "/servicios/agentes-ia" }, { label: "Guía: agentes de IA para empresas", href: "/blog/agentes-de-ia-para-empresas" }],
      },
      {
        id: "rag",
        term: "RAG",
        aka: ["Generación aumentada por recuperación"],
        definition:
          "Técnica en la que un asistente de IA busca primero en los documentos de la empresa y responde a partir de lo encontrado, idealmente citando la fuente. Es la base de asistentes internos como SOF.IA.",
        related: [{ label: "SOF.IA", href: "/productos/sofia" }],
      },
      {
        id: "api",
        term: "API",
        definition:
          "Interfaz que permite que dos sistemas intercambien datos de forma automática, sin que una persona copie información entre pantallas.",
        related: [{ label: "OCR Master API", href: "/ocr-master" }],
      },
      {
        id: "json",
        term: "JSON",
        definition: "Formato de texto estándar para intercambiar datos estructurados entre sistemas. Es la salida típica de una API.",
      },
    ],
  },
  {
    id: "automatizacion",
    title: "Automatización y proyectos",
    description: "Palabras que usamos al diseñar y poner en marcha una automatización.",
    terms: [
      {
        id: "auditoria-ia",
        term: "Auditoría IA de procesos",
        aka: ["Auditoría de automatización", "Auditoría de procesos con IA"],
        definition:
          "Revisión de cómo opera una empresa para identificar qué tareas automatizar, qué aplicaciones integrar en un sistema común y dónde la inteligencia artificial aporta valor, con oportunidades priorizadas y una hoja de ruta.",
        related: [{ label: "Servicio de auditoría IA", href: "/servicios/auditoria-ia" }],
      },
      {
        id: "automatizacion-de-procesos",
        term: "Automatización de procesos",
        definition:
          "Uso de software para ejecutar tareas repetitivas de un proceso (copiar datos, validar, registrar, avisar) con reglas claras, dejando a las personas las excepciones y decisiones.",
        related: [
          { label: "Guía: qué es la automatización con IA", href: "/blog/que-es-la-automatizacion-de-procesos-con-ia" },
          { label: "Servicio de automatización", href: "/servicios/automatizacion-procesos" },
        ],
      },
      {
        id: "rpa",
        term: "RPA",
        aka: ["Automatización robótica de procesos"],
        definition:
          "Software que repite acciones sobre la interfaz de otros sistemas (clics, formularios, descargas) como lo haría una persona. Se usa cuando el sistema no tiene API.",
      },
      {
        id: "validacion-humana",
        term: "Validación humana",
        aka: ["Human-in-the-loop"],
        definition:
          "Punto del flujo automatizado donde una persona revisa o aprueba antes de continuar, por ejemplo en casos ambiguos o de alto impacto.",
      },
      {
        id: "mvp",
        term: "MVP",
        aka: ["Producto mínimo viable"],
        definition: "Primera versión funcional y acotada de una automatización, pensada para probar el retorno con datos reales antes de ampliarla.",
        related: [{ label: "Cómo trabajamos", href: "/proceso" }],
      },
      {
        id: "uf",
        term: "UF",
        aka: ["Unidad de Fomento", "CLF"],
        definition:
          "Unidad de cuenta chilena que se reajusta según la inflación. Su valor en pesos cambia cada día; SADT y AXIS publican sus precios en UF.",
        related: [{ label: "Precios", href: "/precios" }],
      },
    ],
  },
];

export const GLOSSARY_TERMS = GLOSSARY.flatMap((group) => group.terms);

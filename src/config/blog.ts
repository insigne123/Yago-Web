// src/config/blog.ts
// Artículos del blog de YAGO orientados a SEO sobre automatización con IA.

import { EDITORIAL_AUTHOR } from "@/config/team";
import type { VideoInfo } from "@/lib/video";

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
  /** Preguntas frecuentes visibles al final del artículo (también como FAQPage). */
  faq?: { question: string; answer: string }[];
  sources?: { title: string; url: string }[];
  /** Video de YouTube que resume la guía; se muestra después de la introducción y como VideoObject. */
  video?: VideoInfo;
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
  { id: "documentos", title: "OCR y documentos", description: "Digitalizar documentos, estimar su costo, medir la calidad y conocer el marco legal.", slugs: ["ocr-con-ia-digitalizar-documentos", "cuanto-cuesta-digitalizar-documentos", "evaluar-piloto-ocr-precision-costos", "validez-legal-documentos-digitalizados-chile"] },
  { id: "laboral", title: "RRHH y Portal Mi DT", description: "Entender registros, plazos y certificados laborales de Chile.", slugs: ["certificados-f30-y-f30-1-diferencias", "automatizar-mi-dt-opciones-chile", "control-contratistas-subcontratacion-f30-1", "finiquito-electronico-mi-dt-plazos", "registro-contratos-terminos-mi-dt-plazos"] },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "cuanto-cuesta-digitalizar-documentos",
    title: "Cuánto cuesta digitalizar documentos: factores, cálculo y cotización",
    seoTitle: "Cuánto cuesta digitalizar documentos y cómo cotizar | YAGO",
    description: "Qué define el precio de un servicio de digitalización de documentos, cómo calcular cuánto te cuesta hoy la digitación manual y qué debe incluir una cotización.",
    excerpt: "Volumen, formatos, campos, validaciones, integraciones y revisión humana definen el costo. Fórmula, ejemplo ilustrativo y qué pedir en una cotización.",
    image: "/images/blog-ocr-ia.png",
    category: "Documentos y OCR",
    date: "2026-11-01",
    readingTime: "9 min",
    keywords: [
      "servicio de digitalización de documentos precio",
      "cuánto cuesta digitalizar documentos",
      "costo de digitalización de documentos",
      "servicios de digitalizacion de documentos",
      "precio OCR para empresas",
      "costo de digitación manual"
    ],
    intro: "El costo de digitalizar documentos depende de hasta dónde llega el trabajo: escanear, reconocer texto, extraer campos, validarlos e integrarlos a un sistema. Por eso dos cotizaciones pueden no ser comparables aunque hablen del mismo volumen. Esta guía explica qué factores definen el precio, cómo calcular cuánto te cuesta hoy la digitación manual, qué debería incluir una cotización y cómo cotiza YAGO.",
    sections: [
      {
        heading: "Qué se paga en un proyecto de digitalización de documentos",
        paragraphs: [
          "Un proyecto puede incluir varios componentes. Algunos se pagan una vez, como la configuración inicial y las integraciones, y otros se repiten cada mes según el volumen procesado.",
          "Cuando compares propuestas, identifica cuáles de estos componentes están incluidos. Una tarifa por documento baja puede excluir la revisión o la integración, que después recaen en tu equipo."
        ],
        bullets: [
          "Captura: escaneo de documentos en papel, si aplica, o recepción de archivos digitales por correo, carpeta o carga directa.",
          "Lectura: OCR para reconocer el texto de PDFs, imágenes y escaneos.",
          "Extracción: identificación de los campos que necesita tu proceso.",
          "Validación: reglas de formato, sumas, duplicados y cruces con tus datos maestros.",
          "Revisión humana: tiempo para resolver los casos dudosos, de tu equipo o del proveedor.",
          "Integración: envío de los datos a una planilla, un ERP o un sistema interno.",
          "Operación y soporte: monitoreo, ajustes por formatos nuevos y atención de incidencias."
        ],
        links: [
          {
            label: "Qué es la digitalización de documentos y cómo se hace un proyecto",
            href: "/blog/ocr-con-ia-digitalizar-documentos"
          }
        ]
      },
      {
        heading: "Factores que definen el precio",
        paragraphs: [
          "Estos factores explican por qué no existe un precio único por página para un servicio completo. Prepara la información de la tercera columna antes de pedir una cotización: acorta la evaluación y permite comparar propuestas con los mismos supuestos.",
          "Si tus documentos están en papel, el escaneo es un costo aparte. Depende de la cantidad de páginas, el estado del papel, la preparación previa, como ordenar y sacar corchetes, y del lugar donde se hace el trabajo."
        ],
        table: {
          columns: [
            "Factor",
            "Por qué cambia el costo",
            "Qué preparar"
          ],
          rows: [
            [
              "Volumen",
              "Define la capacidad de procesamiento, el consumo del motor de lectura y el tiempo total de revisión",
              "Documentos por mes, picos de carga y lotes históricos"
            ],
            [
              "Variedad de formatos",
              "Cada emisor o plantilla distinta requiere pruebas y, a veces, configuración propia",
              "Tipos de documento y emisores habituales"
            ],
            [
              "Calidad de los archivos",
              "Escaneos borrosos, fotos inclinadas o texto manuscrito generan más excepciones",
              "Ejemplos reales, incluidos los de baja calidad"
            ],
            [
              "Campos a extraer",
              "Más campos, tablas de detalle o cláusulas implican más configuración y revisión",
              "Lista de campos obligatorios y opcionales"
            ],
            [
              "Validaciones",
              "Cada regla se diseña, se prueba y se mantiene",
              "Reglas que aplicas hoy: formatos, sumas, duplicados y cruces"
            ],
            [
              "Integraciones",
              "Conectar con un ERP o sistema depende de sus interfaces y accesos",
              "Sistema de destino, interfaz disponible y responsable técnico"
            ],
            [
              "Revisión humana",
              "Los casos dudosos requieren tiempo de una persona, propia o del proveedor",
              "Quién revisa hoy y cuánto tiempo dedica"
            ]
          ]
        }
      },
      {
        heading: "Cómo calcular cuánto te cuesta hoy la digitación manual",
        paragraphs: [
          "Antes de evaluar una propuesta, mide tu línea base. La digitación manual tiene un costo aunque no aparezca como una factura: son horas de tu equipo que podrías destinar a otras tareas.",
          "Costo mensual actual = (documentos al mes × minutos por documento ÷ 60) × costo hora + costo de corregir errores.",
          "Costo de corregir errores = (documentos con error al mes × minutos de corrección ÷ 60) × costo hora.",
          "Para obtener el costo hora, divide el costo total mensual del puesto para la empresa por las horas trabajadas en el mes. Usa el costo total y no solo el sueldo líquido. Como referencia, el ingreso mínimo mensual para trabajadores mayores de 18 años y hasta 65 años es de $553.553 desde el 1 de mayo de 2026, según la Ley 21.830, que además dispone un reajuste por IPC a contar del 1 de enero de 2027. Es un mínimo legal de remuneración, no el costo total de un puesto.",
          "Mide los minutos con documentos reales: cronometra lectura, digitación, revisión y carga en una muestra de distintos tipos y emisores. Incluye el tiempo de quien corrige errores detectados después, porque también es parte del proceso, y registra el volumen de varios meses para considerar los picos."
        ]
      },
      {
        heading: "Ejemplo ilustrativo de cálculo",
        paragraphs: [
          "Este ejemplo usa supuestos para mostrar el método. No es un dato de mercado, una cotización ni el resultado de un cliente.",
          "Supuestos: 1.500 documentos al mes, 4 minutos por documento entre lectura, digitación y revisión, 8% de documentos que requieren una corrección de 10 minutos y un costo hora de $12.000, el mismo supuesto de la guía de retorno de la automatización.",
          "Con esa línea base puedes comparar una propuesta: costo mensual del servicio, más las horas de revisión que se mantienen, más la implementación distribuida en el período que definas. El ahorro no se debe suponer; se calcula con el tiempo de revisión medido en un piloto con tus documentos."
        ],
        table: {
          columns: [
            "Concepto",
            "Cálculo",
            "Resultado mensual"
          ],
          rows: [
            [
              "Digitación",
              "1.500 documentos × 4 minutos ÷ 60 × $12.000",
              "100 horas y $1.200.000"
            ],
            [
              "Correcciones",
              "120 documentos × 10 minutos ÷ 60 × $12.000",
              "20 horas y $240.000"
            ],
            [
              "Total",
              "Digitación más correcciones",
              "120 horas y $1.440.000"
            ],
            [
              "Costo por documento",
              "$1.440.000 ÷ 1.500 documentos",
              "$960"
            ]
          ]
        },
        links: [
          {
            label: "Cómo calcular el retorno de automatizar un proceso",
            href: "/blog/como-calcular-el-roi-de-automatizar-procesos"
          }
        ]
      },
      {
        heading: "Cuánto cuesta solo la lectura en la nube",
        paragraphs: [
          "Los proveedores de nube publican precios por página para sus motores de OCR. En su página de precios, Amazon Textract indica USD 0,0015 por página para extraer texto con Detect Document Text y USD 0,01 por página con Analyze Expense, la API que usa en su ejemplo de extracción de datos de facturas. En ambos casos corresponde al tramo del primer millón de páginas en la región US West (Oregon), según valores consultados el 1 de noviembre de 2026.",
          "Ese precio cubre la lectura. No incluye definir campos, diseñar validaciones, revisar excepciones, integrar con tu ERP ni operar el flujo. Por eso, comparar solo el precio por página del motor no muestra cuánto cuesta que un dato llegue correcto a tu sistema.",
          "Los precios de estos servicios cambian y se informan por región y tramo de volumen. Revisa la página oficial antes de usarlos en un cálculo."
        ]
      },
      {
        heading: "Qué debería incluir una cotización",
        paragraphs: [
          "Una cotización clara permite comparar propuestas con los mismos supuestos. Pide que indique al menos:"
        ],
        bullets: [
          "Tipos de documento, campos y volumen considerados.",
          "Cómo se medirá la calidad y qué criterio de aceptación se usará.",
          "Qué pasa con las excepciones y quién las revisa.",
          "Integraciones incluidas, interfaz que se usará y dependencias de tu equipo.",
          "Costos únicos y recurrentes por separado, con moneda, impuestos aplicables y vigencia.",
          "Qué ocurre si el volumen sube o baja, o si aparecen formatos nuevos.",
          "Condiciones de soporte, seguridad de los archivos y plazo de retención de los datos procesados."
        ],
        links: [
          {
            label: "Cómo evaluar un piloto OCR: calidad por campo y costo por documento",
            href: "/blog/evaluar-piloto-ocr-precision-costos"
          }
        ]
      },
      {
        heading: "Errores comunes al comparar precios",
        paragraphs: [
          "Estos errores hacen que una opción parezca más barata de lo que será en la operación:"
        ],
        bullets: [
          "Comparar el precio por página de un motor de lectura con el costo de un servicio completo.",
          "No incluir el tiempo de revisión que seguirá haciendo tu equipo.",
          "Cotizar con documentos limpios y operar con archivos de baja calidad.",
          "Olvidar los formatos nuevos que llegarán con nuevos proveedores o clientes.",
          "Suponer un ahorro sin haberlo medido en un piloto.",
          "Sumar implementación y operación en un solo total sin distinguir qué se repite cada mes."
        ]
      },
      {
        heading: "Cómo cotiza YAGO la digitalización de documentos",
        paragraphs: [
          "En YAGO no publicamos un precio por página para el servicio de OCR, porque el costo depende de los factores de esta guía. Cotizamos según volumen, tipos de documento e integraciones, después de evaluar una muestra de tus documentos reales.",
          "El proceso parte cuando nos cuentas qué documentos recibes y qué debería pasar con sus datos. Revisamos formatos, campos, validaciones y conexiones, y te proponemos un siguiente paso: evaluar una muestra, hacer un piloto o implementar.",
          "El servicio trabaja con archivos digitales o ya escaneados, como PDFs e imágenes. Si tus documentos están en papel, el escaneo se resuelve antes, con tu equipo o con un proveedor de escaneo. Si tu equipo técnico prefiere integrar la lectura en sus aplicaciones, OCR Master es la API de OCR de YAGO y tiene planes mensuales publicados por volumen de documentos."
        ],
        links: [
          {
            label: "Cotizar un servicio de digitalización de documentos con OCR",
            href: "/ocr"
          },
          {
            label: "Precios de YAGO: OCR y proyectos a medida",
            href: "/precios"
          },
          {
            label: "OCR Master: planes de la API de OCR",
            href: "/ocr-master"
          }
        ]
      }
    ],
    conclusion: "El precio de digitalizar documentos depende del volumen, la variedad de formatos, la calidad de los archivos, los campos, las validaciones, las integraciones y la revisión humana. Calcula primero cuánto te cuesta hoy la digitación manual, pide cotizaciones con supuestos comparables y separa implementación de operación. El ahorro se confirma midiendo un piloto con tus documentos.",
    faq: [
      {
        question: "¿Cuánto cuesta digitalizar un documento?",
        answer: "No hay un precio único. Depende de si solo se escanea o si también se extraen, validan e integran datos, y de factores como volumen, formatos y calidad de los archivos. Para tener un número útil, calcula tu costo actual y pide una cotización basada en una muestra."
      },
      {
        question: "¿Por qué un servicio de OCR para empresas no tiene un precio fijo por página?",
        answer: "Porque el trabajo cambia en cada proceso. No implica lo mismo leer un formulario uniforme que extraer tablas de facturas de muchos proveedores, validarlas e integrarlas a un ERP. El precio por página del motor de lectura es solo una parte del costo."
      },
      {
        question: "¿Qué necesito para pedir una cotización?",
        answer: "Una muestra de documentos reales, el volumen mensual aproximado, la lista de campos que necesitas y el sistema donde deben quedar los datos. Si puedes, agrega cuánto tiempo toma hoy procesar cada documento."
      },
      {
        question: "¿El precio incluye escanear documentos en papel?",
        answer: "Depende del proveedor. En YAGO el servicio parte desde archivos digitales o ya escaneados, como PDFs e imágenes. Si tus documentos están en papel, el escaneo se resuelve antes, con tu equipo o con un proveedor de escaneo."
      },
      {
        question: "¿Cómo calculo el ahorro de automatizar la digitación?",
        answer: "Compara el tiempo de intervención humana antes y después con volúmenes equivalentes y multiplica la diferencia por el costo hora. Usa datos medidos en un piloto y resta el costo del servicio y de la implementación."
      },
      {
        question: "¿Qué diferencia hay entre el costo de implementación y el de operación?",
        answer: "La implementación incluye definir campos, reglas, pruebas e integraciones, y se paga al inicio o por etapas. La operación se repite cada mes: procesamiento por volumen, revisión de excepciones y soporte."
      }
    ],
    sources: [
      {
        title: "Diario Oficial: Ley 21.830, reajuste del ingreso mínimo mensual (22 de junio de 2026)",
        url: "https://www.diariooficial.interior.gob.cl/publicaciones/2026/06/22/44481-B/01/2829298.pdf"
      },
      {
        title: "Amazon Textract: precios publicados por página",
        url: "https://aws.amazon.com/textract/pricing/"
      }
    ],
    product: {
      name: "OCR con IA",
      href: "/ocr",
      text: "YAGO cotiza la extracción de datos desde documentos según volumen, tipos de documento e integraciones, después de evaluar una muestra de tus archivos."
    },
    relatedSlugs: [
      "ocr-con-ia-digitalizar-documentos",
      "evaluar-piloto-ocr-precision-costos",
      "como-calcular-el-roi-de-automatizar-procesos"
    ]
  },
  {
    slug: "control-contratistas-subcontratacion-f30-1",
    title: "Control de contratistas: Ley de Subcontratación, F30-1 y estados de pago",
    seoTitle: "Control de contratistas y Ley de Subcontratación | YAGO",
    description: "Qué exige la Ley de Subcontratación a la empresa principal: derechos de información y retención, responsabilidad solidaria o subsidiaria, F30-1 y checklist.",
    excerpt: "Cómo pasar de responsabilidad solidaria a subsidiaria: qué pedir a cada contratista, cómo leer el F30-1 antes de pagar un estado de pago y qué revisar cada mes.",
    image: "/images/blog-f30-f30-1.png",
    category: "RRHH y cumplimiento",
    date: "2026-11-01",
    readingTime: "10 min",
    keywords: [
      "control de contratistas",
      "ley de subcontratación Chile",
      "responsabilidad solidaria y subsidiaria",
      "derecho de retención subcontratación",
      "F30-1 estado de pago",
      "artículo 183-C Código del Trabajo"
    ],
    intro: "Si tu empresa contrata obras o servicios que ejecuta otra empresa con sus propios trabajadores, la ley te hace responsable de lo que ese contratista les deba. Cuánto respondes depende de lo que hagas: si te informas y retienes cuando corresponde, tu responsabilidad es subsidiaria; si no, es solidaria. Esta guía resume los artículos 183-A a 183-E del Código del Trabajo, el rol del F30-1, qué revisar antes de pagar un estado de pago y una lista de control mensual.",
    sections: [
      {
        heading: "Qué es trabajo en régimen de subcontratación",
        paragraphs: [
          "La Ley 20.123, publicada en octubre de 2006, incorporó al Código del Trabajo las normas sobre subcontratación y servicios transitorios. Según la DT, entró en vigor el 14 de enero de 2007.",
          "El artículo 183-A define la subcontratación como el trabajo que hace un trabajador, con contrato de trabajo, para un contratista o subcontratista que, por un acuerdo contractual, ejecuta obras o servicios por su cuenta y riesgo y con trabajadores bajo su dependencia, para una empresa principal dueña de la obra, empresa o faena. No se aplica a obras o servicios discontinuos o esporádicos.",
          "Si los servicios no cumplen esos requisitos, o si solo hay intermediación de trabajadores, la ley entiende que el empleador es el dueño de la obra, empresa o faena, sin perjuicio de las sanciones del artículo 506. Las empresas de servicios transitorios tienen reglas propias desde el artículo 183-F; esta guía se enfoca en subcontratación."
        ],
        links: [
          {
            label: "Glosario: Ley de Subcontratación",
            href: "/glosario#subcontratacion"
          }
        ]
      },
      {
        heading: "Responsabilidad solidaria y subsidiaria: la diferencia práctica",
        paragraphs: [
          "Por regla general, la empresa principal es solidariamente responsable de las obligaciones laborales y previsionales de dar que tengan sus contratistas con sus trabajadores, incluidas las indemnizaciones legales por término de contrato (artículo 183-B). El contratista responde de la misma forma por sus subcontratistas.",
          "Si la empresa principal ejerce el derecho de información y el derecho de retención, su responsabilidad pasa a ser subsidiaria (artículo 183-D). En ambos casos, la responsabilidad se limita al período en que los trabajadores prestaron servicios en régimen de subcontratación para ella.",
          "Hay una excepción: en la construcción de edificaciones por un precio único prefijado, estas responsabilidades no proceden cuando quien encarga la obra es una persona natural."
        ],
        table: {
          columns: [
            "Aspecto",
            "Responsabilidad solidaria",
            "Responsabilidad subsidiaria"
          ],
          rows: [
            [
              "Cuándo aplica",
              "Cuando la empresa principal no ejerce sus derechos de información y retención (artículo 183-B)",
              "Cuando la empresa principal ejerce ambos derechos (artículo 183-D)"
            ],
            [
              "Cómo demanda el trabajador",
              "Puede demandar a su empleador directo y a todos los que puedan responder por sus derechos",
              "Demanda primero a su empleador directo; si este no paga, puede dirigirse contra la empresa principal"
            ],
            [
              "Qué cubre",
              "Obligaciones laborales y previsionales de dar, incluidas indemnizaciones legales por término",
              "Las mismas obligaciones, incluidas indemnizaciones legales por término"
            ],
            [
              "Por cuánto tiempo",
              "Solo el período en que los trabajadores prestaron servicios para la empresa principal",
              "El mismo período"
            ]
          ]
        }
      },
      {
        heading: "Derecho de información: qué puedes pedir a tus contratistas",
        paragraphs: [
          "El artículo 183-C da a la empresa principal, cuando lo solicite, el derecho a ser informada por sus contratistas sobre el monto y estado de cumplimiento de sus obligaciones laborales y previsionales con sus trabajadores, y también de las que tengan los subcontratistas. Los contratistas tienen el mismo derecho frente a sus subcontratistas.",
          "Ese cumplimiento se acredita con certificados de la Inspección del Trabajo o por medios idóneos que garanticen su veracidad. El reglamento de este artículo, el Decreto N° 319, regula ambas vías: los certificados de la DT y los que emiten entidades certificadoras acreditadas ante las Subsecretarías del Trabajo y de Previsión Social.",
          "El mismo reglamento permite a la empresa principal exigir la información a los subcontratistas en forma directa o a través del contratista. También le exige mantener una nómina actualizada de sus contratistas y subcontratistas a disposición de los servicios fiscalizadores."
        ]
      },
      {
        heading: "Derecho de retención: cuándo retener y qué hacer con lo retenido",
        paragraphs: [
          "Si el contratista o subcontratista no acredita a tiempo el cumplimiento íntegro de sus obligaciones, la empresa principal puede retener, de lo que le debe pagar, el monto del que es responsable (artículo 183-C). El contratista tiene el mismo derecho frente a sus subcontratistas.",
          "Retener no es quedarse con el dinero: quien retiene está obligado a pagar con esa suma al trabajador o a la institución previsional acreedora. La ley también permite pagar por subrogación directamente al trabajador o a la institución.",
          "El reglamento precisa que la retención solo procede cuando el contratista no acredita su cumplimiento en tiempo y forma, o por infracciones sobre remuneraciones, cotizaciones o indemnizaciones que la DT haya informado a la empresa principal. No puede tener otro fundamento.",
          "La DT debe informar a la empresa principal las infracciones que constate al fiscalizar a sus contratistas. Si la empresa principal, notificada, ejerce la retención, su responsabilidad también es subsidiaria (artículo 183-D)."
        ]
      },
      {
        heading: "El rol del F30-1 en el control de contratistas",
        paragraphs: [
          "El F30-1, o Certificado de cumplimiento de obligaciones laborales y previsionales, es el certificado de la DT que acredita lo que pide el artículo 183-C. Lo solicita el contratista en el Portal Mi DT, para una sola empresa principal, una sola obra, faena o servicio y de 1 a 3 meses consecutivos.",
          "Para cada mes, el certificado muestra los trabajadores vigentes y despedidos, si las cotizaciones están pagadas, las remuneraciones pagadas y no pagadas, y las indemnizaciones. Trae dos anexos: la nómina de trabajadores declarados y la de trabajadores con deuda.",
          "Un punto que conviene no pasar por alto: el certificado se emite con la información que entrega el propio solicitante. El F30-1 advierte que es responsabilidad de la empresa principal verificar que esos datos correspondan a la realidad de los servicios prestados, por ejemplo el total de trabajadores vigentes."
        ],
        links: [
          {
            label: "Guía: certificados F30 y F30-1, diferencias y cómo obtenerlos",
            href: "/blog/certificados-f30-y-f30-1-diferencias"
          }
        ]
      },
      {
        heading: "Qué revisar antes de pagar un estado de pago",
        paragraphs: [
          "Antes de aprobar un estado de pago, revisa el F30-1 del período con estos puntos. Si algo no cuadra, pide una aclaración o un certificado corregido antes de pagar."
        ],
        table: {
          columns: [
            "Qué revisar",
            "Dónde verlo en el F30-1",
            "Si no cuadra"
          ],
          rows: [
            [
              "Autenticidad",
              "Verificador de la DT (verificador.dirtrab.cl), con el número de certificado y la clave",
              "No lo des por válido hasta verificarlo"
            ],
            [
              "Empresa principal",
              "Antecedentes de la empresa principal",
              "Pide un certificado emitido para tu empresa"
            ],
            [
              "Obra o faena",
              "Sección Obra, Faena o Servicio, con el nombre según contrato civil",
              "Pide el certificado de la obra que estás pagando"
            ],
            [
              "Meses cubiertos",
              "Períodos y ámbito de validez",
              "Pide los meses que faltan"
            ],
            [
              "Pagos del período",
              "Remuneraciones pagadas y no pagadas, cotizaciones y anexo de trabajadores con deuda",
              "Evalúa retener el monto del que respondes y pagar con él al trabajador o a la institución"
            ],
            [
              "Dotación declarada",
              "Trabajadores vigentes y anexo de trabajadores declarados",
              "Contrasta con tu control de acceso y pide una aclaración"
            ],
            [
              "Subcontratistas",
              "F30-1 del subcontratista, emitido en modo subcontratista",
              "Exígelo en forma directa o a través del contratista"
            ]
          ]
        }
      },
      {
        heading: "Checklist mensual para la empresa principal",
        paragraphs: [
          "Una rutina mensual ayuda a sostener el control y a dejar evidencia de que ejerciste tus derechos:"
        ],
        bullets: [
          "Mantén al día la nómina de contratistas y subcontratistas que trabajan en tus obras o faenas.",
          "Pide a cada contratista el F30-1 de cada obra para el período que vas a pagar, y el de sus subcontratistas.",
          "Verifica cada certificado en verificador.dirtrab.cl y archívalo junto al estado de pago.",
          "Revisa pagos, deudas y dotación en cada certificado antes de aprobar el pago.",
          "Si falta acreditar algo, decide si retienes y documenta el monto y el motivo.",
          "Si retuviste, paga con esa suma a los trabajadores o a las instituciones previsionales acreedoras.",
          "Registra las infracciones que la DT te informe sobre tus contratistas y actúa sobre ellas.",
          "Revisa también la seguridad: el artículo 183-E obliga a la empresa principal a proteger la vida y salud de todos los trabajadores de su obra, empresa o faena, cualquiera sea su dependencia.",
          "Al incorporar un contratista nuevo, puedes pedir su F30 como antecedente de multas ejecutoriadas y deuda previsional publicada."
        ]
      },
      {
        heading: "Si eres contratista: cómo cumplir sin atrasar tus cobros",
        paragraphs: [
          "Del otro lado, el contratista necesita entregar sus certificados a tiempo para que su estado de pago avance. Lo que más ayuda es tener listos los requisitos antes de pedirlos:"
        ],
        bullets: [
          "Paga las cotizaciones de todos tus trabajadores en forma electrónica, por Previred, Caja Los Andes o Caja La Araucana.",
          "Ten al menos un representante laboral electrónico habilitado en Mi DT.",
          "Prepara por obra los archivos de remuneraciones y despidos del mes en CSV, como pide el formulario.",
          "Considera el plazo de respuesta de la DT, de hasta 48 horas hábiles, antes de la fecha de corte de cada mandante.",
          "Pide a tus subcontratistas su propio F30-1, porque respondes por ellos frente a sus trabajadores."
        ],
        links: [
          {
            label: "SADT: F30 y F30-1 por lote, ordenados por obra y período",
            href: "/sadt"
          }
        ]
      }
    ],
    faq: [
      {
        question: "¿Qué es la responsabilidad solidaria en subcontratación?",
        answer: "Es la regla general del artículo 183-B del Código del Trabajo: la empresa principal responde junto con el contratista por las obligaciones laborales y previsionales de dar con sus trabajadores, incluidas las indemnizaciones legales. El trabajador puede demandar a su empleador directo y a todos los que puedan responder por sus derechos."
      },
      {
        question: "¿Cómo pasa la empresa principal de responsabilidad solidaria a subsidiaria?",
        answer: "Ejerciendo el derecho de información y el derecho de retención del artículo 183-C. En ese caso responde en forma subsidiaria, es decir, después del empleador directo (artículo 183-D)."
      },
      {
        question: "¿Puede la empresa principal retener el pago a un contratista?",
        answer: "Sí, cuando el contratista no acredita a tiempo el cumplimiento íntegro de sus obligaciones laborales y previsionales. Puede retener el monto del que es responsable y debe pagar con él al trabajador o a la institución previsional acreedora."
      },
      {
        question: "¿Qué certificado acredita el cumplimiento de un contratista?",
        answer: "El Certificado de cumplimiento de obligaciones laborales y previsionales, conocido como F30-1, que la DT emite en Mi DT. La ley también admite medios idóneos, como los certificados de entidades acreditadas según el Decreto N° 319."
      },
      {
        question: "¿La empresa principal responde por los trabajadores de un subcontratista?",
        answer: "Sí, en los términos del artículo 183-B. Además, el derecho de información del artículo 183-C incluye a los subcontratistas, y el reglamento permite pedirles la información en forma directa o a través del contratista."
      },
      {
        question: "¿El F30 sirve para cursar un estado de pago?",
        answer: "El F30 muestra las multas ejecutoriadas y la deuda previsional publicada del empleador, pero no certifica el pago de remuneraciones y cotizaciones de una obra en un período. Para eso existe el F30-1."
      },
      {
        question: "¿Por cuánto tiempo responde la empresa principal?",
        answer: "Solo por el tiempo en que los trabajadores del contratista prestaron servicios en régimen de subcontratación para ella. Esto vale tanto para la responsabilidad solidaria como para la subsidiaria."
      }
    ],
    conclusion: "La Ley de Subcontratación hace a la empresa principal responsable de lo que sus contratistas deban a sus trabajadores durante el período en que le prestaron servicios. Ejercer el derecho de información y, cuando corresponde, el de retención cambia esa responsabilidad de solidaria a subsidiaria. El F30-1 es la forma de acreditarlo, siempre que revises su contenido y lo verifiques en la DT. Esta guía es informativa; ante un caso particular, consulta a la Dirección del Trabajo o a un asesor laboral.",
    sources: [
      {
        title: "Biblioteca del Congreso Nacional: Código del Trabajo, artículos 183-A a 183-E",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=207436"
      },
      {
        title: "Biblioteca del Congreso Nacional: Ley 20.123 sobre subcontratación y servicios transitorios",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=254080"
      },
      {
        title: "Biblioteca del Congreso Nacional: Decreto N° 319, reglamento del artículo 183-C",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=257655"
      },
      {
        title: "Dirección del Trabajo: Subcontratación",
        url: "https://www.dt.gob.cl/portal/1626/w3-article-93827.html"
      },
      {
        title: "Dirección del Trabajo: Certificado de cumplimiento de obligaciones laborales y previsionales (F30-1)",
        url: "https://www.dt.gob.cl/portal/1626/w3-article-100359.html"
      },
      {
        title: "Dirección del Trabajo: Guía rápida del certificado F30-1 (2024)",
        url: "https://www.dt.gob.cl/portal/1626/articles-100359_recurso_1.pdf"
      },
      {
        title: "Dirección del Trabajo: Así se obtiene ahora el certificado F30-1 (agosto de 2023)",
        url: "https://www.dt.gob.cl/portal/1627/w3-article-124815.html"
      }
    ],
    product: {
      name: "SADT",
      href: "/sadt",
      text: "SADT solicita y descarga por lote los F30 y F30-1 de tu empresa en Mi DT, ordenados por obra y período, con un tablero y evidencia de cada solicitud."
    },
    relatedSlugs: [
      "certificados-f30-y-f30-1-diferencias",
      "registro-contratos-terminos-mi-dt-plazos",
      "finiquito-electronico-mi-dt-plazos"
    ]
  },
  {
    slug: "finiquito-electronico-mi-dt-plazos",
    title: "Finiquito electrónico en Mi DT: requisitos, plazos y cómo se paga",
    seoTitle: "Finiquito electrónico en Mi DT: plazos y pago | YAGO",
    description: "Cómo funciona el finiquito electrónico en Mi DT: requisitos, plazo de 10 días hábiles, respuesta del trabajador, pago vía Tesorería y qué pasa si lo rechaza.",
    excerpt: "El finiquito electrónico se firma en Mi DT y se paga por la Tesorería. Requisitos, plazos para cada parte, carga masiva y qué pasa si el trabajador rechaza.",
    image: "/images/blog-registro-mi-dt.png",
    category: "RRHH y cumplimiento",
    date: "2026-11-01",
    readingTime: "9 min",
    keywords: [
      "finiquito electrónico",
      "finiquito electrónico DT",
      "plazo para pagar finiquito",
      "cómo se paga el finiquito electrónico",
      "finiquito electrónico reserva de derechos",
      "finiquito Mi DT"
    ],
    intro: "El finiquito se puede otorgar, firmar y pagar en el Portal Mi DT. Desde la Ley 21.361, de 2021, el Código del Trabajo considera ratificado ante el inspector del trabajo el finiquito que el empleador otorga en el sitio de la Dirección del Trabajo y que el trabajador firma ahí mismo. Esta guía explica qué requisitos pide la DT, qué plazos corren para cada parte, cómo se paga y qué pasa si el trabajador rechaza o no responde.",
    sections: [
      {
        heading: "Qué es el finiquito electrónico",
        paragraphs: [
          "Es el documento con que empleador y trabajador dejan constancia del término del contrato, de los pagos que este genera y de otros acuerdos asociados, firmado en Mi DT. La DT actúa como ministro de fe: verifica la identidad de las partes, su acuerdo y que el pago se haya hecho por la plataforma de la Tesorería General de la República.",
          "Según la DT, produce el mismo efecto jurídico que el finiquito ratificado en forma presencial. Las diferencias son dos: no admite pago en cuotas y el pago se hace a través de la Tesorería. El trámite es gratuito.",
          "Debe indicar, al menos, la causal de término, los pagos, las sumas que queden pendientes y la reserva de derechos que haga el trabajador. Firmarlo en forma electrónica es siempre voluntario para el trabajador, que puede optar por la vía presencial ante un ministro de fe.",
          "Mi DT también permite firmar en forma electrónica la renuncia y el mutuo acuerdo, que se consideran ratificados de la misma manera."
        ]
      },
      {
        heading: "Antes del finiquito: el aviso de término",
        paragraphs: [
          "En el aviso de término del contrato, el empleador debe informar si otorgará y pagará el finiquito en forma presencial o electrónica. También debe indicar que aceptar, firmar y recibir el pago en forma electrónica es voluntario para el trabajador, que siempre puede optar por hacerlo ante un ministro de fe, y que al firmar puede formular reserva de derechos (artículo 162).",
          "En Mi DT, el empleador carga la copia del aviso en Carta electrónica de aviso de despido y registra el término en el registro electrónico laboral. Los plazos de ambos trámites dependen de la causal y están en nuestra guía de registro de contratos y términos."
        ],
        links: [
          {
            label: "Registro de contratos y términos en Mi DT: plazos por causal",
            href: "/blog/registro-contratos-terminos-mi-dt-plazos"
          },
          {
            label: "Glosario: registro de término de contrato",
            href: "/glosario#registro-de-termino"
          }
        ]
      },
      {
        heading: "Requisitos para usar el finiquito electrónico",
        paragraphs: [
          "La DT y su manual del trámite señalan estas condiciones. Si alguna no se cumple, el finiquito se hace en forma presencial, en una Inspección del Trabajo, notaría u otro ministro de fe:"
        ],
        bullets: [
          "Lo inicia el exempleador desde el perfil Empleador de Mi DT. Si es persona jurídica, actúa por medio de un representante laboral electrónico habilitado.",
          "El empleador necesita una cuenta bancaria vigente en Chile para transferir el pago a través de la Tesorería.",
          "El extrabajador debe haber sido contratado a partir del 1 de enero de 2011.",
          "Las cotizaciones del trabajador deben estar pagadas y registradas en Previred. La plataforma no envía la propuesta si el trabajador está jubilado, si las cotizaciones se pagaron en forma manual o si no hay pago continuo, incluidas cotizaciones declaradas y no pagadas.",
          "La relación laboral debe estar registrada en la AFC. Si no lo está, el sistema no deja continuar hasta hacer el aviso de iniciación de servicios o pagar las cotizaciones de cesantía.",
          "Necesitas el correo electrónico personal del extrabajador, no el corporativo. Sin ese dato no se puede enviar la propuesta.",
          "El extrabajador necesita ClaveÚnica y una cuenta bancaria vigente a su nombre: cuenta corriente, cuenta vista o CuentaRUT.",
          "Si la causal es del artículo 161, el sistema pide una declaración jurada sobre el Registro Nacional de Deudores de Pensiones de Alimentos. Si el empleador fue notificado por el tribunal, no puede seguir por esta vía."
        ]
      },
      {
        heading: "Paso a paso para el empleador en Mi DT",
        paragraphs: [
          "El flujo que describe el manual de la DT para el empleador es:"
        ],
        bullets: [
          "Entra a Mi DT con ClaveÚnica, elige el perfil Empleador y, en Contratos de Trabajo y Despido, abre Finiquito Laboral Electrónico.",
          "Selecciona Ingreso finiquito y acepta los términos y condiciones del trámite.",
          "Identificación de las partes: los datos de la empresa vienen de su perfil. Busca al trabajador por RUT y completa su dirección, teléfono y correo personal.",
          "Relación laboral: registra funciones, lugar de trabajo, fechas de inicio y término, y la causal.",
          "Montos: ingresa indemnizaciones, remuneraciones imponibles y no imponibles, descuentos y los datos de la cuenta bancaria del trabajador.",
          "Revisa la propuesta. Si la causal no es mutuo acuerdo ni renuncia, autoriza a Previred a compartir los datos de cotizaciones para revisar su pago.",
          "Selecciona Firmar y enviar. Desde ese momento no puedes modificar la propuesta.",
          "El sistema revisa las cotizaciones. Si hay deuda, rechaza la propuesta por períodos sin informar; si no la hay, la deja pendiente de aceptación y avisa al trabajador por correo."
        ]
      },
      {
        heading: "Plazos del finiquito electrónico",
        paragraphs: [
          "El finiquito debe otorgarse y su pago ponerse a disposición del trabajador dentro de 10 días hábiles desde la separación (artículo 177). En el finiquito electrónico, la DT fija además estos plazos:"
        ],
        table: {
          columns: [
            "Etapa",
            "Quién",
            "Plazo"
          ],
          rows: [
            [
              "Ingresar la propuesta",
              "Exempleador",
              "10 días hábiles desde la separación. Si se ingresa después, el monto incluye reajustes e intereses."
            ],
            [
              "Responder la propuesta",
              "Extrabajador",
              "10 días hábiles, contados de lunes a sábado. Si no responde, la propuesta caduca."
            ],
            [
              "Nueva propuesta tras la caducidad",
              "Exempleador",
              "3 días hábiles desde la caducidad, en forma electrónica o presencial"
            ],
            [
              "Finiquito presencial si el trabajador rechaza",
              "Exempleador",
              "Dentro de los 10 días hábiles desde la separación o, si ya vencieron, 3 días hábiles desde el rechazo"
            ],
            [
              "Pagar el finiquito aceptado",
              "Exempleador",
              "5 días hábiles, contados de lunes a sábado, desde la aceptación"
            ],
            [
              "Depositar en la cuenta del trabajador",
              "Tesorería General de la República",
              "5 días hábiles, contados de lunes a viernes, desde el pago"
            ],
            [
              "Dejar el finiquito ratificado en Mi DT",
              "Dirección del Trabajo",
              "Hasta 2 días hábiles desde la confirmación del pago"
            ]
          ]
        }
      },
      {
        heading: "Qué puede responder el trabajador",
        paragraphs: [
          "El extrabajador revisa la propuesta en Mi DT y tiene cuatro opciones: aceptarla, aceptarla con reserva de derechos, rechazarla o no responder."
        ],
        bullets: [
          "Aceptar: el empleador debe pagar dentro de 5 días hábiles. Con el pago confirmado, se genera el finiquito ratificado.",
          "Aceptar con reserva de derechos: el trabajador escribe las diferencias que tiene con la propuesta. La reserva no requiere la aceptación del empleador ni impide el pago de las sumas no disputadas. Lo reservado se puede reclamar ante la DT o en tribunales.",
          "Rechazar: queda un comprobante de rechazo y el empleador ya no puede hacer una nueva propuesta electrónica. Debe poner el finiquito a disposición en forma presencial, en una notaría o Inspección del Trabajo.",
          "No responder: a los 10 días hábiles la propuesta caduca y se emite un comprobante de caducidad. El empleador puede hacer una nueva propuesta, electrónica o presencial."
        ]
      },
      {
        heading: "Cómo se paga el finiquito electrónico",
        paragraphs: [
          "Cuando el trabajador acepta, el representante laboral electrónico selecciona pagar el finiquito y Mi DT lo redirige al sitio de la Tesorería General de la República, donde hace la transferencia.",
          "No se puede pagar en cuotas. La DT no fija un tope para el monto de la transferencia, aunque el banco del trabajador puede tener sus propias reglas. Si el banco rechaza el depósito, la Tesorería coordina el pago por caja en BancoEstado o con un cheque enviado al domicilio del trabajador.",
          "Si el empleador no paga dentro de los 5 días hábiles, Mi DT genera un Acta de acuerdo por término de contrato de trabajo con las sumas comprometidas. Esa acta es un título ejecutivo laboral, que el trabajador puede hacer valer ante los juzgados de cobranza laboral y previsional."
        ]
      },
      {
        heading: "Finiquitos a volumen: carga y pago masivo",
        paragraphs: [
          "Para empresas con alta rotación, Mi DT permite ingresar propuestas de finiquito en forma masiva, con un máximo de 100 extrabajadores por carga. Se descarga la Plantilla de finiquito masivo desde el trámite, se completa y se carga; cada propuesta llega en forma individual a cada extrabajador.",
          "El pago también puede hacerse en forma masiva, con hasta 1.000 finiquitos aceptados en un solo proceso. Solo puede existir una propuesta vigente por extrabajador, sea individual o masiva.",
          "A volumen, valida antes de cargar los datos que la DT exige o revisa: correo personal, cuenta bancaria, causal y cotizaciones al día. Luego sigue el estado de cada propuesta y mantén al día el registro de los términos."
        ],
        links: [
          {
            label: "SADT: registro de términos de contrato en Mi DT por lote",
            href: "/sadt"
          }
        ]
      }
    ],
    faq: [
      {
        question: "¿Cuál es el plazo para pagar el finiquito?",
        answer: "El finiquito debe otorgarse y su pago ponerse a disposición del trabajador dentro de 10 días hábiles desde la separación (artículo 177 del Código del Trabajo). En el finiquito electrónico, una vez que el trabajador acepta, el empleador tiene 5 días hábiles, contados de lunes a sábado, para pagar."
      },
      {
        question: "¿El finiquito electrónico vale lo mismo que el firmado ante notario o inspector?",
        answer: "Sí. La ley lo considera ratificado ante el inspector del trabajo y, según la DT, produce el mismo efecto jurídico que el finiquito ratificado en forma presencial."
      },
      {
        question: "¿Se puede pagar el finiquito electrónico en cuotas?",
        answer: "No. El empleador no puede proponer cuotas en el finiquito electrónico. El pago en cuotas solo puede pactarse con acuerdo del trabajador en un finiquito presencial."
      },
      {
        question: "¿Qué pasa si el trabajador no responde la propuesta?",
        answer: "A los 10 días hábiles, contados de lunes a sábado, la propuesta queda sin efecto y se emite un comprobante de caducidad. El empleador puede hacer una nueva propuesta, en forma electrónica o presencial."
      },
      {
        question: "¿El trabajador está obligado a firmar el finiquito en forma electrónica?",
        answer: "No. La ley establece que siempre es voluntario para el trabajador. Si rechaza la propuesta, el empleador debe poner a disposición el finiquito en forma presencial ante un ministro de fe."
      },
      {
        question: "¿Por qué Mi DT no deja enviar la propuesta de finiquito?",
        answer: "La DT no lo permite si el trabajador está jubilado, si sus cotizaciones se pagaron en forma manual o tienen períodos sin pagar, si falta su correo personal o si fue contratado antes de 2011. El sistema también exige que la relación laboral esté registrada en la AFC."
      },
      {
        question: "¿Cuánto cuesta el finiquito electrónico?",
        answer: "Nada. La DT informa que el Finiquito Laboral Electrónico es un trámite gratuito."
      }
    ],
    conclusion: "El finiquito electrónico se otorga en Mi DT, el trabajador lo acepta, lo acepta con reserva o lo rechaza, y el pago se hace por la Tesorería. Los plazos clave son 10 días hábiles para otorgar el finiquito desde la separación, 10 días hábiles para que el trabajador responda y 5 días hábiles para pagar una vez aceptado. Revisa antes los requisitos de cotizaciones, correo y cuenta bancaria para que la propuesta no se rechace. Esta guía es informativa; ante un caso particular, consulta a la Dirección del Trabajo o a un asesor laboral.",
    sources: [
      {
        title: "Biblioteca del Congreso Nacional: Código del Trabajo, artículos 162 y 177",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=207436"
      },
      {
        title: "Biblioteca del Congreso Nacional: Resolución Exenta N° 1.340 de 2021 de la Dirección del Trabajo",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=1168165"
      },
      {
        title: "Dirección del Trabajo: Ratificación de un finiquito de trabajo",
        url: "https://www.dt.gob.cl/portal/1626/w3-article-117245.html"
      },
      {
        title: "Dirección del Trabajo: Manual de uso para el empleador, Finiquito Laboral Electrónico",
        url: "https://www.dt.gob.cl/portal/1626/articles-117245_recurso_3.pdf"
      },
      {
        title: "Dirección del Trabajo: ¿Qué es el Finiquito Laboral Electrónico?",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-117372.html"
      },
      {
        title: "Dirección del Trabajo: Diferencias con el finiquito ratificado de manera presencial",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-118097.html"
      },
      {
        title: "Dirección del Trabajo: Requisitos para utilizar el Finiquito Laboral Electrónico",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-118105.html"
      },
      {
        title: "Dirección del Trabajo: Plazo del ex trabajador para aceptar la propuesta",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-118108.html"
      },
      {
        title: "Dirección del Trabajo: Plazo del ex empleador para pagar el finiquito aceptado",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-120399.html"
      },
      {
        title: "Dirección del Trabajo: Qué pasa si el ex trabajador no está de acuerdo con la propuesta",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-118114.html"
      },
      {
        title: "Dirección del Trabajo: Propuestas simultáneas de Finiquito Laboral Electrónico",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-120460.html"
      },
      {
        title: "Dirección del Trabajo: Carta electrónica de aviso de despido",
        url: "https://www.dt.gob.cl/portal/1626/w3-article-100380.html"
      }
    ],
    product: {
      name: "SADT",
      href: "/sadt",
      text: "SADT registra por lote los términos de contrato en Mi DT y guarda el comprobante de cada registro, con un tablero para ver qué quedó registrado y qué falta."
    },
    relatedSlugs: [
      "registro-contratos-terminos-mi-dt-plazos",
      "certificados-f30-y-f30-1-diferencias",
      "control-contratistas-subcontratacion-f30-1"
    ]
  },
  {
    slug: "validez-legal-documentos-digitalizados-chile",
    title: "Validez legal de documentos digitalizados en Chile: qué dice la normativa",
    seoTitle: "Validez legal de documentos digitalizados en Chile | YAGO",
    description: "Qué dicen la Ley 19.799, la Ley 18.845, el SII y la Dirección del Trabajo sobre documentos electrónicos, copias digitalizadas y plazos de conservación.",
    excerpt: "Documento electrónico, copia escaneada y microforma no tienen el mismo valor. Reglas de la Ley 19.799, la Ley 18.845, el SII y la DT, con fuentes oficiales.",
    image: "/images/blog-ocr-ia.png",
    category: "Documentos y OCR",
    date: "2026-11-01",
    readingTime: "13 min",
    keywords: [
      "validez legal documentos digitalizados",
      "digitalizacion de documentos chile",
      "ley 19.799 documento electrónico",
      "ley 18.845 microformas",
      "conservación de documentos tributarios",
      "documentación laboral electrónica"
    ],
    intro: "Digitalizar un documento no cambia por sí solo su valor legal. En Chile, un documento creado y firmado electrónicamente, una copia escaneada de un papel y una microforma hecha según la Ley 18.845 siguen reglas distintas. Esta guía resume qué dicen la Ley 19.799, la Ley 18.845, el SII y la Dirección del Trabajo, con enlaces a las fuentes oficiales. Esta guía es informativa y no constituye asesoría legal.",
    sections: [
      {
        heading: "Documento electrónico, copia escaneada y microforma",
        paragraphs: [
          "La Ley 19.799 regula los documentos electrónicos, sus efectos legales y el uso de firma electrónica. Define documento electrónico como toda representación de un hecho, imagen o idea que sea creada, enviada, comunicada o recibida por medios electrónicos y almacenada de un modo idóneo para permitir su uso posterior.",
          "Una copia escaneada es una imagen de un documento que nació en papel. La Ley 19.799 no contiene reglas específicas sobre digitalizar papel. Ese tema lo regula la Ley 18.845, modificada por la Ley 21.180 de 2019, que define microforma como una imagen compactada o digitalizada de un documento original, obtenida con una tecnología idónea para su almacenamiento, conservación, uso y recuperación posterior.",
          "En la práctica, conviene distinguir tres situaciones:"
        ],
        bullets: [
          "Documento electrónico de origen: nace y se firma en formato electrónico, como un contrato con firma electrónica o una factura electrónica.",
          "Copia escaneada simple: sirve para consultar y operar, pero no tiene automáticamente el mérito que la Ley 18.845 reconoce a las microformas que cumplen sus requisitos.",
          "Microforma según la Ley 18.845: imagen digitalizada que cumple los requisitos de esa ley y puede tener el mismo mérito que el original."
        ]
      },
      {
        heading: "Qué establece la Ley 19.799 sobre la firma electrónica",
        paragraphs: [
          "La ley se rige por principios como la neutralidad tecnológica y la equivalencia del soporte electrónico al soporte de papel. Su artículo 3 establece que los actos y contratos suscritos por medio de firma electrónica son válidos de la misma manera y producen los mismos efectos que los celebrados por escrito y en soporte de papel. No se aplica a los actos en que la ley exige una solemnidad que no se puede cumplir mediante documento electrónico, a los que requieren la concurrencia personal de alguna de las partes ni a los relativos al derecho de familia.",
          "La ley distingue dos tipos de firma. La firma electrónica es cualquier sonido, símbolo o proceso electrónico que permite al receptor identificar al menos formalmente al autor. La firma electrónica avanzada está certificada por un prestador acreditado, se crea con medios que el titular mantiene bajo su exclusivo control y permite detectar cualquier modificación posterior. Los documentos electrónicos que tengan la calidad de instrumento público deben suscribirse con firma electrónica avanzada.",
          "Para presentarlos como prueba en juicio, el artículo 5 fija las reglas que resume la tabla."
        ],
        table: {
          columns: [
            "Documento electrónico",
            "Valor probatorio según el artículo 5"
          ],
          rows: [
            [
              "Instrumento público con firma electrónica avanzada",
              "Hace plena prueba de acuerdo con las reglas generales"
            ],
            [
              "Instrumento privado con firma electrónica avanzada",
              "Tiene el mismo valor probatorio, pero no hace fe respecto de su fecha salvo que conste un fechado electrónico de un prestador acreditado"
            ],
            [
              "Instrumento privado con firma electrónica no avanzada",
              "Tiene el valor probatorio que corresponda de acuerdo con las reglas generales"
            ]
          ]
        }
      },
      {
        heading: "Ley 18.845: cuándo una copia digitalizada tiene el mismo mérito que el original",
        paragraphs: [
          "La Ley 18.845 exige que el método garantice la duración, indelebilidad, integridad, legibilidad y fidelidad de las microformas en una medida equiparable a la de los documentos originales, y que permita obtener copias fieles. Su mérito probatorio se rige por la Ley 19.799 y por la propia Ley 18.845.",
          "Para archivos privados, como los de una empresa, el artículo 5 dispone que las microformas y sus copias tienen el mismo mérito que los originales si cumplen dos requisitos: que la microforma la haya hecho una persona o entidad inscrita en el registro respectivo y que incluya las actas de apertura y de cierre que exige el artículo 3, en las que interviene un ministro de fe. Según el DFL 4 de 1991 del Ministerio de Justicia, ese registro funciona bajo la dependencia del Conservador del Archivo Nacional.",
          "La ley también fija límites. Las letras de cambio, pagarés, cheques y otros títulos de crédito o de inversión solo pueden hacerse valer con el documento original. Además, está prohibido destruir documentos de valor histórico o cultural aunque consten en una microforma.",
          "Salvo los documentos de valor histórico o cultural y los tributarios, que tienen una regla propia en el artículo 7, el artículo 6 permite destruir los originales en papel que consten en una microforma hecha conforme a la ley una vez transcurridos diez años desde la microcopia, si son instrumentos públicos, o cinco años, si son instrumentos privados. Antes se debe publicar un aviso en el Diario Oficial, con al menos 60 días de anticipación para archivos públicos y 90 días para archivos privados, y el Conservador del Archivo Nacional puede oponerse a la destrucción. La ley aclara que no modifica otras normas que fijan obligaciones específicas de conservación."
        ]
      },
      {
        heading: "Documentos tributarios: qué indica el SII",
        paragraphs: [
          "Según el SII, la factura electrónica es una representación informática de un documento tributario que reemplaza al documento emitido en papel. El SII indica que el emisor electrónico genera y guarda los documentos tributarios electrónicos (DTE) en formato XML, que el receptor electrónico los recibe en ese formato y los usa como respaldo contable, y que un receptor manual debe conservar la versión impresa.",
          "Sobre los plazos, el artículo 17 del Código Tributario exige conservar los libros de contabilidad junto con la documentación correspondiente mientras esté pendiente el plazo que tiene el SII para revisar las declaraciones. El artículo 200 fija ese plazo en tres años desde la expiración del plazo legal de pago y en seis años para impuestos sujetos a declaración cuando esta no se presentó o fue maliciosamente falsa. Además, el artículo 58 de la Ley sobre Impuesto a las Ventas y Servicios (DL 825) exige conservar los duplicados de facturas y los originales de boletas durante seis años.",
          "El mismo artículo 58 permite que el SII autorice destruir esos documentos antes de plazo cuando conservarlos genera dificultades de orden material. En su Oficio Ordinario N° 57 de 2021, el SII explica que la autorización se concede solo por años comerciales completos, no puede referirse a los últimos tres años salvo que se haya revisado la contabilidad y liquidado los impuestos, y que la destrucción se hace en presencia de funcionarios del Servicio, con acta. ChileAtiende indica que la solicitud se presenta con el Formulario 2117.",
          "La Ley 18.845 agrega una regla en su artículo 7. Mientras estén pendientes los plazos del artículo 200, se aplica el artículo 97 N° 16 del Código Tributario, que sanciona con multa la pérdida o inutilización no fortuita de libros y documentos, aunque estén incluidos en una microforma. Con todo, los Directores Regionales del SII pueden autorizar la destrucción antes de esos plazos si los documentos se incluyeron previamente en una microforma conforme a esa ley y a las normas que fije el Director Nacional."
        ]
      },
      {
        heading: "Documentación laboral electrónica: qué exige la Dirección del Trabajo",
        paragraphs: [
          "La Dirección del Trabajo indicó en su Ord. N° 104 de 2022 que su doctrina vigente sobre el uso de medios electrónicos para la documentación laboral es la del Dictamen N° 0789/15, de 16 de febrero de 2015.",
          "Los documentos laborales individuales son instrumentos privados, por lo que no requieren firma electrónica avanzada. En el Ord. N° 727 de 2025, la DT señaló que no hay inconveniente en usar el reconocimiento facial como firma electrónica simple, siempre que se integre a una solución que cumpla el dictamen.",
          "Según el resumen del Ord. N° 4952 de 2018, los requisitos del dictamen son copulativos, es decir, se deben cumplir todos. Entre ellos están:"
        ],
        bullets: [
          "Consulta directa del fiscalizador por internet, sin impedimentos por fecha, volumen o tipo de documento.",
          "Acceso a la misma información desde computadores del empleador en el lugar de trabajo.",
          "Impresión de los documentos y certificación con firma electrónica simple o avanzada, según su naturaleza.",
          "Consentimiento expreso del trabajador; si no lo da, la documentación se entrega en papel.",
          "Envío automático del documento a la casilla de correo particular que indique el trabajador, no a una institucional.",
          "Acceso permanente del trabajador a su documentación, con resguardo de su fidelidad."
        ],
        links: [
          {
            label: "Registro de contratos y términos en Mi DT: plazos y cómo hacerlo",
            href: "/blog/registro-contratos-terminos-mi-dt-plazos"
          }
        ]
      },
      {
        heading: "Pasar documentos laborales de papel a formato electrónico",
        paragraphs: [
          "En el Ord. N° 6554 de 2015, la DT respondió si un empleador puede reemplazar su documentación laboral en papel por copias electrónicas. Concluyó que no existe impedimento si la transición se hace en los términos de su informe, que describe dos vías: digitalizar según la Ley 18.845, con una entidad inscrita en el registro y las actas de apertura y cierre, o crear un nuevo documento con idéntico texto, firmado electrónicamente por trabajador y empleador y que cumpla el Dictamen N° 789/015.",
          "El mismo informe recuerda que toda la documentación que deriva de las relaciones de trabajo debe mantenerse en los establecimientos y faenas en que se desarrollan las labores, según el artículo 31 del DFL N° 2 de 1967.",
          "Sobre el plazo, la DT concluyó que la documentación laboral debe conservarse a lo menos el tiempo suficiente para respaldar las obligaciones laborales y contables del empleador, y que ese período no puede ser inferior a los plazos de prescripción de cada derecho y acción. Agregó que, en las materias que fiscaliza, el plazo de prescripción más amplio es el del cobro de cotizaciones de seguridad social: cinco años contados desde el término de la relación laboral."
        ]
      },
      {
        heading: "Resumen de reglas y plazos",
        paragraphs: [
          "La tabla resume lo que indican las fuentes citadas. Cada caso puede tener reglas especiales, así que revisa la norma completa antes de decidir."
        ],
        table: {
          columns: [
            "Materia",
            "Qué indica la fuente",
            "Fuente"
          ],
          rows: [
            [
              "Actos y contratos con firma electrónica",
              "Válidos y con los mismos efectos que en papel, salvo las excepciones del artículo 3",
              "Ley 19.799, artículo 3"
            ],
            [
              "Instrumentos públicos electrónicos",
              "Deben suscribirse con firma electrónica avanzada",
              "Ley 19.799, artículo 4"
            ],
            [
              "Microformas de archivos privados",
              "Mismo mérito que el original si las hace una entidad inscrita y se cumplen las actas",
              "Ley 18.845, artículo 5"
            ],
            [
              "Destrucción de originales en microforma",
              "Diez años desde la microcopia para instrumentos públicos y cinco para privados, con aviso previo en el Diario Oficial",
              "Ley 18.845, artículo 6"
            ],
            [
              "Duplicados de facturas y originales de boletas",
              "Conservar durante seis años",
              "DL 825, artículo 58"
            ],
            [
              "Libros de contabilidad y documentación",
              "Conservar mientras esté pendiente el plazo de revisión del SII: tres años, o seis en los casos del artículo 200",
              "Código Tributario, artículos 17 y 200"
            ],
            [
              "Documentación laboral",
              "Conservar al menos durante los plazos de prescripción; en cotizaciones, cinco años desde el término de la relación laboral",
              "Dirección del Trabajo, Ord. N° 6554 de 2015"
            ]
          ]
        }
      },
      {
        heading: "Qué revisar antes de destruir documentos en papel",
        paragraphs: [
          "Antes de eliminar originales después de digitalizarlos, revisa estos puntos con tu asesor legal o tributario:"
        ],
        bullets: [
          "Qué tipo de documento es y qué norma específica regula su conservación.",
          "Si los plazos del Código Tributario y del DL 825 siguen corriendo para ese período.",
          "Si la documentación laboral sigue dentro de los plazos de prescripción.",
          "Si se trata de títulos de crédito, que solo se hacen valer con el original.",
          "Si el documento puede tener valor histórico o cultural.",
          "Si necesitas que la copia tenga el mismo mérito que el original: en ese caso, revisa los requisitos de la Ley 18.845, el reglamento técnico vigente y si el proveedor está inscrito en el registro.",
          "Si cuentas con autorización del SII cuando quieres destruir documentos tributarios antes de plazo."
        ]
      },
      {
        heading: "Dónde encaja el OCR en la conservación de documentos",
        paragraphs: [
          "El OCR y la extracción de datos convierten el contenido de un documento en información que un sistema puede usar. No cambian el valor legal del documento ni reemplazan su conservación: el original, o la versión que la norma reconoce, se sigue guardando según las reglas de cada materia.",
          "YAGO trabaja en esa capa operativa: extrae y valida datos desde PDFs y documentos escaneados, marca los casos dudosos para que tu equipo los revise y los integra a planillas, ERP o sistemas internos. No realiza digitalización certificada según la Ley 18.845 ni custodia de archivos."
        ],
        links: [
          {
            label: "Servicio de digitalización de documentos con OCR para empresas",
            href: "/ocr"
          },
          {
            label: "Guía: digitalización de documentos en empresas y OCR con IA",
            href: "/blog/ocr-con-ia-digitalizar-documentos"
          }
        ]
      }
    ],
    conclusion: "En Chile, la Ley 19.799 da a los actos y contratos con firma electrónica los mismos efectos que a los firmados en papel, salvo excepciones. Una copia escaneada, en cambio, no tiene automáticamente el mismo mérito que el original: para eso la Ley 18.845 exige requisitos específicos. Los documentos tributarios y laborales tienen además sus propios plazos de conservación. Revisa las fuentes oficiales y consulta a un asesor antes de destruir originales.",
    faq: [
      {
        question: "¿Un documento escaneado tiene la misma validez legal que el original?",
        answer: "No automáticamente. Según la Ley 18.845, la imagen digitalizada de un archivo privado tiene el mismo mérito que el original cuando la hace una persona o entidad inscrita en el registro respectivo y se cumplen las actas de apertura y cierre. Una copia escaneada simple sirve para consultar y operar, pero no cumple por sí sola esos requisitos."
      },
      {
        question: "¿Qué diferencia hay entre firma electrónica simple y avanzada?",
        answer: "La firma electrónica es cualquier sonido, símbolo o proceso electrónico que permite identificar al menos formalmente al autor. La avanzada está certificada por un prestador acreditado, se crea con medios bajo control exclusivo del titular y permite detectar modificaciones posteriores. Los instrumentos públicos electrónicos requieren firma avanzada."
      },
      {
        question: "¿Cuánto tiempo hay que guardar las facturas en Chile?",
        answer: "El DL 825 exige conservar los duplicados de facturas y los originales de boletas durante seis años. El Código Tributario exige además conservar libros y documentación mientras esté pendiente el plazo de revisión del SII, que es de tres años o de seis en los casos del artículo 200. En las facturas electrónicas, el SII indica que el emisor y el receptor electrónico trabajan con el XML."
      },
      {
        question: "¿Puedo destruir documentos tributarios en papel después de escanearlos?",
        answer: "Antes de que venzan los plazos legales, solo con autorización del SII, que se solicita con el Formulario 2117. La Ley 18.845 permite además que los Directores Regionales del SII autoricen la destrucción anticipada si los documentos se incluyeron previamente en una microforma conforme a esa ley."
      },
      {
        question: "¿Los contratos de trabajo se pueden firmar electrónicamente?",
        answer: "Sí. La Dirección del Trabajo acepta la firma electrónica en la documentación laboral y, como se trata de instrumentos privados, no exige firma avanzada. La plataforma debe cumplir los requisitos del Dictamen N° 0789/15, como el consentimiento expreso del trabajador y el acceso del fiscalizador."
      },
      {
        question: "¿Cuánto tiempo se debe guardar la documentación laboral?",
        answer: "La Dirección del Trabajo indicó que el plazo no puede ser inferior a los plazos de prescripción de los derechos y acciones respectivos. En las materias que fiscaliza, el más amplio es el del cobro de cotizaciones de seguridad social: cinco años desde el término de la relación laboral."
      },
      {
        question: "¿El OCR cambia la validez legal de un documento?",
        answer: "No. El OCR y la extracción de datos convierten el contenido en información que un sistema puede usar, pero no modifican el valor legal del documento. La conservación del original, o de la versión que la norma reconoce, sigue siendo necesaria."
      }
    ],
    sources: [
      {
        title: "BCN Ley Chile: Ley 19.799 sobre documentos electrónicos, firma electrónica y servicios de certificación",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=196640"
      },
      {
        title: "BCN Ley Chile: Ley 18.845, sistemas de microcopia o micrograbación de documentos",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=30221"
      },
      {
        title: "BCN Ley Chile: DFL 4 de 1991, registro y requisitos de la microcopia y micrograbado",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=3647"
      },
      {
        title: "BCN Ley Chile: Código Tributario (DL 830), artículos 17, 97 y 200",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=6374"
      },
      {
        title: "BCN Ley Chile: Ley sobre Impuesto a las Ventas y Servicios (DL 825), artículo 58",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=6369"
      },
      {
        title: "SII: qué es una factura electrónica",
        url: "https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_1456.htm"
      },
      {
        title: "SII: cómo deben conservarse los documentos tributarios electrónicos (DTE)",
        url: "https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_1455.htm"
      },
      {
        title: "SII: Oficio Ordinario N° 57 de 2021 sobre destrucción de documentos tributarios",
        url: "https://www.sii.cl/documentos/normativa_ddrr/2021/dgc/ordinario57_62654.pdf"
      },
      {
        title: "ChileAtiende: autorización para destruir documentación tributaria (Formulario 2117)",
        url: "https://www.chileatiende.gob.cl/fichas/3142-autorizacion-para-destruir-documentacion-tributaria"
      },
      {
        title: "Dirección del Trabajo: Ord. N° 104 de 2022, doctrina vigente sobre documentación laboral electrónica",
        url: "https://www.dt.gob.cl/legislacion/1624/w3-article-121803.html"
      },
      {
        title: "Dirección del Trabajo: Ord. N° 4952 de 2018, requisitos del Dictamen N° 789/15",
        url: "https://dt.gob.cl/legislacion/1624/w3-article-115944.html"
      },
      {
        title: "Dirección del Trabajo: Ord. N° 6554 de 2015, sustitución del papel y tiempo de conservación",
        url: "https://www.dt.gob.cl/legislacion/1624/w3-article-108374.html"
      },
      {
        title: "Dirección del Trabajo: Ord. N° 727 de 2025, firma electrónica simple en documentos laborales",
        url: "https://dt.gob.cl/legislacion/1624/w3-article-128514.html"
      }
    ],
    product: {
      name: "OCR con IA",
      href: "/ocr",
      text: "YAGO extrae y valida datos desde PDFs y documentos escaneados para integrarlos a tus sistemas; no realiza digitalización certificada ni custodia de archivos."
    },
    relatedSlugs: [
      "ocr-con-ia-digitalizar-documentos",
      "cuanto-cuesta-digitalizar-documentos",
      "registro-contratos-terminos-mi-dt-plazos"
    ]
  },
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
        links: [{ label: "Cómo evaluar extracción, excepciones y costo de OCR", href: "/blog/evaluar-piloto-ocr-precision-costos" }, { label: "Qué implementa YAGO y cómo se acuerdan los entregables", href: "/nosotros" }],
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
        links: [
          {
            label: "Opciones para automatizar Mi DT en Chile y cómo elegir",
            href: "/blog/automatizar-mi-dt-opciones-chile",
          },
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
    slug: "automatizar-mi-dt-opciones-chile",
    modifiedDate: "2026-11-05",
    title: "Cómo automatizar los trámites de Mi DT: opciones en Chile y cómo elegir",
    seoTitle: "Automatizar Mi DT: opciones en Chile y cómo elegir (2026)",
    description: "Comparación de opciones para automatizar contratos, términos y finiquitos en Mi DT: qué cubre cada una, cómo funciona, precios publicados y qué preguntar.",
    excerpt: "De la carga masiva gratuita de la DT a robots, módulos de RRHH y servicios externos: qué declara cada proveedor en Chile, cuánto publica que cuesta y cómo elegir.",
    image: "/images/blog-f30-f30-1.png",
    category: "RRHH y cumplimiento",
    date: "2026-11-05",
    readingTime: "8 min",
    keywords: [
      "automatizar Mi DT",
      "proveedor automatización Portal Mi DT",
      "registro masivo de contratos Mi DT",
      "carga masiva de contratos DT",
      "robot Dirección del Trabajo",
      "automatizar finiquitos Mi DT",
      "software alta rotación Chile"
    ],
    intro: "Para automatizar los trámites de Mi DT hay cuatro caminos: la carga masiva de la propia Dirección del Trabajo (DT), un módulo de tu software de RRHH, un robot o software especializado, y un servicio externo que hace la carga por ti. Cuál conviene depende de qué trámites necesitas, de dónde vienen tus datos y de tu volumen. Una aclaración antes de seguir: esta guía la escribe YAGO, que vende SADT, una de las opciones comparadas. Por eso los datos de cada proveedor salen de sus propias páginas públicas, revisadas el 5 de noviembre de 2026, y enlazamos cada una para que las compruebes.",
    sections: [
      {
        heading: "Qué opciones hay para automatizar Mi DT",
        paragraphs: [
          "Las opciones se diferencian más por cómo funcionan que por el trámite que prometen. Conviene partir por identificar a cuál de estos grupos pertenece cada proveedor:"
        ],
        bullets: [
          "Carga masiva de la DT: archivos CSV dentro de Mi DT, sin costo, con los límites que fija el trámite.",
          "Módulo de tu software de RRHH: envía a la DT los datos que ya tienes cargados. Ejemplos: la extensión de Talana y Conexión DT de Rex+. RH Connect de Pro-City trabaja sobre Talana o Buk.",
          "Robot o software especializado: toma una planilla o un sistema y opera sobre el portal. Ejemplos: Tecnozero, Abitech, Auto DT de Plutonia, BotSolutions, el robot de Firme y SADT de YAGO.",
          "Servicio externo o agente conectado a tu ERP: otro equipo o un agente de IA hace la carga. Ejemplos: Krew y HR Automation."
        ]
      },
      {
        heading: "Comparación de proveedores para automatizar Mi DT",
        paragraphs: [
          "La tabla resume lo que cada página pública declara al 5 de noviembre de 2026. Que un trámite no aparezca significa que no lo vimos en esa página, no que el proveedor no lo ofrezca. Si representas a uno de estos proveedores y un dato cambió, escríbenos a nicolas.yarur.g@yago.cl y lo corregimos."
        ],
        table: {
          columns: [
            "Opción",
            "Trámites que declara",
            "Cómo funciona",
            "Precio publicado"
          ],
          rows: [
            ["Carga masiva de la DT", "Contratos en CSV, según un instructivo de 2022; finiquitos y Libro de Remuneraciones por sus propios trámites", "Archivos dentro de Mi DT", "Sin costo"],
            ["SADT (YAGO)", "Contratos, términos, F30 y F30-1", "Software que toma datos de un archivo o de Workges, valida y ejecuta por lote", "Desde 31,80 UF al mes por 8.000 créditos"],
            ["Tecnozero", "Contratos, anexos, bajas y finiquitos", "Robots que cargan una planilla Excel, con mandato firmado", "De $640 a $290 por registro con IVA, según volumen; mínimo 50 por carga"],
            ["Talana", "Contratos y anexos", "Extensión del módulo Gestión de Personas", "Cotización"],
            ["Rex+ (Conexión DT)", "Libro de Remuneraciones, contratos y términos; finiquitos anunciados como próximamente", "Complemento usado desde la plataforma Rex+", "Cotización"],
            ["Pro-City (RH Connect)", "Contratos, anexos y finiquitos", "Compara datos de Talana o Buk con el registro de la DT y sube en lote lo que eliges", "No publica"],
            ["Abitech", "Contratos; un diagrama de la página muestra también modificaciones y finiquitos", "Robots RPA que completan los formularios de la DT", "6 UF al mes; no aclara IVA ni volumen"],
            ["Plutonia (Auto DT)", "Contratos y términos", "App de escritorio que lee un Excel y opera en Chrome con tu ClaveÚnica", "$149.990"],
            ["BotSolutions", "Finiquito electrónico, con seguimiento y alertas de plazos", "Bot de envío al portal, integrado con Excel, RRHH o ERP", "De $4.600 a $350 + IVA según tramo mensual"],
            ["Firme", "Cartas de aviso de término", "Robot RPA conectado al software de remuneraciones", "Sin precio propio para este trámite"],
            ["HR Automation", "Contratos, anexos, modificaciones y avisos de término", "Agente de IA conectado al ERP", "No publica"],
            ["Krew", "Contratos, anexos, amonestaciones, modificaciones y finiquitos", "Servicio externalizado: Krew maneja accesos y cargas", "No publica para Mi DT"]
          ]
        }
      },
      {
        heading: "Qué puedes hacer gratis con la Dirección del Trabajo",
        paragraphs: [
          "Antes de pagar, revisa si te alcanza con lo que ofrece la DT. El registro de contratos y de términos no tiene costo, y su instructivo de registro masivo de contratos (versión del 21 de abril de 2022) describe archivos CSV con estas condiciones:"
        ],
        bullets: [
          "Hasta 5 MB y 1.000 filas por archivo.",
          "Un solo cargo por archivo, por lo que varios cargos significan varios archivos.",
          "Los contratos con más de cinco tipos de remuneración o más de cinco comunas de desempeño se registran por separado.",
          "El procesamiento puede tardar hasta 7 días, un dato que importa frente al plazo de 15 días hábiles para registrar un contrato."
        ],
        links: [
          {
            label: "Plazos para registrar contratos y términos en Mi DT",
            href: "/blog/registro-contratos-terminos-mi-dt-plazos"
          }
        ]
      },
      {
        heading: "Límites de la opción gratuita que conviene confirmar",
        paragraphs: [
          "El instructivo es de 2022 y la página actual del trámite no lo enlaza, así que confirma en Mi DT, con tu ClaveÚnica, que la opción sigue disponible como la describe. Tampoco encontramos una carga masiva oficial para anexos y términos: eso no prueba que no exista, pero conviene revisarlo.",
          "No encontramos una API pública de la DT para registrar contratos. La referencia más cercana es una respuesta de la DT de 2023, que anunciaba servicios web para una evolución futura del Libro de Remuneraciones Electrónico. Si un proveedor habla de integración directa con la DT, pregunta cómo funciona exactamente."
        ]
      },
      {
        heading: "Cómo elegir según tu caso",
        paragraphs: [
          "Parte por tus datos y tu volumen, no por el proveedor. Estas son orientaciones, no una recomendación única:"
        ],
        bullets: [
          "Volumen bajo y un solo cargo: prueba primero la carga masiva de la DT.",
          "Ya usas Talana, Buk o Rex+: revisa primero la extensión o el complemento de tu sistema, porque evita mantener otra base de datos.",
          "Trabajas con planillas y un volumen moderado: compara Auto DT de Plutonia, Abitech y el pago por registro de Tecnozero.",
          "Solo necesitas finiquitos o cartas de aviso: BotSolutions y Firme se concentran en esos trámites.",
          "Prefieres no operar el trámite: Krew lo ofrece como servicio externalizado.",
          "Quieres conectar un ERP como SAP o SuccessFactors: HR Automation declara esa integración.",
          "Tienes alta rotación, usas Workges o archivos y además necesitas F30 y F30-1 por lote: esa es la situación para la que construimos SADT. SADT no incluye anexos en su alcance publicado; si los necesitas, considéralo al comparar."
        ]
      },
      {
        heading: "Qué preguntar antes de contratar",
        paragraphs: [
          "Las páginas comerciales no siempre responden lo que más importa en la operación. Pregúntalo por escrito:"
        ],
        bullets: [
          "Accesos: con qué identidad opera en Mi DT, quién queda como representante laboral electrónico, qué credenciales pide y cómo se revocan al terminar.",
          "Evidencia: si guarda el comprobante o folio de cada registro y por cuánto tiempo.",
          "Errores: cómo avisa qué falló y si permite reprocesar solo esos casos.",
          "Cambios en el portal: qué pasa cuando Mi DT cambia o se cae, y en qué plazo se ajusta la solución.",
          "Datos personales: dónde quedan los datos de tus trabajadores, quién accede y qué ocurre con ellos al terminar el contrato.",
          "Certificados: si necesitas F30 y F30-1, pregunta por ellos expresamente. Varias páginas hablan de certificados o comprobantes sin decir cuáles.",
          "Costo real: cuánto pagarías con tu volumen en el mes más alto, con IVA, y si hay mínimos o costos de implementación."
        ]
      },
      {
        heading: "Cómo comparar precios",
        paragraphs: [
          "Los precios no se pueden comparar directamente, porque unos cobran por registro, otros por plan mensual y otros por licencia. Para compararlos, calcula el costo mensual con tu volumen real, incluyendo el mes de mayor rotación, y agrega el IVA cuando no esté incluido.",
          "El pago por registro suele acomodar mejor un volumen variable. Un plan mensual se aprovecha mejor con un volumen estable y alto. Una licencia o un software local pueden salir más baratos, pero considera quién los mantiene si el portal cambia."
        ]
      }
    ],
    faq: [
      {
        question: "¿Qué proveedor automatiza Mi DT para empresas con alta rotación?",
        answer: "Depende de los trámites y de tus datos. Tecnozero, Abitech y SADT de YAGO son software o robots especializados; Talana, Rex+ y RH Connect de Pro-City trabajan sobre tu sistema de RRHH; Krew lo ofrece como servicio. SADT cubre contratos, términos, F30 y F30-1. YAGO escribe esta guía y desarrolla SADT."
      },
      {
        question: "¿Se pueden cargar contratos en forma masiva en Mi DT sin un proveedor?",
        answer: "Según un instructivo de la DT de 2022, sí: con archivos CSV de hasta 5 MB y 1.000 filas, un solo cargo por archivo y un procesamiento que puede tardar hasta 7 días. Confirma en Mi DT que sigue disponible, porque la página actual del trámite no lo enlaza."
      },
      {
        question: "¿La Dirección del Trabajo tiene una API para registrar contratos?",
        answer: "No encontramos una API pública para registrar contratos. La referencia más cercana es una respuesta de la DT de 2023, que anunciaba servicios web para una evolución futura del Libro de Remuneraciones Electrónico. Si un proveedor habla de integración directa, pregunta cómo funciona."
      },
      {
        question: "¿Cuánto cuesta automatizar los trámites de Mi DT?",
        answer: "Los precios públicos revisados en noviembre de 2026 van desde $290 a $640 por registro en Tecnozero, 6 UF al mes en Abitech, $149.990 en Auto DT de Plutonia y desde 31,80 UF al mes en SADT de YAGO. Talana, Rex+, Pro-City, HR Automation y Krew no publican precio para este servicio."
      },
      {
        question: "¿Automatizar el trámite traspasa la responsabilidad al proveedor?",
        answer: "No traspasa la obligación del empleador de registrar a tiempo y con datos correctos. Por eso conviene validar los datos antes de enviarlos, guardar la evidencia de cada registro y revisar qué dice el contrato con el proveedor."
      }
    ],
    conclusion: "Para automatizar Mi DT, parte por lo que ya tienes: la carga masiva de la DT si tu caso es simple, tu software de RRHH si ya tiene la función, y un robot, un software especializado o un servicio externo si el volumen o los trámites lo justifican. Compara con tu volumen real y pregunta por accesos, evidencia y cambios en el portal. Esta comparación la escribe YAGO, que desarrolla SADT, y resume páginas públicas revisadas el 5 de noviembre de 2026: confirma los datos con cada proveedor antes de decidir.",
    sources: [
      { title: "Dirección del Trabajo: instructivo de registro masivo de contratos (versión 21.04.22)", url: "https://www.dt.gob.cl/portal/1626/articles-121013_recurso_2" },
      { title: "Dirección del Trabajo: registro de contrato de trabajo", url: "https://www.dt.gob.cl/portal/1626/w3-article-121013.html" },
      { title: "Dirección del Trabajo: ¿el registro de contrato tiene costo?", url: "https://www.dt.gob.cl/portal/1628/w3-article-121034.html" },
      { title: "Dirección del Trabajo: consulta sobre servicios web en el Libro de Remuneraciones Electrónico", url: "https://www.dt.gob.cl/portal/1628/w3-article-120083.html" },
      { title: "Tecnozero: Portal DT", url: "https://www.tecnozero.cl/portal-dt" },
      { title: "Talana: Mi DT", url: "https://web.talana.com/mi-dt" },
      { title: "Rex+: Conexión DT", url: "https://rexmas.com/conexion-dt/" },
      { title: "Pro-City: RH Connect", url: "https://pro-city.cl/rh-connect.html" },
      { title: "Abitech: carga de trámites laborales en Mi DT", url: "https://abitech.cl/carga-midt-tramites-laborales/" },
      { title: "Plutonia: Auto DT", url: "https://plutonia.cl/autodt" },
      { title: "BotSolutions: precios", url: "https://botsolutions.cl/precios.html" },
      { title: "Firme: empresas de servicios transitorios", url: "https://firme.cl/industrias/empresas-servicios-transitorios" },
      { title: "HR Automation: soluciones para la Dirección del Trabajo", url: "https://hrautomation.cl/soluciones-direccion-del-trabajo" },
      { title: "Krew: Mi DT + IA", url: "https://krew.cl/mi-dt-ia/" }
    ],
    product: {
      name: "SADT",
      href: "/sadt",
      text: "SADT, de YAGO, registra contratos y términos en Mi DT por lote y descarga F30 y F30-1, desde un archivo o Workges, con comprobante de cada registro."
    },
    relatedSlugs: ["registro-contratos-terminos-mi-dt-plazos", "certificados-f30-y-f30-1-diferencias", "finiquito-electronico-mi-dt-plazos"],
  },
  {
    slug: "certificados-f30-y-f30-1-diferencias",
    modifiedDate: "2026-11-05",
    video: {
      youtubeId: "_TSViR4tj5Q",
      title: "F30 y F30-1: la diferencia en 60 segundos | Lunes en la oficina, Ep. 1",
      description: "Lunes en la mañana. A Carola, jefa de RRHH, le llega un correo: \"F30-1 para el estado de pago\". El video explica en 60 segundos qué muestra el F30, qué certifica el F30-1, quién los pide y dónde se obtienen.",
      uploadDate: "2026-11-02T15:04:01-03:00",
      duration: "PT59S",
      poster: "/videos/f30-y-f30-1-lunes-en-la-oficina.webp",
    },
    title: "Certificados F30 y F30-1: qué son, en qué se diferencian y cómo obtenerlos",
    seoTitle: "F30 y F30-1: diferencia y cómo sacarlos en Mi DT (2026)",
    description: "Desde junio de 2026 el F30 en línea se pide solo en Mi DT. Diferencia con el F30-1, paso a paso, qué hacer si no sale y planilla gratis para controlarlos.",
    resource: { label: "Descargar planilla de control de F30 y F30-1", description: "Excel gratuito y sin registro para llevar, por empresa principal, obra y período, el estado de cada certificado, su número y dónde está el PDF. Avisa qué falta entregar y qué hay que volver a ingresar.", href: "/recursos/planilla-control-f30-f30-1.xlsx", service: "sadt" },
    excerpt: "El F30 muestra multas y deuda previsional publicada; el F30-1 certifica pagos a tus trabajadores por obra y mes. Cómo pedirlos en Mi DT, verificarlos y destrabarlos.",
    image: "/images/blog-f30-f30-1.png",
    category: "RRHH y cumplimiento",
    date: "2026-09-23",
    readingTime: "11 min",
    keywords: [
      "certificado F30",
      "certificado F30-1",
      "diferencia F30 y F30-1",
      "cómo sacar el F30-1",
      "vigencia F30-1",
      "verificar certificado F30-1",
      "certificado de antecedentes laborales y previsionales"
    ],
    intro: "El F30 y el F30-1 son dos certificados de la Dirección del Trabajo (DT) que las empresas usan para acreditar su situación laboral y previsional, sobre todo en subcontratación. Tienen nombres parecidos, pero muestran cosas distintas y se piden de forma diferente en el Portal Mi DT. Esta guía explica qué es cada uno, quién puede pedirlo, el paso a paso, cuánto tiempo sirve, cómo se verifica y qué hacer cuando el F30-1 no sale.",
    sections: [
      {
        heading: "¿Qué diferencia hay entre el F30 y el F30-1?",
        paragraphs: [
          "El F30 es el Certificado de antecedentes laborales y previsionales. Muestra las multas ejecutoriadas que la DT ha cursado al empleador y la deuda previsional publicada en el Boletín Laboral y Previsional. Sirve como antecedente general ante instituciones públicas o privadas, pero no certifica que pagaste las remuneraciones o cotizaciones de un mes.",
          "El F30-1 es el Certificado de cumplimiento de obligaciones laborales y previsionales. Acredita si el empleador pagó las remuneraciones, cotizaciones e indemnizaciones de sus trabajadores en una obra, faena o servicio, para uno a tres meses. Es el que la empresa principal pide a sus contratistas, con base en el artículo 183-C del Código del Trabajo."
        ]
      },
      {
        heading: "Qué es el certificado F30 y qué muestra",
        paragraphs: [
          "Según la guía del trámite que la DT publicó en 2026, el F30 emitido en Mi DT contiene:"
        ],
        bullets: [
          "Los datos de la entidad empleadora: razón social, RUT, código de actividad económica (CAE) y representante legal.",
          "Las multas cursadas por la DT que están ejecutoriadas, se hayan publicado o no en el Boletín Laboral y Previsional.",
          "La deuda previsional publicada en ese boletín.",
          "La fecha y hora de emisión, más un código y un QR para verificarlo."
        ]
      },
      {
        heading: "Qué es el certificado F30-1 y qué acredita",
        paragraphs: [
          "El F30-1 es el Certificado de cumplimiento de obligaciones laborales y previsionales de la DT. Permite a un empleador, persona natural o jurídica, acreditar el cumplimiento de sus obligaciones con los trabajadores de una obra, faena o servicio, en un período determinado. Incluye las eventuales indemnizaciones legales asociadas al término de la relación laboral.",
          "Cada solicitud cubre de 1 a 3 meses consecutivos. La DT menciona como usos principales cursar estados de pago, pedir la devolución de garantías y cobrar subvenciones. Su marco legal es el artículo 183-C del Código del Trabajo y el Decreto N° 319 de 2007, que lo reglamenta."
        ]
      },
      {
        heading: "Quién puede pedir cada certificado",
        paragraphs: [
          "El F30 lo pide el propio empleador. En línea se pide en el portal Mi DT: la DT avisó que, desde el 30 de junio de 2026, solo está disponible allí, para el empleador persona natural, el empresario individual y el empleador persona jurídica, este último a través de sus representantes laborales electrónicos.",
          "Ese aviso no menciona las oficinas. La página del trámite de la DT y ChileAtiende todavía indican que también se puede pedir en una oficina de la Inspección del Trabajo, con un costo de $2.500. Si necesitas hacerlo en forma presencial, confirma antes con la Inspección.",
          "El F30-1 también lo pide el empleador: el contratista o subcontratista cuyos trabajadores prestan servicios en la obra. La DT indica que tiene que ser el empleador quien haga la solicitud. La empresa principal no lo tramita; lo exige a sus contratistas y lo verifica.",
          "En ambos casos, la DT no puede otorgar el certificado a una persona jurídica con menos de 30 días de antigüedad, porque su información puede tardar hasta 45 días en actualizarse.",
          "El representante laboral electrónico es una persona natural que la empresa autoriza para operar en Mi DT a su nombre, con su propia ClaveÚnica. La empresa lo crea en Mi DT con su clave tributaria del SII."
        ],
        links: [
          {
            label: "Glosario: Mi DT, F30, F30-1 y registro electrónico laboral",
            href: "/glosario#tramites-laborales"
          }
        ]
      },
      {
        heading: "Cómo sacar el F30 por internet en Mi DT, paso a paso",
        paragraphs: [
          "El trámite en línea no tiene costo. Según la guía de la DT, el flujo es:"
        ],
        bullets: [
          "Entra a Mi DT (midt.dirtrab.cl) con tu RUN y ClaveÚnica.",
          "Elige el Perfil Empleador y el tipo de empleador: Empleador Individual, para persona natural o empresario individual, o Empleador Persona Jurídica.",
          "Abre el menú Denuncias y Solicitudes y entra a Certificados Laborales y Previsionales.",
          "En la tarjeta Certificado de Antecedentes Laborales y Previsionales, selecciona Solicitar Certificado.",
          "Revisa el formulario. Los datos de la empresa vienen del SII y solo se corrigen en sii.cl. Elige la dirección de casa matriz o sucursal y el código de actividad económica (CAE).",
          "Suscribe la declaración jurada y finaliza. El sistema entrega un código de 12 letras para seguir la solicitud.",
          "En Mis Solicitudes revisa el estado (Ingresada, Error de Proceso o Terminada) y descarga el PDF. Si aparece Error de Proceso, falló una comunicación y debes pedir un certificado nuevo."
        ]
      },
      {
        heading: "Cómo sacar el F30-1 en Mi DT, paso a paso",
        paragraphs: [
          "Desde 2023 el F30-1 se pide en el Portal Mi DT, sin costo, y la DT informó que mantendría el historial de certificados anteriores en su antiguo portal web. Antes de empezar, revisa dos requisitos: cotizaciones de todos tus trabajadores pagadas en forma electrónica, por Previred, Caja Los Andes o Caja La Araucana, y, si eres persona jurídica, al menos un representante laboral electrónico habilitado.",
          "La DT responde en un plazo máximo de 48 horas hábiles. El flujo que describe su guía del trámite es:"
        ],
        bullets: [
          "En Mi DT, con el Perfil Empleador, ve a Denuncias y Solicitudes y luego a Certificados Laborales y Previsionales.",
          "En la tarjeta Certificado de Cumplimiento de Obligaciones Laborales y Previsionales, selecciona Solicitar Certificado.",
          "Etapa 1, Empresa Principal: ingresa la empresa principal, que debe ser distinta de la tuya. Queda guardada para otras solicitudes, pero cada certificado cubre solo una.",
          "Etapa 2, Obra, Faena o Servicio: registra el nombre según el contrato civil y el modo de participación. Si eres subcontratista, agrega los datos del contratista. Cada certificado cubre una sola obra, faena o servicio.",
          "Etapa 3, Período, Remuneraciones y Despidos: elige la obra, el objetivo del certificado (por ejemplo, cursar un estado de pago) y la institución recaudadora. Luego selecciona el primer mes y carga en CSV el archivo de remuneraciones y, si hubo despidos, el de despidos.",
          "Si necesitas más meses, agrega hasta dos períodos consecutivos. Acepta la declaración jurada y envía. Recibirás un número de solicitud y un correo con el comprobante.",
          "En Mis Solicitudes sigue el estado (En Revisión, Emitido o Error de Proceso) y descarga el PDF cuando quede Emitido."
        ]
      },
      {
        heading: "Diferencias entre F30 y F30-1: tabla comparativa",
        paragraphs: [
          "Una forma práctica de distinguirlos es por la pregunta que responde cada uno. El F30 responde si el empleador tiene multas ejecutoriadas o deuda previsional publicada. El F30-1 responde si pagó a los trabajadores de una obra en meses determinados."
        ],
        table: {
          columns: [
            "Aspecto",
            "F30",
            "F30-1"
          ],
          rows: [
            [
              "Nombre oficial",
              "Certificado de antecedentes laborales y previsionales",
              "Certificado de cumplimiento de obligaciones laborales y previsionales"
            ],
            [
              "Qué muestra",
              "Multas ejecutoriadas cursadas por la DT y deuda previsional publicada",
              "Pago de remuneraciones, cotizaciones e indemnizaciones de los trabajadores de una obra"
            ],
            [
              "Para qué se usa",
              "Antecedente general ante instituciones públicas o privadas",
              "Acreditar cumplimiento ante la empresa principal, por ejemplo para cursar un estado de pago"
            ],
            [
              "Quién lo pide",
              "El empleador, persona natural o jurídica",
              "El empleador contratista o subcontratista"
            ],
            [
              "Alcance",
              "Situación del empleador a la fecha de emisión",
              "Una empresa principal, una obra y de 1 a 3 meses consecutivos"
            ],
            [
              "Requisitos en línea",
              "ClaveÚnica y, si es persona jurídica, representante laboral electrónico",
              "Lo mismo, más cotizaciones pagadas en forma electrónica y archivos CSV de remuneraciones y despidos"
            ],
            [
              "Costo en Mi DT",
              "Sin costo",
              "Sin costo"
            ],
            [
              "Verificación",
              "Código QR o código alfabético en midt.dirtrab.cl/verificadorDocumental",
              "Número de certificado y clave en verificador.dirtrab.cl"
            ],
            [
              "Base legal",
              "DFL N° 2 de 1967, Ley Orgánica de la DT",
              "Artículo 183-C del Código del Trabajo y Decreto N° 319"
            ]
          ]
        }
      },
      {
        heading: "Vigencia: cuánto tiempo sirve cada certificado",
        paragraphs: [
          "El F30-1 no vence por fecha. Según el propio certificado, tiene validez en todo el territorio nacional mientras no tenga adulteraciones ni enmendaduras, y abarca solo la obra y los períodos indicados. La circular de la DT sobre emisión de certificados (N° 51, de 2014) agrega que no tienen tope de vigencia, porque dan cuenta del cumplimiento hacia el pasado. Lo que importa es que cubra la obra y los meses que pide la empresa principal.",
          "El F30, en cambio, muestra la situación del empleador a la fecha y hora de emisión. Si después se ejecutoría una multa o se publica una deuda, un F30 ya emitido no la refleja. Por eso conviene revisar qué antigüedad máxima acepta quien te lo pide."
        ]
      },
      {
        heading: "Cómo verifica un tercero que el certificado es auténtico",
        paragraphs: [
          "Quien recibe un certificado puede comprobarlo en los verificadores de la DT, con los datos del propio documento:"
        ],
        bullets: [
          "F30: escanea el código QR al pie del documento o ingresa su código alfabético en midt.dirtrab.cl/verificadorDocumental. El sistema entrega una copia desde los registros de la DT para confirmar que es idéntica.",
          "F30-1: ingresa en verificador.dirtrab.cl el número de certificado y la clave que aparecen al final del documento. La DT también informó que el F30-1 incluye verificación con código QR.",
          "Revisa también el contenido del F30-1: empresa principal, obra y meses correctos, sin montos no pagados ni trabajadores en el anexo Trabajadores con Deuda.",
          "El F30-1 se emite con la información que entrega el propio contratista. El certificado advierte que es responsabilidad de la empresa principal verificar que esos datos correspondan a la realidad, por ejemplo el total de trabajadores vigentes."
        ],
        links: [
          {
            label: "Qué revisar como empresa principal antes de pagar a un contratista",
            href: "/blog/control-contratistas-subcontratacion-f30-1"
          }
        ]
      },
      {
        heading: "Qué hacer si el F30-1 no se puede emitir",
        paragraphs: [
          "Si el F30-1 no sale, revisa primero los requisitos y los datos de la solicitud. Si el problema sigue, la DT atiende consultas en suac.dt.gob.cl y en el 600 450 4000.",
          "Bloqueos que se desprenden de las indicaciones de la DT, y cómo resolverlos:"
        ],
        bullets: [
          "Cotizaciones no pagadas en forma electrónica: el trámite lo exige para todos los trabajadores, por Previred, Caja Los Andes o Caja La Araucana. Regulariza el pago por esa vía y vuelve a solicitarlo.",
          "Empresa sin representante laboral electrónico: si eres persona jurídica, créalo primero en Mi DT con la clave tributaria de la empresa.",
          "Empresa recién creada: con menos de 30 días de antigüedad no se puede otorgar. Espera a que su información se actualice.",
          "Meses no consecutivos: una solicitud cubre de 1 a 3 meses seguidos. Para meses salteados, haz una solicitud por mes.",
          "Empresas repetidas: la empresa principal debe ser distinta de la solicitante, y el contratista, distinto de ambas.",
          "Archivos en otro formato: remuneraciones y despidos solo se aceptan en CSV. Usa el archivo de ejemplo y el instructivo del trámite.",
          "Solicitud duplicada: si ya hay una solicitud En Revisión para la misma obra y período, el sistema lo advierte. Espera ese resultado.",
          "Error de Proceso: la solicitud no se pudo procesar y venció el tiempo de revisión. Debes ingresarla de nuevo.",
          "Certificado emitido con deuda: el F30-1 puede mostrar remuneraciones no pagadas o trabajadores con deuda. Regulariza esos pagos y pide un certificado nuevo para ese período."
        ]
      },
      {
        heading: "Cada cuánto necesitan los contratistas estos certificados",
        paragraphs: [
          "La ley no fija una frecuencia. El artículo 183-C da a la empresa principal el derecho a ser informada por sus contratistas cuando lo solicite. La DT menciona como usos principales del F30-1 cursar estados de pago, pedir la devolución de garantías y cobrar subvenciones.",
          "En la práctica, la frecuencia la define el contrato con cada empresa principal, por ejemplo si exige el certificado con cada estado de pago. Como cada F30-1 cubre una empresa principal, una obra y hasta tres meses, un contratista con varias obras necesita un certificado por cada combinación. El F30, en cambio, se pide cuando una institución lo exige como antecedente del empleador."
        ]
      },
      {
        heading: "Cuando son muchas obras, faenas o períodos",
        paragraphs: [
          "Un contratista con varias faenas y mandantes puede necesitar decenas de certificados al mes. Pedirlos uno por uno toma tiempo y hace fácil perder la pista de cuál falta o cuál ya se entregó. Ayuda llevar un registro por empresa principal, obra y período, con el estado de cada solicitud, el número de certificado y el PDF."
        ],
        links: [
          {
            label: "Descargar planilla gratuita de control de F30 y F30-1",
            href: "/recursos/planilla-control-f30-f30-1.xlsx"
          },
          {
            label: "SADT: solicitud y descarga de F30 y F30-1 por lote",
            href: "/sadt"
          },
          {
            label: "Registro de contratos y términos en Mi DT: plazos",
            href: "/blog/registro-contratos-terminos-mi-dt-plazos"
          }
        ]
      }
    ],
    faq: [
      {
        question: "¿Qué es el F30?",
        answer: "Es el Certificado de antecedentes laborales y previsionales de la Dirección del Trabajo. Muestra las multas ejecutoriadas cursadas por la DT y la deuda previsional publicada del empleador. Se presenta como antecedente ante instituciones públicas o privadas."
      },
      {
        question: "¿Qué es el F30-1?",
        answer: "Es el Certificado de cumplimiento de obligaciones laborales y previsionales de la Dirección del Trabajo. Permite a un empleador acreditar el cumplimiento de sus obligaciones con los trabajadores de una obra, faena o servicio, por 1 a 3 meses consecutivos. Se usa, por ejemplo, para cursar estados de pago."
      },
      {
        question: "¿Cuál es la diferencia entre el F30 y el F30-1?",
        answer: "El F30 muestra multas ejecutoriadas y deuda previsional publicada del empleador. El F30-1 certifica si pagó a los trabajadores de una obra en uno a tres meses, y es el que pide la empresa principal en subcontratación."
      },
      {
        question: "¿Hay una planilla para controlar los F30 y F30-1 de varias obras?",
        answer: "Sí. En esta guía puedes descargar gratis y sin registro una planilla Excel para llevar cada certificado por empresa principal, obra y período, con su estado, número y PDF. Es una ayuda de orden: los certificados se piden en Mi DT."
      },
      {
        question: "¿Cuánto cuesta sacar el F30 y el F30-1?",
        answer: "En el Portal Mi DT ambos son gratuitos. Necesitas ClaveÚnica y, si la empresa es persona jurídica, un representante laboral electrónico habilitado."
      },
      {
        question: "¿Cuánto demora el F30-1?",
        answer: "La DT indica un plazo máximo de 48 horas hábiles para responder la solicitud en línea."
      },
      {
        question: "¿Cuántos meses cubre un F30-1?",
        answer: "Cada solicitud certifica de 1 a 3 meses consecutivos, para una sola empresa principal y una sola obra, faena o servicio. Si necesitas meses no consecutivos, haz una solicitud por cada mes."
      },
      {
        question: "¿Cuál es la vigencia del F30-1?",
        answer: "No vence por fecha: certifica meses determinados y es válido en todo el país mientras no tenga adulteraciones ni enmendaduras. Lo importante es que cubra la obra y los períodos que pide la empresa principal."
      },
      {
        question: "¿Cómo verifico si un F30 o un F30-1 es auténtico?",
        answer: "Para el F30-1, ingresa en verificador.dirtrab.cl el número de certificado y la clave que trae al final. Para el F30, escanea su código QR o ingresa el código alfabético en midt.dirtrab.cl/verificadorDocumental."
      },
      {
        question: "¿La empresa principal puede sacar el F30-1 de su contratista?",
        answer: "No. Según la DT, lo debe solicitar el propio empleador. La empresa principal puede exigir que sus contratistas acrediten su cumplimiento (artículo 183-C del Código del Trabajo) y verificar el certificado en el sitio de la DT."
      }
    ],
    conclusion: "El F30 muestra las multas ejecutoriadas y la deuda previsional publicada de un empleador. El F30-1 certifica, para una obra y de uno a tres meses, si pagó a sus trabajadores. Ambos se piden en Mi DT sin costo y se verifican en los sitios de la DT. Si necesitas muchos certificados, ordénalos por obra y período. Esta guía es informativa; ante un caso particular, consulta a la Dirección del Trabajo o a un asesor laboral.",
    sources: [
      {
        title: "Dirección del Trabajo: Certificado de antecedentes laborales y previsionales (F30)",
        url: "https://www.dt.gob.cl/portal/1626/w3-article-100351.html"
      },
      {
        title: "Dirección del Trabajo: Guía rápida del Certificado de antecedentes laborales y previsionales (2026)",
        url: "https://www.dt.gob.cl/portal/1626/articles-100351_recurso_1.pdf"
      },
      {
        title: "Dirección del Trabajo: ¿Cómo puedo obtener un Certificado de Antecedentes Laborales y Previsionales?",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-118004.html"
      },
      {
        title: "Dirección del Trabajo: ¿Quiénes pueden solicitar un Certificado de Antecedentes Laborales y Previsionales?",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-118009.html"
      },
      {
        title: "ChileAtiende: Certificado de antecedentes laborales y previsionales",
        url: "https://www.chileatiende.gob.cl/fichas/1396"
      },
      {
        title: "Dirección del Trabajo: aviso sobre el F30 en el portal Mi DT desde el 30 de junio de 2026",
        url: "https://tramites.dirtrab.cl/registroEmpresa/"
      },
      {
        title: "Dirección del Trabajo: Certificado de cumplimiento de obligaciones laborales y previsionales (F30-1)",
        url: "https://www.dt.gob.cl/portal/1626/w3-article-100359.html"
      },
      {
        title: "Dirección del Trabajo: Guía rápida del Certificado de cumplimiento de obligaciones laborales y previsionales (2024)",
        url: "https://www.dt.gob.cl/portal/1626/articles-100359_recurso_1.pdf"
      },
      {
        title: "Dirección del Trabajo: ¿Cómo solicitar en línea el Certificado de cumplimiento de obligaciones laborales y previsionales?",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-124842.html"
      },
      {
        title: "Dirección del Trabajo: Así se obtiene ahora el certificado F30-1 (agosto de 2023)",
        url: "https://www.dt.gob.cl/portal/1627/w3-article-124815.html"
      },
      {
        title: "Dirección del Trabajo: ¿Cómo se crea un Representante Laboral Electrónico en el Portal Mi DT?",
        url: "https://www.dt.gob.cl/portal/1628/w3-article-116470.html"
      },
      {
        title: "Dirección del Trabajo: Circular N° 51 de 2014 sobre emisión de certificados",
        url: "https://www.dt.gob.cl/transparencia/Circular_No_51_19-08-2014-Certificados.pdf"
      },
      {
        title: "Biblioteca del Congreso Nacional: Código del Trabajo, artículo 183-C",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=207436"
      }
    ],
    product: {
      name: "SADT",
      href: "/sadt",
      text: "SADT solicita y descarga por lote los certificados F30 y F30-1 en Mi DT, los ordena por obra y período y deja registro de cada solicitud."
    },
    relatedSlugs: [
      "control-contratistas-subcontratacion-f30-1",
      "registro-contratos-terminos-mi-dt-plazos",
      "finiquito-electronico-mi-dt-plazos"
    ]
  },
  {
    slug: "que-es-la-automatizacion-de-procesos-con-ia",
    title: "Automatización de procesos: qué es, tipos, ejemplos y cómo implementarla",
    seoTitle: "Automatización de procesos: qué es, tipos y ejemplos | YAGO",
    description: "Qué es la automatización de procesos, tipos (reglas, RPA, APIs, IA y agentes), ejemplos por área y cómo priorizar e implementar un primer piloto en tu empresa.",
    excerpt: "Definición, tipos, ejemplos por área y un método simple para elegir el primer proceso, implementarlo por etapas y medir el resultado.",
    image: "/images/blog-automatizacion-ia.png",
    category: "Fundamentos",
    date: "2026-06-24",
    modifiedDate: "2026-11-09",
    readingTime: "13 min",
    keywords: [
      "automatización de procesos",
      "qué es la automatización de procesos",
      "automatización de procesos con IA",
      "tipos de automatización de procesos",
      "ejemplos de automatización de procesos",
      "cómo automatizar procesos en una empresa"
    ],
    intro: "La automatización de procesos es el uso de software para ejecutar las tareas repetitivas de un proceso de negocio, mover datos entre sistemas y coordinar sus etapas con reglas definidas, dejando a las personas las excepciones y decisiones. Con inteligencia artificial, el flujo también puede leer documentos, clasificar mensajes o proponer una respuesta en pasos que antes requerían interpretación humana. Esta guía explica qué necesitas para partir, tipos, ejemplos por área, cómo elegir el primer proceso y cómo implementarlo con medición.",
    sections: [
      {
        heading: "Qué es la automatización de procesos",
        paragraphs: [
          "Un proceso es una secuencia de pasos con una entrada, reglas, responsables y un resultado: llega una factura, se revisa, se registra en el ERP y se programa su pago. Automatizarlo significa que un sistema ejecuta los pasos repetibles, como copiar datos, validar campos, asignar responsables, enviar avisos o generar un reporte.",
          "El objetivo no suele ser eliminar toda intervención humana. Un buen flujo resuelve el camino habitual y deja visibles los casos que necesitan criterio, como un dato faltante o un monto que no cuadra. Cuando cruza áreas y sistemas, también se habla de automatización de procesos empresariales o BPA. Sus partes habituales son:"
        ],
        bullets: [
          "Disparador: el evento que inicia el flujo, como un correo, un formulario o una hora programada.",
          "Reglas y validaciones: deciden el siguiente paso y detectan datos incompletos o duplicados.",
          "Conexiones: interfaces con los sistemas donde se leen o registran datos.",
          "Excepciones: casos que pasan a una persona, con el motivo visible.",
          "Registro: historial de lo ejecutado, para revisar fallos y medir."
        ]
      },
      {
        heading: "Qué necesitas para automatizar un proceso en tu empresa",
        paragraphs: [
          "Si ya tienes una tarea que le quita tiempo a tu equipo, no necesitas saber qué herramienta usar. Puedes hacerlo con tu equipo, si alguien tiene el tiempo y los conocimientos para mantenerlo, o con un proveedor. En ambos casos, conviene partir con estas respuestas:"
        ],
        bullets: [
          "Qué tarea es: qué la inicia, qué pasos sigue y qué resultado entrega. Como ejemplo ficticio, facturas que llegan por correo y se cargan a mano en el ERP.",
          "Qué sistemas toca: correo, planillas, ERP, CRM o portales, y si tienen API u otra forma de conectarse.",
          "Cuánto volumen tiene: cuántos casos llegan al mes y cuánto trabajo manual toman hoy.",
          "Qué casos debe revisar una persona: datos que faltan, montos que no cuadran o aprobaciones.",
          "Quién entrega los accesos y quién ajusta el flujo cuando cambia un sistema o una regla."
        ],
        links: [
          {
            label: "Automatización de procesos para empresas en Chile: cómo trabaja YAGO y qué incluye",
            href: "/servicios/automatizacion-procesos"
          }
        ]
      },
      {
        heading: "Automatización de procesos con IA: qué cambia",
        paragraphs: [
          "La automatización tradicional necesita entradas predecibles, como un campo de formulario o una columna de planilla. La IA permite procesar información no estructurada: correos escritos libremente, PDF escaneados, fotos de documentos o notas de una llamada. Dentro del flujo cumple una tarea acotada, como extraer campos, clasificar una solicitud o redactar un borrador, mientras el resto sigue funcionando con reglas y conexiones.",
          "La diferencia práctica es que una regla entrega el mismo resultado ante la misma entrada, y un modelo puede equivocarse o responder distinto ante casos parecidos. Por eso un paso con IA se evalúa con una muestra de casos reales, se combina con validaciones y deriva a revisión lo que no cumple el criterio acordado. El AI RMF de NIST, un marco de uso voluntario, sirve como referencia para gestionar esos riesgos."
        ]
      },
      {
        heading: "Tipos de automatización de procesos",
        paragraphs: [
          "Los tipos de automatización se diferencian por cómo deciden el siguiente paso y qué información manejan. No son excluyentes: en un flujo de facturas, una regla detecta el correo del proveedor, la IA extrae folio y monto, una integración por API registra el documento en el ERP y, si ese sistema no tiene API, un robot RPA carga los datos en pantalla.",
          "Un agente agrega autonomía y exige más controles. OpenAI lo recomienda para decisiones complejas, reglas difíciles de mantener o mucha información no estructurada, y Anthropic sugiere buscar primero una solución simple y sumar complejidad solo cuando haga falta."
        ],
        table: {
          columns: [
            "Tipo",
            "Cómo funciona",
            "Cuándo conviene",
            "Qué considerar"
          ],
          rows: [
            [
              "Reglas y flujos de trabajo",
              "Ejecuta pasos con condiciones definidas: validar, asignar, avisar",
              "Entradas estructuradas y criterios estables",
              "Los casos que no calzan con ninguna regla necesitan salida a revisión"
            ],
            [
              "RPA",
              "Un robot de software repite acciones en la interfaz de otro sistema",
              "Sistemas o portales sin API, con pasos repetitivos en pantalla",
              "Puede fallar si cambia la pantalla; requiere credenciales y mantenimiento"
            ],
            [
              "Integración por API",
              "Los sistemas intercambian datos mediante interfaces o webhooks",
              "ERP, CRM u otras aplicaciones con API documentada",
              "Permisos, límites de uso y cambios de versión"
            ],
            [
              "Automatización con IA",
              "Un modelo extrae, clasifica o resume texto, documentos o imágenes",
              "Correos, PDF, fotos o texto libre",
              "Resultado variable: se evalúa con una muestra y se valida antes de registrar"
            ],
            [
              "Agentes de IA",
              "Un modelo decide pasos y herramientas para completar una tarea dentro de límites",
              "Tareas con varios caminos que no se pueden fijar de antemano",
              "Permisos acotados, registro de acciones y aprobación humana en pasos de impacto"
            ]
          ]
        },
        links: [
          {
            label: "Qué es un agente de IA y cómo se diferencia de la RPA",
            href: "/blog/agentes-de-ia-para-empresas"
          },
          {
            label: "Glosario: qué es RPA",
            href: "/glosario#rpa"
          }
        ]
      },
      {
        heading: "Ejemplos de automatización de procesos por área",
        paragraphs: [
          "Estos procesos aparecen con frecuencia en finanzas, RRHH, operaciones, ventas y gestión documental. Son ejemplos de diseño, no resultados medidos.",
          "Algunos dependen de trámites propios de Chile. Si la factura electrónica está disponible como XML, conviene leer ese archivo antes que extraer datos del PDF. En RRHH, el registro de contratos en el Portal Mi DT y la solicitud de certificados F30-1 se pueden validar y ejecutar por lote."
        ],
        table: {
          columns: [
            "Área y proceso",
            "Qué hace el flujo",
            "Qué revisa una persona"
          ],
          rows: [
            [
              "Finanzas: facturas de proveedores",
              "Lee proveedor, folio y monto, detecta duplicados y prepara el registro en el ERP",
              "Facturas sin orden de compra o con diferencias"
            ],
            [
              "Finanzas: conciliación bancaria",
              "Cruza la cartola con pagos y facturas por monto, fecha y referencia",
              "Movimientos sin coincidencia clara"
            ],
            [
              "RRHH: ingreso de personal",
              "Solicita documentos, revisa que estén completos, crea la ficha y pide accesos",
              "Condiciones del contrato y documentos observados"
            ],
            [
              "RRHH: contratos en Mi DT",
              "Valida los datos, registra el contrato y guarda el comprobante",
              "Registros rechazados o inconsistentes"
            ],
            [
              "Operaciones: compras",
              "Asigna el aprobador según monto o centro de costo y envía recordatorios",
              "La aprobación y las compras urgentes"
            ],
            [
              "Operaciones: reportes",
              "Consolida datos de planillas y sistemas en un reporte o panel periódico",
              "Interpretación y decisiones"
            ],
            [
              "Ventas: leads y cotizaciones",
              "Registra el contacto en el CRM, asigna un ejecutivo y prepara un borrador de cotización",
              "Descuentos y condiciones especiales"
            ],
            [
              "Atención: solicitudes de clientes",
              "Clasifica el mensaje con IA, crea el ticket y responde preguntas frecuentes aprobadas",
              "Reclamos y casos sensibles"
            ],
            [
              "Documentos: contratos y formularios",
              "Extrae campos con OCR e IA, valida formatos y guarda la referencia al archivo",
              "Campos ilegibles o con baja confianza"
            ],
            [
              "Documentos: certificados F30-1",
              "Solicita y descarga certificados por obra y período, con registro de cada solicitud",
              "Solicitudes con error o pendientes"
            ]
          ]
        },
        links: [
          {
            label: "Registro de contratos y términos en Mi DT: plazos y cómo hacerlo a volumen",
            href: "/blog/registro-contratos-terminos-mi-dt-plazos"
          },
          {
            label: "OCR con IA: cómo convertir documentos en datos útiles",
            href: "/blog/ocr-con-ia-digitalizar-documentos"
          }
        ]
      },
      {
        heading: "Cómo identificar qué procesos automatizar",
        paragraphs: [
          "Un buen candidato combina volumen, pasos repetibles y datos accesibles. Antes de elegir herramientas, observa cómo se hace el trabajo hoy. Estas señales suelen indicar una oportunidad:"
        ],
        bullets: [
          "El mismo dato se escribe a mano en dos o más sistemas o planillas.",
          "Una persona copia información entre pantallas o desde documentos.",
          "Las solicitudes llegan por correo y se pierde el seguimiento de su estado.",
          "Un reporte se arma cada semana o mes consolidando archivos a mano.",
          "Los errores de digitación generan retrabajo, reclamos o multas.",
          "Un paso depende de que alguien recuerde hacerlo a tiempo."
        ]
      },
      {
        heading: "Cómo priorizar procesos con un puntaje simple",
        paragraphs: [
          "Cuando hay varios candidatos, puntúa cada uno de 1 a 3 en los seis criterios de la tabla, usando 2 para situaciones intermedias. Suma por separado el impacto, con los tres primeros criterios, y la factibilidad, con los tres últimos. Cada total va de 3 a 9.",
          "Con ambos totales altos, el proceso es candidato para un piloto. Con impacto alto y factibilidad baja, suele convenir ordenar datos o conseguir accesos primero. Con impacto bajo, puede seguir manual por ahora. Ejemplo con puntajes supuestos: un registro diario de facturas con retrabajo frecuente podría sumar 8 de impacto y, si sus reglas están documentadas y el ERP tiene una interfaz disponible, 8 de factibilidad.",
          "El puntaje ordena la conversación, pero no reemplaza la medición: confirma volumen, tiempos y errores con datos reales. Conviene esperar si las reglas cambian cada mes, nadie puede explicar los pasos o el volumen es tan bajo que mantener la automatización costaría más que hacerlo a mano."
        ],
        table: {
          columns: [
            "Criterio",
            "1 punto",
            "3 puntos"
          ],
          rows: [
            [
              "Volumen (impacto)",
              "Ocurre pocas veces al mes",
              "Ocurre a diario o en lotes grandes"
            ],
            [
              "Tiempo manual por caso (impacto)",
              "Unos minutos, sin esperas",
              "Varias etapas de digitación, revisión o espera"
            ],
            [
              "Costo del error (impacto)",
              "Se corrige sin efecto fuera del equipo",
              "Genera retrabajo, reclamos, multas o pagos incorrectos"
            ],
            [
              "Estabilidad de reglas (factibilidad)",
              "Cambia según el caso o la persona",
              "Pasos y criterios documentados"
            ],
            [
              "Formato de entradas (factibilidad)",
              "Papel o datos dispersos",
              "Formularios, archivos o registros digitales"
            ],
            [
              "Acceso a sistemas (factibilidad)",
              "Sin acceso ni interfaz conocida",
              "API, exportación o acceso autorizado"
            ]
          ]
        },
        links: [
          {
            label: "Si no sabes por dónde partir, revisa la auditoría IA de procesos",
            href: "/servicios/auditoria-ia"
          },
          {
            label: "Automatización para pymes: cómo elegir el primer proceso",
            href: "/blog/automatizacion-para-pymes-por-donde-partir"
          }
        ]
      },
      {
        heading: "Cómo implementar una automatización paso a paso",
        paragraphs: [
          "Una implementación ordenada avanza en cuatro etapas, y cada una termina con un entregable que el equipo revisa antes de seguir.",
          "Diagnóstico: documenta entradas, pasos, sistemas, responsables y excepciones. Mide la línea base de volumen, tiempo de intervención humana, esperas y errores, y acuerda qué resultado será aceptable.",
          "Piloto: construye una versión acotada con datos reales. Prueba casos completos, incompletos, duplicados y con errores, y define qué pasa si un sistema no responde.",
          "Medición: compara el piloto con la línea base en períodos y volúmenes equivalentes. Si no cumple el criterio, ajusta el diseño o decide no ampliar.",
          "Escalamiento: amplía por etapas y deja documentación, monitoreo con alertas, un responsable y un procedimiento para cambios, porque los sistemas, formatos y reglas cambian."
        ],
        table: {
          columns: [
            "Etapa",
            "Pregunta que responde",
            "Entregable"
          ],
          rows: [
            [
              "Diagnóstico",
              "¿Qué proceso conviene y cómo funciona hoy?",
              "Mapa del proceso, línea base y criterios de aceptación"
            ],
            [
              "Piloto",
              "¿Funciona con casos reales y excepciones?",
              "Flujo acotado, casos de prueba y manejo de errores"
            ],
            [
              "Medición",
              "¿Mejora el proceso frente a la línea base?",
              "Resultados comparados y decisión de ampliar o ajustar"
            ],
            [
              "Escalamiento",
              "¿Puede operar de forma estable con más volumen?",
              "Documentación, monitoreo, responsables y plan de mantenimiento"
            ]
          ]
        },
        links: [
          {
            label: "Cómo implementa YAGO la automatización de procesos con IA",
            href: "/servicios/automatizacion-procesos"
          }
        ]
      },
      {
        heading: "Qué medir antes y después de automatizar",
        paragraphs: [
          "Mide los mismos indicadores antes y después, con períodos y volúmenes comparables. No cuentes el tiempo de ejecución del sistema como horas ahorradas: lo que se compara es el trabajo humano que el proceso sigue necesitando, incluida la revisión de excepciones."
        ],
        table: {
          columns: [
            "Indicador",
            "Qué muestra"
          ],
          rows: [
            [
              "Tiempo de intervención humana",
              "Trabajo de personas que cada caso sigue requiriendo"
            ],
            [
              "Tiempo de ciclo",
              "Cuánto demora un caso desde que llega hasta que se resuelve"
            ],
            [
              "Casos sin intervención",
              "Qué parte del volumen completa el flujo sin revisión"
            ],
            [
              "Tasa de excepciones",
              "Qué proporción pasa a una persona y por qué motivo"
            ],
            [
              "Errores y retrabajo",
              "Correcciones necesarias antes y después del cambio"
            ],
            [
              "Costo operativo",
              "Licencias, consumo, infraestructura, soporte y revisión humana"
            ],
            [
              "Fallos del flujo",
              "Ejecuciones detenidas, reintentos y tiempo hasta resolverlas"
            ]
          ]
        },
        links: [
          {
            label: "Cómo calcular el ROI de automatizar un proceso paso a paso",
            href: "/blog/como-calcular-el-roi-de-automatizar-procesos"
          }
        ]
      },
      {
        heading: "Errores comunes al automatizar procesos",
        paragraphs: [
          "Estos errores se pueden prevenir desde el diagnóstico:"
        ],
        bullets: [
          "Automatizar un proceso desordenado: el flujo repite los mismos problemas. Primero simplifica y documenta.",
          "Partir con varias áreas a la vez, sin un piloto que permita aprender.",
          "No medir la línea base y no poder demostrar después si hubo mejora.",
          "Probar solo con casos limpios y descubrir las excepciones en producción.",
          "No definir qué pasa si un sistema falla, falta un dato o se duplica un registro.",
          "Usar IA donde basta una regla, o reglas rígidas para leer texto libre.",
          "Dejar el flujo sin responsable, monitoreo ni documentación.",
          "Ejecutar robots con credenciales personales o permisos excesivos.",
          "Procesar datos personales sin definir qué se necesita, quién accede y dónde se guarda. En Chile, la Ley 21.719 modifica en profundidad la Ley 19.628; revisa con tu equipo legal su vigencia y lo que exige."
        ]
      },
      {
        heading: "Herramientas de automatización de procesos",
        paragraphs: [
          "La herramienta se elige después de entender el proceso y sus sistemas. La tabla describe opciones conocidas sin ordenarlas por preferencia, y es común combinarlas. Al comparar, revisa conectores, dónde se ejecutan y guardan los datos, licencias y consumo, manejo de errores, registro de ejecuciones y quién mantendrá el flujo. Una prueba con un caso real entrega más información que una demostración general."
        ],
        table: {
          columns: [
            "Herramienta",
            "Qué es",
            "Cuándo se suele evaluar"
          ],
          rows: [
            [
              "Power Automate",
              "Servicio de Microsoft para crear flujos entre aplicaciones; sus flujos de escritorio agregan RPA",
              "Empresas con Microsoft 365 o con aplicaciones de escritorio por automatizar"
            ],
            [
              "n8n",
              "Herramienta de flujos con licencia fair-code y funciones de IA, en la nube o alojada en infraestructura propia",
              "Cuando el equipo quiere decidir dónde se ejecuta el flujo y se guardan sus datos"
            ],
            [
              "Make",
              "Plataforma donde un escenario es una serie de módulos que indica cómo se transfieren y transforman datos entre aplicaciones",
              "Flujos entre aplicaciones en la nube con conectores disponibles"
            ],
            [
              "Zapier",
              "Servicio que conecta aplicaciones mediante Zaps: un disparador y una o más acciones",
              "Automatizaciones simples entre aplicaciones comerciales"
            ],
            [
              "UiPath",
              "Plataforma de automatización asociada a RPA, con robots que imitan acciones humanas en sistemas digitales",
              "Procesos repetitivos sobre sistemas sin API o con muchas pantallas"
            ],
            [
              "Desarrollo a medida",
              "Código propio con APIs, colas, bases de datos y modelos de IA",
              "Lógica específica, alto volumen, requisitos de seguridad o integraciones no cubiertas"
            ]
          ]
        },
        links: [
          {
            label: "n8n, Make y IA: cómo se combinan las herramientas en un flujo",
            href: "/blog/herramientas-automatizacion-n8n-make-ia"
          }
        ]
      }
    ],
    faq: [
      {
        question: "¿Qué es la automatización de procesos en palabras simples?",
        answer: "Es hacer que un sistema ejecute los pasos repetitivos de un proceso, como copiar datos, validar información, asignar responsables o enviar avisos. Las personas siguen a cargo de las excepciones y decisiones. Con IA, el sistema también puede leer documentos o clasificar mensajes."
      },
      {
        question: "¿Cuál es la diferencia entre automatización de procesos y RPA?",
        answer: "La automatización de procesos es el objetivo general: que un flujo ejecute pasos repetitivos. La RPA es una técnica para lograrlo, en la que un robot de software opera la interfaz de otro sistema como lo haría una persona. Suele usarse cuando no hay API y requiere mantenimiento si la pantalla cambia."
      },
      {
        question: "¿Qué procesos se pueden automatizar en una empresa?",
        answer: "Los que tienen volumen, pasos repetibles y datos accesibles: registro de facturas, conciliaciones, aprobaciones, ingreso de personal, reportes, clasificación de solicitudes y extracción de datos de documentos. Los procesos con reglas que cambian a menudo o con poco volumen suelen convenir menos."
      },
      {
        question: "¿Quién puede automatizar los procesos de mi empresa?",
        answer: "Tu propio equipo, si alguien tiene el tiempo y los conocimientos para construir y mantener los flujos, o un proveedor. YAGO diseña e implementa automatización de procesos para empresas en Chile, sobre los sistemas que ya usan, y parte por revisar el proceso, los sistemas y los datos. Si comparas proveedores, pregunta quién mantiene el flujo y cómo se manejan los errores."
      },
      {
        question: "¿Se necesita inteligencia artificial para automatizar un proceso?",
        answer: "No. Muchos procesos se resuelven con reglas e integraciones. La IA conviene en pasos que requieren interpretar información no estructurada, como un correo escrito libremente o un PDF escaneado, y su resultado se evalúa con casos reales antes de usarlo en la operación."
      },
      {
        question: "¿Automatizar procesos significa reemplazar personas?",
        answer: "El objetivo habitual es quitar tareas repetitivas y esperas del trabajo diario. Las personas siguen a cargo de excepciones, aprobaciones y decisiones, y el efecto en la carga de trabajo se mide comparando el tiempo de intervención humana antes y después."
      },
      {
        question: "¿Cuánto cuesta y cuánto demora automatizar un proceso?",
        answer: "Depende de los pasos, sistemas, volumen, excepciones y soporte requerido, además de los accesos y la calidad de los datos. Pide que la propuesta separe implementación, licencias, consumo y mantenimiento, y confirma el plazo del despliegue completo después de un piloto acotado."
      },
      {
        question: "¿Puede una pyme automatizar procesos?",
        answer: "Sí. Una pyme puede partir con un proceso acotado, las herramientas que ya usa y un piloto medible. Lo importante es elegir un proceso con volumen suficiente y no intentar automatizar todas las áreas al mismo tiempo."
      }
    ],
    conclusion: "La automatización de procesos usa software para ejecutar tareas repetitivas, mover datos entre sistemas y coordinar etapas; la IA se suma en los pasos que requieren interpretar texto o documentos. Para partir, prioriza un proceso con volumen, reglas estables y datos accesibles, mide su línea base, prueba un piloto con casos reales y amplía el alcance cuando los resultados lo respalden.",
    sources: [
      {
        title: "NIST: AI Risk Management Framework, marco de uso voluntario",
        url: "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        title: "OpenAI: A practical guide to building agents, cuándo conviene un agente",
        url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf"
      },
      {
        title: "Anthropic: Building effective agents, workflows y agentes",
        url: "https://www.anthropic.com/research/building-effective-agents"
      },
      {
        title: "Microsoft Learn: introducción a Power Automate",
        url: "https://learn.microsoft.com/es-es/power-automate/getting-started"
      },
      {
        title: "Microsoft Learn: flujos de escritorio y RPA en Power Automate",
        url: "https://learn.microsoft.com/es-es/power-automate/desktop-flows/introduction"
      },
      {
        title: "n8n Docs: qué es n8n",
        url: "https://docs.n8n.io/"
      },
      {
        title: "n8n Docs: alojamiento propio de n8n",
        url: "https://docs.n8n.io/deploy/host-n8n"
      },
      {
        title: "Make Help Center: crear un escenario",
        url: "https://help.make.com/create-your-first-scenario"
      },
      {
        title: "Zapier Help Center: qué es un Zap, disparadores y acciones",
        url: "https://help.zapier.com/hc/en-us/articles/8496181725453-Learn-key-concepts-in-Zap-workflows"
      },
      {
        title: "UiPath: qué es la automatización robótica de procesos (RPA)",
        url: "https://www.uipath.com/rpa/robotic-process-automation"
      },
      {
        title: "Biblioteca del Congreso Nacional: Ley 21.719 sobre protección de datos personales",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=1209272"
      }
    ],
    service: {
      name: "Automatización de procesos",
      href: "/servicios/automatizacion-procesos",
      text: "YAGO diseña e implementa automatizaciones en Chile sobre los sistemas que ya usa tu empresa, con validaciones, manejo de errores y medición frente a la línea base."
    },
    relatedSlugs: [
      "como-calcular-el-roi-de-automatizar-procesos",
      "automatizacion-para-pymes-por-donde-partir",
      "agentes-de-ia-para-empresas"
    ]
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
    modifiedDate: "2026-11-02",
    video: {
      youtubeId: "7i2mmmVsXfA",
      title: "Digitalizar no es escanear | Los documentos hablan",
      description: "Escanear, reconocer texto con OCR y extraer datos son tres trabajos distintos con un mismo nombre. El video muestra qué entrega cada uno y cuándo conviene usar el XML de la factura electrónica en vez de leer el PDF.",
      uploadDate: "2026-11-02T15:05:19-03:00",
      duration: "PT59S",
      poster: "/videos/digitalizar-no-es-escanear.webp",
    },
    title: "Digitalización de documentos: qué es, cómo se hace y cuándo usar OCR con IA",
    seoTitle: "Digitalización de documentos en empresas: guía | YAGO",
    description: "Qué es la digitalización de documentos, cómo se diferencia de escanear o de la gestión documental, cómo se hace paso a paso y cuándo usar OCR con IA.",
    excerpt: "Escanear, digitalizar, extraer datos y gestionar documentos no son lo mismo. Proceso paso a paso, documentos típicos en Chile y cómo medir la calidad.",
    image: "/images/blog-ocr-ia.png",
    category: "Documentos y OCR",
    date: "2026-06-10",
    readingTime: "12 min",
    keywords: [
      "digitalización de documentos",
      "digitalizacion de documentos empresas",
      "sistema de digitalización de documentos",
      "digitalizacion de documentos chile",
      "extracción de datos desde documentos",
      "OCR con IA"
    ],
    intro: "La digitalización de documentos es el proceso de convertir información en papel, imágenes o PDFs en un formato digital que se pueda guardar, buscar y procesar. En una empresa, la expresión se usa para tres trabajos distintos: escanear para tener una copia, reconocer el texto con OCR y extraer datos para que un sistema los use. Esta guía explica las diferencias, cómo se hace un proyecto paso a paso, qué documentos de empresas chilenas conviene tratar de otra forma y cuándo tiene sentido usar OCR con IA.",
    sections: [
      {
        heading: "Qué es la digitalización de documentos",
        paragraphs: [
          "Digitalizar es pasar un documento a un formato que un computador puede guardar y, según el caso, leer. Un escaneo produce una imagen del papel. El OCR, o reconocimiento óptico de caracteres, convierte esa imagen en texto que se puede buscar o copiar. La extracción de datos va un paso más allá: identifica campos concretos, como RUT, folio, fecha o monto, y los entrega ordenados.",
          "Cuando se habla de OCR con IA o de procesamiento inteligente de documentos, esos pasos se combinan con modelos que reconocen el tipo de documento y la estructura de sus campos. La documentación de Azure Document Intelligence, por ejemplo, describe modelos para leer texto impreso y manuscrito, otros para extraer tablas y estructura, y modelos prediseñados o personalizados para documentos específicos.",
          "Para una empresa, la pregunta útil no es si un archivo está digitalizado, sino qué necesita hacer con él: guardarlo, encontrarlo o usar sus datos en un proceso. La respuesta define qué tecnología conviene y cuánto trabajo implica."
        ]
      },
      {
        heading: "Escanear, digitalizar, extraer datos y gestión documental: diferencias",
        paragraphs: [
          "Estos términos se usan como sinónimos, pero cada uno entrega un resultado distinto y muchos proyectos necesitan más de uno. La tabla resume qué produce cada etapa y dónde está su límite.",
          "Si tus documentos están en papel, el escaneo es el primer paso y lo puede hacer tu equipo o un proveedor de escaneo. El servicio de YAGO parte desde archivos digitales o ya escaneados: extrae los campos, los valida y los integra a tus sistemas."
        ],
        table: {
          columns: [
            "Concepto",
            "Qué produce",
            "Para qué sirve",
            "Límite"
          ],
          rows: [
            [
              "Escanear",
              "Una imagen o un PDF del documento en papel",
              "Tener una copia digital y consultar sin buscar el archivo físico",
              "El contenido no se puede buscar ni procesar"
            ],
            [
              "Digitalizar con OCR",
              "Texto reconocido dentro del archivo",
              "Buscar palabras, copiar texto e indexar archivos",
              "El texto no queda separado en campos"
            ],
            [
              "Extraer datos",
              "Campos estructurados, por ejemplo en JSON o en una planilla",
              "Cargar información en un ERP, una planilla o un flujo de trabajo",
              "Requiere reglas de validación y revisión de excepciones"
            ],
            [
              "Gestión documental",
              "Un repositorio con versiones, permisos y búsqueda",
              "Ordenar, encontrar y controlar el acceso a los documentos",
              "Guarda el documento, pero no siempre usa sus datos"
            ]
          ]
        },
        links: [
          {
            label: "Servicio de digitalización de documentos con OCR para empresas",
            href: "/ocr"
          }
        ]
      },
      {
        heading: "Cuándo conviene usar OCR con IA y cuándo no",
        paragraphs: [
          "El OCR con IA tiene sentido cuando un equipo copia datos desde documentos de forma repetida, los formatos cambian según el emisor y el dato debe llegar a un sistema. También sirve para recuperar información de archivos históricos escaneados que hoy son difíciles de consultar.",
          "No siempre es la ruta adecuada. Si el dato ya existe en formato estructurado, conviene usar esa fuente. La factura electrónica es un documento tributario electrónico: el SII indica que el emisor lo genera y guarda en formato XML y que el receptor electrónico lo recibe en ese formato. Leer el XML evita interpretar el PDF o la versión impresa.",
          "Tampoco conviene cuando el volumen es muy bajo, porque configurar y mantener reglas puede costar más que digitar, ni cuando solo necesitas buscar texto en un archivo: para eso basta un OCR sin extracción de campos.",
          "Estas señales indican que vale la pena evaluarlo:"
        ],
        bullets: [
          "Tu equipo digita a diario datos desde PDFs, fotos o escaneos.",
          "Los documentos llegan de muchos emisores con formatos distintos.",
          "Los errores de digitación generan retrabajo o correcciones posteriores.",
          "El dato tiene un destino claro: una planilla, un ERP o un flujo de aprobación."
        ]
      },
      {
        heading: "Documentos típicos en empresas chilenas y cómo tratarlos",
        paragraphs: [
          "El tipo de documento cambia la estrategia. Antes de aplicar OCR, revisa si existe una fuente estructurada y qué campos necesita el proceso. También conviene confirmar quién usa cada dato y en qué sistema debe quedar.",
          "En el caso tributario, el Registro de Compras y Ventas del SII se abastece de los documentos tributarios electrónicos recibidos por el Servicio, y los documentos no electrónicos los informa el contribuyente. Para facturas electrónicas, esa información y el XML son una fuente más directa que el PDF."
        ],
        table: {
          columns: [
            "Documento",
            "Cómo suele llegar",
            "Enfoque recomendado"
          ],
          rows: [
            [
              "Factura electrónica",
              "XML del documento tributario electrónico, más un PDF o una impresión",
              "Leer el XML o el Registro de Compras y Ventas; usar OCR solo si únicamente tienes el PDF"
            ],
            [
              "Factura en papel, escaneada o de un proveedor extranjero",
              "PDF escaneado, foto o PDF sin datos estructurados",
              "OCR con extracción de campos y validaciones de montos, fechas y duplicados"
            ],
            [
              "Guía de despacho",
              "Guía electrónica con su XML o copia en papel escaneada",
              "Usar el XML cuando existe; desde la copia escaneada, extraer folio, fecha, destinatario y observaciones"
            ],
            [
              "Contrato o anexo",
              "PDF firmado electrónicamente o escaneo de un original en papel",
              "Extraer partes, fechas, montos y cláusulas acordadas, con revisión humana de los campos críticos"
            ],
            [
              "Liquidación de sueldo",
              "PDF generado por el sistema de remuneraciones o copia escaneada",
              "Exportar los datos desde el sistema de origen cuando existe; usar OCR para lotes históricos"
            ],
            [
              "Certificado",
              "PDF emitido por una institución o un portal",
              "Extraer emisor, titular, período y vigencia; validar con el emisor cuando el proceso lo exija"
            ]
          ]
        }
      },
      {
        heading: "Cómo se hace un proyecto de digitalización paso a paso",
        paragraphs: [
          "Un proyecto ordenado parte por el objetivo, no por la herramienta. Estos ocho pasos sirven tanto si contratas un servicio como si lo desarrolla tu equipo.",
          "El plazo depende de la variedad documental, las validaciones y las integraciones. Partir con un tipo de documento y un destino permite medir el resultado antes de sumar otros formatos.",
          "Si además debes conservar los archivos a largo plazo, define el formato desde el inicio. PDF/A es una familia de normas ISO 19005 pensada para preservar la apariencia visual de documentos electrónicos en el tiempo; por ejemplo, exige incrustar las fuentes y evitar dependencias externas."
        ],
        table: {
          columns: [
            "Paso",
            "Qué hacer",
            "Resultado"
          ],
          rows: [
            [
              "1. Inventario y objetivo",
              "Lista tipos de documento, volumen mensual, origen y qué se hace hoy con cada uno",
              "Un alcance acotado y una línea base del trabajo manual"
            ],
            [
              "2. Muestra representativa",
              "Reúne documentos reales de distintos emisores, formatos y calidades, incluidos los casos difíciles",
              "Material para configurar y otro reservado para evaluar"
            ],
            [
              "3. Campos y reglas",
              "Define qué campos necesitas, en qué formato y cómo se validan",
              "Un esquema de datos acordado con quien usa el resultado"
            ],
            [
              "4. Captura",
              "Escanea el papel con buena legibilidad, páginas completas y orientación correcta; define cómo llegan los archivos digitales",
              "Entradas con calidad suficiente para leerlas"
            ],
            [
              "5. Extracción y validación",
              "Configura la lectura de campos y reglas como formato de RUT, fechas válidas, sumas y duplicados",
              "Datos estructurados con alertas cuando algo no cuadra"
            ],
            [
              "6. Revisión humana",
              "Envía a una bandeja los casos con baja confianza o que no cumplen una regla",
              "Excepciones corregidas y registradas"
            ],
            [
              "7. Integración",
              "Conecta la salida con la planilla, el ERP o el sistema interno mediante la interfaz disponible",
              "El dato llega a su destino con referencia al documento de origen"
            ],
            [
              "8. Medición y ajuste",
              "Compara resultados por campo, tiempo de revisión y errores con la línea base",
              "Una decisión informada: ampliar, ajustar o detener"
            ]
          ]
        },
        links: [
          {
            label: "Cuánto cuesta digitalizar documentos y cómo calcularlo",
            href: "/blog/cuanto-cuesta-digitalizar-documentos"
          }
        ]
      },
      {
        heading: "Cómo medir la calidad: precisión por campo y revisión humana",
        paragraphs: [
          "Un porcentaje global de acierto puede ocultar que un campo crítico, como el monto o el RUT, falla con frecuencia. Mide por campo y por tipo de documento, con un criterio de coincidencia acordado: cómo se normalizan fechas, decimales y campos vacíos.",
          "La documentación de Google Document AI define la precisión como la proporción de predicciones que coinciden con las anotaciones de prueba, y el recall como la proporción de anotaciones que se predicen correctamente. También explica que subir el umbral de confianza tiende a aumentar la precisión y a reducir el recall, porque quedan menos predicciones.",
          "La puntuación de confianza ayuda a decidir qué revisar. Microsoft la describe como una probabilidad estimada entre 0 y 1 de que la predicción sea correcta y sugiere usarla para aceptar automáticamente un resultado o marcarlo para revisión humana cuando la exactitud es crítica. El umbral se calibra con tu muestra; no conviene fijarlo de antemano.",
          "Registra al menos estos indicadores:"
        ],
        bullets: [
          "Precisión y recall por campo y por tipo de documento.",
          "Porcentaje de documentos que completan el flujo sin intervención.",
          "Tiempo de revisión por documento y motivo de cada excepción.",
          "Errores detectados después de la carga en el sistema de destino."
        ],
        links: [
          {
            label: "Cómo evaluar un piloto OCR: muestra, métricas y costo por documento",
            href: "/blog/evaluar-piloto-ocr-precision-costos"
          }
        ]
      },
      {
        heading: "Cómo elegir un servicio o software de digitalización de documentos",
        paragraphs: [
          "Un software de digitalización de documentos entrega la herramienta: tu equipo la configura, la mantiene y revisa los resultados. Un servicio incluye además la definición de campos, las reglas, el manejo de excepciones y la integración. Ambos pueden funcionar; la elección depende de cuánta capacidad técnica y tiempo tiene tu equipo.",
          "Para comparar alternativas, pide una prueba con tus propios documentos y revisa esta lista:"
        ],
        bullets: [
          "Prueba con una muestra real, incluidos documentos de mala calidad y formatos poco frecuentes.",
          "Resultados por campo con el criterio de coincidencia explicado, no solo un porcentaje global.",
          "Manejo de excepciones: quién revisa, dónde lo hace y cómo queda registrada la corrección.",
          "Validaciones disponibles: formato de RUT, fechas, sumas, duplicados y cruces con tus datos maestros.",
          "Formatos de salida e integración con tu planilla, ERP o sistema, con la interfaz que se usará.",
          "Seguridad: dónde se procesan y guardan los archivos, quién accede y por cuánto tiempo.",
          "Costo total: implementación, operación por volumen, revisión humana y soporte.",
          "Qué queda fuera: escaneo físico, custodia de archivos o conservación con valor legal."
        ],
        links: [
          {
            label: "Solicitar una evaluación del servicio de digitalización de documentos",
            href: "/ocr"
          },
          {
            label: "OCR Master: API para integrar la lectura de documentos en tus sistemas",
            href: "/ocr-master"
          },
          {
            label: "Cómo se cotizan el OCR y los proyectos a medida",
            href: "/precios"
          }
        ]
      },
      {
        heading: "Errores comunes al digitalizar documentos",
        paragraphs: [
          "Estos errores se pueden prevenir si se consideran desde la planificación:"
        ],
        bullets: [
          "Escanear todo sin definir para qué se usarán los archivos.",
          "Aplicar OCR a facturas electrónicas cuando el XML ya contiene los datos.",
          "Medir con un porcentaje global en lugar de hacerlo por campo.",
          "Probar solo con documentos limpios de un único formato.",
          "No definir quién revisa las excepciones ni cuánto tiempo toma.",
          "Cargar datos al sistema sin validar duplicados ni campos obligatorios.",
          "Destruir originales en papel sin revisar las reglas tributarias y laborales de conservación."
        ],
        links: [
          {
            label: "Validez legal de documentos digitalizados en Chile",
            href: "/blog/validez-legal-documentos-digitalizados-chile"
          }
        ]
      }
    ],
    conclusion: "Digitalizar documentos puede significar escanear, reconocer texto, extraer datos o gestionarlos en un repositorio. Define primero qué necesitas hacer con la información, usa el XML cuando existe y aplica OCR con IA donde hoy se digitan datos a mano. Mide la calidad por campo, planifica la revisión humana y conecta el resultado con el sistema que lo usa.",
    faq: [
      {
        question: "¿Qué es la digitalización de documentos?",
        answer: "Es convertir información en papel, imágenes o PDFs a un formato digital que se pueda guardar, buscar o procesar. Puede limitarse a escanear o incluir OCR y extracción de datos para que un sistema use la información."
      },
      {
        question: "¿Cuál es la diferencia entre escanear y digitalizar un documento?",
        answer: "Escanear produce una imagen del papel. Digitalizar, en un sentido amplio, incluye reconocer el texto con OCR y, si el proceso lo necesita, extraer campos estructurados que se pueden validar y cargar en un sistema."
      },
      {
        question: "¿Qué es el OCR con IA?",
        answer: "Es la combinación del reconocimiento óptico de caracteres con modelos que identifican el tipo de documento y sus campos, como RUT, folio, fecha o monto. Permite trabajar con formatos variables sin depender siempre de una plantilla fija, pero su calidad se debe medir con tus documentos."
      },
      {
        question: "¿Conviene usar OCR para facturas electrónicas?",
        answer: "Por lo general no, si tienes acceso al XML. La factura electrónica es un documento tributario electrónico y sus datos ya vienen estructurados. El OCR sirve cuando solo tienes un PDF, una impresión o un escaneo."
      },
      {
        question: "¿Qué precisión tiene el OCR?",
        answer: "No hay una cifra única. Depende del tipo de documento, la calidad del archivo, el campo y la configuración. La forma confiable de saberlo es medir la precisión por campo y los casos que requieren revisión con una muestra de tus propios documentos."
      },
      {
        question: "¿Puedo destruir los documentos en papel después de digitalizarlos?",
        answer: "No de forma automática. En Chile existen plazos de conservación tributarios y laborales, y la Ley 18.845 fija requisitos para que una imagen digitalizada tenga el mismo mérito que el original. Revisa la guía sobre validez legal y consulta a tu asesor antes de destruir originales."
      },
      {
        question: "¿Cuánto cuesta digitalizar documentos?",
        answer: "Depende del volumen, la variedad de formatos, la calidad de los archivos, los campos, las validaciones, las integraciones y la revisión humana. Para comparar, calcula primero cuánto te cuesta hoy la digitación manual y pide una cotización basada en una muestra."
      },
      {
        question: "¿YAGO escanea documentos en papel?",
        answer: "No. YAGO trabaja con archivos digitales o ya escaneados, como PDFs e imágenes. Extrae y valida los datos, marca los casos dudosos para que tu equipo los revise y los integra a planillas, ERP o sistemas internos."
      }
    ],
    sources: [
      {
        title: "Google Cloud Document AI: evaluar rendimiento, precisión y recall",
        url: "https://docs.cloud.google.com/document-ai/docs/evaluate"
      },
      {
        title: "Microsoft Learn: puntuaciones de confianza y exactitud en Azure Document Intelligence",
        url: "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/concept/accuracy-confidence"
      },
      {
        title: "Microsoft Learn: qué es Azure Document Intelligence y sus modelos",
        url: "https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview"
      },
      {
        title: "SII: cómo deben conservarse los documentos tributarios electrónicos (DTE)",
        url: "https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_1455.htm"
      },
      {
        title: "SII: qué es el Registro de Compras y Ventas (RCV)",
        url: "https://www.sii.cl/preguntas_frecuentes/factura_electronica/001_003_6971.htm"
      },
      {
        title: "SII: preguntas frecuentes sobre la guía de despacho electrónica",
        url: "https://www.sii.cl/preguntas_frecuentes/factura_electronica/arbol_factura_electronica_2357.htm"
      },
      {
        title: "Library of Congress: formato PDF/A (ISO 19005) para preservación",
        url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000318.shtml"
      },
      {
        title: "BCN Ley Chile: Ley 18.845, sistemas de microcopia o micrograbación de documentos",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=30221"
      }
    ],
    product: {
      name: "OCR con IA",
      href: "/ocr",
      text: "YAGO extrae y valida datos desde PDFs, escaneos y fotos de documentos, marca los casos dudosos para revisión humana e integra el resultado en planillas, ERP o sistemas internos."
    },
    relatedSlugs: [
      "cuanto-cuesta-digitalizar-documentos",
      "validez-legal-documentos-digitalizados-chile",
      "evaluar-piloto-ocr-precision-costos"
    ]
  },
  {
    slug: "agentes-de-ia-para-empresas",
    title: "Qué es un agente de IA: cómo funciona, tipos y ejemplos en empresas",
    seoTitle: "Qué es un agente de IA: cómo funciona y ejemplos | YAGO",
    description: "Qué es un agente de IA, cómo funciona, en qué se diferencia de un chatbot o de la RPA, ejemplos en empresas y qué controles definir antes de un piloto.",
    excerpt: "Definición, componentes, diferencias con chatbots y RPA, ocho ejemplos de uso en empresas y los controles que conviene definir antes de probar un agente.",
    image: "/images/blog-agentes-ia.png",
    category: "Tecnología",
    date: "2026-06-03",
    modifiedDate: "2026-11-01",
    readingTime: "11 min",
    keywords: [
      "qué es un agente de IA",
      "cómo funciona un agente de IA",
      "tipos de agentes de IA",
      "ejemplos de agentes de IA en empresas",
      "diferencia entre agente de IA y chatbot",
      "agente de IA vs RPA"
    ],
    intro: "Un agente de IA es un sistema que usa un modelo de lenguaje para decidir qué pasos seguir y qué herramientas usar, como buscar en documentos, consultar un sistema o preparar un registro, hasta completar una tarea dentro de límites definidos. A diferencia de un chatbot que solo responde, un agente puede actuar. Por eso, antes de implementarlo, una empresa define qué puede consultar, qué puede ejecutar y cuándo debe intervenir una persona.",
    sections: [
      {
        heading: "Qué es un agente de IA",
        paragraphs: [
          "La palabra agente se usa para soluciones distintas. OpenAI describe los agentes como sistemas que realizan tareas de forma independiente en nombre del usuario: un modelo dirige el flujo y usa herramientas para obtener contexto y actuar. Anthropic los distingue de los workflows: en un workflow, el modelo y las herramientas siguen rutas de código predefinidas; en un agente, el modelo dirige su propio proceso.",
          "En la práctica, un agente recibe un objetivo, decide el siguiente paso, usa una herramienta, revisa el resultado y vuelve a decidir hasta terminar, pedir ayuda o detenerse. Esa capacidad de elegir el camino es lo que lo separa de una automatización con pasos fijos.",
          "No toda aplicación con IA es un agente. La guía de OpenAI aclara que un chatbot simple, un modelo que responde una sola vez o un clasificador de sentimiento usan IA, pero no controlan la ejecución de un flujo."
        ]
      },
      {
        heading: "Cómo funciona un agente de IA: componentes",
        paragraphs: [
          "OpenAI resume la base de un agente en tres componentes: modelo, herramientas e instrucciones. En una empresa también se definen datos, permisos, memoria y evaluación, como muestra la tabla.",
          "El funcionamiento es un ciclo: el agente interpreta la solicitud, elige una herramienta, observa la respuesta y decide si continúa. Las guías de Anthropic y OpenAI describen condiciones de salida, como un máximo de pasos, y pausas para revisión humana cuando el agente encuentra un bloqueo o debe ejecutar una acción de riesgo."
        ],
        table: {
          columns: [
            "Componente",
            "Qué hace",
            "Qué define la empresa"
          ],
          rows: [
            [
              "Modelo",
              "Interpreta la solicitud, decide el siguiente paso y redacta la respuesta",
              "Qué modelo usar según la tarea, el costo y dónde se procesan los datos"
            ],
            [
              "Instrucciones",
              "Fijan el objetivo, las reglas, el tono y cuándo detenerse",
              "Procedimientos vigentes, casos especiales y límites de la tarea"
            ],
            [
              "Herramientas",
              "Permiten consultar o actuar: buscar un documento, leer un registro, crear un ticket",
              "Qué herramientas existen y cuáles solo leen o también escriben"
            ],
            [
              "Datos y fuentes",
              "Entregan el contexto para responder o decidir",
              "Fuentes autorizadas, vigencia de los documentos y quién las actualiza"
            ],
            [
              "Permisos",
              "Limitan lo que el agente puede ver y hacer para cada usuario",
              "Accesos por rol y acciones que requieren aprobación"
            ],
            [
              "Memoria",
              "Conserva el contexto de una conversación o de casos anteriores",
              "Qué se guarda, por cuánto tiempo y quién puede verlo"
            ],
            [
              "Evaluación y registro",
              "Permiten comprobar resultados y revisar qué hizo el agente",
              "Casos de prueba, criterios de aceptación y bitácora de acciones"
            ]
          ]
        }
      },
      {
        heading: "Tipos de agentes de IA en una empresa",
        paragraphs: [
          "La literatura académica de IA tiene clasificaciones clásicas, como agentes reactivos, basados en objetivos o que aprenden. En una empresa es más útil clasificarlos por la autonomía que reciben. Un camino prudente es partir con un agente que propone y ampliar su autonomía cuando la evaluación lo respalde:"
        ],
        bullets: [
          "Asistente con recuperación de información: responde con documentos internos y muestra referencias. Como no ejecuta acciones, no es un agente en sentido estricto, pero suele ser el primer paso.",
          "Agente que propone: reúne datos y prepara una acción, como un ticket o un borrador de respuesta, que una persona confirma antes de ejecutarla.",
          "Agente que ejecuta con límites: realiza acciones de bajo impacto dentro de sus permisos, como actualizar un estado, y deriva a una persona lo que excede su alcance.",
          "Sistema de varios agentes: agentes especializados se coordinan mediante un agente central o traspasándose la tarea. OpenAI recomienda aprovechar primero un solo agente y dividirlo cuando la lógica o la cantidad de herramientas lo exijan."
        ]
      },
      {
        heading: "Agente de IA vs chatbot vs RPA vs automatización tradicional",
        paragraphs: [
          "Desde fuera estas soluciones se parecen: una conversación, un flujo o un robot que completa una tarea. Se diferencian en cómo deciden el siguiente paso y en qué pueden hacer.",
          "No son alternativas excluyentes. Un proyecto puede usar un chatbot como canal, un agente para interpretar y preparar la gestión, una automatización con reglas para registrarla y RPA solo donde un sistema no tiene API. Cuando los pasos se conocen de antemano, un flujo definido suele ser más predecible y fácil de probar que un agente."
        ],
        table: {
          columns: [
            "Enfoque",
            "Cómo decide el siguiente paso",
            "Cuándo conviene",
            "Qué controlar"
          ],
          rows: [
            [
              "Chatbot",
              "Es una interfaz de conversación; responde con reglas, menús o un modelo y puede contener un asistente o un agente",
              "Preguntas frecuentes y orientación con información aprobada",
              "Información vigente y derivación a una persona"
            ],
            [
              "Automatización tradicional",
              "Sigue pasos y condiciones definidos de antemano",
              "Entradas estructuradas y reglas estables",
              "Excepciones que no calzan con ninguna regla"
            ],
            [
              "RPA",
              "Repite acciones programadas sobre la interfaz de otro sistema",
              "Sistemas sin API con tareas repetitivas en pantalla",
              "Cambios de pantalla, credenciales y mantenimiento"
            ],
            [
              "Agente de IA",
              "Un modelo elige pasos y herramientas según el objetivo y lo que observa",
              "Tareas con varios caminos, información no estructurada o reglas difíciles de mantener",
              "Permisos, aprobaciones, registro de acciones y evaluación continua"
            ]
          ]
        },
        links: [
          {
            label: "Automatización de procesos: tipos, ejemplos y cómo elegir el primer proceso",
            href: "/blog/que-es-la-automatizacion-de-procesos-con-ia"
          }
        ]
      },
      {
        heading: "Ejemplos de agentes de IA en empresas",
        paragraphs: [
          "Estos ocho casos muestran qué puede hacer un agente y qué conviene mantener bajo control humano. Son ejemplos de diseño, no casos de clientes ni resultados medidos. Su viabilidad depende de las fuentes, las interfaces disponibles y la evaluación con casos reales."
        ],
        table: {
          columns: [
            "Caso",
            "Qué hace el agente",
            "Qué queda bajo control humano"
          ],
          rows: [
            [
              "Mesa de ayuda interna",
              "Responde dudas de TI o RRHH con procedimientos vigentes y referencias; si corresponde, prepara un ticket",
              "Confirmar el ticket y definir qué documentos ve cada rol"
            ],
            [
              "Atención de clientes",
              "Responde preguntas frecuentes y consulta el estado de un pedido o caso en el sistema",
              "Reclamos, devoluciones y respuestas fuera de lo aprobado"
            ],
            [
              "Cuentas por pagar",
              "Cruza facturas con la orden de compra y la recepción, y explica las diferencias",
              "Registrar facturas con diferencias y autorizar pagos"
            ],
            [
              "Cobranza",
              "Prioriza clientes por vencimiento y prepara recordatorios con el estado de cuenta",
              "Acuerdos de pago y casos sensibles"
            ],
            [
              "Cotizaciones",
              "Lee la solicitud, consulta precios y stock, y prepara un borrador en el CRM",
              "Descuentos, plazos de entrega y condiciones especiales"
            ],
            [
              "Ingreso de personal",
              "Revisa los documentos recibidos, detecta faltantes y prepara los datos del contrato",
              "Contenido del contrato y su registro en el Portal Mi DT"
            ],
            [
              "Seguimiento de trámites",
              "Consulta estados en portales o sistemas, resume cambios y avisa al responsable",
              "Decisiones y respuestas que derivan de cada cambio"
            ],
            [
              "Revisión de contratos",
              "Compara un contrato con la plantilla aprobada y marca las cláusulas distintas",
              "Evaluación legal y aprobación final"
            ]
          ]
        },
        links: [
          {
            label: "SOF.IA: asistente para consultar documentación interna con referencias",
            href: "/productos/sofia"
          }
        ]
      },
      {
        heading: "Riesgos de un agente de IA y cómo controlarlos",
        paragraphs: [
          "Un agente que puede actuar también puede equivocarse al actuar. OWASP llama agencia excesiva al riesgo de que un sistema con IA ejecute acciones dañinas a partir de una salida inesperada, ambigua o manipulada, y lo asocia a funciones, permisos o autonomía mayores que los necesarios.",
          "OpenAI sugiere asignar a cada herramienta un nivel de riesgo según si solo lee o también escribe, si la acción es reversible, qué permisos requiere y su impacto financiero, y usar ese nivel para pausar o escalar a una persona. El AI RMF de NIST, de uso voluntario, sirve como marco general para gestionar riesgos de IA.",
          "Si el agente trata datos personales, en Chile rige la Ley 19.628, que la Ley 21.719 modifica en profundidad. Revisa con tu equipo legal la vigencia de esos cambios y qué exigen a tu caso. Estos controles se acuerdan antes del piloto y se prueban como parte de la evaluación:"
        ],
        table: {
          columns: [
            "Riesgo",
            "Control"
          ],
          rows: [
            [
              "Acciones no autorizadas",
              "Herramientas y permisos mínimos por rol; la autorización se valida en el sistema de destino, no en el modelo"
            ],
            [
              "Acciones irreversibles o de alto impacto",
              "Aprobación humana antes de pagar, anular, enviar a clientes o modificar registros sensibles"
            ],
            [
              "Respuestas sin sustento",
              "Fuentes autorizadas, referencias visibles e instrucción de reconocer cuando falta información"
            ],
            [
              "Instrucciones ocultas en correos o documentos",
              "Tratar el contenido externo como dato, filtrar entradas y limitar las acciones posteriores a su lectura"
            ],
            [
              "Exposición de datos personales o confidenciales",
              "Acceso según el usuario, mínimo de datos necesarios y revisión de las condiciones del proveedor del modelo"
            ],
            [
              "Cambios que degradan el resultado",
              "Repetir la evaluación con los mismos casos cuando cambian el modelo, las fuentes o las herramientas"
            ],
            [
              "Fallos de herramientas",
              "Estados visibles, reintentos controlados y un límite de pasos por ejecución"
            ],
            [
              "Costo de consumo variable",
              "Límites de uso, monitoreo del consumo y comparación con la línea base"
            ],
            [
              "Falta de trazabilidad",
              "Registro de consultas, herramientas usadas, resultados y aprobaciones"
            ]
          ]
        }
      },
      {
        heading: "Cómo empezar con un piloto acotado",
        paragraphs: [
          "Un piloto útil prueba una tarea concreta con usuarios reales y deja evidencia para decidir si ampliar. Estos pasos ayudan a mantenerlo acotado:"
        ],
        bullets: [
          "Elige una tarea con volumen, fuentes disponibles y un resultado que alguien pueda verificar.",
          "Define usuarios, fuentes, herramientas y las acciones que el agente puede proponer o ejecutar.",
          "Parte en modo propuesta: el agente prepara y una persona confirma.",
          "Prepara casos de evaluación: consultas habituales, ambiguas, sin respuesta en las fuentes y fuera de alcance.",
          "Mide respuestas correctas con referencia, acciones bien preparadas, derivaciones, tiempo de intervención y costo de consumo.",
          "Amplía la autonomía solo en las acciones donde la evaluación muestre resultados consistentes."
        ],
        table: {
          columns: [
            "Prueba",
            "Criterio de aceptación"
          ],
          rows: [
            [
              "La respuesta no está en las fuentes",
              "Explica la falta de información sin presentar un dato inventado como hecho"
            ],
            [
              "El usuario no tiene acceso a un documento",
              "La respuesta respeta el acceso definido para ese usuario"
            ],
            [
              "Se propone crear o modificar un registro",
              "Se comprueban los campos y las confirmaciones acordadas"
            ],
            [
              "Una herramienta falla",
              "El estado indica el fallo y permite revisión o reintento controlado"
            ],
            [
              "Un documento incluye instrucciones dirigidas al agente",
              "El agente no las ejecuta y sigue el procedimiento definido"
            ]
          ]
        },
        links: [
          {
            label: "Si buscas implementarlo, revisa nuestro servicio de agentes de IA para empresas",
            href: "/servicios/agentes-ia"
          },
          {
            label: "Cómo integrar IA en los procesos de una empresa sin reemplazar sus sistemas",
            href: "/blog/integrar-ia-procesos-empresa"
          }
        ]
      }
    ],
    faq: [
      {
        question: "¿Qué es un agente de IA en palabras simples?",
        answer: "Es un programa que usa un modelo de lenguaje para decidir qué hacer y usar herramientas, como buscar información o crear un registro, hasta completar una tarea dentro de los permisos y límites que define la empresa."
      },
      {
        question: "¿Cuál es la diferencia entre un agente de IA y un chatbot?",
        answer: "Un chatbot es una interfaz de conversación. Un agente puede decidir pasos y ejecutar acciones con herramientas, como consultar un sistema o preparar un ticket. Un chatbot puede ser el canal de un agente, pero no todo chatbot es un agente."
      },
      {
        question: "¿En qué se diferencia un agente de IA de la RPA?",
        answer: "La RPA repite pasos programados sobre la interfaz de otro sistema y funciona bien con reglas estables. Un agente decide el camino según el objetivo y la información disponible: tolera más variación, pero necesita más evaluación y control. Ambos pueden convivir en un mismo proceso."
      },
      {
        question: "¿Cuáles son los tipos de agentes de IA?",
        answer: "La teoría de IA describe, entre otros, agentes reactivos, basados en modelos, basados en objetivos, basados en utilidad y que aprenden. En una empresa es más práctico distinguirlos por autonomía: asistentes que responden con fuentes, agentes que proponen acciones, agentes que ejecutan dentro de límites y sistemas de varios agentes."
      },
      {
        question: "¿Un agente de IA puede actuar sin supervisión?",
        answer: "Puede ejecutar lo que sus permisos le habilitan, pero no conviene que lo haga en todos los casos. Las acciones sensibles, irreversibles o con impacto financiero deberían pasar por aprobación humana, al menos hasta que la evaluación muestre resultados consistentes."
      },
      {
        question: "¿Qué se necesita para implementar un agente de IA?",
        answer: "Una tarea definida, fuentes de información vigentes, acceso a los sistemas mediante APIs u otras interfaces autorizadas, permisos por rol, casos de evaluación y un responsable del proceso. Si faltan fuentes o interfaces, conviene resolver eso antes de construir el agente."
      },
      {
        question: "¿Cómo se protegen los datos que usa un agente?",
        answer: "Con acceso según el usuario, fuentes autorizadas, registro de actividad y el mínimo de datos personales necesario. También hay que revisar dónde y en qué condiciones procesa los datos el proveedor del modelo. En Chile, revisa con tu equipo legal la Ley 19.628 y las modificaciones de la Ley 21.719."
      },
      {
        question: "¿Cómo se mide si un agente funciona?",
        answer: "Con casos de prueba preparados antes del piloto: respuestas correctas con referencia, acciones bien preparadas, derivaciones oportunas, tiempo de intervención humana y costo de consumo. La evaluación se repite cuando cambian las fuentes, el modelo o las herramientas."
      }
    ],
    conclusion: "Un agente de IA combina un modelo, instrucciones y herramientas para completar tareas con cierta autonomía. Conviene cuando la tarea tiene varios caminos o mucha información no estructurada; si los pasos se conocen de antemano, un flujo definido puede bastar. Parte con un piloto en modo propuesta, permisos mínimos y casos de evaluación, y amplía la autonomía cuando los resultados lo respalden.",
    sources: [
      {
        title: "OpenAI: A practical guide to building agents",
        url: "https://cdn.openai.com/business-guides-and-resources/a-practical-guide-to-building-agents.pdf"
      },
      {
        title: "Anthropic: Building effective agents, distinción entre workflows y agentes",
        url: "https://www.anthropic.com/research/building-effective-agents"
      },
      {
        title: "OWASP Top 10 para aplicaciones LLM 2025: agencia excesiva (LLM06)",
        url: "https://genai.owasp.org/llmrisk/llm062025-excessive-agency/"
      },
      {
        title: "NIST: AI Risk Management Framework, marco de uso voluntario",
        url: "https://www.nist.gov/itl/ai-risk-management-framework"
      },
      {
        title: "Biblioteca del Congreso Nacional: Ley 21.719 sobre protección de datos personales",
        url: "https://www.bcn.cl/leychile/navegar?idNorma=1209272"
      }
    ],
    service: {
      name: "Agentes de IA",
      href: "/servicios/agentes-ia",
      text: "YAGO implementa agentes y asistentes de IA en Chile conectados a fuentes y herramientas autorizadas, con permisos, evaluación y registro de actividad definidos."
    },
    relatedSlugs: [
      "que-es-la-automatizacion-de-procesos-con-ia",
      "integrar-ia-procesos-empresa",
      "apps-ia-desarrollo-asistido-diferencias"
    ]
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
    seoTitle: "Automatización con n8n y Make en Chile: cómo partir | YAGO",
    description:
      "Cómo automatizar con n8n o Make en Chile: alojamiento, datos, errores y qué definir antes del primer flujo. Cuándo usar cada herramienta y dónde entra la IA.",
    excerpt:
      "El stack real detrás de las automatizaciones: qué hace n8n, qué hace Make, dónde entra la IA y cómo se combinan sin fragilidad.",
    image: "/images/blog-herramientas.png",
    category: "Tecnología",
    date: "2026-05-20",
    modifiedDate: "2026-11-06",
    readingTime: "8 min",
    keywords: ["n8n", "automatización n8n Chile", "Make", "herramientas automatización", "integración de sistemas", "workflows"],
    intro:
      "Detrás de cada automatización robusta hay un stack de herramientas que orquesta datos entre sistemas. Entender qué hace cada pieza te ayuda a evaluar propuestas, evitar dependencias innecesarias y exigir soluciones mantenibles. Si estás evaluando n8n en Chile, también verás qué hace falta para partir.",
    sections: [
      {
        heading: "Orquestadores: n8n y Make",
        paragraphs: [
          "n8n y Make son plataformas de orquestación: conectan aplicaciones (correo, ERP, CRM, planillas, WhatsApp) y ejecutan flujos con lógica condicional, reintentos y manejo de errores.",
          "Make brilla en flujos simples y rápidos de montar. n8n destaca cuando necesitas control: se puede alojar en tu propia infraestructura y maneja lógica compleja. Para procesos con datos sensibles, alojarlo tú te da más control, pero exige que alguien lo mantenga.",
        ],
      },
      {
        heading: "Automatización con n8n en Chile: qué hace falta",
        paragraphs: [
          "La herramienta es la misma en cualquier país. Lo que debes decidir es dónde corre y quién la mantiene. Tienes dos caminos: n8n Cloud, administrado por n8n, o alojamiento propio, en tu infraestructura o en una nube privada. La documentación de n8n recomienda Cloud a quien no tiene conocimientos técnicos. Con alojamiento propio, la infraestructura y su mantenimiento quedan a tu cargo.",
          "Antes de construir el primer flujo, define estos puntos:",
        ],
        bullets: [
          "Un proceso acotado: qué lo inicia, qué pasos sigue y qué resultado entrega. Como ejemplo ficticio, una factura que llega por correo y debe quedar registrada en el ERP.",
          "Accesos: con qué sistemas se conecta, si tienen API y quién autoriza las credenciales. n8n recomienda usar OAuth cuando sea posible.",
          "Alojamiento: con instalación propia, tu equipo se encarga de cifrar los datos en tránsito y en reposo, y de actualizar la instancia. Con Cloud, confirma con n8n en qué región quedarán tus datos.",
          "Datos personales: si el flujo los trata y salen de Chile, revisa con tu equipo legal las reglas de transferencia internacional de la Ley 19.628, modificada por la Ley 21.719. Esos cambios entran en vigencia el 1 de diciembre de 2026.",
          "Errores: n8n permite crear un flujo de errores que avisa cuando una ejecución falla. Define quién recibe ese aviso y quién revisa las ejecuciones fallidas.",
          "Mantenimiento: quién ajusta el flujo cuando cambia un sistema, un formato o una regla.",
        ],
        links: [
          {
            label: "Automatización de procesos con YAGO: cómo se trabaja y qué incluye",
            href: "/servicios/automatizacion-procesos",
          },
          {
            label: "Cómo elegir un proveedor de automatización e IA en Chile",
            href: "/blog/elegir-proveedor-automatizacion-ia-chile",
          },
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
          "Desconfía de automatizaciones 'mágicas' sin trazabilidad. Todas fallan alguna vez, y no saber por qué sale caro.",
        ],
      },
    ],
    faq: [
      {
        question: "¿Quién implementa automatizaciones con n8n en Chile?",
        answer: "Puedes hacerlo con tu equipo, si alguien tiene el tiempo y los conocimientos para mantenerlo, o con un proveedor. YAGO diseña e implementa automatizaciones en Chile con n8n o Make, APIs e IA, y parte por revisar el proceso, tus sistemas y tus datos. Si comparas proveedores, pregunta cómo manejan los errores, quién mantiene el flujo y a nombre de quién quedan la cuenta y las credenciales.",
      },
      {
        question: "¿Conviene n8n Cloud o alojarlo en mi propia infraestructura?",
        answer: "Depende de quién lo va a mantener y de cuánto control necesitas. Según la documentación de n8n, ambas opciones sirven para producción. Cloud está administrado por n8n y no requiere instalación. El alojamiento propio da control total, pero requiere conocimientos técnicos y deja la infraestructura y el mantenimiento a tu cargo.",
      },
      {
        question: "¿Necesito n8n para automatizar un proceso?",
        answer: "No. También puedes usar Make u otra plataforma, integraciones por API o desarrollo a medida. Conviene elegir después de revisar el proceso, los sistemas que debe conectar y quién lo mantendrá. No necesitas tener definida la herramienta para empezar.",
      },
    ],
    conclusion:
      "Las herramientas importan menos que el diseño: un flujo con IA en los puntos correctos, manejo de errores explícito y documentación clara es más fácil de operar, auditar y mantener. Si vas a partir con n8n en Chile, define el proceso, los accesos, el alojamiento y quién lo mantendrá antes del primer flujo.",
    sources: [
      { title: "n8n Docs: qué es n8n", url: "https://docs.n8n.io/" },
      { title: "n8n Docs: elegir entre n8n Cloud y alojamiento propio", url: "https://docs.n8n.io/choose-n8n/" },
      { title: "n8n Docs: alojamiento propio de n8n", url: "https://docs.n8n.io/deploy/host-n8n" },
      { title: "n8n Docs: medidas de privacidad y seguridad", url: "https://docs.n8n.io/privacy-security/what-you-can-do/" },
      { title: "n8n Docs: manejo de errores", url: "https://docs.n8n.io/flow-logic/error-handling/" },
      { title: "Make Help Center", url: "https://help.make.com/" },
      { title: "Biblioteca del Congreso Nacional: Ley 21.719 sobre protección de datos personales", url: "https://www.bcn.cl/leychile/navegar?idNorma=1209272" },
    ],
    service: {
      name: "Automatización de procesos",
      href: "/servicios/automatizacion-procesos",
      text: "YAGO diseña e implementa automatizaciones en Chile sobre los sistemas que ya usa tu empresa, con n8n o Make cuando calzan con el proceso. Cuéntanos qué tarea quieres automatizar y te respondemos con el siguiente paso recomendado.",
    },
    relatedSlugs: [
      "elegir-proveedor-automatizacion-ia-chile",
      "que-es-la-automatizacion-de-procesos-con-ia",
      "integrar-ia-procesos-empresa",
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

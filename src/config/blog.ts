// src/config/blog.ts
// Artículos estáticos del blog, orientados a SEO.

export type BlogSection = {
  heading?: string;
  paragraphs: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO
  category: string;
  image: string;
  readingMinutes: number;
  keywords: string[];
  sections: BlogSection[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "que-es-automatizacion-procesos-ia",
    title: "Qué es la automatización de procesos con IA y por dónde empezar",
    description:
      "Guía práctica para entender la automatización de procesos con inteligencia artificial: qué es, qué procesos conviene automatizar primero y cómo dar el primer paso sin riesgo.",
    date: "2026-06-02",
    category: "Automatización",
    image: "/images/blog-automatizacion-ia.png",
    readingMinutes: 6,
    keywords: [
      "automatización de procesos",
      "inteligencia artificial",
      "automatización con IA",
      "transformación digital pyme",
    ],
    sections: [
      {
        paragraphs: [
          "La automatización de procesos con IA consiste en delegar tareas repetitivas y basadas en reglas a sistemas que las ejecutan de forma confiable, mientras la inteligencia artificial aporta la capacidad de entender documentos, textos y contextos que antes requerían criterio humano.",
          "A diferencia de la automatización tradicional (macros, scripts aislados), la automatización con IA puede leer una factura escaneada, clasificar un correo o resumir una solicitud, y luego disparar el flujo correcto en tus sistemas.",
        ],
      },
      {
        heading: "Señales de que tu empresa está lista",
        paragraphs: [
          "No necesitas un área de tecnología para partir. Estas señales indican que hay retorno esperando:",
        ],
        bullets: [
          "Tu equipo copia y pega datos entre planillas y sistemas todos los días.",
          "Hay procesos que dependen de que una persona 'se acuerde' de hacer algo.",
          "Los errores de digitación generan retrabajo o problemas con clientes.",
          "Las aprobaciones se pierden en cadenas de correos.",
        ],
      },
      {
        heading: "Por dónde empezar: el quick win",
        paragraphs: [
          "El error más común es intentar automatizar todo de una vez. La estrategia correcta es identificar un proceso acotado, de alto volumen y bajo riesgo — un quick win — y automatizarlo de punta a punta.",
          "Un buen quick win se implementa en 1 a 3 semanas, muestra ahorro medible en horas-hombre y genera la confianza interna para escalar al siguiente proceso.",
        ],
      },
      {
        heading: "El rol de las personas",
        paragraphs: [
          "Automatizar no significa reemplazar al equipo: significa sacarle de encima el trabajo tedioso para que se concentre en revisar, decidir y mejorar. Los mejores proyectos incluyen validación humana (human-in-the-loop) en los puntos donde el criterio importa.",
        ],
      },
    ],
  },
  {
    slug: "5-procesos-que-toda-pyme-deberia-automatizar",
    title: "5 procesos que toda pyme debería automatizar en 2026",
    description:
      "Los cinco procesos con mejor retorno para automatizar en una pyme: facturación, aprobaciones, reportes, atención de consultas internas y seguimiento de leads.",
    date: "2026-05-18",
    category: "Automatización",
    image: "/images/blog-procesos-pyme.png",
    readingMinutes: 5,
    keywords: ["automatizar pyme", "procesos para automatizar", "productividad pyme", "automatización 2026"],
    sections: [
      {
        paragraphs: [
          "No todos los procesos valen lo mismo a la hora de automatizar. Estos cinco combinan alto volumen, reglas claras y ahorro inmediato de horas-hombre, por lo que suelen ser el mejor punto de partida.",
        ],
      },
      {
        heading: "1. Ingreso y validación de facturas",
        paragraphs: [
          "Con OCR e IA, las facturas de proveedores se leen, validan contra órdenes de compra y registran en tu ERP sin digitación manual. Es típicamente el proceso con ROI más rápido.",
        ],
      },
      {
        heading: "2. Aprobaciones internas",
        paragraphs: [
          "Solicitudes de compra, vacaciones o descuentos que hoy viajan por correo pueden convertirse en flujos con responsables, plazos y trazabilidad. Nadie más pregunta '¿en qué quedó mi solicitud?'.",
        ],
      },
      {
        heading: "3. Reportes operativos",
        paragraphs: [
          "Los reportes que alguien arma cada semana copiando datos de tres fuentes distintas pueden generarse y distribuirse solos, con datos siempre actualizados.",
        ],
      },
      {
        heading: "4. Consultas internas repetitivas",
        paragraphs: [
          "Un asistente con acceso a tus documentos (políticas, procedimientos, contratos) responde las preguntas frecuentes del equipo al instante, sin interrumpir a nadie.",
        ],
      },
      {
        heading: "5. Seguimiento de leads",
        paragraphs: [
          "Registrar leads, enviar el primer contacto y agendar seguimientos son tareas perfectas para automatizar: el vendedor se concentra en conversar, no en administrar el CRM.",
        ],
      },
      {
        heading: "Cómo priorizar",
        paragraphs: [
          "Regla simple: parte por el proceso que más horas consume al mes y que menos criterio requiere. Ese balance define el retorno.",
        ],
      },
    ],
  },
  {
    slug: "ocr-ia-eliminar-digitacion-manual",
    title: "OCR e IA: cómo eliminar la digitación manual de documentos",
    description:
      "Cómo funciona el OCR con inteligencia artificial para leer facturas, contratos y formularios, y qué necesitas para eliminar la digitación manual en tu empresa.",
    date: "2026-04-27",
    category: "OCR & Documentos",
    image: "/images/blog-ocr-ia.png",
    readingMinutes: 6,
    keywords: ["OCR con IA", "digitación manual", "procesamiento de documentos", "extracción de datos facturas"],
    sections: [
      {
        paragraphs: [
          "Cada documento que una persona transcribe a mano a un sistema es tiempo perdido y una oportunidad de error. El OCR moderno, potenciado con IA, lee documentos como lo haría una persona: entiende el contexto, no solo los caracteres.",
        ],
      },
      {
        heading: "OCR tradicional vs. OCR con IA",
        paragraphs: [
          "El OCR clásico convierte imagen en texto, pero se quiebra con formatos distintos: cada proveedor tiene su plantilla de factura. El OCR con IA entiende qué es un RUT, un monto total o una fecha de vencimiento, sin importar dónde estén en el documento.",
        ],
        bullets: [
          "Lee facturas, boletas, contratos, guías de despacho y formularios.",
          "Extrae campos estructurados listos para tu ERP o planilla.",
          "Valida los datos contra reglas de negocio antes de registrarlos.",
          "Deriva a revisión humana solo los casos dudosos.",
        ],
      },
      {
        heading: "Qué necesitas para implementarlo",
        paragraphs: [
          "Un proyecto de OCR con IA típico requiere tres cosas: ejemplos reales de tus documentos, claridad sobre a qué sistema van los datos, y definir qué pasa con los casos que la IA no puede resolver con certeza.",
          "Con eso, un piloto funcional se levanta en pocas semanas y el ahorro se mide desde el primer mes en horas de digitación eliminadas.",
        ],
      },
      {
        heading: "El detalle que hace la diferencia: validación",
        paragraphs: [
          "El valor no está solo en leer el documento, sino en validar: ¿el monto coincide con la orden de compra? ¿el proveedor existe? Automatizar la validación es lo que convierte el OCR en un proceso confiable de punta a punta.",
        ],
      },
    ],
  },
  {
    slug: "agentes-ia-operaciones-casos-uso",
    title: "Agentes de IA para operaciones: casos de uso reales",
    description:
      "Qué es un agente de IA y cómo se usa en operaciones: soporte interno, gestión documental, seguimiento de procesos y análisis de datos. Casos concretos y aprendizajes.",
    date: "2026-03-30",
    category: "Agentes IA",
    image: "/images/blog-agentes-ia.png",
    readingMinutes: 7,
    keywords: ["agentes de IA", "IA en operaciones", "asistentes IA empresa", "copiloto empresarial"],
    sections: [
      {
        paragraphs: [
          "Un agente de IA no es solo un chatbot: es un sistema que entiende una solicitud, consulta tus datos y sistemas, y ejecuta o propone acciones. La diferencia con un bot de respuestas es que el agente hace cosas, no solo conversa.",
        ],
      },
      {
        heading: "Caso 1: soporte interno con contexto",
        paragraphs: [
          "Un agente conectado a las políticas, procedimientos y sistemas de la empresa responde preguntas del equipo ('¿cuál es el tope de viáticos?', '¿en qué estado va la orden 4512?') con datos reales y al instante. El equipo de operaciones deja de ser el cuello de botella de las consultas.",
        ],
      },
      {
        heading: "Caso 2: gestión documental inteligente",
        paragraphs: [
          "Contratos, facturas y respaldos llegan por correo en cualquier formato. Un agente los clasifica, extrae los datos clave, los archiva donde corresponde y alerta si falta algo. Lo que antes era una bandeja de entrada caótica se vuelve un flujo ordenado.",
        ],
      },
      {
        heading: "Caso 3: seguimiento proactivo de procesos",
        paragraphs: [
          "En vez de que alguien revise planillas para detectar atrasos, el agente monitorea los flujos y avisa: 'esta aprobación lleva 3 días detenida', 'este cliente no ha recibido respuesta'. El equipo actúa sobre excepciones, no sobre rutina.",
        ],
      },
      {
        heading: "Qué aprendimos implementándolos",
        paragraphs: ["Tres aprendizajes se repiten en todos los proyectos:"],
        bullets: [
          "El agente vale lo que valen sus fuentes: datos ordenados primero, agente después.",
          "Empezar con un alcance acotado (un área, un tipo de consulta) acelera la adopción.",
          "La validación humana en acciones críticas genera confianza y evita errores costosos.",
        ],
      },
    ],
  },
  {
    slug: "cuanto-cuesta-automatizar-roi",
    title: "Cuánto cuesta automatizar un proceso (y cómo calcular el ROI)",
    description:
      "Rangos de inversión reales para automatizar procesos con IA, los factores que definen el costo y una fórmula simple para calcular el retorno antes de partir.",
    date: "2026-03-09",
    category: "ROI & Negocio",
    image: "/images/blog-roi-automatizacion.png",
    readingMinutes: 6,
    keywords: ["costo automatización", "ROI automatización", "cuánto cuesta automatizar", "retorno inversión IA"],
    sections: [
      {
        paragraphs: [
          "La pregunta correcta no es '¿cuánto cuesta automatizar?' sino '¿cuánto me cuesta NO automatizar?'. Aun así, aquí van rangos y criterios concretos para que puedas evaluar con números.",
        ],
      },
      {
        heading: "Qué define el costo",
        paragraphs: ["Cuatro factores explican la mayor parte de la variación de precio:"],
        bullets: [
          "Cantidad de sistemas a integrar (y si tienen API o no).",
          "Complejidad de las reglas de negocio y excepciones.",
          "Volumen y variabilidad de los documentos o datos.",
          "Necesidad de interfaces propias (paneles, formularios) versus usar las herramientas existentes.",
        ],
      },
      {
        heading: "Rangos de referencia",
        paragraphs: [
          "Un quick win acotado (un flujo, pocas integraciones) suele partir en el rango de un proyecto de semanas, no meses. Automatizaciones con OCR, validaciones y panel de control se mueven en rangos medios. Plataformas completas de operación son proyectos por etapas.",
          "Lo importante: cada etapa debe pagarse con el ahorro que genera la anterior. Si un proyecto no puede mostrar retorno por etapas, es una señal de alerta.",
        ],
      },
      {
        heading: "La fórmula simple del ROI",
        paragraphs: [
          "Calcula: (horas mensuales que consume el proceso) × (costo por hora de quien lo hace) × 12. Ese es tu costo anual de no automatizar. Compáralo con la inversión del proyecto más su operación anual.",
          "A eso súmale lo difícil de medir pero real: menos errores, respuestas más rápidas y un equipo enfocado en trabajo de valor.",
        ],
      },
    ],
  },
  {
    slug: "n8n-vs-make-vs-desarrollo-a-medida",
    title: "n8n vs Make vs desarrollo a medida: qué conviene para tu empresa",
    description:
      "Comparación práctica entre n8n, Make y el desarrollo a medida para automatizar procesos: fortalezas, límites y cómo elegir según tu caso.",
    date: "2026-02-16",
    category: "Herramientas",
    image: "/images/blog-herramientas.png",
    readingMinutes: 7,
    keywords: ["n8n vs make", "herramientas automatización", "desarrollo a medida", "no-code automatización"],
    sections: [
      {
        paragraphs: [
          "Elegir la herramienta antes de entender el problema es la receta clásica para un proyecto fallido. Dicho eso, conocer las opciones ayuda a conversar mejor. Estas son las tres rutas principales y cuándo conviene cada una.",
        ],
      },
      {
        heading: "Make: velocidad para empezar",
        paragraphs: [
          "Make destaca por su catálogo enorme de conectores y su interfaz visual. Es ideal para flujos simples entre herramientas SaaS conocidas (formularios, CRM, correo, planillas) y para validar ideas rápido.",
          "Su límite: flujos complejos se vuelven difíciles de mantener y el costo escala con el volumen de operaciones.",
        ],
      },
      {
        heading: "n8n: control y flexibilidad",
        paragraphs: [
          "n8n ofrece lo mejor de dos mundos: interfaz visual más la posibilidad de agregar código donde se necesita. Al poder alojarse en tu propia infraestructura, da control sobre datos y costos, clave cuando el volumen crece o hay datos sensibles.",
          "Es nuestra opción más frecuente para automatizaciones de operación con lógica de negocio real.",
        ],
      },
      {
        heading: "Desarrollo a medida: cuando el proceso ES el negocio",
        paragraphs: [
          "Si el flujo requiere interfaces propias, permisos finos, auditoría o es parte central de tu operación, una aplicación a medida (típicamente sobre Next.js y una base de datos) da la robustez que las herramientas visuales no alcanzan.",
        ],
      },
      {
        heading: "Cómo decidir",
        paragraphs: ["Una regla práctica en tres preguntas:"],
        bullets: [
          "¿Flujo simple entre SaaS conocidos y bajo volumen? → Make.",
          "¿Lógica de negocio real, datos sensibles o volumen creciente? → n8n.",
          "¿Interfaz propia, roles y auditoría, proceso core? → desarrollo a medida.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, count = 3): BlogPost[] {
  return BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, count);
}

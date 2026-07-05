export type AutomationPage = {
  slug: "sadt" | "axis";
  seoTitle: string;
  seoDescription: string;
  keywords: string[];
  nav: { name: string; href: string; eyebrow?: string; description?: string; detail?: string; children?: { name: string; href: string; eyebrow?: string; description?: string; detail?: string }[] }[];
  hero: {
    badge: string;
    title: string;
    description: string;
    proofSignals: string[];
    trustSignals: string[];
    primaryCta: string;
    secondaryCta: string;
    tertiaryCta: string;
    previewTitle: string;
    previewDescription: string;
    previewMetrics: { label: string; value: string }[];
    previewFlow: string[];
  };
  problem: {
    title: string;
    description: string;
  };
  pains: { eyebrow: string; title: string; description: string }[];
  solution: {
    title: string;
    description: string;
    inputLabel: string;
    inputItems: string[];
    outputLabel: string;
    outputItems: string[];
    support: string[];
  };
  modules: { title: string; description: string }[];
  steps: { name: string; description: string; outputs: string[] }[];
  useCases: { title: string; description: string }[];
  benefits: { title: string; description: string }[];
  pricing: {
    title: string;
    description: string;
    note: string;
    plans: {
      name: string;
      volume: string;
      priceUf: number;
      period: string;
      unitUf?: number;
      unitLabel: string;
      unitDetail?: string;
      features: string[];
      extraUf?: number;
      extraLabel?: string;
      featured?: boolean;
    }[];
  };
  riskTitle: string;
  risks: { title: string; description: string }[];
  differentiators: { title: string; description: string }[];
  demo: {
    title: string;
    description: string;
    bullets: string[];
    primaryCta: string;
    secondaryCta: string;
  };
  form: {
    topic: string;
    title: string;
    description: string;
    submitLabel: string;
    processLabel: string;
    processOptions: string[];
    volumeLabel: string;
    volumeOptions: string[];
  };
  faqs: { question: string; answer: string }[];
  finalCta: {
    title: string;
    text: string;
    primary: string;
    secondary: string;
  };
};

export const AUTOMATION_PAGES: AutomationPage[] = [
  {
    slug: "sadt",
    seoTitle: "SADT | Automatizacion del Portal Direccion del Trabajo | YAGO",
    seoDescription:
      "SADT automatiza el Portal Direccion del Trabajo para contratos, desvinculaciones y certificados F30/F30-1, con dashboard operativo, evidencia y reportería.",
    keywords: [
      "SADT",
      "automatizacion direccion del trabajo",
      "automatizacion portal DT",
      "automatizacion contratos desvinculaciones",
      "certificados F30 F30-1 automatizados",
    ],
    nav: [
      { name: "Resumen", href: "#resumen" },
      { name: "Como funciona", href: "#como-funciona" },
      { name: "Planes", href: "#planes" },
      { name: "FAQ", href: "#faq" },
      {
        name: "Apps",
        href: "/#elige-ruta",
        eyebrow: "Apps listas",
        description: "OCR, SADT y AXIS para llegar rápido al servicio correcto.",
        children: [
          { name: "OCR", href: "/ocr", description: "Documentos y PDFs a datos útiles." },
          { name: "SADT", href: "/sadt", description: "Portal DT con evidencia y reproceso." },
          { name: "AXIS", href: "/axis", description: "Consulta PJUD a volumen con monitoreo." },
        ],
      },
    ],
    hero: {
      badge: "SADT",
      title: "Portal DT, automatizado",
      description:
        "SADT opera contratos, desvinculaciones y F30/F30-1 con dashboard, evidencia y reproceso.",
      proofSignals: ["App operativa activa", "Contratos, desvinculaciones y F30/F30-1", "Evidencia y reproceso"],
      trustSignals: ["Diseñado para RRHH y operaciones de alto volumen", "Dashboard operativo, no solo un bot", "Evidencia y reportería desde el primer flujo"],
      primaryCta: "Agendar demo",
      secondaryCta: "Hablar por WhatsApp",
      tertiaryCta: "Ver planes",
      previewTitle: "Una cola DT con control",
      previewDescription:
        "Estados, errores y comprobantes visibles para operar sin perder trazabilidad.",
      previewMetrics: [
        { label: "Servicio", value: "Activo" },
        { label: "Procesos", value: "A1 + A2" },
        { label: "Evidencia", value: "PDFs" },
        { label: "Modelo", value: "Creditos" },
      ],
      previewFlow: ["Carga Workges o archivo", "Validacion y transformacion", "Ejecucion en Portal DT", "Evidencia y reportería"],
    },
    problem: {
      title: "RRHH pierde demasiadas horas en tareas críticas pero repetitivas del Portal DT",
      description:
        "Registrar contratos, desvinculaciones y certificados manualmente no solo consume tiempo. También genera errores, retrabajo, falta de visibilidad y dependencia de personas clave para sostener la operación.",
    },
    pains: [
      {
        eyebrow: "01",
        title: "Carga manual de alto volumen",
        description: "Registros repetitivos que deben ingresarse uno a uno en el portal, especialmente en períodos de alta demanda.",
      },
      {
        eyebrow: "02",
        title: "Errores y reprocesos",
        description: "Diferencias de formato, datos incompletos o reglas del portal obligan a corregir y volver a ejecutar.",
      },
      {
        eyebrow: "03",
        title: "Poca trazabilidad",
        description: "No siempre queda claro qué se ejecutó, qué falló, qué comprobante se generó o quién debe intervenir.",
      },
      {
        eyebrow: "04",
        title: "Portal externo frágil",
        description: "La operación depende de sesiones, credenciales, disponibilidad y cambios de comportamiento del Portal DT.",
      },
    ],
    solution: {
      title: "SADT convierte el Portal DT en una operación orquestada, visible y reprocesable",
      description:
        "SADT agrega una capa operativa sobre el portal: ingreso de datos, validación, ejecución, manejo de errores, evidencia y reportería. El equipo deja de operar a ciegas y gana control sobre cada registro.",
      inputLabel: "Lo que entra",
      inputItems: [
        "Registros desde archivo o Workges",
        "Contratos y desvinculaciones",
        "Solicitudes de certificados F30/F30-1",
        "Reglas, catálogos y datos de operación",
      ],
      outputLabel: "Lo que sale",
      outputItems: [
        "Comprobantes, folios y PDFs almacenados",
        "Estados por registro y cola de errores",
        "Reportería operativa automatizada",
        "Trazabilidad completa para revisión y control",
      ],
      support: [
        "Automatización web + backend de orquestación",
        "Reproceso individual o por lote controlado",
        "Diseñado para operar con datos reales y excepciones reales",
      ],
    },
    modules: [
      { title: "Dashboard web", description: "Monitoreo de ejecuciones, estados por registro, errores, reprocesos y acceso a evidencia." },
      { title: "Backend de orquestación", description: "Coordinación de colas, reintentos, reglas de ejecución y gestión de sesión DT." },
      { title: "Motor A1", description: "Registro automatizado de contratos y desvinculaciones con validaciones previas y post-ingreso." },
      { title: "Motor A2", description: "Obtención, validación, descarga y almacenamiento de certificados F30/F30-1." },
      { title: "Integración Workges", description: "Carga manual o integración con fuente definida, incluyendo transformación de datos al formato requerido." },
      { title: "Evidencias y reportes", description: "Persistencia de comprobantes, folios, PDFs, metadata y reportes operativos automáticos." },
    ],
    steps: [
      {
        name: "Carga y validación",
        description:
          "El equipo carga registros desde archivo, fuente definida o Workges, y SADT valida estructura, catálogos y campos necesarios antes de ejecutar.",
        outputs: ["Archivo", "Workges", "Validaciones"],
      },
      {
        name: "Ejecución controlada",
        description:
          "SADT opera los procesos definidos en el Portal DT, mantiene estados por registro y clasifica errores para revisión del equipo.",
        outputs: ["A1", "A2", "Estados"],
      },
      {
        name: "Evidencia y reportería",
        description:
          "Comprobantes, folios, PDFs y resultados quedan disponibles para seguimiento, control interno y reportería operativa.",
        outputs: ["Folios", "PDFs", "Reportes"],
      },
      {
        name: "Revisión y reproceso",
        description:
          "Los errores de negocio se corrigen desde la operación y pueden reprocesarse de forma individual o por lote sin perder trazabilidad.",
        outputs: ["Errores", "Reproceso", "Bitácora"],
      },
    ],
    useCases: [
      { title: "Contratos", description: "Registro automatizado con validaciones y almacenamiento de comprobantes o folios." },
      { title: "Desvinculaciones", description: "Ingreso controlado, verificación posterior y trazabilidad por registro." },
      { title: "Certificados F30/F30-1", description: "Obtención automática, descarga de PDF, metadata y registro de errores." },
      { title: "Reproceso operativo", description: "Corrección de errores de negocio y reproceso individual o por lote." },
    ],
    benefits: [
      { title: "Menos carga manual", description: "Reduce horas repetitivas en registros, certificados y seguimiento operativo." },
      { title: "Más trazabilidad", description: "Cada ejecución queda con estado, evidencia y resultado consultable." },
      { title: "Mejor control de errores", description: "Errores BE y SE quedan visibles, clasificados y reprocesables." },
      { title: "Operación escalable", description: "El modelo por créditos crece según volumen sin rediseñar la solución cada mes." },
    ],
    pricing: {
      title: "Planes mensuales por créditos",
      description:
        "Cada interacción automatizada con el Portal DT consume 1 crédito: contrato, desvinculación, certificado u otra ejecución definida.",
      note: "Valores mensuales en UF. Crédito adicional también valorizado en UF por interacción.",
      plans: [
        {
          name: "Plan Estándar",
          volume: "8.000 créditos",
          priceUf: 31.79913766,
          period: "/ mes",
          unitUf: 0.00397489,
          unitLabel: "por interacción",
          features: ["Dashboard operativo completo", "Módulos A1 y A2 incluidos", "Gestión de errores y reproceso", "Reportería automatizada", "Soporte 24/7 incluido"],
          extraUf: 0.00405789,
          extraLabel: "por interacción",
        },
        {
          name: "Plan Alto Volumen",
          volume: "11.000 créditos",
          priceUf: 36.88995088,
          period: "/ mes",
          unitUf: 0.00335363,
          unitLabel: "por interacción",
          unitDetail: "16% más económico",
          features: ["Todo lo del Plan Estándar", "Mayor capacidad operativa", "Ideal para peaks de inicio de mes", "Mejor costo por interacción", "Soporte 24/7 incluido"],
          extraUf: 0.00405789,
          extraLabel: "por interacción",
          featured: true,
        },
      ],
    },
    riskTitle: "Riesgos y dependencias gestionadas desde el diseño",
    risks: [
      { title: "Portal DT inestable", description: "Mitigamos fragilidad con reintentos, monitoreo y manejo explícito de fallas." },
      { title: "Credencial única", description: "El flujo contempla procesamiento controlado y gestión de sesión para evitar interrupciones innecesarias." },
      { title: "Diferencias Workges-DT", description: "Validación y transformación previa reducen discrepancias antes del ingreso." },
      { title: "Reglas funcionales pendientes", description: "Cerramos reglas críticas en discovery para mantener alcance controlado." },
    ],
    differentiators: [
      { title: "Aplicación operativa", description: "No es solo un bot. Incluye dashboard, backend, motores, evidencia y reportería." },
      { title: "Visibilidad completa", description: "Estados, errores, comprobantes y PDFs quedan disponibles desde una interfaz central." },
      { title: "Servicio disponible", description: "SADT funciona como app operativa para equipos que necesitan automatizar procesos recurrentes del Portal DT." },
      { title: "Modelo proporcional", description: "La suscripción por créditos se adapta al volumen real de operación." },
    ],
    demo: {
      title: "Revisemos si tu flujo calza con SADT",
      description:
        "Podemos revisar tus registros, volumen, fuente de datos y reglas operativas para definir cómo usar SADT en contratos, desvinculaciones, F30/F30-1 o el flujo completo.",
      bullets: ["Revisión del flujo actual", "Validación de volumen y fuentes", "Uso recomendado del servicio"],
      primaryCta: "Solicitar demo",
      secondaryCta: "Hablar por WhatsApp",
    },
    form: {
      topic: "SADT",
      title: "Solicita una demo de SADT",
      description:
        "Cuéntanos tu volumen mensual, fuente de datos y procesos del Portal DT que quieres automatizar. Te responderemos con el siguiente paso recomendado.",
      submitLabel: "Solicitar demo SADT",
      processLabel: "Proceso principal",
      processOptions: ["Contratos", "Desvinculaciones", "Certificados F30/F30-1", "A1 + A2 completo", "Aun no lo se"],
      volumeLabel: "Volumen mensual aproximado",
      volumeOptions: ["Menos de 2.000 interacciones", "2.000 a 8.000 interacciones", "8.000 a 11.000 interacciones", "Mas de 11.000 interacciones", "Aun no lo se"],
    },
    faqs: [
      { question: "¿Esto reemplaza al equipo de RRHH?", answer: "No. Automatiza tareas repetitivas y deja al equipo con más visibilidad, control y capacidad para gestionar excepciones." },
      { question: "¿Se puede integrar con Workges?", answer: "Sí. El flujo considera carga manual o integración con API/fuente definida por Workges, según disponibilidad y alcance." },
      { question: "¿Qué pasa si falla el Portal DT?", answer: "La solución contempla manejo de errores, reintentos, alertas y reproceso controlado para mitigar fallas transitorias." },
      { question: "¿SADT ya está disponible?", answer: "Sí. SADT se presenta como una app operativa disponible para automatizar procesos recurrentes del Portal DT con dashboard, evidencia y reproceso." },
    ],
    finalCta: {
      title: "Convierte el Portal DT en una operación más visible con SADT",
      text: "Agenda una demo y revisemos cómo automatizar contratos, desvinculaciones y certificados F30/F30-1 con control operativo real.",
      primary: "Solicitar demo",
      secondary: "Hablar por WhatsApp",
    },
  },
  {
    slug: "axis",
    seoTitle: "AXIS | Consulta de causas penales publicas | YAGO",
    seoDescription:
      "AXIS consulta causas penales publicas en PJUD, con base histórica, búsqueda semántica, evidencia auditable, monitoreo diario y resultados en aproximadamente 1 minuto.",
    keywords: [
      "AXIS",
      "consulta PJUD empresas",
      "consulta causas penales publicas",
      "screening penal Chile",
      "automatizacion consulta poder judicial",
    ],
    nav: [
      { name: "Resumen", href: "#resumen" },
      { name: "Como funciona", href: "#como-funciona" },
      { name: "Planes", href: "#planes" },
      { name: "FAQ", href: "#faq" },
      {
        name: "Apps",
        href: "/#elige-ruta",
        eyebrow: "Apps listas",
        description: "OCR, SADT y AXIS para llegar rápido al servicio correcto.",
        children: [
          { name: "OCR", href: "/ocr", description: "Documentos y PDFs a datos útiles." },
          { name: "SADT", href: "/sadt", description: "Portal DT con evidencia y reproceso." },
          { name: "AXIS", href: "/axis", description: "Consulta PJUD a volumen con monitoreo." },
        ],
      },
    ],
    hero: {
      badge: "AXIS",
      title: "AXIS consulta PJUD a volumen",
      description:
        "Revisa personas con búsqueda semántica, evidencia auditable y monitoreo diario sobre causas penales públicas.",
      proofSignals: ["Servicio activo", "Resultados en ~1 minuto", "Monitoreo diario incluido"],
      trustSignals: ["Base histórica propia", "Búsqueda semántica y verificación PJUD", "Diseñado para RRHH, control interno y cumplimiento"],
      primaryCta: "Agendar demo",
      secondaryCta: "Hablar por WhatsApp",
      tertiaryCta: "Ver planes",
      previewTitle: "Resultado auditable por persona",
      previewDescription:
        "Carga, verificación PJUD, evidencia y monitoreo en un flujo trazable.",
      previewMetrics: [
        { label: "Resultado", value: "~1 min" },
        { label: "Servicio", value: "Activo" },
        { label: "Unidad", value: "Persona" },
        { label: "Monitoreo", value: "Diario" },
      ],
      previewFlow: ["Carga unitaria o masiva", "Búsqueda histórica", "Verificación PJUD", "Resultado y monitoreo"],
    },
    problem: {
      title: "La consulta manual de causas penales no escala bien en operaciones de alto volumen",
      description:
        "Cuando el volumen sube, revisar persona por persona consume horas, deja poca evidencia, expone a errores operativos y hace difícil demostrar qué se consultó, cuándo y con qué resultado.",
    },
    pains: [
      { eyebrow: "01", title: "Alto consumo de tiempo", description: "Las consultas manuales repetitivas consumen horas que podrían dedicarse a tareas de mayor valor." },
      { eyebrow: "02", title: "Búsquedas poco auditables", description: "El proceso manual no siempre deja evidencia clara de criterios, fecha, resultado y alcance de la consulta." },
      { eyebrow: "03", title: "Fragilidad operativa", description: "Consultas parciales, interrupciones del portal o cambios de formato pueden degradar la calidad del proceso." },
      { eyebrow: "04", title: "Riesgo de omisiones", description: "Sin una capa semántica y trazable, es más difícil reducir omisiones o consultas incompletas." },
    ],
    solution: {
      title: "AXIS entrega una capa operativa especializada sobre PJUD penal público",
      description:
        "AXIS permite carga unitaria o masiva, búsqueda semántica en base histórica propia, verificación contra datos oficiales y resultados estructurados con evidencia para auditoría interna.",
      inputLabel: "Lo que entra",
      inputItems: ["Persona individual", "Archivo por lote", "Personas en seguimiento", "Criterios de operación interna"],
      outputLabel: "Lo que sale",
      outputItems: ["Resultado por persona", "Estados con o sin hallazgo", "Bitácora auditable", "Alertas y monitoreo diario"],
      support: ["Base histórica propia sincronizada diariamente", "Búsqueda semántica sobre causas y participantes", "Validación rigurosa contra fuentes públicas PJUD"],
    },
    modules: [
      { title: "Portal multiusuario", description: "Carga de personas, ejecución por lote e historial básico de consultas." },
      { title: "Base histórica propia", description: "Repositorio consolidado y sincronizado diariamente para acelerar búsquedas." },
      { title: "Búsqueda semántica", description: "Revisión exhaustiva de causas y participantes, no solo coincidencias superficiales." },
      { title: "Verificación PJUD", description: "Descarga y validación de datos oficiales para reducir falsos positivos." },
      { title: "Monitoreo diario", description: "Seguimiento de personas a elección y alerta cuando una causa reservada pasa a pública." },
      { title: "Evidencia auditable", description: "Bitácora, artefactos y reportes estructurados por consulta." },
    ],
    steps: [
      { name: "Carga", description: "El cliente carga una persona o archivo por lote en la plataforma.", outputs: ["Persona", "Lote", "Archivo"] },
      { name: "Normalización", description: "El sistema normaliza datos y prepara la ejecución de consultas.", outputs: ["Datos limpios", "Criterios", "Cola"] },
      { name: "Búsqueda semántica", description: "Búsqueda exhaustiva en repositorio histórico de causas, evaluando participación y cruces semánticos.", outputs: ["Base histórica", "Participantes", "Cruces"] },
      { name: "Verificación PJUD", description: "Validación descargando datos oficiales del consultor para confirmar hallazgos.", outputs: ["Validación", "Evidencia", "Estado"] },
      { name: "Resultado y monitoreo", description: "Entrega de resultado estructurado y seguimiento diario para personas seleccionadas.", outputs: ["~1 min", "Reporte", "Alerta"] },
    ],
    useCases: [
      { title: "Revisión de postulantes", description: "Consulta de personas en procesos de selección, dotación o control previo." },
      { title: "Control interno", description: "Evidencia auditable para procesos internos de revisión y cumplimiento." },
      { title: "Monitoreo continuo", description: "Seguimiento diario de personas críticas para detectar cambios públicos relevantes." },
      { title: "Procesamiento masivo", description: "Revisión por lote para operaciones con miles de personas al mes." },
    ],
    benefits: [
      { title: "Elimina consulta manual repetitiva", description: "Reduce horas dedicadas a revisar persona por persona en PJUD." },
      { title: "Estandariza el proceso", description: "La revisión opera igual incluso cuando el volumen aumenta." },
      { title: "Deja evidencia auditable", description: "Cada consulta queda con estado, trazabilidad y artefactos para revisión interna." },
      { title: "Escala sin fricción", description: "Permite crecer en volumen sin ampliar linealmente el equipo operativo." },
    ],
    pricing: {
      title: "Planes mensuales por créditos",
      description:
        "Cada crédito equivale a una persona revisada. La bolsa mensual permite operar a volumen con valores claros y sin cobro inicial.",
      note: "Valores en UF + IVA. Cada crédito incluye búsqueda semántica, consulta/verificación y monitoreo diario de personas a elección.",
      plans: [
        {
          name: "Mensual Inicial",
          volume: "2.000 créditos / mes",
          priceUf: 22.13397053,
          period: "+ IVA / mes",
          unitUf: 0.01106699,
          unitLabel: "+ IVA por crédito",
          features: ["Búsqueda semántica en base histórica", "Seguimiento diario incluido", "Evidencia estructurada por consulta", "Ideal para validar volumen inicial"],
        },
        {
          name: "Mensual Operativo",
          volume: "4.000 créditos / mes",
          priceUf: 39.25090774,
          period: "+ IVA / mes",
          unitUf: 0.00981273,
          unitLabel: "+ IVA por crédito",
          features: ["Búsqueda semántica en base histórica", "Seguimiento diario incluido", "Alertas inmediatas", "Evidencia estructurada por consulta"],
        },
        {
          name: "Mensual Volumen",
          volume: "6.000 créditos / mes",
          priceUf: 53.12152927,
          period: "+ IVA / mes",
          unitUf: 0.00885359,
          unitLabel: "+ IVA por crédito",
          features: ["Mayor volumen mensual", "Mejor valor por crédito", "Monitoreo diario incluido", "Reportes por persona y lote"],
          featured: true,
        },
      ],
    },
    riskTitle: "Confiabilidad y continuidad operativa",
    risks: [
      { title: "Reintentos automáticos", description: "Ante fallas transitorias del portal, el sistema reintenta de forma controlada." },
      { title: "Persistencia de artefactos", description: "Se guardan artefactos de consulta para reprocesar sin perder contexto operativo." },
      { title: "Monitoreo proactivo", description: "Anomalías, caídas o degradación se detectan antes de afectar resultados finales." },
      { title: "Estados claros", description: "Resultados se clasifican como con hallazgos, sin hallazgos o pendiente." },
    ],
    differentiators: [
      { title: "Especialización PJUD penal", description: "No es una suite genérica: es una capa operativa enfocada en causas penales públicas en Chile." },
      { title: "Base histórica propia", description: "Permite acelerar búsquedas y consolidar información relevante a volumen." },
      { title: "Contratos especiales", description: "Puedes cotizar bolsas personalizadas por 6 meses o 1 año con precios especiales según volumen." },
      { title: "Monitoreo incluido", description: "El seguimiento diario de personas a elección viene incluido en el crédito." },
    ],
    demo: {
      title: "Revisemos si tu operación necesita AXIS",
      description:
        "Podemos estimar volumen, casos de uso, criterios de revisión y forma de operar la evidencia para confirmar si AXIS calza con tu proceso de RRHH, dotación o control interno.",
      bullets: ["Revisión de volumen mensual", "Definición de criterios operativos", "Uso recomendado del servicio"],
      primaryCta: "Solicitar demo",
      secondaryCta: "Hablar por WhatsApp",
    },
    form: {
      topic: "AXIS",
      title: "Solicita una demo de AXIS",
      description:
        "Cuéntanos cuántas personas revisan al mes, quién usa el resultado y si necesitas monitoreo diario o solo consultas por lote.",
      submitLabel: "Solicitar demo AXIS",
      processLabel: "Caso de uso principal",
      processOptions: ["Revisión de postulantes", "Control interno", "Dotación masiva", "Monitoreo diario", "Aun no lo se"],
      volumeLabel: "Créditos estimados al mes",
      volumeOptions: ["Menos de 2.000 créditos", "2.000 créditos", "4.000 créditos", "6.000 créditos", "Mas de 6.000 créditos", "Cotizacion 6 o 12 meses", "Aun no lo se"],
    },
    faqs: [
      { question: "¿Qué fuentes cubre?", answer: "La salida inicial se enfoca en causas penales públicas disponibles en PJUD." },
      { question: "¿Cuánto demora una consulta?", answer: "El objetivo operativo es entregar resultados en aproximadamente 1 minuto por persona consultada." },
      { question: "¿Incluye monitoreo diario?", answer: "Sí. El crédito contempla seguimiento diario de personas a elección y alertas cuando aplique." },
      { question: "¿Hay cobro inicial?", answer: "No. AXIS opera con suscripción mensual por créditos, sin cobro adicional para comenzar a usar el servicio." },
    ],
    finalCta: {
      title: "Haz que AXIS vuelva la consulta más rápida, trazable y auditable",
      text: "Agenda una demo y revisemos cómo operar consultas penales públicas a volumen con evidencia clara y monitoreo diario.",
      primary: "Solicitar demo",
      secondary: "Hablar por WhatsApp",
    },
  },
];

export function getAutomationPage(slug: AutomationPage["slug"]) {
  return AUTOMATION_PAGES.find((page) => page.slug === slug);
}

// src/config/faq.ts
// Fuente única de las preguntas frecuentes del sitio.

export type FAQItem = {
  q: string;
  a: string;
};

export const FAQ_ITEMS: FAQItem[] = [
  {
    q: "¿Cómo sé qué procesos conviene automatizar primero?",
    a: "Priorizamos tareas repetitivas, de alto volumen y con reglas claras (por ejemplo: extracción/carga de datos, conciliaciones, generación de reportes, orquestación entre sistemas). Evaluamos impacto (HH ahorradas, errores evitados) vs. complejidad técnica y proponemos un roadmap por ‘quick wins’ y valor acumulado."
  },
  {
    q: "¿Se puede automatizar todo?",
    a: "No todo. Procesos con alta ambigüedad, falta de datos o dependencia fuerte del juicio humano deben rediseñarse antes. Mezclamos IA + validación humana (Human-in-the-Loop) cuando hace falta para mantener calidad y control."
  },
  {
    q: "¿Cómo es el proceso de creación de una automatización?",
    a: "Discovery (as-is/to-be y ROI) → Diseño (arquitectura y responsabilidades) → MVP (prueba controlada) → UAT (pruebas con usuarios) → Despliegue y documentación → Monitoreo y soporte. Iteramos en ciclos quincenales para entregar valor temprano."
  },
  {
    q: "¿Cuánto demora en promedio?",
    a: "Un MVP simple: 1–2 semanas. Integraciones múltiples o flujos con IA generativa: 3–6 semanas. Depende de accesos, calidad de datos y validaciones requeridas."
  },
  {
    q: "¿Cómo se calculan costos y ROI?",
    a: "Estimamos HH ahorradas/mes, reducción de errores, tiempos de ciclo y KPIs operativos. Costos incluyen implementación + soporte y, si aplica, consumo de APIs/LLMs. Proyectamos payback con escenarios conservador/esperado/agresivo."
  },
  {
    q: "¿Qué nivel de seguridad y cumplimiento aplican?",
    a: "Aislamos secretos en variables de entorno, ciframos datos en tránsito/descanso y seguimos principio de menor privilegio. Respetamos políticas del cliente (M365/Google, DLP, auditoría). Para IA, activamos registros, anonimización y control de retención."
  },
  {
    q: "¿Con qué herramientas e integraciones trabajan?",
    a: "Microsoft 365/Teams/Outlook, Google Workspace, CRM/ERP, WhatsApp/Telegram, n8n/Make, bases de datos SQL/NoSQL, APIs REST/Graph, y agentes de IA (Genkit/Vertex, OpenAI, etc.). Diseñamos conectores a medida cuando es necesario."
  },
  {
    q: "¿Qué datos necesita la IA y cómo se preparan?",
    a: "Definimos fuentes de verdad (BD, Drive, SharePoint), limpiamos/normalizamos, y versionamos prompts y plantillas. Para RAG, indexamos documentos con metadatos y control de acceso. Evitamos exponer datos sensibles sin mascarar o permisos."
  },
  {
    q: "¿Qué pasa si cambia el proceso o la herramienta del cliente?",
    a: "Diseñamos por contratos claros entre módulos (adaptadores). Si cambia un sistema, actualizamos solo el conector. Mantenemos tests y observabilidad para detectar regresiones rápido."
  },
  {
    q: "¿Ofrecen piloto o PoC antes del despliegue completo?",
    a: "Sí. Recomendamos una PoC/MVP acotada para validar supuestos y KPIs. Si el piloto cumple, escalamos gradualmente y documentamos operación y soporte."
  },
  {
    q: "¿Cómo es el soporte post-implementación?",
    a: "Incluye monitoreo, alertas, parches y mejoras menores. Opcionalmente, mesas de servicio, acuerdos de nivel (SLA) y evolución continua del roadmap."
  }
];

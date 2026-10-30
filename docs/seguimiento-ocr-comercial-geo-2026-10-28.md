# Enlaces, validación comercial y GEO · 28 de octubre de 2026

## 1. Enlaces contextuales publicados

Se incorporaron las dos referencias aprobadas:

| Página de origen | Destino | Contexto |
| --- | --- | --- |
| `/servicios/automatizacion-procesos` | `/blog/automatizacion-para-pymes-por-donde-partir` | Elegir un primer proceso y evaluar el piloto |
| `/servicios/integracion-ia` | `/blog/herramientas-automatizacion-n8n-make-ia` | Herramientas y criterios para conectar sistemas |

Las fechas de revisión de esos dos servicios se actualizaron al **27 de octubre**, cuando se editaron sus datos. La publicación se completó el 28 en Firebase `automata-ai/studio`. HTML y `/llms-full.txt` usan la misma configuración; el sitemap recoge las fechas específicas.

Tipado y build correctos. **Ocho comprobaciones locales y ocho de producción** pasaron en escritorio y móvil, incluyendo enlace único, respuesta de destino, datos estructurados, flujos y Markdown. El SDK de GA4 se sustituyó en las comprobaciones de producción para no generar visitas de prueba. IndexNow aceptó con **200 OK** tres URLs: los dos servicios y `/llms-full.txt`.

Las solicitudes individuales de Google continúan en la cola delegada documentada en `docs/cola-indexacion-google.md`; esta intervención no repitió esas solicitudes.

## 2. Contacto OCR del 21: validación completada

La consulta registrada en GA4 no quedó como una señal sin contrastar: se encontró su correo de notificación en Resend, con entrega **delivered** al destinatario configurado. El mensaje contiene una solicitud explícita de cotización, tipo de documento, volumen y sistema de destino. El detalle comercial se conserva en la evidencia privada.

- GA4: **21 de octubre a las 14:47**, zona America/Santiago, `service=ocr`, `form_type=ocr`, fuente Google orgánico, landing `/ocr`, país Chile.
- Resend: correo creado a las **17:47:14 UTC**, el mismo minuto local.
- El correo conserva la referencia a `/ocr` y al referrer de Google, además de los campos y mensaje de la consulta.
- El propietario confirmó en esta conversación que **ya está atendida**. No se envió el borrador de seguimiento preparado durante la revisión.

Se confirma una solicitud comercial recibida y atendida según el propietario. No se deducen una reunión, una oportunidad calificada o una venta que no hayan sido confirmadas. Los datos de contacto y de la empresa quedan solo en la evidencia privada, sin crear un caso público o un permiso de publicación.

Evidencia: `.local/seo/reports/contacto-ocr-2026-10-21-validacion.json` y el cuerpo de correo asociado. La búsqueda de envíos alcanzó fechas anteriores al 13 de octubre, cubriendo el día del contacto. No se accedió al buzón personal del destinatario: la comprobación se hizo sobre los envíos de la web en Resend.

## 3. Medición de las intervenciones

Consulta realizada el **28 a las 14:24 UTC**, datos GA4 solicitados por separado para días completos de calendario e intradía. Se excluyen las fuentes `qa_`; las visitas propias no identificadas aún pueden permanecer.

| Indicador | Período | Registros devueltos |
| --- | --- | --- |
| Entrada a OCR desde Google orgánico | 25–27 oct. | **3 sesiones**, el 27 |
| Entrada desde LinkedIn a la guía OCR | 27 oct. | **1 sesión**, campaña `evaluacion_ocr_20261026` |
| Clics de capacidades, evaluación y Nosotros desde OCR | 25–27 oct. | Sin filas devueltas |
| Descargas de la plantilla (`resource_download`) | 25–27 oct. | Sin filas devueltas |
| Nuevos eventos `generate_lead` | 25–27 oct. | Sin filas devueltas |
| Eventos, entradas OCR y contactos intradía | 28 oct., consulta parcial | Sin filas devueltas |

La sesión de LinkedIn usa `linkedin / social` y la campaña exacta del post publicado el 27. Es atribución de una sesión, no evidencia de una oportunidad comercial ni un visitante externo único validado.

Los días de calendario completos no garantizan que GA4 haya terminado de procesarlos. La muestra es pequeña: no se calcula una tasa de conversión concluyente ni se interpreta la ausencia de filas nuevas como un fallo del tracker. Las pruebas técnicas ya comprobaron emisión de eventos y preservación de atribución.

Snapshot privado: `.local/seo/reports/2026-10-28T14-25-07-158Z-impacto-comercial.json`.

## 4. Nueva ronda de Gemini: cinco observaciones recogidas

Se hicieron las cinco preguntas fijas en **conversaciones nuevas**, comprobando que no hubiera respuesta previa ni texto en el editor. No se incluyó YAGO ni se aportaron nuestros enlaces en los prompts. Se recogieron las respuestas completas desde la interfaz de consumo de Gemini.

| Consulta | YAGO mencionada | Cita enlazada comprobada |
| --- | --- | --- |
| Automatización empresarial en Chile | No | Ninguna |
| Integración de IA en procesos en Chile | No | Ninguna |
| Aplicaciones empresariales con IA en Chile | No | Ninguna |
| Agentes de IA en Chile | **Sí** | Ninguna |
| OCR para empresas en Chile | **Sí**, con el dominio `yago.cl` escrito | Ninguna |

**Resultado descriptivo: dos de cinco respuestas mencionan YAGO.** En agentes la presenta como implementadora de asistentes internos/RAG y herramientas corporativas. En OCR describe extracción de datos de documentos para planillas, ERP y flujos, consistente en lo principal con la oferta publicada. El dominio escrito en texto no se transforma en una cita enlazada.

Condiciones y límites registrados:

- Motor: Gemini, interfaz de consumo. Modelo exacto **no informado**.
- Conversación nueva por pregunta, modo temporal **no confirmado** y personalización **no verificada**.
- Uso de búsqueda web **no verificado**. Los elementos de respuesta recogidos no tenían enlaces de fuentes.
- Una ejecución por pregunta; no se repitieron hasta obtener una respuesta favorable.
- La respuesta de integración se orienta principalmente a empresas adoptantes y sectores, no solo a proveedores. Se conserva la pregunta exacta y esa diferencia de intención.
- Las afirmaciones sobre otros proveedores y cifras sectoriales son texto del asistente, no hechos contrastados por YAGO.

No se compara este 2/5 con la ronda antigua de ChatGPT como un aumento causal o una tasa general GEO. Son motores y condiciones distintos. Los registros completos están en `.local/seo/reports/2026-10-28-gemini-*.json`; el resumen se añadió a `docs/seguimiento-geo.csv`.

## 5. ProyectoIA y referencias de clientes

Se revisó el canal pgongora desde el seguimiento del 26. La consulta paginada cubrió ese período sin encontrar una respuesta identificable de ProyectoIA. El contacto original Nicolas tiene otro buzón fuera de este acceso. No se envió un recordatorio duplicado ni se afirmó que la ficha esté publicada.

En los envíos de cuestionarios desde el 13 se encontraron las **dos pruebas técnicas conocidas**, con datos ficticios. Aunque sus registros incluyen autorización de publicación, no son testimonios de clientes.

El propietario eligió **preparar solo la solicitud de caso/testimonio**, sin destinatario y proyecto confirmados. Se dejó `docs/solicitud-caso-testimonio-cliente.md`, con correo adaptable, preguntas y enlaces de cuestionarios por rol. No se envió ni se publicaron entradas de testimonios o casos.

## Siguiente control

- Seguir el contacto dentro del proceso comercial existente, ya atendido, sin duplicar una respuesta.
- Observar clics, descargas y contactos cuando haya más días procesados, separando fuente LinkedIn y recorrido desde OCR.
- Usar la nueva muestra de Gemini como observación limitada; para comparar motores o evolución, repetir un protocolo con metadatos explícitos y fuentes cuando existan.
- Esperar respuesta de ProyectoIA y completar empresa, proyecto y contacto para una referencia autorizada.

Los datos personales y cuerpos de correo permanecen en `.local/seo/`, excluidos de Git y Firebase. Este documento no autoriza identificar a un prospecto como cliente ni publicar su solicitud como testimonio.

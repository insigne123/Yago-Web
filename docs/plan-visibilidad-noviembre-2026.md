# Plan de visibilidad: noviembre 2026 (30 días)

Inicio: 1 de noviembre de 2026 · Cierre y medición: 1 de diciembre de 2026.

La idea es hacer de una vez todo lo que se puede hacer y dejar en tareas programadas lo que necesita constancia diaria. Este documento dice qué se hizo el día 1, qué corre solo cada día y qué solo puede hacer el dueño de la cuenta.

## 1. Dónde estamos (datos del 4 al 31 de octubre)

Fuente: `npm run seo:report -- --save --inspect-all` del 1 de noviembre (Search Console, Chile, sin búsquedas de marca; GA4; Bing).

| Indicador | 27 sep – 24 oct | 4 – 31 oct |
| --- | --- | --- |
| Páginas indexadas en Google | 25 de 47 | 39 de 48 |
| Impresiones sin marca | 340 | 505 |
| Clics sin marca | 1 | 2 |
| Sesiones orgánicas (GA4) | 46 | 81 |
| Sesiones desde asistentes de IA (ChatGPT, Gemini) | 9 | 12 |
| Contactos desde búsqueda | 1 | 1 |

Lo que dicen los datos:

- **La indexación ya no es el problema principal.** Quedan 9 URL fuera del índice: 4 páginas de soluciones (finanzas, reportes, logística y aprobaciones) que no recibían ningún enlace desde las páginas fuertes, capacitación, glosario, dos productos y términos.
- **El problema ahora es la posición.** Casi todo aparece en la página 2 o 3 de Google, por eso hay impresiones pero casi ningún clic.
- **Hay cuatro temas con demanda real**:
  1. **Digitalización de documentos**: unas 300 impresiones, posiciones 15 a 33, en /ocr.
  2. **Agentes de IA para empresas**: posiciones 8 a 11, en /servicios/agentes-ia.
  3. **Automatización de procesos**: posiciones 23 a 35, en una guía de solo 560 palabras.
  4. **F30 y F30-1**: posiciones 9 y 10.
- **ChatGPT ya trae visitas.** Las respuestas de ChatGPT usan el índice de Bing, y Bing tenía 8 páginas sin rastrear o con rastreo de hace meses (entre ellas la Auditoría IA y el blog).
- **Rendimiento móvil aceptable, mejorable.**
  - Lighthouse del home, 1 de noviembre: 72 puntos, carga principal (LCP) en 2,9 s, bloqueo (TBT) de 970 ms, sin saltos de diseño.
  - Lo que más pesa es un bloque de JavaScript de animaciones (unos 900 ms) y Google Analytics (unos 440 ms).
  - Analytics no se toca este mes para no alterar la medición del plan.
- **El sitio casi no tiene enlaces externos.** Bing informaba 0 enlaces entrantes en las páginas principales. Esa falta de autoridad es lo que mantiene las posiciones bajas. Se corrige con menciones en directorios, medios, partners y clientes, y eso depende del dueño.

## 2. Metas al 1 de diciembre

Son metas, no promesas: Google tarda semanas en reordenar posiciones.

- 46 de 48 páginas indexadas (todas menos términos y privacidad).
- 1.000 impresiones sin marca en 28 días y 20 clics o más.
- Top 5 en al menos dos de estas búsquedas: "agentes de ia para empresas", "f30", "digitalización de documentos en chile".
- 8 menciones o enlaces externos nuevos (directorios, medios, partners, clientes).
- 25 sesiones o más desde asistentes de IA.

## 3. Hecho el 1 de noviembre

Contenido, que es lo que más mueve las posiciones. Son 8 guías, cada una con preguntas frecuentes y fuentes oficiales: 4 nuevas y 4 reescritas.

| Tema | Qué se hizo | Palabras |
| --- | --- | --- |
| Digitalización de documentos | La guía de OCR pasó a ser la guía completa: "Digitalización de documentos: qué es, cómo se hace y cuándo usar OCR con IA" | 2.160 |
| Digitalización de documentos | Nueva: "Cuánto cuesta digitalizar documentos", con fórmula y ejemplo ilustrativo | 1.660 |
| Digitalización de documentos | Nueva: "Validez legal de documentos digitalizados en Chile" (Ley 19.799, Ley 18.845, SII y DT). Conviene que la revise un abogado | 2.510 |
| Dirección del Trabajo | Ampliada: "Certificados F30 y F30-1", con paso a paso, vigencia, verificación y problemas frecuentes | 2.150 |
| Dirección del Trabajo | Nueva: "Control de contratistas: Ley de Subcontratación, F30-1 y estados de pago" | 1.810 |
| Dirección del Trabajo | Nueva: "Finiquito electrónico en Mi DT: requisitos, plazos y cómo se paga" | 1.760 |
| Automatización | "Qué es la automatización de procesos" pasó de 560 a 2.450 palabras, con tipos, ejemplos por área, puntaje para priorizar y herramientas | 2.450 |
| Agentes de IA | La guía ahora responde "qué es un agente de IA", para dejar de competir con /servicios/agentes-ia por "agentes de IA para empresas" | 2.120 |

Páginas:

- **/ocr**:
  - El título ahora parte con "Digitalización de documentos", que es lo que busca la gente.
  - Nueva sección "Servicio de digitalización de documentos" y 4 preguntas frecuentes nuevas o reescritas.
  - Enlaces a las 3 guías del tema.
- **/servicios/agentes-ia**:
  - 3 preguntas frecuentes nuevas (costo, integración con ERP o CRM, datos personales) y una nota sobre plazos.
  - La descripción se acortó a 160 caracteres.
- **Soluciones**:
  - Las 4 páginas sin indexar (finanzas, reportes, logística y aprobaciones) suman unas 1.000 palabras cada una: escenarios de antes y después, guía práctica y 3 preguntas frecuentes.
  - La de logística incluye la nueva Res. Ex. SII N° 144 de 2026 sobre guías de despacho.
- **Glosario**: 4 términos nuevos con fuente:
  - microforma;
  - responsabilidad solidaria y subsidiaria;
  - derecho de retención;
  - finiquito electrónico.
- **Enlaces internos**: los textos de los enlaces hacia las guías se ajustaron a su nueva intención de búsqueda, y /sadt y /ocr enlazan las guías nuevas.

Técnico y datos para asistentes de IA:

- **Blog**: preguntas frecuentes visibles con datos estructurados `FAQPage`, que también se incluyen en `llms-full.txt`.
- **Footer**: nueva columna "Soluciones", con enlaces a las páginas por área desde todo el sitio.
- **Soluciones**: la fecha "Contenido revisado" ahora sale de la fecha real de cada página.
- **Sitemap**: el `lastmod` de /blog sale del artículo más reciente y /glosario tiene su propia fecha de revisión. Google usa esas fechas solo si son confiables.
- **Scripts de reporte**: encuentran solos la instalación de firebase-tools. Antes dependían de una ruta temporal que se podía borrar.
- **`npm run seo:daily`**: resumen diario. Muestra cambios de indexación, búsquedas cerca de la primera página, búsquedas nuevas, sesiones desde asistentes de IA y páginas cambiadas, que avisa a IndexNow.
- **`npm run seo:bing`**: estado de rastreo de todas las URL en Bing, y envío directo de las pendientes (cuota de 100 por día).

## 4. Tareas programadas

Corren mientras la app de Claude está abierta en este computador. Si está cerrada a la hora indicada, se ejecutan al abrirla.

| Tarea | Cuándo | Qué hace | Necesita al dueño |
| --- | --- | --- | --- |
| YAGO · SEO diario | Todos los días, 08:30 | Reporte de Google, GA4 y Bing; resumen diario; IndexNow de lo que cambió; envío a Bing de URL sin rastrear; hasta 4 solicitudes de indexación por día en Search Console desde el Chrome separado | Iniciar sesión cuando vence Firebase o Google |
| YAGO · Mejora de contenido diaria | Todos los días, 10:30 | Elige la oportunidad con más impacto del resumen y prepara una mejora concreta con fuentes. Publica solo si la publicación automática está activada | Activar o no la publicación automática |
| YAGO · Revisión semanal GEO | Lunes, 11:30 | Hace 5 preguntas rotativas en Perplexity y Copilot y registra si citan a YAGO. Prepara además un borrador de post de LinkedIn | Publicar el post |
| YAGO - Seguimiento SEO (Windows) | Lunes, 09:00 | Reporte semanal ya existente | Nada |

**Publicación automática: activada el 1 de noviembre por decisión de Nicolás.** El archivo `.local/seo/autopublicar.json` tiene `"habilitado": true`.

La tarea de contenido publica una mejora por día solo si se cumple todo esto:

- tiene fuentes oficiales;
- pasa el typecheck y la compilación;
- el repositorio no tiene cambios sin commit, porque el sitio se publica desde la carpeta de trabajo.

Después de publicar, hace commit local, sin push. Para desactivarla, cambia `habilitado` a `false` o borra el archivo. Sin él, la tarea deja la propuesta en `.local/seo/propuestas/`.

Tareas puntuales programadas:

- **1 de diciembre, 09:00 · Cierre del plan.** Compara contra la línea base y propone diciembre. No publica.
- **4 de enero de 2027, 09:30 · Datos con fecha.** Deja propuestas de corrección, sin publicar.

## 5. Lo que solo puede hacer el dueño

Ordenado por impacto:

1. **Sesiones de Google.**
   - Firebase vence cada pocos días (volvió a pasar el 2 de noviembre) y detiene reportes, envíos a Bing y despliegues.
   - Es una política de Google Workspace que solo puede cambiar el administrador: Admin › Seguridad › Control de acceso y de datos › Control de sesión de Google Cloud. Hay que elegir no requerir reautenticación, o eximir las apps de confianza y marcar "Firebase CLI" como de confianza en Controles de API. En la misma sección, Control de sesión de Google define cuánto dura la sesión web.
   - Mientras no se ajuste, cuando una tarea lo pida hay que iniciar sesión con `npx --yes firebase-tools@15.32.1 login --reauth`.
2. **Permiso del despliegue diario.** El modo automático bloqueó el despliegue de la tarea de contenido el 2 de noviembre. Se habilita abriendo la tarea en la app, pulsando "Run now" y aprobando el despliegue (la aprobación queda guardada), o agregando la regla de permiso en `.claude/settings.local.json`.
3. **Reseñas de clientes.** Clutch (https://review.clutch.co/review?provider_id=2738610). Las reseñas son lo que más cita la IA cuando recomienda proveedores. Los mensajes están en `docs/kit-clientes-resenas.md`.
4. **Directorios, medios y partners.** Ver la sección 6 y `docs/kit-visibilidad-externa.md` (ProyectoIA, TechBehemoths, Capterra/G2, ComparaSoftware, agentes.ai y RankMyAI).
5. **LinkedIn.** Publicar los borradores semanales desde la página de empresa.

Resuelto el 2 de noviembre:

- **Search Console:** la sesión de Google quedó iniciada en el Chrome separado (`scripts/search-console-session.mjs`). La tarea diaria pide hasta 4 indexaciones por día con `scripts/seo/gsc-request-indexing.mjs`; ese día se pidieron las 10 URL pendientes.
- **Perfil de Empresa de Google:** no corresponde. YAGO atiende 100 % remoto y Google exige atención presencial; un perfil así puede ser suspendido.
- **RUT y razón social:** Sociedad de Inversiones Yago SpA, RUT 77.711.804-8, ya están en los datos estructurados, en /nosotros y en llms.txt.
- **Auditoría IA:** el sitio ya dice cómo se acuerdan plazo y precio, la confidencialidad y que no obliga a implementar con YAGO.
- **YouTube:** canal https://www.youtube.com/@yago-cl con los 3 videos animados, insertados en la guía de F30, la de digitalización y la Auditoría IA, con datos estructurados de video.

## 6. Presencia externa

Todo está en `docs/kit-visibilidad-externa.md`, con los textos listos para copiar:

- la ficha maestra de YAGO;
- las correcciones y el correo para pedir reseñas en Clutch;
- las fichas de SADT, AXIS y OCR para directorios;
- dos columnas de opinión, una para BioBioChile y otra para Portal Innova, y la nota de prensa de la Auditoría IA. Están en `.local/seo/kit/`, fuera de git, porque los medios piden textos inéditos;
- los partners y el ecosistema.

Lo primero, por impacto:

1. **Clutch.** Ya tiene una reseña verificada de Grupo Expro, pero el perfil muestra proyectos de "USD 1 a 10 millones" y dos tamaños de equipo distintos. Hay que corregirlo y sumar 3 a 5 reseñas.
2. **Las dos columnas de opinión.**
3. **ComparaSoftware y Capterra** para SADT y OCR.
4. **RankMyAI** para OCR.

## 7. Backlog de contenido para la tarea diaria

Cada tema debe tener fuentes oficiales verificables y no repetir guías existentes:

1. Libro de Remuneraciones Electrónico: qué es, plazos y errores frecuentes (dt.gob.cl).
2. Facturas electrónicas y OCR: cuándo usar el XML del SII y cuándo extraer datos de un PDF o imagen.
3. Extraer datos de PDF a Excel: opciones manuales, OCR y automatización (búsqueda "extracción de datos desde documentos").
4. Conciliación bancaria automática: qué se puede automatizar y qué controles mantener.
5. Rendición de gastos con fotos de boletas: flujo, validaciones y respaldo.
6. Cómo unificar datos de varias aplicaciones en un panel de gestión (apoya la Auditoría IA).
7. Auditoría de procesos con IA: qué revisa y qué entrega (apoya /servicios/auditoria-ia).
8. Chatbot o agente de IA para atención por WhatsApp: diferencias y controles.
9. Cómo conectar IA con el ERP de la empresa: patrones y riesgos.
10. Capacitación en IA para equipos: qué debe incluir un buen programa (apoya /servicios/capacitacion-ia).
11. Qué incluye y de qué depende el costo de una página web a medida (apoya /servicios/paginas-web).
12. Consulta de causas en el PJUD para empresas: qué es público y qué no (apoya AXIS; revisar con cuidado el marco legal).

## 8. Recordatorios con fecha

Ambas quedaron programadas en la app de Claude (ver sección 4). Detalle:

- **1 de diciembre de 2026 · Cierre del plan.**
  - Correr `npm run seo:report -- --save --inspect-all` y comparar contra la sección 1 y las metas de la sección 2.
  - Agregar aquí una sección "Cierre" con resultados y acciones de diciembre.
- **4 de enero de 2027 · Datos con fecha.** Revisar en fuentes oficiales:
  1. el ingreso mínimo que se reajusta por IPC el 1 de enero de 2027 (guía de costos de digitalización);
  2. si la Ley 21.719 de datos personales entró en vigencia el 1 de diciembre de 2026 o se postergó (guía y servicio de agentes de IA);
  3. el plazo del 1 de mayo de 2027 de la Res. Ex. SII N° 144 (página de logística);
  4. la forma de obtener el F30 y el F30-1.

## 9. Medición

- Diario: `.local/seo/daily/AAAA-MM-DD.md`, generado por la tarea diaria.
- Semanal: `.local/seo/geo/seguimiento-geo.csv` (respuestas de Perplexity y Copilot, generado por la tarea semanal) y el reporte de Windows de los lunes.
- Cierre (1 de diciembre): comparar con la tabla de la sección 1 y decidir el plan de diciembre.

## 10. Clics: línea base del 4 de noviembre

Datos de Google del 4 de octubre al 1 de noviembre. La foto completa queda en `.local/seo/ctr/2026-11-04.json`.

- **Total:** Chile, 44 clics y 1.361 impresiones (CTR 3,2 %, posición media 13,8). Todos los países: 55 clics y 1.759 impresiones. Bing, del 9 de octubre al 1 de noviembre: 7 clics y 503 impresiones.
- **Clics semanales en Chile:** 11, 4, 11 y 18 desde la semana del 5 de octubre.
- **La cifra "sin marca" no es el total.** Cuenta 2 clics porque las consultas que Google oculta por privacidad quedan fuera. Desde ahora el reporte diario muestra ambas.

| Posición (consultas visibles en Chile) | Impresiones | Clics |
|---|---:|---:|
| 1 a 3 | 123 | 8 |
| 4 a 7 | 71 | 2 |
| 8 a 10 | 156 | 0 |
| 11 a 20 | 125 | 1 |
| 21 o más | 353 | 0 |

**Lectura.** El problema principal es la posición, no el texto del resultado: el 43 % de esas impresiones está de la página 3 hacia abajo. Además, `/ocr` concentra 500 impresiones por búsquedas donde compiten empresas de escaneo físico, un servicio que YAGO no ofrece. En la búsqueda "agentes de ia para empresas", los avisos pagados ocupan la parte alta de la página, y en "f30" los tres primeros resultados son de la Dirección del Trabajo.

**Cambios preparados el 4 de noviembre:**

- Título, descripción y encabezados de la guía de F30, según lo que Google muestra en "Más preguntas".
- Descripciones de `/ocr`, `/sadt`, `/servicios/agentes-ia`, `/productos/sofia` y la portada.
- Columna "Guías" en el pie de página, para enlazar desde todo el sitio a las cinco guías con más demanda (la de F30 tenía enlaces desde solo 6 páginas).
- Menú: "OCR y documentos" pasa a "Digitalización de documentos".

**Cómo medirlo.** Comparar el 1 de diciembre con `node .local/seo/ctr-analisis.mjs`. Google tarda días o semanas en recoger los títulos, así que antes de esa fecha cualquier cambio es ruido. Meta de referencia, no pronóstico: 30 clics semanales en Chile y los primeros clics de la guía de F30.

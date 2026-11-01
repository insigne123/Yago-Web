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
| YAGO · SEO diario | Todos los días, 08:30 | Reporte de Google, GA4 y Bing; resumen diario; IndexNow de lo que cambió; envío a Bing de URL sin rastrear; solicitudes de indexación en Search Console si hay sesión abierta | Iniciar sesión cuando vence Firebase o Google |
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
   - Firebase y la sesión web de Google vencen cada pocos días, y eso detuvo varios reportes en octubre.
   - Es probable que se deba al control de sesión de Google Workspace. Se revisa en Admin › Seguridad › Control de acceso y datos › Control de sesión de Google Cloud y Control de sesión de Google.
   - Mientras no se ajuste, cuando una tarea lo pida hay que iniciar sesión con `npx --yes firebase-tools@15.32.1 login --reauth`.
2. **Search Console en el navegador integrado.** Iniciar sesión en Google una vez permite que la tarea diaria solicite la indexación de las URL pendientes (unas 10 por día).
3. **Reseñas de clientes.** Clutch (https://review.clutch.co/review?provider_id=2738610) y, si se crea, el perfil de Google. Las reseñas son lo que más cita la IA cuando recomienda proveedores. Los mensajes están en `docs/kit-clientes-resenas.md`.
4. **Perfil de Empresa de Google** como empresa de área de servicio, sin mostrar dirección. Ayuda a que Google y Gemini no confundan a YAGO con "Asesorías e Inversiones Yago Ltda".
5. **Directorios, medios y partners.** Ver la sección 6.
6. **LinkedIn.** Publicar los borradores semanales desde la página de empresa.
7. **Datos pendientes**:
   - el RUT de Yago SpA, para declararlo en los datos estructurados;
   - plazo, precio, NDA y obligación de la Auditoría IA.

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

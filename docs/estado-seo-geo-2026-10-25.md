# Seguimiento SEO/GEO · revisión del 25 de octubre de 2026

## Balance

**Aumentan la exposición y las sesiones orgánicas, especialmente alrededor de OCR, pero todavía hay pocos clics medidos en búsquedas sin marca y no crece el número de páginas indexadas.** Se mantiene el único evento de contacto conocido del 21 de octubre.

La mejora de OCR se publicó el mismo 25. Los datos consolidados de esta revisión son anteriores a esa publicación; **no se atribuye este crecimiento al bloque nuevo**.

## Fuentes, períodos y disponibilidad

- Auditoría y APIs consultadas en la noche del **25 de octubre, America/Santiago**. Snapshot final iniciado el **26 a las 02:51 UTC**, equivalente al 25 a las 23:51 local.
- Reporte solicitado: **27 de septiembre–24 de octubre**, 28 días.
- Search Console: Google Web, Chile, URLs HTTPS del dominio principal, excluidas las expresiones de marca del reporte. Último día con datos finalizados: **23 de octubre**. `firstIncompleteDate`: **24 de octubre**.
- GA4: sesiones orgánicas y fuentes IA de todos los países, con datos solicitados hasta el 24; el desglose devuelve 33 sesiones orgánicas de Chile.
- Comparación sin solapamiento: **10–16 vs. 17–23 de octubre**, siete días en cada período.
- Fuente de impresiones/clics globales: suma de las filas por página filtradas, no el total sin filtrar de toda la propiedad.
- Accesos Google, GA4 y Bing disponibles tras renovar Firebase. El primer intento con sesión vencida quedó guardado como incompleto, no como cero.

## 1. Páginas e indexación

| Comprobación | Resultado actual |
| --- | ---: |
| Auditoría técnica pública | **47/47 correctas** |
| Inspecciones de Google completadas | **47**, sin fallos de consulta |
| Indexadas | **17**, igual que el 22 |
| Descubiertas sin indexar | **24** |
| Google no reconoce la URL | **5** |
| Rastreada sin indexar | **1** |
| Guías del blog indexadas | **0/12** |

AXIS sigue descubierta sin indexar. OCR conserva PASS, canónica correcta y último rastreo de Google informado del **21 de octubre a las 16:37 UTC**. Ese rastreo no acredita que Google haya procesado el contenido publicado el 25.

Las 47 comprobaciones técnicas revisan HTTP, canónica, noindex, H1 y JSON-LD. No prueban indexación ni equivalen a una nueva medición de rendimiento de campo.

## 2. Comparación de semanas completas

| Indicador | 10–16 oct. | 17–23 oct. | Lectura |
| --- | ---: | ---: | --- |
| Impresiones por página, Google sin marca en Chile | 118 | **141** | **+19 %** |
| Clics en ese filtro | 0 | **0** | Sin avance |
| Impresiones OCR en ese filtro | 84 | **116** | **+38 %** |
| Sesiones orgánicas GA4, todas las landings | 11 | **20** | **+82 %**, base pequeña |
| Sesiones desde fuentes IA identificadas | 0 | **5** | Señal de tráfico, no tasa de citas |
| Eventos `generate_lead` | 0 | **1** | Es el contacto OCR del 21 ya conocido |

OCR mantiene una posición media alrededor de 24 en estas semanas: **23,81 → 24,41**. Más impresiones no demuestra una mejora de posición para un conjunto fijo de consultas.

El crecimiento no es uniforme entre capacidades: impresiones de automatización **8→8**, integración **7→2**, agentes **12→10** y aplicaciones **0→2**. Los volúmenes siguen siendo pequeños.

## 3. Corte solicitado de 28 días

| Indicador | Corte del 22: 24 sep.–21 oct. | Corte actual: 27 sep.–24 oct. |
| --- | ---: | ---: |
| Impresiones por página, Google sin marca Chile | 276 | **329** |
| Clics en ese filtro | 1 | **1** |
| Sesiones orgánicas GA4 | 40 | **46** |
| Sesiones desde fuentes IA conocidas | 7 | **9** |
| Eventos de contacto | 1 | **1** |
| URLs del sitemap indexadas por Google | 17/47 | **17/47** |

Las ventanas se solapan; la tabla conserva cortes descriptivos. Para la evolución se usa la comparación semanal anterior, no porcentajes de impacto entre estas ventanas.

### Páginas prioritarias

| Página | Impresiones sin marca, Chile | Sesiones orgánicas GA4 | Referrals IA | Eventos de contacto |
| --- | ---: | ---: | ---: | ---: |
| Automatización | 18 | 0 | 2 | 0 |
| Integración IA | 12 | 0 | 0 | 0 |
| Aplicaciones | 2 | 0 | 0 | 0 |
| Agentes | 31 | 5 | 0 | 0 |
| OCR | **247** | **5** | **4** | **1** |

Las cinco páginas tienen cero clics en el filtro Google sin marca Chile. El clic del conjunto de páginas corresponde a SADT. Las sesiones de GA4 pueden provenir de búsquedas de marca, otros países y otros buscadores, por lo que no se igualan a ese filtro.

OCR reúne aproximadamente el **75 % de las impresiones por página** medidas. Consultas con señales comerciales: «digitalización de documentos en chile», 15 impresiones y posición media 15,2; «digitalizacion de documentos chile», 16 y 18,69; «servicios de digitalizacion de documentos», 23 y 20,87. Son promedios de muestras pequeñas.

### Contacto y GEO

- Se mantiene **un solo evento de contacto**, el **21 de octubre**, `service=ocr`, landing `/ocr`, fuente **google / organic**, país Chile. No es un contacto nuevo desde el corte del 22 ni está validado como oportunidad comercial.
- Las **9 sesiones de fuentes IA** se desglosan en **8 ChatGPT y 1 Gemini**: OCR 4, automatización 2, home 1, SADT 1 y landing sin identificar 1.
- Las dos sesiones adicionales respecto del corte del 22 corresponden a home el 22 y SADT el 24, ambas atribuidas a ChatGPT. Pueden incluir visitas del propietario; no se presentan como recomendaciones o clientes comprobados.
- No se realizó una nueva ronda independiente de respuestas de asistentes ni se obtuvo una exportación nueva de Bing AI Performance. La última muestra documentada continúa siendo la del 8: una de cinco respuestas mencionaba YAGO y citaba OCR.

## 4. Bloque nuevo de OCR: todavía sin período de evaluación

Consulta de GA4 para el **25 de octubre**, excluyendo fuentes `qa_`:

- `ocr_capability_click`, `ocr_evaluation_click`, `ocr_company_click` y `ocr_evaluation_submit_click`: **sin filas procesadas en la consulta**.
- Sesiones con landing OCR en ese mismo día y filtro: **sin filas procesadas**.

La disponibilidad de la API no convierte los datos intradía en finales. No se interpreta este resultado como ausencia definitiva de uso ni como un fallo del tracker. Las pruebas técnicas de publicación ya validaron los eventos con SDK y formularios simulados; no se envían clics artificiales a GA4 para producir cifras.

Separar la serie anterior del período posterior al 25. La primera evaluación comercial necesita varios días completos posteriores y su tiempo de procesamiento. La nueva sección por sí sola no explica las impresiones y sesiones consolidadas hasta el 23/24.

## 5. Bing y seguimiento automático

Bing GetUrlInfo responde para las ocho prioridades. Nuevas fechas útiles respecto del 22:

- Home: **24 de octubre**, antes 18.
- Automatización: **23 de octubre**, antes 17 de septiembre.
- Integración IA: **23 de octubre**, antes sin fecha utilizable.
- OCR: **25 de octubre, 20:16 UTC**, antes 5.

Son señales de rastreo informadas por Bing, no prueba de indexación, lectura de una versión concreta ni citas de Copilot. El `HttpStatus: 0` del recurso no es el HTTP actual del sitio.

La tarea Windows indica próxima ejecución **26 de octubre a las 09:00 local**, sin ejecuciones omitidas registradas. Su última ejecución sigue siendo la del 19 y su snapshot no contenía métricas privadas; no se usa como corte válido. El wrapper actualizado inspecciona todo el sitemap y ahora devuelve error si faltan fuentes. La ejecución completa verificada en esta revisión fue manual y sigue dependiendo de la sesión local vigente.

## Prioridades

1. **Indexación:** trabajar las páginas existentes pendientes, especialmente Nosotros, AXIS y las guías de OCR/integración. El recuento no avanza aún.
2. **Demanda de OCR:** convertir las apariciones en clics y consultas pertinentes; buscar mejoras apoyadas por consultas reales, evidencia y validación de la solicitud del 21.
3. **Medir la intervención del 25:** revisar clics por servicio y contactos con origen OCR tras acumular días completos, sin atribuirle los datos previos.
4. **GEO:** repetir las preguntas con modelo, fecha y fuentes y avanzar en referencias autorizadas. El tráfico atribuido no sustituye las citas verificadas.

## Evidencia privada

- Reporte completo: `.local/seo/reports/2026-10-26T02-51-13-961Z.json` y CSV correspondiente.
- Comparación y eventos: `.local/seo/reports/2026-10-25-review.json`.
- Reproducción del análisis: `.local/seo/review-2026-10-25.mjs`.
- Intento incompleto conservado: `.local/seo/reports/2026-10-26T02-45-03-278Z.json`.
- Intervención de OCR: `docs/ocr-puerta-de-entrada-yago.md`.

Los archivos privados permanecen excluidos de Git y de la publicación Firebase. Se consultaron APIs de lectura; no se modificaron las páginas durante esta revisión.

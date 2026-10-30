# Estado de páginas, SEO y GEO · 22 de octubre de 2026

## Balance ejecutivo

**Hay más visibilidad y algunas visitas orgánicas, sobre todo en OCR, pero el volumen comercial es todavía bajo y la indexación del contenido sigue incompleta.** La inspección ampliada confirma **17 de 47 URLs del sitemap indexadas**, frente a las ocho prioritarias que revisábamos antes. Las **12 guías del blog y AXIS** no aparecen indexadas en esta inspección.

Google y GA4 se consultaron después de que el propietario renovara Firebase. Bing también se recuperó por API, leyendo su clave únicamente en memoria desde Secret Manager. No se contrataron herramientas nuevas.

## Fechas y alcance

- Ventana solicitada de 28 días: **24 de septiembre–21 de octubre de 2026**.
- Search Console: Web, Chile, consultas sin las expresiones de marca configuradas y URLs del dominio principal HTTPS. Los datos finalizados llegan al **20 de octubre**; Google informa `firstIncompleteDate: 2026-10-21`.
- GA4: datos hasta el 21, zona America/Santiago. Las sesiones orgánicas de las tablas son de Organic Search, de todos los países y con marca incluida; no equivalen a los clics del filtro de Search Console.
- Comparación semanal: **7–13 de octubre vs. 14–20 de octubre**, siete días en cada período, sin solapamiento. Ambos terminan dentro de los datos finalizados de Google.
- Las impresiones y clics globales aquí son la **suma de las filas por página** devueltas con esos filtros; no se presentan como el total de toda la propiedad, que también incluye marca, otros países y subdominios.

## 1. Estado técnico e indexación

### Auditoría pública

**47/47 páginas pasan** las comprobaciones implementadas: respuesta HTTP, canónica, ausencia de noindex, un H1 y JSON-LD parseable. Sitemap con 47 entradas únicas. Robots permite los rastreadores de búsqueda y asistentes declarados, salvo `/api/`; `llms.txt` sigue público con servicios, productos e identidad.

Esto comprueba disponibilidad y señales técnicas, no certifica posiciones, indexación total ni Core Web Vitals de campo.

### Google: inspección de las 47 URLs

| Estado devuelto | URLs |
| --- | ---: |
| PASS / indexada | **17** |
| Descubierta: actualmente sin indexar | **21** |
| Google no reconoce esta URL | **8** |
| Rastreada: actualmente sin indexar | **1** |
| Fallos de consulta | **0** |

Las ocho prioritarias siguen con PASS: home, cuatro servicios principales, OCR, OCR Master y automatización para empresas de servicios.

Otros PASS: SADT, privacidad, páginas web personalizadas, SOF.IA, ANTON.IA y las soluciones de backoffice, carga de datos, documentos y RRHH/dotación.

Pendientes de especial interés:

- **Las 12 guías del blog**: diez descubiertas sin indexar y dos no reconocidas (`apps-ia-desarrollo-asistido-diferencias` y `certificados-f30-y-f30-1-diferencias`).
- **AXIS**, Nosotros y Precios: descubiertas sin indexar.
- Los índices `/productos`, `/servicios` y `/soluciones`: no reconocidos en la inspección.
- `/soluciones/automatizacion-aprobaciones`: rastreada sin indexar; último rastreo informado del 9 de julio.

El sitemap está registrado en Google, fue descargado el **20 de octubre a las 21:08 UTC**, contiene 47 URLs web y no informa errores ni advertencias. Su campo `contents[].indexed` devuelve 0, pero está **deprecado y Google indica no usarlo**; el recuento de 17 proviene de inspecciones individuales.

No se compara este 17/47 como una caída desde las 19 URLs de una antigua captura global: el conjunto y el método de esa cifra eran distintos. Tampoco se infiere que las 30 páginas pendientes tengan un bloqueo técnico: sus estados no explican por sí solos por qué Google todavía no las indexa.

## 2. SEO: evolución en semanas comparables

| Indicador | 7–13 oct | 14–20 oct | Cambio |
| --- | ---: | ---: | --- |
| Impresiones por página, Google sin marca en Chile | 102 | **144** | **+41 %** |
| Clics en ese filtro | 0 | **0** | Sin avance |
| Impresiones de `/ocr` en ese filtro | 64 | **118** | **+84 %** |
| Sesiones orgánicas GA4, todas las landings | 13 | **17** | **+31 %** |
| Sesiones desde fuentes IA identificadas | 3 | **2** | Muestra pequeña, no crecimiento semanal |
| Eventos de contacto `generate_lead` | 0 | **0** | El evento nuevo es del 21, fuera de estas semanas |

La mayor exposición de OCR no viene acompañada de una mejora clara de posición media entre estas semanas: **24,13 → 24,16**. Son más impresiones, no prueba de que haya subido de posición para el mismo conjunto de consultas.

El avance no es uniforme: automatización sube de 4 a 11 impresiones, integración baja de 7 a 5 y agentes baja de 18 a 5. En volúmenes tan pequeños conviene mirar consultas y varias semanas antes de concluir una tendencia por capacidad.

## 3. Corte actual de 28 días

### Cinco páginas principales

| Página | Impresiones Google sin marca, Chile | Clics en ese filtro | Sesiones orgánicas GA4 | Referrals IA | Eventos de contacto |
| --- | ---: | ---: | ---: | ---: | ---: |
| Automatización | 17 | 0 | 0 | 2 | 0 |
| Integración IA | 12 | 0 | 0 | 0 | 0 |
| Aplicaciones | 2 | 0 | 0 | 0 | 0 |
| Agentes | 25 | 0 | 4 | 0 | 0 |
| OCR | **204** | 0 | **5** | **4** | **1** |

### Totales con su alcance

- Google: **276 impresiones y 1 clic**, sumando las filas por página del filtro indicado. El clic corresponde a **SADT**.
- GA4: **40 sesiones orgánicas** en toda la propiedad; 27 de ellas se atribuyen a Chile al desglosar por país. Hay ocho sesiones con landing `(not set)`.
- Principales landings orgánicas: ANTON.IA 8, home 7, SADT 6, OCR 5 y agentes 4; las dos guías laborales reciben una sesión cada una desde Yahoo/Bing, lo cual no demuestra indexación en Google.
- Fuentes de Organic Search: Google 37, Yahoo 2 y Bing 1.
- En el corte anterior guardado, 15 sep–12 oct, había 76 impresiones por página, 16 sesiones orgánicas, 3 referrals IA y 0 eventos de contacto. Las ventanas se solapan, por lo que se conservan como cortes descriptivos, no como comparación causal ni semanas independientes.

### Contacto de OCR registrado

GA4 devuelve **un evento `generate_lead` el 21 de octubre**, servicio `ocr`, landing `/ocr`, fuente **google / organic**, país **Chile**. No es de las fuentes de prueba `qa_setup` o `qa_deploy` excluidas por el reporte.

Es un evento de contacto atribuido por Analytics, **no una oportunidad calificada, reunión ni venta comprobada**. Falta contrastarlo con la solicitud recibida y su calidad comercial. Su origen Google orgánico no identifica la consulta ni demuestra que sea una búsqueda sin marca; tampoco contradice los cero clics del filtro no-marca, cuyos datos del 21 siguen incompletos.

### Consultas útiles para priorizar

| Consulta | Página | Impresiones | Posición media |
| --- | --- | ---: | ---: |
| digitalización de documentos en chile | OCR | 12 | 15,75 |
| digitalizacion de documentos chile | OCR | 13 | 18,46 |
| servicios de digitalizacion de documentos | OCR | 19 | 20,74 |
| agentes de ia chile | Agentes | 4 | 8,75 |

Son señales de muestras pequeñas y promedios, no posiciones fijas garantizadas. OCR representa aproximadamente el 74 % de las impresiones por página medidas en este corte.

## 4. GEO: visitas, citas y referencias externas

### Visitas observadas en GA4

**7 sesiones** desde asistentes identificados: **6 ChatGPT y 1 Gemini**.

- OCR: 4 desde ChatGPT, los días 8, 17, 19 y 21.
- Automatización: 1 desde ChatGPT y 1 desde Gemini, el día 7.
- Landing sin identificar: 1 desde ChatGPT, el día 21.

Parte de las visitas anteriores puede corresponder a verificaciones del propietario. Las sesiones de fuentes IA son señales de tráfico atribuido, no un recuento de citas, recomendaciones o clientes; no se registran todas las conversaciones ni todos los clics de asistentes.

### Menciones y citas independientes documentadas

La última ronda recibida de respuestas de ChatGPT sigue siendo la del **8 de octubre**: **1 de 5 respuestas menciona YAGO**, en OCR, con cita verificada a `https://yago.cl/ocr?utm_source=chatgpt.com`. Las otras cuatro no la mencionaban. Ese recuento es una muestra antigua y limitada, no un índice actual de visibilidad general.

No se ejecutó una ronda nueva de asistentes ni se dispone de una nueva exportación de Bing AI Performance. Los cero de la antigua captura de Copilot no se actualizan a cero actual por falta de datos. Se conserva la incidencia de identidad del mapa, que asociaba otra razón social a YAGO.

### Bing y fuentes externas

- Bing GetUrlInfo responde para las ocho URLs prioritarias. La home informa rastreo del **18 de octubre** y agentes del **15 de octubre**, mientras integración no devuelve fecha utilizable. Los otros rastreos continúan siendo antiguos. `HttpStatus: 0` de esa API no se trata como el estado HTTP real ni confirma Bing Index o citas de Copilot.
- ProyectoIA: comprobación del 22, sitemap de fichas con **2.364 URLs**, ninguna con slug que contenga YAGO. La publicación sigue sin confirmarse; no se duplicó el envío.
- LinkedIn: última actualización administrativa verificada el 13. El post de distribución sigue preparado.
- Casos y testimonios autorizados en configuración: listas todavía vacías. Capterra está en pausa por decisión del propietario.

## 5. Seguimiento reparado

La tarea del 19 de octubre tenía resultado de proceso 0, pero su snapshot carecía de Google, GA4 y Bing. La sesión vencida se confirmó al intentar consultar el 22; el estado genérico del snapshot del 19 no demuestra por sí solo que su causa fuera idéntica.

Cambios verificados:

1. La lectura de la clave Bing usa REST de Secret Manager con la sesión explícita que ya funciona para Google. Se mantiene en memoria, sin imprimir valor ni modificar el secreto.
2. `report.status` identifica alcance, completitud y fuentes faltantes. Un reporte completo de métricas falla con código de proceso 1 si faltan lecturas; un cero medido y una URL conocida sin indexar siguen siendo datos válidos.
3. `--inspect-all` permite inspeccionar todas las URLs del sitemap. El wrapper semanal ahora usa esa opción, con concurrencia de tres inspecciones.
4. **12 pruebas del reporte pasaron**. Ejecución real final de `npm run seo:report -- --save --inspect-all`: `complete: true`, Google 17/47, auditoría 47/47 y Google/GA4/Bing conectados.

La tarea Windows conserva el horario de lunes a las 09:00 y apunta al wrapper actualizado. Su próxima ejecución indicada es **26 de octubre**; requiere equipo, red y sesión. La ejecución final verificada aquí es manual, no una nueva ejecución del Programador.

## 6. Próximas prioridades

1. **Indexación de contenido existente:** priorizar Nosotros, AXIS y guías de OCR/integración. Revisar su estado y coherencia entre contenido, enlaces contextuales y sitemap; usar inspección en vivo y solicitud manual de indexación donde proceda. El API de inspección consulta el índice, no solicita indexación de páginas comunes.
2. **Aprovechar demanda de OCR:** trabajar las consultas comerciales cercanas a primeras posiciones, reforzar ejemplos/evidencia reales y revisar la propuesta y el contacto. Hay exposición y un evento, pero todavía no clics en el filtro no-marca chileno de las cinco páginas.
3. **Validar el contacto del 21:** confirmar solicitud recibida, pertinencia y seguimiento para que la medición llegue a oportunidades reales.
4. **GEO y autoridad:** repetir una ronda documentada con preguntas fijas, modelo, búsqueda y citas; conseguir una referencia o caso real autorizado y dar seguimiento a ProyectoIA. Mantener consistencia de entidad Yago SpA/yago.cl.
5. **Calidad de medición y rendimiento:** revisar las ocho landings `(not set)` y el trabajo de JavaScript/LCP pendiente de la auditoría anterior. No se hizo una medición nueva de Lighthouse ni se certificaron CWV en esta revisión.

## Evidencia y reproducción

- Reporte final: `.local/seo/reports/2026-10-22T14-23-08-761Z.json` y CSV correspondiente; también `latest.json`/`latest.csv`.
- Comparación semanal, detalle de contacto, tráfico y primera inspección completa: `.local/seo/reports/2026-10-22-review.json`.
- Estado de sitemap Google y comprobación de ProyectoIA: `.local/seo/reports/2026-10-22-sitemaps.json`.
- Scripts privados de esta revisión: `.local/seo/review-2026-10-22.mjs` y `.local/seo/check-sitemaps-2026-10-22.mjs`.
- Filtros y categorías: `scripts/seo.config.json`, `scripts/seo-report.mjs`, `scripts/seo/report-utils.mjs`.
- Documentación Google sobre el campo de sitemap deprecado: https://developers.google.com/webmaster-tools/v1/sitemaps

Los snapshots y scripts privados permanecen excluidos de Git y Firebase. Para repetir el corte regular: `npm run seo:report -- --save --inspect-all`, con sesión Firebase vigente y `FIREBASE_TOOLS_MODULE_ROOT` configurado.

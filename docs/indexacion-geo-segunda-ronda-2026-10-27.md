# Indexación y GEO · segunda ronda, 26–27 de octubre de 2026

## Resultado comprobado

La verificación del **27 de octubre, 15:25 UTC**, confirma **25 de 47 URLs del sitemap indexadas**, frente a 21 de la ronda anterior y 17 de la línea base. Las guías pasan de **2/12 a 3/12**. La auditoría pública sigue **47/47** correcta y las lecturas de Google, GA4 y Bing están disponibles.

| URL incorporada | Estado Google | Último rastreo informado, UTC |
| --- | --- | --- |
| `/blog` | Enviada e indexada | 2026-10-27 15:24:31 |
| `/servicios` | Enviada e indexada | 2026-10-27 15:24:32 |
| `/productos` | Enviada e indexada | 2026-10-27 15:24:31 |
| `/blog/agentes-de-ia-para-empresas` | Enviada e indexada | 2026-10-27 15:24:31 |

El propietario confirmó que revisó las cuatro URLs en Search Console y solicitó indexación donde correspondía. El estado anterior se contrasta con el snapshot completo del 26; el actual proviene de la API, no de una inferencia a partir de las solicitudes.

Quedan **22 URLs sin confirmar indexación**, entre ellas nueve guías. El resultado no demuestra todavía un aumento de posiciones, contactos o citas de asistentes.

## Criterio y alcance

Se mantienen el objetivo y criterios de `docs/indexacion-geo-2026-10-26.md`: ayudar a responsables de operaciones, tecnología, finanzas y RRHH que comparan implementaciones, con diagnóstico o demo como acción comercial, alcances verificables y métricas de indexación, tráfico, citas y contactos calificados.

Esta tanda priorizó los tres índices que orientan a las páginas internas y una guía de agentes con oportunidad de aportar criterios concretos. No se republicaron las diez guías pendientes cambiando solo su fecha.

## Mejoras publicadas

### Blog

- Doce guías accesibles desde el HTML inicial, organizadas en cuatro grupos: automatización/retorno, integración/apps/agentes, OCR/documentos y RRHH/Mi DT.
- Navegación por anclas hacia cada grupo; el artículo destacado y los once restantes conservan su acceso sin duplicar tarjetas.
- `CollectionPage` e `ItemList` conectados con las doce guías y la identidad de YAGO.
- Fechas editoriales originales conservadas; revisión nueva solo en el contenido realmente ampliado.

### Servicios

- Comparación entre cinco necesidades y sus primeros alcances: flujos, integración de IA, aplicaciones, asistentes/agentes y OCR.
- Enlaces contextuales a guías de aplicaciones, agentes y evaluación de proveedores.
- Catálogo estructurado de siete rutas de servicio, consistente con los enlaces visibles.
- CTA explicado en función de proceso, volumen y sistemas, sin el plazo fijo de 48 horas que aparecía en el cierre anterior.

### Productos

- Se corrigió el número de productos principales: **SADT y AXIS**. El conteo viene de los elementos renderizados, en vez de anunciar tres con dos tarjetas.
- Se distinguen software con procesos definidos, OCR Master API y servicio OCR implementado.
- Comparación de necesidad y modalidad, y catálogo estructurado sin URLs duplicadas.
- Acceso directo desde el cuerpo de la portada al catálogo; el servicio OCR mantiene su entrada propia.

### Guía de agentes

- Diferencia entre asistente documental, workflow y agente con herramientas, con una referencia primaria de Anthropic y el marco NIST ya citado.
- Ejemplo explícitamente ilustrativo de procedimiento → propuesta de ticket → confirmación → interfaz acordada.
- Pruebas concretas sobre fuentes ausentes, acceso, confirmaciones y fallo de herramientas; no se presentan como resultados de clientes.
- Enlaces al servicio de agentes y a SOF.IA. Se eliminó la generalización de que un agente es necesariamente más auditable que un proceso manual.

Las comparaciones y agrupaciones se reflejan en `/llms.txt` y `/llms-full.txt`. Las fechas específicas del sitemap usan fecha de revisión sin introducir una hora futura del mismo día. El extracto del artículo ROI identifica sus cifras como ilustrativas.

## Publicación y verificación

- Firebase App Hosting confirmó el despliegue completo de `automata-ai/studio`.
- Tipado y compilación de producción correctos.
- **40 pruebas locales y las mismas 40 de producción pasaron**, en escritorio y móvil, incluyendo acceso a las doce guías, comparaciones, datos estructurados, fuente de agentes, descarga de la plantilla, atribución, formulario simulado y accesibilidad WCAG A/AA.
- IndexNow aceptó con **200** siete URLs: home, Blog, Servicios, Productos, guía de agentes y los dos documentos `llms`.
- Google aceptó el reenvío del sitemap con **204** el **27 a las 15:25:48 UTC**; 47 URLs, cero errores y advertencias. Esto no se usa por sí solo como prueba de indexación: el recuento de 25 proviene de inspecciones individuales.
- El reporte final conserva la ventana histórica **27 sep.–24 oct.** para no atribuir métricas anteriores a la nueva intervención. Cualquier ajuste de cifras en esa ventana puede deberse también al procesamiento de datos de la fuente.

El primer reenvío a Google quedó bloqueado por credenciales vencidas. El propietario renovó Firebase y se completaron el envío y las lecturas. No se imprimieron claves ni se crearon cuentas o permisos permanentes nuevos.

## GEO: distribución realizada

Se publicó desde la página oficial **Yago SpA**, empresa **134234048**, una explicación práctica sobre cómo medir OCR, con enlace a la guía y su plantilla editable.

**Publicación verificada tras recargar la lista de publicaciones:**

https://www.linkedin.com/feed/update/urn:li:activity:7520685541806301184/

- Inicio de publicación: **27 de octubre, 03:19:21 UTC**.
- Verificación del contenido publicado: **03:20:54 UTC**.
- Audiencia indicada por LinkedIn: visible para cualquier persona dentro o fuera de LinkedIn.
- Actor confirmado: Yago SpA, no el perfil personal.
- Enlace con `utm_source=linkedin`, `utm_medium=social` y campaña `evaluacion_ocr_20261026`, preparada el 26. La URL corta de LinkedIn es `https://lnkd.in/dZVTU4_Q`; se comprobó también la URL de destino en la publicación.
- Contenido factual sobre la guía y una plantilla con resultados vacíos, sin testimonios ni cifras de rendimiento de clientes.

Texto: `docs/linkedin-plantilla-ocr-2026-10-26.txt`. El recibo privado conserva intento, confirmación, URN y enlace para evitar un reenvío duplicado. La sesión autorizada usó su propio perfil persistente; el puerto CDP 9333 ya estaba cerrado al finalizar la comprobación.

Esta publicación es **distribución propia**, no una referencia independiente ni prueba de nuevas recomendaciones de IA. No se compró promoción.

## Seguimiento externo y observaciones de asistentes

Se revisó el buzón conectado `pgongora` para el período posterior al seguimiento de ProyectoIA, desde el **26 a las 03:30:47 UTC**. La consulta paginada cubrió el período, sin identificar una respuesta en ese buzón. El contacto original `nicolas.yarur.g@yago.cl` no forma parte de ese acceso; una respuesta allí requiere confirmación del propietario. No se repitió el correo de seguimiento.

La comprobación pública de fichas del 26 no identificaba un slug YAGO. La publicación de la ficha sigue sin confirmarse.

Se intentó una observación neutral de Google Search para la pregunta de agentes. Google presentó una validación por tráfico inusual en `/sorry/index`; no se evitó la validación ni se obtuvo un bloque de respuesta de IA utilizable. Se registra **colección no disponible**, no ausencia de YAGO. No se añade una tasa ni un resultado vacío al CSV GEO.

La nueva ronda independiente de asistentes sigue pendiente de respuestas con modelo, fecha, condiciones y fuentes. Protocolo: `docs/ronda-geo-2026-10-26.md`.

## Próximo seguimiento

1. Revisar las nueve guías restantes y el resto de las 22 URLs pendientes, priorizando valor comercial y contenido útil.
2. Comprobar permanencia en el índice y comparar períodos posteriores procesados, sin atribuir a estas acciones los datos históricos.
3. Medir las visitas y descargas atribuidas al post de LinkedIn y el interés por servicio desde OCR.
4. Incorporar respuestas independientes de asistentes y referencias de clientes autorizadas cuando estén disponibles.

El Programador de Windows indica última ejecución el **26 a las 10:18 local**, resultado de proceso 0 y próxima ejecución el **2 de noviembre a las 09:00**. Esa información por sí sola no sustituye la validación del snapshot de métricas. La ejecución completa comprobada en esta tanda es la manual del 27 a las 15:25 UTC.

## Evidencia privada

- `.local/seo/reports/2026-10-27T15-25-42-491Z.json` y CSV correspondiente.
- `.local/seo/reports/2026-10-27-catalogos-verificacion.json`.
- `.local/seo/reports/2026-10-27T15-25-48-294Z-sitemap-submission.json`.
- `.local/seo/reports/linkedin-ocr-publication.json`, preview y captura de publicación.
- `.local/seo/reports/2026-10-26-google-probe.json` y captura, sin puntuación GEO.
- `.local/seo/reports/2026-10-26-continuacion-antes.json`.

Los snapshots, perfiles y comprobaciones privadas siguen excluidos de Git y de los uploads de Firebase.

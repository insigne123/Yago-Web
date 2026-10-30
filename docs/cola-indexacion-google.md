# Cola de indexación Google · continuidad compartida

## Estado registrado el 27 de octubre de 2026

Fuente: informe compartido por el propietario y archivo privado **`.local/seo/reports/2026-10-27-gsc-solicitudes-indexacion.json`**, comprobado en el repositorio. El archivo registra interacción con la interfaz de Search Console, propiedad `sc-domain:yago.cl`, hora local UTC−03:00.

**Siete solicitudes aceptadas; dos pendientes por cuota.** No hay una nueva comprobación del índice en ese archivo. La última línea base completa comprobada por API sigue siendo **25/47 URLs** y **3/12 guías**, del 27 a las 15:25 UTC. No se incrementa ese recuento por solicitudes aceptadas.

| URL | Prueba publicada registrada | Solicitud | Hora local del 27 |
| --- | --- | --- | --- |
| `/blog/apps-ia-desarrollo-asistido-diferencias` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:20 |
| `/blog/elegir-proveedor-automatizacion-ia-chile` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:21 |
| `/blog/que-es-la-automatizacion-de-procesos-con-ia` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:22 |
| `/blog/ocr-con-ia-digitalizar-documentos` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:23 |
| `/blog/como-calcular-el-roi-de-automatizar-procesos` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:24 |
| `/blog/automatizacion-para-pymes-por-donde-partir` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:26 |
| `/blog/herramientas-automatizacion-n8n-make-ia` | Disponible y apta | Aceptada, pendiente de comprobar índice | 22:27 |
| `/blog/registro-contratos-terminos-mi-dt-plazos` | Disponible y apta | Rechazada por cuota; sin solicitar | 22:28 |
| `/blog/certificados-f30-y-f30-1-diferencias` | No realizada | Sin intentar por la cuota anterior | 22:29, solo inspección |

## Continuidad reportada por la otra IA

El propietario informó una **tarea única en Claude para el 28 de octubre a las 10:00 local**. Esa programación no se verificó desde esta sesión y no se creó otra tarea equivalente en Windows.

La siguiente ejecución debe:

1. Leer este documento y el registro privado antes de actuar.
2. Inspeccionar las dos URLs pendientes. Si ya están indexadas, registrar y terminar esa URL.
3. Probar la URL publicada y solicitar una sola vez donde siga pendiente y sea apta.
4. Reinspeccionar las siete aceptadas **sin volver a solicitarlas**.
5. Guardar el nuevo registro privado previsto para el 28, conservando el original.
6. Si vuelve a aparecer cuota, registrar el mensaje y detener los envíos. El propietario puede pedir a la misma IA una única continuación posterior; evitar tareas paralelas para la misma cola.

**La cuota observada no demuestra un máximo fijo de siete solicitudes por día.** Es el número aceptado en esta sesión y puede depender de actividad previa y de las condiciones de Google. Las 10:00 del 28 son anteriores a una eventual ventana de 24 horas desde las 22:28 del 27. Si la cuota sigue activa y se decide programar una continuación, después de las **22:35 del 28** sería un horario conservador, sin garantizar disponibilidad.

## Cómo interpretar el enlazado

«Página de referencia: no se ha detectado ninguna» no es un inventario completo ni en tiempo real de enlaces internos. Google todavía puede no haber rastreado o asociado la página que contiene el enlace.

El código actual ya contiene referencias relevantes desde páginas del sitio:

- Aplicaciones → guía de apps/desarrollo asistido.
- Automatización e integración → guía de elección de proveedor.
- Automatización → guía ROI.
- OCR → guía OCR con IA.
- AXIS → guía de fundamentos de automatización.
- SADT → las dos guías de Mi DT y certificados.
- Blog → las doce guías, agrupadas por necesidad, en HTML.

La revisión de configuraciones identificó dos oportunidades concretas de refuerzo: enlazar la guía para pymes desde automatización y la de n8n/Make desde integración. Se documentan como trabajo recomendado, **no como cambio publicado en esta revisión**.

## Interpretación del panel general

Las 21 indexadas y 35 no indexadas citadas en el informe proceden del panel general y pueden tener desfase y un conjunto de URLs distinto de las 47 del sitemap. No se comparan directamente con el recuento por inspección individual ni se interpretan como pérdida de cuatro páginas.

No se reenviaron solicitudes desde esta sesión después de recibir el informe. El recorrido quedó delegado a la otra IA y se actualizó el mensaje reutilizable para que lea la cola persistente y evite reenviar las siete ya aceptadas.

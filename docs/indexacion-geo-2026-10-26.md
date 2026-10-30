# Indexación y GEO · intervención del 26 de octubre de 2026

## Objetivo y criterios

| Elemento | Definición |
| --- | --- |
| Objetivo comercial | Consultas calificadas por los servicios y productos de YAGO |
| Público | Responsables de operaciones, tecnología, finanzas y RRHH que evalúan implementaciones |
| Llegada | Google, Bing, asistentes de IA y referencias externas |
| Etapa | Comparación de proveedores, evaluación de alcance y selección de un primer proyecto |
| Acción principal | Agendar diagnóstico o solicitar demo del producto correspondiente |
| Promesa | Entradas, salidas, fuentes, validaciones y entregables verificables |
| Dudas | Identidad del proveedor, alcance real, interfaces, calidad y costo |
| Evidencia disponible | Oferta publicada, productos, perfiles oficiales, fuentes públicas y material práctico original; casos autorizados aún pendientes |
| Indicadores | Indexación individual, descubrimiento de URLs, consultas/clics, citas documentadas y contactos calificados |

Línea base: revisión de la noche del 25, con 17/47 páginas del sitemap indexadas, 0/12 guías y AXIS sin indexar. Esta intervención fue solicitada por el propietario para trabajar la indexación y GEO.

## Diagnóstico previo

Siete páginas prioritarias revisadas en producción con JavaScript desactivado: home, Nosotros, AXIS, índice del blog, guías de integración y evaluación OCR, y OCR. Todas devolvieron 200, un H1, canónica propia y directivas index/follow; no se encontró `X-Robots-Tag` restrictivo. El texto está en el HTML inicial.

La portada enlaza AXIS, pero no tiene enlaces dentro de `main` a Nosotros ni a las dos guías prioritarias. Nosotros dispone de identidad, capacidades y perfiles, con oportunidad de explicar mejor modalidad, productos y entregables. Las guías ya ofrecen texto y fuentes; se reforzarán con un recurso práctico original y un ejemplo de alcance, no con relleno ni un caso ficticio.

Evidencia privada: `.local/seo/reports/2026-10-26-indexacion-antes.json`.

## Presencia externa

El sitemap de ProyectoIA respondió 200 el 26, con 2.364 URLs y ninguna coincidencia YAGO en el slug. Contacto oficial comprobado en https://proyectoia.com/contacto: `hola@proyectoia.com`.

Texto de seguimiento: `docs/proyectoia-seguimiento-2026-10-26.txt`. El mensaje consulta la solicitud gratuita del 8 y pide el estado o la URL de la ficha; no compra publicidad, no envía otra alta y no declara casos o resultados de clientes.

## Mejoras publicadas

- **Portada:** bloque de recursos con enlaces directos desde `main` a Nosotros y las dos guías prioritarias.
- **Nosotros:** identidad Yago SpA, modalidad remota, productos SADT/AXIS, entregables y FAQ visibles y estructuradas desde una configuración común.
- **AXIS:** explicación de los estados con hallazgo, sin hallazgo y pendiente; alcance penal público y diferencia frente a un certificado oficial. El panel se identifica como ilustrativo. La categoría del software se precisa como consulta de causas penales públicas.
- **Guía OCR:** plantilla CSV descargable y explicación de cómo registrar los campos, referencias y revisiones, con enlaces a la integración.
- **Guía de integración:** ejemplo de factura al ERP con criterios de aceptación para datos ausentes, duplicados, fallo de destino y correcciones. Es un ejemplo de diseño identificado, no un caso de cliente.
- Fechas específicas de revisión y `lastmod` actualizadas en las páginas modificadas. `/llms-full.txt` incorpora la misma identidad, los estados de AXIS, las nuevas secciones y la plantilla.

Recurso publicado: https://yago.cl/recursos/plantilla-evaluacion-ocr.csv. Contiene nueve columnas y filas de referencia con resultados vacíos para completar; no hay métricas de rendimiento inventadas.

## Publicación y verificación

Firebase App Hosting confirmó el despliegue completo de `automata-ai/studio`. Tipado y build correctos; **28 pruebas pasaron en local y las mismas 28 en producción**, en escritorio y móvil. Incluyen enlaces, HTML, datos estructurados, descarga real de la plantilla, fechas, coherencia Markdown, atribución, formulario simulado y accesibilidad de las plantillas modificadas.

La revisión posterior con JavaScript desactivado confirmó las siete páginas con 200, un H1 y canónica propia, y comprobó los nuevos enlaces en el HTML inicial. No se presenta el aumento de palabras como criterio de calidad o requisito de indexación; se registró solo como dato descriptivo del cambio.

Evidencia: `.local/seo/reports/2026-10-26-indexacion-despues.json`.

## Acciones en buscadores y resultado real

1. **Google Search Console:** reenvío del sitemap aceptado con **204** el **26 de octubre, 03:49:49 UTC**. La API confirmó `lastSubmitted` actualizado, 47 URLs y cero errores/advertencias. El campo de indexación de sitemaps deprecado no se utiliza como recuento.
2. **IndexNow:** aceptó con **200 OK** siete URLs: home, Nosotros, AXIS, índice del blog, las guías de integración y evaluación OCR y `/llms-full.txt`.
3. **Solicitudes individuales:** el propietario confirmó que Google aceptó las cuatro solicitudes desde la interfaz de Search Console, después de probar las URLs publicadas. No se simularon esas solicitudes mediante la API de inspección.
4. **Confirmación independiente por API:** las cuatro URLs devolvieron **PASS / Enviada e indexada**, con rastreos del 26 posteriores a la publicación y solicitudes.

| URL | Estado confirmado | Último rastreo informado, UTC |
| --- | --- | --- |
| `/nosotros` | Enviada e indexada | 2026-10-26 03:55:55 |
| `/axis` | Enviada e indexada | 2026-10-26 03:57:56 |
| `/blog/evaluar-piloto-ocr-precision-costos` | Enviada e indexada | 2026-10-26 03:57:56 |
| `/blog/integrar-ia-procesos-empresa` | Enviada e indexada | 2026-10-26 03:57:56 |

El reporte completo posterior confirma **21/47 indexadas**, frente a 17/47 en la revisión anterior, sin fallos de consulta. Las guías pasan de 0/12 a **2/12**. La auditoría pública sigue **47/47** correcta y Google, GA4 y Bing conectados. Quedan 26 páginas sin confirmar indexación; la intervención y las solicitudes se realizaron conjuntamente, sin atribuir el resultado a una única modificación.

El reporte mantiene expresamente la ventana histórica **27 sep.–24 oct.** para evitar presentar las métricas anteriores como efectos de estos cambios. No se acredita todavía mejora de posiciones, contactos o citas de IA por esta publicación.

Evidencia privada:

- `.local/seo/reports/2026-10-26T03-49-49-845Z-sitemap-submission.json`
- `.local/seo/reports/2026-10-26-indexacion-geo-verificacion.json`
- `.local/seo/reports/2026-10-26T04-00-43-016Z.json` y CSV correspondiente

El comando nuevo `npm run seo:sitemap` muestra preview; `npm run seo:sitemap -- --submit` reenvía únicamente el sitemap configurado. Solo esa acción usa una credencial temporal con scope webmasters de escritura, de 900 segundos. Los reportes habituales siguen en lectura y no se crearon claves descargables ni permisos permanentes adicionales.

## GEO y presencia externa

El seguimiento a `hola@proyectoia.com` se envió desde `YAGO <pgongora@yago.cl>`, con respuesta al mismo buzón. ID **01a17642-ba8c-7e9a-bd4f-fc8265a7ad49**; Resend informó **delivered** al comprobarlo a las 03:59 UTC. Significa aceptación por el servidor destinatario, no lectura ni aprobación de la ficha.

El sitemap de fichas seguía sin mostrar YAGO después del seguimiento. No se duplicó el alta ni se contrató un plan. Recibo privado con prevención de reenvío: `.local/seo/reports/proyectoia-followup-2026-10-26.json`.

La nueva ronda independiente de asistentes queda **preparada**, no ejecutada. Preguntas fijas, condiciones y forma de registrar las fuentes: `docs/ronda-geo-2026-10-26.md`. La última muestra observada sigue siendo la del 8 de octubre hasta recibir respuestas nuevas con evidencia.

## Próximo seguimiento

- Revisar las 26 URLs restantes, especialmente las diez guías pendientes y los índices, en un nuevo corte. Las solicitudes no garantizan posiciones ni indexación de todas las páginas.
- Confirmar que la permanencia en el índice y los rastreos se mantienen; comparar tráfico y contactos después de acumular períodos posteriores procesados.
- Revisar respuesta de ProyectoIA cuando llegue al canal de seguimiento y contrastar cualquier enlace de ficha antes de publicarlo como perfil oficial.
- Ejecutar la ronda GEO neutral y conseguir referencias de clientes autorizadas, sin sustituirlas por ejemplos ilustrativos.

**Continuación comprobada el 27:** segunda tanda publicada y confirmada con Blog, Servicios, Productos y guía de agentes indexados, total **25/47**, más distribución del recurso OCR en LinkedIn. Detalle: `docs/indexacion-geo-segunda-ronda-2026-10-27.md`. Las cifras de 21/47 de este documento corresponden al cierre de la primera tanda.

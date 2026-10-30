# Cuestionario de experiencia de AXIS

## Enlace publicado

**https://yago.cl/opiniones/axis**

El enlace conserva la versión para usuarios de AXIS. Para responsables/gerentes usar **https://yago.cl/opiniones/axis-gerentes**. El catálogo de productos y perfiles está en **https://yago.cl/opiniones**; detalles en `docs/cuestionarios-yago.md`.

Publicado el **8 de octubre de 2026** en Firebase App Hosting `automata-ai/studio`.

Objetivo: recopilar feedback y posibles testimonios de usuarios actuales de AXIS. Audiencia: personas que utilizan la plataforma; origen: enlace compartido por Christian o el propietario. CTA única: **Enviar mi opinión**. Promesa: compartir experiencia y oportunidades de mejora, con identificación opcional. Fricción que se resolvió: preguntas de contratación/presupuesto de Clutch y necesidad de una cuenta externa. Identidad: dominio oficial YAGO y producto AXIS. Métrica operativa: respuestas aceptadas y recibidas por correo, no leads comerciales ni reseñas externas publicadas.

## Preguntas y funcionamiento

Ocho preguntas acordadas: tareas en que utiliza AXIS, proceso anterior, facilidad, funciones útiles, cambios observados, dificultades/mejoras, soporte y recomendación. Escalas neutrales y opción negativa/no seguro; las respuestas pueden omitirse si no aplican. Se necesita al menos una respuesta para evitar envíos vacíos.

Nombre, cargo, empresa y correo son opcionales. El consentimiento de recepción es independiente de una **autorización opcional de publicación**, incorporada después de la primera versión. La casilla de publicación viene desmarcada y permite elegir entre un testimonio sin nombre/cargo/empresa o con el nombre y los datos indicados. El correo nunca se incluye en la atribución. Para atribución identificada es necesario indicar nombre.

Texto de autorización mostrado:

> Autorizo a Yago SpA a publicar mis respuestas o extractos fieles, sin cambiar su sentido, en yago.cl como testimonio de mi experiencia con AXIS. Puedo solicitar el retiro escribiendo a nicolas.yarur.g@yago.cl.

La selección no condiciona el envío de feedback, el soporte ni el uso de AXIS. Sin autorización se necesita pedirla después. Los envíos anteriores no adquieren autorización retroactiva. El formulario registra `axis-feedback-v2`, elección y atribución; el correo incorpora el texto/versionado aceptado y su fecha consta en los metadatos del mensaje. Versión del consentimiento: `axis-publication-2026-10-08`.

Las respuestas llegan a **nicolas.yarur.g@yago.cl**, configurado en `CONTACT_TO`, desde **YAGO <no-reply@yago.cl>**. Si se deja correo opcional, se usa Reply-To para facilitar una respuesta del propietario. El formulario no envía respuesta automática al participante ni usa el flujo de leads/CRM de contacto. No se envían respuestas o identificadores personales a GA4.

Asunto del mensaje: **[Opinión AXIS] Respuesta [referencia]**. Cada correo incluye todas las preguntas y señala cuáles se dejaron sin responder. Los mensajes se entregan por Resend usando los secretos runtime ya existentes; no se crearon claves públicas ni nuevos secretos.

## Implementación

- `src/app/opiniones/axis/page.tsx`: página pública compartible, **noindex**, fuera del sitemap y sin navegación comercial.
- `src/components/feedback/AxisFeedbackForm.tsx`: formulario accesible, datos opcionales, confirmación y conservación de respuestas ante errores.
- `src/lib/axis-feedback.ts`: preguntas compartidas, esquema Zod, escape HTML, plantilla y handler verificable.
- `src/app/api/axis-feedback/route.ts`: POST JSON, runtime Node, límite local de 30 envíos por IP/10 minutos.
- `src/lib/email.ts`: soporte opcional de Idempotency-Key por REST de Resend; el envío existente de contacto conserva su llamada SDK.
- `src/app/privacidad/page.tsx`: finalidad de feedback, identificación opcional, no publicación automática y conservación.

La API limita también el cuerpo leído a 64 KiB, valida origen, tipos, longitudes, correo y consentimiento, e ignora el honeypot. Destinatario fijo en el servidor; no acepta un destinatario enviado por el cliente. Los errores de proveedor no muestran claves ni respuestas internas.

El navegador conserva una referencia para reintentar el mismo envío y la cambia cuando se modifican las respuestas. Resend recibe una clave estable `axis-feedback:[referencia]`; protege de duplicados dentro de su ventana de idempotencia, no indefinidamente. Las respuestas se conservan en el formulario durante un error de envío, sin guardarlas en almacenamiento persistente del navegador.

## Pruebas realizadas

- Tipado correcto y compilación local/Firebase completada.
- Nueve pruebas unitarias: envío sin identidad, respuesta negativa, escape HTML, datos inválidos/consentimiento, origen/honeypot/tamaño, errores/reintentos y autorización opcional/anónima/identificada. Comprobado que clientes anteriores quedan sin permiso de publicación.
- Seis comprobaciones de escritorio/móvil pasaron en local y producción: contenido, noindex, exclusión del sitemap, accesibilidad, ancho móvil, identificación opcional, autorización y recuperación de un error con referencia estable. Los envíos de estas pruebas simularon la API.
- Una prueba real desde la interfaz pública respondió **200** y mostró la confirmación.
- Referencia técnica: **906e0d86-993f-47dd-b202-7a7da68f1e5a**.
- Correo de prueba: **01a11d65-ab2f-7811-92b1-8050e217b7f1**, destinatario `nicolas.yarur.g@yago.cl`, estado Resend **delivered**.
- Comprobados marcador **PRUEBA TÉCNICA**, las ocho preguntas y la nota de que no se autoriza publicación.

La prueba tiene datos ficticios y **no es una reseña ni testimonio de un usuario**. `delivered` acredita aceptación por el servidor del destinatario, no lectura ni carpeta del buzón.

### Actualización de consentimiento comprobada el 13 de octubre

- La plantilla de un envío v1 se comparó con el correo técnico ya entregado: texto y HTML permanecen iguales, para preservar su estado y reintentos.
- Prueba real v2, referencia **3bd2e5e9-4e79-4690-ac99-b216cb712488**, aceptada con 200 y confirmación visible.
- Correo **01a1335c-54f8-75e4-a5d1-31668213ee1f**, estado **delivered**, con autorización SÍ, atribución anónima y versión/texto registrados.
- La respuesta indica **PRUEBA TÉCNICA DE CONSENTIMIENTO** y no se incorpora a la evidencia pública.

## Mensaje para compartir

Hola Christian. Este es el cuestionario adaptado para usuarios de AXIS:

https://yago.cl/opiniones/axis

Son preguntas sobre experiencia de uso, facilidad, funciones, soporte y mejoras. No pide presupuesto ni iniciar sesión, y los datos de identificación son opcionales. Por favor comparte este enlace en lugar del anterior. Muchas gracias.

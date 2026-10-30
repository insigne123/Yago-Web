# Cuestionarios por producto y perfil · YAGO

## Publicados el 13 de octubre de 2026

Selector de enlaces: **https://yago.cl/opiniones**.

| Cuestionario | Para quién | Qué recoge | Enlace |
| --- | --- | --- | --- |
| AXIS · Usuarios | Personas que consultan o revisan resultados de AXIS | Tareas, uso, facilidad, funciones, cambios, soporte y mejoras | https://yago.cl/opiniones/axis |
| AXIS · Gerentes y responsables | Quienes supervisan la operación o adopción de AXIS | Necesidad, proceso previo, adopción, resultados, medición y uso de reportes | https://yago.cl/opiniones/axis-gerentes |
| SOF.IA · Usuarios | Personas que consultan conocimiento interno | Búsqueda de información, facilidad, utilidad de respuestas y referencias, soporte | https://yago.cl/opiniones/sofia |
| SOF.IA · Gerentes y responsables | Responsables de conocimiento, soporte interno u operación | Necesidad, equipos, adopción, actualización de fuentes y cambios observados | https://yago.cl/opiniones/sofia-gerentes |
| Aplicaciones · Usuarios | Usuarios de una app, portal o herramienta de YAGO | Tareas, pantallas, facilidad, cambios y dificultades del uso diario | https://yago.cl/opiniones/apps-usuarios |
| Aplicaciones · Gerentes | Quienes supervisan una aplicación y su proceso | Alcance, adopción, integraciones, control y resultados | https://yago.cl/opiniones/apps-gerentes |
| Proyectos · Contrapartes de desarrollo | Personas que definen requisitos, revisan avances y prueban el proyecto con YAGO | Definición de alcance, comunicación, iteraciones, pruebas y entrega | https://yago.cl/opiniones/proyectos |

El enlace de AXIS ya compartido con Christian conserva su formulario, payload, API y texto de autorización existentes. No es necesario reenviar una nueva dirección a esos usuarios. Las otras seis versiones usan un motor compartido con preguntas definidas por variante.

## Criterio de uso

- Enviar un enlace directo según producto/rol para reducir preguntas ajenas a la experiencia del participante.
- No es necesario que cada persona complete todas las versiones. Un gerente que también usa la app puede elegir el cuestionario correspondiente a la experiencia que se busca documentar.
- Para aplicaciones o proyectos particulares, hay un campo opcional **Nombre de la aplicación o proyecto**, sin necesidad de crear un formulario por cliente.
- Usuarios: preguntas sobre su trabajo diario; responsables: evaluación del equipo y mediciones cuando existen; contrapartes: forma de trabajar en el proyecto.
- No se solicita presupuesto, precio ni valor del contrato. Mediciones operativas pueden omitirse si no se conocen o no se han realizado.

Objetivo: feedback útil y posibles testimonios de experiencias reales. Audiencia: clientes/usuarios actuales y responsables con quienes se trabaja. Origen: enlaces compartidos directamente; etapa: experiencia posterior o durante el uso/proyecto. CTA: **Enviar mi opinión**. Promesa: preguntas pertinentes al producto y rol, con identidad opcional. Objeciones atendidas: preguntas que no aplican, desconocimiento de contratación, privacidad de la respuesta y tiempo de participación. Confianza: dominio/identidad YAGO, alcance de consentimiento visible y confirmación con referencia. Métrica: respuestas recibidas por variante y testimonios utilizables con autorización.

## Recepción y publicación

Todos llegan a **nicolas.yarur.g@yago.cl**, mediante el `CONTACT_TO` existente y Resend. El asunto de las nuevas versiones distingue producto y perfil, por ejemplo:

```text
[Opinión SOF.IA | Usuarios] Respuesta [referencia]
[Opinión Aplicaciones YAGO | Gerentes y responsables] Respuesta [referencia]
```

El correo incluye slug del cuestionario, producto, perfil, aplicación/proyecto cuando aplica, todas las preguntas, respuestas omitidas, identificación opcional y estado de publicación. Si el participante deja correo, se usa Reply-To; no recibe respuestas automáticas.

Autorización opcional y desmarcada, limitada a respuestas o extractos fieles en **yago.cl**. Atribución anónima o nombre/cargo/empresa indicados; correo nunca público. Atribución identificada requiere nombre. Se registra el texto específico para el producto/perfil, versión `questionnaire-publication-2026-10-13`, elección y referencia. Los envíos de AXIS mantienen su versionado propio. No se publica automáticamente ni se presume permiso de respuestas anteriores.

Para publicación anónima se debe revisar que el propio extracto o nombre del proyecto no revele identidad/empresa. La autorización no convierte una opinión individual en declaración corporativa ni incluye logos, cifras de terceros o publicaciones en otras plataformas.

Los formularios no envían respuestas, nombres, correos ni referencias a GA4 y no emiten `generate_lead`; son feedback de clientes, no solicitudes comerciales. Páginas con **noindex**, fuera del sitemap. El selector también está fuera de la indexación.

## Edición y ampliación

- `src/config/questionnaires.ts`: catálogo, perfiles, preguntas, opciones y contexto de publicación de seis versiones nuevas. AXIS figura como descriptor de su ruta existente.
- `src/components/feedback/QuestionnaireForm.tsx`: formulario compartido con texto/opciones, identidad y consentimiento.
- `src/components/feedback/FeedbackPageShell.tsx`: presentación y estructura de las nuevas páginas.
- `src/app/opiniones/page.tsx`: selector público de enlaces.
- `src/app/opiniones/[slug]/page.tsx`: páginas por variante y 404 para slugs no definidos.
- `src/lib/questionnaire-feedback.ts`: esquema, validación por pregunta/variante, correo y handler.
- `src/app/api/questionnaire-feedback/route.ts`: límite de envíos y recepción del nuevo motor.
- AXIS existente: `src/lib/axis-feedback.ts`, `src/components/feedback/AxisFeedbackForm.tsx` y `/api/axis-feedback`.

Añadir una variante requiere definir un slug único, audiencia, preguntas y contexto; se genera una página propia al desplegar. Si cambia materialmente el contenido/consentimiento de una versión, actualizar su versionado y conservar los recibos anteriores.

La API valida variante, IDs de preguntas, tipos y opciones; no acepta destinatarios o campos desconocidos. Limita el cuerpo leído a 64 KiB, comprueba origen, usa honeypot y controla frecuencia por IP. Escapa HTML. Idempotency-Key diferencia variante y referencia y protege reintentos dentro de la ventana de Resend, sin deduplicación indefinida.

## Verificación

- Tipado, build local y despliegue Firebase `automata-ai/studio` completados.
- **12 pruebas unitarias nuevas**: seis variantes, aislamiento de preguntas/elecciones, consentimiento, campos de contexto, tamaño, origen y reintentos.
- **9 pruebas de AXIS existente** volvieron a pasar.
- **22 comprobaciones UI** pasaron en local y producción, escritorio/móvil: selector, rutas, 404, noindex, accesibilidad, identidad opcional, autorización, reintentos y AXIS compatible.
- Envíos de las pruebas UI simulan la API. Una sola prueba real de SOF.IA se realizó aparte, marcada con datos ficticios.
- Referencia real de prueba: **cf22b184-9b50-44c2-bfe2-1fcedd8f7e1c**.
- Correo: **01a1337b-f99a-7d58-adf9-e1a3e5488099**, estado **delivered**, destinatario propietario; variante, perfil, autorización y atribución comprobados.
- La prueba técnica no se registra como testimonio ni respuesta real de cliente. Delivered acredita aceptación por el servidor, no lectura/carpeta.

## Mensaje para compartir

Hola [nombre]. Estamos recopilando opiniones para mejorar [producto o proyecto]. Este cuestionario está adaptado a tu experiencia como [usuario/responsable/contraparte]:

[enlace correspondiente de la tabla]

Puedes dejar en blanco lo que no aplique y responder sin identificarte. Al final hay una autorización opcional si quieres que podamos compartir un extracto en la web de YAGO. Nos interesa tu opinión honesta, incluidas las dificultades y lo que deberíamos mejorar. Muchas gracias.

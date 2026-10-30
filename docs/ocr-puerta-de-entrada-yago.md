# OCR como puerta de entrada a YAGO

## Publicado · 25 de octubre de 2026

Página: **https://yago.cl/ocr**. Acceso directo al nuevo bloque: **https://yago.cl/ocr#mas-que-ocr**.

El propietario aprobó la primera intervención propuesta: conectar OCR con otras capacidades de YAGO, unificar la evaluación como acción principal y ampliar el ejemplo documental. Publicación Firebase App Hosting completada en `automata-ai/studio`, tras renovar la sesión del propietario.

## Criterio de la intervención

| Elemento | Definición |
| --- | --- |
| Objetivo comercial | Consultas calificadas sobre OCR y el proceso que continúa con sus datos |
| Público | Operaciones, finanzas y backoffice |
| Contexto de llegada | Búsquedas orgánicas y enlaces de asistentes de IA |
| Etapa | Reconoce el problema documental y compara formas de resolverlo |
| CTA principal | Solicitar evaluación |
| Promesa | Evaluar documentos, campos, validaciones y conexiones para definir el siguiente paso |
| Dudas principales | Precisión, excepciones, integración, alcance y costo |
| Evidencia disponible | Ejemplo ilustrativo identificado, proceso y entregables explicados; los casos de clientes se publican cuando estén autorizados |
| Indicadores | Clics hacia capacidades, solicitudes recibidas, origen OCR en la atribución disponible y calidad comercial confirmada |

Línea base de referencia: `docs/estado-seo-geo-2026-10-22.md`. Ese corte recoge 204 impresiones no-marca Chile de OCR, cinco sesiones orgánicas, cuatro de fuentes IA y un evento de contacto pendiente de validación comercial. Se mantiene la diferencia de alcance entre fuentes y el desfase de Search Console.

## Cambios publicados

### 1. Puente hacia otras capacidades

Se reemplazaron los diferenciadores generales del antiguo bloque «Por qué YAGO» por **Más que OCR**, con el título:

> Leer el documento es el primer paso. Podemos conectar lo que sigue.

Cuatro necesidades y destinos:

| Necesidad | Destino |
| --- | --- |
| Llevar los datos al ERP o CRM | `/servicios/integracion-ia` |
| Continuar con aprobaciones y avisos | `/servicios/automatizacion-procesos` |
| Gestionar documentos en un portal propio | `/servicios/apps-automatizacion` |
| Consultar documentos con referencias | `/servicios/agentes-ia` |

El bloque conserva un botón hacia la evaluación de OCR, añade un enlace a Nosotros y tiene acceso desde el submenú de la página. Usa contenido servido en HTML y enlaces internos directos, sin campañas UTM nuevas que sustituyan el origen de adquisición.

### 2. Ejemplo documental

El hero muestra un ejemplo estático completo, rotulado **Ejemplo ilustrativo · datos ficticios**:

1. PDF escaneado de factura.
2. Extracción de proveedor, folio, monto y fecha.
3. Excepción: orden de compra no identificada; la carga queda pendiente de revisión.
4. Salida prevista a planilla o ERP después de revisión y aprobación, por la conexión acordada.

No representa una captura de un cliente ni cifras de rendimiento real. El ejemplo está renderizado en servidor y no incorpora una nueva biblioteca de animación, imágenes o llamadas de procesamiento.

### 3. Evaluación como acción principal

Hero, navegación, bloque de capacidades y envío del formulario usan **Solicitar evaluación**. El texto de cierre explica qué se revisa y cómo se coordina una muestra, en vez de alternar demo, prueba y evaluación como ofertas distintas.

El mensaje opcional pregunta qué debería pasar después de leer los documentos. El formulario mantiene sus campos, validaciones, API y eventos de conversión existentes. Se añadió una FAQ que explica las implementaciones posteriores al OCR.

### 4. Coherencia SEO/GEO

- `OCR_PAGE.modifiedDate`: **2026-10-25**.
- La fecha se usa en el Service JSON-LD, en la fecha visible de revisión y en el `lastmod` de `/ocr` en el sitemap.
- El contenido nuevo aparece también en `/llms-full.txt`, generado desde la misma configuración.
- El H1, la URL canónica y la intención principal siguen siendo OCR para empresas.
- IndexNow aceptó con **200 OK** las dos URLs modificadas notificadas: `/ocr` y `/llms-full.txt`. No equivale a confirmación de rastreo, indexación o citas nuevas.

## Medición disponible

Se usa el tracker delegado existente; los bloques nuevos son componentes de servidor.

| Evento GA4 | Uso | Parámetros |
| --- | --- | --- |
| `ocr_capability_click` | Abrir uno de los cuatro servicios | `service`: slug de destino, `location`: `ocr_capabilities` |
| `ocr_evaluation_click` | Ir al formulario desde hero o bloque | `service`: `ocr`, `location`: `ocr_hero` o `ocr_capabilities` |
| `ocr_company_click` | Abrir Nosotros desde el bloque | `service`: `ocr`, `location`: `ocr_capabilities` |
| `ocr_evaluation_submit_click` | Pulsar el envío | `service`: `ocr`, `location`: `ocr_form` |
| `generate_lead` | API de contacto confirma envío correcto | `service`: `ocr`, `form_type`: `ocr`, `position`: `ocr_form` |

El clic de envío no se cuenta como conversión: solo el éxito de la solicitud genera `generate_lead`. La allowlist de Analytics conserva únicamente parámetros operativos; nombre, correo, mensaje y referencia de lead no se envían a GA4.

La atribución existente guarda `ft_landing` y la campaña inicial. En una entrada nueva por OCR se conserva `/ocr` al navegar a un servicio y luego al formulario web. Si ya había una primera entrada guardada dentro del plazo de atribución, se conserva esa anterior. Esto no mide una reserva completada en la agenda externa de Google.

## Verificación

- Tipado TypeScript correcto y compilación de producción correcta.
- **12 comprobaciones de OCR** pasaron en escritorio y móvil: contenido, CTA/anclas, ejemplo, enlaces, HTML/Markdown, fecha, clic, atribución, solicitud simulada y accesibilidad WCAG A/AA.
- Comprobaciones relacionadas de Analytics, opt-out, navegación y validación del API también pasaron.
- En producción, **27 comprobaciones distintas quedaron correctas** y una se omitió por ser exclusiva de móvil en el proyecto de escritorio. La primera tanda tuvo siete fallos con respuestas `429 Rate exceeded` de la plataforma; después de confirmar HTTP 200 se repitieron solo esas siete, con un worker, y pasaron. No se modificaron límites ni se evitó la protección.
- Los formularios de las pruebas exitosas se interceptaron con respuestas simuladas y el SDK de GA4 se sustituyó en el navegador de pruebas; no se generaron contactos ni conversiones reales de prueba.
- Consulta pública final de `/ocr`: contenido nuevo visible. Sitemap público: fecha de OCR **2026-10-25T12:00:00.000Z**. Los cuatro destinos y Nosotros respondieron en las comprobaciones.

Pruebas: `tests/ui/ocr-page.spec.ts`, `tests/ui/analytics.spec.ts`, `tests/ui/navigation-and-api.spec.ts`.

## Seguimiento

En las próximas semanas revisar:

1. Qué capacidades reciben clics desde OCR, filtrando por evento y servicio.
2. Solicitudes cuyo primer origen registrado sea OCR y servicio por el que terminan consultando.
3. Pertinencia y seguimiento comercial de esos contactos.
4. Impresiones, clics y consultas de OCR en ventanas comparables, considerando el desfase de Google.
5. Indexación de contenido existente y nuevas rondas independientes de menciones/citas, como tareas separadas del resultado de esta intervención.

No se estima un aumento de conversiones antes de reunir observaciones posteriores a la publicación.

### Primera consulta de seguimiento · noche del 25

La revisión del mismo día de publicación confirmó que la ventana consolidada termina antes del cambio: Google hasta el 23 y GA4 solicitado hasta el 24. Para el propio 25, las consultas de los cuatro eventos nuevos y las sesiones con entrada OCR todavía no devolvieron filas procesadas. No es una evaluación del rendimiento comercial ni prueba de ausencia de uso. Detalle: `docs/estado-seo-geo-2026-10-25.md`.

## Archivos principales

- `src/config/ocr.ts`
- `src/app/ocr/page.tsx`
- `src/components/ocr/OcrDocumentExample.tsx`
- `src/components/ocr/OcrCapabilities.tsx`
- `src/components/ocr/OcrLeadForm.tsx`
- `src/components/site/KeyFacts.tsx`
- `src/app/sitemap.ts`
- `src/lib/llms.ts`

# SEO y búsqueda con IA (GEO) · yago.cl

Revisado: octubre de 2026.

Idea central: las bases de SEO siguen siendo relevantes para las funciones de IA de Google. Contenido propio y útil, páginas indexables, datos estructurados coherentes y buena experiencia permiten descubrir y comprender el sitio. Para otros asistentes también conviene revisar acceso de rastreadores, presencia en Bing y fuentes externas. No hay una optimización ni cantidad de reseñas que garantice aparecer en las respuestas.

## Foco actualizado: servicios empresariales en Chile

La implementación prioriza automatización de procesos, integración de IA, desarrollo de aplicaciones y software (incluido desarrollo asistido por IA), agentes y OCR. Home, servicios, entidad y contenido de descubrimiento reflejan este foco. Los productos específicos aportan ejemplos de implementación.

- Nuevas páginas: `/servicios/integracion-ia`, `/servicios/agentes-ia` y `/nosotros`.
- Cuatro guías de integración, selección de proveedor, desarrollo y evaluación OCR.
- Casos y testimonios se publican desde `src/config/evidence.ts` únicamente con contenido autorizado. Los campos pendientes no aparecen en la web.
- Perfil real de Nicolas Yarur en `src/config/team.ts`, con la biografía y LinkedIn proporcionados por el propietario. Las 12 guías llevan su firma y marcado Person; la empresa conecta sus perfiles de LinkedIn y Clutch.
- Implementación, activación y medición: `docs/seo-geo-implementacion.md`.
- Mensajes y entrevistas con clientes: `docs/kit-clientes-resenas.md`.
- Seguimiento: `docs/seguimiento-clientes.csv` y `docs/seguimiento-geo.csv`.

## Lo que ya quedó hecho en el sitio

**Contenido que responde preguntas**
- Bloque "En resumen" en SADT, AXIS, OCR y OCR Master (`src/config/key-facts.ts`): define el producto en una frase y lista sus datos clave (para quién, qué hace, precio, soporte). Los precios salen de la misma configuración de planes, así que no se desalinean.
- Preguntas nuevas en cada producto: "¿Qué es…?", "¿Cuánto cuesta…?" y los plazos de la DT, con fuentes oficiales.
- Las respuestas del FAQ ahora están en el HTML aunque la pregunta esté cerrada (antes solo se veía la primera). Así Google y los asistentes las pueden leer.
- `/glosario` tiene 27 términos, incluidos integración de IA, aplicaciones y desarrollo asistido, además de Mi DT, F30, F30-1, PJUD, OCR, RAG y UF, con marcado `DefinedTermSet` y fuentes oficiales cuando corresponden.
- Dos guías nuevas con fuentes de la Dirección del Trabajo:
  - "Registro de contratos y términos en Mi DT: plazos y cómo hacerlo a volumen".
  - "Certificados F30 y F30-1: qué son, en qué se diferencian y cómo obtenerlos".
- Enlaces internos: guías relacionadas en el FAQ de cada producto, producto relacionado al final de las guías, y glosario en el menú Recursos y en el footer.
- Títulos y H1 con las palabras que la gente busca:
  - SADT: "Automatiza el Portal Mi DT".
  - AXIS: "Consulta causas penales en PJUD".
  - OCR Master y los cuatro servicios tienen títulos y descripciones nuevos.

**Datos estructurados (schema.org)**
- Organización con razón social, descripción, temas de especialidad (`knowsAbout`) y catálogo de productos. También puede llevar perfiles oficiales (`sameAs`), que se completan en `src/config/entity.ts`.
- SADT y AXIS usan `SoftwareApplication`, con funciones, público y planes en UF (código CLF).
- OCR usa `Service` y OCR Master usa `WebAPI` con planes en USD.
- Además: `FAQPage` en cada producto, `Blog` y `BlogPosting` con fuentes citadas, `ItemList` en /productos y `DefinedTermSet` en /glosario.

**Técnico**
- `robots.txt` permite explícitamente a los buscadores y asistentes de IA vigentes:
  - OAI-SearchBot y ChatGPT-User (OpenAI).
  - Claude-SearchBot y Claude-User (Anthropic).
  - PerplexityBot y Perplexity-User (Perplexity).
  - Bingbot, Applebot, Google-Extended, DuckAssistBot, MistralAI-User y Meta.
  - Los bots de entrenamiento (GPTBot, ClaudeBot) también quedan permitidos. Si prefieres no aportar a entrenamiento, puedes bloquearlos sin perder visibilidad en búsqueda.
- `/llms.txt` (mapa del sitio) y `/llms-full.txt` (todo el contenido en Markdown) se generan solos desde la configuración, así que no quedan desactualizados. Es un estándar experimental: Google no lo usa y no hay evidencia sólida de que mejore la visibilidad, pero cuesta poco mantenerlo.
- IndexNow para avisar a Bing de páginas nuevas:
  - La clave queda en `public/834a5b308e3657224abf43d65dee4926.txt`.
  - Después de cada despliegue se ejecuta `npm run indexnow`.
- Verificación de Search Console y Bing: definir `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` y `NEXT_PUBLIC_BING_SITE_VERIFICATION` en `apphosting.yaml`.
- Otros ajustes: `lang="es-CL"`, fecha de actualización visible en productos y glosario, sitemap con /glosario y con las imágenes del blog.

## Activación y trabajo continuo fuera del sitio

1. **Google Search Console**:
   - Dominio verificado y sitemap enviado; solicitudes de indexación de las páginas principales confirmadas por el propietario.
   - Revisar el informe de páginas indexadas y el de consultas.
2. **Bing Webmaster Tools**:
   - Sitio importado y sitemap enviado; pendiente revisar sus informes tras procesamiento.
   - Correr `npm run indexnow` después de cada despliegue.
   - Es la puerta de entrada a Copilot y a gran parte de ChatGPT Search.
3. **Google Business Profile**: no se crea para la modalidad actual de YAGO; el propietario confirmó atención exclusivamente remota, sin recepción presencial ni visitas a clientes para prestar servicios.
4. **LinkedIn de empresa y autor**: perfiles proporcionados e incorporados. Mantener descripciones consistentes con la oferta y experiencia reales.
5. **Menciones en otros sitios**, que aportan corroboración externa y oportunidades de descubrimiento:
   - Directorios de software (G2, Capterra, GetApp).
   - Gremios de RRHH y de servicios transitorios.
   - Notas o columnas en medios de RRHH y negocios de Chile.
   - Webinars con partners como Workges.
   - Casos publicados con permiso del cliente.
6. **Casos reales**: recopilación y reseñas a cargo del propietario. Publicar datos y citas autorizados con contexto; aportan evidencia original útil como referencia.
7. **Autoría**:
   - Firma de Nicolas Yarur y perfil público implementados desde `EDITORIAL_AUTHOR` y `BLOG_AUTHOR`.
   - Página "Nosotros" con biografía, especialidad y enlaces a perfiles oficiales.
8. **Publicar una guía útil cada dos semanas**, respondiendo preguntas reales de clientes. Ideas:
   - Cómo registrar anexos de contrato en Mi DT.
   - Qué revisar antes de pagar a un contratista.
   - Cómo calcular el costo de digitar facturas.
   - OCR de facturas electrónicas y de PDFs escaneados.
9. **Medir cada mes**:
   - Revisar preguntas de automatización empresarial, integración de IA, desarrollo de aplicaciones y OCR en Chile, definidas en `docs/seguimiento-geo.csv`.
   - Anotar si aparece YAGO y qué fuente citan.
   - En analítica, filtrar las visitas que vienen de chatgpt.com, perplexity.ai y copilot.microsoft.com.

## Qué revisar cuando cambie algo

- Precios: se actualizan solos desde `src/config/automation-pages.ts` y `src/config/ocr-master.ts`.
- Plazos y trámites de la DT: revisar las guías y el glosario si cambia la normativa, y actualizar `ENTITY.contentUpdated`.
- Productos nuevos: agregarlos en `key-facts.ts`, en el sitemap y en `llms.ts`.

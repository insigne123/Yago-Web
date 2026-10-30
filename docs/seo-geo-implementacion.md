# SEO y GEO de YAGO · implementación y siguiente fase

Fecha: 3 de octubre de 2026. Mercado prioritario: Chile.

**Publicación:** versión SEO/GEO desplegada en Firebase App Hosting `automata-ai/studio` y comprobada en `https://yago.cl`. IndexNow aceptó 47 URLs. GA4 está activo con `G-DSNXKXMCKX`, con visitas y navegación SPA comprobadas. Resend está conectado a su versión 1 y la prueba real del formulario fue aceptada con respuesta 200. Activación de Search Console, Bing y campaña de clientes: `docs/activacion-yago.md`.

## Objetivo y contexto

Captar diagnósticos y oportunidades B2B de automatización empresarial, integración de IA, aplicaciones y software a medida, agentes y OCR. El público son responsables de gerencia, tecnología, operaciones y finanzas que investigan soluciones o comparan proveedores en Google, Bing y asistentes de IA.

Promesa: conectar IA, datos y sistemas con un alcance verificable. CTA principal: agendar diagnóstico. Objeciones: alcance, costo, integraciones, calidad, accesos y operación. Evidencia: productos existentes, conocimiento técnico y casos y testimonios autorizados que aporten los clientes. Métrica principal: oportunidades calificadas por servicio; clics y menciones son indicadores previos.

## Mapa de intención y páginas

Son familias iniciales de búsquedas, no estimaciones de volumen. Validar demanda y consultas reales con Search Console y datos comerciales.

| Intención | URL principal | Contenido de apoyo |
| --- | --- | --- |
| Automatización de procesos con IA para empresas en Chile | `/servicios/automatizacion-procesos` | Selección de proveedor y ROI |
| Integración e implementación de IA en procesos empresariales | `/servicios/integracion-ia` | Integrar IA sobre sistemas existentes |
| Desarrollo de apps y software con IA, y desarrollo asistido por IA | `/servicios/apps-automatizacion` | Diferencias, entregables y evaluación |
| Agentes, asistentes y chatbots empresariales | `/servicios/agentes-ia` | Guía de agentes, RAG y fuentes |
| OCR, extracción y digitalización de documentos | `/ocr` | Evaluación del piloto y guía de OCR |
| Flujo documental completo | `/soluciones/automatizacion-documental` | Recepción, extracción, validación, aprobación y carga |
| API de lectura de documentos | `/ocr-master` | Uso técnico de la API |
| Empresa y capacidades | `/nosotros` | Autoría y perfiles oficiales |

Las expresiones que responden a una misma necesidad se cubren en una página. Los productos específicos sirven como ejemplos de implementación; el posicionamiento general se apoya en servicios.

## Primera fase preparada en el repositorio

- Home y navegación centradas en servicios empresariales.
- Dos nuevos servicios y ampliación de automatización, apps y OCR.
- Resúmenes, ejemplos, factores de costo, FAQs y enlaces internos.
- Cuatro guías con tablas y fuentes técnicas; las 12 guías del blog llevan la firma de Nicolas Yarur.
- Página de empresa con su biografía y LinkedIn profesional, además del LinkedIn oficial de YAGO y Clutch.
- Modelo de testimonios y casos con publicación explícita, atribución y contexto de métricas.
- Campos pendientes de clientes y resultados excluidos de las páginas públicas.
- Grafo de entidad y catálogo alineados con servicios; sitemap y Markdown derivados de configuración.
- Formulario con categorías de interés y eventos por servicio.

### Archivos de edición

| Información | Archivo |
| --- | --- |
| Servicios, FAQs, alcance y guías relacionadas | `src/config/services.ts` |
| Home y opciones de interés | `src/config/home.ts` |
| Empresa y perfiles oficiales | `src/config/entity.ts` |
| Personas reales del equipo | `src/config/team.ts` |
| Artículos y autor/revisor responsable | `src/config/blog.ts` |
| Casos y testimonios autorizados | `src/config/evidence.ts` |

`BLOG_AUTHOR` utiliza el perfil real `EDITORIAL_AUTHOR` de `src/config/team.ts`: Nicolas Yarur, con experiencia en desarrollo de soluciones y automatizaciones empresariales con IA e integración en ambientes empresariales. Nombre, especialidad y biografía visibles, metadatos de autor y marcado `Person` comparten esa fuente. El perfil interno es `/nosotros#nicolas-yarur`; su `sameAs` profesional es `https://www.linkedin.com/in/nicolas-yarur/`. La organización conserva su propia identidad y perfiles: LinkedIn de empresa `https://www.linkedin.com/company/yago-spa` y Clutch. El campo opcional `jobTitle` se completa cuando se dispone de un cargo formal confirmado; la especialidad actual describe la experiencia proporcionada.

## Activación en producción · responsable: propietario de YAGO

1. Publicar el despliegue con los cambios y comprobar las URLs principales.
2. Verificar la propiedad de dominio en Google Search Console mediante DNS. Enviar `https://yago.cl/sitemap.xml`, inspeccionar las páginas y revisar la URL canónica elegida e indexación.
3. Verificar/importar el sitio en Bing Webmaster Tools y enviar el sitemap. Revisar indexación y el informe AI Performance cuando tenga datos.
4. Registrar el dominio en la herramienta analítica y configurar las variables públicas del despliegue. `.env.example` documenta los nombres; no sustituye las cuentas ni el registro del dominio.
5. Si se verifica por metaetiqueta, configurar `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` o `NEXT_PUBLIC_BING_SITE_VERIFICATION` antes de construir. La propiedad de dominio de Google utiliza DNS, no esa metaetiqueta.
6. Después del despliegue, enviar URLs nuevas/cambiadas mediante `npm run indexnow` o `npm run indexnow -- /servicios/integracion-ia /servicios/agentes-ia /nosotros`. El script existente notifica a buscadores participantes; no garantiza indexación y no sustituye el sitemap.
7. Comprobar que CDN, alojamiento y reglas de bots permiten a los rastreadores de búsqueda acceder al contenido. `robots.txt` por sí solo no demuestra rastreo efectivo.

### Analítica

La integración de GA4 se activa mediante `NEXT_PUBLIC_GA_MEASUREMENT_ID`. Usa la etiqueta de Google con vistas SPA gestionadas por el historial en Medición mejorada; no hay un segundo emisor manual de `page_view`. `generate_lead` se emite solo al completar el envío. Configuración, dimensiones y verificación en `docs/activacion-yago.md`.

El sitio utiliza integración manual con Plausible, condicionada a `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`. El script predeterminado es `script.manual.js`; script y endpoint pueden configurarse para una instalación propia. Revisar en producción que se registra una sola vista por navegación y que el proveedor recibe los eventos.

Eventos a configurar como objetivos:

- `Contact Form Success`: solicitud enviada correctamente; propiedad `service`.
- `Service CTA Primary`: clic al diagnóstico; propiedades `service` y `location`.
- `Home Servicio`: selección de servicio en la home.
- `CTA Agendar Sesion` y `CTA WhatsApp`: clics a esos canales.

Un clic al calendario no confirma una reunión. Registrar la reunión efectiva, calificación, oportunidad y contrato en el seguimiento comercial. El formulario conserva atribución first/last touch y UTM para el correo del lead. No enviar nombres, correos o mensajes del cliente como propiedades analíticas.

Referrals de IA: revisar `chatgpt.com`, `perplexity.ai`, `copilot.microsoft.com` y UTM disponibles. La atribución puede ser incompleta; preguntar el origen en la conversación comercial. El tráfico de las funciones de IA de Google se incluye en Search Console como búsqueda Web y no debe presentarse como un canal independiente medido por el sitio.

## Segunda fase · propietario y clientes

Seguir `docs/kit-clientes-resenas.md` y usar `docs/seguimiento-clientes.csv`.

1. Confirmar razón social, datos corporativos y perfiles oficiales.
2. Completar LinkedIn y evaluar el perfil gratuito de Clutch para los servicios B2B.
3. Confirmar atención presencial/visitas a clientes antes de crear Google Business Profile. Una operación exclusivamente online no es elegible.
4. Invitar a clientes con proyectos realizados a compartir una experiencia honesta y específica.
5. Recopilar testimonios autorizados y dos casos con resultados y método de medición, según la información disponible.
6. Pedir publicaciones en webs de clientes sobre el proyecto, con un enlace pertinente al caso o servicio.
7. Incorporar las entradas autorizadas en `evidence.ts` y volver a desplegar. Casos, enlaces, sitemap y contenido Markdown se actualizan a partir de esa fuente.

## Seguimiento SEO y GEO

- Línea base: consultas sin marca, impresiones, clics y páginas que generan contactos.
- Negocio: solicitudes, reuniones efectivas, oportunidades y contratos por servicio y origen.
- GEO: menciones, URLs citadas, precisión de las descripciones y referrals.
- Revisar las 20 preguntas de `docs/seguimiento-geo.csv` en sesiones nuevas, con búsqueda activada cuando exista; registrar fecha, motor y modelo. Mantener las mismas condiciones y observar tendencias, no un puesto fijo.
- No atribuir un cambio de visibilidad únicamente a las reseñas: contenido, indexación y distribución también cambian durante la campaña.

## Verificación de la implementación

Verificado localmente el 3 de octubre de 2026: tipado, compilación de producción mediante el servidor de Playwright, rutas y metadata, definiciones/FAQ en HTML, navegación móvil, formulario con API simulada y atribución por servicio. La revisión de accesibilidad detectó el desplazamiento por teclado de las tablas; se corrigió y las 18 comprobaciones de accesibilidad/rutas afectadas pasaron en la repetición. También se revisaron home, servicios, integración y guía de desarrollo en escritorio y móvil, sin desbordamiento horizontal en esas vistas.

Comprobar tipado, compilación y pruebas pertinentes de rutas, metadata, JSON-LD, navegación móvil y formulario. Las pruebas de envío deben simular la API para no enviar correos de prueba a producción.

Revisar rendimiento móvil en el despliegue con PageSpeed Insights y datos de campo disponibles. Objetivos de Core Web Vitals: LCP ≤ 2,5 s, INP ≤ 200 ms y CLS ≤ 0,1. Las comprobaciones locales no certifican esas métricas en condiciones reales.

`llms.txt` y `llms-full.txt` son complementos experimentales. Las páginas indexables, contenido visible, evidencia y enlaces son la base. Permitir bots de entrenamiento no es un requisito para aparecer en búsqueda de IA.

## Fuentes

- Google, funciones de IA: https://developers.google.com/search/docs/appearance/ai-features?hl=es
- OpenAI, acceso para búsqueda: https://help.openai.com/en/articles/12627856-publishers-and-developers-faq
- Bing, AI Performance: https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- Google, elegibilidad del Perfil de Empresa: https://support.google.com/business/answer/3038177?hl=es

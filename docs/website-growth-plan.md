# Plan maestro de mejora web, SEO y descubrimiento IA de YAGO

Estado: en ejecucion

Responsable tecnico: equipo YAGO

Mercado prioritario asumido: Chile, con expansion posterior a LATAM

Conversion primaria asumida: solicitar o agendar un diagnostico operativo

## 1. Proposito

Convertir yago.cl en un sitio que:

1. Explique en pocos segundos que hace YAGO, para quien y con que resultado.
2. Permita encontrar la solucion correcta sin conocer los nombres internos de los productos.
3. Genere reuniones y leads B2B cualificados con trazabilidad de origen.
4. Construya autoridad organica en automatizacion de procesos, OCR y operaciones empresariales en Chile.
5. Sea facil de rastrear, comprender y citar por Google, Bing y asistentes de IA.
6. Mantenga una identidad premium, sobria, accesible y rapida.

No se publicaran cifras, clientes, testimonios, integraciones o identidades legales que no puedan verificarse. La optimizacion para asistentes de IA no garantiza menciones: mejora la rastreabilidad, claridad, autoridad y capacidad de citacion.

## 2. Objetivos y metricas

### Objetivo comercial

- Conversion principal: diagnostico operativo solicitado o agendado.
- Conversion secundaria: formulario cualificado de OCR, SADT, AXIS, producto o servicio.
- Indicador principal: reuniones cualificadas originadas en busqueda organica.

### Indicadores SEO

- Impresiones y clics organicos sin marca.
- Consultas en posiciones 1-3, 4-10 y 11-20.
- Porcentaje de URLs validas e indexadas.
- CTR organico por plantilla.
- Backlinks, menciones de marca y dominios de referencia.
- Cero canonicals incorrectos y cero enlaces internos rotos.

### Indicadores de descubrimiento IA

- Referidos desde ChatGPT, Perplexity, Gemini, Claude y Copilot.
- Rastreo confirmado de bots de busqueda IA en logs cuando la plataforma lo permita.
- Menciones o citas de YAGO en un conjunto mensual estable de consultas.
- Numero de paginas con autor, fecha, fuentes y datos estructurados validos.

### Indicadores de experiencia y rendimiento

- LCP p75 menor a 2.5 segundos.
- INP p75 menor a 200 milisegundos.
- CLS p75 menor a 0.1.
- Contraste WCAG AA y cero errores criticos de accesibilidad automatizada.
- Navegacion completa por teclado, mobile y zoom 200%.
- Tasa de conversion y abandono por plantilla.

Los objetivos porcentuales se fijaran despues de obtener una linea base de 28 dias.

## 3. Principios de producto y contenido

1. Cada pagina tiene un trabajo y una conversion principal.
2. La jerarquia y la claridad ganan sobre los efectos decorativos.
3. El visitante elige por problema, proceso o area, no por jerga interna.
4. Las respuestas importantes aparecen antes que la explicacion extensa.
5. La evidencia verificable gana sobre las afirmaciones grandilocuentes.
6. El contenido se escribe para escaneo humano y extraccion semantica.
7. Chile se fortalece antes de clonar paginas genericas para otros paises.
8. El rendimiento, la accesibilidad y la medicion son parte del diseno.

## 4. Direccion visual

### Identidad

- Base institucional: `#070b13`.
- Texto principal oscuro o blanco segun superficie.
- Texto secundario: escala slate con contraste AA.
- Acento principal y unico de alta energia: `#7dd3fc`.
- Superficies editoriales claras para lectura extensa.
- Hero, navegacion y cierres con expresion institucional oscura.
- Sin gradientes morados, fucsias o multicolor como lenguaje principal.

### Tipografia y lectura

- Mantener Instrument Sans para titulares y Manrope para cuerpo.
- Reducir pesos descargados a los que se usan realmente.
- Cuerpo base minimo de 16 px e interlineado de 1.5 a 1.7.
- Ancho editorial objetivo de 60 a 75 caracteres.
- Un solo `h1` por pagina y jerarquia secuencial de headings.
- Parrafos cortos, subtitulos descriptivos, listas y tablas cuando ayuden.

### Componentes

- Un CTA primario por viewport y un secundario visualmente mas quieto.
- Un unico lenguaje de tarjetas, bordes, radios y sombras.
- Estados hover, active, focus y disabled consistentes.
- Botones con respuesta tactil sutil y sin desplazamientos de layout.
- Breadcrumbs en plantillas internas.
- Menu movil desplazable, con ruta actual y cierre accesible.
- Movimiento limitado a elementos que explican estado o jerarquia.
- `prefers-reduced-motion` debe retirar desplazamientos y loops decorativos.

## 5. Arquitectura de informacion objetivo

### Navegacion principal

1. Soluciones: rutas por problema o area.
2. Productos: OCR, SADT, AXIS y productos propios publicados.
3. Servicios: automatizacion a medida, aplicaciones, web y capacitacion.
4. Casos: implementaciones y resultados verificables.
5. Recursos: blog, guias y preguntas frecuentes.
6. CTA persistente: solicitar diagnostico.

### Rutas objetivo

- `/`: posicionamiento y enrutamiento.
- `/soluciones`: indice por problema.
- `/soluciones/[slug]`: intencion de busqueda especifica.
- `/productos`: indice unificado de productos.
- `/productos/[slug]`: demo de producto.
- `/ocr`, `/sadt`, `/axis`: landings especializadas.
- `/servicios` y `/servicios/[slug]`: servicios profesionales.
- `/casos` y futuras rutas de caso: evidencia.
- `/proceso`: metodologia de implementacion.
- `/blog` y `/blog/[slug]`: autoridad editorial.
- `/privacidad` y `/terminos`: confianza legal.

### Home objetivo

1. Hero: resultado, audiencia, diferenciador, prueba y CTA.
2. Evidencia comercial con contexto verificable.
3. Selector de necesidad o proceso.
4. Tres familias principales de soluciones.
5. Caso destacado con metodologia y metricas verificables.
6. Proceso de trabajo en cuatro pasos.
7. Productos disponibles.
8. Seguridad, integraciones y control operativo.
9. Preguntas frecuentes.
10. CTA final.

Se eliminaran o fusionaran secciones que respondan la misma pregunta.

## 6. SEO tecnico

### Metadata

- Titulo, descripcion y canonical unicos por URL indexable.
- Open Graph y Twitter especificos por pagina o plantilla.
- URL e imagen social correctas en cada documento.
- Metadata base sin canonical global heredable.
- Idioma `es-CL` cuando corresponda y contenido visible coherente.

### Rastreo e indexacion

- Sitemap con fechas reales o estables, no la fecha de cada build.
- Robots que permita buscadores generales y bots de busqueda IA elegidos.
- Rutas privadas o de prueba con `noindex` y sin inclusion en sitemap.
- Paginas 404 y error utiles.
- Search Console y Bing Webmaster Tools verificados externamente.
- IndexNow se evaluara despues de activar Bing Webmaster Tools.

### Datos estructurados

- Grafo conectado mediante `@id`.
- `Organization` y `WebSite` globales.
- `ProfessionalService` solo con datos verdaderos.
- `Service` para servicios y soluciones.
- `SoftwareApplication` y `Offer` para productos cuando corresponda.
- `BlogPosting` con autor, fechas e imagen.
- `BreadcrumbList` en paginas internas.
- `FAQPage` solo cuando las preguntas sean visibles en la pagina.

### Calidad tecnica

- Build no debe ignorar errores TypeScript o ESLint.
- Tests de canonical, OG, Twitter, JSON-LD, sitemap y robots.
- Cero anclas o enlaces internos inexistentes.

## 7. Estrategia editorial y autoridad

### Clusters iniciales

1. Automatizacion de procesos con IA en Chile.
2. OCR con IA para empresas.
3. Automatizacion de Portal DT.
4. Monitoreo automatizado de causas PJUD.
5. Integracion de sistemas empresariales, solo para integraciones reales.

### Estructura de pagina citable

1. Respuesta directa de 40 a 80 palabras.
2. Para quien es.
3. Problema que resuelve.
4. Como funciona.
5. Datos y documentos necesarios.
6. Integraciones verificadas.
7. Seguridad, retencion y control humano.
8. Plazos, alcance y precio cuando aplique.
9. Evidencia o caso.
10. Preguntas frecuentes.
11. Fuentes y fecha de revision.
12. CTA contextual.

### Casos

La plantilla de casos debe admitir:

- Cliente o razon de anonimato.
- Problema, baseline y volumen.
- Solucion e integraciones.
- Tiempo de implementacion.
- Resultado medido y metodologia.
- Testimonio aprobado.
- Fecha y responsable.

No se inventaran resultados para completar la plantilla.

### Autoria y fuentes

- Modelo editorial con autor, rol, fecha de publicacion y modificacion.
- Revisor especializado cuando el tema sea legal, laboral o regulatorio.
- Fuentes oficiales enlazadas en afirmaciones sensibles.
- Diferenciar evidencia propia, estimaciones y referencias externas.

## 8. Descubrimiento en asistentes de IA

1. Consolidar la entidad YAGO con datos consistentes y perfiles oficiales.
2. Producir respuestas breves, definiciones, tablas y pasos autocontenidos.
3. Publicar evidencia original y casos verificables.
4. Conectar contenido relacionado mediante enlaces descriptivos.
5. Exponer autor, fechas, fuentes y alcance de cada pieza.
6. Mantener contenido principal renderizado en servidor.
7. Revisar acceso de bots de busqueda IA de acuerdo con privacidad y estrategia.
8. Crear `llms.txt` como mapa auxiliar despues de ordenar la arquitectura.
9. No presentar `llms.txt` ni schema como factores garantizados de ranking.

## 9. Conversion, confianza y medicion

### Conversion

- Home y soluciones: diagnostico operativo.
- Productos: solicitar demo.
- OCR, SADT y AXIS: formulario cualificado.
- Servicios: evaluacion del caso.
- Blog: CTA relacionado con el tema.

### Formularios

- Labels accesibles y mensajes de error especificos.
- Consentimiento y enlace a privacidad.
- Estado de envio, confirmacion y siguiente paso.
- Pagina o estado de agradecimiento medible.
- `lead_id` para conectar analitica, email, webhook y CRM.
- Conservar UTM, referrer y click IDs.
- Verificar respuesta no-2xx de webhooks.
- Rate limiting y proteccion anti-bot en endpoints publicos.

### Eventos minimos

- Pageview.
- CTA principal y secundario.
- Inicio de formulario.
- Error de validacion.
- Envio correcto o fallido.
- Agenda abierta.
- Reserva completada cuando el proveedor lo permita.

Se usara un proveedor de eventos coherente. La analitica de trafico no sustituye un sistema de funnels.

## 10. Rendimiento

- Migrar imagenes de contenido a `next/image`.
- Generar composiciones con relacion de aspecto correcta.
- Comprimir a WebP/AVIF y retirar activos sin uso.
- Reducir hidratacion global y animaciones Framer Motion repetidas.
- Cargar widgets solo donde apoyen la conversion.
- Reducir pesos de fuentes.
- Acotar middleware a rutas necesarias.
- Medir Web Vitals reales por plantilla y dispositivo.
- Definir presupuesto de JS, fuentes e imagenes.

## 11. Accesibilidad y navegacion

- `main#main-content` en todas las paginas publicas.
- Un `h1` real y headings secuenciales.
- Labels accesibles en todos los campos.
- Contraste AA, foco visible y orden de tabulacion logico.
- Sheets y menus con scroll en pantallas bajas.
- `aria-current` en navegacion.
- Texto de controles en espanol.
- `prefers-reduced-motion` completo.
- Pruebas a 320x568, 390x844, 768, 1024 y 1440 px, y zoom 200%.

## 12. Pruebas y entrega continua

- Typecheck y build obligatorios.
- Playwright contra build de produccion.
- Chromium desktop, mobile y al menos un motor adicional cuando CI lo permita.
- Smoke de rutas principales.
- Navegacion y menu movil.
- Formularios con backend simulado o entorno de prueba.
- Accesibilidad automatizada por plantilla.
- SEO tecnico y JSON-LD.
- Enlaces internos y anclas.
- 404 y estados de error.
- Regresion visual de plantillas clave.
- Lighthouse o presupuesto equivalente en CI.

## 13. Fases de ejecucion

### Fase 0: estabilizacion

- [x] Unificar gestor de paquetes y lockfile.
- [x] Reducir archivos incluidos en Firebase App Hosting.
- [x] Validar typecheck y build local.
- [ ] Desplegar y verificar rutas actuales.
- [ ] Confirmar funcionamiento real de formularios y analitica.

Criterio de aceptacion: build reproducible, despliegue exitoso y rutas clave con HTTP 200.

### Fase 1: arquitectura y navegacion

- [x] Unificar nomenclatura de productos.
- [x] Crear indices de productos y casos.
- [x] Resolver rutas y anclas huerfanas.
- [x] Simplificar home y navegacion.
- [x] Agregar breadcrumbs y estados activos.
- [x] Crear 404, error y terminos.

Criterio de aceptacion: cualquier oferta publica se alcanza en tres clics o menos y no hay enlaces internos rotos.

### Fase 2: sistema visual y accesibilidad

- [x] Aplicar dark premium total (`#070b13`, texto Mist, unico acento `#7dd3fc`).
- [x] Unificar componentes y CTA (primario blanco, secundario quieto).
- [x] Corregir headings, labels, contraste, focus y mobile sheets.
- [x] Reducir movimiento y respetar preferencias.
- [x] Eliminar acentos fuera de marca (indigo, ambar, esmeralda, fucsia, violeta).

Criterio de aceptacion: lectura y navegacion correctas en desktop, mobile, teclado y zoom 200%.

### Fase 3: SEO tecnico

- [x] Metadata por plantilla.
- [x] Canonical, OG y Twitter correctos.
- [x] Sitemap, robots y manifest coherentes.
- [x] Schema conectado y breadcrumbs.
- [x] Tests SEO automaticos.

Criterio de aceptacion: todas las URLs indexables declaran metadata y schema validos y coherentes.

### Fase 4: contenido y GEO

- [x] Modelo de autor, fuentes y fechas.
- [x] Respuestas directas y contenido citable.
- [x] Clusters Chile y enlazado interno.
- [x] Plantilla de casos verificables.
- [x] `llms.txt` auxiliar.

Criterio de aceptacion: paginas prioritarias explican entidad, alcance, fuentes y siguiente paso sin depender de contenido oculto.

### Fase 5: conversion y medicion

- [x] CTA principal consistente.
- [x] Formularios accesibles y cualificados.
- [x] Atribucion completa y `lead_id`.
- [x] Eventos implementados y cubiertos por pruebas de los flujos principales.
- [x] Privacidad, consentimiento y terminos coherentes.

Criterio de aceptacion: cada conversion puede trazarse desde la fuente hasta el resultado del formulario.

### Fase 6: rendimiento

- [x] Imagenes y fuentes optimizadas.
- [x] Hidratacion y widgets reducidos.
- [ ] Web Vitals instrumentados.
- [ ] Presupuestos establecidos.

Criterio de aceptacion: no hay regresiones y las plantillas prioritarias cumplen los objetivos CWV en p75 cuando haya datos suficientes.

### Fase 7: pruebas, publicacion y observacion

- [x] Suite completa verde.
- [x] Revision local de diff y referencias a secretos.
- [ ] Commit y push.
- [ ] Deploy Firebase.
- [ ] Smoke de produccion.
- [ ] Solicitar reindexacion de URLs prioritarias externamente.
- [ ] Observar 28 dias y priorizar siguiente ciclo con datos.

Criterio de aceptacion: produccion estable, medible e indexable.

## 14. Dependencias externas y datos pendientes

Estos elementos requieren confirmacion del negocio y no deben inventarse:

- Razon social, RUT y responsable legal del tratamiento.
- Direccion o definicion formal de operacion remota.
- Perfiles oficiales para `sameAs`, especialmente LinkedIn.
- Permisos para publicar nombres, logos y testimonios de clientes.
- Metricas verificables de casos.
- Fuentes y revision profesional para contenido legal o regulatorio.
- Credenciales de email, analitica, Search Console, Bing y CRM.
- Integraciones realmente soportadas y mercados LATAM activos.
- Rate limiting compartido antes de aumentar `maxInstances`; el limite local actual es una defensa complementaria, no una cuota distribuida.
- Migracion de los scripts de desarrollo desde `@genkit-ai/googleai` al SDK `@genkit-ai/google-genai` recomendado.

La implementacion tecnica puede dejar campos y estructuras preparadas, pero la publicacion de esos datos queda bloqueada hasta recibir evidencia.

## 15. Registro de ejecucion

| Fecha | Fase | Estado | Evidencia |
| --- | --- | --- | --- |
| 2026-09-01 | Plan maestro | En ejecucion | Documento creado a partir de auditoria estatica del repositorio |
| 2026-09-01 | Fases 0 a 6 | Implementacion local terminada | Arquitectura, visual, SEO, GEO, conversion, privacidad, seguridad y rendimiento actualizados |
| 2026-09-01 | Dependencias | Runtime validado | `npm ci` reproducible y `npm audit --omit=dev` con 0 vulnerabilidades; el audit completo conserva hallazgos transitivos de Genkit CLI/OpenTelemetry usados en desarrollo |
| 2026-09-01 | Pruebas | Verde | Next 15.5.25, build de 43 paginas, typecheck y Playwright: 61 passed, 1 mobile-only skipped en desktop |
| 2026-09-11 | Parte 1 (trial+GEO+OG) | Desplegada | Commit `06d8d80`: eliminado trial OCR (API, pagina OCR-TEST, componente, env var); robots con 8 bots IA; `llms.txt` enriquecido; bloque Otros servicios; FAQs con fecha de revision; 4 OG por plantilla en estilo oscuro. Build 42 paginas, typecheck y Playwright 65 passed/1 skipped. Rollout App Hosting completo; smoke: trial en 404, robots/llms/OG nuevos en 200 y verificados en contenido |
| 2026-09-11 | Parte 2 (dark premium) | Desplegada | Commit `38ec36c`: dark premium total (`#070b13`/Mist, unico acento sky; fuera indigo/ambar/esmeralda/fucsia/violeta). Migrados Navbar, Hero, 14 secciones, 10 plantillas, formularios, 404/error y tokens. Build 42 paginas, typecheck y Playwright 65 passed/1 skipped con a11y limpio; screenshots desktop/mobile/`/ocr` revisados. Rollout App Hosting completo; smoke 16x200, trial en 404 y contact 400 |
| 2026-09-01 | Publicacion | Pendiente | Requiere verificar secretos de correo y OCR antes del smoke real |
| 2026-09-11 | Publicacion | Desplegada, formularios pendientes de credenciales | Commit `28e6630` en `origin/main`; Vercel publico el commit con exito. Rollout manual a Firebase App Hosting `automata-ai/studio` completado con `deploy --only apphosting` (el backend no tiene repo conectado). Smoke en `yago.cl`: 14 rutas/documentos en 200 (`/productos`, `/casos`, `/terminos`, `/llms.txt` incluidos) y home con el build nuevo verificada. `/api/contact`: 400 ante datos incompletos y 500 ante solicitud valida por falta de proveedor. Verificado en Secret Manager que no existe ningun secreto y que `.env.local` tampoco tiene valores: falta obtener `RESEND_API_KEY` (o SMTP completo) real para activar formularios |
| 2026-10-29 | Logo, UF y servicios | Desplegada (sin commit) | Isotipo SVG vectorizado del logo oficial (menú, footer, diagramas, blog), favicon/apple-touch/manifest e imagen de logo para JSON-LD (`npm run brand:assets`); imágenes OG con marca; UF con respaldo findic.cl/boostr.cl (mindicador.cl no responde); menú más opaco sobre secciones claras; "F30-1" sin cortes; sección de medición del home con método; títulos del blog ≤60; `/servicios/paginas-web` y `/servicios/capacitacion-ia` con contenido completo (~1.300 palabras, FAQ). Typecheck, build y Playwright 171 passed/5 skipped. Rollout App Hosting completo; smoke 21×200, UF "actualizada al 29-10-2026", IndexNow 200 con 14 URLs |
| 2026-10-29 | Auditoría IA | Desplegada (sin commit) | Nuevo servicio `/servicios/auditoria-ia` (~1.430 palabras, 4 etapas, 6 entregables, 7 FAQ, ilustración propia): "no necesitas llegar con una idea". Enlazado en menú y footer (primera opción), home (nota del hero, primera tarjeta, FAQ), formulario (opción `auditoria-ia`), `/servicios` (tarjeta principal y tabla "Cómo elegir"), glosario, entidad (`knowsAbout`), sitemap y `llms-full.txt`. Typecheck y Playwright verdes (catalog-discovery actualizado a 6 necesidades / 8 rutas). Rollout App Hosting completo; smoke 19×200 (incluye la imagen y `/?servicio=auditoria-ia`), IndexNow 200 con 7 URLs. Pendiente confirmar con el negocio: plazo típico, modelo de precio, NDA y "sin obligación de implementar con YAGO" |
| 2026-11-01 | Plan de visibilidad (parte 1) | Desplegada | Plan de 30 días en `docs/plan-visibilidad-noviembre-2026.md` y kit externo en `docs/kit-visibilidad-externa.md`. Contenido: 8 guías con FAQ y fuentes oficiales (4 nuevas: costo de digitalizar, validez legal de documentos digitalizados, control de contratistas, finiquito electrónico; 4 reescritas: digitalización de documentos, F30/F30-1, automatización de procesos, qué es un agente de IA); /ocr con título y sección de digitalización; FAQ en agentes-ia; 4 soluciones sin indexar con escenarios, guía y FAQ; 4 términos de glosario; columna Soluciones en el footer; lastmod real en /blog y /glosario. Herramientas: `npm run seo:daily`, `npm run seo:bing`, firebase-tools autodetectado. Tareas programadas: SEO diario 08:30, contenido diario 10:30 (publicación automática activada), GEO semanal lunes 11:30, cierre 1-12 y revisión de datos 4-1. Typecheck, build y Playwright verdes (catalog, ocr, seo-routes y visibilidad 136/136; suite completa 185 + ajustes). Rollout App Hosting completo; smoke 20×200, sitemap 52 URL, IndexNow 200 con 18 URL, sitemap reenviado a Google |
| 2026-11-01 | Frontend (auditoría de diseño) | Desplegada | Commit `0d61248` (rama de la sesión de frontend, unida a main por avance directo). Animaciones decorativas diferidas hasta la primera interacción (WebGL, Lenis, Motion y contadores), brillos del hero sin salto de diseño, CTA corto visible en móvil, índice plegable y diagnóstico temprano en guías, H1 de ProductHero ajustado para que el CTA de /ocr quede sobre el pliegue, consola con botón de pausa (WCAG 2.2.2). Medición local del home móvil (mediana): 61→83, TBT 467→286 ms, CLS 0,33→0. Auditoría en `docs/auditoria-frontend-2026-11.md`. Typecheck y Playwright 203 passed/5 skipped sobre main. Rollout App Hosting completo; smoke 10×200 y cambios verificados en producción |
| 2026-11-02 | Datos de la empresa y Workges | Desplegada | Razón social "Sociedad de Inversiones Yago SpA" y RUT 77.711.804-8 (tomados de las licitaciones de la empresa en Gmail) en `ENTITY`, JSON-LD (`legalName`, `taxID`, `alternateName` con "Yago SpA"), /nosotros y `llms.txt`. FAQ "¿Qué es el portal Workges y cómo se usa con SADT?" en /sadt para la búsqueda "portal workges" (posición 8,6; fuente getech.grupoexpro.com). `scripts/indexnow.mjs` corta rutas convertidas por Git Bash (respondían 422) y nuevo `scripts/seo/gsc-request-indexing.mjs` para pedir indexación desde el Chrome separado. Typecheck y build verdes. Rollout App Hosting completo, verificado en producción, IndexNow 200 con 5 URL |

| 2026-11-02 | Videos de YouTube y automatización de Google | Desplegada | Canal YAGO (@yago-cl, ex canal vacío de la cuenta) con portada, foto, descripción, vínculos y 3 videos públicos (F30 y Documentos como Shorts, SOF.IA horizontal). `VideoEmbed` (reproductor youtube-nocookie que carga al hacer clic, miniatura local en `public/videos`) y VideoObject en `/blog/certificados-f30-y-f30-1-diferencias`, `/blog/ocr-con-ia-digitalizar-documentos` y `/servicios/auditoria-ia`; YouTube en `sameAs`. Search Console: indexación solicitada para las 10 URL pendientes. `scripts/seo/cdp-connect.mjs` evita los bloqueos de Playwright en el Chrome separado. Typecheck y build verdes; videos y schema verificados en producción, reproducción probada en Chrome; IndexNow 200 |
| 2026-11-04 | FAQ de modernización de ERP | Desplegada | Propuesta de la tarea diaria del 3 de noviembre: pregunta "¿Qué alternativas tengo en Chile para modernizar el ERP, adoptar IA y cuidar la seguridad?" en `/servicios/automatizacion-procesos` (búsqueda en posición 6,4). Primer intento de despliegue falló por un corte de red al verificar permisos de IAM; el reintento funcionó. Typecheck y build verdes, `site.seo-routes` 41/41 en escritorio, verificada en producción, IndexNow 200 |
| 2026-11-04 | Página para grandes empresas y cambios para subir clics | Desplegada | `/grandes-empresas`: dónde encaja YAGO y cuándo conviene otro proveedor, y lo que revisan TI, seguridad y compras; enlazada en menú, pie, `/nosotros`, sitemap y llms. Guía de F30: título, descripción y encabezados según las preguntas que muestra Google. Descripciones nuevas en portada, `/ocr`, `/sadt`, agentes de IA y SOF.IA. Columna "Guías" en el pie y "Digitalización de documentos" en el menú. El reporte diario separa el total de las consultas visibles sin marca. Typecheck y build verdes, 141 pruebas correctas y 1 omitida en escritorio y móvil, verificado en producción. IndexNow 200 con 8 URL; Bing recibió 11 URL y lee 53 en el sitemap; Google aceptó el sitemap, con indexación solicitada para `/grandes-empresas` y nuevo rastreo para la guía de F30. Comparar clics el 1 de diciembre |

| 2026-11-04 | Guía de F30: qué es el F30-1 y oficinas | Desplegada | Propuesta de la tarea diaria del 4 de noviembre: sección "Qué es el certificado F30-1 y qué acredita" y preguntas "¿Qué es el F30?" y "¿Qué es el F30-1?" (búsquedas en posición 6 a 10). Corrección: "subvenciones" en vez de "subsidios", y "el F30 en línea se pide solo en Mi DT", porque el aviso de la DT dice que solo está en Mi DT, pero su página del trámite y ChileAtiende aún ofrecen la oficina por $2.500; la guía lo explica y cita ChileAtiende. Datos contrastados con las páginas de la DT. Typecheck y build verdes, 141 pruebas correctas y 1 omitida en escritorio y móvil, verificada en producción, IndexNow 200, nuevo rastreo solicitado en Google. El deploy terminó y luego la CLI de Firebase salió con un tiempo de espera (exit 2), sin efecto en el sitio. Al comparar clics el 1 de diciembre, este cambio queda mezclado con el nuevo título |

| 2026-11-05 | Planilla de F30, comparación de Mi DT e identidad para IA | Desplegada | Planilla Excel gratuita de control de F30 y F30-1 en la guía, con descarga medida. Nueva guía `/blog/automatizar-mi-dt-opciones-chile`, que compara 11 proveedores y la opción gratuita de la DT con datos de sus páginas públicas, y declara que la escribe YAGO. Identidad en `/nosotros`, datos estructurados y `llms.txt`: razón social, fundador, tamaño del equipo y aclaración de que YAGO no es Yapo.cl, por una auditoría de respuestas de IA del 4 de noviembre en que el modo IA de Microsoft confundió a YAGO con Yapo.cl y describió mal SADT, SOF.IA, AXIS y ANTON.IA. SADT declara alta rotación y aclara la sigla. Título del video de auditoría cambiado en YouTube. Typecheck y build verdes, pruebas de rutas, discovery y navegación correctas en escritorio y móvil, verificado en producción. IndexNow 200 con 8 URL; Bing recibió 12 URL y el sitemap; Google aceptó el sitemap con 54 URL y se solicitó indexar 4 páginas. Post de LinkedIn programado para el 6 de noviembre. La descripción de `/nosotros` quedó publicada con 161 caracteres; la versión corregida sale en el próximo despliegue |
| 2026-11-05 | Pregunta sobre empresas de digitalización en /ocr y año de fundación | Desplegada | Propuesta de la tarea diaria del 5 de noviembre, retomada porque /ocr recibe la mayoría de las visitas identificadas desde ChatGPT (5 de 12 en 28 días) y el único contacto del período. Nueva pregunta "¿Qué hacen las empresas de digitalización de documentos y cuál necesito?", con la Ley 18.845 y el DFL 4 de 1991 como fuentes, leídos en Ley Chile. Año de fundación 2024, confirmado por el dueño, en `/nosotros`, datos estructurados y `llms.txt`. Descripción de `/nosotros` acortada a 146 caracteres. |
| 2026-11-05 | "YAGO" en vez de "Yago SpA" en los textos descriptivos | Desplegada | La definición de `/nosotros`, un título de `llms.txt` y enlaces de `/axis` y guías decían "Yago SpA", que el resumen de IA de Google daba como razón social. Ahora dicen YAGO. Quedan igual la razón social, el nombre alternativo en datos estructurados, la aclaración "también conocida como Yago SpA", y los consentimientos y el pie de los formularios de opinión, que decide el dueño. |
| 2026-11-05 | Formulario en automatización de procesos | Desplegada | El dueño quiere captar empresas que buscan automatizar un proceso, y las páginas de servicio no tenían formulario: el botón principal llevaba al calendario, que GA4 no ve. `/servicios/automatizacion-procesos` ahora lleva a un formulario con el proceso a automatizar y "¿Cómo nos encontraste?", guarda la atribución y marca `generate_lead` con `form_type: service`. Se activa con `leadForm` en `src/config/services.ts`. Calendario y WhatsApp siguen junto al formulario. Envío real comprobado con una solicitud de prueba. |
| 2026-11-06 | Preguntas de empresas en automatización y guía de n8n en Chile | Desplegada | Siete preguntas nuevas en `/servicios/automatizacion-procesos`, tomadas de lo que pregunta un comprador real antes de automatizar: accesos, quién ve qué, caídas de portales, licencias, revisión humana, documentos y avisos. No nombran clientes. El plazo público sigue en 1–2 semanas. No se publicó "sin costo ni compromiso", la cotización en 5 horas ni experiencia con ERP específicos. La guía de n8n y Make ahora responde cómo partir en Chile, con fuentes de n8n y de la Ley 21.719, preguntas frecuentes y enlace al servicio; salía de la propuesta de la tarea diaria del 6 de noviembre. Typecheck y build verdes. Suite completa: 235 correctas, 5 omitidas y 4 fallos, 2 por una aserción de la prueba nueva, ya corregida, y 2 por demoras al cerrar el navegador de prueba; las 6 ejecuciones de esas pruebas pasaron al repetirlas. Verificada en producción, IndexNow 200. |
| 2026-11-09 | Guía de automatización de procesos con enlace temprano al servicio | Desplegada | Propuesta de la tarea diaria del 7 y 8 de noviembre, bloqueada por el permiso de despliegue y publicada a mano con aprobación del dueño. Para "automatización de procesos" (posición 27,3) Google muestra esta guía y no el servicio. Nueva segunda sección "Qué necesitas para automatizar un proceso en tu empresa", con enlace a `/servicios/automatizacion-procesos`, y pregunta "¿Quién puede automatizar los procesos de mi empresa?". Título, descripción y URL sin cambios. Typecheck y build verdes. Suite completa: 239 correctas, 5 omitidas y 2 fallos por demoras al cerrar el navegador de prueba en móvil; repetidas, pasaron. Verificada en producción, IndexNow 200. |
| 2026-11-11 | yago.cl y axis-legal.cl conectados | Desplegada | `/axis` enlaza a https://axis-legal.cl y lo declara en `sameAs`; `llms.txt` y la lista de productos mencionan el sitio. `/api/contact` acepta CORS solo desde axis-legal.cl, para el formulario nuevo de AXIS (asunto "[Contacto YAGO | AXIS]"). GA4 con linker entre ambos dominios, y `scripts/seo-report.mjs` filtra cada informe por `hostName` (agrega `axisOrganic` y `axisLeads`). El sitio de AXIS vive en `Yago-AXIS-WEB` (repositorio aparte, proyecto Firebase `axis-legal-cl`). Typecheck y build verdes. Suite completa: 243 correctas, 5 omitidas y 2 fallos por la fecha nueva de `/axis` en una prueba, ya actualizada; las 30 pruebas afectadas pasan. Verificado en producción: preflight CORS 204 con el origen de AXIS, una solicitud de prueba real desde axis-legal.cl llegó con la etiqueta de Gmail, IndexNow 200 y 202. |
| 2026-11-11 | Asistente de IA en el sitio web, en agentes de IA | Desplegada | Propuesta de la tarea diaria del 10 y 11 de noviembre, bloqueada por el permiso de despliegue y publicada a mano con aprobación del dueño. Nueva pregunta "¿Pueden poner un asistente de IA en el sitio web de mi empresa de servicios en Chile?" en `/servicios/agentes-ia` ("agentes de ia para empresas": 35 impresiones, posición 8,1). Typecheck y build verdes, suite completa 245 correctas y 5 omitidas, verificada en producción, IndexNow 200. |
| 2026-11-12 | Página para Latinoamérica y refuerzo de automatización y apps a medida | Desplegada | Nueva `/soluciones/automatizacion-latinoamerica` para Perú, Colombia, México y Ecuador (pedido del dueño): un escenario por país, trabajo remoto, apps a medida y facturas electrónicas en XML con fuentes oficiales abiertas (Resolución 117-2017/SUNAT, preguntas frecuentes DIAN, Anexo 20 SAT, facturación electrónica SRI). La plantilla de soluciones acepta `areaServed` y `sources`. `/servicios/automatizacion-procesos` y `/servicios/apps-automatizacion` suman preguntas sobre trabajo fuera de Chile, app a medida o software existente, y costo de una app; ambas enlazan a la página nueva. Organización, `llms.txt` y la respuesta sobre trabajo remoto nombran los cinco países. Datos por país (90 días) antes del cambio: Chile 85% de las impresiones, Perú 100, Colombia 138, México 120. Typecheck y build verdes, suite completa 247 correctas y 5 omitidas, verificada en producción, IndexNow 200. |

## 16. Definicion de terminado

El plan se considera tecnicamente ejecutado cuando:

1. Las fases 0 a 7 cumplen sus criterios de aceptacion verificables en repositorio y produccion.
2. Los elementos que dependan de datos del negocio quedan documentados y no contienen informacion inventada.
3. El sitio puede navegarse, rastrearse, medirse y convertirse sin rutas, metadata o formularios ambiguos.
4. Existe una linea base de 28 dias para iniciar el ciclo continuo de SEO, contenido y CRO.

## 17. Runbook de publicacion en Firebase App Hosting

Backend: proyecto `automata-ai`, backendId `studio` (`us-central1`). No tiene repositorio
conectado y ABIU esta deshabilitado: el push a GitHub NO autodespliega. El rollout es manual.

### Pre-despliegue

1. `npm ci`, `npm run typecheck`, `npm run build` y `npm run test:ui` en verde.
2. Confirmar secretos en App Hosting (solo nombres; nunca valores en el repo):
   - `RESEND_API_KEY` con remitente `RESEND_FROM` verificado, o SMTP completo
     (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `SMTP_FROM`).
   - `CONTACT_WEBHOOK_URL` y `CONTACT_WEBHOOK_TOKEN` si se usa webhook (opcional).
3. Declarar cada secreto en `apphosting.yaml` antes del rollout, por ejemplo:
   `variable: RESEND_API_KEY` con `secret: RESEND_API_KEY` y `availability: [RUNTIME]`.
4. Verificar que `.firebaseignore` excluye `.env*`, `brochure_*.html` y artefactos
   (`firepit-log.txt`, `test-results`, `playwright-report`).

### Despliegue

`npx -y firebase-tools@latest deploy --only apphosting --project automata-ai`

### Smoke post-deploy en `https://yago.cl`

- `/`, `/productos`, `/casos`, `/terminos` responden 200.
- `/robots.txt`, `/sitemap.xml` y `/llms.txt` responden 200.
- Envio de prueba del formulario de contacto: llega el correo y retorna `leadId`.

### Notas

- `maxInstances: 1`: el rate limit local es una defensa complementaria, no una cuota
  distribuida. Usar un limitador compartido antes de aumentar instancias.
- No commitear `.env.local` ni los `brochure_*.html`; permanecen solo locales.

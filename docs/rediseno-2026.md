# Rediseño yago.cl (septiembre 2026)

Todo el sitio usa ahora el mismo sistema visual: hero oscuro, secciones apiladas en blanco, gris claro (mist) y oscuro, tarjetas `y-card`, botones `y-btn` y un cierre oscuro con llamado a la acción.

## Qué cambió

- **Base visual** (`src/app/globals.css`, `tailwind.config.ts`, `src/app/layout.tsx`)
  - Tipografía: Instrument Sans para títulos y texto, Geist Mono para datos, folios y etiquetas (ambas con `next/font/google`).
  - Clases con prefijo `y-`: secciones (`y-dark`, `y-light`, `y-mist`, `y-sheet`), tipografía (`y-display`, `y-h2`, `y-eyebrow`, `y-lead`), botones (`y-btn` + `y-btn-primary | y-btn-glass | y-btn-ink | y-btn-outline`), tarjetas (`y-card`, `y-glass`, `y-spot`), efectos (`y-beam`, `y-grain`, `y-grid-bg`, `y-marquee`, `y-reveal`) y formularios (`y-field`, `y-label`, `y-form-card`).
  - `y-reveal` usa animaciones ligadas al scroll (`animation-timeline: view()`): si el navegador no las soporta, el contenido se ve igual, nunca queda oculto.
- **Piezas compartidas** (`src/components/site/PageKit.tsx`): `PageShell` (menú + `main` + footer), `PageHero` (hero oscuro), `ProductHero` (hero claro con maqueta del producto), `PageSection`, `SectionHeader`, `ActionLink`, `StepCard`, `FaqSection`, `CtaBand`, `ComparisonCard` y `faqJsonLd`. Cualquier página nueva debería armarse con estas piezas.
  - Catálogo y fichas: `src/components/catalog/CatalogKit.tsx` y `DetailKit.tsx`.
  - Blog: `src/components/blog/PostCard.tsx` y `articleProse.ts` (estilos de lectura).
  - Legales: `src/components/legal/LegalPage.tsx`. OCR Master: `src/components/ocr-master/CodeWindow.tsx`.
- **Navbar y footer** (`src/components/landing/Navbar.tsx`, `Footer.tsx`): menú global con mega menú, submenú fijo para páginas de producto (prop `links` con anclas + `subnavLabel`) y footer nuevo. El menú se edita en `src/config/site.ts` (`navLinks`, `footerGroups`).
- **Isotipo** (`src/components/brand/YagoLogo.tsx` + `yagoMarkGeometry.ts`): SVG vectorizado desde el logo oficial (tres aspas que se pliegan alrededor de un hueco triangular), con degradado por aspa. Gira 120° al pasar el cursor en el menú. Favicon, ícono de Apple, íconos del manifest y logo para datos estructurados (`public/brand/`) se regeneran con `npm run brand:assets`.
- **Home** (`src/app/page.tsx` + `src/components/home/*`): hero con consola en vivo, productos, cómo trabajamos, a medida y agentes IA, caso destacado, preguntas frecuentes (FAQPage) y contacto con el mismo endpoint `/api/contact`. Textos en `src/config/home.ts`.
- **SADT, AXIS y OCR**: misma plantilla de producto (hero claro con panel del producto, hoy vs. con el producto, cómo funciona, módulos o casos de uso, preguntas y formulario de demo). Paneles en `src/components/automation/ProductPanels.tsx`. OCR se edita en `src/config/ocr.ts`.
- **Precios** (`src/app/precios/page.tsx`): planes de SADT y AXIS con UF del día y vías de cotización de OCR y proyectos a medida. Agregada al sitemap.
- **Resto de páginas rediseñadas**: `/productos`, `/productos/[slug]`, `/servicios`, `/servicios/[slug]`, `/soluciones`, `/soluciones/[slug]`, `/casos`, `/proceso`, `/blog`, `/blog/[slug]`, `/ocr-master`, `/privacidad`, `/terminos` y la página 404. Se mantuvieron metadatos, datos estructurados (JSON-LD), migas de pan y eventos de Plausible.
- **Textos**: se corrigieron tildes en `src/config/ocr.ts`, `automation-pages.ts`, `seo-pages.ts` y `ocr-master.ts`. Los contenidos de `/casos` pasaron a `src/config/casos.ts`.

## Movimiento y efectos (segunda vuelta)

- **Scroll suave** con Lenis (`src/components/motion/SmoothScroll.tsx`): se apaga con "reducir movimiento", en pantallas táctiles queda el scroll nativo y se detiene cuando hay un menú o diálogo abierto (`data-lenis-prevent` en el menú móvil).
- **Entradas escalonadas** con Motion (`src/components/motion/RevealObserver.tsx`): anima las tarjetas `.y-reveal` y los encabezados de cada sección al entrar en pantalla. Lo que ya se ve al cargar no se anima y sin JavaScript todo queda visible.
- **Números**: `CountUp` sube cifras al aparecer (home) y `LiveNumber` hace que los KPI de los paneles de SADT, AXIS y OCR avancen de a poco (son datos de ejemplo).
- **Fondo 3D** (`src/components/motion/HeroField.tsx`): campo de puntos de luz en WebGL directo (sin librerías, ~3 KB) en el hero del home, `/productos`, `/servicios` y `/ocr-master` (prop `fx` en `PageHero`). Se carga cuando el navegador está libre, se pausa fuera de pantalla, reacciona al cursor, queda quieto con "reducir movimiento" o si el equipo no alcanza ~30 fps, y no se muestra si no hay GPU real.
- **Diagramas con haces de luz** (`src/components/site/FlowDiagram.tsx` + `src/components/motion/BeamCanvas.tsx`, datos en `src/config/flows.ts`): en el home (mosaico de productos) y en "Cómo funciona" de SADT, AXIS y OCR.
- **Mosaico de productos** en el home: SADT y AXIS arriba, OCR y un bloque de integraciones con diagrama y cinta de sistemas abajo.
- **Detalles**: borde con haz de luz en el plan recomendado, brillo al pasar el cursor por el botón principal y barra de progreso de lectura en los artículos del blog.
- Dependencias nuevas: `motion` y `lenis` (~28 KB comprimidos en las páginas que las usan).

## SEO y búsqueda con IA (tercera vuelta)

Detalle completo y tareas fuera del sitio en `docs/seo-geo.md`. Resumen: bloque "En resumen" en productos, FAQs con respuestas en el HTML, `/glosario`, dos guías nuevas con fuentes de la DT, datos estructurados ampliados, `robots.txt` con crawlers de IA vigentes, `/llms.txt` y `/llms-full.txt` generados desde la configuración, IndexNow (`npm run indexnow`) y variables para verificar Search Console y Bing.

## Pendiente de revisar

- **Caso destacado**: completar `FEATURED_CASE` en `src/config/home.ts` con un cliente real (cita y cifras) y poner `placeholder: false`. En `/casos` aparece como "Formato de referencia" mientras siga como plantilla.
- **OCR Master**: el ejemplo de request y respuesta JSON es ilustrativo (está marcado como datos ficticios). Revisar el nombre del campo de archivo, el host y las claves reales de la API.
- **Duraciones**: `/proceso` dice "Build 1–4 semanas" y el FAQ del home habla de MVP en 1–2 semanas e integraciones en 3–6. Conviene dejar una sola versión.
- **Perfiles oficiales**: agregar LinkedIn y demás URL en `ENTITY.sameAs` (`src/config/entity.ts`) y confirmar la razón social "Yago SpA".
- **Migas de pan de soluciones**: el último nivel ahora muestra el nombre de la solución (por ejemplo "Backoffice") en vez de "Solución"/"Industria".
- `caseStudies` en `src/config/site.ts` quedó sin uso en `/casos` (se usa `src/config/casos.ts`).
- Componentes antiguos sin uso (`Hero`, `RouteChooser`, `Contacto`, `AuditWidget`, `Productos`, `OcrMaster`, `CaseStudies`, `BrandStamp`, etc.): se pueden borrar cuando se confirme el rediseño.

## Pruebas

- `npx tsc --noEmit` sin errores y `next build` completo.
- `tests/ui` (Playwright, escritorio y móvil): 67 pruebas pasan. Se ajustó la prueba del menú móvil al título "Navegación" con tilde.
- Revisado con axe (WCAG 2.2 AA) en las 19 rutas públicas, en escritorio (1440 px) y móvil (390 px), con y sin animaciones: sin violaciones. Sin desborde horizontal en móvil.
- Nota: la API de contacto limita a 6 envíos cada 10 minutos por IP; si se corren las pruebas varias veces seguidas, las de la API pueden responder 429.

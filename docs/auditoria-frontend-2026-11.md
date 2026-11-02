# Auditoría frontend de yago.cl (noviembre 2026)

Fecha: 1 de noviembre de 2026. Rama: `claude/quirky-ishizaka-15de05` (sin desplegar).

## Alcance y método

- **Páginas**: home (`src/app/page.tsx` y `src/components/home/*`), `/ocr`, `/servicios/[slug]` (integración de IA y auditoría IA) y una guía del blog (`/blog/que-es-la-automatizacion-de-procesos-con-ia`).
- **Pantallas**: escritorio 1440×900, 1366×768 y 1280×720; móvil 390×844 y 360×740.
- **Criterios**: jerarquía visual, claridad de los llamados a la acción, legibilidad, accesibilidad (WCAG 2.2 AA) y consistencia entre páginas. Se usaron las skills `frontend-design`, `design-critique` (Design) y `accessibility-audit` (paquete UX).
- **Medición**: build de producción local con las mismas variables públicas que yago.cl (agenda, WhatsApp y GA4), servida con `next start`. Lighthouse 13.5.0 móvil con el comando del encargo; en cada corrida se bloquearon solo los envíos de GA4 (`google-analytics.com`), así gtag.js se descarga y ejecuta igual pero las pruebas no ensucian las estadísticas. La versión anterior (commit `ee46c7c`) se compiló aparte y se midió intercalada con la nueva, en la misma máquina y a la misma hora.

## Resumen

**Lo que funciona.** El sistema visual es coherente en las cuatro páginas: hero oscuro, hojas claras, un solo acento sky y botones `y-btn` reconocibles. Los H1 dicen qué se ofrece y el CTA principal destaca en todos los heros. La suite axe ya pasaba sin violaciones, hay enlace para saltar al contenido, foco visible y respeto por "reducir movimiento".

**Lo más importante que faltaba.**

1. En móvil el CTA principal desaparecía al pasar el hero: el encabezado solo tenía el menú.
2. En las guías, en móvil no había índice y el primer CTA aparecía a unos 18.600 px de la parte superior (el artículo mide 18.000 px).
3. En `/ocr`, con un H1 de cinco líneas, el CTA quedaba bajo el pliegue en laptops de 1366×768 y 1280×720.
4. CLS de 0,33 en el home móvil: un halo de luz decorativo se movía mientras la página cargaba.
5. El fondo 3D (WebGL) del hero se inicializaba durante la carga: una tarea de unos 260 ms observados.

## Hallazgos priorizados

Prioridad: **P1** afecta conversión o métricas de forma medible; **P2** claridad, accesibilidad o consistencia; **P3** pulido o decisiones de sistema. Estado: ✅ implementado en esta rama · 📝 recomendado.

### P1

| # | Hallazgo | Evidencia | Estado |
| --- | --- | --- | --- |
| 1 | **Sin CTA en el encabezado móvil.** El botón del encabezado estaba oculto bajo 640 px; después del hero, el siguiente "Agendar" del home estaba en el formulario final. | Prueba de pliegue: `navCTA no` en 390 y 360 px en las cinco páginas revisadas. | ✅ Botón corto en el encabezado fijo ("Agendar"; "Evaluación" en OCR; "Demo" en SADT/AXIS). El nombre accesible sigue siendo el completo. |
| 2 | **Guías en móvil sin índice y con el primer CTA al final.** El índice y la tarjeta de diagnóstico laterales solo existen desde 1024 px. | Guía de automatización a 390 px: artículo de 18.016 px, primer CTA visible en y = 18.613 px. | ✅ Índice plegable (`<details>`) arriba del artículo y la misma tarjeta de diagnóstico después de la segunda sección (y ≈ 3.400 px), solo bajo 1024 px. |
| 3 | **CTA de `/ocr` bajo el pliegue en laptops.** El H1 (texto SEO intacto) ocupaba cinco líneas a 4,6 rem. | Borde inferior del CTA: 828 px en 1366×768 y 801 px en 1280×720. | ✅ Escala del H1 de `ProductHero` a `clamp(2.4rem, 4.4vw, 3.9rem)` y padding superior de 48 px: cuatro líneas y CTA visible en ambos tamaños. Aplica también a SADT y AXIS. |
| 4 | **CLS 0,33 en el home móvil.** Los halos decorativos usaban `top: -10%`, un porcentaje de la altura de la sección: cada vez que el hero crecía al cargar (HTML progresivo, cambio de fuente) el halo de 672 px se desplazaba. | Lighthouse: un solo cambio de diseño atribuido a `section#inicio > div.pointer-events-none > div.absolute`. | ✅ Desplazamientos en rem en los 13 halos del sitio. |
| 5 | **Cambio de fuente que mueve la consola del hero.** Con la fuente de respaldo, la fila "Ya operan con YAGO" ocupaba dos líneas y con Instrument Sans una: la consola subía 44 px. A 360 px el H1 pasaba de tres a cuatro líneas. | Medición con fuentes bloqueadas y cargadas a 360, 390 y 412 px. | ✅ La frase va en su propia línea en móvil y el H1 escala con el ancho del teléfono para que "inteligencia artificial" quepa en una línea con ambas fuentes. |
| 6 | **Animaciones decorativas durante la carga.** El fondo WebGL arrancaba en `requestIdleCallback`; Lenis y Motion se cargaban al hidratar en escritorio. | Traza: tarea de 258 ms (`FireIdleCallback`) por la inicialización WebGL; en simulación móvil, tarea larga de 465 ms del chunk que contiene `HeroField`. | ✅ Fondo 3D, scroll suave, entradas animadas y contadores en vivo se cargan con la primera interacción (cursor, toque, rueda o teclado). Sin interacción, el contenido se ve completo (las tarjetas `.y-reveal` usan la entrada CSS donde el navegador la soporta). |
| 7 | **Sin casos con cifras.** El bloque de casos muestra el método de medición porque `FEATURED_CASE` sigue como plantilla; para un comprador B2B es la mayor brecha de confianza. | `src/config/home.ts`, `placeholder: true`. | 📝 Contenido del dueño: publicar un caso real con autorización. |

### P2

| # | Hallazgo | Evidencia | Estado |
| --- | --- | --- | --- |
| 8 | **Fila "Flujos / IA / Apps / OCR" con tratamiento de cifra grande sin cifras.** Cuatro palabras a 2,6 rem compiten con el H1 y el CTA y no llevan a ningún lado. | Captura de escritorio: la fila es lo segundo más grande del primer pantallazo. | ✅ Mismo texto a 1,5 rem, como enlaces a cada servicio (`/servicios/automatizacion-procesos`, `/servicios/integracion-ia`, `/servicios/apps-automatizacion`, `/ocr`). |
| 9 | **Consola en vivo sin forma de pausarla (WCAG 2.2.2, nivel A).** Se actualiza cada 3,2 s y solo se detenía con el mouse encima. | Revisión manual con teclado y táctil. | ✅ Botón de pausa (con `aria-pressed`), pausa también con el foco del teclado dentro; la pausa detiene el haz del borde. |
| 10 | **Cinta de integraciones en movimiento continuo (WCAG 2.2.2).** Solo se pausa con el mouse. | `ProductsShowcase`, `.y-marquee`. | 📝 Mostrarla estática en táctil o agregar un control de pausa. |
| 11 | **Barra de lectura del blog cargaba Motion de forma estática.** | Build: JS inicial de `/blog/[slug]` 160 kB. | ✅ Listener pasivo con `requestAnimationFrame`: 153 kB (−7 kB comprimidos). |
| 12 | **Precios inconsistentes en las tarjetas del home.** AXIS dice "22,13 UF + IVA /mes" y SADT "31,80 UF /mes", sin indicar IVA. | `startingPrice()` en `src/config/site.ts` toma el texto del período de cada plan. | 📝 Confirmar si el plan de SADT incluye IVA y unificar el texto del período. |
| 13 | **Formulario de contacto sin indicar qué es obligatorio.** Nombre y email son obligatorios, Empresa no, y solo el mensaje dice "(opcional)". | `ContactSection.tsx`. | 📝 Agregar "(opcional)" a Empresa. Si se puede comprometer, decir en cuánto tiempo se responde. |
| 14 | **Demasiado movimiento simultáneo en el hero.** Haz giratorio de la consola, pulsos, consola que se actualiza, fondo 3D, cinta y haces de los diagramas. Compiten entre sí y con el CTA. | Revisión con `frontend-design`: conviene un solo momento de movimiento. | 📝 Elegir uno (la consola) y dejar el resto quieto o activado por interacción. |

### P3

| # | Hallazgo | Estado |
| --- | --- | --- |
| 15 | Eyebrow en mayúsculas monoespaciadas sobre casi cada título: todas las secciones tienen el mismo ritmo y ninguna destaca. Revisarlo en una próxima vuelta del sistema (por ejemplo, solo en secciones de producto). | 📝 |
| 16 | Dos secciones oscuras seguidas en el home ("Cómo trabajamos" y "Herramientas para decidir") se leen como un solo bloque largo. | 📝 Alternar a `y-mist` la segunda. |
| 17 | El submenú de producto (`/ocr`, SADT, AXIS) usa blanco al 90 % sobre el fondo oscuro de la página y se ve gris contra el hero `y-mist`. | 📝 Usar `bg-[#f4f7fa]/95`. |
| 18 | En móvil, las migas de pan de las guías repiten el título completo (dos líneas) justo sobre el H1. | 📝 Truncar el último nivel en móvil. |
| 19 | Placeholders de formulario en `#94a3b8` (2,6:1 sobre blanco). No es una falla porque cada campo tiene etiqueta, pero cuesta leerlos. | 📝 Usar `slate-500`. |

## Rendimiento

### Home móvil (Lighthouse 13.5.0, mediana de 5 corridas intercaladas)

| Versión | Puntaje | FCP | LCP | TBT | CLS | Speed Index |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| Antes (`ee46c7c`) | 61 | 1,67 s | 3,49 s | 467 ms | 0,331 | 3,47 s |
| Después (esta rama) | **83** | 1,67 s | 3,49 s | **286 ms** | **0** | 3,39 s |

Una primera ronda de 5 corridas, con la build anterior a los dos últimos ajustes, dio lo mismo: 59 → 85, TBT 593 → 255 ms, CLS 0,331 → 0 y LCP 3,40 → 3,41 s. Ninguna cifra empeora: FCP y LCP quedan iguales, TBT y CLS bajan.

### Otras páginas (mediana de 5 corridas intercaladas)

| Página | Antes | Después |
| --- | --- | --- |
| `/ocr` | 82 · LCP 3,65 s · TBT 290 ms | 85 · LCP 3,63 s · TBT 209 ms |
| `/servicios/integracion-ia` | 78 · LCP 3,43 s · TBT 193 ms | 88 · LCP 3,45 s · TBT 156 ms |
| Guía de automatización | 86 · LCP 3,75 s · TBT 151 ms | 85 · LCP 3,79 s · TBT 154 ms |

La guía queda igual (las diferencias están dentro del ruido). El JavaScript inicial de las guías baja de 160 a 153 kB.

### Por qué las cifras locales no coinciden con las del 1 de noviembre

El plan de visibilidad registró 72 puntos, LCP de 2,9 s, TBT de 970 ms y sin saltos de diseño. En local la versión anterior mostró el CLS de 0,331 en 9 de 10 corridas: depende de si Chrome pinta un cuadro mientras el hero todavía está a medio cargar, algo que cambia con la red y el servidor. La máquina además tenía otros procesos activos (carga de CPU cercana al 36 %), por eso hay corridas sueltas con TBT de más de 1 s en ambas versiones. La comparación válida es local contra local, intercalada; después de publicar conviene medir en PageSpeed Insights y seguir el informe de Core Web Vitals de Search Console.

### Qué más pesa y no se tocó

- **GA4 (gtag.js)**: dos tareas largas de 100 a 160 ms después de la carga. No se tocó este mes, como pide el encargo.
- **Primera pintura en Chrome sin GPU**: Lighthouse y PageSpeed corren sin tarjeta gráfica. El HTML termina de cargar a los 0,3 s, pero el primer cuadro con contenido se pinta cerca de 1,6 s porque el proceso GPU de Chrome tarda en procesar el primer cuadro. Se probó quitar uno a uno los efectos (desenfoques de 120 px, grano, `backdrop-filter`, máscaras, sombras, texto con degradado, capas de fondo y animaciones): quitarlos todos a la vez adelanta la pintura solo 0,2 s, y una página mínima en el mismo entorno pinta a los 68 ms. Ninguno se cambió, porque el costo visual no se justifica por esa ganancia.
- **CSS bloqueante**: un archivo de 26 kB comprimidos, con unos 19 kB sin uso en el home. Es la siguiente palanca para el LCP (CSS crítico en línea), pero exige cambiar la build y se deja como recomendación.
- **HTML de 309 kB sin comprimir en el home** (el payload de React duplica el contenido). Reducir secciones o mover contenido largo a sus páginas bajaría el trabajo de estilo y layout inicial (~160 ms observados).

## Verificación

- `npm run typecheck`: sin errores.
- `npm run test:ui` (Playwright con axe, escritorio y móvil): 203 pruebas pasan y 5 se omiten por diseño (las que requieren un ID de GA4 en la build y las exclusivas de un tipo de pantalla). Sin violaciones WCAG A/AA en home, `/ocr`, servicios y guías.
- No se cambiaron textos SEO (títulos, H1, descripciones, preguntas frecuentes), URLs ni el código de Google Analytics. El CTA móvil del encabezado y la tarjeta de las guías reutilizan las clases de medición que ya existían, sin eventos nuevos.
- Las capturas antes/después se entregaron con el resumen de la tarea y no se suben al repositorio, que es público.

## Cómo reproducir

1. Build con las variables públicas de producción (`NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_BOOKING_URL`, `NEXT_PUBLIC_WHATSAPP_PHONE`, `NEXT_PUBLIC_CONTACT_EMAIL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`) y `next start`.
2. `npx --yes lighthouse@13.5.0 <url> --only-categories=performance --form-factor=mobile --chrome-flags="--headless=new" --blocked-url-patterns="*google-analytics.com/*"`.
3. Correr varias veces e intercalar versiones: en esta máquina el puntaje varía ±10 puntos entre corridas.

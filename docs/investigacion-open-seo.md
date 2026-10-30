# Investigación de OpenSEO para YAGO

## Dictamen · 21 de octubre de 2026

**Vale la pena probar OpenSEO como complemento de investigación y seguimiento SEO/GEO de YAGO.** Su mayor aporte es consultar demanda, competidores, enlaces y respuestas de IA con evidencia guardada. El seguimiento propio ya cubre Search Console, GA4, inspección de URLs, auditoría básica e información de rastreo de Bing.

Repositorio identificado: **https://github.com/every-app/open-seo**. La búsqueda encontró otros proyectos con nombres parecidos; este coincide exactamente con `open-seo` y se presenta como alternativa abierta a Semrush y Ahrefs.

La revisión comprende documentación, archivos de implementación, dos skills, releases, incidencias y estado del CI público. No incluye una ejecución de OpenSEO ni consultas autenticadas a sus proveedores; el soporte de mercados se comprobó en código, no mediante una colección pagada.

## Versión y mantenimiento comprobados

| Elemento | Observación |
| --- | --- |
| Rama revisada | `main`, commit `c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4` |
| Release más reciente | `v0.1.14`, publicada el 19 de octubre de 2026 |
| Último push informado por GitHub | 20 de octubre de 2026 |
| Creación del repositorio | 27 de febrero de 2026 |
| Licencia | MIT, copyright Ben Senescu; permite uso y modificación conservando el aviso |
| Popularidad al consultar | 24.389 estrellas y 3.292 forks; cifras variables, no prueba de calidad |
| CI de `main` | Las cinco ejecuciones consultadas finalizaron correctamente, incluida la del commit revisado |

El workflow de CI revisado incluye formato, tipos, lint, Vitest, compilación del worker y web, y compilación de la imagen Docker. Esto describe verificaciones públicas del proyecto, no pruebas locales realizadas en YAGO.

La release 0.1.14 incorpora IndexNow, trackers por idioma y mejoras ante respuestas incompletas de Google. El proyecto está activo y todavía en versión 0.x.

## Qué añade a nuestro trabajo

| Capacidad | Función observada | Encaje para YAGO |
| --- | --- | --- |
| Investigación de palabras clave | Volumen estimado, dificultad, CPC, intención y tendencias mediante DataForSEO | Alto: priorizar temas de automatización, integración, aplicaciones, agentes y OCR con demanda externa |
| Competidores | Keywords y páginas posicionadas de otros dominios; comparación de resultados de búsqueda | Alto: comprobar quién compite realmente por cada consulta |
| Backlinks | Enlaces, dominios de referencia, anchors y señales de calidad | Alto: investigar fuentes externas y oportunidades de referencia |
| Rank tracking | Posiciones de consultas fijas, con mercado, idioma, dispositivo, profundidad y frecuencia | Alto: añade una medición distinta a la posición media agregada de Search Console |
| Visibilidad en IA | Preguntas exactas, menciones, citas, competidores, respuestas guardadas y tendencias | Alto: ampliar el registro manual de `docs/seguimiento-geo.csv` |
| Auditoría técnica | Rastreo, títulos, metas, encabezados, indexabilidad, enlaces y Lighthouse opcional | Medio: parte del alcance ya existe en nuestros scripts y mediciones |
| Search Console y GA4 | Conexiones de Google de solo lectura, informes y herramientas para agentes | Medio: aporta interfaz y acceso MCP; las fuentes ya están conectadas en YAGO |
| MCP, skills y reportes | Consultar datos desde agentes, guardar contexto y generar informes | Alto si se adopta para trabajo recurrente |

Las estimaciones de volumen, dificultad y tráfico de terceros no son los datos reales de Analytics de esos competidores. OpenSEO ayuda a investigar y medir; las publicaciones, mejoras de contenido y obtención de referencias siguen requiriendo ejecución.

## Chile, español y visibilidad en IA

### Soporte comprobado en código

`src/shared/keyword-locations.ts` contiene Chile con `locationCode: 2152` e idioma predeterminado `es`, disponible para DataForSEO Labs, además del seguimiento de resultados de Google.

El validador de AI Visibility usa ese mercado. Las listas de capacidades del commit revisado admiten Chile para **ChatGPT, Gemini, Google AI Overviews, Claude y Perplexity**. No se probó una respuesta real de cada motor desde esa ubicación.

Para un piloto hay que fijar **Chile / español** explícitamente: el valor global predeterminado es Estados Unidos / inglés. Un país solicitado o un country hint no demuestra por sí solo la ubicación efectiva de la respuesta.

### Diferencias entre funciones

- **Prompt Research:** cobertura actual de **inglés de Estados Unidos**. Las preguntas provienen principalmente de un dataset de Google People Also Ask; no son registros privados de preguntas de usuarios de ChatGPT ni una medida de su frecuencia en IA.
- **Prompt Explorer:** comparación puntual mediante APIs de modelos; sus respuestas pueden diferir de las interfaces de consumo.
- **Prompt Tracking:** preguntas exactas elegidas por nosotros, con mercado y frecuencia diaria, semanal o mensual. ChatGPT y Gemini usan recolección de sus sitios de consumo mediante DataForSEO; Google AI Overviews usa resultados de Google. Claude y Perplexity usan APIs incluso en las revisiones programadas.
- Permite distinguir mención de marca de enlace/cita y consultar fuentes, resultados y tendencias. Una colección fallida no equivale a ausencia de YAGO.

Para Chile conviene reutilizar las veinte consultas propias de `docs/seguimiento-geo.csv` y seleccionar una muestra inicial. Los resultados nuevos deben registrar su motor, método, fecha y mercado; no formar una serie comparable automáticamente con las cinco respuestas manuales anteriores, cuyo modelo y sesión no quedaron confirmados.

## Costos y opciones de uso

### Versión alojada

Precio consultado en https://openseo.so/pricing:

- **US$10/mes**, con **US$10 de uso incluido** por ciclo.
- Prueba con **US$0,50 en créditos**; el fact sheet del repositorio indica que el registro de prueba no exige tarjeta.
- La lectura de Search Console no consume créditos de OpenSEO.
- Investigación de keywords, competidores, backlinks, auditoría, posiciones y funciones de IA pueden consumir créditos.
- Los créditos incluidos se reinician cada ciclo; las recargas adicionales no caducan. La página de precios exige suscripción activa para usar el servicio.
- Prompt Research y Explorer requieren plan pagado; Prompt Tracking puede usar créditos de prueba según la guía de AI Visibility. No asumir que todas las funciones se desbloquean con el registro gratuito.
- El README declara un recargo del 28 % sobre las peticiones a DataForSEO en el servicio alojado. El costo de una prueba concreta depende de las llamadas y resultados solicitados.

### Autoalojamiento

- No hay tarifa por la licencia del código; se pagan proveedores y, cuando corresponda, infraestructura.
- DataForSEO es la fuente principal. Su guía dentro del repositorio indica **US$1 de prueba y recarga mínima de US$50**. Esa recarga es saldo, no un gasto mensual obligatorio de US$50.
- `OPENROUTER_API_KEY` se utiliza para investigación de configuración, Prompt Research y sugerencias; la colección de respuestas utiliza `DATAFORSEO_API_KEY`.
- La guía de Docker indica que el contenedor debe mantenerse encendido para revisiones de fondo; el scheduler comprueba tareas cada cinco minutos.

No se abrió una cuenta, contrató un plan ni consumió una API pagada durante esta investigación.

## Arquitectura e instalación

Es una aplicación independiente, no una dependencia que haya que añadir a la web de YAGO:

- React 19, TypeScript, TanStack Start/Router, Vite y Tailwind 4.
- Workers y Workflows de Cloudflare para aplicación y tareas; almacenamiento D1/SQLite en autoalojamiento, además de KV y R2. El repositorio también tiene soporte PostgreSQL usado por la ruta alojada.
- Drizzle para datos; autenticación y autorización con componentes de Better Auth, Cloudflare Access y OAuth según el modo.
- Servidor MCP HTTP; el endpoint alojado documentado es `https://app.openseo.so/mcp`, con OAuth o clave personal.
- Skills separadas para research, competidores, clustering, prospectos de enlaces, auditoría técnica, visibilidad de IA y reportes. Instalar sus archivos por sí solos no conecta datos ni configura proveedores.

### Docker local

Ruta documentada más sencilla para probar autoalojamiento: Docker Desktop/Engine, archivo `.env`, clave DataForSEO e imagen `ghcr.io/every-app/open-seo`. Puerto predeterminado **3001**, volumen persistente y modo `local_noauth`. El compose revisado publica el puerto solo en `127.0.0.1`; un acceso remoto requiere resolver la autenticación del despliegue.

### Cloudflare

La ruta recomendada por el proyecto para uso remoto requiere Node >=22.6, pnpm, cuenta Cloudflare con R2 activado y DataForSEO. `pnpm deploy:selfhost --yes` crea los recursos y la puerta Cloudflare Access. Activar R2 requiere un medio de pago incluso dentro del nivel gratuito.

Para conectar GSC/GA4 en autoalojamiento se necesita un cliente OAuth de Google, callbacks y secreto de cifrado. Nuestra impersonación existente de `yago-seo-reader` no se transfiere automáticamente a ese flujo. La versión alojada administra el cliente OAuth de su integración.

## Hallazgos que influyen en la decisión

1. **Límites reportados en Cloudflare Free:** [#377](https://github.com/every-app/open-seo/issues/377) describe auditorías truncadas por subrequests/CPU y [#456](https://github.com/every-app/open-seo/issues/456) describe el mismo límite durante configuración de IA. Seguían abiertas al revisar. Son reportes de usuarios, no reproducciones hechas aquí; la afirmación de la guía «funciona en free» no garantiza cada carga de trabajo.
2. **Posiciones incompletas:** [#362](https://github.com/every-app/open-seo/issues/362) seguía abierta. La release 0.1.14 incorpora mitigaciones frente a una mala respuesta de resultados, pero no basta para afirmar que toda la incidencia esté resuelta. Un `null` debe leerse con cobertura y estado de la ejecución.
3. **Skills ajustables a nuestra escala:** la skill `keyword-research` empieza con consultas de Search Console entre posiciones 5–20 y al menos 50 impresiones por consulta. Dado el bajo volumen del corte documentado de YAGO, ese umbral podría ocultar señales útiles; habría que reducirlo al trabajar nuestro sitio.
4. **Resultados de IA con metodologías distintas:** no agregar Explorer, tracking de sitios de consumo y APIs como si fueran observaciones idénticas.

## Piloto recomendado

**Primero probar el servicio alojado con su saldo de prueba.** Así se valida el valor de los datos antes de asumir instalación, mantenimiento o una recarga de proveedor. Empezar con pocos datos: el saldo no garantiza cubrir todo el piloto propuesto.

1. Proyecto **YAGO**, sitio `https://yago.cl`, mercado Chile `2152`, idioma `es` y cinco temas: automatización, integración, desarrollo de aplicaciones, agentes y OCR.
2. Ejecutar una investigación pequeña de keywords y un análisis de un competidor que aparezca en los resultados chilenos; comprobar relevancia y calidad de la cobertura antes de ampliar.
3. Introducir manualmente entre cinco y diez preguntas del registro GEO propio. Priorizar ChatGPT y Gemini; añadir Google AI Overviews según presupuesto. Estimar la primera revisión antes de ejecutarla.
4. Comprobar que las respuestas incluyen evidencia consultable y que las menciones corresponden a **Yago SpA / yago.cl**, especialmente ante la confusión de identidad ya observada en un mapa.
5. Si aporta datos accionables, pasar a una muestra mayor y revisión semanal; comparar la utilidad y gasto con lo que ya entrega `seo:report`. Para un único sitio, los US$10 del servicio alojado parecen un punto de entrada práctico; reconsiderar Docker/MCP propio al justificar control o uso recurrente.

Este piloto es una recomendación, no una activación realizada.

## Fuentes principales

- Repositorio: https://github.com/every-app/open-seo
- Snapshot de código: https://github.com/every-app/open-seo/tree/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4
- Release: https://github.com/every-app/open-seo/releases/tag/v0.1.14
- CI del snapshot: https://github.com/every-app/open-seo/actions/runs/39382517405
- Precios alojados: https://openseo.so/pricing
- Guía AI Visibility: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/web/content/docs/ai-visibility.md
- Mercados: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/src/shared/keyword-locations.ts
- Capacidades de IA: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/src/shared/ai-visibility.ts
- Países para APIs de modelos: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/src/shared/prompt-search-countries.ts
- Docker: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/docs/SELF_HOSTING_DOCKER.md
- Cloudflare: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/docs/SELF_HOSTING_CLOUDFLARE.md
- Credenciales y recarga DataForSEO: https://github.com/every-app/open-seo/blob/c5f8db19c7ca9e750836b6ed5c8a6491d4f967f4/docs/DATAFORSEO_API_KEY.md
- MCP: https://openseo.so/docs/mcp
- Precios Backlinks del proveedor: https://dataforseo.com/pricing/backlinks/backlinks

Contexto local contrastado: `docs/acceso-apis-seo.md`, `docs/seguimiento-geo.csv` y el estado de registro en `docs/capterra-axis.md`.

# Panel de seguimiento SEO, GEO y contactos · YAGO

Esta es una plantilla para configurar informes y registrar datos reales. Los informes privados de Google, Bing y GA4 se consultan desde las cuentas del propietario; no se presupone que los datos sean accesibles desde el repositorio.

## 1. Vincular Search Console con GA4

**Estado de ejecución:** la captura del propietario confirma **VINCULACIÓN CREADA** entre el dominio `yago.cl` y el flujo **YAGO web**, `https://yago.cl`. La colección Search Console está publicada: sus informes **Consultas** y **Tráfico de búsqueda orgánica** aparecen en el menú de GA4.

En la propiedad **YAGO web** de Google Analytics:

1. **Administrar → Vinculaciones con otros productos → Vinculaciones con Search Console**.
2. **Vincular → Elegir cuentas**.
3. Seleccionar la propiedad de dominio **yago.cl**; confirmar y continuar.
4. Seleccionar el flujo web de **https://yago.cl**, cuyo ID de medición es **G-DSNXKXMCKX**.
5. Revisar y enviar la vinculación.
6. En **Informes → Biblioteca**, publicar la colección **Search Console** cuando esté disponible, si se quiere mostrarla en la navegación de informes.

Requiere permisos de edición en GA4 y propiedad verificada en Search Console. Las consultas de búsqueda se presentan con sus métricas de Search Console; el informe de páginas de destino permite analizar esas páginas con métricas de Analytics compatibles. No se calcula una conversión por palabra clave individual a partir de esos datos agregados.

Fuente: https://support.google.com/analytics/answer/10737381?hl=es.

### Publicar la colección de informes

Cerrar el asistente de vinculación y abrir **Informes → Biblioteca**. En **Colecciones**, localizar **Search Console**, abrir el menú de tres puntos y elegir **Publicar**. Confirmar que aparezca en la navegación de Informes, con **Consultas de búsqueda orgánica de Google** y **Tráfico de búsqueda orgánica de Google**. Si la colección no aparece, revisar la Biblioteca y la vinculación antes de crear otra. La publicación organiza el acceso a los informes; los datos dependen del procesamiento y disponibilidad de Search Console.

## 2. Exploración de contactos por servicio

En **Explorar → Formato libre**, crear una exploración llamada **YAGO · Contactos por servicio y origen**.

### Importar dimensiones

- Servicio solicitado (`service`, personalizada).
- Tipo de formulario (`form_type`, personalizada).
- Nombre del evento.
- Fuente/medio de la sesión.
- Página de destino y cadena de consulta, si está disponible y se necesita una segunda pestaña.

### Importar métrica

- Recuento de eventos.

### Pestaña 1: contactos por servicio y origen

| Configuración | Valor |
| --- | --- |
| Filas | Servicio solicitado |
| Columnas | Fuente/medio de la sesión |
| Valores | Recuento de eventos |
| Filtro | Nombre del evento coincide exactamente con `generate_lead` |
| Período inicial | Desde activación de GA4 hasta hoy; después ventanas comparables de 28 días |

### Pestaña 2: contactos por formulario

Mantener filtro y métrica. Filas: **Tipo de formulario**. Columnas: **Servicio solicitado**.

Valores de servicio utilizados por la implementación:

| Valor | Servicio |
| --- | --- |
| automatizacion-procesos | Automatización de procesos |
| integracion-ia | Integración de IA |
| apps-automatizacion | Aplicaciones y software con IA |
| agentes-ia | Agentes y asistentes |
| ocr | OCR y documentos |
| sadt / axis | Productos específicos |
| otro | Otra necesidad |

El evento se emite después del envío exitoso. No equivale a una reunión, oportunidad o contrato. El seguimiento comercial completa esos estados. Los envíos de prueba identificados como `qa_setup` o `qa_deploy` deben reconocerse en el análisis de la línea base.

Las dimensiones nuevas y datos de informes pueden tardar en estar disponibles. Un valor `(not set)` requiere comprobar si ese evento incluye el parámetro, su fecha y la definición personalizada. Los nombres y mensajes del formulario no se envían a GA4.

## 3. Adquisición orgánica y referrals de asistentes

En **Informes → Adquisición → Adquisición de tráfico**, revisar sesiones y eventos clave con fuente/medio de sesión. Para comparar SEO, usar el grupo de canales de sesión **Organic Search** y revisar las páginas de destino comerciales.

Para referrals de asistentes, observar fuentes como `chatgpt.com`, `perplexity.ai` y `copilot.microsoft.com`, además de los UTM que estén presentes. La atribución puede ser incompleta y una mención puede no producir visitas; se interpreta junto al seguimiento de citas.

El clic `cta_agendar_sesion` indica salida al calendario; `cta_whatsapp`, salida a WhatsApp. La reunión o conversación efectiva se registra en el seguimiento comercial.

## 4. Consultas y páginas de Google

En Search Console, usar **Rendimiento → Resultados de búsqueda**, país **Chile**, tipo **Web** y períodos equivalentes.

- Consultas: impresiones, clics, CTR y posición media.
- Páginas: revisar las páginas comerciales de cada categoría.
- Separar búsquedas de marca y sin marca mediante filtros; no contar una búsqueda de YAGO como descubrimiento de una categoría genérica.
- Explorar expresiones de automatización, integración/implementación de IA, desarrollo de aplicaciones y OCR. Las consultas reales determinan qué contenidos ampliar.
- Interpretar posición y CTR según intención y volumen; una posición media global mezcla consultas y páginas.

| Categoría | Página principal |
| --- | --- |
| Automatización | /servicios/automatizacion-procesos |
| Integración de IA | /servicios/integracion-ia |
| Aplicaciones y desarrollo | /servicios/apps-automatizacion |
| Agentes | /servicios/agentes-ia |
| OCR | /ocr |

Los clics de funciones de IA de Google están incluidos en búsqueda Web; esta instalación no identifica por separado todas las visitas de AI Overviews o AI Mode.

## 5. Bing y visibilidad GEO

- **Sitemaps:** lectura completada, estado Success y 47 URLs descubiertas, sin errores ni advertencias en la captura. Revisar indexación por separado.
- **URL Inspection / Site Explorer:** revisar descubrimiento e indexación de páginas clave.
- Inspección de `/servicios/integracion-ia`: **Discovered but not crawled**, descubierta el 04 Oct 2026. La nueva captura de **Bing Index** mantiene ese estado. La prueba de **Live URL** confirma **URL can be indexed by Bing** y **No SEO/GEO issues found**. Existe una solicitud manual anterior confirmada, pero aún no hay inclusión en el índice. Diagnóstico y siguiente comprobación en la sección 12.
- **AI Performance:** primera captura recibida el 7 de octubre, período **3 M**, con **Total Citations: 0** y **Avg. Cited Pages: 0**, para Microsoft Copilots and Partners. Línea base registrada en la sección 11; no representa todas las plataformas de IA.
- **Clutch AI Visibility:** registrar la categoría y período del indicador. Sus preguntas seleccionadas por la plataforma se interpretan como una referencia complementaria.
- **Consultas propias:** registrar pruebas en `docs/seguimiento-geo.csv`, manteniendo preguntas, idioma, país y condiciones comparables. Capturar motor, modelo, búsqueda activada, mención, URL citada y exactitud.

## 6. Rutina inicial

En la primera revisión Search Console mostraba el informe de Páginas en procesamiento. Las capturas posteriores del propietario ya muestran **19 páginas indexadas y 3 sin indexar**, con tres motivos de una URL cada uno. El detalle y la siguiente acción están en la sección 9. No se deducen exclusiones adicionales restando esos totales de las 47 URLs del sitemap.

**Primera revisión tras procesamiento:** sitemap y páginas en Google/Bing, `generate_lead` en GA4 y parámetros, referrals e incidencias de envío.

**Cada semana durante el primer mes:** completar `docs/panel-semanal.csv` con datos reales y la fuente. Registrar qué cambió en contenido o distribución.

**Cada 28 días:** comparar ventanas equivalentes y revisar servicios que atraen consultas pertinentes, contactos y oportunidades. Actualizar prioridades de contenido con base en esos datos.

**Tras reseñas o casos:** guardar URLs públicas, conectar evidencia autorizada con el servicio correspondiente y observar tendencias. Su coincidencia con un cambio de visibilidad no demuestra por sí sola causalidad.

## 7. Pendientes de identidad y dominio

- Perfil público de Clutch comprobado: https://clutch.co/profile/yago, enlazado como perfil oficial de la organización.
- LinkedIn de empresa proporcionado por el propietario e incorporado a la organización: https://www.linkedin.com/company/yago-spa.
- Autoría individual: Nicolas Yarur, biografía proporcionada por el propietario y perfil https://www.linkedin.com/in/nicolas-yarur/. Firma del blog y perfil `/nosotros#nicolas-yarur` conectados mediante marcado Person y metadatos.
- Google Business Profile: no aplica a la modalidad actual; el propietario confirmó atención exclusivamente remota, sin recepción presencial ni visitas para prestar servicios.
- `www.yago.cl`: CNAME y redirección activados. Verificados cuatro casos HTTP/HTTPS, raíz y rutas con UTM, con 301 directo hacia `https://yago.cl`, ruta y consulta conservadas y 200 final sin bucles. La dirección principal funciona y HTTP redirige a HTTPS.

## 8. Revisión pública · 7 de octubre de 2026

Objetivo mantenido: captar oportunidades B2B calificadas en Chile por automatización, integración de IA, aplicaciones, agentes y OCR. La llamada principal es agendar diagnóstico; menciones y citas se interpretan junto a contactos y oportunidades.

Comprobaciones realizadas directamente en producción:

- Sitemap 200 con **47 URLs únicas**; las 47 páginas respondieron 200, con un H1 y sin `noindex` en las metaetiquetas revisadas ni en `X-Robots-Tag`.
- Las 47 canónicas corresponden a la URL del sitemap tras normalizar con el parser de URL. En la home, `https://yago.cl` y `https://yago.cl/` son equivalentes; la diferencia textual no es una incidencia.
- Datos estructurados presentes en las 47 páginas, con JSON legible sin errores de análisis. Esto no sustituye la validación semántica de cada tipo ni prueba elegibilidad para resultados enriquecidos.
- Las **12 guías** identifican a **Nicolas Yarur** como autor y enlazan su perfil `/nosotros#nicolas-yarur`.
- La organización mantiene los perfiles oficiales de LinkedIn y Clutch; definición, especialidades, ejemplos, FAQs y enlaces internos visibles en integración de IA, Nosotros y Casos.
- `robots.txt`, `llms.txt` y `llms-full.txt` respondieron 200. Robots permite el contenido público a los agentes de búsqueda revisados y excluye `/api/`. Los archivos llms son complementos experimentales, no una confirmación de visibilidad.
- Peticiones a integración de IA declarando Googlebot, bingbot, OAI-SearchBot y PerplexityBot respondieron 200 con contenido principal. No son pruebas de visitas de rastreadores auténticos ni de acceso desde sus redes.
- HTTP y `www` redirigieron 301 a HTTPS del dominio principal para una ruta con UTM, conservando ruta y parámetros.
- Perfil público de Clutch accesible, con descripción de YAGO y **0 reseñas**. Su distribución actual de servicios se registró en `docs/kit-clientes-resenas.md`; conviene confirmar el encaje de la categoría Recruiting con la oferta real.
- `src/config/evidence.ts` sigue sin testimonios ni casos autorizados. La página Casos muestra metodología y escenarios de referencia, no resultados atribuidos a clientes.
- En esta revisión inicial, `docs/seguimiento-geo.csv` conservaba las 20 preguntas sin resultados registrados; el primer resultado posterior está en la sección 14. `docs/panel-semanal.csv` aún no contiene una línea base cuantitativa por servicio.

### Siguiente revisión priorizada

1. **Search Console → Indexación → Páginas:** recibidas las capturas y clasificadas las URLs de los tres motivos (secciones 9 y 10). La API conectada el 8 de octubre confirma ocho URLs prioritarias indexadas, incluida la solución comercial. La sección 19 registra el estado actual; las capturas anteriores se conservan como historial.
2. **Bing → URL Inspection:** home confirmada como indexada, sin problemas SEO/GEO detectados; integración de IA sigue descubierta sin rastrear, aunque Live URL pasa (sección 12). Seguir las páginas nuevas sin inferir un bloqueo general. **AI Performance:** línea base recibida, con cero citas mostradas en 3 M (sección 11). Repetir en períodos comparables para observar cambios.
3. **Seguimiento GEO:** ejecutar las preguntas en sesiones nuevas de los asistentes elegidos, con búsqueda cuando esté disponible, registrando motor, modelo y condiciones. Este chat, que ya conoce YAGO, no sirve como medición independiente de recomendación espontánea.
4. **Evidencia:** incorporar las reseñas públicas y casos que recopile el propietario cuando estén disponibles, conectados con el servicio correspondiente. Medir consultas, citas, referrals y contactos antes de priorizar más contenidos.

La revisión pública confirma disponibilidad y señales técnicas, no indexación efectiva ni recomendaciones actuales en asistentes. Los informes privados todavía requieren datos del propietario.

## 9. Search Console · capturas recibidas el 7 de octubre de 2026

Fuente: dos capturas proporcionadas por el propietario de la propiedad de dominio `yago.cl`, informe Indexación de páginas. No se ve en las capturas la fecha de última actualización ni un filtro de sitemap; los totales se registran como mostrados, sin asumir que representan todas las URLs actuales.

- **Indexadas: 19.**
- **Sin indexar: 3**, distribuidas en tres motivos:

| Motivo mostrado | URLs | Interpretación y comprobación pendiente |
| --- | --- | --- |
| Duplicada: el usuario no ha indicado ninguna versión canónica | 1 | URL identificada por el propietario: `https://anton-ia.yago.cl/login?next=%2F`, pantalla de acceso de ANTON.IA. No es una página comercial que necesite indexación; revisar exclusión explícita mediante `noindex` en esa aplicación. La canónica elegida por Google aún no se ha aportado. |
| Página con redirección | 1 | URL identificada en la captura: `http://yago.cl/`. Redirección pública 301 a `https://yago.cl/`, destino 200 y canónica equivalente. Exclusión esperada de la variante HTTP; no requiere eliminar ni validar la redirección correcta. |
| Rastreada: actualmente sin indexar | 1 | Estado de la captura inicial para `https://yago.cl/soluciones/automatizacion-para-servicios`. Solicitud confirmada el 7 de octubre. **Actualización del 8 de octubre: la API devuelve PASS y Enviada e indexada**, con último rastreo del 7 de octubre. Diagnóstico e historial en las secciones 10 y 19. |

La validación figura como **No iniciada** en los tres motivos. Eso indica el estado del flujo de validación, no por sí solo una incidencia crítica ni la necesidad de validar redirecciones correctas.

### URL duplicada identificada: acceso de ANTON.IA

El propietario proporcionó `https://anton-ia.yago.cl/login?next=%2F`. La propiedad de dominio de Search Console abarca también subdominios; esta URL no pertenece a las 47 páginas del sitemap de la web comercial.

Comprobación pública realizada:

- `/login?next=%2F` y `/login` responden 200 con título **Iniciar sesión · ANTON.IA**. Ninguna muestra `rel=canonical`, meta robots ni `X-Robots-Tag` en las respuestas revisadas.
- `/` responde 307 con destino `/login?next=%2F`.
- `/robots.txt` responde 404; no se encontró una política robots en esa ruta.
- No se encontró referencia a `anton-ia.yago.cl` en `src` de este repositorio. La mejora de indexación del login corresponde a la aplicación ANTON.IA.

No se debe solicitar indexación de esta pantalla de acceso ni asignarle como canónica la home comercial de YAGO. Mejora recomendada: publicar `noindex` en la respuesta de `/login` y sus variantes con parámetros, manteniendo el acceso del rastreador para que pueda leer esa señal. No se ha aplicado ese cambio en la aplicación. La inspección de Search Console permitiría confirmar cuál es la otra versión que Google considera duplicada.

El propietario confirmó que el login de su aplicación no necesita aparecer en Google; se deja fuera de las prioridades GEO.

### Redirección identificada y comprobada

Las nuevas capturas muestran como ejemplo `http://yago.cl/`, con último rastreo **4 oct 2026**. El informe de este motivo indica última actualización **3/10/26** y primera detección **6/9/25**; se conservan las fechas tal como aparecen, sin equiparar la actualización del informe con la de cada ejemplo.

Comprobación pública del 7 de octubre: la URL HTTP responde **301** con `Location: https://yago.cl:443/`; el puerto 443 es el predeterminado de HTTPS y se normaliza a `https://yago.cl/`. El destino responde **200**, sin otro salto, y su canónica es equivalente. Es una consolidación correcta en HTTPS, no una incidencia pendiente.

**Estado de la revisión:** los tres motivos tienen URL y tratamiento definidos. Login de ANTON.IA fuera de prioridades, redirección HTTP correcta y **solución comercial confirmada como indexada por API el 8 de octubre**. La diferencia con las 47 URLs del sitemap no prueba que las demás estén rechazadas o sin descubrir; los informes y solicitudes pueden tener distinto alcance y desfase de procesamiento.

**Siguiente fase:** Bing URL Inspection y AI Performance, seguida de la línea base de consultas GEO, citas y referrals.

## 10. Rastreada sin indexar · solución para empresas de servicios

URL proporcionada por el propietario: https://yago.cl/soluciones/automatizacion-para-servicios. Revisión pública y de implementación realizada el 7 de octubre de 2026.

### Comprobaciones

- Respuesta **200**, sin redirección, con canónica exacta a su propia URL.
- Meta robots **index, follow**, Googlebot permitido y sin `X-Robots-Tag` restrictivo en la respuesta.
- Incluida en el sitemap, que declara `lastmod` **2026-10-03T12:00:00.000Z**. Esa fecha no acredita la última visita de Google ni demuestra por sí sola cambios sustanciales de contenido.
- Título **Automatización para empresas de servicios | YAGO**, descripción propia y un H1.
- Contenido principal y tres respuestas FAQ presentes en el HTML inicial. Datos estructurados Organization, WebSite, ProfessionalService, Service, FAQPage y BreadcrumbList con JSON legible.
- Auditoría de enlaces desde las otras 46 URLs del sitemap completada sin errores de respuesta: solo `/soluciones` enlaza directamente a esta página, con dos enlaces. No es huérfana; tiene poco enlazado contextual desde otras páginas comerciales o guías. La auditoría no mide backlinks ni páginas fuera del sitemap.
- El contenido distingue empresas de servicios, pero se apoya principalmente en beneficios y procesos amplios de backoffice, aprobaciones y reportes. Es una observación editorial, no una causa confirmada de la exclusión.
- Implementación: `src/config/seo-pages.ts` y `src/app/soluciones/[slug]/page.tsx`. No se modificó el contenido público durante este diagnóstico.

### Diagnóstico y siguiente acción

La captura de inspección aportada por el propietario muestra:

- Estado: **Rastreada: actualmente sin indexar**.
- Último rastreo: **5 oct 2026, 3:16:05**, según la interfaz; no se presupone zona horaria.
- Rastreador: **Robot de Google para smartphones**.
- Rastreo permitido: **Sí**; obtención de página: **Correcto**; indexación permitida: **Sí**.
- Canónica declarada: la propia URL; canónica seleccionada por Google: **URL inspeccionada**.
- Referencias: `https://yago.cl/sitemap.xml` y `https://yago.cl/soluciones`.
- Campo Sitemaps: **Error temporal de procesamiento**.

Se volvió a consultar el sitemap público el 7 de octubre: **200**, `application/xml`, documento analizado correctamente con un parser XML, namespace de sitemap correcto, **47 URLs únicas** y presencia de esta solución. No hay un fallo actual del archivo en esta comprobación; el aviso temporal en la inspección no demuestra por sí solo que el sitemap esté roto ni explica la exclusión. Si persiste, revisar el estado y última lectura en el informe **Sitemaps**.

Las comprobaciones públicas y la inspección histórica no muestran un bloqueo de rastreo/indexación ni una canónica distinta. Han transcurrido aproximadamente dos días desde el rastreo registrado. Google todavía no la indexó en el estado mostrado; la causa editorial no está confirmada.

### Prueba en tiempo real y solicitud confirmadas

La captura posterior del propietario muestra **Prueba en tiempo real**, última prueba **7 oct 2026, 18:03** según la interfaz:

- **La URL está disponible para Google**.
- Disponibilidad de la página: **La página se puede indexar**.
- **Se ha solicitado la indexación**.
- Rutas de exploración: **1 elemento válido**.

La prueba y la solicitud fueron realizadas por el propietario y están confirmadas en la captura. Esto acredita disponibilidad y petición enviada, no inclusión efectiva en el índice.

**Seguimiento:** revisar tras varios días de procesamiento, sin repetir solicitudes rutinariamente. Si el estado persiste, priorizar ejemplos específicos del sector y enlaces contextuales pertinentes, con base en el diagnóstico editorial y los datos de rastreo. La solicitud no garantiza inclusión ni un plazo concreto. No se justifica una reescritura por el aviso temporal de sitemap solamente.

**Resultado posterior comprobado el 8 de octubre por API:** PASS, **Enviada e indexada**, obtención SUCCESSFUL, indexación permitida y canónica coincidente. Último rastreo: **2026-10-07T21:04:23Z**. La exclusión mostrada inicialmente ya no es el estado de esta inspección individual.

## 11. Bing AI Performance · línea base recibida

Fuente: captura del propietario recibida el 7 de octubre de 2026, sitio `https://yago.cl/`, sección **AI Performance (Beta)**.

| Campo visible | Valor |
| --- | --- |
| Período seleccionado | **3 M** |
| Citation sources | **Microsoft Copilots and Partners** |
| Total Citations | **0** |
| Avg. Cited Pages | **0** |
| Gráfico | Ambas series en cero en el período mostrado |

La captura no muestra fechas exactas de inicio/fin ni última actualización. No se inventa un intervalo calendario ni se asignan los totales del sitio a cada categoría del panel semanal. La interfaz advierte que los datos de detalle representan una muestra y que los resultados pueden refinarse al procesar datos adicionales.

**Interpretación:** el informe muestra cero citas registradas en el alcance y período seleccionados. No demuestra ausencia de menciones en ChatGPT, Perplexity, Google u otras experiencias ajenas al alcance visible. Tampoco identifica por sí solo la causa ni confirma que las páginas estén indexadas en Bing. La versión SEO/GEO se publicó el 3 de octubre; esta línea base todavía no permite evaluar una tendencia posterior a esa publicación.

**Resultado de la siguiente comprobación:** recibidas las capturas de Bing Index y Live URL de integración de IA; sigue **Discovered but not crawled**, con prueba en vivo correcta. Detalle en la sección 12.

## 12. Bing Index frente a Live URL · integración de IA

Capturas aportadas por el propietario el 7 de octubre de 2026 para `https://yago.cl/servicios/integracion-ia`:

| Comprobación | Resultado visible |
| --- | --- |
| Bing Index | **Discovered but not crawled**; **URL cannot appear on Bing** |
| Fecha de descubrimiento | **04 Oct 2026** |
| Etapas del informe | Discover completada, Crawl pendiente/con aviso, Index sin completar |
| Live URL | **URL can be indexed by Bing** |
| Diagnóstico Live URL | **No SEO/GEO issues found** |
| Marcado detectado por Live URL | **2 Markup types found**; tipos no desplegados en la captura |
| Hora de prueba mostrada | **Today at 22:08**, sin asumir zona horaria |

**Interpretación:** el registro del índice aún no refleja rastreo/indexación de esta página. La prueba en vivo sí logra acceder y confirma condiciones técnicas de indexabilidad, pero no incorpora automáticamente la URL al índice. El mensaje rojo sobre problemas y las Webmaster Guidelines es genérico: no especifica aquí un bloqueo, penalización ni causa editorial. El resultado de Live URL no garantiza que la página supere todos los criterios de selección de Bing.

Ya se había confirmado una solicitud manual de indexación y notificaciones IndexNow. La nueva captura muestra el botón **Request indexing**, pero no acredita una nueva solicitud; no se registra otra ni se pide repetirla rutinariamente. El informe muestra descubrimiento hace aproximadamente tres días, sin prometer un plazo de rastreo.

### Home confirmada en Bing Index

La captura posterior del propietario para `https://yago.cl/`, con **Bing Index** seleccionado, confirma:

- **Indexed successfully**.
- **URL can appear on Bing**.
- **No SEO/GEO issues found**.
- **2 Markup types found**, sin desplegar cuáles son.

Esto acredita inclusión de la home en el índice, no posición, tráfico ni citas de IA. Descarta la hipótesis de que ninguna URL de YAGO esté indexada en Bing; no certifica el estado de las otras páginas. No se requiere otra solicitud para la home a partir de esta captura.

**Siguiente acción:** seguir el procesamiento de integración de IA y comenzar la medición de recomendaciones en sesiones independientes. No se extrapola el estado de una URL a las 47 páginas ni se atribuyen los cero del informe AI Performance únicamente a la falta de indexación de integración de IA.

## 13. Primera ronda de consultas GEO · cinco respuestas recibidas

Empezar con las cinco preguntas de proveedor, una por capacidad, que ya figuran en `docs/seguimiento-geo.csv`:

1. ¿Qué empresas automatizan procesos empresariales en Chile?
2. ¿Qué empresas integran IA en procesos empresariales en Chile?
3. ¿Quién desarrolla aplicaciones empresariales con IA en Chile?
4. ¿Qué empresas implementan agentes de IA en Chile?
5. ¿Qué servicios de OCR para empresas hay en Chile?

Usar una sesión nueva/temporal para cada pregunta, búsqueda activada cuando exista y el texto exacto sin mencionar YAGO. Registrar fecha, asistente/modelo, condiciones, mención, URL citada y precisión de la descripción. Un chat nuevo puede conservar personalización; registrar si está desactivada o desconocida. No usar esta conversación, que ya conoce YAGO, como respuesta independiente.

Una respuesta sin YAGO cuenta solo para esa consulta, motor y ejecución; no representa invisibilidad global. Una respuesta que lo mencione tampoco garantiza una recomendación estable. Mantener las condiciones al repetir y registrar citas de fuentes externas además de enlaces a yago.cl. Recibidas las cinco respuestas (secciones 14 a 17); una ejecución por consulta y metadatos incompletos. El enlace de OCR a nuestra web está confirmado, con una asociación de identidad inconsistente en el mapa (sección 18).

## 14. Primera respuesta compartida · automatización en Chile

Resultado recibido del propietario el **8 de octubre de 2026**, después de indicarle la consulta **¿Qué empresas automatizan procesos empresariales en Chile?** en un chat nuevo con búsqueda. El texto compartido no muestra la pregunta original ni metadatos de la ejecución. El motor se registra como ChatGPT según el contexto de la prueba, el modelo no está informado y no se ha confirmado sesión temporal/personalización. La fecha registrada en el CSV es la de recepción, no una fecha de ejecución verificada.

**Resultado observable:** YAGO no está mencionada en la respuesta compartida y no hay una cita visible de YAGO o yago.cl. La exactitud de una descripción de YAGO no aplica porque no aparece. Los nombres de fuentes y el mapa evidencian uso de resultados externos en la respuesta, sin identificar todos sus enlaces ni las condiciones de búsqueda.

Proveedores destacados: Rocketbot, Sisua Digital Chile, CER-SERVICIOS SPA, MICROSYSTEM SA, MetroCapital AI Tech, Quanam Chile, Valuetech, Auctus SpA, Allware y JAPS Engineering. También menciona Karpio, PRODEV, OPBIOS, Chromatic IT y Aureolab.

Fuentes nombradas en el texto: RevenueBase, Cer Servicios, Microsystem, Adiron y Karpio, además de referencias agrupadas. Las URL completas de esas fuentes no se aportaron. No se han comprobado sus afirmaciones sobre proveedores, adquisiciones ni resultados. Las atribuciones de Mapbox/OpenStreetMap corresponden al mapa, no a evidencia comercial de YAGO.

**Lectura para la estrategia:** esta ejecución interpreta la consulta ampliamente, con fuerte presencia de RPA, BPM/workflow e integración. Muestra que, en esta respuesta, se usaron tanto webs de proveedores como fuentes externas/directorios. Esto orienta a observar cobertura por capacidad y corroboración externa, pero no demuestra qué señal determinó la selección ni justifica cambiar la oferta de YAGO a RPA o buscar reseñas de una plataforma como garantía.

**Siguiente consulta:** **¿Qué empresas integran IA en procesos empresariales en Chile?**, en otra sesión nueva/temporal con búsqueda activada y sin mencionar YAGO. Solicitar respuesta completa, enlaces de las fuentes y nombre del modelo si se muestra. Mantener esta primera observación como una sola ejecución y completar la ronda antes de atribuir causas o priorizar nuevas páginas.

## 15. Segunda respuesta compartida · integración de IA en Chile

Resultado recibido del propietario el **8 de octubre de 2026**, tras indicarle la consulta **¿Qué empresas integran IA en procesos empresariales en Chile?**. Como en la primera prueba, la pregunta original y los metadatos no están visibles en el texto compartido. Motor ChatGPT según contexto, modelo no informado y condiciones de sesión/personalización sin confirmar. Se registra fecha de recepción, no ejecución verificada.

**Resultado observable:** YAGO no está mencionada ni tiene una cita visible en el texto compartido. Descripción correcta de YAGO: no aplica.

Proveedores destacados: MAS Analytics, NeuralWorks, Forcast, Sisua Digital Chile, Practia, Quanam Chile, Easybots, MetroCapital AI Tech, Soft-Tech Innovación y Brinca. Además figuran Accenture, NeoAndes, IAutomatiza, FutureFlow, OpenSistemas y ExpertPro en los ejemplos o clasificaciones por necesidad.

Fuentes nombradas: **ProyectoIA** y **Accenture**, con referencias agrupadas y mapa. No se aportaron los enlaces completos. La afirmación de la respuesta sobre **677 empresas que implementan IA en Chile** es información atribuida al asistente/fuente citada, no una cifra verificada en esta revisión. Las descripciones de los proveedores tampoco se han validado independientemente.

La respuesta separa datos y modelos predictivos, integración empresarial, RPA, agentes, RAG y adopción de IA. YAGO no aparece en esta selección aun cuando varias capacidades corresponden a su oferta publicada; eso registra una ausencia en esta ejecución, no una causa confirmada ni una conclusión sobre todo el mercado.

**Balance parcial:** recibidas dos de las cinco preguntas prioritarias, una ejecución por pregunta, ambas sin mención ni cita visible de YAGO. Mantenerlo como observaciones de esta ronda, sin calcular una tasa representativa de visibilidad general.

**Siguiente consulta:** **¿Quién desarrolla aplicaciones empresariales con IA en Chile?**, en otra sesión nueva/temporal con búsqueda y sin mencionar YAGO. Pedir respuesta completa, fuentes enlazadas y modelo si se muestra. Las consultas de agentes y OCR quedan pendientes después de esta.

## 16. Tercera respuesta compartida · aplicaciones empresariales con IA

Resultado recibido del propietario el **8 de octubre de 2026**, tras indicarle la consulta **¿Quién desarrolla aplicaciones empresariales con IA en Chile?**. El texto no incluye la pregunta original, modelo ni fecha de ejecución. Motor registrado como ChatGPT según contexto, búsqueda inferida por fuentes visibles y condiciones de sesión/personalización sin confirmar. Fecha del CSV: recepción del resultado.

**Resultado observable:** YAGO no aparece mencionada ni con una cita visible. Exactitud de descripción de YAGO: no aplica.

Proveedores destacados: Forcast, DSAC Chile, MAS Analytics, Option, NeuralWorks, Tubesoft, SilocyData, Apollo.TI, AT+, Tecnich, CMC Ingeniería y Acuaria Labs. Fuentes nombradas en el texto: **Apollo.TI, AT+, Tecnich, CMC Ingeniería y Acuaria Labs**, sin URL completas. Las descripciones, comparaciones y recomendaciones del asistente no están verificadas independientemente.

La respuesta distingue construcción de una aplicación completa, agentes/copilotos, integraciones ERP/CRM/SAP, datos/ML y RAG. Describe como criterio diferencial la capacidad de entregar frontend, backend, bases de datos, integraciones, despliegue y soporte. Esta es una observación del contenido de la respuesta, no una explicación confirmada de cómo seleccionó los proveedores. Varias fuentes nombradas son webs de proveedores, lo que complementa el uso de fuentes sectoriales observado en las otras consultas.

**Balance parcial:** tres preguntas prioritarias recibidas, una ejecución por pregunta, todas sin mención ni cita visible de YAGO. No se generaliza a todas las búsquedas ni a todas las plataformas. Sin datos suficientes para atribuir el resultado a indexación, falta de reseñas o contenido específico.

**Siguientes consultas:** **¿Qué empresas implementan agentes de IA en Chile?** y **¿Qué servicios de OCR para empresas hay en Chile?**, cada una en sesión nueva/temporal con búsqueda, sin mencionar YAGO. Obtener resultados y fuentes completas para cerrar la primera ronda y priorizar distribución, evidencia o mejoras de contenido con base en el conjunto.

## 17. Resultados de agentes y OCR · cierre de la primera ronda

Ambas respuestas recibidas del propietario el **8 de octubre de 2026**, tras indicarle las consultas de agentes y OCR por separado. Como en las anteriores, las preguntas originales y metadatos de ejecución no son visibles en el texto. Motor ChatGPT según contexto, modelo no informado, búsqueda inferida de las fuentes y condiciones de sesión/personalización sin confirmar. Fecha registrada: recepción.

### Agentes de IA

**YAGO no aparece mencionada ni con cita visible.** Destaca MAS Analytics, FutureFlow, Aigentz, Iautomatiza, Austral AI, FlowNex AI, MetroCapital AI Tech, Easybots, Databot y Llaima AI. También nombra otros proveedores en el mapa, texto y clasificaciones.

Fuentes nombradas: **ProyectoIA, Andrés Ospina e Informacion Corporativa**, además de referencias agrupadas. No se recibieron sus URL completas. Las cifras y afirmaciones sobre proveedores son parte de la respuesta externa, sin verificación independiente. La respuesta diferencia agentes comerciales, voz, integraciones ERP/CRM y sistemas multiagente; eso no identifica la causa de la ausencia de YAGO.

### OCR para empresas

**YAGO aparece mencionada y recomendada**, en la primera fila de una tabla de proveedores, y de nuevo en ejemplos de extracción de datos hacia ERP y consumo de una API. El propietario aportó posteriormente el enlace de la cita `https://yago.cl/ocr?utm_source=chatgpt.com`, confirmado en la sección 18. La otra fuente agrupada en **YAGO+1** no se aportó; no se registra `/ocr-master` como efectivamente citada solo por la descripción de la API.

Se contrastó el texto con https://yago.cl/ocr y https://yago.cl/ocr-master:

- OCR sobre facturas, órdenes de compra, contratos, formularios y PDFs escaneados, con campos estructurados para planillas, ERP o flujos: consistente con la descripción publicada.
- API OCR Master que acepta PDF/JPG/PNG/HEIC y devuelve JSON: consistente con la descripción publicada.
- La valoración **Muy alto** y la selección frente a competidores son opiniones del asistente, no certificaciones ni resultados medidos de YAGO. La primera fila en esta respuesta no es un puesto estable en un ranking.

**Posible confusión de entidad:** el mapa lista **Asesorias E Inversiones Yago Ltda**, mientras la identidad configurada/publicada del sitio es **Yago SpA**. No se ha confirmado relación entre esas entidades ni el enlace de la ficha del mapa. Se registra descripción de servicios consistente e identidad parcialmente ambigua. No se debe enlazar esa ficha como perfil oficial, modificar la razón social ni crear un perfil presencial sin verificar. La modalidad remota del negocio se mantiene.

### Resumen de observaciones de esta ronda

| Consulta | YAGO mencionada | Cita visible de YAGO | URL de la cita verificada |
| --- | --- | --- | --- |
| Automatización empresarial | No | No | No aplica |
| Integración de IA | No | No | No aplica |
| Aplicaciones empresariales con IA | No | No | No aplica |
| Agentes de IA | No | No | No aplica |
| OCR para empresas | Sí | Marcador YAGO+1 | `https://yago.cl/ocr?utm_source=chatgpt.com` aportada y comprobada |

Una de cinco respuestas menciona YAGO. Este recuento describe la muestra compartida; no es una tasa representativa de visibilidad ni una prueba causal del efecto de la implementación SEO/GEO. No se mezcla con los cero de AI Performance, que corresponden a otro alcance y período.

### Acciones priorizadas

1. **Fuentes e identidad del resultado OCR:** enlace a `/ocr` y datos de la ficha recibidos; la cita web es correcta, mientras el mapa muestra una identidad con nombre, dirección y teléfono distintos (sección 18). Registrar/Reportar la asociación si la interfaz permite feedback. Falta la otra fuente agrupada, sin impedir el registro de la cita ya confirmada.
2. **Preservar y reforzar OCR:** mantener claramente diferenciados servicio implementado y API. Añadir evidencia real de documentos, validación e integración cuando se disponga de casos autorizados; medir contactos de OCR, no solo menciones.
3. **Completar indexación y evidencia para las otras capacidades:** seguir integración de IA en Bing y la solución comercial en Google. Priorizar casos con alcance, entregables, resultados y fuentes antes de ampliar páginas por ausencia en una respuesta.
4. **Corroboración externa:** ProyectoIA comprobado y solicitud gratuita enviada el 8 de octubre, con confirmación **Recibimos tu empresa**; revisión/publicación pendiente. Textos de LinkedIn preparados para alinear la oferta. Detalle en `docs/presencia-externa-yago.md`. Reseñas y casos de clientes siguen a cargo del propietario.
5. **Repetición comparable:** repetir las cinco consultas en una próxima revisión, con modelo, fecha y fuentes completas, y contrastar en otra plataforma. Evitar ejecuciones repetidas hasta lograr una respuesta favorable.

## 18. Cita de OCR confirmada e identidad del mapa

El propietario aportó el **8 de octubre de 2026** el enlace `https://yago.cl/ocr?utm_source=chatgpt.com` como fuente de la respuesta OCR. Consulta pública del enlace: **200**, robots **index, follow** y canónica **https://yago.cl/ocr**. El parámetro UTM identifica el origen del enlace; no crea otra página canónica. No acredita por sí solo visitas reales ni leads en GA4.

La ficha compartida muestra:

- Nombre: **Asesorias E Inversiones Yago Ltda**.
- Dirección: **Pdte Errázuriz 4263, 7550303 Las Condes, Región Metropolitana, Chile**.
- Teléfono: **+56 2 2727 1623**.
- Reseñas: **0**.
- Descripción amplia de asesoría/inversiones, con servicios concretos no confirmados en ese texto.

Comparación: la identidad configurada/publicada de nuestro sitio es **Yago SpA**, con contacto **nicolas.yarur.g@yago.cl** y teléfono **+56 9 6393 0231**. La modalidad comercial confirmada es remota. La ficha aportada no coincide con esos identificadores y no debe tratarse como perfil oficial de nuestra empresa. No se ha investigado la fuente original de la ficha ni se ha confirmado una relación jurídica entre ambas razones sociales.

**Conclusión:** la respuesta incluye una cita correcta a nuestra web y una descripción de OCR consistente, junto a una asociación de mapa inconsistente. Se conserva el resultado positivo de cita, pero la exactitud global sigue marcada **parcial**. No se atribuye a un problema de la canónica ni se modifica la web para adoptar los datos de esa ficha.

**Tratamiento:** si la respuesta ofrece un control para reportar asociación incorrecta, aportar nombre y dominio correctos y la discrepancia de ficha. Esto no equivale a corregir el proveedor original del mapa ni garantiza un cambio. Mantener consistentes Yago SpA/YAGO, yago.cl, contacto y especialidades en los perfiles reales; no crear un establecimiento presencial para resolver la homonimia. No se ha enviado feedback desde este asistente.

**Siguiente prioridad estratégica:** revisar las fuentes sectoriales/directorios que figuran en las consultas de integración/agentes y preparar corroboración de las capacidades de YAGO con información real, mientras se sigue la indexación. No hace falta otra ronda inmediata de las mismas preguntas para cerrar esta observación.

## 19. Prioridades 2, 3 y 4 · ejecución del 8 de octubre de 2026

Objetivo: diagnósticos y oportunidades B2B calificadas en Chile, de responsables de operaciones, tecnología y finanzas que comparan proveedores. CTA principal **Agendar diagnóstico**. Promesa: conectar documentos, datos y sistemas con alcance verificable. Objeciones: integraciones, entregables, revisión, costos y soporte. Evidencia disponible: oferta/productos documentados, autoría y perfiles; casos y testimonios de clientes todavía pendientes. Indicador principal: contactos y oportunidades por servicio, apoyado por consultas, citas y visitas.

### Prioridad 2: cuatro servicios reforzados y publicados

Cada servicio incorpora entrada, salida, conexiones, un flujo de cuatro pasos y criterios de aceptación. Son **ejemplos de alcance**, identificados como referencia y con interfaces a confirmar, no casos de clientes ni resultados obtenidos.

- Automatización: solicitud por correo/formulario → validación → responsable/aprobación → registro y bitácora.
- Integración: factura PDF → extracción estructurada → revisión de excepciones → salida/carga al ERP cuando su interfaz lo permite.
- Aplicaciones: portal con usuarios y documentos → propuesta de datos con IA → revisión por rol → integración y operación.
- Agentes: consulta de procedimiento → recuperación con referencias → propuesta de ticket → confirmación y registro.

Se reforzaron entregables de aplicaciones, datos resumidos y enlaces a SADT, SOF.IA, ANTON.IA, OCR/API y soluciones. Los servicios relacionados se eligen de forma contextual; el flujo de automatización añade otro enlace entrante a la solución de empresas de servicios. Los bloques figuran también en `/llms-full.txt` desde la misma configuración.

Fecha de revisión del servicio y `lastmod` actualizados solo para páginas modificadas. Fuente: `src/config/services.ts`, `src/components/services/ServiceFlowExample.tsx`, `src/app/servicios/[slug]/page.tsx`, `src/app/sitemap.ts` y `src/lib/llms.ts`.

**Publicación:** Firebase `automata-ai/studio` desplegó correctamente. Pasaron tipado, build de 55 páginas y 14 pruebas relevantes de escritorio/móvil en local; las mismas 14 pasaron en producción, incluyendo accesibilidad de la plantilla, enlaces y correspondencia del contenido Markdown. Auditoría posterior: **47/47 URLs** del sitemap con respuesta, canónica, directivas y JSON-LD correctos en las comprobaciones realizadas. Los nueve tests del generador de reportes también pasaron.

IndexNow aceptó **seis URLs actualizadas con 200 OK**: cuatro servicios, la solución para empresas de servicios y `/llms-full.txt`. Aceptación de notificación no equivale a rastreo/indexación de la versión nueva.

### Prioridad 3: presencia externa

ProyectoIA.com admite perfiles gratuitos revisados. Se enviaron capacidades reales, web, identidad, logo, LinkedIn y contacto de verificación. Confirmación **Recibimos tu empresa**, **2026-10-08T15:58:00.254Z**, sin errores de validación. La solicitud queda en revisión; no se trata como ficha publicada ni se añade una URL supuesta a `sameAs`.

LinkedIn público todavía centra el lema en empresas con alta rotación de personal; se prepararon lema, descripción y publicación en `docs/presencia-externa-yago.md`. No hay acceso administrativo para aplicarlos automáticamente. La nueva consulta de Clutch recibió 403, sin inferir retirada del perfil ni actualizar su recuento de reseñas. El propietario confirmó que compartió con Christian Dominguez el cuestionario propio para usuarios de AXIS; empresa, respuestas y autorización de publicación pendientes. Seguimiento en `docs/seguimiento-clientes.csv`.

### Prioridad 4: acceso y primera línea base real

Cuenta técnica sin claves descargables: **yago-seo-reader@automata-ai.iam.gserviceaccount.com**. El propietario concedió acceso a Search Console y rol Lector a GA4. Se comprobaron ambos por API; GA4 corresponde a **YAGO web**, **557294618**, flujo **G-DSNXKXMCKX**. Detalles de permisos: `docs/acceso-apis-seo.md`.

Las ocho inspecciones del último reporte completado por el Programador de tareas devuelven **PASS / Enviada e indexada**: home, cuatro servicios, OCR, OCR Master y solución para empresas de servicios. Los últimos rastreos de los servicios son del 4 de octubre y el de la solución del 7; por tanto, esta confirmación no acredita procesamiento de los bloques publicados el 8.

Primer corte: **10 de septiembre a 7 de octubre de 2026**. Search Console Web, país Chile, dominio principal HTTPS y consultas sin las expresiones de marca excluidas. GA4: sesiones Organic Search por landing, eventos `generate_lead` por servicio excluyendo fuentes de prueba identificadas y fuentes conocidas de asistentes.

| Servicio | Impresiones Google sin marca, Chile | Clics en ese filtro | Sesiones orgánicas GA4 por landing | Contactos por servicio | Referrals IA por landing |
| --- | --- | --- | --- | --- | --- |
| Automatización | 2 | 0 | 0 | 0 | 0 |
| Integración de IA | 0 | 0 | 0 | 0 | 0 |
| Aplicaciones | 0 | 0 | 0 | 0 | 0 |
| Agentes | 2 | 0 | 2 | 0 | 0 |
| OCR | 16 | 0 | 1 | 0 | 0 |

Las métricas no tienen idéntico alcance: GA4 orgánico no se filtró por país ni consulta sin marca. Son datos reportados, con posible desfase y visitas manuales, no contactos comerciales validados. La cita positiva de OCR se recibió el 8 y el corte termina el 7; el cero de referrals no la contradice. El período incluye días anteriores a la actualización y no demuestra su impacto causal.

`docs/panel-semanal.csv` registra este primer corte; snapshots completos en `.local/seo/reports/`, excluidos de Git y Firebase. Generador: `npm run seo:report -- --save`. La tarea **YAGO - Seguimiento SEO** quedó probada con resultado 0 y próxima ejecución el **12 de octubre a las 09:00, hora de Windows**. Es local y requiere equipo encendido/sesión disponible.

**Bing conectado posteriormente:** el propietario almacenó la clave en Secret Manager, versión 1. El reporte de **2026-10-08T17:14:14.147Z** consultó las ocho rutas con GetUrlInfo. La API registra último rastreo de la home **5 de octubre, 01:07 UTC**, y OCR **5 de octubre, 01:23 UTC**. Automatización registra **17 de septiembre** y aplicaciones **22 de enero**; integración de IA y agentes no devuelven una fecha utilizable. Esto orienta a seguir la actualización de las páginas, pero no sustituye el estado de Bing Index ni demuestra la causa de las recomendaciones. Los valores de fecha por defecto se convierten a no disponible y no se presentan como visitas de rastreo.

### Pendientes reales

- AI Performance de Bing: mantener el seguimiento mediante exportación/captura del portal; GetUrlInfo está conectado pero no reemplaza las métricas de citas ni el estado de Bing Index.
- Revisión/publicación de ProyectoIA por sus responsables y posible verificación por correo.
- LinkedIn actualizado y verificado el 13 de octubre; la publicación de distribución sigue preparada si se decide compartirla.
- Casos y reseñas con participación de sus autores; no se fabrican ni se atribuye aprobación al contacto preliminar con Christian.
- Próximas comparaciones GEO en condiciones documentadas, después de que se procesen los cambios; no se automatiza una sesión de ChatGPT con datos privados ni se presentan respuestas de este chat como pruebas independientes.

## 20. Consentimiento, LinkedIn, referencias y rendimiento · cierre del 13 de octubre

### Cuestionario AXIS

En el mismo enlace https://yago.cl/opiniones/axis se añadió autorización **opcional y desmarcada** para publicar respuestas o extractos fieles en yago.cl. La persona elige atribución anónima o nombre/cargo/empresa indicados; correo nunca público. El mail registra versión de formulario, texto de consentimiento, selección y atribución. La identificación requiere nombre solo cuando se elige esa modalidad. Los envíos anteriores siguen sin autorización; su plantilla se comparó con el correo técnico original y permanece idéntica.

Nueve pruebas unitarias y seis comprobaciones UI pasaron, incluidas autorización por defecto NO, nombre requerido para atribución identificada y reintentos. Prueba real v2 con datos ficticios entregada: referencia `3bd2e5e9-4e79-4690-ac99-b216cb712488`, correo `01a1335c-54f8-75e4-a5d1-31668213ee1f`, estado delivered. No es un testimonio publicable. Detalles en `docs/cuestionario-axis.md`.

### Identidad externa

LinkedIn de YAGO actualizado desde una sesión administrativa autorizada, con confirmación tras recargar y consulta pública posterior: lema, resumen, siete especialidades, teléfono y agenda vigente. Fuente: https://www.linkedin.com/company/yago-spa. No se publicó la actualización preparada como post ni se editaron datos societarios no confirmados.

ProyectoIA: revisión del sitemap de fichas del 13 de octubre, sin candidatos cuyo slug contenga YAGO; solicitud original pendiente, sin duplicar. Referencia GrupoExpro: web y blog activos revisados, propuesta factual, correo y checklist en `docs/solicitud-referencia-grupoexpro.md`. Falta interlocutor y proyecto concreto aprobado; no se envió ni se afirma una publicación externa.

### Rendimiento y verificación de publicación

Se generaron WebP para ilustraciones de servicios (95–96 % menos bytes que los PNG originales) y logos, se difirió el SDK externo de GA4 conservando cola/medición, Lenis quedó opcional en escritorio y Motion para reveals/contadores se carga dinámicamente sin ejecutarse en táctil. Archivos originales conservados.

Builds y despliegues Firebase completados. Una sesión vencida bloqueó el último despliegue y el propietario la renovó antes de publicar. Después de la publicación final pasaron 16 comprobaciones UI relacionadas. Se conservaron reportes Lighthouse móviles: SEO técnico 100 en los tres templates medidos, integración IA 52→73 y OCR 44→64 en las ejecuciones inicial/final, pero home 70→59 en la última con resultados intermedios variables. No se declara mejora uniforme ni Core Web Vitals de campo aprobados. Trabajo pendiente: main thread/JavaScript y LCP en una medición estable. Reportes y alcance en `docs/rendimiento-movil-yago.md`.

### Nuevo corte de datos reales

Reporte obtenido el **13 de octubre de 2026**, ventana **15 de septiembre–12 de octubre** (28 días completos en America/Santiago). Google confirmó ocho URLs prioritarias con PASS; auditoría pública **47/47** correcta. Search Console, GA4 y Bing conectados.

| Servicio | Impresiones Google sin marca en Chile | Clics en ese filtro | Sesiones orgánicas GA4 por landing | Contactos por servicio | Referrals IA por landing |
| --- | --- | --- | --- | --- | --- |
| Automatización | 2 | 0 | 0 | 0 | 2 |
| Integración IA | 3 | 0 | 0 | 0 | 0 |
| Aplicaciones | 0 | 0 | 0 | 0 | 0 |
| Agentes | 9 | 0 | 3 | 0 | 0 |
| OCR | 52 | 0 | 1 | 0 | 1 |

Los referrals pueden incluir comprobaciones manuales del propietario; no se interpretan como oportunidades comerciales. La ventana se solapa con el corte previo y cambió de fechas, por lo que no es una comparación causal del trabajo. Los campos comerciales y las citas de AI Performance requieren sus propias fuentes.

La tarea semanal de Windows se revalidó tras renovar Firebase: ejecución **13 de octubre, 00:43:59 UTC−03:00**, resultado 0, próxima indicada **19 de octubre a las 09:00**. El intento anterior había quedado interrumpido; requiere equipo, sesión y red disponibles. Se corrigió el cálculo de fechas del generador para respetar el día de Santiago al pasar medianoche UTC.

## 21. Revisión ampliada de estadísticas · 22 de octubre de 2026

Detalle y fuentes en **`docs/estado-seo-geo-2026-10-22.md`**. Se renovó la sesión Firebase y se recuperaron Google, GA4 y Bing. El último reporte completo usa `--inspect-all`: **47/47 páginas técnicamente correctas, pero solo 17/47 confirmadas indexadas por Google**. Las ocho prioritarias siguen indexadas; las doce guías y AXIS no. La inspección ampliada sustituye la lectura incompleta de que ocho prioridades bastaban para evaluar todo el contenido, sin reinterpretar los resultados históricos.

Comparación sin solapamiento, **7–13 vs. 14–20 de octubre**: impresiones por página en Google Web Chile sin marca **102→144**, clics **0→0**, sesiones orgánicas GA4 **13→17**, impresiones OCR **64→118**. Agentes **18→5** e integración **7→5**: no se presenta una mejora uniforme. Google identifica el 21 como primer día con datos incompletos.

Corte solicitado **24 sep–21 oct**: suma de impresiones por página filtradas **276**, un clic de SADT; GA4 **40 sesiones orgánicas**, **7 sesiones de fuentes IA identificadas** y **un evento de contacto OCR el 21**, atribuido a Google orgánico en Chile. No está validado como oportunidad comercial. Las cinco categorías y advertencias de alcance se añadieron al CSV.

GEO: la nueva información son visitas atribuidas, no una nueva ronda de citas. La última muestra independiente sigue siendo del 8: una de cinco respuestas mencionó YAGO y citó OCR. ProyectoIA no tiene candidatos YAGO en las 2.364 URLs del sitemap de fichas comprobado el 22. El permiso de publicación de casos y testimonios sigue pendiente.

Se corrigieron la lectura Bing desde Secret Manager y el estado del reporte: las métricas ausentes ya producen `complete: false` y código 1 en un corte completo. Doce pruebas pasaron y la ejecución final real quedó completa con las tres fuentes. El wrapper semanal inspecciona todas las URLs del sitemap; próxima ejecución indicada **26 de octubre, 09:00**. El snapshot del 19 tenía proceso 0 con métricas ausentes y no se usa como corte válido.

## 22. OCR como entrada al resto de YAGO · 25 de octubre de 2026

Intervención aprobada y publicada en https://yago.cl/ocr. El bloque **Más que OCR** conecta cuatro necesidades con integración, automatización, aplicaciones y agentes, además de Nosotros y el formulario. Se unificó **Solicitar evaluación** y se reemplazó el panel de métricas ilustrativas por una factura de ejemplo con extracción, excepción pendiente de revisión y salida prevista. Datos ficticios identificados; sin casos o métricas de clientes inventados.

La fecha específica de OCR se actualizó en el contenido, Service JSON-LD y sitemap. `/llms-full.txt` recoge el ejemplo y los enlaces desde la misma configuración. Se emiten eventos de clic por servicio con el tracker existente y se verificó que una entrada nueva por OCR conserve su atribución al continuar al formulario web.

Tipado y build correctos, 12 comprobaciones OCR locales y 27 comprobaciones distintas de producción correctas tras resolver respuestas transitorias 429 en siete comprobaciones, repetidas con un worker; una comprobación solo móvil se omite en escritorio. Formularios de prueba interceptados, sin contactos reales. Firebase `automata-ai/studio` confirmó despliegue completo después de renovar la sesión. IndexNow aceptó `/ocr` y `/llms-full.txt` con 200, sin asumir indexación nueva.

Detalle, eventos y seguimiento: **`docs/ocr-puerta-de-entrada-yago.md`**. La línea base de medición sigue siendo el corte del 22; todavía no se atribuye una mejora comercial o de posicionamiento a estos cambios.

## 23. Seguimiento posterior a la publicación · noche del 25 de octubre

Reporte completo tras renovar Firebase: **27 sep.–24 oct.**, generado el 26 a las 02:51 UTC, todavía 25 en Santiago. Google finalizado hasta el **23**, GA4 solicitado hasta el 24. Auditoría **47/47** e indexación **17/47**, sin fallos de consulta; blog **0/12** y AXIS aún sin indexar.

Comparación independiente **10–16 vs. 17–23 oct.**: impresiones por página Google sin marca Chile **118→141**, clics **0→0**, sesiones orgánicas GA4 **11→20**, impresiones OCR **84→116**, sesiones desde IA **0→5** y contactos **0→1**. El contacto es el mismo evento OCR del 21 ya conocido; no se cuenta como nuevo desde la revisión anterior.

Corte de 28 días: **329 impresiones por página, un clic de SADT, 46 sesiones orgánicas (33 Chile), nueve sesiones de fuentes IA y un contacto**. Las ventanas móviles se solapan con el corte del 22. Nuevos rastreos Bing de automatización e integración el 23 y OCR el 25, sin inferir citas o indexación.

El bloque de OCR se publicó el mismo 25: los datos consolidados son anteriores. La consulta intradía del 25 todavía no devuelve filas procesadas de sus eventos ni de sesiones con entrada OCR; no se juzga su efecto ni se generan eventos artificiales. La última ronda independiente de respuestas de asistentes sigue siendo la del 8.

Detalle, alcance y evidencia: **`docs/estado-seo-geo-2026-10-25.md`**. La próxima ejecución programada indicada es el **26 a las 09:00**, con necesidad de equipo, red y sesión disponibles; el último corte completo comprobado aquí fue manual.

## 24. Indexación y GEO · intervención y confirmación del 26 de octubre

Se publicaron enlaces directos desde la portada a Nosotros y las guías prioritarias, información ampliada de Yago SpA y entregables, interpretación de estados de AXIS, un ejemplo de aceptación de integración y una plantilla CSV original de evaluación OCR. HTML, Markdown, datos estructurados y fechas consistentes. Tipado y build correctos, **28 pruebas locales y 28 de producción** pasaron en escritorio y móvil.

Google aceptó el reenvío del sitemap con **204**, e IndexNow siete URLs con **200**. El propietario confirmó las cuatro solicitudes individuales desde Search Console. La API comprobó **PASS / Enviada e indexada** para Nosotros, AXIS y las guías de OCR/integración, con rastreos del 26. El nuevo barrido de las 47 URLs confirmó **21/47 indexadas** frente a 17/47; blog **2/12** frente a 0/12. Auditoría técnica **47/47** y tres fuentes conectadas. El corte de tráfico se mantuvo en **27 sep.–24 oct.**: no se presenta como efecto de la publicación nueva.

Seguimiento a ProyectoIA enviado a su contacto oficial desde pgongora, estado Resend **delivered**, pendiente de respuesta y de ficha publicada. Se preparó una ronda GEO neutral de cinco preguntas con registro de modelo, fecha, búsqueda y fuentes; todavía no hay respuestas nuevas que sustituyan la muestra del 8.

Detalle y evidencia: **`docs/indexacion-geo-2026-10-26.md`**. Nueva ronda: **`docs/ronda-geo-2026-10-26.md`**. Snapshot completo final: `.local/seo/reports/2026-10-26T04-00-43-016Z.json`. Restan 26 páginas sin confirmar indexación y las referencias de clientes autorizadas continúan pendientes.

## 25. Segunda ronda de indexación y distribución · cierre del 27 de octubre

Se publicaron la agrupación de las doce guías por necesidad, comparaciones de Servicios y Productos, catálogos estructurados y una guía de agentes ampliada con ejemplo y criterios de evaluación. Se corrigió la presentación de Productos para distinguir los dos productos principales, la API y el servicio OCR; se añadieron enlaces a los índices desde la portada. Tipado, build, **40 pruebas locales y 40 de producción** correctos.

El propietario confirmó la revisión y solicitudes necesarias de Blog, Servicios, Productos y la guía de agentes. La API devuelve **PASS / Enviada e indexada** para las cuatro, con rastreos del **27 a las 15:24 UTC**. El barrido completo confirma **25/47 indexadas**, frente a 21 de la primera ronda; guías **3/12**, auditoría pública **47/47** y Google/GA4/Bing disponibles. Google aceptó el sitemap con 204 tras renovar Firebase, e IndexNow siete URLs con 200.

Se publicó y verificó en la página oficial de LinkedIn un recurso sobre evaluación OCR, con enlace a la guía y plantilla: **https://www.linkedin.com/feed/update/urn:li:activity:7520685541806301184/**. Es distribución propia, no prueba de recomendaciones de IA. La consulta del canal pgongora no identificó respuesta a ProyectoIA desde el seguimiento del 26. Un intento neutral de Google Search presentó validación por tráfico inusual y quedó registrado como no disponible, no como ausencia de YAGO.

El reporte final conserva la ventana histórica **27 sep.–24 oct.**: las métricas de esa ventana no se atribuyen a las publicaciones nuevas. Quedan **22 URLs**, incluidas nueve guías, sin confirmar indexación. Detalle y fuentes: **`docs/indexacion-geo-segunda-ronda-2026-10-27.md`**. Evidencia: `.local/seo/reports/2026-10-27T15-25-42-491Z.json` y `.local/seo/reports/2026-10-27-catalogos-verificacion.json`.

## 26. Solicitudes individuales delegadas · informe del 27 de octubre, 22:29 local

El propietario compartió el informe de la otra IA y se comprobó el archivo privado `.local/seo/reports/2026-10-27-gsc-solicitudes-indexacion.json`: siete solicitudes aceptadas, ocho pruebas publicadas aptas y dos URLs sin solicitud aceptada, por cuota agotada en la octava. Las siete solicitudes no son nuevas indexaciones confirmadas; se mantiene la última línea base comprobada de **25/47** y **3/12 guías** hasta una nueva inspección.

Quedan por solicitar las guías de registro de contratos/términos Mi DT y certificados F30/F30-1. Según el propietario, Claude tiene una tarea única para el 28 a las 10:00. No se verificó esa programación ni se duplicó desde esta sesión. Se actualizó el mensaje para otra IA para leer la cola persistente antes de actuar y reinspeccionar sin reenviar las siete aceptadas.

La ausencia de página de referencia en Search Console no demuestra ausencia de enlaces internos; se comprobaron referencias existentes desde servicios, OCR, AXIS, SADT y Blog. La cuota observada de siete solicitudes aceptadas no se presenta como un máximo diario garantizado. Registro y próximos pasos: **`docs/cola-indexacion-google.md`**.

## 27. Enlaces, contacto OCR y nueva muestra Gemini · 28 de octubre

Se publicaron los enlaces de Automatización a la guía para pymes y de Integración a la de n8n/Make. Fechas específicas revisadas el 27, publicación completada el 28. Tipado/build correctos, ocho pruebas locales y ocho de producción pasaron, e IndexNow aceptó tres URLs con 200. La cola individual de Google sigue coordinada con la otra IA.

El contacto OCR del 21 se contrastó con el envío de correo entregado, con mensaje de cotización concreto y coincidencia de minuto, landing y origen de Google con GA4. El propietario confirmó que **ya está atendido**. Los datos de contacto y empresa se conservan privados y no se crea un caso público. No se deducen reunión, calificación o venta.

Medición del 25–27: tres sesiones de entrada OCR desde Google orgánico, una sesión desde el post de LinkedIn a la guía con la campaña exacta, sin filas nuevas de clics OCR, descargas o `generate_lead` en la consulta. Son datos procesados disponibles de una muestra pequeña, no una evaluación concluyente de conversión.

Se recogieron cinco respuestas de Gemini en conversaciones nuevas: YAGO aparece en **agentes y OCR**, dos de cinco, sin citas enlazadas comprobadas. Modelo, búsqueda web y personalización sin verificar, modo temporal no confirmado. No se atribuye el resultado al trabajo ni se compara causalmente con ChatGPT. CSV actualizado con la evidencia y limitaciones.

ProyectoIA sin respuesta identificada en el canal pgongora dentro del período revisado. Las dos autorizaciones de cuestionarios encontradas son pruebas técnicas, no testimonios de clientes. Por decisión del propietario se dejó preparada, sin enviar, la solicitud de caso/testimonio. Detalle: **`docs/seguimiento-ocr-comercial-geo-2026-10-28.md`** y **`docs/solicitud-caso-testimonio-cliente.md`**.

# Activación de YAGO después del despliegue

## Estado comprobado

- Correo asistido `pgongora@yago.cl` operativo mediante enrutamiento específico de Workspace a Resend, con recepción y respuestas con archivos comprobadas. Notificador automático activo en `/api/webhooks/resend`: avisos a `nicolas.yarur.g@yago.cl` con metadatos, firmados, filtrados e idempotentes dentro de la ventana de Resend. Prueba real de aviso con estado delivered y replay sin duplicado. Configuración, mantenimiento y pruebas: `docs/correo-pgongora.md`.
- En el despliegue del notificador se resolvió una espera indefinida de la consulta de UF: límite de 5 segundos en `src/lib/uf.ts` y fallback existente comprobado. Firebase compiló/desplegó y las páginas principales respondieron correctamente.
- Modalidad comercial confirmada por el propietario: toda la atención de YAGO es remota, sin recepción presencial ni visitas para prestar servicios. No se crea Google Business Profile para la modalidad actual. El posicionamiento se trabaja en búsqueda web, asistentes y perfiles corporativos públicos.
- Identidad y autoría actualizadas: LinkedIn de YAGO https://www.linkedin.com/company/yago-spa añadido a los perfiles oficiales de la organización. Nicolas Yarur aparece en `/nosotros#nicolas-yarur` y firma las 12 guías, con biografía proporcionada por el propietario y LinkedIn profesional https://www.linkedin.com/in/nicolas-yarur/. El nombre se conserva tal como fue proporcionado.
- Verificación de autoría: tipado correcto y compilación/despliegue de Firebase completados. Las 12 páginas de artículos responden 200 y sus autores Person coinciden con el perfil de Nosotros; metadatos, biografía visible y archivos Markdown están alineados. Perfil y guía representativa comprobados en escritorio y móvil, sin infracciones de accesibilidad detectadas ni desbordamiento horizontal. Navegación al ancla del autor comprobada; el rótulo del bloque de autoría queda estático para evitar solapamiento durante la entrada animada de encabezados.
- IndexNow aceptó 47 URLs con 200 OK tras la actualización de identidad y autoría. La aceptación notifica los cambios, sin equivaler a confirmación de indexación.
- Web publicada en `https://yago.cl` mediante Firebase App Hosting.
- Proyecto `automata-ai`; backend `studio`; región `us-central1`.
- Las 18 URLs principales y de descubrimiento revisadas responden 200 con la versión nueva.
- IndexNow aceptó la notificación de las 47 URLs del sitemap (`202 Accepted`).
- GA4 activo en producción con `G-DSNXKXMCKX`. Comprobadas respuestas 204 de Google para visitas y selección de servicio, incluida la visita virtual a `/servicios/integracion-ia`. La integración también pasó 15 pruebas locales; una prueba solo móvil fue omitida en escritorio.
- La captura de la propiedad **YAGO web** confirma las dimensiones **Servicio solicitado → `service`** y **Tipo de formulario → `form_type`**, ambas de ámbito Evento. También se comprobó un envío completo en producción desde la interfaz: formulario 200, confirmación visible y respuesta 204 de GA4 para `generate_lead` con `service=integracion-ia` y `form_type=contact`. El correo de esa prueba contiene **Prueba tecnica GA4 YAGO** en el asunto.
- El propietario confirmó que quedó guardado el evento clave y completados los ajustes de Medición mejorada: vistas de página e historial activos e interacciones automáticas con formularios desactivadas.
- Vinculación Search Console–GA4 confirmada en captura con estado **VINCULACIÓN CREADA**: dominio `yago.cl` y flujo **YAGO web**, `https://yago.cl`. La captura posterior confirma la colección publicada y visible en la navegación de Informes, con **Consultas** y **Tráfico de búsqueda orgánica**.
- Resend activo mediante `RESEND_API_KEY@1`, únicamente en runtime, con acceso concedido a `studio` y remitente `YAGO <no-reply@yago.cl>`. El despliegue terminó y una prueba real de `/api/contact` respondió 200 con `leadId`. El envío fue aceptado; recepción en la bandeja pendiente de confirmar por el propietario.
- DNS de `yago.cl` administrado en Cloudflare.
- Search Console: propiedad de dominio `yago.cl` verificada; sitemap correcto, 47 URLs únicas. Las capturas iniciales mostraban **19 indexadas** y **3 sin indexar**: login de ANTON.IA fuera de prioridades, HTTP con redirección correcta y solución de empresas de servicios pendiente. **Actualización del 8 de octubre por API:** ocho URLs prioritarias devuelven **PASS / Enviada e indexada**, incluida esa solución, rastreada el 7 de octubre. No se extrapola el resultado de ocho URLs al total del sitemap ni al procesamiento de los bloques publicados el 8. Detalles: `docs/panel-seo-geo.md`.
- Bing Webmaster Tools: sitio `https://yago.cl/` importado y sitemap enviado. La captura más reciente confirma **Success**, **47 URLs descubiertas**, **0 errores** y **0 advertencias**. El procesamiento del sitemap está completo; todavía falta revisar la indexación de URLs concretas.
- Bing AI Performance: captura recibida el 7 de octubre, período **3 M**, fuentes **Microsoft Copilots and Partners**, **Total Citations: 0** y **Avg. Cited Pages: 0**. Primera línea base del informe, sin extrapolar a todos los asistentes ni inferir causas. Siguiente comprobación: estado **Bing Index** de `/servicios/integracion-ia`. Detalles en `docs/panel-seo-geo.md`.
- Bing Index de integración de IA revisado en nuevas capturas: sigue **Discovered but not crawled**, descubierta el **04 Oct 2026**. Live URL confirma que puede indexarse y no detecta problemas SEO/GEO; no equivale a inclusión en el índice. La solicitud anterior está enviada. Próxima comprobación: Bing Index de la home para determinar el alcance, sin repetir solicitudes rutinariamente. Detalles en `docs/panel-seo-geo.md`.
- Bing Index de la home `https://yago.cl/` confirmado en captura posterior: **Indexed successfully**, **URL can appear on Bing** y **No SEO/GEO issues found**. La home está indexada; el estado pendiente de integración de IA no demuestra un bloqueo de todo el sitio. Siguiente fase: primera ronda de consultas GEO en sesiones independientes y seguimiento de las páginas nuevas.
- Clutch: perfil **Free Profile** creado. La captura del panel mostraba revisión pendiente; la comprobación pública posterior encuentra https://clutch.co/profile/yago con nombre, web, descripción y contacto coincidentes con YAGO. El perfil público está disponible y se conecta al sitio como identidad de organización. Enlace directo de reseñas: https://review.clutch.co/review?provider_id=2738610; las solicitudes y recopilación quedan a cargo del propietario.
- Rastreo público: peticiones con identificadores de Googlebot, bingbot, OAI-SearchBot y PerplexityBot a la página de integración responden 200, con canónica correcta y sin challenge visible. Son pruebas con user-agent declarado, no registros de visitas reales de esos rastreadores. HTTP de yago.cl redirige a HTTPS. El propietario añadió el CNAME `www` y activó su redirección: verificados cuatro casos HTTP/HTTPS, raíz y páginas internas, con respuesta 301 directa a HTTPS de yago.cl, rutas y parámetros conservados y respuesta final 200 sin bucles.
- Perfil de Clutch conectado y desplegado: `sameAs` global y enlace visible en `/nosotros`, también presente en `/llms.txt` y `/llms-full.txt`. Comprobaciones en producción 200 y accesibilidad sin infracciones detectadas en escritorio/móvil. IndexNow aceptó la notificación de `/nosotros` y `/` con 200 OK. El tipado pasó; la ejecución de pruebas locales no llegó a iniciarse por bloqueo del componente nativo de Next.js por una política de Windows. Firebase compiló y desplegó correctamente, y las comprobaciones funcionales y de accesibilidad del cambio se hicieron en producción.
- Servicios reforzados y publicados el 8 de octubre: cuatro flujos de referencia con entrada/salida, conexiones, evaluación y enlaces contextuales. Build local y Firebase correctos, 14 pruebas relevantes pasaron en local y en producción, auditoría pública 47/47 correcta. IndexNow aceptó seis URLs actualizadas con 200 OK.
- ProyectoIA: solicitud gratuita enviada y confirmada **Recibimos tu empresa** el 8 de octubre; publicación pendiente. Textos actualizados de LinkedIn preparados, sin acceso administrativo para aplicarlos. Detalles: `docs/presencia-externa-yago.md`.
- APIs de Search Console y GA4 conectadas mediante cuenta técnica de lectura, sin descargar claves. Propiedad GA4 **557294618**, flujo **G-DSNXKXMCKX**. Bing Webmaster API también conectado, con secreto versión 1 y ocho consultas GetUrlInfo completadas. Primer reporte real y tarea semanal local de Windows comprobados. GetUrlInfo no sustituye Bing Index ni las citas de AI Performance. Permisos, comandos y límites: `docs/acceso-apis-seo.md`.
- Actualización del 13 de octubre: LinkedIn guardado y comprobado públicamente con lema, resumen, siete especialidades, contacto y agenda vigentes. GrupoExpro: propuesta de nota editorial y correo preparados, sin envío ni publicación externa. Detalles en `docs/presencia-externa-yago.md` y `docs/solicitud-referencia-grupoexpro.md`.
- Cuestionario AXIS con autorización opcional de publicación y atribución anónima/identificada; envíos anteriores no autorizados retroactivamente. Prueba real v2 delivered. Imágenes de servicios optimizadas 95–96 % y trabajo opcional de Motion/Lenis reducido en táctil; medición móvil documentada con resultados variables y rendimiento aún mejorable, en `docs/rendimiento-movil-yago.md`.
- Reporte del 13 de octubre: ocho URLs prioritarias indexadas, auditoría pública 47/47, datos privados consultables; tarea semanal revalidada con resultado 0 tras renovar Firebase. Fechas de reporte alineadas con America/Santiago. No se atribuyen las variaciones de impresiones/referrals automáticamente a cambios de contenido.
- Cuestionarios por producto/perfil publicados el 13 de octubre en `/opiniones`: siete versiones para AXIS, SOF.IA, aplicaciones y contrapartes de proyectos. Enlace original AXIS compatible; autorización opcional y recepción diferenciada. 12 pruebas nuevas de handler, 9 de AXIS y 22 UI en local/producción pasaron; prueba real de SOF.IA delivered. Matriz y configuración: `docs/cuestionarios-yago.md`.

## 1. Google Analytics 4

1. Abrir https://analytics.google.com/ con la cuenta que administrará YAGO.
2. Crear una cuenta/propiedad `YAGO` si no existe. Zona horaria: Chile/Santiago. Moneda: CLP.
3. Crear un flujo **Web** para `https://yago.cl`.
4. Obtener el **ID de medición** que empieza por `G-`. Es público; no es una clave API.
5. La integración usa la etiqueta de Google y medición de navegación SPA basada en historial del navegador. En **Medición mejorada → Vistas de página → Configuración avanzada**, habilitar cargas de página y cambios basados en el historial.
6. Desactivar la medición automática de **Interacciones con formularios**: la aplicación emite `generate_lead` únicamente después de una respuesta exitosa, no al intentar enviar.
7. Configurar `NEXT_PUBLIC_GA_MEASUREMENT_ID` con disponibilidad **BUILD** y **RUNTIME** en `apphosting.yaml`; realizar el siguiente despliegue con el ID real.
8. Comprobar visitas en Tiempo real y navegación en Tag Assistant/DebugView. La instalación debe emitir un `page_view` por vista, sin una segunda etiqueta de GA4/GTM duplicando la medición.
9. Marcar `generate_lead` como evento clave. Crear dimensiones de ámbito evento para `service` y `form_type` para analizar contactos por categoría y formulario.

### Marcar los contactos como evento clave

En la propiedad de YAGO, abrir **Administrar → Visualización de datos → Eventos**. Buscar `generate_lead` en Eventos recientes y activar la estrella junto al evento. Si el evento todavía no aparece, se puede registrar de antemano mediante **Crear evento**, con nombre exacto `generate_lead` y la opción **Marcar como evento clave**. Si la interfaz solicita método de creación, utilizar la opción de envío mediante código: la web ya emite el evento después del envío exitoso. Método de recuento: una vez por evento; dejar sin valor monetario predeterminado mientras no exista una estimación comercial validada. Confirmar su aparición en Eventos clave.

Las capturas del formulario de creación muestran `generate_lead`, evento clave activado, sin valor monetario, recuento una vez por evento y creación con código. El propietario confirmó que quedó guardado y que completó Medición mejorada. Las dimensiones `service` y `form_type` ya están guardadas y el envío real de esos parámetros a GA4 fue comprobado. Los eventos nuevos pueden tardar en aparecer en los informes; marcar un evento como clave no recalcula datos históricos. Fuente: https://support.google.com/analytics/answer/13128484?hl=es.

### Eventos

| Evento de GA4 | Significado |
| --- | --- |
| `generate_lead` | Contacto enviado correctamente; `service` y `form_type` indican el origen |
| `contact_form_start` | Inicio del formulario |
| `contact_form_submit` | Intento de envío, sin implicar éxito |
| `contact_form_error` | Error de validación o envío |
| `service_cta_primary` | Clic al diagnóstico desde un servicio |
| `home_servicio` | Selección de servicio en la home |
| `cta_agendar_sesion` | Clic al calendario, no reunión confirmada |
| `cta_whatsapp` | Clic a WhatsApp, no contacto confirmado |

Los formularios OCR y de productos también emiten `generate_lead` después del envío exitoso. La integración no envía nombre, correo, mensaje ni `lead_id` a GA4. Señales de Google y personalización publicitaria están desactivadas. La política y el control de preferencia para ese navegador se ajustan según la configuración activa.

## 2. Resend

1. Abrir https://resend.com/domains y comprobar qué dominio figura como **Verified**.
2. Elegir un remitente perteneciente a ese dominio. Ejemplo: `YAGO <no-reply@yago.cl>` únicamente si `yago.cl` está verificado para enviar.
3. Crear/usar una clave con permisos de envío adecuados en https://resend.com/api-keys.
4. Desde la terminal del proyecto, cargar la clave en el prompt de:

```powershell
npx --yes firebase-tools@15.32.1 apphosting:secrets:set RESEND_API_KEY --project automata-ai
```

Si la CLI pregunta por el backend, elegir `studio`. La clave se introduce en el prompt, no se agrega a archivos de código ni mensajes de chat.

Si la CLI devuelve `Secret Payload cannot be empty`, el secreto puede existir sin ninguna versión. Para completar la carga desde el navegador:

1. En Resend → API Keys, copiar el valor de una clave con permiso de envío, que empieza por `re_`.
2. Abrir https://console.cloud.google.com/security/secret-manager/secret/RESEND_API_KEY/versions?project=automata-ai.
3. Elegir **Añadir nueva versión**, pegar el valor de la clave en **Valor del secreto** y guardar.
4. Confirmar que aparece una versión habilitada. El backend ya tiene acceso concedido; la siguiente configuración debe referenciar esta versión real.

5. Conceder acceso al backend si aún no se concedió:

```powershell
npx --yes firebase-tools@15.32.1 apphosting:secrets:grantaccess RESEND_API_KEY --backend studio --location us-central1 --project automata-ai
```

6. Revisar los enlaces en `apphosting.yaml`. El contenido de la clave permanece en Secret Manager; el YAML debe referenciar su nombre:

```yaml
- variable: RESEND_API_KEY
  secret: RESEND_API_KEY
  availability:
    - RUNTIME
- variable: RESEND_FROM
  value: "YAGO <remitente@dominio-verificado>"
  availability:
    - RUNTIME
```

7. Confirmar `CONTACT_TO`, realizar el despliegue y enviar una prueba identificada. Comprobar respuesta 200 con `leadId`, recepción del correo y dirección Reply-To.

## 3. Google Search Console

La propiedad correcta es `yago.cl`, ya verificada. La primera captura correspondía a otro sitio (`studio--leadflowai-3yjcy.us-central1.hosted.app`); las posteriores confirman la propiedad de YAGO, el sitemap en estado Correcto y las solicitudes de indexación. La aceptación del sitemap y las solicitudes no equivalen a confirmar que todas las páginas estén indexadas: revisar el informe Páginas y la inspección de URLs tras el procesamiento de Google.

1. Abrir https://search.google.com/search-console/ y revisar el selector de propiedades arriba a la izquierda.
2. Si existe `yago.cl` o `https://yago.cl/` con acceso, abrirla y verificar que permite consultar informes. Si no existe, **Añadir propiedad → Dominio → `yago.cl`**.
3. Copiar el TXT que comienza `google-site-verification=`.
4. En Cloudflare: seleccionar `yago.cl` → DNS → Registros → Añadir registro. Tipo **TXT**, nombre **@**, contenido proporcionado por Google, TTL automático.
5. Volver a Google y pulsar **Verificar**. Si aún no detecta el TXT, comprobar propagación y volver a verificar más tarde.
6. En **Sitemaps**, enviar `https://yago.cl/sitemap.xml` (o `sitemap.xml` si la interfaz ya muestra la URL base).
7. En **Inspección de URLs**, revisar home, integración, aplicaciones, agentes y OCR. Solicitar indexación de las páginas nuevas cuando corresponda.
8. Revisar consultas y páginas indexadas tras acumular datos. Diferenciar indexabilidad técnica e indexación real.

El código TXT de verificación es público y puede compartirse para comprobar DNS. No hace falta cambiar el sitio para verificar una propiedad de dominio mediante TXT.

## 4. Bing Webmaster Tools

El sitio de YAGO y el sitemap están confirmados: el estado cambió de Processing a Success y Bing descubrió las 47 URLs. El cero inicial quedó superado al procesar el archivo. Revisar **URL Inspection** para conocer el estado de indexación de una URL concreta; el contador del sitemap informa descubrimiento, no cuántas páginas están indexadas.

### Inspección inicial de integración de IA

La captura de Bing Index para `https://yago.cl/servicios/integracion-ia` muestra **Discovered but not crawled**, descubierta el **04 Oct 2026**. La URL todavía no está indexada según esa captura. El mensaje genérico de Crawl no identifica una causa técnica concreta.

Comprobación pública posterior: 200 sin redirección para navegador y user-agent declarado de Bingbot; canónica exacta de la URL, meta robots `index, follow`, sin X-Robots-Tag restrictivo ni challenge visible y un H1. Robots permite la ruta y el sitemap la incluye. Enlaces HTML hacia el servicio presentes en home, servicios, Nosotros y la guía de integración. Estas pruebas no acreditan el acceso desde las IP reales de Bing.

Contraste completado: la captura de **Live URL** confirma **URL can be indexed by Bing**, condicionado a sus comprobaciones de calidad e indexación posterior. Ese resultado confirma aptitud técnica de la URL en la prueba en vivo; no equivale a presencia actual en el índice.

Bing también reportó **Alt attribute for images is missing**, 3 instancias. La inspección del HTML encontró tres ilustraciones del bloque Otros servicios con `alt=""`, no atributos ausentes. Tras revisar los archivos se añadieron descripciones del contenido visual a esas ilustraciones informativas y se mantuvo la opción de alt vacío para imágenes decorativas en el componente compartido. `imageAlt` vive en `src/config/services.ts` y se utiliza en las tarjetas y el hero de los servicios configurados.

Corrección desplegada: tipado y compilación de Firebase correctos; las seis páginas de detalle de servicios responden 200 y sus cuatro imágenes por página tienen textos alternativos no vacíos. La página de integración pasó accesibilidad en escritorio y móvil. IndexNow aceptó las siete URLs de servicios actualizadas con 200 OK.

La captura posterior de **Live URL**, con prueba actualizada a las 23:22, confirma **URL can be indexed by Bing**, **No SEO/GEO issues found** e **Indexing requested**. El aviso de imágenes ya no aparece y la solicitud manual quedó enviada. La captura también indica dos tipos de marcado detectados, sin identificar sus nombres en el panel cerrado. Falta comprobar la incorporación efectiva en **Bing Index** tras procesamiento; no se afirma que la corrección de alt fuera la causa del estado inicial ni que todas las URLs estén indexadas.

1. Abrir https://www.bing.com/webmasters/.
2. Importar el sitio desde Search Console después de tener acceso verificado, o usar el método de verificación que indique Bing.
3. Enviar `https://yago.cl/sitemap.xml`.
4. Revisar indexación e AI Performance cuando tenga datos. IndexNow ya recibió las URLs; su aceptación no garantiza indexación ni citas.

## 5. Perfil de empresa y reseñas

El perfil público de Clutch ya fue comprobado en https://clutch.co/profile/yago. Se añade a `ENTITY.sameAs`, lo que también activa su enlace visible en Nosotros y en el contenido de descubrimiento. Las solicitudes y recopilación de reseñas están a cargo del propietario. La URL del panel y el formulario de reseñas tienen funciones diferentes de la identidad pública de la empresa.

El LinkedIn de empresa se suministró y añadió a esa misma configuración. El LinkedIn personal identifica al autor Person, compartido entre los artículos y Nosotros. `EDITORIAL_AUTHOR` centraliza nombre, especialidad, biografía y enlace profesional; `BLOG_AUTHOR` utiliza esos datos y enlaza al perfil interno. Para futuras ediciones, actualizar `src/config/team.ts` y los perfiles corporativos en `src/config/entity.ts`.

En la comprobación pública, Clutch muestra entre sus servicios **Recruiting**, **Mobile App Development** y **Enterprise App Modernization**. Confirmar que esos servicios representan la actividad real declarada; el sitio de YAGO no se amplía automáticamente por esa selección en un directorio.

## 6. Análisis y seguimiento

Plantilla de informes y vinculación de Search Console con GA4: `docs/panel-seo-geo.md`. Registro semanal por servicio: `docs/panel-semanal.csv`. Estos archivos preparan la configuración y captura de datos; no crean por sí mismos informes en la cuenta privada de Analytics. La vinculación Search Console–GA4 y la publicación de la colección ya están confirmadas en capturas. La exploración personalizada de contactos permanece como plantilla para crear en la cuenta.

1. Completar el perfil oficial de LinkedIn con la descripción y capacidades de YAGO.
2. Evaluar/crear el perfil de Clutch para servicios B2B y obtener el enlace directo a reseñas.
3. Google Business Profile no aplica a la modalidad actual de YAGO, confirmada como exclusivamente remota.
4. Usar `docs/kit-clientes-resenas.md` para solicitar experiencias auténticas y obtener autorización de citas.
5. Recopilar dos casos según la información disponible, con resultados y método. Registrar seguimiento en `docs/seguimiento-clientes.csv`.
6. Incorporar testimonios y casos autorizados en `src/config/evidence.ts` y publicar el despliegue correspondiente.

## 7. Alias www y redirección canónica

Estado: configurado, activado y verificado públicamente. `www.yago.cl` resuelve a Cloudflare y responde 301 hacia el dominio principal. Se probaron raíz HTTP/HTTPS y rutas `/ocr` y `/servicios/integracion-ia` con parámetros UTM; todos llegaron a la misma ruta y consulta en `https://yago.cl`, con respuesta final 200. La raíz del dominio principal responde 200 sin redirección ni bucle.

En Cloudflare → zona **yago.cl** → **DNS → Registros**, añadir:

| Campo | Valor |
| --- | --- |
| Tipo | CNAME |
| Nombre | www |
| Destino | yago.cl |
| Proxy | Activado (nube naranja) |
| TTL | Automático |

Después, abrir **Reglas → Información general / Overview → Crear regla → Regla de redirección / Redirect Rule**. Nombre: **WWW a dominio principal**. Elegir **Expresión de filtro personalizada / Custom filter expression**, editar la expresión y usar `http.host eq "www.yago.cl"`. Destino de tipo **Dinámico / Dynamic**: `concat("https://yago.cl", http.request.uri.path)`. Código 301 y conservación de la cadena de consulta activada. Guardar con **Deploy / Implementar** para activar, no como borrador. El objetivo es mantener la ruta y parámetros en una redirección hacia el dominio principal.

Si se usa el constructor visual, configurar **Field: Hostname**, **Operator: equals**, **Value: www.yago.cl**. La vista previa debe mostrar `(http.host eq "www.yago.cl")`. Durante la configuración se corrigió una expresión completa pegada en Value bajo URI Full/wildcard: ese constructor generaba una condición distinta aunque la validación sintáctica pasara. La expresión completa se pega únicamente en Edit expression; el campo Value del constructor recibe solo el dominio.

Verificar tras guardar y activar: DNS del alias, HTTPS y respuestas de `http://www.yago.cl/` y `https://www.yago.cl/servicios/integracion-ia?utm_source=prueba`. Deben llegar al mismo path en `https://yago.cl`, conservando los parámetros y sin bucles. La configuración se completa en Cloudflare; el estado no se da por resuelto hasta comprobarlo públicamente.

Referencias: https://developers.cloudflare.com/rules/url-forwarding/single-redirects/ y https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/.

## Siguiente despliegue

Cuando el ID de GA4, la clave de Resend y el remitente estén configurados y comprobados:

```powershell
npx --yes firebase-tools@15.32.1 deploy --only apphosting --project automata-ai
```

Después, comprobar la etiqueta pública de GA4 y realizar una prueba real de correo. Revisar calidad de los contactos y oportunidades, además de visitas.

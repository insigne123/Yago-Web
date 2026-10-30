# Acceso a APIs y seguimiento de YAGO

## Estado del 8 de octubre de 2026

| Servicio | Estado comprobado |
| --- | --- |
| Search Console | Conectado a `sc-domain:yago.cl`; ocho inspecciones prioritarias devuelven PASS |
| GA4 | Conectado a **YAGO web**, propiedad **557294618**, flujo **G-DSNXKXMCKX** |
| Bing Webmaster API | Conectada; GetUrlInfo respondió correctamente para las ocho rutas prioritarias |
| IndexNow | Operativo; seis URLs actualizadas aceptadas con 200 OK tras el despliegue |
| Publicación Firebase | Operativa en `automata-ai/studio` |

### Cuenta técnica de Google

`yago-seo-reader@automata-ai.iam.gserviceaccount.com`

Creada en `automata-ai`, sin descargar ni crear claves. El usuario de Firebase `nicolas.yarur.g@yago.cl` puede emitir credenciales temporales de esa cuenta mediante IAM Credentials. El rol Token Creator se añadió exclusivamente a esta cuenta técnica, no al proyecto completo. El conector solicita los scopes **webmasters.readonly** y **analytics.readonly**.

APIs habilitadas: IAM, IAM Credentials, Search Console, Analytics Admin y Analytics Data. Las credenciales viven en memoria; los snapshots no incluyen tokens ni valores de secretos. El conector no es un servidor público ni forma parte de un endpoint de la web.

## 1. Search Console

https://search.google.com/search-console?resource_id=sc-domain%3Ayago.cl

Configuración → Usuarios y permisos → Añadir usuario → correo técnico anterior → permiso **Completo**. El propietario ya lo concedió y la API confirmó acceso. El scope de las llamadas sigue siendo de solo lectura.

La API de inspección devuelve el estado de la versión del índice. No ejecuta una prueba de URL publicada ni el botón Solicitar indexación de páginas comunes. IndexNow es un mecanismo distinto y no sustituye las solicitudes ni confirma indexación.

## 2. Google Analytics 4

https://analytics.google.com/analytics/web/

Seleccionar **YAGO web** → Administrar → Gestión de accesos a la propiedad → añadir el correo técnico con rol **Lector**. El propietario confirmó el cambio y se consultaron informes reales.

El ID numérico **557294618** se identificó mediante el flujo `G-DSNXKXMCKX`; ambos cumplen funciones distintas. Configuración pública en `scripts/seo.config.json`.

## 3. Bing Webmaster Tools

https://www.bing.com/webmasters/

Engranaje de Configuración → **API Access** → **API Key**. Reutilizar la clave vigente si existe; generar una solo si todavía no hay. La clave pertenece al usuario y puede abarcar todos sus sitios verificados. El conector preparado solo consulta información de `https://yago.cl/`.

En una terminal de PowerShell abierta en la raíz del proyecto:

```powershell
npm run seo:bing-key
```

Si la terminal está abierta en `C:\Users\nicol` u otra carpeta, utilizar el prefijo explícito:

```powershell
npm --prefix "C:\Users\nicol\.gemini\antigravity\YAGO-WEb\Yago-Web" run seo:bing-key
```

Pegar la clave únicamente en el prompt de **entrada oculta**. Se guarda en Secret Manager como `YAGO_BING_WEBMASTER_API_KEY`; no se imprime ni escribe en el repositorio. No se necesita concederla al backend web. No pegarla en el chat, en una captura ni como argumento de terminal. El comando devuelve solo confirmación y referencia/versionado del secreto.

El conector usa REST JSON `GetUrlInfo`; SOAP/POX fueron retirados en agosto de 2026. La clave no se imprime en la URL de errores. `GetUrlInfo` describe rastreo, no sustituye la pantalla de Bing Index. No se ha verificado una API de AI Performance: sus citas siguen registrándose a partir de exportaciones/capturas del portal.

**Autorización completada:** el propietario guardó la clave con el prompt oculto. Se confirmó `YAGO_BING_WEBMASTER_API_KEY`, versión **1**, estado **ENABLED**, sin mostrar su valor. GetUrlInfo respondió 200 para la home y el reporte de las ocho rutas se completó con Bing conectado. El campo `HttpStatus` de esa API aparece en 0 en este corte y no se interpreta como el estado HTTP actual de la web; la auditoría pública obtuvo 200.

## 4. Comandos y reportes

```powershell
$env:FIREBASE_TOOLS_MODULE_ROOT = "C:\Users\nicol\AppData\Local\Temp\opencode\npm-cache\_npx\d69a650dc7266bd8\node_modules\firebase-tools"
npm run seo:access -- status
npm run seo:report -- --save
npm run seo:report -- --save --inspect-all
npm run seo:report -- --save --start 2026-10-03 --end 2026-10-07
```

El período predeterminado comprende los últimos 28 días completos, hasta ayer en **America/Santiago**, para no incluir el día actual de GA4 al cambiar de fecha en UTC. El reporte:

- Audita HTTP, canónicas, noindex, H1 y JSON-LD de las URLs del sitemap y enlazado a las prioritarias.
- Inspecciona en Google home, cuatro servicios, OCR, OCR Master y la solución para empresas de servicios. Con `--inspect-all`, inspecciona todas las URLs del sitemap; el wrapper semanal usa esta opción desde el 22 de octubre.
- Obtiene consultas/páginas en Search Console, tipo Web, país Chile, solo URLs de `https://yago.cl/`, excluyendo expresiones de marca documentadas, también nombres espaciados como «anton ia». El filtro de dominio evita mezclar datos de las aplicaciones en subdominios.
- Consulta sesiones orgánicas por página de entrada, `generate_lead` por servicio/origen y sesiones de fuentes de IA identificadas en GA4.
- Excluye de los eventos de contacto las fuentes de pruebas identificadas `qa_setup` y `qa_deploy`. Visitas o pruebas sin esa atribución pueden permanecer.
- Consulta Bing cuando su clave esté disponible y deja explícitos permisos/datos pendientes.

Snapshots JSON y CSV en **`.local/seo/reports/`**, excluidos de Git y de los uploads de Firebase. `latest.json` y `latest.csv` contienen el último corte. Reuniones, oportunidades y citas Bing se dejan vacías porque no se derivan de los eventos ni de GetUrlInfo. Vacío no equivale a cero.

Los datos de Google pueden tener desfase, restricciones de privacidad y límites de filas. Las sesiones orgánicas de GA4 no tienen el mismo alcance que los clics sin marca de Chile en Search Console. Un referral registrado tampoco mide todas las menciones de IA.

## 5. Ejecución semanal local

Tarea de Windows **YAGO - Seguimiento SEO** registrada para **lunes a las 09:00, hora local de Windows**. Ejecuta `scripts/seo/weekly-report.ps1`, genera snapshots y usa la sesión local de Firebase; no vuelve a enviar URLs por rutina.

Ejecución real del Programador comprobada el **8 de octubre a las 14:03:58, UTC−03:00**, con **LastTaskResult: 0** y snapshot generado. Próxima ejecución indicada: **12 de octubre de 2026 a las 09:00, UTC−03:00**. Se ejecuta sin abrir una ventana de consola; el primer intento con ventana visible fue interrumpido y se corrigió antes de dar por verificada la tarea. El reporte reintenta una vez las lecturas de Google ante fallos transitorios y conserva los fallos restantes como datos no disponibles, no como pérdida de indexación.

Se ejecuta con privilegios limitados y sesión interactiva del usuario, cuando hay red. Requiere este computador encendido y sesión disponible. No es un monitoreo cloud continuo ni produce notificaciones dentro del chat. Si se mueve la carpeta del proyecto o desaparece el paquete firebase-tools de la caché, se actualizan las rutas de la tarea y del wrapper. Si vence la sesión de Firebase, necesita reautenticación.

Desactivar desde Programador de tareas → YAGO - Seguimiento SEO → Deshabilitar. Una ejecución manual se realiza con `npm run seo:report -- --save`.

**Comprobación del 13 de octubre:** el último intento del 12 figuraba interrumpido. Se renovó la sesión de Firebase cuando expiró y se probó nuevamente la tarea a las **00:43:59 UTC−03:00**, con **LastTaskResult: 0**. Próxima ejecución indicada: **19 de octubre de 2026 a las 09:00**. Se conservan los intentos fallidos como historial; no se promete ejecución con el computador/sesión apagados.

**Revisión del 22 de octubre:** la tarea del 19 figuraba con resultado 0, pero su snapshot carecía de métricas privadas y no es un corte completo. Se confirmó sesión vencida al consultar el 22 y el propietario la renovó. La lectura de la clave Bing se cambió a REST de Secret Manager con la sesión explícita, sin modificar el secreto ni imprimirlo. El reporte registra ahora `status.complete`, `scope` y fuentes faltantes; un corte completo con métricas ausentes devuelve código 1, mientras `--public-only` tiene alcance explícito. La ejecución manual final `npm run seo:report -- --save --inspect-all` quedó completa: auditoría 47/47, Google 17 indexadas entre 47 inspeccionadas, GA4 y Bing conectados. Doce pruebas pasaron. Próxima ejecución programada indicada: **26 de octubre a las 09:00**; el wrapper ya inspecciona todo el sitemap.

## Fuentes

- Inspección Search Console: https://developers.google.com/webmaster-tools/v1/urlInspection.index/inspect
- Analytics Data: https://developers.google.com/analytics/devguides/reporting/data/v1/quickstart
- Acceso Bing: https://learn.microsoft.com/en-us/bingwebmaster/getting-access
- API Bing y protocolos: https://learn.microsoft.com/en-us/bingwebmaster/
- GetUrlInfo REST JSON: https://learn.microsoft.com/en-us/dotnet/api/microsoft.bing.webmaster.api.interfaces.iwebmasterapi.geturlinfo

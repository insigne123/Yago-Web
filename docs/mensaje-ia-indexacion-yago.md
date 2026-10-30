# Mensaje para una IA con control del navegador: indexación de YAGO

Copia el siguiente bloque en una IA que pueda interactuar con tu navegador. El propietario inicia sesión directamente en Google cuando sea necesario.

```text
Quiero que gestiones la indexación de las páginas pendientes de mi sitio https://yago.cl desde Google Search Console. Haz tú el recorrido en el navegador, incluida la prueba de URL publicada y la solicitud de indexación; pídeme únicamente el inicio de sesión o una verificación humana que Google exija.

Sitio autorizado: https://yago.cl
Propiedad de Search Console: sc-domain:yago.cl
Portal: https://search.google.com/search-console?resource_id=sc-domain%3Ayago.cl
Cuenta propietaria: nicolas.yarur.g@yago.cl

Si trabajas en este PC con acceso al repositorio:
C:\Users\nicol\.gemini\antigravity\YAGO-WEb\Yago-Web
Lee docs/indexacion-geo-segunda-ronda-2026-10-27.md y docs/acceso-apis-seo.md. Hay cambios locales anteriores; consérvalos.

ACTUALIZACIÓN DE LA COLA, 27/10 A LAS 22:29 UTC−3:
Lee primero docs/cola-indexacion-google.md y .local/seo/reports/2026-10-27-gsc-solicitudes-indexacion.json. Las siete primeras guías de la lista de abajo ya tienen solicitudes aceptadas. Reinspecciónalas sin reenviarlas. Las únicas solicitudes pendientes de esa lista son las dos guías de Mi DT/F30, al final. El propietario informó una tarea de Claude para el 28/10 a las 10:00: conserva esa coordinación y evita crear una tarea paralela para las mismas URLs.

Última comprobación documentada: 25/47 URLs indexadas, 3/12 guías. Es una línea base, no el estado actual garantizado. Nosotros, AXIS, Blog, Servicios, Productos y las guías de integración, evaluación OCR y agentes ya estaban indexados: revísalos solo si hace falta, sin reenviar a ciegas.

Cola prioritaria, comprobar antes de actuar:
1. https://yago.cl/blog/apps-ia-desarrollo-asistido-diferencias
2. https://yago.cl/blog/elegir-proveedor-automatizacion-ia-chile
3. https://yago.cl/blog/que-es-la-automatizacion-de-procesos-con-ia
4. https://yago.cl/blog/ocr-con-ia-digitalizar-documentos
5. https://yago.cl/blog/como-calcular-el-roi-de-automatizar-procesos
6. https://yago.cl/blog/automatizacion-para-pymes-por-donde-partir
7. https://yago.cl/blog/herramientas-automatizacion-n8n-make-ia
8. https://yago.cl/blog/registro-contratos-terminos-mi-dt-plazos
9. https://yago.cl/blog/certificados-f30-y-f30-1-diferencias

Procedimiento por URL:
1. Confirma la propiedad correcta e inspecciona la URL exacta.
2. Si Google ya la muestra indexada con canónica correcta, registra el estado y pasa a la siguiente.
3. Si no está indexada, consulta primero el registro persistente. Si ya hay una solicitud aceptada pendiente, registra la reinspección y pasa a la siguiente. Para una URL sin solicitud aceptada, usa «Probar URL publicada» y espera el resultado. Comprueba que Google pueda obtenerla y que admita indexación.
4. Si es apta, pulsa «Solicitar indexación» y espera la confirmación real. Una solicitud aceptada no equivale a una URL ya indexada.
5. Si hay bloqueo técnico, guarda el error y la URL. Si se alcanza una cuota o Google exige CAPTCHA/verificación humana, pausa y avísame; no intentes evitarlo ni repetir solicitudes en bucle.
6. Procesa primero las URLs sin solicitud aceptada en el registro; actualmente son las dos guías laborales. Máximo una solicitud por URL en esta sesión; salta las solicitudes ya aceptadas de sesiones anteriores. Siete aceptadas en una sesión no establece una cuota diaria fija. Si la cuota persiste a las 10:00, detén los envíos y conserva la cola; una continuación posterior debe coordinarse con la tarea existente.

Usa una ventana autorizada o un perfil separado. Yo introduzco las credenciales directamente en Google; no copies cookies del navegador personal ni me pidas contraseñas en el chat. El alcance de esta tarea es Search Console y la comprobación de mis páginas.

Para páginas comunes, el botón de solicitud se gestiona desde Search Console. La API de inspección consulta el estado; IndexNow avisa a otros buscadores; ninguno sustituye ese botón para Google. No uses la Indexing API de empleos/eventos para estas páginas.

Al terminar entrega una tabla:
URL | Estado inicial | Prueba de URL publicada | Solicitud aceptada sí/no | Estado de índice comprobado | Fecha/hora | Error o cuota pendiente

Si tienes acceso a las herramientas SEO del repositorio, puedes contrastar el resultado con el reporte existente, manteniendo las credenciales fuera de logs. Registra lo observado y diferencia siempre «solicitada», «pendiente» e «indexada». No prometas posiciones ni confirmes resultados que Google todavía no muestre.
```

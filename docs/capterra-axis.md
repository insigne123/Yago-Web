# AXIS en Capterra · alta en pausa

## Objetivo y estado real

Crear o reclamar una ficha de **AXIS**, identificando a **YAGO / Yago SpA** como proveedor, para solicitar reseñas públicas sobre el uso del software. Es un producto específico; no una reseña genérica de servicios de YAGO ni uno de nuestros cuestionarios internos.

**Estado: alta en pausa por decisión del propietario; no se confirmó envío.** El 21 de octubre de 2026 indicó que el portal comenzó a pedir cosas que no desea completar ahora y cambió el foco a investigar OpenSEO. Se conserva lo preparado para una eventual continuación.

Las consultas desde webfetch y navegador automatizado a Capterra `.com`/`.es` reciben **403 de Cloudflare**. El propietario sí abrió el registro en su navegador habitual y compartió capturas de **https://www.g2.com/add_product_requests/new**. Esa pantalla se titula **Get listed on G2 Marketplaces** y nombra **G2, Capterra, GetApp y Software Advice**. La consulta pública de acceso de vendedores confirma el mismo alcance. Es el flujo utilizado para el alta de AXIS orientada a Capterra; no se afirma publicación automática en todos esos sitios.

La búsqueda pública `site:capterra.com "AXIS" "YAGO"` no devolvió resultados. Esto no prueba que no exista una ficha bajo otro nombre: hay que comprobarlo en el directorio o con su equipo antes de crear un duplicado.

Entrada de alta abierta: https://www.capterra.com/vendors/sign-up. **Portal actual observado en la captura:** https://www.g2.com/add_product_requests/new. En las herramientas ese portal requiere validación por LinkedIn o correo empresarial; la captura del propietario ya muestra sesión iniciada y el primer paso. No hay todavía una URL pública de ficha o de reseñas de AXIS.

## Último paso observado antes de la pausa

- Mantener **Software**, ya seleccionado en la captura.
- El aviso del portal indica que **Service Provider** solo se lista en G2 Marketplace; no es la opción para este producto de software orientado a Capterra.
- Pulsar **Next: URL** y usar **https://yago.cl/axis** como web del producto cuando se solicite.
- Obtener el siguiente paso para comprobar si detecta una ficha existente, solicita empresa o extrae datos. Solo enviar cuando los campos visibles estén revisados; no se ha pulsado envío final desde el asistente.

**Actualización del propietario:** resolvió la validación usando la URL de pricing y llegó al formulario de información del producto/empresa. La captura muestra Product Name **AXIS**, Vendor Domain **yago.cl**, Vendor Name **Yago**, LinkedIn Company Page URL, descripción obligatoria y carga de logo. No se conoce el valor exacto del enlace de pricing aceptado. Se continúa con esos campos; el error anterior queda como historial, no como bloqueo activo ni problema pendiente de la web.

**Siguiente captura recibida:** sección **Upload Screenshots**, con Title, Description, Add Another Screenshot y botón **Next: Contact Information** habilitado. No se ve marca de obligatoriedad. Si no hay capturas reales listas, probar avanzar dejando toda la sección vacía; no se da por confirmado que el servidor las permita omitir. Para incluirlas, usar pantallas reales de la aplicación con datos de prueba: consulta/carga, resultados/evidencia y monitoreo según las funciones disponibles. No se han subido capturas ni se presentan los previews ilustrativos de la web como interfaz real.

### Rechazo de URL observado

La siguiente captura del propietario muestra el campo **Product or pricing page URL** con `https://yago.cl/axis` y error **Oops, that URL is not valid, please try again**; Verify URL y el siguiente paso aparecen deshabilitados. No se dispone de la petición/respuesta de verificación ni de la cadena exacta pegada, por lo que no se atribuye una causa definitiva.

La comprobación pública confirmó:

- `https://yago.cl/axis`: **200**, sin redirección, título **AXIS | Consulta masiva de causas penales en PJUD | YAGO**, HTML y contenido de producto disponibles, sin noindex detectado.
- `https://www.yago.cl/axis`: **301** hacia la canónica anterior y destino **200**.
- `https://yago.cl/axis/`: **308** hacia `/axis`, destino 200; no aporta ventaja sobre la canónica directa.

Primer paso de diagnóstico: limpiar el campo y escribir manualmente la canónica para descartar espacios/caracteres invisibles de copia. Si el error persiste, el alias www dirige al mismo producto, pero no se garantiza que el verificador lo acepte. No se cambia la web ni se sustituye la página de AXIS por otra aplicación por un mensaje genérico del portal.

El propietario avanzó con la página de precios; no se confirmó que los caracteres invisibles fueran la causa. La URL de producto y la de precios se mantienen como campos distintos.

## Datos preparados

Fuente: https://yago.cl/axis y `src/config/automation-pages.ts`. Copia estructurada y textos bilingües en `scripts/capterra-axis-profile.json`.

| Campo | Valor |
| --- | --- |
| Producto | **AXIS**; **AXIS by YAGO** como denominación para distinguirlo si el catálogo permite ese formato |
| Proveedor | **YAGO / Yago SpA** |
| URL del producto | https://yago.cl/axis |
| URL de empresa | https://yago.cl |
| País/mercado | Chile |
| Plataforma | Web / nube |
| Idioma publicado | Español |
| Contacto | Nicolas Yarur |
| Correo | nicolas.yarur.g@yago.cl |
| Teléfono | +56 9 6393 0231 |

Para la carga de imagen, **https://yago.cl/logo-yago.png** respondió 200 con `image/png`. Es el logo de **YAGO**, no un logo propio de AXIS; puede usarse como marca del proveedor cuando el portal lo admita. El SVG de marca sugerido en configuración no existe en la ruta pública comprobada, por lo que no se propone como archivo válido.

### Descripción breve

AXIS automatiza consultas de causas penales públicas del PJUD de Chile, con carga individual o por lote, reportes, evidencia y monitoreo diario.

### Descripción del producto

AXIS es un software de Yago SpA para consultar causas penales públicas del Poder Judicial de Chile (PJUD). Permite cargar personas individualmente o por lote, revisar coincidencias mediante búsqueda semántica y verificar los resultados contra fuentes públicas. Entrega resultados estructurados, historial y evidencia de las consultas, y seguimiento diario de personas seleccionadas. Está dirigido a equipos de RRHH, operaciones, control interno y cumplimiento que necesitan organizar revisiones a volumen.

El alcance se centra en causas penales públicas de Chile. La ficha no debe prometer un certificado oficial de antecedentes, acceso a datos reservados, cobertura de todas las jurisdicciones o una decisión automática sobre las personas. El plazo aproximado de un minuto es un objetivo operativo publicado, no un SLA nuevo que se deba declarar al portal.

### Categoría a evaluar

**Background Check** parece la candidata por el uso de revisión de personas/postulantes, pero la definición y aceptación del catálogo siguen pendientes. **Compliance** se puede evaluar como alternativa si describe fielmente el producto. No se confirma una categoría por intuición ni se presenta como seleccionada sin ver el formulario.

### Funciones verificadas en la oferta publicada

- Portal web multiusuario.
- Carga individual y por lote.
- Búsqueda semántica en base histórica.
- Verificación con fuentes públicas PJUD.
- Resultados, reportes, historial y evidencia de consultas.
- Monitoreo diario de personas seleccionadas y alertas según el proceso publicado.

Funciones como API pública de AXIS, app móvil nativa, biometría, verificaciones crediticias, antecedentes internacionales o certificaciones no están confirmadas para este registro y no se marcarán como disponibles.

### Precio

Oferta publicada: **desde 22,13 UF + IVA al mes por 2.000 créditos**, sin cobro inicial. El cobro es por bolsa mensual de personas revisadas, no por usuario de la aplicación.

No se ha convertido a USD ni fijado una cifra en CLP que quede desactualizada. Si el portal exige otra moneda o una unidad distinta, confirmar cómo admite representar esa tarifa antes de enviar. La prueba gratuita y versión gratuita están pendientes de confirmación; no se infieren del hecho de no cobrar implementación.

## Continuación cuando el propietario retome el registro

1. El acceso inicial ya quedó confirmado en sus capturas del portal G2 Marketplaces.
2. Continuar de **Software** a **Next: URL** y aportar la página de AXIS.
3. Compartir una captura del paso siguiente para completar los datos preparados y comprobar posibles duplicados/categorías.
4. Si se necesita una sesión controlable por el asistente, iniciar sesión en una ventana autorizada separada; no se extraen cookies de su navegador habitual ni se comparten contraseñas en el chat.
5. Registrar el resultado real del envío y la revisión, sin afirmar que una solicitud crea de inmediato una ficha pública.

No se contrataron anuncios, paquetes de leads ni suscripciones. El nombre público, la categoría y la publicación final estarán sujetos al formulario y a la revisión del directorio.

## Antes de invitar a usuarios

Obtener la URL pública y el enlace de reseña propios de AXIS y verificar el formulario en español o el idioma aceptado, sus campos y requisitos reales. Probar el recorrido sin crear una reseña ficticia. Solo después compartir ese enlace con usuarios que tengan experiencia directa y cumplan sus criterios.

Los cuestionarios de https://yago.cl/opiniones siguen sirviendo para feedback/testimonios propios. Sus respuestas no se copian a Capterra en nombre del usuario ni se consideran reseñas externas publicadas.

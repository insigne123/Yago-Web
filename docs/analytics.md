# Analitica (Yago Web)

Este proyecto soporta analitica con Plausible (sin cookies) y tracking de eventos clave para entender:

- De donde llegan (canal / UTM / landing)
- Que secciones y paginas ven
- Que CTAs convierten (WhatsApp, Agendar demo, formulario)

## 1) Activar Plausible

1. Crea una cuenta en Plausible y agrega tu dominio (ej: `yago.cl`).
2. Define la variable de entorno en tu deploy:

   - `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yago.cl`

Opcionales (solo si usas Plausible self-hosted o proxy):

- `NEXT_PUBLIC_PLAUSIBLE_SRC=https://plausible.io/js/script.manual.js`
- `NEXT_PUBLIC_PLAUSIBLE_API=https://plausible.tu-dominio.com/api/event`

Notas:

- Usamos `script.manual.js` + un componente SPA para que Next (App Router) trackee pageviews en navegacion interna.
- Los eventos custom cuentan para la facturacion de Plausible.

## 2) Eventos que ya quedan trackeados

Estos eventos se disparan por clases `plausible-event-*` y/o por JS (formulario):

- `Nav Click`
  - props: `location` (`navbar` | `navbar_mobile`)
  - props: `section` (`inicio`, `servicios`, `productos`, etc.)

- `CTA Agendar Demo`
  - props: `location` (`navbar` | `navbar_mobile` | `cta_section`)

- `CTA Ver Servicios`
  - props: `location=hero`

- `CTA Explorar Productos`
  - props: `location=hero`

- `Service Card Click`
  - props: `service` (slug)
  - props: `location=servicios_section`

- `Service Contact`
  - props: `service` (slug)
  - props: `method` (`email` | `whatsapp`)
  - props: `location=service_page`

- `Product More Info`
  - props: `product` (slug)
  - props: `location=productos_section`

- `Product Contact`
  - props: `product` (slug)
  - props: `method` (`email` | `whatsapp`)
  - props: `location` (`productos_section` | `product_page`)

- `CTA WhatsApp`
  - props: `location=cta_section`

- `FAQ Contact Click`
  - props: `location=faq_section`

- `CTA Enviar Contacto`
  - props: `location=contact_section`

- `Contact Form Start` (JS)
  - props: `position=contact_section`

- `Contact Form Submit` (JS)
  - props: `position=contact_section`

- `Contact Form Success` (JS)
  - props: `position=contact_section`

- `Contact Form Error` (JS)
  - props: `position=contact_section`
  - props: `kind` (`validation` | `server` | `network_or_unknown`)
  - props: `status` (si hubo respuesta HTTP)

Archivos relevantes:

- `src/components/analytics/Plausible.tsx`
- `src/components/analytics/PlausiblePageview.tsx`
- `src/components/landing/*` (clases `plausible-event-*`)
- `src/components/landing/Contacto.tsx` (eventos del formulario)

## 3) Captura de origen en leads (para poder contactarlos)

No es posible obtener emails de visitantes solo por entrar a la web.
La forma legitima es capturar el email cuando la persona lo entrega (formulario/agendar).

Este repo ya adjunta metadatos de origen al formulario de contacto:

- First touch: `ft_*`
- Last touch: `lt_*`

Se envian en el email del lead y tambien se pueden mandar a un webhook.

Archivos:

- `src/lib/attribution.ts`
- `src/components/landing/Contacto.tsx`
- `src/app/api/contact/route.ts`
- `src/lib/email.ts`

### Webhook opcional (CRM / Sheets / HubSpot / n8n / Make)

Si defines:

- `CONTACT_WEBHOOK_URL=https://tu-webhook...`

Entonces, despues de enviar el email, el backend hara un POST JSON con el lead + attribution.

## 4) Recomendacion minima adicional

- Conectar Google Search Console (SEO: queries, CTR, indexacion)
- Revisar `src/app/sitemap.ts` (ya incluye productos/servicios)

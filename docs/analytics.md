# Analitica (Yago Web)

Este proyecto soporta:

- Cloudflare Web Analytics (trafico + rendimiento, sin cookies)
- Captura de origen en leads (UTMs/referrer/landing en el formulario)

Opcional:

- Plausible (si quieres funnels/eventos custom en un dashboard; requiere cuenta)

## 1) Activar Cloudflare Web Analytics (recomendado)

Si tu sitio esta alojado/proxy en Cloudflare, tienes dos opciones:

1) Automatico (sin codigo)

- Cloudflare Dashboard -> Web Analytics -> Add site / Enable.

2) Manual por snippet (con env)

- Crea el sitio en Cloudflare Web Analytics y copia el token.
- Define en tu deploy:

  - `NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN=...`

Notas importantes (Cloudflare):

- Web Analytics no soporta UTMs ni eventos custom por ahora.
- El beacon soporta SPA (route changes) automaticamente.

Archivos relevantes:

- `src/components/analytics/CloudflareWebAnalytics.tsx`
- `src/app/layout.tsx`

## 2) Eventos (opcional con Plausible)

Cloudflare Web Analytics no tiene eventos custom.
Si quieres medir clicks/CTA/funnels en un dashboard, puedes usar Plausible.

Para activarlo:

- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yago.cl`

Opcionales (Plausible self-hosted/proxy):

- `NEXT_PUBLIC_PLAUSIBLE_SRC=...`
- `NEXT_PUBLIC_PLAUSIBLE_API=...`

Nota: si defines `NEXT_PUBLIC_CF_WEB_ANALYTICS_TOKEN`, el componente de Plausible se desactiva automaticamente para evitar doble tracking.

Eventos ya etiquetados (si Plausible esta activo):

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

Archivos relevantes (Plausible):

- `src/components/analytics/Plausible.tsx`
- `src/components/analytics/PlausiblePageview.tsx`
- `src/components/landing/*` (clases `plausible-event-*`)
- `src/components/landing/Contacto.tsx` (eventos del formulario)
- `src/components/landing/AuditWidget.tsx` (nudge + widget)

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

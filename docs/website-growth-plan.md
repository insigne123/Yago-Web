# Plan maestro de mejora web, SEO y descubrimiento IA de YAGO

Estado: en ejecucion

Responsable tecnico: equipo YAGO

Mercado prioritario asumido: Chile, con expansion posterior a LATAM

Conversion primaria asumida: solicitar o agendar un diagnostico operativo

## 1. Proposito

Convertir yago.cl en un sitio que:

1. Explique en pocos segundos que hace YAGO, para quien y con que resultado.
2. Permita encontrar la solucion correcta sin conocer los nombres internos de los productos.
3. Genere reuniones y leads B2B cualificados con trazabilidad de origen.
4. Construya autoridad organica en automatizacion de procesos, OCR y operaciones empresariales en Chile.
5. Sea facil de rastrear, comprender y citar por Google, Bing y asistentes de IA.
6. Mantenga una identidad premium, sobria, accesible y rapida.

No se publicaran cifras, clientes, testimonios, integraciones o identidades legales que no puedan verificarse. La optimizacion para asistentes de IA no garantiza menciones: mejora la rastreabilidad, claridad, autoridad y capacidad de citacion.

## 2. Objetivos y metricas

### Objetivo comercial

- Conversion principal: diagnostico operativo solicitado o agendado.
- Conversion secundaria: formulario cualificado de OCR, SADT, AXIS, producto o servicio.
- Indicador principal: reuniones cualificadas originadas en busqueda organica.

### Indicadores SEO

- Impresiones y clics organicos sin marca.
- Consultas en posiciones 1-3, 4-10 y 11-20.
- Porcentaje de URLs validas e indexadas.
- CTR organico por plantilla.
- Backlinks, menciones de marca y dominios de referencia.
- Cero canonicals incorrectos y cero enlaces internos rotos.

### Indicadores de descubrimiento IA

- Referidos desde ChatGPT, Perplexity, Gemini, Claude y Copilot.
- Rastreo confirmado de bots de busqueda IA en logs cuando la plataforma lo permita.
- Menciones o citas de YAGO en un conjunto mensual estable de consultas.
- Numero de paginas con autor, fecha, fuentes y datos estructurados validos.

### Indicadores de experiencia y rendimiento

- LCP p75 menor a 2.5 segundos.
- INP p75 menor a 200 milisegundos.
- CLS p75 menor a 0.1.
- Contraste WCAG AA y cero errores criticos de accesibilidad automatizada.
- Navegacion completa por teclado, mobile y zoom 200%.
- Tasa de conversion y abandono por plantilla.

Los objetivos porcentuales se fijaran despues de obtener una linea base de 28 dias.

## 3. Principios de producto y contenido

1. Cada pagina tiene un trabajo y una conversion principal.
2. La jerarquia y la claridad ganan sobre los efectos decorativos.
3. El visitante elige por problema, proceso o area, no por jerga interna.
4. Las respuestas importantes aparecen antes que la explicacion extensa.
5. La evidencia verificable gana sobre las afirmaciones grandilocuentes.
6. El contenido se escribe para escaneo humano y extraccion semantica.
7. Chile se fortalece antes de clonar paginas genericas para otros paises.
8. El rendimiento, la accesibilidad y la medicion son parte del diseno.

## 4. Direccion visual

### Identidad

- Base institucional: `#070b13`.
- Texto principal oscuro o blanco segun superficie.
- Texto secundario: escala slate con contraste AA.
- Acento principal y unico de alta energia: `#7dd3fc`.
- Superficies editoriales claras para lectura extensa.
- Hero, navegacion y cierres con expresion institucional oscura.
- Sin gradientes morados, fucsias o multicolor como lenguaje principal.

### Tipografia y lectura

- Mantener Instrument Sans para titulares y Manrope para cuerpo.
- Reducir pesos descargados a los que se usan realmente.
- Cuerpo base minimo de 16 px e interlineado de 1.5 a 1.7.
- Ancho editorial objetivo de 60 a 75 caracteres.
- Un solo `h1` por pagina y jerarquia secuencial de headings.
- Parrafos cortos, subtitulos descriptivos, listas y tablas cuando ayuden.

### Componentes

- Un CTA primario por viewport y un secundario visualmente mas quieto.
- Un unico lenguaje de tarjetas, bordes, radios y sombras.
- Estados hover, active, focus y disabled consistentes.
- Botones con respuesta tactil sutil y sin desplazamientos de layout.
- Breadcrumbs en plantillas internas.
- Menu movil desplazable, con ruta actual y cierre accesible.
- Movimiento limitado a elementos que explican estado o jerarquia.
- `prefers-reduced-motion` debe retirar desplazamientos y loops decorativos.

## 5. Arquitectura de informacion objetivo

### Navegacion principal

1. Soluciones: rutas por problema o area.
2. Productos: OCR, SADT, AXIS y productos propios publicados.
3. Servicios: automatizacion a medida, aplicaciones, web y capacitacion.
4. Casos: implementaciones y resultados verificables.
5. Recursos: blog, guias y preguntas frecuentes.
6. CTA persistente: solicitar diagnostico.

### Rutas objetivo

- `/`: posicionamiento y enrutamiento.
- `/soluciones`: indice por problema.
- `/soluciones/[slug]`: intencion de busqueda especifica.
- `/productos`: indice unificado de productos.
- `/productos/[slug]`: demo de producto.
- `/ocr`, `/sadt`, `/axis`: landings especializadas.
- `/servicios` y `/servicios/[slug]`: servicios profesionales.
- `/casos` y futuras rutas de caso: evidencia.
- `/proceso`: metodologia de implementacion.
- `/blog` y `/blog/[slug]`: autoridad editorial.
- `/privacidad` y `/terminos`: confianza legal.

### Home objetivo

1. Hero: resultado, audiencia, diferenciador, prueba y CTA.
2. Evidencia comercial con contexto verificable.
3. Selector de necesidad o proceso.
4. Tres familias principales de soluciones.
5. Caso destacado con metodologia y metricas verificables.
6. Proceso de trabajo en cuatro pasos.
7. Productos disponibles.
8. Seguridad, integraciones y control operativo.
9. Preguntas frecuentes.
10. CTA final.

Se eliminaran o fusionaran secciones que respondan la misma pregunta.

## 6. SEO tecnico

### Metadata

- Titulo, descripcion y canonical unicos por URL indexable.
- Open Graph y Twitter especificos por pagina o plantilla.
- URL e imagen social correctas en cada documento.
- Metadata base sin canonical global heredable.
- Idioma `es-CL` cuando corresponda y contenido visible coherente.

### Rastreo e indexacion

- Sitemap con fechas reales o estables, no la fecha de cada build.
- Robots que permita buscadores generales y bots de busqueda IA elegidos.
- Rutas privadas o de prueba con `noindex` y sin inclusion en sitemap.
- Paginas 404 y error utiles.
- Search Console y Bing Webmaster Tools verificados externamente.
- IndexNow se evaluara despues de activar Bing Webmaster Tools.

### Datos estructurados

- Grafo conectado mediante `@id`.
- `Organization` y `WebSite` globales.
- `ProfessionalService` solo con datos verdaderos.
- `Service` para servicios y soluciones.
- `SoftwareApplication` y `Offer` para productos cuando corresponda.
- `BlogPosting` con autor, fechas e imagen.
- `BreadcrumbList` en paginas internas.
- `FAQPage` solo cuando las preguntas sean visibles en la pagina.

### Calidad tecnica

- Build no debe ignorar errores TypeScript o ESLint.
- Tests de canonical, OG, Twitter, JSON-LD, sitemap y robots.
- Cero anclas o enlaces internos inexistentes.

## 7. Estrategia editorial y autoridad

### Clusters iniciales

1. Automatizacion de procesos con IA en Chile.
2. OCR con IA para empresas.
3. Automatizacion de Portal DT.
4. Monitoreo automatizado de causas PJUD.
5. Integracion de sistemas empresariales, solo para integraciones reales.

### Estructura de pagina citable

1. Respuesta directa de 40 a 80 palabras.
2. Para quien es.
3. Problema que resuelve.
4. Como funciona.
5. Datos y documentos necesarios.
6. Integraciones verificadas.
7. Seguridad, retencion y control humano.
8. Plazos, alcance y precio cuando aplique.
9. Evidencia o caso.
10. Preguntas frecuentes.
11. Fuentes y fecha de revision.
12. CTA contextual.

### Casos

La plantilla de casos debe admitir:

- Cliente o razon de anonimato.
- Problema, baseline y volumen.
- Solucion e integraciones.
- Tiempo de implementacion.
- Resultado medido y metodologia.
- Testimonio aprobado.
- Fecha y responsable.

No se inventaran resultados para completar la plantilla.

### Autoria y fuentes

- Modelo editorial con autor, rol, fecha de publicacion y modificacion.
- Revisor especializado cuando el tema sea legal, laboral o regulatorio.
- Fuentes oficiales enlazadas en afirmaciones sensibles.
- Diferenciar evidencia propia, estimaciones y referencias externas.

## 8. Descubrimiento en asistentes de IA

1. Consolidar la entidad YAGO con datos consistentes y perfiles oficiales.
2. Producir respuestas breves, definiciones, tablas y pasos autocontenidos.
3. Publicar evidencia original y casos verificables.
4. Conectar contenido relacionado mediante enlaces descriptivos.
5. Exponer autor, fechas, fuentes y alcance de cada pieza.
6. Mantener contenido principal renderizado en servidor.
7. Revisar acceso de bots de busqueda IA de acuerdo con privacidad y estrategia.
8. Crear `llms.txt` como mapa auxiliar despues de ordenar la arquitectura.
9. No presentar `llms.txt` ni schema como factores garantizados de ranking.

## 9. Conversion, confianza y medicion

### Conversion

- Home y soluciones: diagnostico operativo.
- Productos: solicitar demo.
- OCR, SADT y AXIS: formulario cualificado.
- Servicios: evaluacion del caso.
- Blog: CTA relacionado con el tema.

### Formularios

- Labels accesibles y mensajes de error especificos.
- Consentimiento y enlace a privacidad.
- Estado de envio, confirmacion y siguiente paso.
- Pagina o estado de agradecimiento medible.
- `lead_id` para conectar analitica, email, webhook y CRM.
- Conservar UTM, referrer y click IDs.
- Verificar respuesta no-2xx de webhooks.
- Rate limiting y proteccion anti-bot en endpoints publicos.

### Eventos minimos

- Pageview.
- CTA principal y secundario.
- Inicio de formulario.
- Error de validacion.
- Envio correcto o fallido.
- Agenda abierta.
- Reserva completada cuando el proveedor lo permita.

Se usara un proveedor de eventos coherente. La analitica de trafico no sustituye un sistema de funnels.

## 10. Rendimiento

- Migrar imagenes de contenido a `next/image`.
- Generar composiciones con relacion de aspecto correcta.
- Comprimir a WebP/AVIF y retirar activos sin uso.
- Reducir hidratacion global y animaciones Framer Motion repetidas.
- Cargar widgets solo donde apoyen la conversion.
- Reducir pesos de fuentes.
- Acotar middleware a rutas necesarias.
- Medir Web Vitals reales por plantilla y dispositivo.
- Definir presupuesto de JS, fuentes e imagenes.

## 11. Accesibilidad y navegacion

- `main#main-content` en todas las paginas publicas.
- Un `h1` real y headings secuenciales.
- Labels accesibles en todos los campos.
- Contraste AA, foco visible y orden de tabulacion logico.
- Sheets y menus con scroll en pantallas bajas.
- `aria-current` en navegacion.
- Texto de controles en espanol.
- `prefers-reduced-motion` completo.
- Pruebas a 320x568, 390x844, 768, 1024 y 1440 px, y zoom 200%.

## 12. Pruebas y entrega continua

- Typecheck y build obligatorios.
- Playwright contra build de produccion.
- Chromium desktop, mobile y al menos un motor adicional cuando CI lo permita.
- Smoke de rutas principales.
- Navegacion y menu movil.
- Formularios con backend simulado o entorno de prueba.
- Accesibilidad automatizada por plantilla.
- SEO tecnico y JSON-LD.
- Enlaces internos y anclas.
- 404 y estados de error.
- Regresion visual de plantillas clave.
- Lighthouse o presupuesto equivalente en CI.

## 13. Fases de ejecucion

### Fase 0: estabilizacion

- [x] Unificar gestor de paquetes y lockfile.
- [x] Reducir archivos incluidos en Firebase App Hosting.
- [x] Validar typecheck y build local.
- [ ] Desplegar y verificar rutas actuales.
- [ ] Confirmar funcionamiento real de formularios y analitica.

Criterio de aceptacion: build reproducible, despliegue exitoso y rutas clave con HTTP 200.

### Fase 1: arquitectura y navegacion

- [x] Unificar nomenclatura de productos.
- [x] Crear indices de productos y casos.
- [x] Resolver rutas y anclas huerfanas.
- [x] Simplificar home y navegacion.
- [x] Agregar breadcrumbs y estados activos.
- [x] Crear 404, error y terminos.

Criterio de aceptacion: cualquier oferta publica se alcanza en tres clics o menos y no hay enlaces internos rotos.

### Fase 2: sistema visual y accesibilidad

- [x] Aplicar la direccion institucional hibrida.
- [x] Unificar componentes y CTA.
- [x] Corregir headings, labels, contraste, focus y mobile sheets.
- [x] Reducir movimiento y respetar preferencias.

Criterio de aceptacion: lectura y navegacion correctas en desktop, mobile, teclado y zoom 200%.

### Fase 3: SEO tecnico

- [x] Metadata por plantilla.
- [x] Canonical, OG y Twitter correctos.
- [x] Sitemap, robots y manifest coherentes.
- [x] Schema conectado y breadcrumbs.
- [x] Tests SEO automaticos.

Criterio de aceptacion: todas las URLs indexables declaran metadata y schema validos y coherentes.

### Fase 4: contenido y GEO

- [x] Modelo de autor, fuentes y fechas.
- [x] Respuestas directas y contenido citable.
- [x] Clusters Chile y enlazado interno.
- [x] Plantilla de casos verificables.
- [x] `llms.txt` auxiliar.

Criterio de aceptacion: paginas prioritarias explican entidad, alcance, fuentes y siguiente paso sin depender de contenido oculto.

### Fase 5: conversion y medicion

- [x] CTA principal consistente.
- [x] Formularios accesibles y cualificados.
- [x] Atribucion completa y `lead_id`.
- [x] Eventos implementados y cubiertos por pruebas de los flujos principales.
- [x] Privacidad, consentimiento y terminos coherentes.

Criterio de aceptacion: cada conversion puede trazarse desde la fuente hasta el resultado del formulario.

### Fase 6: rendimiento

- [x] Imagenes y fuentes optimizadas.
- [x] Hidratacion y widgets reducidos.
- [ ] Web Vitals instrumentados.
- [ ] Presupuestos establecidos.

Criterio de aceptacion: no hay regresiones y las plantillas prioritarias cumplen los objetivos CWV en p75 cuando haya datos suficientes.

### Fase 7: pruebas, publicacion y observacion

- [x] Suite completa verde.
- [x] Revision local de diff y referencias a secretos.
- [ ] Commit y push.
- [ ] Deploy Firebase.
- [ ] Smoke de produccion.
- [ ] Solicitar reindexacion de URLs prioritarias externamente.
- [ ] Observar 28 dias y priorizar siguiente ciclo con datos.

Criterio de aceptacion: produccion estable, medible e indexable.

## 14. Dependencias externas y datos pendientes

Estos elementos requieren confirmacion del negocio y no deben inventarse:

- Razon social, RUT y responsable legal del tratamiento.
- Direccion o definicion formal de operacion remota.
- Perfiles oficiales para `sameAs`, especialmente LinkedIn.
- Permisos para publicar nombres, logos y testimonios de clientes.
- Metricas verificables de casos.
- Fuentes y revision profesional para contenido legal o regulatorio.
- Politica de retencion y proveedor del flujo OCR de carnets.
- Credenciales de email, analitica, Search Console, Bing y CRM.
- Integraciones realmente soportadas y mercados LATAM activos.
- Rate limiting compartido antes de aumentar `maxInstances`; el limite local actual es una defensa complementaria, no una cuota distribuida.
- Migracion de los scripts de desarrollo desde `@genkit-ai/googleai` al SDK `@genkit-ai/google-genai` recomendado.

La implementacion tecnica puede dejar campos y estructuras preparadas, pero la publicacion de esos datos queda bloqueada hasta recibir evidencia.

## 15. Registro de ejecucion

| Fecha | Fase | Estado | Evidencia |
| --- | --- | --- | --- |
| 2026-09-01 | Plan maestro | En ejecucion | Documento creado a partir de auditoria estatica del repositorio |
| 2026-09-01 | Fases 0 a 6 | Implementacion local terminada | Arquitectura, visual, SEO, GEO, conversion, privacidad, seguridad y rendimiento actualizados |
| 2026-09-01 | Dependencias | Runtime validado | `npm ci` reproducible y `npm audit --omit=dev` con 0 vulnerabilidades; el audit completo conserva hallazgos transitivos de Genkit CLI/OpenTelemetry usados en desarrollo |
| 2026-09-01 | Pruebas | Verde | Next 15.5.25, build de 43 paginas, typecheck y Playwright: 61 passed, 1 mobile-only skipped en desktop |
| 2026-09-01 | Publicacion | Pendiente | Requiere autenticacion Firebase y verificar secretos de correo y OCR antes del smoke real |

## 16. Definicion de terminado

El plan se considera tecnicamente ejecutado cuando:

1. Las fases 0 a 7 cumplen sus criterios de aceptacion verificables en repositorio y produccion.
2. Los elementos que dependan de datos del negocio quedan documentados y no contienen informacion inventada.
3. El sitio puede navegarse, rastrearse, medirse y convertirse sin rutas, metadata o formularios ambiguos.
4. Existe una linea base de 28 dias para iniciar el ciclo continuo de SEO, contenido y CRO.

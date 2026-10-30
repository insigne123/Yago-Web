# Rendimiento móvil de YAGO · auditoría y mejoras

## Alcance

Auditoría local de producción con **Lighthouse 13.5.0**, Chromium 147, perfil móvil y throttling simulado. Se revisaron home, integración de IA y OCR entre el 9 y el 13 de octubre de 2026. Es una medición de laboratorio en Windows: **no certifica Core Web Vitals de campo ni INP**. TBT no equivale a INP.

Reportes completos y resúmenes: `.local/seo/performance/`, excluidos de Git y de uploads Firebase. Generador de resúmenes: `scripts/seo/performance-summary.mjs`.

## Hallazgos y cambios aplicados

### Imágenes

Lighthouse detectó ilustraciones PNG de tamaño grande y logos descargados a resolución excesiva para su presentación. Se generaron derivados WebP manteniendo los archivos originales.

| Archivo | Antes | Derivado WebP | Reducción |
| --- | ---: | ---: | ---: |
| Ilustración automatización/integración | 804.282 bytes | 38.944 bytes | 95 % |
| Ilustración aplicaciones | 637.637 bytes | 28.324 bytes | 96 % |
| Ilustración SOF.IA usada en agentes | 555.676 bytes | 22.406 bytes | 96 % |
| Logo GrupoExpro del hero | 43.505 bytes | 10.556 bytes | 76 % |
| Logo PSOL del hero | 20.275 bytes | 15.744 bytes | 22 % |

Los derivados los usan los cuatro servicios y los logos de home, preservando alt, proporciones y enlaces. El enlace de GrupoExpro apunta al dominio actual `grupoexpro.com`, verificado públicamente. Script reproducible: `scripts/seo/optimize-site-images.mjs`; resultados de generación en el snapshot privado.

### Trabajo de JavaScript no esencial

- SDK externo de GA4 pasa a `lazyOnload`; la inicialización y cola siguen antes de interacción, con `page_view` gestionado una sola vez y señales publicitarias desactivadas. Pruebas de inicialización, eventos y opt-out pasaron.
- Lenis se carga dinámicamente solo para dispositivos con cursor; móvil táctil conserva scroll nativo. Modal locking y anclas de escritorio mantienen la mejora existente.
- Motion para reveals y contadores se carga dinámicamente en escritorio; en táctil o con reduced motion el contenido y valores se muestran sin ese trabajo. Sin JavaScript, el HTML inicial conserva el contenido.
- Home presenta los rótulos Flujos/IA/Apps/OCR directamente, sin montar contadores para valores que no son números.

## Mediciones observadas

Se conservaron tanto los resultados favorables como los peores. Las ejecuciones variaron por CPU, red, CDN/caché y procesos locales; una ejecución de OCR advirtió CPU más lenta que la esperada. No se presenta el mejor puntaje como resultado estable ni se atribuye todo cambio únicamente al código.

| Página | Laboratorio inicial | Ejecuciones posteriores observadas | Última medición guardada |
| --- | --- | --- | --- |
| Home | Rendimiento 70, LCP 2,7 s, TBT 1120 ms | Puntuaciones 65 y 78 en la fase de imágenes/SDK | **59**, LCP **3,2 s**, TBT **3240 ms** tras la fase final |
| Integración IA | Rendimiento 52, LCP 5,3 s, TBT 580 ms | Puntuación 72, LCP 3,2 s | **73**, LCP **2,8 s**, TBT **970 ms** |
| OCR | Rendimiento 44, LCP 6,5 s, TBT 1140 ms | Puntuaciones 56 y 61, LCP 3,5/3,1 s | **64**, LCP **3,0 s**, TBT **1550 ms** |

**SEO Lighthouse: 100/100** en las páginas/ejecuciones documentadas. Eso corresponde a las comprobaciones técnicas de ese auditor, no a posicionamiento ni recomendaciones. CLS prácticamente 0. La reducción de bytes de las imágenes es una mejora objetiva; la mejora de rendimiento no fue uniforme, especialmente en la home.

## Verificación

- Tipado y compilaciones Next/Firebase correctos.
- Pruebas de navegación, contacto y analítica: 21 pasaron, una comprobación móvil fue omitida en escritorio por diseño.
- Después de diferir Motion: 12 pruebas de home/OCR/anclas/accesibilidad pasaron en local.
- Tras publicación final: 16 pruebas relacionadas de cuestionario, consentimiento, home, OCR y accesibilidad de integración pasaron en producción.
- Auditoría pública posterior: 47/47 URLs con HTTP, canónica, H1, directivas y JSON-LD correctos en las comprobaciones implementadas.

## Siguiente mejora priorizada

La home y OCR aún tienen TBT alto en parte de las mediciones, y el LCP final está por encima del objetivo de 2,5 s. La próxima iteración debe perfilar las tareas largas y el render inicial, comparar con un entorno de medición estable y consultar datos de campo cuando haya volumen suficiente. No se cambia caché, consentimiento de analítica ni funcionalidades comerciales basándose solo en un puntaje aislado.

Objetivos de campo: LCP ≤ 2,5 s, INP ≤ 200 ms, CLS ≤ 0,1. Quedan pendientes de acreditación con datos reales de usuarios.

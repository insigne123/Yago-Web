# Oportunidades ChileCompra para Yago, 1 de octubre de 2026

Fuente: API de Mercado Público (`estado=activas`). Había 4.338 licitaciones activas. El script `scripts/chilecompra/oportunidades.py` dejó 76 candidatas por nombre y 38 después de revisar el detalle. Abajo está la selección revisada a mano, ordenada por calce con Yago y por plazo.

Ficha de cada una: `https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?idlicitacion=<código>`

## Prioridad alta: calce directo con la oferta de Yago

| Código | Qué piden | Organismo | Monto est. | Cierre | Línea Yago |
|---|---|---|---|---|---|
| 1057503-146-LE26 | Solución SaaS para automatizar procesos de gestión estratégica institucional | Hospital Padre Alberto Hurtado | 1.600 UF | 15-oct 16:00 (preguntas hasta 5-oct) | Automatización de procesos / Procedura |
| 869591-12-LP26 | Plataforma de gestión documental, expediente electrónico y gestión de procesos | Dirección ChileCompra | n/d | 5-oct 15:00 | Gestión documental + OCR + procesos |
| 3666-12-LE26 | Gestión documental y digital: expedientes electrónicos, solicitudes ciudadanas, firma electrónica, agendamiento, analítica | Municipalidad de Tiltil | $58.000.000 | 5-oct 17:00 | Gestión documental / desarrollo a medida |
| 4121-25-LE26 | Sistema de gestión documental con implementación, soporte y capacitación | Municipalidad de Ninhue (Ñuble) | $30.000.000 | 5-oct 15:00 | Gestión documental |
| 587-49-LE26 | Digitalización e indexación de documentación MINVU y SEREMI RM | Subsecretaría MINVU | $25.000.000 | 5-oct 15:10 | OCR / indexación |
| 1562-63-LP26 | Desarrollo de la Plataforma Pública Minera | SERNAGEOMIN | $165.000.000 | 9-oct 12:00 | Desarrollo de software / web |
| 2239-2-LR26 | **Convenio Marco** de desarrollo y mantención de software, servicios TI y cloud | Dirección ChileCompra | n/d (marco) | 9-oct 15:00 | Estratégico: entrar al convenio abre ventas a todo el Estado |

## Capacitación en IA y herramientas digitales (montos chicos, ganables rápido)

| Código | Qué piden | Organismo | Monto est. | Cierre |
|---|---|---|---|---|
| 2385-56-LE26 | Curso de ofimática e inteligencia artificial para funcionarios | Municipalidad de Calama | $7.500.000 | 5-oct 15:00 |
| 2448-137-L126 | Curso-taller de datos usando IA | Municipalidad de Coquimbo | $5.000.000 | 6-oct 15:00 |
| 2422-159-L126 | Capacitación "Gestión integral del cambio para la transformación digital municipal" (42 personas, presencial) | Municipalidad de Puente Alto | $4.200.000 | 5-oct 15:00 |
| 591-31-LE26 | Curso de marketing digital, estrategia digital y analítica | FONASA | n/d | 2-oct 15:11 |

## Otras con calce parcial

| Código | Qué piden | Organismo | Monto est. | Cierre | Comentario |
|---|---|---|---|---|---|
| 4768-48-LE26 | Modernización del sitio web institucional | Municipalidad de La Estrella | $9.000.000 | 5-oct 15:30 | Sitio web, proyecto acotado |
| 2658-328-L126 | Suscripción anual a plataforma de IA para la Dirección de Obras | Municipalidad de Ancud | n/d | 8-oct 15:00 | Posible SOF.IA |
| 5482-101-LR26 | Plataforma de IA para analítica de video y alertas sobre cámaras existentes | Municipalidad de Ñuñoa | n/d | 19-oct 15:01 | Visión por computador; requiere socio de video |
| 2981-268-LP26 | Solución OSINT/SOCMINT para análisis de redes sociales y web | PDI | $130.000.000 | 13-oct 15:05 | Exige producto especializado |
| 696217-2-LP26 | Digitalización y destrucción documental, Fiscalía de Tarapacá | Ministerio Público | $150.000.000 | 5-oct 16:00 | Incluye trabajo físico en Iquique |
| 463-5-LE26 | Software de gestión de personas | CIREN | 560 UF | 5-oct 16:00 | RR.HH., cercano a SADT |
| 1456836-4-LP26 | Software de gestión de personas y remuneraciones | SLEP Hanga Roa | n/d | 5-oct 17:00 | RR.HH., cercano a SADT |

## Ya cierran hoy (1-oct), probablemente fuera de plazo

- 867990-95-L126: formación en IA para la Facultad Tecnológica, USACH, $6.500.000, 15:00.
- 1375760-10-LE26: digitalización de expedientes de funcionarios, SLEP Valle Cachapoal, $35.000.000, 12:00.

## Descartadas por ahora

Las plataformas municipales integrales (ERP de rentas, permisos, contabilidad y RR.HH.) de Pichilemu ($265M), Alto Hospicio, Ñuñoa y el SLEP Elqui ($290M) piden un ERP municipal completo con módulos ya hechos. Lo mismo pasa con las compras de licencias de terceros (Microsoft, Adobe, MicroStrategy, antivirus).

## Para postular

- Hay que estar inscrito como proveedor en Mercado Público, y en ChileProveedores para los montos mayores.
- Las bases y anexos se descargan desde la ficha de cada licitación. Revisar garantías de seriedad, experiencia exigida y criterios de evaluación antes de decidir.
- Para correr la búsqueda de nuevo: `python3 scripts/chilecompra/oportunidades.py`. Conviene pedir un ticket propio de la API, porque el ticket de ejemplo es compartido y se satura.

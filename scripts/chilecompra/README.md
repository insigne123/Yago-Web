# Buscador de oportunidades en ChileCompra

Busca licitaciones activas en Mercado Público y las ordena según qué tan bien calzan con la oferta de Yago (IA, OCR, gestión documental, automatización, software a medida, sitios web, BI, capacitación tecnológica, RR.HH./SADT, AXIS).

```bash
export CHILECOMPRA_TICKET=<ticket propio>   # se pide gratis en https://api.mercadopublico.cl con Clave Única
python3 scripts/chilecompra/oportunidades.py --out chilecompra-out
```

Genera `chilecompra-out/oportunidades.json` y `oportunidades.csv` con: código, nombre, organismo, región, tipo, monto estimado, fecha de cierre, líneas de Yago que calzan, descripción y link a la ficha.

Cómo funciona:
1. Descarga todas las licitaciones con `estado=activas` (una sola llamada).
2. Descarta por nombre lo que no aplica (hardware, obras, salud clínica, licencias de terceros, etc.) y deja solo las que tienen señales de Yago.
3. Pide el detalle de cada candidata y vuelve a puntuar con la descripción y los ítems.

Para ajustar el foco, edita `SEÑALES` (patrón, peso, línea de negocio) y `EXCLUSIONES` en el script. Sin ticket propio usa el ticket de ejemplo de la documentación oficial, que es compartido y se satura (HTTP 429).

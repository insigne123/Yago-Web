#!/usr/bin/env python3
"""Busca licitaciones activas en Mercado Público (ChileCompra) que calcen con la oferta de Yago.

Uso:
    CHILECOMPRA_TICKET=<tu-ticket> python3 scripts/chilecompra/oportunidades.py [--out DIR] [--min-score N]

El ticket se solicita gratis en https://api.mercadopublico.cl (con Clave Única).
Sin ticket propio se usa el ticket de ejemplo publicado en la documentación oficial,
que sirve para pruebas pero puede tener límites de uso compartidos.

Salida: oportunidades.json y oportunidades.csv en --out.
Solo usa la librería estándar de Python.
"""
import argparse
import csv
import json
import os
import re
import sys
import time
import unicodedata
import urllib.parse
import urllib.request

API = "https://api.mercadopublico.cl/servicios/v1/publico/licitaciones.json"
TICKET_DEMO = "F8537A18-6766-4DEF-9E59-426B4FEE2844"

# (patrón, peso, línea de negocio Yago). Se evalúan sobre texto normalizado sin tildes.
SEÑALES = [
    (r"inteligencia artificial|\bia\b|machine learning|modelo de lenguaje|\bllm\b|genai|ia generativa", 5, "IA aplicada"),
    (r"chatbot|asistente virtual|agente virtual|bot conversacional|atencion automatizada", 5, "SOF.IA / asistentes"),
    (r"\bocr\b|reconocimiento optico|extraccion de datos|lectura automatica de documentos", 5, "OCR"),
    (r"digitalizacion|digitalizar|gestion documental|expediente electronico|archivo digital|cero papel", 4, "OCR / gestión documental"),
    (r"automatizacion de procesos|automatizar procesos|\brpa\b|robotizacion|flujo de aprobacion|workflow|\bbpm\b", 5, "Automatización de procesos"),
    (r"desarrollo de software|software a medida|desarrollo de (una )?(aplicacion|plataforma|sistema)|fabrica de software|desarrollo web|desarrollo informatico", 5, "Desarrollo de software"),
    (r"transformacion digital|gobierno digital|modernizacion (de la gestion|institucional|digital)", 4, "Transformación digital"),
    (r"sitio web|pagina web|portal web|plataforma web|landing|optimizacion del sitio", 3, "Sitios web"),
    (r"business intelligence|\bbi\b|dashboard|tablero de (control|gestion)|analitica de datos|visualizacion de datos|reporteria", 4, "Datos y reportes"),
    (r"procedimientos? (iso|de calidad|internos|administrativos)|iso 9001|sistema de gestion de calidad|manual de procedimientos|levantamiento de procesos|mapa de procesos|rediseno de procesos", 4, "Procedura / procesos ISO"),
    (r"\bcrm\b|prospeccion|generacion de leads|marketing digital|publicidad digital|redes sociales|gestion de contenidos", 3, "ANTON.IA / MASSIMO"),
    (r"(curso|capacitacion|taller|formacion).{0,60}(inteligencia artificial|\bia\b|digital|ofimatica|excel|datos|transformacion digital|herramientas tecnologicas)", 4, "Capacitación tecnológica"),
    (r"contratos? de trabajo|registro de contratos|remuneraciones|desvinculacion|finiquito|\bf30\b|direccion del trabajo|gestion de personas", 2, "SADT / RR.HH."),
    (r"antecedentes (penales|judiciales)|poder judicial|causas judiciales|\bpjud\b", 3, "AXIS"),
    (r"saas|software|plataforma|sistema informatico|sistema de gestion|solucion tecnologica|aplicacion movil|\bapp\b", 2, "Software / SaaS"),
    (r"conciliacion bancaria|facturas?|ordenes de compra|cuentas por pagar|backoffice|mesa de ayuda|soporte de sistemas", 1, "Backoffice"),
    (r"consultoria|asesoria", 1, None),
]

# Si alguno calza en el NOMBRE, se descarta (hardware, obras, salud clínica, licencias de terceros, etc.)
EXCLUSIONES = re.compile(
    r"quirurg|clinic|medic|hospitalari|insumo|farmac|anticuerpo|protesis|osteosintesis|anestesia|endoscop|"
    r"imagenolog|oftalmolog|laboratorio clinico|tecnologo|enfermer|"
    r"cctv|camara|televigilancia|videovigilancia|alarma|radar|dron|aeronave|rpas|gps tracker|"
    r"climatizacion|calefaccion|agua potable|alcantarillado|electric|alumbrado|luminaria|ups\b|respaldo de energia|"
    r"pavimenta|construccion|obra|arquitectura|inspeccion (fiscal|tecnica)|\bato\b|\baito\b|\bito\b|"
    r"firewall|antivirus|\bedr\b|licencias? (microsoft|office|adobe|sophos|vmware|red hat|veeam|ofimatic)|office 365|"
    r"equipos? (informatic|tecnologic|computacional|audiovisual)|computador|notebook|impresora|toner|insumos informatic|"
    r"cableado|enlace de datos|red de datos|internet|telefonia|radiocomunicacion|satelital|"
    r"vehiculo|camioneta|mobiliario|vestuario|alimentacion|colaciones|aseo|limpieza|carpa|"
    r"primeros auxilios|manipulador|semafor|residuos|ciclovia|puente|camino|ruta \d|aerodromo|aeropuerto|\baif\b|\batif\b|seguro",
)


def norm(s):
    return unicodedata.normalize("NFKD", s or "").encode("ascii", "ignore").decode().lower()


def get(params, ticket, intentos=4):
    url = API + "?" + urllib.parse.urlencode({**params, "ticket": ticket})
    for i in range(intentos):
        try:
            with urllib.request.urlopen(url, timeout=60) as r:
                data = json.load(r)
            if "Codigo" in data and "Listado" not in data:  # error de la API (p.ej. peticiones simultáneas)
                raise RuntimeError(data.get("Mensaje"))
            return data
        except Exception as e:  # noqa: BLE001
            if i == intentos - 1:
                raise
            time.sleep(2 ** (i + 1))
    return None


def puntuar(texto):
    t = norm(texto)
    score, lineas = 0, []
    for patron, peso, linea in SEÑALES:
        if re.search(patron, t):
            score += peso
            if linea and linea not in lineas:
                lineas.append(linea)
    return score, lineas


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", default="chilecompra-out")
    ap.add_argument("--min-score", type=int, default=4, help="puntaje mínimo con detalle para incluir")
    ap.add_argument("--delay", type=float, default=1.0, help="segundos entre llamadas de detalle (la API devuelve 429 si se va muy rápido)")
    args = ap.parse_args()
    ticket = os.environ.get("CHILECOMPRA_TICKET", TICKET_DEMO)

    activas = get({"estado": "activas"}, ticket)["Listado"]
    print(f"Licitaciones activas: {len(activas)}", file=sys.stderr)

    candidatas = []
    for l in activas:
        nombre = l.get("Nombre") or ""
        if EXCLUSIONES.search(norm(nombre)):
            continue
        s, _ = puntuar(nombre)
        if s >= 2:
            candidatas.append(l)
    print(f"Candidatas por nombre: {len(candidatas)}", file=sys.stderr)

    resultados = []
    for i, l in enumerate(candidatas, 1):
        cod = l["CodigoExterno"]
        try:
            det = get({"codigo": cod}, ticket)["Listado"][0]
        except Exception as e:  # noqa: BLE001
            print(f"  [{i}] {cod}: error detalle ({e})", file=sys.stderr)
            continue
        time.sleep(args.delay)
        items = (det.get("Items") or {}).get("Listado") or []
        texto_items = " ".join(f"{it.get('NombreProducto','')} {it.get('Descripcion','')}" for it in items)
        texto = f"{det.get('Nombre','')} {det.get('Descripcion','')} {texto_items}"
        score, lineas = puntuar(texto)
        if score < args.min_score:
            continue
        comp = det.get("Comprador") or {}
        fechas = det.get("Fechas") or {}
        resultados.append({
            "codigo": cod,
            "nombre": det.get("Nombre"),
            "organismo": comp.get("NombreOrganismo"),
            "unidad": comp.get("NombreUnidad"),
            "region": comp.get("RegionUnidad"),
            "tipo": det.get("Tipo"),
            "monto_estimado": det.get("MontoEstimado"),
            "moneda": det.get("Moneda"),
            "fecha_cierre": fechas.get("FechaCierre") or l.get("FechaCierre"),
            "fecha_preguntas": fechas.get("FechaFinal"),
            "score": score,
            "lineas_yago": lineas,
            "descripcion": (det.get("Descripcion") or "").strip(),
            "items": [it.get("NombreProducto") for it in items][:5],
            "url": f"https://www.mercadopublico.cl/Procurement/Modules/RFB/DetailsAcquisition.aspx?idlicitacion={cod}",
        })
        print(f"  [{i}/{len(candidatas)}] {cod} score={score}", file=sys.stderr)

    resultados.sort(key=lambda r: (-r["score"], r["fecha_cierre"] or ""))
    os.makedirs(args.out, exist_ok=True)
    with open(os.path.join(args.out, "oportunidades.json"), "w", encoding="utf-8") as f:
        json.dump(resultados, f, ensure_ascii=False, indent=2)
    with open(os.path.join(args.out, "oportunidades.csv"), "w", encoding="utf-8", newline="") as f:
        w = csv.writer(f)
        w.writerow(["score", "codigo", "nombre", "organismo", "region", "tipo", "monto_estimado", "fecha_cierre", "lineas_yago", "url"])
        for r in resultados:
            w.writerow([r["score"], r["codigo"], r["nombre"], r["organismo"], r["region"], r["tipo"],
                        r["monto_estimado"], r["fecha_cierre"], "; ".join(r["lineas_yago"]), r["url"]])
    print(f"Oportunidades: {len(resultados)} -> {args.out}", file=sys.stderr)


if __name__ == "__main__":
    main()

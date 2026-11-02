import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";
import { AxisMini, OcrMini, SadtMini } from "@/components/home/ProductMiniUI";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { PRODUCT_PRICES } from "@/config/site";
import { FlowDiagram } from "@/components/site/FlowDiagram";
import { FLOWS } from "@/config/flows";
import { INTEGRATIONS } from "@/config/home";

type ProductCard = {
  slug: string;
  href: string;
  tag: string;
  name: string;
  description: string;
  bullets: string[];
  priceLabel: string;
  price: string;
  priceSuffix?: string;
  visual: ReactNode;
};

function splitPrice(label?: string) {
  // "Desde 22,13 UF + IVA/mes" -> { value: "22,13 UF", suffix: "+ IVA /mes" }
  const match = label?.match(/^Desde\s+([\d.,]+\s*UF)\s*(.*)$/);
  return match
    ? { value: match[1], suffix: match[2].replace("/mes", " /mes").replace(/\s+/g, " ").trim() }
    : { value: label ?? "", suffix: "" };
}

const sadtPrice = splitPrice(PRODUCT_PRICES.sadt);
const axisPrice = splitPrice(PRODUCT_PRICES.axis);

const PRODUCTS: ProductCard[] = [
  {
    slug: "sadt",
    href: "/sadt",
    tag: "Portal Dirección del Trabajo",
    name: "SADT",
    description: "Registra contratos y desvinculaciones en Mi DT y descarga certificados F30/F30-1 sin cargarlos uno por uno.",
    bullets: ["Carga desde archivo o Workges", "Comprobantes, folios y PDFs guardados", "Errores visibles y reproceso por lote"],
    priceLabel: "Desde · 8.000 créditos",
    price: sadtPrice.value,
    priceSuffix: sadtPrice.suffix,
    visual: <SadtMini />,
  },
  {
    slug: "axis",
    href: "/axis",
    tag: "Consultas Poder Judicial",
    name: "AXIS",
    description: "Revisa causas penales públicas de una persona o de un lote completo, con evidencia auditable para RRHH y control interno.",
    bullets: ["Resultado por persona en ~1 minuto", "Verificación contra datos oficiales", "Monitoreo diario incluido"],
    priceLabel: "Desde · 2.000 créditos",
    price: axisPrice.value,
    priceSuffix: axisPrice.suffix,
    visual: <AxisMini />,
  },
  {
    slug: "ocr",
    href: "/ocr",
    tag: "Documentos a datos",
    name: "OCR",
    description: "Convierte facturas, órdenes de compra, contratos y PDFs escaneados en datos listos para tu planilla o ERP.",
    bullets: ["PDFs, imágenes y archivos escaneados", "Campos estructurados, listos para revisar", "API para integrarlo a tus sistemas"],
    priceLabel: "Evaluación inicial",
    price: "Con tus documentos",
    visual: <OcrMini />,
  },
];

export function ProductsShowcase() {
  return (
    <section id="productos" className="y-mist y-sheet scroll-mt-24">
      {/* Ancla heredada: enlaces antiguos a /#elige-ruta siguen funcionando */}
      <span id="elige-ruta" className="absolute -top-24" aria-hidden="true" />
      <div className="y-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="y-eyebrow">Productos</span>
            <h2 className="y-h2 text-slate-950">Productos para procesos específicos.</h2>
            <p className="y-lead max-w-2xl">
              Automatización del Portal Mi DT, consultas al PJUD y lectura de documentos: implementaciones de YAGO
              para tareas concretas de RRHH, operaciones y finanzas.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-3">
            <Link href="/productos" className="y-link min-h-11">Comparar productos y API<ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" /></Link>
            <Link href="/precios" className="y-link min-h-11 text-sm">Comparar planes y precios<ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" /></Link>
          </div>
        </div>

        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {PRODUCTS.map((product, index) => (
            <ProductTile key={product.slug} product={product} span={index < 2 ? "lg:col-span-3" : "lg:col-span-2"} />
          ))}

          {/* Mosaico: integraciones con haces de luz */}
          <article className="y-dark y-reveal relative overflow-hidden rounded-[1.5rem] bg-[#0b1220] p-7 shadow-[0_40px_80px_-40px_rgba(11,18,32,0.75)] sm:p-9 md:col-span-2 lg:col-span-4">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-[-12rem] h-[22rem] w-[40rem] -translate-x-1/2 rounded-full bg-sky-400/[0.12] blur-[100px]" />
              <div className="y-grid-bg" />
            </div>
            <div className="relative flex h-full flex-col gap-8">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between md:gap-10">
                <div className="flex max-w-md flex-col gap-2">
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-300">Integraciones</span>
                  <h3 className="y-h3 text-[1.6rem] text-white">Conectado a tus sistemas, de punta a punta.</h3>
                </div>
                <p className="max-w-sm text-[15px] leading-relaxed text-slate-300">
                  Funciona sobre lo que tu equipo ya usa: toma los datos donde están y deja el resultado donde se necesita.
                </p>
              </div>
              <FlowDiagram {...FLOWS.home} className="my-auto" />
              <div className="-mx-7 border-t border-white/[0.08] pt-6 sm:-mx-9">
                <div className="y-marquee">
                  {[0, 1].map((copy) => (
                    <ul key={copy} className="y-marquee__track" aria-hidden={copy === 1 ? true : undefined}>
                      {INTEGRATIONS.map((name) => (
                        <li
                          key={`${copy}-${name}`}
                          className="whitespace-nowrap rounded-full bg-white/[0.04] px-4 py-2 text-sm text-slate-200 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                        >
                          {name}
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </SpotlightGroup>
      </div>
    </section>
  );
}

function ProductTile({ product, span }: { product: ProductCard; span: string }) {
  return (
    <article className={`y-spot y-card y-card-hover y-reveal flex flex-col overflow-hidden ${span}`}>
      <div className="relative flex min-h-[15rem] items-center justify-center overflow-hidden border-b border-slate-200/70 bg-[linear-gradient(180deg,#eef4f9,#e6eef6)] p-7">
        <div aria-hidden="true" className="y-grid-bg y-grid-bg-light" />
        <div className="relative w-full max-w-md">{product.visual}</div>
      </div>
      <div className="flex flex-1 flex-col gap-5 p-7">
        <div className="flex flex-col gap-2">
          <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-700">{product.tag}</span>
          <h3 className="y-h3 text-[1.9rem] text-slate-950">{product.name}</h3>
          <p className="text-[16.5px] leading-relaxed text-slate-700">{product.description}</p>
        </div>
        <ul className="flex flex-col gap-2.5">
          {product.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2.5 text-[15px] leading-snug text-slate-600">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={2.4} aria-hidden="true" />
              {bullet}
            </li>
          ))}
        </ul>
        <div className="mt-auto flex flex-wrap items-end justify-between gap-4 border-t border-slate-200/80 pt-5">
          <div className="flex flex-col gap-0.5">
            <span className="text-[13px] text-slate-600">{product.priceLabel}</span>
            <span className="text-xl font-semibold tracking-[-0.01em] text-slate-950">
              {product.price}
              {product.priceSuffix ? <span className="ml-1 text-sm font-medium text-slate-600">{product.priceSuffix}</span> : null}
            </span>
          </div>
          <Link
            href={product.href}
            className={`y-btn y-btn-ink y-btn-sm plausible-event-name=Home+Producto plausible-event-location=productos plausible-event-product=${product.slug}`}
          >
            Ver {product.name}
            <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}

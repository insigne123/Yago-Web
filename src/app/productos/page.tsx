import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowRight, Bot, Braces, Check, Gavel, Landmark, type LucideIcon } from "lucide-react";
import { ImageLinkCard } from "@/components/catalog/CatalogKit";
import { AxisMini, SadtMini } from "@/components/home/ProductMiniUI";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { BOOKING_ACTION, ActionLink, CtaBand, IconTile, PageHero, PageSection, SectionHeader, PageShell, TextLink } from "@/components/site/PageKit";
import { HOME_AGENTS } from "@/config/home";
import { OCR_MASTER } from "@/config/ocr-master";
import { PRODUCTS } from "@/config/productos";
import { navLinks } from "@/config/site";
import { createCollectionJsonLd, createPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CATALOG_UPDATED, PRODUCT_CHOICES } from "@/config/catalog-guidance";

export const metadata = createPageMetadata({
  title: "Productos de automatización e IA para empresas | YAGO",
  description:
    "Conoce OCR, SADT, AXIS y los productos de YAGO para automatizar documentos, operaciones laborales, consultas públicas y procesos internos.",
  path: "/productos",
});

/* Productos principales: textos y precios vienen del menú (navLinks / PRODUCT_PRICES). */
const FEATURED_EXTRAS: Record<
  string,
  { id: string; icon: LucideIcon; bullets: string[]; visual: ReactNode; secondary: { label: string; href: string } }
> = {
  "/sadt": {
    id: "sadt",
    icon: Landmark,
    bullets: ["Carga desde archivo o Workges", "Comprobantes, folios y PDFs guardados", "Errores visibles y reproceso por lote"],
    visual: <SadtMini />,
    secondary: { label: "Ver planes", href: "/precios#sadt" },
  },
  "/axis": {
    id: "axis",
    icon: Gavel,
    bullets: ["Resultado por persona en ~1 minuto", "Verificación contra datos oficiales", "Monitoreo diario incluido"],
    visual: <AxisMini />,
    secondary: { label: "Ver planes", href: "/precios#axis" },
  },
};

const FEATURED = (navLinks.find((link) => link.href === "/productos")?.children ?? []).flatMap((item) => {
  const extra = FEATURED_EXTRAS[item.href];
  return extra ? [{ ...item, ...extra }] : [];
});

/** "Desde 31,80 UF + IVA/mes" -> { label: "Desde", value: "31,80 UF", suffix: "+ IVA/mes" } */
function splitMeta(meta?: string) {
  const match = meta?.match(/^Desde\s+([\d.,]+\s*UF)\s*(.*)$/);
  if (match) return { label: "Desde", value: match[1], suffix: match[2].trim() };
  return { label: "Primer paso", value: meta ?? "Conversemos tu caso", suffix: "" };
}

function agentTag(slug: string) {
  return HOME_AGENTS.find((agent) => agent.href === `/productos/${slug}`)?.tag;
}

export default function ProductsIndexPage() {
  const itemList = createCollectionJsonLd({ name: "Productos de YAGO", description: "Software para procesos definidos, OCR Master API y agentes configurables para empresas.", path: "/productos", modifiedDate: CATALOG_UPDATED, items: [
    ...FEATURED.map((product) => ({ name: product.name, href: product.href, description: product.description })),
    { name: "OCR Master API", href: "/ocr-master" },
    ...PRODUCTS.map((product) => ({ name: product.name, href: `/productos/${product.slug}`, description: product.tagline })),
  ] });

  return (
    <PageShell>
      <JsonLd id="jsonld-productos" data={itemList} />
      {/* ---------------- HERO ---------------- */}
      <PageHero
        fx
        eyebrow="Productos YAGO"
        title="Elige por el proceso que necesitas resolver,"
        highlight="no por la tecnología."
        description="Estas soluciones parten desde flujos ya definidos y se configuran para tu operación. Si tu caso no calza, revisamos una automatización o aplicación a medida."
        actions={
          <>
            <ActionLink action={BOOKING_ACTION} arrow />
            <ActionLink action={{ label: "Comparar precios", href: "/precios" }} variant="glass" />
          </>
        }
        aside={
          <div className="y-beam">
            <div className="y-beam__inner bg-[#0b1220] p-3 sm:p-4">
              <p className="flex items-center justify-between gap-3 px-3 pb-3 pt-2 font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">
                <span>Productos listos</span>
                <span className="text-slate-300">{FEATURED.length}</span>
              </p>
              <ul className="flex flex-col gap-1">
                {FEATURED.map((product) => (
                  <li key={product.href}>
                    <Link
                      href={product.href}
                      className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition-colors hover:bg-white/[0.05] focus-visible:bg-white/[0.05]"
                    >
                      <IconTile icon={product.icon} dark />
                      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <span className="flex flex-wrap items-baseline gap-x-2.5">
                          <span className="font-headline text-[1.05rem] font-semibold text-white">{product.name}</span>
                          <span className="text-[13.5px] text-slate-400">{product.eyebrow}</span>
                        </span>
                        {product.meta ? <span className="font-mono text-[12.5px] text-sky-300">{product.meta}</span> : null}
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
              <a
                href="#agentes"
                className="mt-2 flex items-center gap-4 rounded-2xl border-t border-white/[0.08] px-3 pb-2 pt-4 text-[14.5px] text-slate-300 transition-colors hover:text-white"
              >
                <Bot className="h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                <span className="min-w-0 flex-1">Agentes IA y OCR Master API</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </a>
            </div>
          </div>
        }
      />

      <PageSection id="elegir-producto" tone="light">
        <SectionHeader eyebrow="Producto, API o servicio" title="Elige el formato que necesita tu equipo." description="SADT y AXIS tienen procesos definidos. OCR Master se consume desde tu software; el servicio OCR se implementa y evalúa con tus documentos." />
        <div role="region" aria-label="Comparación de productos y servicio OCR" tabIndex={0} className="mt-9 overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700">
          <table className="w-full min-w-[36rem] text-left text-[15px] leading-relaxed text-slate-700"><caption className="sr-only">Solución, necesidad y modalidad</caption><thead className="bg-mist text-slate-950"><tr><th scope="col" className="px-5 py-4">Solución</th><th scope="col" className="px-5 py-4">Para qué sirve</th><th scope="col" className="px-5 py-4">Modalidad</th></tr></thead><tbody>{PRODUCT_CHOICES.map((choice) => <tr key={choice.href} className="border-t border-slate-200"><th scope="row" className="px-5 py-4"><Link href={choice.href} className="y-link min-h-11">{choice.name}</Link></th><td className="px-5 py-4">{choice.fit}</td><td className="px-5 py-4">{choice.mode}</td></tr>)}</tbody></table>
        </div>
      </PageSection>

      {/* ---------------- PRODUCTOS LISTOS ---------------- */}
      <PageSection id="productos-listos" tone="mist">
        <SectionHeader
          eyebrow="Productos listos"
          title="Software para Mi DT y consultas del PJUD."
          description="Precios publicados y puesta en marcha sobre tu operación, con estado y evidencia de cada ejecución."
          action={<TextLink href="/precios">Comparar planes y precios</TextLink>}
        />

        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {FEATURED.map((product, index) => {
            const price = splitMeta(product.meta);
            const wide = index === 2;
            return (
              <article
                key={product.href}
                id={product.id}
                className={`y-spot y-card y-card-hover y-reveal grid scroll-mt-28 grid-cols-1 overflow-hidden ${
                  wide ? "lg:col-span-2 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]" : ""
                }`}
              >
                <div
                  className={`relative flex min-h-[15rem] items-center justify-center overflow-hidden bg-[linear-gradient(180deg,#eef4f9,#e6eef6)] p-7 sm:p-10 ${
                    wide ? "border-b border-slate-200/70 lg:order-2 lg:border-b-0 lg:border-l" : "border-b border-slate-200/70"
                  }`}
                >
                  <div aria-hidden="true" className="y-grid-bg y-grid-bg-light" />
                  <div className="relative w-full max-w-md">{product.visual}</div>
                </div>
                <div className="flex flex-1 flex-col gap-5 p-7 sm:p-9">
                  <div className="flex flex-col gap-2">
                    <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-700">{product.eyebrow}</span>
                    <h3 className="y-h3 text-[2rem] text-slate-950">{product.name}</h3>
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
                  <div className="mt-auto flex flex-wrap items-end justify-between gap-5 border-t border-slate-200/80 pt-5">
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13px] text-slate-600">{price.label}</span>
                      <span className="text-xl font-semibold tracking-[-0.01em] text-slate-950">
                        {price.value}
                        {price.suffix ? <span className="ml-1 text-sm font-medium text-slate-600">{price.suffix}</span> : null}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
                      <Link href={product.secondary.href} className="y-link text-[15px]">
                        {product.secondary.label}
                      </Link>
                      <Link href={product.href} className="y-btn y-btn-ink y-btn-sm">
                        Ver {product.name}
                        <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </SpotlightGroup>
      </PageSection>

      {/* ---------------- AGENTES IA + OCR MASTER ---------------- */}
      <PageSection id="agentes" tone="light">
        <SectionHeader
          eyebrow="Agentes IA y API"
          title="Productos para adaptar a tu operación."
          description="Cuando el problema se repite en varias áreas, acortan el tiempo entre la idea y la puesta en marcha."
        />

        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <ImageLinkCard
              key={product.slug}
              href={`/productos/${product.slug}`}
              image={`/images/product_${product.slug}.png`}
              tag={agentTag(product.slug)}
              title={product.name}
              description={product.tagline}
              meta={product.badge && product.badge !== "—" ? product.badge : undefined}
              cta="Ver más info"
              className={`plausible-event-name=Product+More+Info plausible-event-product=${product.slug} plausible-event-location=productos_section`}
            />
          ))}

          {/* OCR Master API: ocupa dos columnas para cerrar la grilla */}
          <article className="y-dark y-reveal relative flex flex-col overflow-hidden rounded-[1.5rem] bg-[#0b1220] shadow-[0_40px_80px_-40px_rgba(11,18,32,0.7)] sm:col-span-2">
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
              <div className="absolute right-[-20%] top-[-13rem] h-[26rem] w-[26rem] rounded-full bg-sky-400/[0.14] blur-[100px]" />
              <div className="y-grid-bg" />
            </div>
            <div className="relative grid flex-1 grid-cols-1 gap-8 p-7 sm:p-9 md:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] md:items-center">
              <div className="flex flex-col items-start gap-4">
                <IconTile icon={Braces} dark />
                <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-300">Integración documental</span>
                <h3 className="y-h3 text-[1.6rem] text-white">OCR Master API</h3>
                <p className="text-[15.5px] leading-relaxed text-slate-300">
                  API de extracción estructurada para integrar OCR en aplicaciones y flujos empresariales existentes.
                </p>
                <Link href="/ocr-master" className="y-btn y-btn-primary y-btn-sm mt-2">
                  Ver OCR Master
                  <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <dl className="flex flex-col rounded-2xl bg-white/[0.03] p-2 font-mono text-[13px] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                {OCR_MASTER.apiDetails.map((detail, index) => (
                  <div
                    key={detail.label}
                    className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 px-4 py-3 ${index ? "border-t border-white/[0.08]" : ""}`}
                  >
                    <dt className="text-slate-400">{detail.label}</dt>
                    <dd className="min-w-0 break-words text-right text-sky-200">{detail.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        </SpotlightGroup>
      </PageSection>

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        eyebrow="A medida"
        title="¿Tu caso no calza? Lo construimos contigo."
        text="Revisamos tu proceso y te decimos si conviene partir con un producto listo, con OCR o con una automatización a medida."
        secondary={{ label: "Ver servicios a medida", href: "/servicios" }}
      />
    </PageShell>
  );
}

import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/config/productos";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { Breadcrumbs } from "@/components/seo/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { createPageMetadata } from "@/lib/seo";

const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contacto@yago.cl";
const WHATSAPP_PHONE = process.env.NEXT_PUBLIC_WHATSAPP_PHONE || "";

type PageProps = { params: Promise<{ slug: string }> };

function getProductBySlug(slug: string) {
  return PRODUCTS.find((x) => x.slug === slug);
}

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return {};

  return createPageMetadata({
    title: p.seoTitle || `${p.name} — Yago`,
    description: p.seoDescription || p.pageSubtitle || p.tagline,
    path: `/productos/${p.slug}`,
    image: `/images/product_${p.slug}.png`,
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) notFound();

  const baseMsg = `Hola YAGO, me interesa ${p.name}. ¿Podemos revisar una demo?`;
  const waHref = WHATSAPP_PHONE
    ? `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(baseMsg)}`
    : undefined;
  const mailHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`Interés en ${p.name}`)}&body=${encodeURIComponent(baseMsg)}`;

  const heading = p.pageTitle || p.name;
  const subtitle = p.pageSubtitle || p.details.description;
  const primaryLabel = p.ctaPrimary || "Solicitar demo";
  const secondaryLabel = p.ctaSecondary || "Ver módulos";
  const supportPoints = p.supportPoints?.length ? p.supportPoints : p.highlights;
  const results = p.results?.length
    ? p.results
    : p.highlights.map((item) => ({
      title: item,
      description: "Impacto directo en eficiencia operativa, consistencia y velocidad de ejecución.",
    }));
  const idealFor = p.idealFor?.length ? p.idealFor : p.details.notes || [];
  const faqs = p.faq || [];
  const quickLinks = [
    { id: "impacto", label: "Impacto" },
    { id: "modulos", label: "Módulos" },
    p.details.integrations?.length ? { id: "integraciones", label: "Integraciones" } : null,
    p.details.stages?.length ? { id: "implementacion", label: "Implementación" } : null,
    idealFor.length ? { id: "ideal", label: "Ideal para" } : null,
    faqs.length ? { id: "faq", label: "FAQ" } : null,
  ].filter(Boolean) as { id: string; label: string }[];
  const relatedProducts = PRODUCTS.filter((x) => x.slug !== p.slug).slice(0, 3);
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "@id": `https://yago.cl/productos/${p.slug}#software`,
    name: p.name,
    description: p.seoDescription || subtitle,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    url: `https://yago.cl/productos/${p.slug}`,
    image: `https://yago.cl/images/product_${p.slug}.png`,
    provider: { "@id": "https://yago.cl/#organization" },
  };
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <JsonLd id={`jsonld-product-${p.slug}`} data={productJsonLd} />
      {faqs.length ? <JsonLd id={`jsonld-product-faq-${p.slug}`} data={faqJsonLd} /> : null}
      <Navbar />

      <main id="main-content" className="main-premium py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-4">
          <Breadcrumbs items={[{ name: "Inicio", href: "/" }, { name: "Productos", href: "/productos" }, { name: p.name, href: `/productos/${p.slug}` }]} />
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs tracking-[0.22em] text-muted-foreground">PRODUCTO</p>
              <h1 className="mt-3 bg-gradient-to-r from-sky-600 via-indigo-500 to-sky-500 bg-clip-text text-4xl font-semibold text-transparent md:text-5xl">
                {heading}
              </h1>
            </div>

            <div className="flex items-center gap-4 text-sm">
              <span className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-slate-600">
                {p.badge || "Producto"}
              </span>
              <Link
                href="/#productos"
                className="text-muted-foreground underline underline-offset-4 transition hover:text-foreground"
                aria-label="Volver a productos"
              >
                ← Volver
              </Link>
            </div>
          </div>

          {/* Hero Banner Imagen Premium */}
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-900/5 shadow-2xl">
            <Image
              src={`/images/product_${p.slug}.png`}
              alt={`Banner de ${p.name}`}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover"
            />
            {/* Gradient Overlay sutil */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-white/60 to-transparent" />
            <div className="absolute inset-0 rounded-3xl ring-1 ring-inset ring-slate-900/10" />
          </div>

          <section className="space-y-5 rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur">
            <p className="text-base text-slate-600 md:text-lg">{subtitle}</p>

            <div className="flex flex-col gap-2 text-sm text-muted-foreground md:flex-row md:flex-wrap md:items-center md:gap-6">
              <div>
                <span className="font-medium text-slate-600">Tiempo de puesta en marcha:</span> {p.details.timeToValue}
              </div>
              <div>
                <span className="font-medium text-slate-600">Módulos:</span> {p.details.modules.length}
              </div>
              {p.details.integrations?.length ? (
                <div>
                  <span className="font-medium text-slate-600">Integraciones:</span> {p.details.integrations.length}
                </div>
              ) : null}
            </div>

            <div className="flex flex-wrap gap-2">
              {quickLinks.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1.5 text-xs text-slate-600 transition hover:bg-slate-900/5"
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 mt-4">
              <a
                href={mailHref}
                className={`btn-vibrant group relative inline-flex items-center overflow-hidden rounded-xl px-5 py-2.5 font-medium plausible-event-name=Product+CTA+Primary plausible-event-product=${p.slug} plausible-event-location=product_page`}
              >
                <span className="relative z-10">{primaryLabel}</span>
                <div className="absolute inset-0 h-full w-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full" />
              </a>
              <a
                href="#modulos"
                className={`group relative inline-flex items-center overflow-hidden rounded-xl border border-slate-900/10 bg-slate-900/5 px-5 py-2.5 font-medium text-slate-900 transition hover:bg-white/80 plausible-event-name=Product+CTA+Secondary plausible-event-product=${p.slug} plausible-event-location=product_page`}
              >
                <span className="relative z-10">{secondaryLabel}</span>
              </a>
            </div>

            {supportPoints.length > 0 && (
              <ul className="flex flex-wrap gap-2 text-xs text-slate-600">
                {supportPoints.map((point) => (
                  <li key={point} className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1.5">
                    {point}
                  </li>
                ))}
              </ul>
            )}
          </section>

          {/* Sección Bento Box Combinada: Impacto y Módulos */}
          <section className="mt-12">
            <div className="mb-6 flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-slate-900 md:text-3xl">Por qué y cómo funciona</h2>
              <p className="text-sm text-muted-foreground">El impacto directo en tu operación y los módulos técnicos que lo hacen posible.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-12 lg:grid-rows-2">

              {/* Bento: Impacto Principal (Ocupa más espacio) */}
              <div id="impacto" className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur transition hover:border-slate-900/10 hover:bg-slate-50 lg:col-span-8 lg:row-span-2">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-500/20 blur-[80px] pointer-events-none" />
                <h3 className="mb-6 text-xl font-medium text-slate-900 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-emerald-600"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" /></svg>
                  Impacto Operativo
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {results.map((result) => (
                    <div key={result.title} className="flex flex-col gap-2">
                      <div className="h-0.5 w-8 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-full" />
                      <div className="font-medium text-slate-800">{result.title}</div>
                      <p className="text-sm leading-relaxed text-muted-foreground">{result.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bento: Módulos (Sidebar) */}
              <div id="modulos" className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-slate-900/5 p-6 backdrop-blur transition hover:border-slate-900/10 lg:col-span-4 lg:row-span-2">
                <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[60px] pointer-events-none" />
                <h3 className="mb-6 text-xl font-medium text-slate-900 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-cyan-600"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /><polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" /></svg>
                  Módulos Clave
                </h3>

                <ul className="flex flex-col gap-4 relative z-10">
                  {p.details.modules.map((module, index) => (
                    <li key={module} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/80 text-[10px] font-medium text-slate-900 ring-1 ring-slate-900/10">
                        {index + 1}
                      </span>
                      <span className="leading-snug pt-0.5">{module}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </section>

          {p.details.integrations?.length ? (
            <section id="integraciones" className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur">
              <h2 className="mb-4 text-xl font-semibold text-slate-900 md:text-2xl">Integraciones frecuentes</h2>
              <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {p.details.integrations.map((integration) => (
                  <li key={integration} className="rounded-full border border-slate-900/10 bg-slate-900/5 px-4 py-2">
                    {integration}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {p.details.stages?.length ? (
            <section id="implementacion" className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur">
              <h2 className="mb-4 text-xl font-semibold text-slate-900 md:text-2xl">Cómo se implementa</h2>
              <ol className="space-y-4">
                {p.details.stages.map((stage, index) => (
                  <li key={stage.name} className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-5">
                    <div className="font-medium text-slate-900">Paso {index + 1} - {stage.name}</div>
                    <p className="mt-1 text-sm text-muted-foreground">{stage.description}</p>
                    {stage.outputs?.length ? (
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {stage.outputs.map((output) => (
                          <li
                            key={output}
                            className="rounded-full border border-slate-900/10 bg-slate-900/5 px-3 py-1 text-xs text-slate-600"
                          >
                            {output}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          {idealFor.length ? (
            <section id="ideal" className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur">
              <h2 className="mb-4 text-xl font-semibold text-slate-900 md:text-2xl">Ideal para</h2>
              <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {idealFor.map((item) => (
                  <li key={item} className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4 text-sm text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {faqs.length ? (
            <section id="faq" className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur">
              <h2 className="mb-4 text-xl font-semibold text-slate-900 md:text-2xl">Preguntas frecuentes</h2>
              <div className="space-y-3">
                {faqs.map((item) => (
                  <article key={item.question} className="rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4">
                    <h3 className="text-sm font-medium text-slate-900">{item.question}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.answer}</p>
                  </article>
                ))}
              </div>
            </section>
          ) : null}

          {relatedProducts.length ? (
            <section className="rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur">
              <h2 className="mb-4 text-xl font-semibold text-slate-900 md:text-2xl">Otros productos de Yago</h2>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                {relatedProducts.map((related) => (
                  <Link
                    key={related.slug}
                    href={`/productos/${related.slug}`}
                    className="group hover-lift rounded-2xl border border-slate-900/10 bg-slate-900/5 p-4 transition hover:border-slate-900/10"
                  >
                    <div className="text-sm font-medium text-slate-900">{related.name}</div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{related.tagline}</p>
                    <div className="mt-3 text-xs text-slate-600">Ver detalle →</div>
                  </Link>
                ))}
              </div>
            </section>
          ) : null}

          <section className="flex flex-col gap-4 rounded-3xl border border-slate-900/10 bg-white/80 p-6 backdrop-blur md:flex-row md:items-start md:justify-between">
            <div className="max-w-3xl text-muted-foreground">
              <div className="font-semibold text-slate-900">{p.closeCta?.title || `¿Listo para implementar ${p.name}?`}</div>
              <p className="mt-2">
                {p.closeCta?.text || "Te ayudamos a evaluar alcance, tiempos y el mejor plan de adopción para tu equipo."}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={mailHref}
                className={`btn-vibrant inline-flex items-center rounded-xl px-4 py-2 plausible-event-name=Product+Contact plausible-event-method=email plausible-event-product=${p.slug} plausible-event-location=product_page`}
              >
                {p.closeCta?.primary || "Contactar por email"}
              </a>
              {waHref ? (
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center rounded-xl bg-emerald-500/90 px-4 py-2 text-slate-900 transition hover:bg-emerald-500 plausible-event-name=Product+Contact plausible-event-method=whatsapp plausible-event-product=${p.slug} plausible-event-location=product_page`}
                >
                  {p.closeCta?.secondary || "WhatsApp"}
                </a>
              ) : (
                <span
                  className="inline-flex cursor-not-allowed items-center rounded-xl border border-slate-900/10 bg-slate-100 px-4 py-2 text-slate-400"
                  title="Configura NEXT_PUBLIC_WHATSAPP_PHONE"
                >
                  {p.closeCta?.secondary || "WhatsApp"}
                </span>
              )}
            </div>
          </section>
        </div>
      </main>

      <BrandStamp />
      <Footer />
    </div>
  );
}

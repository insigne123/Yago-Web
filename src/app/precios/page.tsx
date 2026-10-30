import Link from "next/link";
import { ArrowRight, FileSearch, Workflow } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { PlanCards } from "@/components/automation/PlanCards";
import { getAutomationPage } from "@/config/automation-pages";
import { PRIMARY_CTA } from "@/config/site";
import { getDailyUfRate } from "@/lib/uf";
import { createPageMetadata } from "@/lib/seo";

export const revalidate = 86400;

export const metadata = createPageMetadata({
  title: "Precios | SADT, AXIS, OCR y automatización a medida | YAGO",
  description:
    "Planes mensuales en UF para SADT (Portal DT) y AXIS (consultas PJUD), con equivalente en pesos del día. OCR y proyectos a medida se cotizan según volumen y alcance.",
  path: "/precios",
});

const sadt = getAutomationPage("sadt")!;
const axis = getAutomationPage("axis")!;

export default async function PreciosPage() {
  const ufRate = await getDailyUfRate();
  const bookingExternal = PRIMARY_CTA.href.startsWith("http");

  const products = [
    { page: sadt, tone: "y-mist", description: "Cada interacción con el Portal DT consume 1 crédito: un contrato, una desvinculación o un certificado." },
    { page: axis, tone: "y-light", description: "Cada crédito equivale a una persona revisada, con monitoreo diario incluido y sin cobro inicial." },
  ];

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b13] text-white">
      <Navbar />
      <main id="main-content">
        <section className="y-dark y-grain relative overflow-hidden pb-24 pt-16 md:pb-28 md:pt-24">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-[-30%] h-[36rem] w-[56rem] -translate-x-1/2 rounded-full bg-sky-400/[0.12] blur-[120px]" />
            <div className="y-grid-bg" />
          </div>
          <div className="y-container relative flex max-w-4xl flex-col items-center gap-6 text-center">
            <span className="y-eyebrow">Precios</span>
            <h1 className="y-display text-[clamp(2.6rem,6vw,4.6rem)] text-white">
              Precios claros, <span className="y-gradient-text">publicados en UF.</span>
            </h1>
            <p className="y-lead max-w-2xl">
              SADT y AXIS funcionan con planes mensuales por créditos, con su equivalente en pesos del día. OCR y los proyectos a
              medida se cotizan según volumen y alcance.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: "SADT · Portal DT", href: "#sadt" },
                { label: "AXIS · PJUD", href: "#axis" },
                { label: "OCR y a medida", href: "#a-medida" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="y-btn y-btn-glass y-btn-sm">
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {products.map(({ page, tone, description }) => (
          <section key={page.slug} id={page.slug} className={`${tone} y-sheet`}>
            <div className="y-container">
              <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                <div className="flex max-w-3xl flex-col gap-4">
                  <span className="y-eyebrow">{page.slug === "sadt" ? "Portal Dirección del Trabajo" : "Consultas PJUD"}</span>
                  <h2 className="y-h2 text-slate-950">{page.hero.badge}</h2>
                  <p className="y-lead">{description}</p>
                </div>
                <Link href={`/${page.slug}`} className="y-link shrink-0">
                  Ver cómo funciona {page.hero.badge}
                  <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="mt-12">
                <PlanCards page={page} ufRate={ufRate} ctaHref={`/${page.slug}#formulario`} ctaLabel="Solicitar demo" />
              </div>
            </div>
          </section>
        ))}

        <section id="a-medida" className="y-mist y-sheet">
          <div className="y-container">
            <div className="flex max-w-3xl flex-col gap-4">
              <span className="y-eyebrow">Cotización</span>
              <h2 className="y-h2 text-slate-950">OCR y proyectos a medida</h2>
              <p className="y-lead">Se cotizan según el volumen, los documentos y los sistemas que haya que integrar.</p>
            </div>
            <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
              <div className="y-card flex flex-col gap-4 p-8">
                <span className="grid grid-cols-1 h-11 w-11 place-items-center rounded-2xl bg-gradient-to-b from-sky-50 to-sky-100 text-sky-700 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.18)]">
                  <FileSearch className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="y-h3 text-[1.5rem] text-slate-950">OCR para empresas</h3>
                <p className="text-[15.5px] leading-relaxed text-slate-600">
                  Partimos con una evaluación sobre una muestra real de tus documentos: qué campos se extraen, con qué calidad y
                  cómo se integran a tu flujo.
                </p>
                <Link href="/ocr#formulario" className="y-btn y-btn-ink mt-auto w-fit">
                  Pedir evaluación
                  <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
              <div className="y-card flex flex-col gap-4 p-8">
                <span className="grid grid-cols-1 h-11 w-11 place-items-center rounded-2xl bg-gradient-to-b from-sky-50 to-sky-100 text-sky-700 shadow-[inset_0_0_0_1px_rgba(14,165,233,0.18)]">
                  <Workflow className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
                </span>
                <h3 className="y-h3 text-[1.5rem] text-slate-950">Automatización a medida</h3>
                <p className="text-[15.5px] leading-relaxed text-slate-600">
                  Estimamos horas ahorradas, reducción de errores y retorno antes de construir. Un MVP simple toma 1 a 2 semanas.
                </p>
                <a
                  href={PRIMARY_CTA.href}
                  target={bookingExternal ? "_blank" : undefined}
                  rel={bookingExternal ? "noreferrer" : undefined}
                  className="y-btn y-btn-ink mt-auto w-fit plausible-event-name=CTA+Agendar+Sesion plausible-event-location=precios"
                >
                  {PRIMARY_CTA.label}
                  <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

import Link from "next/link";
import { ArrowRight, Quote } from "lucide-react";
import { FEATURED_CASE } from "@/config/home";
import { getPublishedCaseStudies } from "@/config/evidence";
import { CaseStudyCard } from "@/components/cases/CaseStudyCard";
import { IconTile } from "@/components/site/PageKit";
import { CASE_METHOD } from "@/config/casos";

export function FeaturedCase() {
  const published = getPublishedCaseStudies().slice(0, 2);
  if (published.length || FEATURED_CASE.placeholder) {
    return (
      <section id="casos" className="y-mist y-sheet">
        <div className="y-container">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl space-y-5">
              <span className="y-eyebrow">{published.length ? "Casos documentados" : "Medición y evidencia"}</span>
              <h2 className="y-h2 text-slate-950">{published.length ? "Qué implementamos y cómo se comprobó el resultado." : "Definimos qué medir antes de implementar."}</h2>
              {!published.length ? <p className="y-lead">Tiempo de intervención humana, volumen, errores y esperas: acordamos una línea base y documentamos la comparación para evaluar lo que cambia en tu operación.</p> : null}
            </div>
            <Link href="/casos" className="y-link shrink-0">{published.length ? "Ver todos los casos" : "Ver cómo documentamos resultados"}<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
          </div>
          {published.length ? (
            <div className="mt-10 grid gap-5 md:grid-cols-2">{published.map((item) => <CaseStudyCard key={item.slug} item={item} />)}</div>
          ) : (
            // Sin casos publicados todavía: se muestra el método de medición, sin cifras de ejemplo.
            <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {CASE_METHOD.map((step, index) => (
                <li key={step.title} className="y-card y-reveal flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <IconTile icon={step.icon} />
                    <span className="font-mono text-[12.5px] text-slate-500">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="y-h3 text-[1.15rem] text-slate-950">{step.title}</h3>
                  <p className="text-[15px] leading-relaxed text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          )}
        </div>
      </section>
    );
  }
  const ph = FEATURED_CASE.placeholder ? "text-sky-300" : "";

  return (
    <section id="casos" className="y-mist y-sheet">
      <div className="y-container">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="flex max-w-3xl flex-col gap-5">
            <span className="y-eyebrow">Casos</span>
            <h2 className="y-h2 text-slate-950">Resultados medidos antes y después de automatizar.</h2>
          </div>
          <Link href="/casos" className="y-link shrink-0">
            Ver todos los casos
            <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="y-reveal relative mt-14 overflow-hidden rounded-[2rem] bg-[#0b1220] text-white shadow-[0_40px_80px_-40px_rgba(11,18,32,0.7)]">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-sky-400/[0.14] blur-[90px]" />
            <div className="y-grid-bg opacity-60" />
          </div>
          <div className="relative grid grid-cols-1 gap-12 p-7 sm:p-10 lg:grid-cols-12 lg:p-14">
            <figure className="flex flex-col gap-8 lg:col-span-7 lg:pr-6">
              <span className="w-fit rounded-full bg-white/[0.06] px-3 py-1.5 text-[13px] text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.1)]">
                Caso destacado · <span className={ph}>{FEATURED_CASE.client}</span>
              </span>
              <Quote className="h-8 w-8 text-sky-300/70" aria-hidden="true" />
              <blockquote className={`-mt-4 font-headline text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-[1.3] tracking-[-0.015em] ${ph}`}>
                {FEATURED_CASE.quote}
              </blockquote>
              <figcaption className="flex items-center gap-4">
                <span
                  aria-hidden="true"
                  className="h-12 w-12 rounded-full bg-white/[0.06] shadow-[inset_0_0_0_1px_rgba(125,211,252,0.4)]"
                />
                <span className="flex flex-col">
                  <span className="font-semibold">{FEATURED_CASE.person}</span>
                  <span className="text-sm text-slate-400">{FEATURED_CASE.role}</span>
                </span>
              </figcaption>
            </figure>
            <dl className="flex flex-col lg:col-span-5">
              {FEATURED_CASE.metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`flex flex-col gap-1 py-6 ${index ? "border-t border-white/10" : "pt-0"} ${
                    index === FEATURED_CASE.metrics.length - 1 ? "pb-0" : ""
                  }`}
                >
                  <dt className="order-2 text-[15px] text-slate-400">{metric.label}</dt>
                  <dd className="order-1 font-headline text-[clamp(2rem,3.4vw,2.9rem)] font-semibold tracking-[-0.035em] text-sky-300">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

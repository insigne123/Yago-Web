import { ArrowRight } from "lucide-react";
import { CaseSpotlight } from "@/components/cases/CaseSpotlight";
import { ActionLink, BOOKING_ACTION, CtaBand, IconTile, PageHero, PageSection, PageShell, SectionHeader, TextLink } from "@/components/site/PageKit";
import { CASE_METHOD, CASE_SCENARIOS } from "@/config/casos";
import { FEATURED_CASE } from "@/config/home";
import { createPageMetadata } from "@/lib/seo";
import { getPublishedCaseStudies } from "@/config/evidence";
import { CaseStudyCard } from "@/components/cases/CaseStudyCard";
import { Testimonials } from "@/components/cases/Testimonials";

export const metadata = createPageMetadata({
  title: "Casos y metodología de automatización empresarial | YAGO",
  description:
    "Conoce cómo YAGO documenta procesos, define una línea base y valida resultados antes y después de implementar automatización e IA.",
  path: "/casos",
});

/* Nota: en esta página no se usa `y-reveal`, para que el control de contraste (axe) vea todo el texto con opacidad completa. */

export default function CasesPage() {
  const published = getPublishedCaseStudies();
  return (
    <PageShell>
      {/* ---------------- HERO ---------------- */}
      <PageHero
        eyebrow="Casos y evidencia"
        title="Un caso útil muestra qué cambió"
        highlight="y cómo se midió."
        description="YAGO no publica cifras sin contexto. Esta es la metodología que usamos para convertir una mejora operativa en evidencia comparable y preparar casos públicos cuando existe autorización del cliente."
        actions={
          <>
            <ActionLink action={BOOKING_ACTION} arrow />
            <ActionLink action={{ label: "Ver la metodología", href: "#metodologia" }} variant="glass" />
          </>
        }
      >
        <ol
          aria-label="Etapas de la medición"
          className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-2 border-t border-white/[0.08] pt-6 font-mono text-[12.5px] uppercase tracking-[0.1em] text-slate-400"
        >
          {CASE_METHOD.map((step, index) => (
            <li key={step.title} className="inline-flex items-center gap-3">
              <span>
                <span className="text-sky-300">{String(index + 1).padStart(2, "0")}</span> {step.title}
              </span>
              {index < CASE_METHOD.length - 1 ? <ArrowRight className="h-3.5 w-3.5 text-slate-400" aria-hidden="true" /> : null}
            </li>
          ))}
        </ol>
      </PageHero>

      {published.length ? (
        <PageSection id="casos-publicados" tone="light">
          <SectionHeader eyebrow="Implementaciones" title="Casos con resultado y método de medición." />
          <div className="mt-10 grid gap-5 md:grid-cols-2">{published.map((item) => <CaseStudyCard key={item.slug} item={item} />)}</div>
        </PageSection>
      ) : null}

      {/* ---------------- METODOLOGÍA ---------------- */}
      <PageSection id="metodologia" tone="light">
        <SectionHeader
          eyebrow="Metodología"
          title="Metodología de medición."
          description="Antes de automatizar definimos qué se va a medir; al terminar, comparamos contra ese punto de partida."
        />
        <ol className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {CASE_METHOD.map((step, index) => (
            <li key={step.title} className="y-card flex flex-col gap-4 p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-[12px] uppercase tracking-[0.12em] text-sky-700">
                  Paso {String(index + 1).padStart(2, "0")}
                </span>
                <IconTile icon={step.icon} />
              </div>
              <h3 className="y-h3 mt-2 text-[1.3rem] text-slate-950">{step.title}</h3>
              <p className="text-[15px] leading-relaxed text-slate-600">{step.description}</p>
            </li>
          ))}
        </ol>
      </PageSection>

      {/* ---------------- ESCENARIOS ---------------- */}
      <PageSection id="escenarios" tone="mist">
        <SectionHeader
          eyebrow="Escenarios de referencia"
          title="Procesos donde evaluamos automatización con frecuencia."
          description="Estos bloques describen patrones operativos, no testimonios ni resultados atribuidos a un cliente específico."
        />
        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {CASE_SCENARIOS.map((item) => (
            <article key={item.title} className="y-card flex flex-col gap-4 p-7 sm:p-8">
              <span className="font-mono text-[11.5px] uppercase tracking-[0.12em] text-sky-700">{item.area}</span>
              <h3 className="y-h3 text-[1.35rem] text-slate-950">{item.title}</h3>
              <p className="text-[15.5px] leading-relaxed text-slate-600">{item.description}</p>
              <ul className="mt-1 flex flex-col gap-3 border-t border-slate-200/80 pt-5">
                {item.stats.map((stat) => {
                  const Icon = stat.icon;
                  return (
                    <li key={stat.text} className="flex gap-3 text-[15px] leading-snug text-slate-700">
                      <Icon className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={1.9} aria-hidden="true" />
                      {stat.text}
                    </li>
                  );
                })}
              </ul>
              <div className="mt-auto pt-3">
                <TextLink href={item.related.href}>{item.related.label}</TextLink>
              </div>
            </article>
          ))}
        </div>
      </PageSection>

      {/* ---------------- FORMATO DE CASO PUBLICADO ---------------- */}
      {!FEATURED_CASE.placeholder && !published.length ? (
        <PageSection id="caso-destacado" tone="light">
          <SectionHeader eyebrow="Caso destacado" title="Resultados medidos antes y después de automatizar." />
          <div className="mt-14"><CaseSpotlight /></div>
        </PageSection>
      ) : null}
      <Testimonials />

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        eyebrow="Próximo paso"
        title="Construyamos la línea base de tu proceso."
        text="Revisamos el flujo actual y definimos qué medir antes de recomendar una implementación."
      />
    </PageShell>
  );
}

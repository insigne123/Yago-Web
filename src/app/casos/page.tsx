import Link from "next/link";
import { ArrowRight, ChartNoAxesColumnIncreasing, CheckCircle2, ClipboardCheck, Search } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { BrandStamp } from "@/components/BrandStamp";
import { caseStudies, PRIMARY_CTA } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Casos y metodología de automatización empresarial | YAGO",
  description:
    "Conoce cómo YAGO documenta procesos, define una línea base y valida resultados antes y después de implementar automatización e IA.",
  path: "/casos",
});

const method = [
  {
    title: "Línea base",
    description: "Medimos volumen, tiempo manual, errores, esperas y responsables antes de automatizar.",
    icon: Search,
  },
  {
    title: "Alcance verificable",
    description: "Acordamos qué hará el flujo, qué seguirá revisando una persona y cómo se manejarán las excepciones.",
    icon: ClipboardCheck,
  },
  {
    title: "Validación operativa",
    description: "Probamos con datos y usuarios del proceso antes de considerar terminada la implementación.",
    icon: CheckCircle2,
  },
  {
    title: "Resultado comparable",
    description: "Comparamos la operación contra la línea base y documentamos el método de cálculo.",
    icon: ChartNoAxesColumnIncreasing,
  },
];

export default function CasesPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />
      <main id="main-content" className="main-premium pb-24 pt-20 md:pt-24">
        <div className="mx-auto max-w-7xl px-4">
          <section className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-sky-700">Casos y evidencia</p>
            <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-slate-950 md:text-6xl">
              Un caso útil muestra qué cambió y cómo se midió.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              YAGO no publica cifras sin contexto. Esta es la metodología que usamos para convertir una mejora operativa
              en evidencia comparable y preparar casos públicos cuando existe autorización del cliente.
            </p>
          </section>

          <section aria-labelledby="metodologia-casos" className="mt-12">
            <h2 id="metodologia-casos" className="text-3xl font-semibold text-slate-950 md:text-4xl">
              Metodología de medición
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {method.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article key={step.title} className="rounded-[1.6rem] border border-slate-900/10 bg-white/75 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-700">Paso {index + 1}</span>
                      <Icon className="size-5 text-slate-700" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 text-xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-700">{step.description}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section aria-labelledby="escenarios" className="mt-16">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.18em] text-sky-700">Escenarios de referencia</p>
              <h2 id="escenarios" className="mt-3 text-3xl font-semibold text-slate-950 md:text-4xl">
                Procesos donde evaluamos automatización con frecuencia
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-700 md:text-base">
                Estos bloques describen patrones operativos, no testimonios ni resultados atribuidos a un cliente específico.
              </p>
            </div>

            <div className="mt-7 grid gap-5 lg:grid-cols-3">
              {caseStudies.map((item) => (
                <article key={item.title} className="rounded-[1.75rem] border border-slate-900/10 bg-white/75 p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-sky-700">{item.company}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{item.description}</p>
                  <ul className="mt-5 space-y-3">
                    {item.stats.map((stat) => {
                      const Icon = stat.icon;
                      return (
                        <li key={stat.text} className="flex items-start gap-3 text-sm leading-relaxed text-slate-700">
                          <Icon className="mt-0.5 size-4 shrink-0 text-sky-700" aria-hidden="true" />
                          <span>{stat.text}</span>
                        </li>
                      );
                    })}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 rounded-[2rem] bg-slate-950 px-6 py-9 text-white md:px-10 md:py-11">
            <p className="text-xs uppercase tracking-[0.18em] text-sky-200">Próximo paso</p>
            <div className="mt-3 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div className="max-w-3xl">
                <h2 className="text-3xl font-semibold md:text-4xl">Construyamos la línea base de tu proceso.</h2>
                <p className="mt-4 text-sm leading-relaxed text-slate-300 md:text-base">
                  Revisamos el flujo actual y definimos qué medir antes de recomendar una implementación.
                </p>
              </div>
              <Link href="/#contacto" className="inline-flex shrink-0 items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950">
                Solicitar diagnóstico
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </section>
        </div>
      </main>
      <BrandStamp />
      <Footer />
    </div>
  );
}

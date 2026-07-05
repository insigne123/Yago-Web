import Image from "next/image";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const proofSignals = ["Análisis inicial en 48h", "Piloto operativo en 2-4 semanas"];

const trustSignals = ["Sin romper tu stack actual", "Impacto medible desde el primer quick win"];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-20 md:pb-24 md:pt-24 lg:pt-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-[8%] h-[20rem] w-[20rem] rounded-full bg-cyan-400/15 blur-[96px]" />
        <div className="absolute right-[-7rem] top-[12%] h-[18rem] w-[18rem] rounded-full bg-violet-500/15 blur-[100px]" />
      </div>

      <div aria-hidden="true" className="pointer-events-none absolute inset-0 hero-grid-overlay" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-400/[0.06] px-3 py-1.5 text-[11px] uppercase tracking-[0.16em] text-cyan-100">
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
            YAGO · Automatización con IA
          </div>

          <h1 className="mt-6 max-w-4xl text-balance font-headline text-5xl font-semibold leading-[0.94] text-white md:text-6xl lg:text-[4.6rem]">
            Menos trabajo manual.
            <br />
            <span className="text-shimmer">Más control operativo.</span>
          </h1>

          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-slate-300">
            Automatizamos procesos con IA para equipos que dependen de correos, planillas y tareas
            manuales. Quick wins medibles, operación trazable.
          </p>

          <div className="mt-6 flex flex-wrap gap-2 text-sm text-slate-200">
            {proofSignals.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="btn-vibrant group rounded-full px-6 plausible-event-name=CTA+Analisis plausible-event-location=hero"
            >
              <a href="#contacto">
                Pedir análisis
                <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="ghost"
              className="rounded-full border border-white/12 bg-white/[0.03] px-6 text-slate-100 hover:bg-white/[0.06] plausible-event-name=CTA+Ver+Casos plausible-event-location=hero"
            >
              <a href="#casos">Ver casos de uso</a>
            </Button>
          </div>

          <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
            {trustSignals.map((signal) => (
              <div
                key={signal}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-2"
              >
                <BadgeCheck className="h-4 w-4 text-cyan-200" aria-hidden="true" />
                <span>{signal}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative lg:justify-self-end">
          <div
            className="absolute inset-x-10 top-4 h-32 rounded-full bg-cyan-400/15 blur-[80px]"
            aria-hidden="true"
          />

          <div className="card-glow-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,39,0.9),rgba(12,18,30,0.98))] shadow-[0_30px_100px_rgba(0,0,0,0.3)]">
            <Image
              src="/images/hero-automation.png"
              alt="Ilustración de un flujo de automatización operativa: documentos y datos conectados hacia un panel ordenado"
              width={720}
              height={720}
              priority
              className="h-auto w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#04070f]/95 via-[#04070f]/50 to-transparent p-6 pt-16">
              <div className="grid grid-cols-3 gap-2 text-xs">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-400/10 px-3 py-3 text-cyan-100 backdrop-blur-sm">
                  <div className="text-[11px] uppercase tracking-[0.12em] opacity-80">Análisis</div>
                  <div className="mt-1 text-lg font-semibold">48h</div>
                </div>
                <div className="rounded-2xl border border-violet-300/20 bg-violet-400/10 px-3 py-3 text-violet-100 backdrop-blur-sm">
                  <div className="text-[11px] uppercase tracking-[0.12em] opacity-80">Piloto</div>
                  <div className="mt-1 text-lg font-semibold">2-4 sem</div>
                </div>
                <div className="rounded-2xl border border-amber-200/20 bg-amber-200/10 px-3 py-3 text-amber-50 backdrop-blur-sm">
                  <div className="text-[11px] uppercase tracking-[0.12em] opacity-80">Operación</div>
                  <div className="mt-1 text-lg font-semibold">Trazable</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/config/site";
import { Section } from "./Section";

export function Proceso() {
  return (
    <Section className="z-10" id="proceso">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <Badge
            variant="outline"
            className="border-violet-300/25 bg-violet-400/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-violet-100"
          >
            Método
          </Badge>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-5xl">
            De la idea al go-live en 4 etapas.
          </h2>
        </div>

        <div className="relative mt-12">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-9 hidden h-px bg-gradient-to-r from-transparent via-cyan-300/40 to-transparent lg:block"
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="hover-lift relative rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,24,37,0.88),rgba(10,16,25,0.96))] p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex size-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-100 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Paso {index + 1}
                      </div>
                      <div className="mt-1 text-lg font-semibold text-white">{step.title}</div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-slate-300">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/proceso"
            className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            Conocer el proceso completo
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

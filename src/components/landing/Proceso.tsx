import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { processSteps } from "@/config/site";
import { Section } from "./Section";

export function Proceso() {
  return (
    <Section className="z-10" id="proceso">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div className="relative order-last lg:order-first">
            <div
              className="absolute inset-x-8 top-6 h-32 rounded-full bg-violet-400/15 blur-[80px]"
              aria-hidden="true"
            />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/12 shadow-[0_30px_90px_rgba(0,0,0,0.3)]">
              <Image
                src="/images/proceso-hero.png"
                alt="Etapas del proceso de implementación de YAGO"
                width={680}
                height={520}
                className="h-auto w-full object-cover"
                sizes="(min-width: 1024px) 42vw, 100vw"
              />
            </div>
          </div>

          <div>
            <Badge
              variant="outline"
              className="border-violet-300/25 bg-violet-400/[0.08] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-violet-100"
            >
              Método
            </Badge>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-white md:text-5xl">
              De la idea al go-live en 4 etapas.
            </h2>

            <div className="relative mt-8 grid gap-4">
              {processSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="relative flex items-start gap-4">
                    {index < processSteps.length - 1 ? (
                      <div
                        className="absolute left-6 top-12 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-cyan-300/40 to-transparent"
                        aria-hidden="true"
                      />
                    ) : null}
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-400/[0.08] text-cyan-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="min-w-0 pt-1">
                      <div className="text-xs font-medium uppercase tracking-[0.16em] text-slate-400">
                        Paso {index + 1}
                      </div>
                      <div className="mt-0.5 text-lg font-semibold text-white">{step.title}</div>
                      <p className="mt-0.5 text-sm leading-relaxed text-slate-300">{step.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <Link
                href="/proceso"
                className="btn-vibrant inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
              >
                Conocer el proceso completo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

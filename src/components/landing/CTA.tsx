import { Button } from "@/components/ui/button";
import { COMPANY } from "@/config/site";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section className="py-16" id="analisis">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative hover-lift overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.9),rgba(10,16,25,0.98))] p-8 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(900px 400px at 10% 20%, rgba(125,211,252,.12), transparent 60%), radial-gradient(820px 380px at 90% 70%, rgba(232,181,103,.08), transparent 62%)",
            }}
          />

          <div className="relative">
            <p className="text-xs tracking-[0.22em] text-slate-400">OFERTA INICIAL</p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Te mostramos oportunidades de automatizacion y ahorro HH en 48h
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Revisamos tu proceso, detectamos quick wins y te proponemos un siguiente paso claro para
              piloto, OCR o automatizacion a medida.
            </p>

            <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left text-sm text-slate-300 sm:grid-cols-3">
              {[
                { t: "Proceso", d: "Donde hay mas friccion y trabajo manual" },
                { t: "Ahorro", d: "Estimacion inicial de horas y errores evitables" },
                { t: "Siguiente paso", d: "Piloto, OCR o automatizacion a medida" },
              ].map((x) => (
                <div key={x.t} className="hover-lift rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
                  <div className="text-white font-medium">{x.t}</div>
                  <div className="mt-1 text-xs">{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950"
                >
                  <a href="#contacto" className="plausible-event-name=CTA+Analisis plausible-event-location=cta_section">
                    Pedir analisis
                  </a>
                </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full border border-white/15 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]">
                <a
                  href={COMPANY.whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="plausible-event-name=CTA+WhatsApp plausible-event-location=cta_section"
                >
                  Hablar por WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

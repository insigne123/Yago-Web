import { Button } from "@/components/ui/button";
import { COMPANY, PRIMARY_CTA } from "@/config/site";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section className="py-16" id="analisis">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative hover-lift overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-8 text-center">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(900px 400px at 10% 20%, rgba(125,211,252,.12), transparent 60%), radial-gradient(820px 380px at 90% 70%, rgba(203,213,225,.08), transparent 62%)",
            }}
          />

          <div className="relative">
            <p className="text-xs tracking-[0.22em] text-slate-600">PRIMER PASO</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-900 md:text-3xl">
              Agenda una sesion de descubrimiento para definir el mejor primer movimiento.
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Revisamos tu proceso, ubicamos el cuello de botella principal y te proponemos un siguiente
              paso claro para piloto, OCR o automatizacion a medida.
            </p>

            <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left text-sm text-slate-600 sm:grid-cols-3">
              {[
                { t: "Cuello de botella", d: "Donde hoy se acumula mas espera, error o trabajo manual" },
                { t: "Quick wins", d: "Que conviene atacar primero para mover la operacion" },
                { t: "Siguiente paso", d: "Si conviene partir por OCR, automatizacion o app interna" },
              ].map((x) => (
                <div key={x.t} className="hover-lift rounded-[1.35rem] border border-slate-900/10 bg-white/[0.04] p-4">
                  <div className="text-slate-900 font-medium">{x.t}</div>
                  <div className="mt-1 text-xs">{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] text-slate-950 shadow-[0_14px_34px_rgba(5,11,19,0.24)]"
                >
                  <a href={PRIMARY_CTA.href} className="plausible-event-name=CTA+Agendar+Sesion plausible-event-location=cta_section">
                    {PRIMARY_CTA.label}
                  </a>
                </Button>
              <Button asChild size="lg" variant="ghost" className="rounded-full border border-slate-900/10 bg-white/[0.04] text-slate-900 hover:bg-slate-50">
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

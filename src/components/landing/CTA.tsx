import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/config/site";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative hover-lift overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.78),rgba(10,16,25,0.94))] p-8 text-center backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(900px 400px at 10% 20%, rgba(125,211,252,.12), transparent 60%), radial-gradient(820px 380px at 90% 70%, rgba(232,181,103,.08), transparent 62%)",
            }}
          />

          <div className="relative">
            <p className="text-xs tracking-[0.22em] text-slate-400">SIGUIENTE PASO</p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Convirtamos tus procesos en un sistema medible
            </h3>
            <p className="mt-2 text-sm text-slate-300">
              Te proponemos un roadmap con quick wins en 5 dias habiles.
            </p>

            <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left text-sm text-slate-300 sm:grid-cols-3">
              {[
                { t: "Diagnostico", d: "Mapa de procesos + KPIs" },
                { t: "Blueprint", d: "Arquitectura y conectores" },
                { t: "Plan", d: "MVP + operacion" },
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
                <Link href="#contacto" className="plausible-event-name=CTA+Agendar+Demo plausible-event-location=cta_section">
                  Agendar demo
                </Link>
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

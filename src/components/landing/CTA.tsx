import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/config/site";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-80"
            style={{
              background:
                "radial-gradient(900px 400px at 10% 20%, rgba(217,70,239,.18), transparent 60%), radial-gradient(820px 380px at 90% 70%, rgba(6,182,212,.14), transparent 62%)",
            }}
          />

          <div className="relative">
            <p className="text-xs tracking-[0.22em] text-foreground/70">SIGUIENTE PASO</p>
            <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Convirtamos tus procesos en un sistema medible
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Te proponemos un roadmap con quick wins en 5 dias habiles.
            </p>

            <div className="mx-auto mt-6 grid max-w-3xl gap-3 text-left text-sm text-muted-foreground sm:grid-cols-3">
              {[
                { t: "Diagnostico", d: "Mapa de procesos + KPIs" },
                { t: "Blueprint", d: "Arquitectura y conectores" },
                { t: "Plan", d: "MVP + operacion" },
              ].map((x) => (
                <div key={x.t} className="rounded-2xl border border-white/10 bg-black/20 p-4">
                  <div className="text-white font-medium">{x.t}</div>
                  <div className="mt-1 text-xs">{x.d}</div>
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white"
              >
                <Link href="#contacto" className="plausible-event-name=CTA+Agendar+Demo plausible-event-location=cta_section">
                  Agendar demo
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="border border-white/15 bg-black/10">
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

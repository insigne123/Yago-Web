import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COMPANY } from "@/config/site";
import { Section } from "./Section";

export function CTA() {
  return (
    <Section className="py-16">
      <div className="mx-auto max-w-5xl px-4">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-500/10 via-cyan-400/10 to-emerald-400/10 p-8 text-center">
          <h3 className="text-2xl font-semibold">
            ¿Listo para reducir tiempos y errores con IA?
          </h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Te proponemos un roadmap con quick wins en 10 días hábiles.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white">
              <Link href="#contacto">Agendar demo</Link>
            </Button>
            <Button asChild size="lg" variant="ghost" className="border border-white/15">
              <a href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">
                Hablar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

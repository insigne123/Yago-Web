import { Section } from "./Section";

export function Logos() {
  return (
    <Section className="pt-0">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-2xl border border-white/5 bg-background/60 p-6">
          <p className="mx-auto max-w-3xl text-center text-sm text-muted-foreground">
            Conectamos con tus herramientas
          </p>
          <div className="mt-4 grid grid-cols-2 place-items-center gap-6 md:grid-cols-6">
            {["Firebase", "Supabase", "n8n", "Make", "WhatsApp API", "GCP"].map(
              (t) => (
                <div key={t} className="opacity-70">
                  <span className="text-xs md:text-sm">{t}</span>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

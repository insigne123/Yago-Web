import { Section } from "./Section";

export function Logos() {
  const items = ["Firebase", "Supabase", "n8n", "Make", "WhatsApp API", "GCP"];

  return (
    <Section className="pt-0">
      <div className="mx-auto max-w-7xl px-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-[0.22em] text-muted-foreground">INTEGRACIONES</p>
            <h2 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
              Conectamos con tu stack
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              APIs, bases de datos y herramientas de operacion: lo dejamos conversando con trazabilidad.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
            {items.map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/25 px-4 py-2 text-xs text-foreground/85"
              >
                <span
                  className="h-1.5 w-1.5 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400"
                  aria-hidden="true"
                />
                {t}
              </div>
            ))}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/10 px-4 py-2 text-xs text-muted-foreground">
              y muchas mas...
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

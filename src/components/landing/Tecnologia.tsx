import { technologies } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Tecnologia() {
  return (
    <Section id="tecnologia">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.22em] text-muted-foreground">TECNOLOGIA</p>
          <h2 className={`mt-3 text-3xl font-semibold md:text-5xl ${gradientText}`}>
            Pila moderna, integrable, escalable
          </h2>
          <p className="mt-3 text-muted-foreground">
            Nos conectamos con tus sistemas actuales y dejamos una base mantenible: permisos, logs, alertas y datos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-white">Herramientas y ecosistemas</div>
                <div className="text-xs text-muted-foreground">Ejemplos tipicos</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/20 px-4 py-2 text-xs text-foreground/85"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-medium text-white">Lo que siempre incluimos</div>
              <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
                {[
                  "Roles y permisos desde el diseno",
                  "Metrica de eventos y conversion",
                  "Logs y auditoria para operar",
                  "Alertas y monitoreo (SLA)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400"
                      aria-hidden="true"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-muted-foreground">
                Si ya tienes herramientas (n8n/Make, Firebase/Supabase, Google/Microsoft), nos adaptamos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { technologies } from "@/config/site";
import { Section } from "./Section";

export function Tecnologia() {
  return (
    <Section id="tecnologia">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs tracking-[0.22em] text-muted-foreground">TECNOLOGIA</p>
          <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-5xl">
            Pila moderna, integrable y preparada para escalar.
          </h2>
          <p className="mt-3 text-slate-600">
            Nos conectamos con tus sistemas actuales y dejamos una base mantenible: permisos, logs, alertas y datos.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="hover-lift rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="text-sm font-medium text-slate-900">Herramientas y ecosistemas</div>
                <div className="text-xs text-slate-600">Ejemplos típicos</div>
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {technologies.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-slate-900/10 bg-white/[0.04] px-4 py-2 text-xs text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="hover-lift rounded-[1.8rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-6">
              <div className="text-sm font-medium text-slate-900">Lo que siempre incluimos</div>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                {[
                  "Roles y permisos desde el diseno",
                  "Metrica de eventos y conversion",
                  "Logs y auditoria para operar",
                  "Alertas y monitoreo (SLA)",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-200"
                      aria-hidden="true"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-[1.25rem] border border-slate-900/10 bg-slate-900/5 p-4 text-xs leading-relaxed text-slate-600">
                Si ya tienes herramientas (n8n/Make, Firebase/Supabase, Google/Microsoft), nos adaptamos.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

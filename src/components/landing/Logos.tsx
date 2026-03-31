import { Badge } from "@/components/ui/badge";
import { Section } from "./Section";

export function Logos() {
  const items = [
    "Firebase",
    "Supabase",
    "n8n",
    "Make",
    "WhatsApp API",
    "Google Cloud",
    "Microsoft 365",
    "PostgreSQL",
  ];

  return (
    <Section className="pt-0">
      <div className="mx-auto max-w-7xl px-4">
        <div className="hover-lift overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,21,33,0.9),rgba(10,16,26,0.98))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                Integraciones
              </Badge>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-[2rem]">
                Tu stack actual, conectado con una capa de automatización elegante.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                Integramos APIs, documentos, canales y bases de datos para que el sistema funcione como
                una sola operación, con trazabilidad y ownership claro.
              </p>
            </div>

            <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                Implementación gradual, sin romper tus herramientas actuales.
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                Soporte para flujos humanos, automatizados y mixtos.
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-black/20 px-4 py-5 md:px-6">
            <div className="mb-4 text-center text-xs uppercase tracking-[0.18em] text-slate-400">
              Ecosistemas con los que trabajamos seguido
            </div>
            <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
              {items.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-sm font-medium text-slate-100"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

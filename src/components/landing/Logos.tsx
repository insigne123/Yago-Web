import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { COLABORADORES } from "@/config/colaboradores";
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
    <Section className="pt-0" id="confianza">
      <div className="mx-auto max-w-7xl px-4">
        <div className="hover-lift overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(15,21,33,0.9),rgba(10,16,26,0.98))] px-6 py-8 shadow-[0_24px_80px_rgba(0,0,0,0.16)] md:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                Confianza
              </Badge>
              <h2 className="mt-4 text-2xl font-semibold text-white md:text-[2rem]">
                Equipos como PSOL y GrupoExpro ya trabajan con YAGO.
              </h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                Entramos donde hoy hay friccion operativa, ordenamos el primer quick win y construimos
                sobre la operacion que ya existe. La idea no es reemplazarlo todo: es destrabar el punto
                correcto primero.
              </p>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {COLABORADORES.slice(0, 2).map((colab) => (
                  <a
                    key={colab.name}
                    href={colab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir sitio de ${colab.name} en nueva pestana`}
                    className="rounded-[1.6rem] border border-white/10 bg-white/95 px-6 py-5 shadow-[0_14px_34px_rgba(0,0,0,0.12)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(0,0,0,0.16)]"
                  >
                    <div className="flex h-[72px] items-center justify-center">
                      <Image
                        src={colab.logo}
                        alt={`Logo de ${colab.name}`}
                        title={colab.name}
                        width={220}
                        height={110}
                        className="max-h-[48px] w-auto object-contain"
                        sizes="(min-width: 1024px) 220px, (min-width: 640px) 40vw, 100vw"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.8rem] border border-white/10 bg-black/20 p-5 md:p-6">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div className="max-w-2xl">
                  <Badge variant="outline" className="border-white/12 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-slate-300">
                    Compatibilidad
                  </Badge>
                  <h3 className="mt-4 text-2xl font-semibold text-white md:text-[2rem]">
                    No necesitas cambiar tu stack para empezar a automatizar.
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-300">
                    Integramos APIs, documentos, canales y bases de datos para que el sistema funcione como
                    una sola operacion, con trazabilidad y ownership claro.
                  </p>
                </div>

                <div className="grid gap-2 text-sm text-slate-300 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    Implementacion gradual, sin romper tus herramientas actuales.
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3">
                    Soporte para flujos humanos, automatizados y mixtos.
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-[1.6rem] border border-white/10 bg-white/[0.03] px-4 py-5 md:px-6">
                <div className="mb-4 text-center text-xs uppercase tracking-[0.18em] text-slate-400">
                  Ecosistemas con los que trabajamos seguido
                </div>
                <div className="grid grid-cols-2 gap-3 text-center sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4">
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
        </div>
      </div>
    </Section>
  );
}

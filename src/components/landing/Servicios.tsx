import Image from "next/image";
import Link from "next/link";
import { SERVICES } from "@/config/services";
import { Section } from "./Section";
import { ArrowRight } from "lucide-react";

function ServiciosComponent() {
  return (
    <Section id="servicios" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <p className="text-xs tracking-[0.22em] text-cyan-200/80">SERVICIOS</p>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-balance text-4xl font-semibold text-white md:text-5xl">
            Cuatro formas de automatizar tu operación.
          </h2>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200 transition hover:text-cyan-100"
          >
            Ver todos los servicios
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {SERVICES.map((s) => (
            <Link
              key={s.slug}
              href={`/servicios/${s.slug}`}
              className={`group hover-lift card-glow-border relative overflow-hidden rounded-[1.8rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] shadow-[0_18px_50px_rgba(0,0,0,0.12)] transition hover:border-white/14 plausible-event-name=Service+Card+Click plausible-event-service=${s.slug} plausible-event-location=servicios_section focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950`}
              aria-label={`Abrir detalle de ${s.title}`}
            >
              <div className="relative h-44 overflow-hidden md:h-52">
                <Image
                  src={s.image || "/placeholder.svg"}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1019] via-transparent to-transparent" />
              </div>

              <div className="p-6 pt-4">
                <h3 className="text-2xl font-semibold text-white">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">{s.short}</p>

                <div className="mt-5 flex items-center justify-between gap-3">
                  <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-slate-300">
                    {s.duration.split(";")[0]}
                  </span>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-cyan-200">
                    Ver detalle
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default ServiciosComponent;
export { ServiciosComponent as Servicios };

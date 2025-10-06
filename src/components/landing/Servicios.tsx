"use client";

import Link from "next/link";
import { SectionReveal } from "@/components/ui/animated";
import { SERVICES } from "@/config/services";

export default function Servicios() {
  return (
    <section id="servicios" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Servicios
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERVICES.map((s) => (
              <Link
                key={s.slug}
                href={`/servicios/${s.slug}`}
                className="group block bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-6 hover:ring-white/20 transition"
                aria-label={`Abrir detalle de ${s.title}`}
              >
                <div className="flex flex-col gap-3">
                  <h3 className="text-xl md:text-2xl font-semibold text-white">
                    {s.title}
                  </h3>
                  <p className="text-gray-300">{s.short}</p>
                  <div className="text-sm text-gray-400">
                    Tiempo típico: <span className="text-gray-200">{s.duration}</span>
                  </div>
                  <div className="text-sm text-gray-400">
                    Ver más →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

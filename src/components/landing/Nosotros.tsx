"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui/animated";
import { COLABORADORES } from "@/config/colaboradores";

export default function Nosotros() {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto text-center space-y-8">
        {/* Ideología */}
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Nuestra Ideología
          </h2>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            En YAGO creemos que la inteligencia artificial no reemplaza a las personas:
            amplifica su potencial. Nuestro propósito es hacer que la tecnología
            trabaje a favor de la eficiencia, la creatividad y la conexión humana.
          </p>
        </SectionReveal>

        {/* Nuestros Colaboradores (4 elementos) */}
        <SectionReveal>
          <div className="mt-16">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white">
              Nuestros Colaboradores
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-stretch justify-center">
              {COLABORADORES.map((colab) => {
                const Card = (
                  <div
                    className="flex justify-center items-center bg-surface backdrop-blur-md rounded-2xl p-6
                               ring-1 ring-white/10 hover:ring-white/20 transition-all duration-200
                               hover:scale-[1.02] min-h-[120px]"
                  >
                    <Image
                      src={colab.logo}
                      alt={`Logo de ${colab.name}`}
                      title={colab.name}
                      width={220}
                      height={110}
                      className="object-contain opacity-90 hover:opacity-100 transition-opacity"
                      priority={false}
                    />
                  </div>
                );

                return colab.url ? (
                  <a
                    key={colab.name}
                    href={colab.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Abrir sitio de ${colab.name} en nueva pestaña`}
                  >
                    {Card}
                  </a>
                ) : (
                  <div key={colab.name}>{Card}</div>
                );
              })}
            </div>

            <p className="sr-only">
              Esta sección muestra 4 colaboradores. Puedes agregar más en la configuración.
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
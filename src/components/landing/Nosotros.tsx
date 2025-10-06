"use client";

import Image from "next/image";
import { SectionReveal } from "@/components/ui/animated";
import { COLABORADORES } from "@/config/colaboradores";

function NosotrosComponent() {
  return (
    <section id="nosotros" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-6xl mx-auto space-y-10">
        {/* Título principal */}
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Nosotros
          </h2>
        </SectionReveal>

        {/* Resumen breve + frase obligatoria */}
        <SectionReveal>
          <div className="space-y-6">
            <p className="text-lg text-gray-300">
              Diseñamos, construimos y operamos automatizaciones y agentes de IA
              que integran sistemas, eliminan tareas repetitivas y aportan
              sugerencias basadas en datos para acelerar el trabajo diario,
              con foco en resultados medibles y adopción rápida.
            </p>

            <p className="text-lg text-gray-100">
              <strong>En YAGO creemos que la inteligencia artificial no reemplaza a las personas: amplifica su potencial.</strong>{" "}
              Nuestro propósito es hacer que la tecnología trabaje a favor de la eficiencia,
              la creatividad y la conexión humana.
            </p>
          </div>
        </SectionReveal>

        {/* Ideología (resumen muy breve) */}
        <SectionReveal>
          <div className="bg-surface backdrop-blur-md rounded-3xl p-6 md:p-8 ring-1 ring-white/10">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">Nuestra ideología</h3>
            <ul className="list-disc pl-5 space-y-2 text-gray-300">
              <li>Automatización como colaboración humano–máquina.</li>
              <li>Ahorro de tiempo en procesos repetitivos y tediosos.</li>
              <li>Potenciar habilidades con datos y sugerencias de IA.</li>
              <li>Medir por ahorro en recursos (HH/administrativos), no solo costo.</li>
            </ul>
          </div>
        </SectionReveal>

        {/* Nuestros Colaboradores (2 logos con fondo blanco suave) */}
        <SectionReveal>
          <div className="mt-2">
            <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-white text-center">
              Nuestros colaboradores
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-stretch justify-center max-w-3xl mx-auto">
              {COLABORADORES.slice(0, 2).map((colab) => {
                const Card = (
                  <div
                    className="flex justify-center items-center rounded-2xl p-6 min-h-[120px]
                               bg-white/90 dark:bg-white/90
                               ring-1 ring-black/5 shadow-sm
                               hover:shadow-md transition-shadow duration-200"
                  >
                    <Image
                      src={colab.logo}
                      alt={`Logo de ${colab.name}`}
                      title={colab.name}
                      width={220}
                      height={110}
                      className="object-contain"
                      priority={false}
                      sizes="(min-width: 768px) 220px, 50vw"
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
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default NosotrosComponent;
export { NosotrosComponent as Nosotros };
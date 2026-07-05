import Image from "next/image";
import { COLABORADORES } from "@/config/colaboradores";

export function Logos() {
  return (
    <section id="confianza" className="relative py-6 md:py-8">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[1.8rem] border border-white/10 bg-white/[0.03] px-6 py-6 md:flex-row md:px-8">
          <p className="text-center text-sm text-slate-300 md:text-left">
            Equipos como <span className="font-semibold text-white">PSOL</span> y{" "}
            <span className="font-semibold text-white">GrupoExpro</span> ya operan con YAGO,
            sin cambiar su stack actual.
          </p>

          <div className="flex items-center gap-4">
            {COLABORADORES.slice(0, 2).map((colab) => (
              <a
                key={colab.name}
                href={colab.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Abrir sitio de ${colab.name} en nueva pestaña`}
                className="flex h-16 w-36 items-center justify-center rounded-2xl border border-white/10 bg-white/95 px-4 transition hover:-translate-y-0.5"
              >
                <Image
                  src={colab.logo}
                  alt={`Logo de ${colab.name}`}
                  title={colab.name}
                  width={160}
                  height={80}
                  className="max-h-[40px] w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

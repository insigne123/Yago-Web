import { ArrowRight } from "lucide-react";
import { HOME_STEPS } from "@/config/home";

export function HowWeWork() {
  return (
    <section id="proceso" className="y-dark y-sheet y-grain overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[26rem] w-[60rem] -translate-x-1/2 rounded-full bg-sky-400/[0.07] blur-[120px]" />
      </div>
      <div className="y-container relative">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-end">
          <div className="flex flex-col gap-5 lg:col-span-7">
            <span className="y-eyebrow">Cómo trabajamos</span>
            <h2 className="y-h2 text-white">De tarea manual a operación visible, en cuatro pasos.</h2>
          </div>
          <div className="flex flex-col items-start gap-4 lg:col-span-4 lg:col-start-9">
            <p className="y-lead">
              Partimos por el cuello de botella con más impacto y lo dejamos funcionando antes de pasar al siguiente.
            </p>
            <a href="/proceso" className="y-link">
              Ver el proceso completo
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>

        <ol className="relative mt-16 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* Línea que conecta los pasos en escritorio */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-8 right-8 top-[2.15rem] hidden h-px bg-gradient-to-r from-sky-300/0 via-sky-300/40 to-sky-300/0 xl:block"
          />
          {HOME_STEPS.map((step, index) => (
            <li key={step.name} className="y-glass y-reveal relative flex flex-col gap-4 p-7">
              <span className="relative z-[1] grid grid-cols-1 h-9 w-9 place-items-center rounded-full bg-[#0b1220] font-mono text-[13px] font-medium text-sky-300 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.45),0_0_20px_rgba(56,189,248,0.25)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="y-h3 text-[1.45rem] text-white">{step.name}</h3>
              <p className="text-[15.5px] leading-relaxed text-slate-300">{step.description}</p>
              <p className="mt-auto border-t border-white/[0.08] pt-4 text-[13.5px] text-slate-400">
                <span className="text-slate-300">Sales con:</span> {step.output}
              </p>
            </li>
          ))}
        </ol>

      </div>
    </section>
  );
}

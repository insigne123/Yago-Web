import Image from "next/image";
import { Section } from "./Section";

const cases = [
  {
    company: "Backoffice financiero",
    metric: "Digitación mínima",
    line: "Facturas, órdenes de compra y respaldos ya no pasan por carga manual.",
    image: "/images/case-backoffice.png",
  },
  {
    company: "Operaciones y aprobaciones",
    metric: "Flujos visibles",
    line: "Solicitudes y aprobaciones sin correos ni planillas sueltas.",
    image: "/images/case-aprobaciones.png",
  },
  {
    company: "Soporte interno y reportes",
    metric: "Reportes al día",
    line: "Consolidación de datos y reportes operativos sin retrabajo.",
    image: "/images/case-reportes.png",
  },
];

export function CasosExito() {
  return (
    <Section tone="light" id="casos" className="pt-0">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip-light">Casos de éxito</span>
            <h2 className="mt-4 text-balance text-3xl font-semibold md:text-5xl">
              Procesos reales que dejaron de ser manuales.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Ejemplos de dónde YAGO libera carga operativa y ordena la trazabilidad.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {cases.map((item) => (
            <article key={item.company} className="card-light group overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={`Caso de éxito: ${item.company}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 768px) 32vw, 100vw"
                />
              </div>
              <div className="p-6">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                  {item.company}
                </div>
                <div className="mt-2 font-headline text-2xl font-semibold text-cyan-700">
                  {item.metric}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.line}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}

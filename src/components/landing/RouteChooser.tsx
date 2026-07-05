import Link from "next/link";
import { ArrowRight, FileScan, Gavel, Landmark, Workflow } from "lucide-react";
import { Section } from "./Section";

const routes = [
  {
    eyebrow: "Documentos",
    title: "Tengo PDFs, facturas o formularios",
    description: "Convierte documentos en datos útiles para planillas, sistemas y flujos internos.",
    href: "/ocr",
    cta: "Ver OCR",
    icon: FileScan,
  },
  {
    eyebrow: "Portal DT",
    title: "Uso el Portal Dirección del Trabajo",
    description: "SADT automatiza contratos, desvinculaciones y certificados F30/F30-1.",
    href: "/sadt",
    cta: "Ver SADT",
    icon: Landmark,
  },
  {
    eyebrow: "PJUD",
    title: "Necesito revisar causas públicas",
    description: "AXIS consulta personas a volumen con evidencia, resultados y monitoreo diario.",
    href: "/axis",
    cta: "Ver AXIS",
    icon: Gavel,
  },
  {
    eyebrow: "Otro proceso",
    title: "Tengo otro flujo manual",
    description: "Revisamos si conviene automatización a medida, una app interna o una integración.",
    href: "/soluciones",
    cta: "Ver soluciones",
    icon: Workflow,
  },
];

export function RouteChooser() {
  return (
    <Section id="elige-ruta" className="z-10 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-600">Elige tu ruta</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
              Si ya reconoces el problema, entra directo por aquí.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-slate-600">
            Cuatro entradas simples para que no tengas que leer toda la web antes de saber dónde hacer clic.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {routes.map((route) => {
            const Icon = route.icon;

            return (
              <Link
                key={route.href}
                href={route.href}
                className="group rounded-[1.6rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(246,250,254,1))] p-5 transition-[border-color,background-color,transform] duration-200 hover:-translate-y-0.5 hover:border-sky-200/24 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <div className="flex size-11 items-center justify-center rounded-2xl border border-slate-900/10 bg-white/[0.04] text-sky-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <div className="mt-5 text-[11px] uppercase tracking-[0.18em] text-slate-500">{route.eyebrow}</div>
                <h3 className="mt-2 text-xl font-semibold leading-tight text-slate-900">{route.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{route.description}</p>
                <div className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-sky-700">
                  {route.cta}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </Section>
  );
}

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "./Section";

const offerings = [
  {
    title: "Automatización de procesos",
    line: "Flujos con IA e integraciones que eliminan digitación y errores.",
    href: "/servicios/automatizacion-procesos",
    image: "/images/service-automatizacion-procesos.png",
    cta: "Ver servicio",
  },
  {
    title: "Apps listas: OCR · SADT · AXIS",
    line: "Productos ya construidos para documentos, portal DT y consultas PJUD.",
    href: "/ocr",
    image: "/images/service-apps-automatizacion.png",
    cta: "Ver apps",
    sublinks: [
      { name: "OCR", href: "/ocr" },
      { name: "SADT", href: "/sadt" },
      { name: "AXIS", href: "/axis" },
    ],
  },
  {
    title: "Apps y webs a medida",
    line: "Paneles y sitios que centralizan tu operación con roles y auditoría.",
    href: "/servicios/apps-automatizacion",
    image: "/images/service-paginas-web.png",
    cta: "Ver servicio",
  },
  {
    title: "Capacitación en IA",
    line: "Workshops prácticos para que tu equipo adopte IA con seguridad.",
    href: "/servicios/capacitacion-ia",
    image: "/images/service-capacitacion-ia.png",
    cta: "Ver servicio",
  },
];

export function QueHacemos() {
  return (
    <Section tone="light" id="que-hacemos">
      <span id="elige-ruta" className="sr-only" aria-hidden="true" />
      <span id="servicios" className="sr-only" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <span className="chip-light">Qué hacemos</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold md:text-5xl">
            Una ruta clara para cada problema operativo.
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-slate-600">
            Apps listas si ya sabes qué resolver, o soluciones a medida si tu caso es único.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {offerings.map((item) => (
            <div key={item.title} className="card-light group overflow-hidden">
              <div className="relative aspect-[16/9] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  sizes="(min-width: 640px) 48vw, 100vw"
                />
              </div>
              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{item.line}</p>

                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-700 transition-colors hover:text-cyan-900"
                  >
                    {item.cta}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>

                  {item.sublinks ? (
                    <span className="flex flex-wrap gap-1.5">
                      {item.sublinks.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 transition-colors hover:border-cyan-300 hover:text-cyan-700"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/soluciones"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-cyan-400 hover:text-cyan-700"
          >
            ¿Tu caso no calza? Explora soluciones por problema
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

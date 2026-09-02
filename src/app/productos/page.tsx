import Link from "next/link";
import { ArrowRight, Braces, FileScan, Gavel, Landmark } from "lucide-react";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { Productos } from "@/components/landing/Productos";
import { BrandStamp } from "@/components/BrandStamp";
import { PRIMARY_CTA } from "@/config/site";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Productos de automatización e IA para empresas | YAGO",
  description:
    "Conoce OCR, SADT, AXIS y los productos de YAGO para automatizar documentos, operaciones laborales, consultas públicas y procesos internos.",
  path: "/productos",
});

const specializedProducts = [
  {
    name: "OCR",
    label: "Documentos a datos",
    description: "Extrae y valida información de facturas, contratos, formularios y PDFs para usarla en tus sistemas.",
    href: "/ocr",
    icon: FileScan,
  },
  {
    name: "SADT",
    label: "Operación Portal DT",
    description: "Automatiza contratos, desvinculaciones y certificados F30/F30-1 con trazabilidad operativa.",
    href: "/sadt",
    icon: Landmark,
  },
  {
    name: "AXIS",
    label: "Consulta PJUD",
    description: "Consulta causas penales públicas a volumen, conserva evidencia y activa monitoreo cuando corresponde.",
    href: "/axis",
    icon: Gavel,
  },
  {
    name: "OCR Master API",
    label: "Integración documental",
    description: "API de extracción estructurada para integrar OCR en aplicaciones y flujos empresariales existentes.",
    href: "/ocr-master",
    icon: Braces,
  },
];

export default function ProductsIndexPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip text-slate-900">
      <Navbar ctaHref={PRIMARY_CTA.href} ctaLabel={PRIMARY_CTA.label} />
      <main id="main-content" className="main-premium pb-20 pt-20 md:pt-24">
        <section className="mx-auto max-w-7xl px-4">
          <div className="max-w-4xl">
            <p className="text-xs uppercase tracking-[0.22em] text-sky-700">Productos YAGO</p>
            <h1 className="mt-4 text-balance font-headline text-4xl font-semibold text-slate-950 md:text-6xl">
              Elige por el proceso que necesitas resolver, no por la tecnología.
            </h1>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-slate-700 md:text-lg">
              Estas soluciones parten desde flujos ya definidos y se configuran para tu operación. Si tu caso no calza,
              revisamos una automatización o aplicación a medida.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {specializedProducts.map((product) => {
              const Icon = product.icon;
              return (
                <Link
                  key={product.href}
                  href={product.href}
                  className="group rounded-[1.75rem] border border-slate-900/10 bg-white/75 p-6 shadow-[0_18px_50px_rgba(30,58,95,0.08)] transition-[transform,border-color,box-shadow] duration-200 hover:-translate-y-0.5 hover:border-sky-600/25 hover:shadow-[0_22px_60px_rgba(30,58,95,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
                >
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-slate-950 text-sky-200">
                    <Icon className="size-5" aria-hidden="true" />
                  </div>
                  <p className="mt-6 text-xs uppercase tracking-[0.18em] text-sky-700">{product.label}</p>
                  <h2 className="mt-2 text-2xl font-semibold text-slate-950">{product.name}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-700">{product.description}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-950">
                    Ver producto
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </span>
                </Link>
              );
            })}
          </div>
        </section>

        <Productos />
      </main>
      <BrandStamp />
      <Footer />
    </div>
  );
}

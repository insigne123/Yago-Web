import Link from "next/link";
import { ArrowRight, FileJson2, FileStack, ScanSearch } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Section } from "./Section";

const ocrHighlights = [
  {
    title: "Documentos que hoy frenan la operacion",
    description: "Facturas, ordenes de compra, formularios, contratos y otros archivos que siguen pasando por digitacion manual.",
    icon: FileStack,
  },
  {
    title: "Extraccion y estructura util",
    description: "No solo leemos texto: dejamos datos listos para planillas, sistemas y flujos internos.",
    icon: ScanSearch,
  },
  {
    title: "Automatizacion documental conectada",
    description: "OCR como parte del proceso, no como una herramienta aislada sin impacto en la operacion.",
    icon: FileJson2,
  },
];

export function OcrPreview() {
  return (
    <Section className="z-10" id="ocr-home">
      <div className="mx-auto max-w-7xl px-4">
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(12,22,35,0.94),rgba(8,14,23,1))] p-6 shadow-[0_28px_100px_rgba(0,0,0,0.18)] md:p-8">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
            <div>
              <Badge variant="outline" className="border-amber-200/20 bg-amber-100/8 px-3 py-1 text-[11px] uppercase tracking-[0.16em] text-amber-100">
                OCR para empresas
              </Badge>
              <h2 className="mt-4 text-4xl font-semibold text-white md:text-5xl">
                Cuando el cuello de botella esta en documentos, YAGO tambien lo resuelve.
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-300">
                Si tu equipo pierde tiempo leyendo PDFs, imagenes escaneadas o formularios para despues
                copiar datos a planillas o sistemas, la automatizacion documental puede ser un quick win
                muy claro.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Button
                  asChild
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950"
                >
                  <Link href="/ocr">
                    Ver landing OCR
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>

                <Button
                  asChild
                  variant="ghost"
                  className="rounded-full border border-white/10 bg-white/[0.04] text-slate-100 hover:bg-white/[0.08]"
                >
                  <a href="#contacto">Quiero evaluarlo</a>
                </Button>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-1">
              {ocrHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-5"
                  >
                    <div className="flex size-11 items-center justify-center rounded-2xl border border-white/10 bg-black/20 text-amber-100">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div className="mt-4 text-xl font-semibold text-white">{item.title}</div>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import Link from "next/link";
import { ArrowRight, ScanSearch } from "lucide-react";
import { Section } from "./Section";

export function OcrPreview() {
  return (
    <Section className="z-10" id="ocr-home">
      <div className="mx-auto max-w-7xl px-4">
        <div className="card-glow-border flex flex-col gap-6 overflow-hidden rounded-[2rem] border border-slate-900/10 bg-[linear-gradient(120deg,rgba(34,211,238,0.08),rgba(139,92,246,0.08))] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-amber-200/20 bg-amber-200/10 text-amber-700">
              <ScanSearch className="h-6 w-6" aria-hidden="true" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-slate-900 md:text-2xl">
                ¿Tu cuello de botella son los documentos?
              </h2>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-slate-600">
                Facturas, PDFs y formularios dejan de pasar por digitación manual con OCR + IA.
              </p>
            </div>
          </div>

          <Link
            href="/ocr"
            className="btn-vibrant inline-flex shrink-0 items-center gap-2 rounded-full px-6 py-3 text-sm font-medium"
          >
            Ver OCR para empresas
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

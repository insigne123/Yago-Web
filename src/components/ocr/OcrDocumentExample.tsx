import { FileText, ScanText, ShieldCheck, ArrowUpRight } from "lucide-react";
import { OCR_PAGE } from "@/config/ocr";

const STAGE_ICONS = [FileText, ScanText, ShieldCheck, ArrowUpRight];

export function OcrDocumentExample() {
  const example = OCR_PAGE.documentExample;

  return (
    <figure aria-labelledby="ocr-example-title" className="overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#070b13] text-white">
      <figcaption className="flex flex-col gap-3 border-b border-white/10 px-5 py-5 sm:px-7">
        <span className="font-mono text-[11px] leading-relaxed text-sky-200">{example.label}</span>
        <p id="ocr-example-title" className="font-headline text-xl font-semibold tracking-[-0.02em] sm:text-2xl">{example.title}</p>
      </figcaption>
      <ol className="divide-y divide-white/10 px-5 sm:px-7">
        {example.stages.map((stage, index) => {
          const Icon = STAGE_ICONS[index];
          return (
            <li key={stage.title} className="flex gap-3.5 py-5">
              <span aria-hidden="true" className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] text-sky-200">
                <Icon className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[14px] font-semibold"><span className="mr-2 font-mono text-[11px] text-slate-400">0{index + 1}</span>{stage.title}</p>
                {index === 0 ? <p className="mt-2 break-all font-mono text-[11px] text-slate-300">{example.filename}</p> : null}
                <p className="mt-1.5 text-[13px] leading-relaxed text-slate-300">{stage.description}</p>
                {index === 1 ? (
                  <dl className="mt-3 grid gap-2 border-l border-white/15 pl-3">
                    {OCR_PAGE.hero.previewFields.map((field) => (
                      <div key={field.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-[12px]">
                        <dt className="text-slate-400">{field.label}</dt>
                        <dd className="font-medium text-slate-100">{field.value}</dd>
                      </div>
                    ))}
                  </dl>
                ) : null}
                {index === 2 ? <p className="mt-3 rounded-lg border border-sky-200/20 bg-sky-200/[0.06] px-3 py-2 text-[12px] font-medium text-sky-100">{example.exception}</p> : null}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="border-t border-white/10 px-5 py-4 text-[12px] leading-relaxed text-slate-400 sm:px-7">{example.note}</p>
    </figure>
  );
}

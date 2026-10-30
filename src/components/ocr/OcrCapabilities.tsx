import Link from "next/link";
import { ArrowRight, Bot, LayoutDashboard, PlugZap, Workflow } from "lucide-react";
import { OCR_PAGE } from "@/config/ocr";

const CAPABILITY_ICONS = [PlugZap, Workflow, LayoutDashboard, Bot];

export function OcrCapabilities() {
  const { capabilities } = OCR_PAGE;

  return (
    <section id="mas-que-ocr" aria-labelledby="ocr-capabilities-title" className="y-dark mt-16 rounded-[1.75rem] border border-white/10 px-6 py-9 sm:px-9 sm:py-12">
      <div className="flex max-w-3xl flex-col gap-5">
        <span className="y-eyebrow">Más que OCR · YAGO</span>
        <h2 id="ocr-capabilities-title" className="font-headline text-[clamp(1.8rem,3.4vw,2.7rem)] font-semibold leading-[1.1] tracking-[-0.035em] text-white">{capabilities.title}</h2>
        <p className="text-[16px] leading-relaxed text-slate-300">{capabilities.description}</p>
      </div>
      <ul className="mt-9 grid gap-3 sm:grid-cols-2">
        {capabilities.items.map((item, index) => {
          const Icon = CAPABILITY_ICONS[index];
          return (
            <li key={item.service}>
              <Link
                href={item.href}
                className={`group flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-150 hover:border-sky-200/30 hover:bg-white/[0.06] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-200 focus-visible:ring-offset-4 focus-visible:ring-offset-[#070b13] sm:p-6 plausible-event-name=OCR+Capability+Click plausible-event-service=${item.service} plausible-event-location=ocr_capabilities`}
              >
                <Icon className="h-5 w-5 text-sky-200" strokeWidth={1.8} aria-hidden="true" />
                <h3 className="font-headline text-xl font-semibold leading-snug tracking-[-0.02em] text-white">{item.title}</h3>
                <p className="text-[14px] leading-relaxed text-slate-300">{item.description}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-1 text-[13px] font-semibold text-sky-200">
                  {item.label}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="mt-9 flex flex-col items-start gap-5 border-t border-white/10 pt-7">
        <p className="max-w-xl text-lg font-medium leading-relaxed text-white">{capabilities.prompt}</p>
        <div className="flex w-full flex-col items-start gap-5 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center">
          <a href="#formulario" className="y-btn y-btn-primary plausible-event-name=OCR+Evaluation+Click plausible-event-service=ocr plausible-event-location=ocr_capabilities">
            {OCR_PAGE.hero.primaryCta}
            <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
          </a>
          <Link href="/nosotros" className="y-link min-h-11 text-sm plausible-event-name=OCR+Company+Click plausible-event-service=ocr plausible-event-location=ocr_capabilities">
            {capabilities.companyLabel}
            <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}

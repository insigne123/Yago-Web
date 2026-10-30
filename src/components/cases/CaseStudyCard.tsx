import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudy } from "@/config/evidence";

export function CaseStudyCard({ item }: { item: CaseStudy }) {
  return (
    <article className="y-card flex flex-col gap-4 p-7">
      <span className="y-eyebrow">{item.client}</span>
      <h3 className="y-h3 text-[1.4rem] text-slate-950">{item.title}</h3>
      <p className="text-[15.5px] leading-relaxed text-slate-600">{item.summary}</p>
      <Link href={`/casos/${item.slug}`} className="y-link mt-auto pt-3">Ver resultado y método de medición<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link>
    </article>
  );
}

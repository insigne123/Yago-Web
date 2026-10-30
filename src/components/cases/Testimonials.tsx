import { ArrowUpRight, Quote } from "lucide-react";
import { PageSection, SectionHeader } from "@/components/site/PageKit";
import { getPublishedTestimonials, type EvidenceService } from "@/config/evidence";

export function Testimonials({ service }: { service?: EvidenceService }) {
  const items = getPublishedTestimonials(service).slice(0, 3);
  if (!items.length) return null;

  return (
    <PageSection id="testimonios" tone="mist">
      <SectionHeader eyebrow="Experiencia de clientes" title="Qué cuentan quienes trabajan con YAGO." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <figure key={item.id} className="y-card flex flex-col gap-5 p-7">
            <Quote className="h-6 w-6 text-sky-700" aria-hidden="true" />
            <blockquote className="text-[16.5px] leading-relaxed text-slate-900">{item.quote}</blockquote>
            <figcaption className="mt-auto border-t border-slate-200 pt-5 text-sm text-slate-600">
              <span className="block font-semibold text-slate-950">{item.person}</span>
              <span className="block">{item.role} · {item.company}</span>
              <time dateTime={item.date} className="mt-2 block">{new Date(`${item.date}T12:00:00`).toLocaleDateString("es-CL", { month: "long", year: "numeric" })}</time>
              {item.source ? <a href={item.source.href} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-1.5 text-sky-700 underline underline-offset-4">{item.source.label}<ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></a> : null}
            </figcaption>
          </figure>
        ))}
      </div>
    </PageSection>
  );
}

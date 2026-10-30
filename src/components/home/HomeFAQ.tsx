import { MessageCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { HOME_FAQ } from "@/config/home";
import { COMPANY } from "@/config/site";

export function HomeFAQ() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQ.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section id="faq" className="y-light y-sheet">
      <JsonLd id="jsonld-home-faq" data={faqJsonLd} />
      <div className="y-container grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col items-start gap-5 lg:col-span-4">
          <span className="y-eyebrow">Preguntas frecuentes</span>
          <h2 className="y-h2 text-slate-950 lg:text-[2.75rem]">Antes de partir, lo que más nos preguntan.</h2>
          <p className="y-lead">¿No ves tu duda? Escríbenos y te respondemos con el siguiente paso.</p>
          <a
            href={COMPANY.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="y-btn y-btn-outline mt-2 plausible-event-name=CTA+WhatsApp plausible-event-location=faq_section"
          >
            <MessageCircle className="h-[18px] w-[18px]" aria-hidden="true" />
            Escribir por WhatsApp
          </a>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="lg:col-span-7 lg:col-start-6">
          {HOME_FAQ.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`} className="border-slate-200 first:border-t">
              <AccordionTrigger className="gap-6 py-6 text-left font-headline text-[1.15rem] font-semibold tracking-[-0.01em] text-slate-950 hover:no-underline md:text-[1.25rem] [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-sky-600">
                <span className="flex-1">{item.q}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-6 text-[16.5px] leading-relaxed text-slate-600">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

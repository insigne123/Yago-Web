"use client";

import { FAQ_ITEMS } from "@/config/faq";
import { SectionReveal } from "@/components/ui/animated";
import { Section } from "./Section";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

function FAQComponent() {
  return (
    <Section id="faq" className="z-10">
      <div className="mx-auto max-w-7xl px-4">
        <SectionReveal>
          <p className="text-xs tracking-[0.22em] text-muted-foreground">FAQ</p>
          <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <h2 className="text-4xl font-semibold text-white md:text-5xl">
              Preguntas frecuentes
            </h2>
            <p className="max-w-xl text-sm text-muted-foreground">
              Respuestas cortas y directas. Si quieres, te armamos un roadmap con quick wins en 5 dias habiles.
            </p>
          </div>
        </SectionReveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <SectionReveal as="div" className="lg:col-span-8">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.map((item, idx) => (
                  <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                    <AccordionTrigger className="text-left text-white hover:no-underline">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </SectionReveal>

          <SectionReveal as="div" className="lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-medium text-white">No ves tu caso?</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Cuentalo en 2-3 lineas y te respondemos con sugerencias y siguientes pasos.
              </p>
              <a
                href="#contacto"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 px-4 py-2 text-sm font-medium text-white transition hover:opacity-95 plausible-event-name=FAQ+Contact+Click plausible-event-location=faq_section"
              >
                Hablar con YAGO
              </a>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-muted-foreground">
                Tip: si tienes UTMs en tus campanas, veras el origen del lead cuando envien el formulario.
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </Section>
  );
}

export default FAQComponent;
export { FAQComponent as FAQ };

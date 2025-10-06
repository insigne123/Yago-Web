"use client";

import { FAQ_ITEMS } from "@/config/faq";
import { SectionReveal } from "@/components/ui/animated";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6 md:px-12 relative z-10">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
            Preguntas frecuentes
          </h2>
        </SectionReveal>

        <SectionReveal>
          <div className="bg-surface backdrop-blur-md rounded-3xl ring-1 ring-white/10 p-2 md:p-4">
            <Accordion type="single" collapsible className="w-full">
              {FAQ_ITEMS.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-white/10">
                  <AccordionTrigger className="text-left text-white hover:no-underline">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* CTA final */}
            <div className="mt-6 text-sm text-gray-400 text-center">
              ¿No ves tu pregunta?{" "}
              <a
                href="#contacto"
                className="underline decoration-cyan-400/60 underline-offset-4 hover:text-white"
              >
                Contáctanos
              </a>
              .
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

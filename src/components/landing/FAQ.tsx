import { PRIMARY_CTA } from "@/config/site";
import { FAQ_ITEMS } from "@/config/faq";
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
        <p className="text-xs tracking-[0.22em] text-muted-foreground">FAQ</p>
        <div className="mt-3 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <h2 className="text-4xl font-semibold text-white md:text-5xl">
            Preguntas frecuentes
          </h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            Respuestas cortas para bajar dudas de implementacion, seguridad, ROI, tiempos y la sesion inicial.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="hover-lift rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] p-2 md:p-4">
              <Accordion type="single" collapsible className="w-full">
                {FAQ_ITEMS.slice(0, 6).map((item, idx) => (
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
          </div>

          <div className="lg:col-span-4">
            <div className="hover-lift rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.84),rgba(10,16,25,0.96))] p-6">
              <div className="text-sm font-medium text-white">No ves tu caso?</div>
              <p className="mt-2 text-sm text-muted-foreground">
                Cuentalo en 2-3 lineas y coordinamos una sesion para aterrizar el mejor primer paso.
              </p>
              <a
                href={PRIMARY_CTA.href}
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] px-4 py-2 text-sm font-medium text-slate-950 shadow-[0_14px_34px_rgba(5,11,19,0.24)] transition hover:brightness-[0.985] plausible-event-name=FAQ+Contact+Click plausible-event-location=faq_section"
              >
                {PRIMARY_CTA.label}
              </a>

              <div className="mt-4 rounded-2xl border border-white/10 bg-black/20 p-4 text-xs text-muted-foreground">
                No necesitas llegar con el flujo perfectamente resuelto. Si hoy hay correos, planillas,
                documentos o aprobaciones manuales, ya hay suficiente para conversar.
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default FAQComponent;
export { FAQComponent as FAQ };

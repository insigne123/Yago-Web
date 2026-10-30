"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { AttributionFields } from "@/components/forms/AttributionFields";
import { LeadSuccess } from "@/components/forms/LeadSuccess";
import { CONTACT_SERVICE_OPTIONS } from "@/config/home";
import { COMPANY, PRIMARY_CTA } from "@/config/site";

export function ContactSection() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const [service, setService] = useState<string>(CONTACT_SERVICE_OPTIONS[0].value);

  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get("servicio");
    if (requested) setService(CONTACT_SERVICE_OPTIONS.some((option) => option.value === requested) ? requested : "otro");
  }, []);

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Contact Form Start", { position: "contact_section", service });
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadId("");
    setLoading(true);
    const form = event.currentTarget;
    const formData = new FormData(form);
    const selectedService = CONTACT_SERVICE_OPTIONS.find((option) => option.value === formData.get("tipo_proceso"));
    const processType = selectedService?.label || "Otro proyecto";
    const eventProps = { position: "contact_section", service: selectedService?.value || "otro" };
    const notes = String(formData.get("mensaje") || "").trim();

    // La API exige un mensaje: si la persona no escribe nada, igual enviamos el tipo de proceso.
    formData.set(
      "mensaje",
      [processType ? `Tipo de proceso: ${processType}` : "", notes, notes ? "" : "Solicita sesión de diagnóstico."]
        .filter(Boolean)
        .join("\n\n")
    );

    let errorTracked = false;
    try {
      track("Contact Form Submit", eventProps);
      const res = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok || !data.ok) {
        track("Contact Form Error", {
          ...eventProps,
          kind: res.status >= 400 && res.status < 500 ? "validation" : "server",
          status: res.status,
        });
        errorTracked = true;
        throw new Error(data.error || "Error al enviar el mensaje.");
      }

      form.reset();
      setService(CONTACT_SERVICE_OPTIONS[0].value);
      setLeadId(data.leadId || "sin-referencia");
      track("Contact Form Success", { ...eventProps, lead_id: data.leadId });
      toast({ title: "¡Mensaje enviado!", description: "Te contactaremos para coordinar el diagnóstico." });
    } catch (err: unknown) {
      if (!errorTracked) track("Contact Form Error", { ...eventProps, kind: "network_or_unknown" });
      toast({
        title: "No pudimos enviar tu mensaje",
        description: err instanceof Error ? err.message : "Intenta nuevamente o escríbenos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  const bookingExternal = PRIMARY_CTA.href.startsWith("http");

  return (
    <section id="contacto" className="y-dark y-sheet y-grain overflow-hidden">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute right-[-8%] top-[-10%] h-[36rem] w-[36rem] rounded-full bg-sky-400/[0.12] blur-[120px]" />
      </div>
      <div className="y-container relative grid grid-cols-1 items-center gap-14 lg:grid-cols-12">
        <div className="flex flex-col gap-6 lg:col-span-5">
          <span className="y-eyebrow">Contacto</span>
          <h2 className="y-h2 text-white lg:text-[3.4rem]">Cuéntanos qué quieres implementar.</h2>
          <p className="y-lead">
            Revisamos tu necesidad de automatización, integración de IA, aplicaciones o documentos y te proponemos
            el siguiente paso para tu empresa.
          </p>

          <ul className="mt-2 flex flex-col border-t border-white/[0.08]">
            <li>
              <a
                href={PRIMARY_CTA.href}
                target={bookingExternal ? "_blank" : undefined}
                rel={bookingExternal ? "noreferrer" : undefined}
                className="group flex min-h-[3.75rem] items-center gap-4 border-b border-white/[0.08] text-base font-medium text-white transition-colors hover:text-sky-200 plausible-event-name=CTA+Agendar+Sesion plausible-event-location=contact_section"
              >
                <CalendarDays className="h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                <span className="flex-1">Agenda directo en el calendario</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="group flex min-h-[3.75rem] items-center gap-4 border-b border-white/[0.08] text-base font-medium text-white transition-colors hover:text-sky-200 plausible-event-name=CTA+WhatsApp plausible-event-location=contact_section"
              >
                <MessageCircle className="h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                <span className="flex-1">WhatsApp +56 9 6393 0231</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a
                href={`mailto:${COMPANY.email}`}
                className="group flex min-h-[3.75rem] items-center gap-4 border-b border-white/[0.08] text-base font-medium text-white transition-colors hover:text-sky-200"
              >
                <Mail className="h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                <span className="flex-1 break-all">{COMPANY.email}</span>
                <ArrowRight className="h-4 w-4 text-slate-400 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </a>
            </li>
          </ul>
          <span className="inline-flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {COMPANY.location}
          </span>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <form
            onSubmit={onSubmit}
            onFocusCapture={markStart}
            className="flex flex-col gap-5 y-form-card rounded-[1.75rem] bg-white p-6 text-slate-950 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] sm:p-9"
          >
            <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <input type="hidden" name="topic" value="Sesion de diagnostico" />
            <AttributionFields />

            <div className="flex flex-col gap-1.5">
              <h3 className="y-h3 text-2xl">Coordina tu diagnóstico</h3>
              <p className="text-[15px] text-slate-500">Cuatro datos y te contactamos para agendar.</p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="nombre" className="y-label">Nombre</label>
                <input id="nombre" name="nombre" autoComplete="name" placeholder="Tu nombre" required className="y-field" />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="y-label">Email de trabajo</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder="nombre@empresa.cl"
                  required
                  className="y-field"
                />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="empresa" className="y-label">Empresa</label>
              <input id="empresa" name="empresa" autoComplete="organization" placeholder="Nombre de tu empresa" className="y-field" />
            </div>

            <fieldset className="flex flex-col gap-2.5">
              <legend className="y-label mb-2.5">¿Qué necesita tu empresa?</legend>
              <div className="grid grid-cols-1 gap-2 min-[420px]:grid-cols-2">
                {CONTACT_SERVICE_OPTIONS.map((option, index) => (
                  <label
                    key={option.value}
                    className={`flex min-h-[2.9rem] cursor-pointer items-center gap-2.5 rounded-xl px-3.5 text-[15px] text-slate-800 shadow-[inset_0_0_0_1px_#cbd5e1] transition-[box-shadow,background-color] has-[:checked]:bg-mist has-[:checked]:font-medium has-[:checked]:shadow-[inset_0_0_0_1.5px_#0b1220] ${
                      // con un número impar de opciones, la última ocupa la fila completa
                      CONTACT_SERVICE_OPTIONS.length % 2 && index === CONTACT_SERVICE_OPTIONS.length - 1 ? "min-[420px]:col-span-2" : ""
                    }`}
                  >
                    <input
                      id={`tipo_proceso_${index}`}
                      type="radio"
                      name="tipo_proceso"
                      value={option.value}
                      checked={service === option.value}
                      onChange={() => setService(option.value)}
                      className="h-4 w-4 accent-slate-900"
                    />
                    {option.label}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <label htmlFor="mensaje" className="y-label">
                Cuéntalo en 2 o 3 líneas <span className="font-normal text-slate-500">(opcional)</span>
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={3}
                placeholder="Ej.: queremos extraer datos de PDFs y cargarlos en nuestro ERP, o desarrollar una app interna."
                className="y-field"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="y-btn y-btn-primary w-full disabled:cursor-wait disabled:opacity-70 plausible-event-name=CTA+Coordinar+Sesion plausible-event-location=contact_section"
            >
              {loading ? "Enviando…" : "Enviar y coordinar diagnóstico"}
            </button>
            {leadId ? (
              <LeadSuccess
                tone="light"
                leadId={leadId}
                message="Revisaremos el proceso y te responderemos con el siguiente paso recomendado."
              />
            ) : null}
            <p className="text-[13px] text-slate-500">
              Al enviar aceptas nuestra{" "}
              <Link href="/privacidad" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">
                Política de Privacidad
              </Link>
              .
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

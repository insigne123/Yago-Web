"use client";

import { useId, useState } from "react";
import Link from "next/link";
import type { ServiceLeadForm as ServiceLeadFormConfig } from "@/config/services";
import { AttributionFields } from "@/components/forms/AttributionFields";
import { LeadSuccess } from "@/components/forms/LeadSuccess";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";

const HOW_FOUND_OPTIONS = [
  "Google u otro buscador",
  "ChatGPT, Copilot u otra IA",
  "LinkedIn",
  "Recomendación",
  "Noticia o artículo",
  "Otro",
];

type ServiceLeadFormProps = {
  service: string;
  serviceTitle: string;
  config: ServiceLeadFormConfig;
};

export function ServiceLeadForm({ service, serviceTitle, config }: ServiceLeadFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const id = useId();
  const analytics = { position: "service_form", service };

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Service Lead Form Start", analytics);
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLeadId("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const process = String(formData.get("proceso_a_automatizar") || "").trim();
    const howFound = String(formData.get("como_nos_encontro") || "").trim();

    if (!process) {
      toast({ title: "Falta el proceso", description: "Cuéntanos qué proceso quieres automatizar.", variant: "destructive" });
      return;
    }

    formData.set(
      "mensaje",
      [`Lead desde servicio: ${serviceTitle}.`, `Proceso a automatizar: ${process}`, howFound ? `Cómo nos encontró: ${howFound}` : ""]
        .filter(Boolean)
        .join("\n"),
    );

    setLoading(true);
    track("Service Lead Form Submit", analytics);
    let errorTracked = false;

    try {
      const response = await fetch("/api/contact", { method: "POST", body: formData });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        track("Service Lead Form Error", { ...analytics, kind: response.status >= 400 && response.status < 500 ? "validation" : "server", status: response.status });
        errorTracked = true;
        throw new Error(data.error || "No pudimos enviar tu solicitud.");
      }

      form.reset();
      setLeadId(data.leadId || "sin-referencia");
      track("Service Lead Form Success", analytics);
      toast({ title: "Solicitud enviada", description: config.successMessage });
    } catch (error) {
      if (!errorTracked) track("Service Lead Form Error", { ...analytics, kind: "network_or_unknown" });
      toast({
        title: "No pudimos enviar tu solicitud",
        description: error instanceof Error ? error.message : "Intenta nuevamente o escríbenos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="y-form-card rounded-[1.75rem] bg-white p-6 text-slate-950 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] sm:p-9">
      <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-4">
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="topic" value={serviceTitle} />
        <AttributionFields />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${id}-nombre`} className="y-label">Nombre</label>
            <input id={`${id}-nombre`} name="nombre" autoComplete="name" placeholder="Tu nombre" required className="y-field" />
          </div>
          <div className="grid gap-2">
            <label htmlFor={`${id}-empresa`} className="y-label">Empresa</label>
            <input id={`${id}-empresa`} name="empresa" autoComplete="organization" placeholder="Nombre de la empresa" required className="y-field" />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${id}-email`} className="y-label">Email de trabajo</label>
          <input id={`${id}-email`} name="email" type="email" autoComplete="email" inputMode="email" placeholder="nombre@empresa.cl" required className="y-field" />
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${id}-proceso`} className="y-label">{config.processLabel}</label>
          <textarea
            id={`${id}-proceso`}
            name="proceso_a_automatizar"
            autoComplete="off"
            placeholder={config.processPlaceholder}
            rows={4}
            maxLength={2000}
            required
            className="y-field"
          />
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${id}-encontro`} className="y-label">
            ¿Cómo nos encontraste? <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <select id={`${id}-encontro`} name="como_nos_encontro" defaultValue="" className="y-field pr-8">
            <option value="">Selecciona una opción</option>
            {HOW_FOUND_OPTIONS.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <button type="submit" disabled={loading} className="y-btn y-btn-primary mt-1 w-full disabled:cursor-wait disabled:opacity-70">
          {loading ? "Enviando…" : config.submitLabel}
        </button>
        <p className="text-[13px] text-slate-500">
          Al enviar aceptas nuestra{" "}
          <Link href="/privacidad" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">
            Política de Privacidad
          </Link>
          .
        </p>
      </form>
      {leadId ? <LeadSuccess tone="light" leadId={leadId} message={config.successMessage} /> : null}
    </div>
  );
}

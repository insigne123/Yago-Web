"use client";

import { useId, useState } from "react";
import type { AutomationPage } from "@/config/automation-pages";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { AttributionFields } from "@/components/forms/AttributionFields";
import { LeadSuccess } from "@/components/forms/LeadSuccess";
import Link from "next/link";

type AutomationLeadFormProps = {
  page: AutomationPage;
};

export function AutomationLeadForm({ page }: AutomationLeadFormProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [leadId, setLeadId] = useState("");
  const id = useId();

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Automation Lead Form Start", { position: "automation_form", slug: page.slug, topic: page.form.topic });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLeadId("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const monthlyVolume = String(formData.get("volumen_mensual") || "").trim();
    const process = String(formData.get("proceso_principal") || "").trim();
    const notes = String(formData.get("mensaje") || "").trim();

    const generatedMessage = [
      `Lead desde landing ${page.form.topic}.`,
      process ? `${page.form.processLabel}: ${process}` : "",
      monthlyVolume ? `${page.form.volumeLabel}: ${monthlyVolume}` : "",
      notes,
      "Solicita demo comercial.",
    ]
      .filter(Boolean)
      .join("\n");

    formData.set("mensaje", generatedMessage);

    formData.set("topic", page.form.topic);

    let errorTracked = false;

    try {
      track("Automation Lead Form Submit", { position: "automation_form", slug: page.slug, topic: page.form.topic });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();

      if (!res.ok || !resData.ok) {
        track("Automation Lead Form Error", {
          position: "automation_form",
          slug: page.slug,
          topic: page.form.topic,
          kind: res.status >= 400 && res.status < 500 ? "validation" : "server",
          status: res.status,
        });
        errorTracked = true;
        throw new Error(resData.error || "No pudimos enviar tu solicitud.");
      }

      form.reset();
      setLeadId(resData.leadId || "sin-referencia");
      track("Automation Lead Form Success", { position: "automation_form", slug: page.slug, topic: page.form.topic, lead_id: resData.leadId });
      toast({
        title: "Solicitud enviada",
        description: "Te responderemos para coordinar la demo.",
      });
    } catch (err: any) {
      if (!errorTracked) {
        track("Automation Lead Form Error", {
          position: "automation_form",
          slug: page.slug,
          topic: page.form.topic,
          kind: "network_or_unknown",
        });
      }

      toast({
        title: "No pudimos enviar tu solicitud",
        description: err?.message ?? "Intenta nuevamente o escribenos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="y-form-card rounded-[1.75rem] bg-white p-6 text-slate-950 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] sm:p-9">
      <div className="flex flex-col gap-1.5">
        <h3 className="y-h3 text-2xl">{page.form.title}</h3>
        <p className="text-[15px] leading-relaxed text-slate-500">{page.form.description}</p>
      </div>
      <form onSubmit={onSubmit} onFocusCapture={markStart} className="mt-6 grid gap-4">
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="topic" value={page.form.topic} />
        <AttributionFields />

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${id}-nombre`} className="y-label">Nombre</label>
            <input id={`${id}-nombre`} name="nombre" autoComplete="name" placeholder="Tu nombre" required className="y-field" />
          </div>
          <div className="grid gap-2">
            <label htmlFor={`${id}-empresa`} className="y-label">Empresa</label>
            <input
              id={`${id}-empresa`}
              name="empresa"
              autoComplete="organization"
              placeholder="Nombre de la empresa"
              required
              className="y-field"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${id}-email`} className="y-label">Email de trabajo</label>
          <input
            id={`${id}-email`}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            placeholder="nombre@empresa.cl"
            required
            className="y-field"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor={`${id}-process`} className="y-label">{page.form.processLabel}</label>
            <select id={`${id}-process`} name="proceso_principal" required defaultValue="" className="y-field pr-8">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {page.form.processOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor={`${id}-volume`} className="y-label">{page.form.volumeLabel}</label>
            <select id={`${id}-volume`} name="volumen_mensual" required defaultValue="" className="y-field pr-8">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {page.form.volumeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor={`${id}-message`} className="y-label">
            Mensaje <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <textarea
            id={`${id}-message`}
            name="mensaje"
            autoComplete="off"
            placeholder="Si quieres, cuéntanos el proceso, volumen o urgencia."
            rows={3}
            className="y-field"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className={`y-btn y-btn-primary mt-1 w-full disabled:cursor-wait disabled:opacity-70 plausible-event-name=CTA+Solicitar+Demo plausible-event-location=automation_form plausible-event-product=${page.slug}`}
        >
          {loading ? "Enviando…" : page.form.submitLabel}
        </button>
        <p className="text-[13px] text-slate-500">
          Al enviar aceptas nuestra{" "}
          <Link href="/privacidad" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">
            Política de Privacidad
          </Link>
          .
        </p>
      </form>
      {leadId ? (
        <LeadSuccess tone="light" leadId={leadId} message="Te contactaremos para validar alcance, volumen y coordinar la demo." />
      ) : null}
    </div>
  );
}

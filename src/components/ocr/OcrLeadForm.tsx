"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { AttributionFields } from "@/components/forms/AttributionFields";
import { LeadSuccess } from "@/components/forms/LeadSuccess";
import { OCR_PAGE } from "@/config/ocr";

export function OcrLeadForm() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [leadId, setLeadId] = useState("");

  function markStart() {
    if (started) return;
    setStarted(true);
    track("OCR Lead Form Start", { position: "ocr_form" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLeadId("");
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const role = String(formData.get("cargo") || "").trim();
    const documentType = String(formData.get("tipo_documento") || "").trim();
    const monthlyVolume = String(formData.get("volumen_mensual") || "").trim();
    const notes = String(formData.get("mensaje") || "").trim();

    if (!notes) {
      const generatedMessage = [
        "Lead desde landing OCR.",
        role ? `Cargo: ${role}` : "",
        documentType ? `Tipo de documento: ${documentType}` : "",
        monthlyVolume ? `Volumen mensual: ${monthlyVolume}` : "",
        "Solicita evaluación inicial.",
      ]
        .filter(Boolean)
        .join("\n");

      formData.set("mensaje", generatedMessage);
    }

    formData.set("topic", "OCR para empresas");

    let errorTracked = false;

    try {
      track("OCR Lead Form Submit", { position: "ocr_form" });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();

      if (!res.ok || !resData.ok) {
        track("OCR Lead Form Error", {
          position: "ocr_form",
          kind: res.status >= 400 && res.status < 500 ? "validation" : "server",
          status: res.status,
        });
        errorTracked = true;
        throw new Error(resData.error || "No pudimos enviar tu solicitud.");
      }

      form.reset();
      setLeadId(resData.leadId || "sin-referencia");
      track("OCR Lead Form Success", { position: "ocr_form", lead_id: resData.leadId });
      toast({
        title: "Solicitud enviada",
        description: "Te responderemos para coordinar la evaluación inicial.",
      });
    } catch (err: any) {
      if (!errorTracked) {
        track("OCR Lead Form Error", {
          position: "ocr_form",
          kind: "network_or_unknown",
        });
      }

      toast({
        title: "No pudimos enviar tu solicitud",
        description: err?.message ?? "Intenta nuevamente o escríbenos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="y-form-card rounded-[1.75rem] bg-white p-6 text-slate-950 shadow-[0_50px_100px_-40px_rgba(0,0,0,0.8),0_0_0_1px_rgba(255,255,255,0.1)] sm:p-9">
      <div className="flex flex-col gap-1.5">
        <h3 className="y-h3 text-2xl">{OCR_PAGE.form.title}</h3>
        <p className="text-[15px] leading-relaxed text-slate-600">{OCR_PAGE.form.description}</p>
      </div>
      <form onSubmit={onSubmit} onFocusCapture={markStart} className="mt-6 grid gap-4">
        <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
        <input type="hidden" name="topic" value="OCR para empresas" />
        <AttributionFields />

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="ocr-nombre" className="y-label">Nombre</label>
            <input id="ocr-nombre" name="nombre" autoComplete="name" placeholder="Tu nombre" required className="y-field" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="ocr-empresa" className="y-label">Empresa</label>
            <input
              id="ocr-empresa"
              name="empresa"
              autoComplete="organization"
              placeholder="Nombre de la empresa"
              required
              className="y-field"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="ocr-email" className="y-label">Email de trabajo</label>
            <input
              id="ocr-email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              placeholder="nombre@empresa.cl"
              required
              className="y-field"
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="ocr-phone" className="y-label">
              Teléfono o WhatsApp <span className="font-normal text-slate-500">(opcional)</span>
            </label>
            <input
              id="ocr-phone"
              name="telefono"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+56 9 …"
              className="y-field"
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="ocr-role" className="y-label">
            Cargo <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <input
            id="ocr-role"
            name="cargo"
            autoComplete="organization-title"
            placeholder="Ej.: Operaciones, Finanzas, Backoffice"
            className="y-field"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="ocr-document-type" className="y-label">Tipo de documento</label>
            <select id="ocr-document-type" name="tipo_documento" required defaultValue="" className="y-field pr-8">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {OCR_PAGE.form.documentOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="grid gap-2">
            <label htmlFor="ocr-volume" className="y-label">Volumen mensual</label>
            <select id="ocr-volume" name="volumen_mensual" required defaultValue="" className="y-field pr-8">
              <option value="" disabled>
                Selecciona una opción
              </option>
              {OCR_PAGE.form.volumeOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="ocr-message" className="y-label">
            ¿Qué debería pasar después de leer los documentos? <span className="font-normal text-slate-500">(opcional)</span>
          </label>
          <textarea
            id="ocr-message"
            name="mensaje"
            autoComplete="off"
            placeholder="Ej.: revisar montos, pedir una aprobación o cargar los datos a nuestro ERP."
            rows={3}
            className="y-field"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="y-btn y-btn-primary mt-1 w-full disabled:cursor-wait disabled:opacity-70 plausible-event-name=OCR+Evaluation+Submit+Click plausible-event-location=ocr_form plausible-event-service=ocr"
        >
          {loading ? "Enviando…" : OCR_PAGE.form.submitLabel}
        </button>
        <p className="text-[13px] text-slate-600">
          Al enviar aceptas nuestra{" "}
          <Link href="/privacidad" className="text-sky-700 underline underline-offset-2 hover:text-sky-800">
            Política de Privacidad
          </Link>
          .
        </p>
      </form>
      {leadId ? (
        <LeadSuccess
          tone="light"
          leadId={leadId}
          message="Revisaremos tu solicitud y coordinaremos la evaluación de documentos, campos e integración."
        />
      ) : null}
    </div>
  );
}

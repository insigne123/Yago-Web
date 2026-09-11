"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { AttributionFields } from "@/components/forms/AttributionFields";
import { LeadSuccess } from "@/components/forms/LeadSuccess";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
        "Solicita evaluacion inicial.",
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
        description: "Te responderemos para coordinar la evaluacion inicial.",
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
        description: err?.message ?? "Intenta nuevamente o escribenos por WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="hover-lift rounded-[1.9rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_20px_60px_rgba(30,58,95,0.08)]">
      <CardHeader>
        <CardTitle>{OCR_PAGE.form.title}</CardTitle>
        <CardDescription>{OCR_PAGE.form.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-4">
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="topic" value="OCR para empresas" />
          <AttributionFields />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="ocr-nombre" className="text-slate-200">Nombre</Label>
              <Input
                id="ocr-nombre"
                name="nombre"
                autoComplete="name"
                placeholder="Tu nombre"
                required
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="ocr-empresa" className="text-slate-200">Empresa</Label>
              <Input
                id="ocr-empresa"
                name="empresa"
                autoComplete="organization"
                placeholder="Nombre de la empresa"
                required
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="ocr-email" className="text-slate-200">Correo</Label>
              <Input
                id="ocr-email"
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="tu@empresa.com"
                required
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="ocr-phone" className="text-slate-200">Telefono o WhatsApp</Label>
              <Input
                id="ocr-phone"
                name="telefono"
                autoComplete="tel"
                inputMode="tel"
                placeholder="Tu numero de contacto"
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="ocr-role" className="text-slate-200">Cargo</Label>
              <Input
                id="ocr-role"
                name="cargo"
                autoComplete="organization-title"
                placeholder="Ej. Operaciones, Finanzas, Backoffice"
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor="ocr-document-type" className="text-slate-200">Tipo de documento</Label>
              <select
                id="ocr-document-type"
                name="tipo_documento"
                required
                defaultValue=""
                className="h-11 rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none transition-colors focus:border-sky-200/40 focus:ring-2 focus:ring-sky-200/30"
              >
                <option value="" disabled className="bg-[#0b1220] text-slate-300">
                  Selecciona una opcion
                </option>
                {OCR_PAGE.form.documentOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0b1220] text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ocr-volume" className="text-slate-200">Volumen aproximado mensual</Label>
            <select
              id="ocr-volume"
              name="volumen_mensual"
              required
              defaultValue=""
              className="h-11 rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none transition-colors focus:border-sky-200/40 focus:ring-2 focus:ring-sky-200/30"
            >
              <option value="" disabled className="bg-[#0b1220] text-slate-300">
                Selecciona una opcion
              </option>
              {OCR_PAGE.form.volumeOptions.map((option) => (
                <option key={option} value={option} className="bg-[#0b1220] text-white">
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="ocr-message" className="text-slate-200">Mensaje opcional</Label>
            <Textarea
              id="ocr-message"
              name="mensaje"
              autoComplete="off"
              placeholder="Si quieres, cuentanos brevemente el proceso o el problema que quieres resolver..."
              rows={4}
              className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="rounded-full border border-white/10 bg-white text-[#070b13] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(0,0,0,0.18)] active:scale-[0.98]"
          >
            {loading ? "Enviando..." : OCR_PAGE.form.submitLabel}
          </Button>
        </form>
        {leadId ? <LeadSuccess leadId={leadId} message="Revisaremos el tipo de documento, volumen y calidad de muestra para recomendar una evaluación." /> : null}
        <p className="mt-3 text-xs text-slate-300">
          Al enviar aceptas nuestra <Link href="/privacidad" className="underline hover:text-foreground">Politica de Privacidad</Link>.
        </p>
      </CardContent>
    </Card>
  );
}

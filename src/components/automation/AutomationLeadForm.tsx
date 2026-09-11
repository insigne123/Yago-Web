"use client";

import { useId, useState } from "react";
import type { AutomationPage } from "@/config/automation-pages";
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
    <Card className="hover-lift rounded-[1.9rem] border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
      <CardHeader>
        <CardTitle>{page.form.title}</CardTitle>
        <CardDescription>{page.form.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-4">
          <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <input type="hidden" name="topic" value={page.form.topic} />
          <AttributionFields />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor={`${id}-nombre`} className="text-slate-200">Nombre</Label>
              <Input
                id={`${id}-nombre`}
                name="nombre"
                autoComplete="name"
                placeholder="Tu nombre"
                required
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${id}-empresa`} className="text-slate-200">Empresa</Label>
              <Input
                id={`${id}-empresa`}
                name="empresa"
                autoComplete="organization"
                placeholder="Nombre de la empresa"
                required
                className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
              />
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`${id}-process`} className="text-slate-200">{page.form.processLabel}</Label>
            <select
              id={`${id}-process`}
              name="proceso_principal"
              required
              defaultValue=""
              className="h-11 rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none transition-colors focus:border-sky-200/40 focus:ring-2 focus:ring-sky-200/30"
            >
              <option value="" disabled>Selecciona una opción</option>
              {page.form.processOptions.map((option) => <option key={option} value={option}>{option}</option>)}
            </select>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor={`${id}-email`} className="text-slate-200">Correo</Label>
              <Input
                id={`${id}-email`}
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
              <Label htmlFor={`${id}-volume`} className="text-slate-200">{page.form.volumeLabel}</Label>
              <select
                id={`${id}-volume`}
                name="volumen_mensual"
                required
                defaultValue=""
                className="h-11 rounded-2xl border border-white/10 bg-white/[0.04] px-3 text-sm text-white outline-none transition-colors focus:border-sky-200/40 focus:ring-2 focus:ring-sky-200/30"
              >
                <option value="" disabled className="bg-[#0b1220] text-slate-300">
                  Selecciona una opcion
                </option>
                {page.form.volumeOptions.map((option) => (
                  <option key={option} value={option} className="bg-[#0b1220] text-white">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`${id}-message`} className="text-slate-200">Mensaje opcional</Label>
            <Textarea
              id={`${id}-message`}
              name="mensaje"
              autoComplete="off"
              placeholder="Si quieres, cuentanos brevemente el proceso, volumen o urgencia..."
              rows={4}
              className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-400"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="rounded-full border border-white/10 bg-white text-[#070b13] transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(0,0,0,0.18)] active:scale-[0.98]"
          >
            {loading ? "Enviando..." : page.form.submitLabel}
          </Button>
        </form>
        {leadId ? <LeadSuccess leadId={leadId} message="Te contactaremos para validar alcance, volumen y coordinar la demo." /> : null}
      </CardContent>
    </Card>
  );
}

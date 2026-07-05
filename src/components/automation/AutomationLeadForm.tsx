"use client";

import { useId, useState } from "react";
import type { AutomationPage } from "@/config/automation-pages";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { useAttribution } from "@/lib/attribution";
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
  const attribution = useAttribution();
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const id = useId();

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Automation Lead Form Start", { position: "automation_form", slug: page.slug, topic: page.form.topic });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const monthlyVolume = String(formData.get("volumen_mensual") || "").trim();
    const notes = String(formData.get("mensaje") || "").trim();

    if (!notes) {
      const generatedMessage = [
        `Lead desde landing ${page.form.topic}.`,
        monthlyVolume ? `${page.form.volumeLabel}: ${monthlyVolume}` : "",
        "Solicita demo comercial.",
      ]
        .filter(Boolean)
        .join("\n");

      formData.set("mensaje", generatedMessage);
    }

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
      track("Automation Lead Form Success", { position: "automation_form", slug: page.slug, topic: page.form.topic });
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
    <Card className="hover-lift rounded-[1.9rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_20px_60px_rgba(30,58,95,0.08)]">
      <CardHeader>
        <CardTitle>{page.form.title}</CardTitle>
        <CardDescription>{page.form.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-4">
          <input type="text" name="hp" className="hidden" />
          <input type="hidden" name="topic" value={page.form.topic} />

          <input type="hidden" name="ft_utm_source" value={attribution?.first.utm_source || ""} />
          <input type="hidden" name="ft_utm_medium" value={attribution?.first.utm_medium || ""} />
          <input type="hidden" name="ft_utm_campaign" value={attribution?.first.utm_campaign || ""} />
          <input type="hidden" name="ft_utm_term" value={attribution?.first.utm_term || ""} />
          <input type="hidden" name="ft_utm_content" value={attribution?.first.utm_content || ""} />
          <input type="hidden" name="ft_referrer" value={attribution?.first.referrer || ""} />
          <input type="hidden" name="ft_landing" value={attribution?.first.landing || ""} />
          <input type="hidden" name="ft_ts" value={attribution?.first.ts || ""} />

          <input type="hidden" name="lt_utm_source" value={attribution?.last.utm_source || ""} />
          <input type="hidden" name="lt_utm_medium" value={attribution?.last.utm_medium || ""} />
          <input type="hidden" name="lt_utm_campaign" value={attribution?.last.utm_campaign || ""} />
          <input type="hidden" name="lt_utm_term" value={attribution?.last.utm_term || ""} />
          <input type="hidden" name="lt_utm_content" value={attribution?.last.utm_content || ""} />
          <input type="hidden" name="lt_referrer" value={attribution?.last.referrer || ""} />
          <input type="hidden" name="lt_landing" value={attribution?.last.landing || ""} />
          <input type="hidden" name="lt_ts" value={attribution?.last.ts || ""} />

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor={`${id}-nombre`} className="text-slate-800">Nombre</Label>
              <Input
                id={`${id}-nombre`}
                name="nombre"
                autoComplete="name"
                placeholder="Tu nombre"
                required
                className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${id}-empresa`} className="text-slate-800">Empresa</Label>
              <Input
                id={`${id}-empresa`}
                name="empresa"
                autoComplete="organization"
                placeholder="Nombre de la empresa"
                required
                className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor={`${id}-email`} className="text-slate-800">Correo</Label>
              <Input
                id={`${id}-email`}
                name="email"
                type="email"
                autoComplete="email"
                inputMode="email"
                placeholder="tu@empresa.com"
                required
                className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
              />
            </div>

            <div className="grid gap-2">
              <Label htmlFor={`${id}-volume`} className="text-slate-800">{page.form.volumeLabel}</Label>
              <select
                id={`${id}-volume`}
                name="volumen_mensual"
                required
                defaultValue=""
                className="h-11 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-200/40 focus:ring-2 focus:ring-sky-200/30"
              >
                <option value="" disabled className="bg-white text-slate-600">
                  Selecciona una opcion
                </option>
                {page.form.volumeOptions.map((option) => (
                  <option key={option} value={option} className="bg-white text-slate-900">
                    {option}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`${id}-message`} className="text-slate-800">Mensaje opcional</Label>
            <Textarea
              id={`${id}-message`}
              name="mensaje"
              autoComplete="off"
              placeholder="Si quieres, cuentanos brevemente el proceso, volumen o urgencia..."
              rows={4}
              className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 transition-[transform,box-shadow] duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_rgba(167,199,255,0.18)] active:scale-[0.98]"
          >
            {loading ? "Enviando..." : page.form.submitLabel}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}

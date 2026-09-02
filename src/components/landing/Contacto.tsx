"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { COMPANY } from "@/config/site";
import { track } from "@/lib/analytics";
import { AttributionFields } from "@/components/forms/AttributionFields";
import { LeadSuccess } from "@/components/forms/LeadSuccess";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";
import { Mail, MapPin, MessageCircle } from "lucide-react";

export function Contacto() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);
  const [leadId, setLeadId] = useState("");

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Contact Form Start", { position: "contact_section" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLeadId("");
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const processType = String(formData.get("tipo_proceso") || "").trim();
    const currentMessage = String(formData.get("mensaje") || "").trim();

    const enrichedMessage = [
      processType ? `Tipo de proceso: ${processType}` : "",
      currentMessage,
    ]
      .filter(Boolean)
      .join("\n\n");

    formData.set("mensaje", enrichedMessage);

    let errorTracked = false;

    try {
      track("Contact Form Submit", { position: "contact_section" });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();

      if (!res.ok || !resData.ok) {
        track("Contact Form Error", {
          position: "contact_section",
          kind: res.status >= 400 && res.status < 500 ? "validation" : "server",
          status: res.status,
        });
        errorTracked = true;
        throw new Error(resData.error || "Error al enviar el mensaje.");
      }

      form.reset();
      setLeadId(resData.leadId || "sin-referencia");
      track("Contact Form Success", { position: "contact_section", lead_id: resData.leadId });
      toast({ title: "¡Mensaje enviado!", description: "Te responderemos muy pronto." });
    } catch (err: any) {
      if (!errorTracked) {
        track("Contact Form Error", {
          position: "contact_section",
          kind: "network_or_unknown",
        });
      }
      toast({
        title: "No pudimos enviar tu mensaje",
        description: err?.message ?? "Intenta nuevamente o escríbenos por WhatsApp",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contacto">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <p className="text-xs tracking-[0.22em] text-muted-foreground">CONTACTO</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-5xl">Coordina una sesion de descubrimiento</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-slate-600">
              Cuentanos el proceso, cuello de botella o problema operativo que quieres destrabar y te
              respondemos con el siguiente paso recomendado para tu caso y una forma concreta de seguir.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 transition hover:border-slate-900/10"
              >
                <div className="flex items-center gap-2 text-slate-900">
                  <Mail className="h-4 w-4 text-sky-700" />
                  Email
                </div>
                <div className="mt-2 underline underline-offset-4">{COMPANY.email}</div>
              </a>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 transition hover:border-slate-900/10 plausible-event-name=CTA+WhatsApp plausible-event-location=contact_section"
              >
                <div className="flex items-center gap-2 text-slate-900">
                  <MessageCircle className="h-4 w-4 text-emerald-700" />
                  WhatsApp
                </div>
                <div className="mt-2 underline underline-offset-4">{COMPANY.whatsapp}</div>
              </a>

              <div className="hover-lift rounded-[1.5rem] border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] p-4 text-sm text-slate-600 sm:col-span-2">
                <div className="flex items-center gap-2 text-slate-900">
                  <MapPin className="h-4 w-4 text-sky-700" />
                  Cobertura
                </div>
                <div className="mt-2">{COMPANY.location} · sesiones remotas para equipos de operaciones, backoffice y finanzas.</div>
              </div>
            </div>
          </div>

          <Card className="hover-lift rounded-[1.8rem] border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(246,250,254,1))] shadow-[0_20px_60px_rgba(30,58,95,0.08)]">
            <CardHeader>
              <CardTitle>Cuentanos que quieres destrabar</CardTitle>
              <CardDescription>Te respondemos con el siguiente paso recomendado y como coordinar la llamada.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-4">
                {/* Honeypot field for spam protection */}
                <input type="text" name="hp" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
                <input type="hidden" name="topic" value="Sesion de descubrimiento" />
                <AttributionFields />

                <div className="grid gap-2">
                  <Label htmlFor="nombre" className="text-slate-800">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    required
                    className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-800">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="tu@empresa.com"
                    spellCheck={false}
                    required
                    className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
                  />
                </div>

                <div className="grid gap-2 md:grid-cols-2 md:gap-4">
                  <div className="grid gap-2">
                  <Label htmlFor="empresa" className="text-slate-800">Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    autoComplete="organization"
                    placeholder="Nombre de la empresa"
                    className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
                  />
                  </div>

                  <div className="grid gap-2">
                    <Label htmlFor="cargo" className="text-slate-800">Cargo</Label>
                    <Input
                      id="cargo"
                      name="cargo"
                      autoComplete="organization-title"
                      placeholder="Ej. Operaciones, Finanzas, Backoffice"
                      className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="tipo_proceso" className="text-slate-800">Tipo de proceso</Label>
                  <select
                    id="tipo_proceso"
                    name="tipo_proceso"
                    defaultValue=""
                    className="h-11 rounded-2xl border border-slate-900/10 bg-white/[0.04] px-3 text-sm text-slate-900 outline-none transition-colors focus:border-sky-200/40 focus:ring-2 focus:ring-sky-200/30"
                  >
                    <option value="" className="bg-white text-slate-600">Selecciona una opcion (opcional)</option>
                    <option value="Backoffice y carga de datos" className="bg-white text-slate-900">Backoffice y carga de datos</option>
                    <option value="Documentos y OCR" className="bg-white text-slate-900">Documentos y OCR</option>
                    <option value="Aprobaciones y seguimiento" className="bg-white text-slate-900">Aprobaciones y seguimiento</option>
                    <option value="Reportes y consolidacion" className="bg-white text-slate-900">Reportes y consolidacion</option>
                    <option value="Soporte interno o atencion" className="bg-white text-slate-900">Soporte interno o atencion</option>
                    <option value="Otro" className="bg-white text-slate-900">Otro</option>
                  </select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mensaje" className="text-slate-800">¿Que proceso quieres destrabar?</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    autoComplete="off"
                    placeholder="Describe brevemente el proceso, area o cuello de botella que hoy te consume mas tiempo..."
                    rows={5}
                    required
                    className="rounded-2xl border-slate-900/10 bg-white/[0.04] text-slate-900 placeholder:text-slate-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-full border border-slate-900/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,247,255,0.94))] text-slate-950 shadow-[0_14px_34px_rgba(5,11,19,0.24)] plausible-event-name=CTA+Coordinar+Sesion plausible-event-location=contact_section"
                >
                  {loading ? "Enviando..." : "Coordinar sesion"}
                </Button>
              </form>
              {leadId ? <LeadSuccess leadId={leadId} message="Revisaremos el proceso y te responderemos con el siguiente paso recomendado." /> : null}
              <p className="mt-3 text-xs text-slate-600">
                Al enviar aceptas nuestra <Link href="/privacidad" className="underline hover:text-foreground">Política de Privacidad</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { COMPANY } from "@/config/site";
import { track } from "@/lib/analytics";
import { useAttribution } from "@/lib/attribution";
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
  const attribution = useAttribution();

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Contact Form Start", { position: "contact_section" });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // We can use FormData directly, the API handler supports it.
    // We don't need to convert it to a JSON object.

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
      track("Contact Form Success", { position: "contact_section" });
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
            <h2 className="mt-3 text-3xl font-semibold text-white md:text-5xl">Conversemos</h2>
            <p className="mt-3 max-w-xl leading-relaxed text-slate-300">
              Cuéntanos tu caso y te proponemos un roadmap con quick wins medibles, prioridades claras
              y una primera recomendación de arquitectura.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="hover-lift rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.88),rgba(10,16,25,0.96))] p-4 text-sm text-slate-300 transition hover:border-white/14"
              >
                <div className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4 text-sky-200" />
                  Email
                </div>
                <div className="mt-2 underline underline-offset-4">{COMPANY.email}</div>
              </a>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="hover-lift rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.88),rgba(10,16,25,0.96))] p-4 text-sm text-slate-300 transition hover:border-white/14 plausible-event-name=CTA+WhatsApp plausible-event-location=contact_section"
              >
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="h-4 w-4 text-emerald-200" />
                  WhatsApp
                </div>
                <div className="mt-2 underline underline-offset-4">{COMPANY.whatsapp}</div>
              </a>

              <div className="hover-lift rounded-[1.5rem] border border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.88),rgba(10,16,25,0.96))] p-4 text-sm text-slate-300 sm:col-span-2">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-amber-100" />
                  Operamos
                </div>
                <div className="mt-2">{COMPANY.location}</div>
              </div>
            </div>
          </div>

          <Card className="hover-lift rounded-[1.8rem] border-white/10 bg-[linear-gradient(180deg,rgba(17,24,37,0.9),rgba(10,16,25,0.98))] shadow-[0_20px_60px_rgba(0,0,0,0.14)]">
            <CardHeader>
              <CardTitle>Escríbenos</CardTitle>
              <CardDescription>Te respondemos con el siguiente paso recomendado para tu caso.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-4">
                {/* Honeypot field for spam protection */}
                <input type="text" name="hp" className="hidden" />

                {/* Attribution (first touch / last touch) */}
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

                <div className="grid gap-2">
                  <Label htmlFor="nombre" className="text-slate-200">Nombre</Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    autoComplete="name"
                    placeholder="Tu nombre"
                    required
                    className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-slate-200">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    inputMode="email"
                    placeholder="tu@empresa.com"
                    spellCheck={false}
                    required
                    className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="empresa" className="text-slate-200">Empresa</Label>
                  <Input
                    id="empresa"
                    name="empresa"
                    autoComplete="organization"
                    placeholder="Nombre de la empresa"
                    className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="mensaje" className="text-slate-200">¿Qué necesitas resolver?</Label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    autoComplete="off"
                    placeholder="Describe brevemente el proceso, equipo o problema que quieres mejorar..."
                    rows={5}
                    required
                    className="rounded-2xl border-white/10 bg-white/[0.04] text-white placeholder:text-slate-500"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(223,234,255,0.92))] text-slate-950 plausible-event-name=CTA+Enviar+Contacto plausible-event-location=contact_section"
                >
                  {loading ? "Enviando…" : "Enviar Mensaje"}
                </Button>
              </form>
              <p className="mt-3 text-xs text-slate-400">
                Al enviar aceptas nuestra <Link href="/privacidad" className="underline hover:text-foreground">Política de Privacidad</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

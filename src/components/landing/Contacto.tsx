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
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";
import { Mail, MapPin, MessageCircle } from "lucide-react";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

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
            <h2 className={`mt-3 text-3xl font-semibold md:text-5xl ${gradientText}`}>Conversemos</h2>
            <p className="mt-3 text-muted-foreground">
              Cuéntanos tu caso y te proponemos un roadmap con quick wins medibles.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <a
                href={`mailto:${COMPANY.email}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground backdrop-blur transition hover:border-white/15 hover:bg-white/[0.06]"
              >
                <div className="flex items-center gap-2 text-white">
                  <Mail className="h-4 w-4 text-cyan-200" />
                  Email
                </div>
                <div className="mt-2 underline underline-offset-4">{COMPANY.email}</div>
              </a>

              <a
                href={COMPANY.whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground backdrop-blur transition hover:border-white/15 hover:bg-white/[0.06] plausible-event-name=CTA+WhatsApp plausible-event-location=contact_section"
              >
                <div className="flex items-center gap-2 text-white">
                  <MessageCircle className="h-4 w-4 text-emerald-200" />
                  WhatsApp
                </div>
                <div className="mt-2 underline underline-offset-4">{COMPANY.whatsapp}</div>
              </a>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-muted-foreground backdrop-blur sm:col-span-2">
                <div className="flex items-center gap-2 text-white">
                  <MapPin className="h-4 w-4 text-fuchsia-200" />
                  Operamos
                </div>
                <div className="mt-2">{COMPANY.location}</div>
              </div>
            </div>
          </div>

          <Card className="border-white/10 bg-white/5 backdrop-blur">
            <CardHeader>
              <CardTitle>Escríbenos</CardTitle>
              <CardDescription>Te responderemos muy pronto.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-3">
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

                <Input name="nombre" placeholder="Tu nombre" required />
                <Input name="email" type="email" placeholder="Tu email" required />
                <Input name="empresa" placeholder="Empresa" />
                <Textarea name="mensaje" placeholder="Cuéntanos brevemente qué necesitas" rows={5} required />
                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white plausible-event-name=CTA+Enviar+Contacto plausible-event-location=contact_section"
                >
                  {loading ? "Enviando…" : "Enviar"}
                </Button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                Al enviar aceptas nuestra <Link href="/privacidad" className="underline hover:text-foreground">Política de Privacidad</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

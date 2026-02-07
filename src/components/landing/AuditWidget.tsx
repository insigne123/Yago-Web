"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { COMPANY } from "@/config/site";
import { useToast } from "@/hooks/use-toast";
import { track } from "@/lib/analytics";
import { useAttribution } from "@/lib/attribution";
import { useIsMobile } from "@/hooks/use-mobile";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { ArrowRight, Sparkles, X } from "lucide-react";

const NUDGE_KEY = "yago_audit_nudge_until_v1";

function getUntil() {
  if (typeof window === "undefined") return 0;
  const raw = window.localStorage.getItem(NUDGE_KEY) || "0";
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) ? n : 0;
}

function setUntil(msFromNow: number) {
  if (typeof window === "undefined") return;
  const until = Date.now() + msFromNow;
  window.localStorage.setItem(NUDGE_KEY, String(until));
}

function isSuppressed() {
  return getUntil() > Date.now();
}

const MS_DAY = 24 * 60 * 60 * 1000;

function buildWhatsAppHref() {
  const base = COMPANY.whatsappLink;
  const msg =
    "Hola YAGO, quiero un analisis de oportunidades de automatizacion y ahorro de horas-hombre. ¿Me ayudan?";
  return `${base}?text=${encodeURIComponent(msg)}`;
}

export function AuditWidget() {
  const pathname = usePathname();
  const isMobile = useIsMobile();
  const { toast } = useToast();
  const attribution = useAttribution();

  const [open, setOpen] = React.useState(false);
  const [showNudge, setShowNudge] = React.useState(false);
  const [nudgeSeenTracked, setNudgeSeenTracked] = React.useState(false);

  const [loading, setLoading] = React.useState(false);
  const [started, setStarted] = React.useState(false);

  const waHref = React.useMemo(() => buildWhatsAppHref(), []);

  const hiddenAttribution = React.useMemo(() => {
    const ft = attribution?.first;
    const lt = attribution?.last;
    return {
      ft_utm_source: ft?.utm_source || "",
      ft_utm_medium: ft?.utm_medium || "",
      ft_utm_campaign: ft?.utm_campaign || "",
      ft_utm_term: ft?.utm_term || "",
      ft_utm_content: ft?.utm_content || "",
      ft_referrer: ft?.referrer || "",
      ft_landing: ft?.landing || "",
      ft_ts: ft?.ts || "",

      lt_utm_source: lt?.utm_source || "",
      lt_utm_medium: lt?.utm_medium || "",
      lt_utm_campaign: lt?.utm_campaign || "",
      lt_utm_term: lt?.utm_term || "",
      lt_utm_content: lt?.utm_content || "",
      lt_referrer: lt?.referrer || "",
      lt_landing: lt?.landing || "",
      lt_ts: lt?.ts || "",
    };
  }, [attribution]);

  const disableOnThisPage = pathname === "/privacidad";

  React.useEffect(() => {
    if (disableOnThisPage) return;
    if (open) return;
    if (isSuppressed()) return;

    const t = window.setTimeout(() => {
      setShowNudge(true);
    }, 1200);

    return () => window.clearTimeout(t);
  }, [disableOnThisPage, open, pathname]);

  React.useEffect(() => {
    if (!showNudge) return;
    if (nudgeSeenTracked) return;
    setNudgeSeenTracked(true);
    track("Audit Nudge View", { location: "nudge", page: pathname });
  }, [showNudge, nudgeSeenTracked, pathname]);

  function dismissNudge(reason: "close" | "open" | "success") {
    setShowNudge(false);
    if (reason === "success") {
      setUntil(30 * MS_DAY);
      return;
    }
    if (reason === "open") {
      setUntil(14 * MS_DAY);
      return;
    }
    setUntil(7 * MS_DAY);
  }

  function openSheet(from: "nudge" | "floating") {
    track("Audit Widget Open", { location: from, page: pathname });
    dismissNudge("open");
    setOpen(true);
  }

  function markStart() {
    if (started) return;
    setStarted(true);
    track("Audit Form Start", { location: "sheet", page: pathname });
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("nombre") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const company = String(formData.get("empresa") || "").trim();
    const process = String(formData.get("audit_process") || "").trim();
    const tools = String(formData.get("audit_tools") || "").trim();
    const hours = String(formData.get("audit_hours_week") || "").trim();

    const msg = [
      "Solicitud: Analisis de oportunidades de automatizacion y ahorro HH",
      "",
      `Proceso: ${process || "-"}`,
      `Horas/semana (aprox): ${hours || "-"}`,
      `Herramientas: ${tools || "-"}`,
      "",
      "Origen: Audit widget",
    ].join("\n");

    formData.set("topic", "Analisis automatizacion");
    formData.set("mensaje", msg);
    if (company) formData.set("empresa", company);
    if (name) formData.set("nombre", name);
    if (email) formData.set("email", email);

    let errorTracked = false;

    try {
      track("Audit Form Submit", { location: "sheet", page: pathname });

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const resData = await res.json();

      if (!res.ok || !resData.ok) {
        track("Audit Form Error", {
          location: "sheet",
          page: pathname,
          kind: res.status >= 400 && res.status < 500 ? "validation" : "server",
          status: res.status,
        });
        errorTracked = true;
        throw new Error(resData.error || "Error al enviar el mensaje.");
      }

      form.reset();
      track("Audit Form Success", { location: "sheet", page: pathname });
      toast({
        title: "Listo.",
        description: "Te contactaremos con un analisis de oportunidades y ahorro HH.",
      });
      dismissNudge("success");
      setOpen(false);
    } catch (err: any) {
      if (!errorTracked) {
        track("Audit Form Error", {
          location: "sheet",
          page: pathname,
          kind: "network_or_unknown",
        });
      }
      toast({
        title: "No pudimos enviar tu solicitud",
        description: err?.message ?? "Intenta nuevamente o escribenos por WhatsApp",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  if (disableOnThisPage) return null;

  return (
    <div className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-3">
      {showNudge && (
        <div className="w-[min(420px,calc(100vw-40px))] overflow-hidden rounded-3xl border border-white/15 bg-white/5 backdrop-blur shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-in fade-in-0 slide-in-from-bottom-4 duration-500">
          <div className="h-px w-full bg-gradient-to-r from-fuchsia-500/60 via-cyan-400/60 to-emerald-400/60" />

          <div className="p-5">
            <div className="flex items-start justify-between gap-3">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1 text-[11px] text-foreground/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                  Diagnostico sin costo
                </div>
                <div className="mt-3 text-lg font-semibold leading-tight">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-400 via-cyan-300 to-emerald-300">
                    Analisis de automatizacion
                  </span>
                  <span className="text-white"> + ahorro HH</span>
                </div>

                <div className="mt-2 text-sm text-muted-foreground">
                  En 48h te enviamos oportunidades y quick wins con estimacion de horas-hombre.
                </div>

                <div className="mt-3 flex flex-wrap gap-2 text-xs">
                  {[
                    "Quick wins",
                    "Integraciones",
                    "Estimacion HH",
                    "Roadmap",
                  ].map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-foreground/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  track("Audit Nudge Dismiss", { location: "nudge", page: pathname });
                  dismissNudge("close");
                }}
                className="rounded-xl border border-white/10 bg-black/20 p-2 text-foreground/70 transition hover:text-foreground"
                aria-label="Cerrar"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              <Button
                type="button"
                onClick={() => {
                  track("Audit Nudge Click", { location: "nudge", page: pathname });
                  openSheet("nudge");
                }}
                className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white"
              >
                Pedir analisis
                <ArrowRight className="h-4 w-4" />
              </Button>

              <Button asChild variant="ghost" className="border border-white/15 bg-black/10">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noreferrer"
                  onClick={() =>
                    track("Audit Nudge WhatsApp", { location: "nudge", page: pathname })
                  }
                >
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <div className="rounded-full bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 p-[1px] shadow-[0_18px_55px_rgba(0,0,0,0.45)]">
            <button
              type="button"
              onClick={() => openSheet("floating")}
              className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/55 px-4 py-3 backdrop-blur transition hover:bg-black/45"
              aria-label="Pedir analisis de automatizacion"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/10">
                <Sparkles className="h-4 w-4" />
              </span>
              <span className="text-left">
                <span className="block text-sm font-semibold text-white">Analisis de automatizacion</span>
                <span className="block text-xs text-foreground/75">Oportunidades + ahorro HH</span>
              </span>
            </button>
          </div>
        </SheetTrigger>

        <SheetContent
          side={isMobile ? "bottom" : "right"}
          className="w-[92vw] border-white/10 bg-black/70 backdrop-blur sm:max-w-[460px]"
        >
          <SheetHeader>
            <SheetTitle className="text-white">Analisis de automatizacion</SheetTitle>
            <SheetDescription>
              En 48h te enviamos oportunidades y una estimacion de ahorro de horas-hombre.
            </SheetDescription>
          </SheetHeader>

          <div className="mt-6">
            <form onSubmit={onSubmit} onFocusCapture={markStart} className="grid gap-3">
              {/* Honeypot */}
              <input type="text" name="hp" className="hidden" />

              {/* Attribution */}
              <input type="hidden" name="ft_utm_source" value={hiddenAttribution.ft_utm_source} />
              <input type="hidden" name="ft_utm_medium" value={hiddenAttribution.ft_utm_medium} />
              <input type="hidden" name="ft_utm_campaign" value={hiddenAttribution.ft_utm_campaign} />
              <input type="hidden" name="ft_utm_term" value={hiddenAttribution.ft_utm_term} />
              <input type="hidden" name="ft_utm_content" value={hiddenAttribution.ft_utm_content} />
              <input type="hidden" name="ft_referrer" value={hiddenAttribution.ft_referrer} />
              <input type="hidden" name="ft_landing" value={hiddenAttribution.ft_landing} />
              <input type="hidden" name="ft_ts" value={hiddenAttribution.ft_ts} />

              <input type="hidden" name="lt_utm_source" value={hiddenAttribution.lt_utm_source} />
              <input type="hidden" name="lt_utm_medium" value={hiddenAttribution.lt_utm_medium} />
              <input type="hidden" name="lt_utm_campaign" value={hiddenAttribution.lt_utm_campaign} />
              <input type="hidden" name="lt_utm_term" value={hiddenAttribution.lt_utm_term} />
              <input type="hidden" name="lt_utm_content" value={hiddenAttribution.lt_utm_content} />
              <input type="hidden" name="lt_referrer" value={hiddenAttribution.lt_referrer} />
              <input type="hidden" name="lt_landing" value={hiddenAttribution.lt_landing} />
              <input type="hidden" name="lt_ts" value={hiddenAttribution.lt_ts} />

              <Input
                name="nombre"
                placeholder="Tu nombre"
                required
                className="border-white/10 bg-white/5"
              />
              <Input
                name="email"
                type="email"
                placeholder="Tu email"
                required
                className="border-white/10 bg-white/5"
              />
              <Input
                name="empresa"
                placeholder="Empresa (opcional)"
                className="border-white/10 bg-white/5"
              />

              <Textarea
                name="audit_process"
                placeholder="Describe el proceso a automatizar (2-3 lineas)"
                rows={4}
                required
                className="border-white/10 bg-white/5"
              />

              <div className="grid gap-3 sm:grid-cols-2">
                <Input
                  name="audit_hours_week"
                  inputMode="numeric"
                  placeholder="Horas/semana (aprox)"
                  className="border-white/10 bg-white/5"
                />
                <Input
                  name="audit_tools"
                  placeholder="Herramientas (ej: Excel, ERP, WhatsApp)"
                  className="border-white/10 bg-white/5"
                />
              </div>

              <Button
                type="submit"
                disabled={loading}
                className="mt-1 bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white"
              >
                {loading ? "Enviando..." : "Enviar para analisis"}
              </Button>

              <div className="mt-2 flex flex-col gap-2 text-xs text-muted-foreground">
                <div>
                  Alternativa rapida:{" "}
                  <a
                    href={waHref}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-foreground"
                    onClick={() => track("Audit Widget WhatsApp", { location: "sheet", page: pathname })}
                  >
                    WhatsApp
                  </a>
                </div>
                <div>
                  Al enviar aceptas nuestra{" "}
                  <Link href="/privacidad" className="underline underline-offset-4 hover:text-foreground">
                    Politica de Privacidad
                  </Link>
                  .
                </div>
              </div>
            </form>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

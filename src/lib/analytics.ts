"use client";

import { GOOGLE_ANALYTICS_ID, GOOGLE_ANALYTICS_OPT_OUT_KEY } from "@/config/analytics";

export type AnalyticsProps = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const LEAD_FORMS: Record<string, string> = {
  "Contact Form Success": "contact",
  "OCR Lead Form Success": "ocr",
  "Automation Lead Form Success": "automation",
  "Audit Form Success": "audit",
  "Service Lead Form Success": "service",
};

const GOOGLE_PROPS = new Set(["position", "service", "slug", "location", "section", "method", "kind", "status", "topic"]);

function googleAnalyticsDisabled() {
  if ((window as unknown as Record<string, unknown>)[`ga-disable-${GOOGLE_ANALYTICS_ID}`] === true) return true;
  try { return window.localStorage.getItem(GOOGLE_ANALYTICS_OPT_OUT_KEY) === "1"; } catch { return false; }
}

export function track(eventName: string, props?: AnalyticsProps) {
  if (typeof window === "undefined") return;

  const plausible = (window as any).plausible;
  if (typeof plausible === "function") {
    if (props && Object.keys(props).length > 0) plausible(eventName, { props });
    else plausible(eventName);
  }

  if (typeof window.gtag !== "function" || googleAnalyticsDisabled()) return;
  const form = LEAD_FORMS[eventName];
  const normalized = eventName.toLowerCase().replace(/[^a-z0-9_]+/g, "_").replace(/^_+|_+$/g, "");
  const googleEvent = form ? "generate_lead" : (/^[a-z]/.test(normalized) ? normalized : `yago_${normalized}`).slice(0, 40);
  const parameters = Object.fromEntries(Object.entries(props || {}).filter(([key, value]) => GOOGLE_PROPS.has(key) && value !== null && value !== undefined));
  if (form) parameters.form_type = form;
  if (!parameters.service && parameters.slug) parameters.service = parameters.slug;
  if (!parameters.service && eventName.startsWith("OCR Lead Form")) parameters.service = "ocr";
  window.gtag("event", googleEvent, parameters);
}

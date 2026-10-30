"use client";

import { useEffect, useState } from "react";
import { GOOGLE_ANALYTICS_ID, GOOGLE_ANALYTICS_OPT_OUT_KEY } from "@/config/analytics";

export function AnalyticsPreference() {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    try { setDisabled(window.localStorage.getItem(GOOGLE_ANALYTICS_OPT_OUT_KEY) === "1"); } catch { /* La preferencia sigue disponible para esta sesión. */ }
  }, []);

  if (!GOOGLE_ANALYTICS_ID) return null;

  function toggle() {
    const next = !disabled;
    (window as unknown as Record<string, unknown>)[`ga-disable-${GOOGLE_ANALYTICS_ID}`] = next;
    try { window.localStorage.setItem(GOOGLE_ANALYTICS_OPT_OUT_KEY, next ? "1" : "0"); } catch { /* Sin almacenamiento, se aplica durante esta sesión. */ }
    setDisabled(next);
  }

  return (
    <div className="mt-5 space-y-3">
      <p>Google Analytics está {disabled ? "desactivado" : "habilitado"} para este navegador. La preferencia se aplica a la medición de YAGO en Google Analytics.</p>
      <button type="button" aria-pressed={disabled} onClick={toggle} className="rounded-full border border-sky-700 px-5 py-2.5 text-sm font-medium text-sky-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2">
        {disabled ? "Reactivar Google Analytics" : "Desactivar Google Analytics"}
      </button>
    </div>
  );
}

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/config/site";

type LeadSuccessProps = {
  leadId: string;
  message: string;
  /** "dark" para formularios sobre fondo oscuro, "light" para tarjetas blancas. */
  tone?: "dark" | "light";
};

export function LeadSuccess({ leadId, message, tone = "dark" }: LeadSuccessProps) {
  const light = tone === "light";

  return (
    <div
      className={`mt-4 rounded-2xl border p-4 text-sm ${
        light ? "border-emerald-200 bg-emerald-50 text-emerald-900" : "border-sky-300/30 bg-sky-400/10 text-white"
      }`}
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2 font-semibold">
        <CheckCircle2 className="size-4" aria-hidden="true" />
        Solicitud recibida
      </div>
      <p className="mt-2 leading-relaxed">{message}</p>
      <p className={`mt-2 text-xs ${light ? "text-emerald-800" : "text-sky-200"}`}>Referencia: {leadId}</p>
      {COMPANY.bookingLink ? (
        <a
          href={COMPANY.bookingLink}
          target="_blank"
          rel="noreferrer"
          className={`mt-4 inline-flex items-center gap-2 rounded-full px-4 py-2 font-semibold ${
            light ? "bg-slate-950 text-white" : "bg-white text-[#070b13]"
          }`}
        >
          Elegir horario
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

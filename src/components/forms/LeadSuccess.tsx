import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/config/site";

export function LeadSuccess({ leadId, message }: { leadId: string; message: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-emerald-300/50 bg-emerald-50 p-4 text-sm text-emerald-950" role="status" aria-live="polite">
      <div className="flex items-center gap-2 font-semibold">
        <CheckCircle2 className="size-4" aria-hidden="true" />
        Solicitud recibida
      </div>
      <p className="mt-2 leading-relaxed">{message}</p>
      <p className="mt-2 text-xs text-emerald-800">Referencia: {leadId}</p>
      {COMPANY.bookingLink ? (
        <a href={COMPANY.bookingLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-950 px-4 py-2 font-semibold text-white">
          Elegir horario
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

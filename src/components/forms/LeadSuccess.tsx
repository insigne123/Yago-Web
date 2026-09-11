import { ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY } from "@/config/site";

export function LeadSuccess({ leadId, message }: { leadId: string; message: string }) {
  return (
    <div className="mt-4 rounded-2xl border border-sky-300/30 bg-sky-400/10 p-4 text-sm text-white" role="status" aria-live="polite">
      <div className="flex items-center gap-2 font-semibold">
        <CheckCircle2 className="size-4" aria-hidden="true" />
        Solicitud recibida
      </div>
      <p className="mt-2 leading-relaxed">{message}</p>
      <p className="mt-2 text-xs text-sky-200">Referencia: {leadId}</p>
      {COMPANY.bookingLink ? (
        <a href={COMPANY.bookingLink} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 font-semibold text-[#070b13]">
          Elegir horario
          <ArrowRight className="size-4" aria-hidden="true" />
        </a>
      ) : null}
    </div>
  );
}

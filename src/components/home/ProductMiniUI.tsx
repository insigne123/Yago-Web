import { ArrowRight } from "lucide-react";

/* Maquetas pequeñas que muestran cada producto en uso (datos de ejemplo). */

export function SadtMini() {
  const rows = [
    { name: "Contrato #4821", status: "Registrado", tone: "y-status-ok" },
    { name: "F30-1 · Obra Norte", status: "PDF listo", tone: "y-status-ok" },
    { name: "Desvinculación #4822", status: "Reprocesar", tone: "y-status-warn" },
  ];
  return (
    <div className="y-card w-full overflow-hidden text-slate-900">
      <div className="flex items-baseline justify-between gap-3 border-b border-slate-100 px-4 py-3">
        <span className="text-[13px] font-semibold">Cola Portal DT</span>
        <span className="font-mono text-[11px] text-slate-500">142 hoy</span>
      </div>
      {rows.map((row, index) => (
        <div key={row.name} className={`flex items-center justify-between gap-3 px-4 py-2.5 text-[13px] ${index ? "border-t border-slate-100" : ""}`}>
          <span>{row.name}</span>
          <span className={`y-status ${row.tone}`}>{row.status}</span>
        </div>
      ))}
    </div>
  );
}

export function AxisMini() {
  return (
    <div className="y-card flex w-full flex-col gap-3.5 p-4 text-slate-900">
      <div className="flex items-baseline justify-between gap-3">
        <span className="text-[13px] font-semibold">Lote 214 · 350 personas</span>
        <span className="font-mono text-[11px] text-slate-500">~1 min c/u</span>
      </div>
      <div className="flex h-2.5 gap-[3px]" aria-hidden="true">
        <span className="rounded-l-full bg-emerald-500" style={{ flex: 331 }} />
        <span className="min-w-[8px] bg-amber-400" style={{ flex: 12 }} />
        <span className="min-w-[6px] rounded-r-full bg-slate-300" style={{ flex: 7 }} />
      </div>
      <dl className="grid gap-1.5 text-[13px] text-slate-600">
        {[
          { label: "Sin hallazgo", value: "331", dot: "bg-emerald-500" },
          { label: "Con hallazgo", value: "12", dot: "bg-amber-400" },
          { label: "Pendiente", value: "7", dot: "bg-slate-300" },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${item.dot}`} aria-hidden="true" />
            <dt className="flex-1">{item.label}</dt>
            <dd className="font-mono text-xs tabular-nums text-slate-900">{item.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

export function OcrMini() {
  return (
    <div className="flex w-full items-center gap-3">
      <div
        aria-hidden="true"
        className="y-card flex h-[8.5rem] w-24 shrink-0 -rotate-[4deg] flex-col gap-2 rounded-lg px-2.5 py-3"
      >
        <span className="font-mono text-[10px] font-medium text-slate-900">FC-20481</span>
        <span className="h-1.5 w-4/5 rounded bg-sky-200" />
        <span className="h-1.5 w-3/5 rounded bg-slate-200" />
        <span className="h-1.5 w-11/12 rounded bg-slate-200" />
        <span className="h-1.5 w-2/3 rounded bg-slate-200" />
        <span className="mt-auto h-1.5 w-1/2 self-end rounded bg-sky-200" />
      </div>
      <ArrowRight className="h-5 w-5 shrink-0 text-sky-600" aria-hidden="true" />
      <dl className="y-card flex min-w-0 flex-1 flex-col gap-2 p-3.5 text-slate-900">
        {[
          { label: "Proveedor", value: "Transporte Andino", mono: false },
          { label: "Monto total", value: "CLP 1.248.000", mono: true },
          { label: "Fecha de emisión", value: "08/04/2026", mono: true },
        ].map((field) => (
          <div key={field.label} className="flex flex-col">
            <dt className="text-[11px] text-slate-500">{field.label}</dt>
            <dd className={`truncate text-[13px] font-medium ${field.mono ? "font-mono text-[12.5px]" : ""}`}>{field.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

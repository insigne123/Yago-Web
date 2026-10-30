import { Check, Download, RefreshCw, Send } from "lucide-react";
import { LiveNumber } from "@/components/motion/Numbers";

/* Paneles ilustrativos del producto para el hero (datos de ejemplo, no de clientes). */

function PanelFrame({
  badge,
  title,
  tabs,
  children,
  footer,
}: {
  badge: string;
  title: string;
  tabs: string[];
  children: React.ReactNode;
  footer: React.ReactNode;
}) {
  return (
    <div className="overflow-hidden rounded-[1.5rem] bg-white text-slate-900 shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_50px_100px_-40px_rgba(15,23,42,0.45)]">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-3.5">
        <span className="flex items-center gap-2.5 text-[13.5px] font-semibold">
          <span className="rounded-md bg-slate-950 px-1.5 py-0.5 font-mono text-[11px] font-medium text-white">{badge}</span>
          {title}
        </span>
        <span className="flex gap-1" aria-hidden="true">
          {tabs.map((tab, index) => (
            <span
              key={tab}
              className={`rounded-lg px-2.5 py-1 text-[12.5px] ${index === 0 ? "bg-slate-100 font-medium text-slate-900" : "text-slate-500"}`}
            >
              {tab}
            </span>
          ))}
        </span>
      </div>
      {children}
      <div className="mt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-5 py-3.5">{footer}</div>
    </div>
  );
}

function Kpis({ items }: { items: { label: string; value: string; warn?: boolean; live?: boolean }[] }) {
  return (
    <dl className="grid grid-cols-3 gap-2.5 p-4 sm:p-5">
      {items.map((kpi) => (
        <div
          key={kpi.label}
          className={`flex flex-col gap-1 rounded-xl p-3 ${
            kpi.warn ? "bg-amber-50 shadow-[inset_0_0_0_1px_#fde68a]" : "bg-slate-50 shadow-[inset_0_0_0_1px_#e2e8f0]"
          }`}
        >
          <dt className={`text-[11.5px] ${kpi.warn ? "text-amber-800" : "text-slate-500"}`}>{kpi.label}</dt>
          <dd className={`text-[1.4rem] font-semibold tabular-nums tracking-[-0.02em] ${kpi.warn ? "text-amber-800" : ""}`}>
            {kpi.live ? <LiveNumber value={kpi.value} /> : kpi.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function SadtPanel() {
  const rows = [
    { id: "#4821", type: "Contrato", status: "Registrado", tone: "y-status-ok", evidence: "Folio 88231" },
    { id: "#4820", type: "Certificado F30-1", status: "PDF descargado", tone: "y-status-ok", evidence: "f30-1_obra_norte.pdf" },
    { id: "#4822", type: "Desvinculación", status: "RUT inválido", tone: "y-status-warn", evidence: "fix" },
    { id: "#4819", type: "Contrato", status: "Registrado", tone: "y-status-ok", evidence: "Folio 88229" },
    { id: "#4818", type: "Desvinculación", status: "En cola", tone: "y-status-wait", evidence: "—" },
  ];

  return (
    <PanelFrame
      badge="SADT"
      title="Panel operativo"
      tabs={["Ejecuciones", "Errores", "Evidencia"]}
      footer={
        <>
          <span className="font-mono text-xs text-slate-500">nomina_septiembre.xlsx · 1.200 registros</span>
          <span className="inline-flex h-8 items-center rounded-lg bg-slate-950 px-3 text-[12.5px] font-semibold text-white">
            Reprocesar selección
          </span>
        </>
      }
    >
      <Kpis
        items={[
          { label: "Procesados hoy", value: "1.142", live: true },
          { label: "En cola", value: "58" },
          { label: "Por revisar", value: "3", warn: true },
        ]}
      />
      <div className="overflow-x-auto px-4 sm:px-5" tabIndex={0} role="region" aria-label="Tabla de ejemplo del panel SADT">
        <table className="w-full min-w-[30rem] border-collapse text-[13px]">
          <thead>
            <tr className="text-left font-mono text-[10.5px] uppercase tracking-[0.06em] text-slate-500">
              <th scope="col" className="rounded-l-lg bg-slate-50 px-3 py-2 font-normal">Registro</th>
              <th scope="col" className="bg-slate-50 px-3 py-2 font-normal">Tipo</th>
              <th scope="col" className="bg-slate-50 px-3 py-2 font-normal">Estado</th>
              <th scope="col" className="rounded-r-lg bg-slate-50 px-3 py-2 font-normal">Evidencia</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className={`border-b border-slate-100 last:border-0 ${row.evidence === "fix" ? "bg-amber-50/40" : ""}`}>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-xs">{row.id}</td>
                <td className="whitespace-nowrap px-3 py-3">{row.type}</td>
                <td className="whitespace-nowrap px-3 py-3">
                  <span className={`y-status ${row.tone}`}>{row.status}</span>
                </td>
                <td className="whitespace-nowrap px-3 py-3 font-mono text-xs text-slate-600">
                  {row.evidence === "fix" ? (
                    <span className="inline-flex items-center gap-1.5 font-sans text-[12.5px] font-semibold text-sky-700">
                      <RefreshCw className="h-3.5 w-3.5" aria-hidden="true" />
                      Corregir y reprocesar
                    </span>
                  ) : (
                    row.evidence
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PanelFrame>
  );
}

export function AxisPanel() {
  const rows = [
    { who: "Postulante #1042", detail: "Resultado en 52 s · evidencia guardada", status: "Sin hallazgo", tone: "y-status-ok" },
    { who: "Postulante #1043", detail: "1 causa pública · ver detalle", status: "Con hallazgo", tone: "y-status-warn" },
    { who: "Postulante #1044", detail: "Resultado en 61 s · evidencia guardada", status: "Sin hallazgo", tone: "y-status-ok" },
    { who: "Guardia #0871", detail: "Monitoreo diario · sin cambios", status: "En seguimiento", tone: "y-status-run" },
    { who: "Postulante #1045", detail: "Verificando en PJUD", status: "Pendiente", tone: "y-status-wait" },
  ];

  return (
    <PanelFrame
      badge="AXIS"
      title="Consultas PJUD"
      tabs={["Lotes", "Personas", "Monitoreo"]}
      footer={
        <>
          <span className="font-mono text-xs text-slate-500">lote_septiembre.csv · 350 personas</span>
          <span className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-slate-950 px-3 text-[12.5px] font-semibold text-white">
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            Descargar reporte
          </span>
        </>
      }
    >
      <Kpis
        items={[
          { label: "Revisadas hoy", value: "350", live: true },
          { label: "En monitoreo", value: "86" },
          { label: "Con hallazgo", value: "12", warn: true },
        ]}
      />
      <ul className="px-4 sm:px-5">
        {rows.map((row) => (
          <li key={row.who} className="flex items-center gap-3 border-b border-slate-100 py-3 last:border-0">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-slate-100 font-mono text-[10.5px] text-slate-600" aria-hidden="true">
              {row.who.split("#")[1]?.slice(-2)}
            </span>
            <span className="flex min-w-0 flex-1 flex-col">
              <span className="truncate text-[13.5px] font-medium">{row.who}</span>
              <span className="truncate text-[12.5px] text-slate-500">{row.detail}</span>
            </span>
            <span className={`y-status ${row.tone}`}>{row.status}</span>
          </li>
        ))}
      </ul>
    </PanelFrame>
  );
}

export function OcrPanel({
  fields,
  targets,
}: {
  fields: { label: string; value: string }[];
  targets: string[];
}) {
  const [provider, folio, amount, date] = fields.map((field) => field.value);

  return (
    <PanelFrame
      badge="OCR"
      title="Lectura de documentos"
      tabs={["Documentos", "Campos", "Exportar"]}
      footer={
        <>
          <span className="font-mono text-xs text-slate-500">factura_{folio ?? "FC-20481"}.pdf · 1 página</span>
          <span className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-slate-950 px-3 text-[12.5px] font-semibold text-white">
            <Send className="h-3.5 w-3.5" aria-hidden="true" />
            Enviar a ERP
          </span>
        </>
      }
    >
      <Kpis
        items={[
          { label: "Documentos hoy", value: "412", live: true },
          { label: "Campos leídos", value: "3.296" },
          { label: "Por revisar", value: "5", warn: true },
        ]}
      />
      <div className="grid grid-cols-1 gap-4 px-4 pb-3 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:px-5">
        {/* Documento escaneado (decorativo) */}
        <div aria-hidden="true" className="rounded-xl bg-slate-50 p-3 shadow-[inset_0_0_0_1px_#e2e8f0]">
          <div className="flex -rotate-[1.2deg] flex-col gap-2.5 rounded-lg bg-white p-4 shadow-[0_10px_24px_-14px_rgba(15,23,42,0.35),0_0_0_1px_#e2e8f0]">
            <div className="flex items-center justify-between">
              <span className="font-mono text-[10.5px] font-semibold tracking-[0.08em]">FACTURA</span>
              <span className="rounded bg-sky-50 px-1 font-mono text-[10px] text-sky-800 ring-1 ring-sky-400">N° {folio}</span>
            </div>
            <span className="w-fit rounded bg-sky-50 px-1.5 py-0.5 text-[11.5px] font-medium ring-1 ring-sky-400">{provider}</span>
            <span className="h-1.5 w-11/12 rounded bg-slate-200" />
            <span className="h-1.5 w-3/4 rounded bg-slate-200" />
            <span className="mt-1 flex flex-col gap-1.5 border-y border-dashed border-slate-200 py-2">
              <span className="h-1.5 w-full rounded bg-slate-100" />
              <span className="h-1.5 w-5/6 rounded bg-slate-100" />
              <span className="h-1.5 w-2/3 rounded bg-slate-100" />
            </span>
            <span className="flex items-center justify-between gap-2">
              <span className="whitespace-nowrap rounded bg-sky-50 px-1 font-mono text-[10px] ring-1 ring-sky-400">{date}</span>
              <span className="whitespace-nowrap rounded bg-sky-50 px-1.5 py-0.5 font-mono text-[10.5px] font-semibold ring-1 ring-sky-400">{amount}</span>
            </span>
          </div>
        </div>

        {/* Campos extraídos */}
        <div className="flex flex-col">
          <p className="pb-2 font-mono text-[10.5px] uppercase tracking-[0.06em] text-slate-500">Campos extraídos</p>
          <dl className="flex flex-col">
            {fields.map((field) => (
              <div key={field.label} className="flex items-center justify-between gap-3 border-b border-slate-100 py-2.5 last:border-0">
                <dt className="text-[12.5px] text-slate-600">{field.label}</dt>
                <dd className="flex min-w-0 items-center gap-2 text-[13.5px] font-medium">
                  <span className="truncate">{field.value}</span>
                  <Check className="h-3.5 w-3.5 shrink-0 text-emerald-600" strokeWidth={2.6} aria-hidden="true" />
                  <span className="sr-only">(validado)</span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-3 flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[12px] text-slate-600">Destino:</span>
            {targets.map((target, index) => (
              <span
                key={target}
                className={`rounded-md px-2 py-0.5 text-[12px] ${
                  index === 1 ? "bg-slate-950 font-medium text-white" : "bg-slate-100 text-slate-700"
                }`}
              >
                {target}
              </span>
            ))}
          </p>
        </div>
      </div>
    </PanelFrame>
  );
}

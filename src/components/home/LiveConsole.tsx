"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight, Check, FileCheck2, TriangleAlert } from "lucide-react";

type Product = "SADT" | "AXIS" | "OCR";
type Filter = "Todo" | Product;
type FeedRow = {
  id: number;
  product: Product;
  title: string;
  detail: string;
  status: "ok" | "warn";
  time: string;
};

// Ejemplos ilustrativos de la consola (no son datos reales de clientes).
const POOL: Omit<FeedRow, "id" | "time">[] = [
  { product: "OCR", title: "Orden de compra OC-7730 leída", detail: "Proveedor y montos validados", status: "ok" },
  { product: "SADT", title: "Contrato registrado en Mi DT", detail: "Folio 88232 · comprobante guardado", status: "ok" },
  { product: "AXIS", title: "Consulta PJUD sin hallazgos", detail: "Resultado en 58 s · bitácora guardada", status: "ok" },
  { product: "SADT", title: "Certificado F30-1 descargado", detail: "PDF guardado en evidencia", status: "ok" },
  { product: "OCR", title: "Factura FC-20514 extraída", detail: "Logística Austral · CLP 842.300", status: "ok" },
  { product: "SADT", title: "Desvinculación con fecha inválida", detail: "Corrige el dato y reprocesa", status: "warn" },
  { product: "AXIS", title: "Persona en monitoreo diario", detail: "Sin cambios desde ayer", status: "ok" },
];

const INITIAL: FeedRow[] = [
  { id: 4, product: "SADT", title: "Contrato registrado en Mi DT", detail: "Folio 88231 · comprobante guardado", status: "ok", time: "10:12" },
  { id: 3, product: "OCR", title: "Factura FC-20481 extraída", detail: "Transporte Andino · CLP 1.248.000", status: "ok", time: "10:07" },
  { id: 2, product: "SADT", title: "Certificado F30-1 descargado", detail: "PDF guardado en evidencia", status: "ok", time: "10:05" },
  { id: 1, product: "SADT", title: "Desvinculación con RUT inválido", detail: "Corrige el dato y reprocesa", status: "warn", time: "10:03" },
];

const FILTERS: Filter[] = ["Todo", "SADT", "AXIS", "OCR"];
const BATCH_TOTAL = 350;

function formatTime(minutes: number) {
  const h = Math.floor(minutes / 60) % 24;
  const m = minutes % 60;
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

function StatusChip({ status }: { status: "ok" | "warn" | "run" }) {
  if (status === "warn") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-amber-400/[0.12] px-2 py-1 text-xs font-medium text-amber-300">
        <TriangleAlert className="h-3 w-3" strokeWidth={2.4} aria-hidden="true" />
        Revisar
      </span>
    );
  }
  if (status === "run") {
    return (
      <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-sky-400/[0.14] px-2 py-1 text-xs font-medium text-sky-300">
        <span className="h-1.5 w-1.5 animate-y-pulse rounded-full bg-sky-300" aria-hidden="true" />
        En curso
      </span>
    );
  }
  return (
    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-emerald-400/[0.12] px-2 py-1 text-xs font-medium text-emerald-300">
      <Check className="h-3 w-3" strokeWidth={2.6} aria-hidden="true" />
      Listo
    </span>
  );
}

export function LiveConsole() {
  const [filter, setFilter] = useState<Filter>("Todo");
  const [feed, setFeed] = useState<FeedRow[]>(INITIAL);
  const [done, setDone] = useState(252);
  const [total, setTotal] = useState(1284);
  const [paused, setPaused] = useState(false);
  const clock = useRef(10 * 60 + 14);
  const cursor = useRef(0);
  const nextId = useRef(100);
  const hold = useRef(0);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || paused) return;

    const tick = window.setInterval(() => {
      if (document.hidden) return;

      setDone((value) => {
        if (value >= BATCH_TOTAL) {
          hold.current += 1;
          if (hold.current > 2) {
            hold.current = 0;
            return 168;
          }
          return value;
        }
        return Math.min(BATCH_TOTAL, value + 14);
      });

      clock.current += 1;
      const template = POOL[cursor.current % POOL.length];
      cursor.current += 1;
      nextId.current += 1;
      const row: FeedRow = { ...template, id: nextId.current, time: formatTime(clock.current) };
      setFeed((rows) => [row, ...rows].slice(0, 4));
      setTotal((value) => value + 1);
    }, 3200);

    return () => window.clearInterval(tick);
  }, [paused]);

  const visible = useMemo(
    () => feed.filter((row) => filter === "Todo" || row.product === filter),
    [feed, filter]
  );
  const showBatch = filter === "Todo" || filter === "AXIS";
  const warnCount = feed.filter((row) => row.status === "warn").length;
  const batchDone = done >= BATCH_TOTAL;

  return (
    <div
      className="relative pb-14"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="y-beam shadow-[0_50px_100px_-30px_rgba(0,0,0,0.9),0_0_80px_-20px_rgba(56,189,248,0.25)]">
        <div className="y-beam__inner overflow-hidden bg-[#0b1220]">
          <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-5 py-4">
            <div className="flex items-center gap-3">
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/10" />
              </span>
              <div className="flex flex-col">
                <span className="text-sm font-semibold text-white">Operación de hoy</span>
                <span className="font-mono text-[11.5px] text-slate-400">consola YAGO · ejemplo</span>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300">
              <span className="h-1.5 w-1.5 animate-y-pulse rounded-full bg-emerald-300" aria-hidden="true" />
              En línea
            </span>
          </div>

          <div className="flex gap-1 px-5 pt-3" role="group" aria-label="Filtrar por producto">
            {FILTERS.map((option) => (
              <button
                key={option}
                type="button"
                aria-pressed={filter === option}
                onClick={() => setFilter(option)}
                className={`rounded-lg px-2.5 py-1.5 text-[12.5px] font-medium transition-colors ${
                  filter === option ? "bg-white/10 text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {option === "Todo" ? (
                  <>
                    Todo · <span className="font-mono tabular-nums">{total.toLocaleString("es-CL")}</span>
                  </>
                ) : (
                  option
                )}
              </button>
            ))}
          </div>

          <ul className="mt-2 min-h-[312px]" aria-live="off">
            {showBatch ? (
              <li className="flex items-center gap-3 border-t border-white/[0.06] px-5 py-3.5">
                <span className="w-11 shrink-0 rounded-md bg-white/[0.07] py-1 text-center font-mono text-[10.5px] font-medium text-slate-300">
                  AXIS
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-1.5">
                  <span className="truncate text-sm font-medium text-white">Lote de {BATCH_TOTAL} personas en PJUD</span>
                  <span className="flex items-center gap-2">
                    <span className="h-1 w-16 overflow-hidden rounded-full bg-white/10 sm:w-28">
                      <span
                        className="block h-full rounded-full bg-gradient-to-r from-sky-400 to-sky-200 transition-[width] duration-700 ease-out"
                        style={{ width: `${(done / BATCH_TOTAL) * 100}%` }}
                      />
                    </span>
                    <span className="font-mono text-[11.5px] tabular-nums text-slate-400">
                      {done} de {BATCH_TOTAL}
                    </span>
                  </span>
                </span>
                <StatusChip status={batchDone ? "ok" : "run"} />
                <span className="hidden w-10 shrink-0 sm:inline" aria-hidden="true" />
              </li>
            ) : null}
            {visible.map((row) => (
              <li key={row.id} className="y-row-in flex items-center gap-3 border-t border-white/[0.06] px-5 py-3.5">
                <span className="w-11 shrink-0 rounded-md bg-white/[0.07] py-1 text-center font-mono text-[10.5px] font-medium text-slate-300">
                  {row.product}
                </span>
                <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                  <span className="truncate text-sm font-medium text-white">{row.title}</span>
                  <span className="truncate text-[12.5px] text-slate-400">{row.detail}</span>
                </span>
                <StatusChip status={row.status} />
                <span className="hidden w-10 shrink-0 text-right font-mono text-[11px] tabular-nums text-slate-400 sm:inline">
                  {row.time}
                </span>
              </li>
            ))}
            {visible.length === 0 && !showBatch ? (
              <li className="border-t border-white/[0.06] px-5 py-6 text-sm text-slate-400">Sin movimientos recientes.</li>
            ) : null}
          </ul>

          <div className="flex items-center justify-between gap-3 border-t border-white/[0.06] bg-white/[0.02] px-5 py-3.5 text-[13px]">
            {warnCount > 0 ? (
              <span className="inline-flex items-center gap-2 text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-300" aria-hidden="true" />
                {warnCount} {warnCount === 1 ? "registro por revisar" : "registros por revisar"}
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 text-emerald-300">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" aria-hidden="true" />
                Todo al día
              </span>
            )}
            <a href="/sadt" className="inline-flex items-center gap-1.5 font-semibold text-sky-300 transition-colors hover:text-sky-200">
              Ver bitácora
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 -left-3 hidden w-64 items-center gap-3 rounded-2xl bg-white p-3.5 text-slate-900 shadow-[0_24px_50px_-12px_rgba(0,0,0,0.6)] sm:flex lg:-left-10">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sky-50 text-sky-700">
          <FileCheck2 className="h-5 w-5" strokeWidth={1.8} aria-hidden="true" />
        </span>
        <span className="min-w-0">
          <span className="block truncate font-mono text-xs font-medium">comprobante_88231.pdf</span>
          <span className="block text-[12.5px] text-slate-500">Guardado en la bitácora</span>
        </span>
      </div>
    </div>
  );
}

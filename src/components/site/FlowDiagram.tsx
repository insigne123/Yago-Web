import type { LucideIcon } from "lucide-react";
import { BeamCanvas } from "@/components/motion/BeamCanvas";
import { YagoMark } from "@/components/brand/YagoLogo";

export type FlowNode = { label: string; icon: LucideIcon };

function Node({ node, side, tone }: { node: FlowNode; side: "in" | "out"; tone: "dark" | "light" }) {
  const Icon = node.icon;
  const dark = tone === "dark";
  return (
    <li
      data-beam={side}
      className={`relative flex min-h-[2.75rem] w-full max-w-[15rem] items-center gap-2.5 rounded-xl px-3 py-2 sm:min-h-0 sm:gap-3 sm:rounded-2xl sm:px-3.5 sm:py-3 ${
        side === "out" ? "sm:flex-row" : ""
      } ${
        dark
          ? "bg-[#0d1626] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.06),inset_0_0_0_1px_rgba(255,255,255,0.1)]"
          : "bg-white text-slate-950 shadow-[0_0_0_1px_rgba(15,23,42,0.08),0_8px_20px_-12px_rgba(15,23,42,0.25)]"
      }`}
    >
      <span
        className={`hidden h-9 w-9 shrink-0 place-items-center rounded-xl sm:grid ${
          dark ? "bg-sky-300/10 text-sky-200 shadow-[inset_0_0_0_1px_rgba(125,211,252,0.2)]" : "bg-sky-50 text-sky-700"
        }`}
      >
        <Icon className="h-4 w-4" strokeWidth={1.8} aria-hidden="true" />
      </span>
      <span className="min-w-0 text-[12.5px] font-medium leading-tight sm:text-[14px]">{node.label}</span>
    </li>
  );
}

/**
 * Diagrama de flujo con haces de luz: lo que entra → YAGO (o el producto) → lo que sale.
 * Accesible como dos listas; los haces son decorativos.
 */
export function FlowDiagram({
  inputs,
  outputs,
  hub,
  hubSub,
  inputsLabel = "Entra",
  outputsLabel = "Sale",
  tone = "dark",
  className = "",
}: {
  inputs: FlowNode[];
  outputs: FlowNode[];
  hub: string;
  hubSub?: string;
  inputsLabel?: string;
  outputsLabel?: string;
  tone?: "dark" | "light";
  className?: string;
}) {
  const dark = tone === "dark";
  const label = `font-mono text-[10.5px] uppercase tracking-[0.12em] sm:text-[11px] ${dark ? "text-slate-400" : "text-slate-600"}`;

  return (
    <BeamCanvas tone={tone} className={className}>
      <div className="relative z-[1] grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-x-3 sm:gap-x-12 lg:gap-x-20">
        <div className="flex flex-col items-start gap-2.5 sm:gap-3">
          <p className={label}>{inputsLabel}</p>
          <ul className="flex w-full flex-col items-start gap-2.5 sm:gap-3" aria-label={inputsLabel}>
            {inputs.map((node) => (
              <Node key={node.label} node={node} side="in" tone={tone} />
            ))}
          </ul>
        </div>

        <div className="flex flex-col items-center gap-3 pt-6">
          <div
            data-beam="hub"
            className={`y-hub relative grid h-16 w-16 place-items-center rounded-full sm:h-24 sm:w-24 ${
              dark
                ? "bg-[#0b1220] shadow-[inset_0_0_0_1px_rgba(125,211,252,0.45),0_0_40px_rgba(56,189,248,0.35)]"
                : "bg-[#0b1220] shadow-[0_0_0_6px_rgba(56,189,248,0.12),0_18px_40px_-16px_rgba(2,132,199,0.6)]"
            }`}
          >
            <YagoMark className="h-8 w-8 sm:h-12 sm:w-12" />
          </div>
          <p className="text-center">
            <span className={`block font-headline text-[14px] font-semibold sm:text-[16px] ${dark ? "text-white" : "text-slate-950"}`}>{hub}</span>
            {hubSub ? <span className={`hidden text-[12.5px] sm:block ${dark ? "text-slate-400" : "text-slate-600"}`}>{hubSub}</span> : null}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2.5 sm:gap-3">
          <p className={label}>{outputsLabel}</p>
          <ul className="flex w-full flex-col items-end gap-2.5 sm:gap-3" aria-label={outputsLabel}>
            {outputs.map((node) => (
              <Node key={node.label} node={node} side="out" tone={tone} />
            ))}
          </ul>
        </div>
      </div>
    </BeamCanvas>
  );
}

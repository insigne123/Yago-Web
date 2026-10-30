import type { ReactNode } from "react";

/* ---------------------------------------------------------------------------
   Ventanas de código para OCR Master (maquetas ilustrativas, datos ficticios).
   Colores de sintaxis con spans, sin dependencias de resaltado.
   --------------------------------------------------------------------------- */

const TONES = {
  key: "text-sky-300",
  string: "text-slate-100",
  number: "text-sky-200",
  punct: "text-slate-400",
  comment: "text-slate-400",
  command: "font-semibold text-sky-300",
  flag: "text-sky-200",
  variable: "text-sky-100",
} as const;

export type CodeToken = { text: string; tone?: keyof typeof TONES };

function pushJson(value: unknown, depth: number, out: CodeToken[]) {
  const pad = "  ".repeat(depth);
  if (Array.isArray(value)) {
    if (!value.length) {
      out.push({ text: "[]", tone: "punct" });
      return;
    }
    out.push({ text: "[", tone: "punct" }, { text: "\n" });
    value.forEach((item, index) => {
      out.push({ text: `${pad}  ` });
      pushJson(item, depth + 1, out);
      if (index < value.length - 1) out.push({ text: ",", tone: "punct" });
      out.push({ text: "\n" });
    });
    out.push({ text: pad }, { text: "]", tone: "punct" });
    return;
  }
  if (value && typeof value === "object") {
    const entries = Object.entries(value as Record<string, unknown>);
    if (!entries.length) {
      out.push({ text: "{}", tone: "punct" });
      return;
    }
    out.push({ text: "{", tone: "punct" }, { text: "\n" });
    entries.forEach(([key, item], index) => {
      out.push({ text: `${pad}  ` }, { text: JSON.stringify(key), tone: "key" }, { text: ": ", tone: "punct" });
      pushJson(item, depth + 1, out);
      if (index < entries.length - 1) out.push({ text: ",", tone: "punct" });
      out.push({ text: "\n" });
    });
    out.push({ text: pad }, { text: "}", tone: "punct" });
    return;
  }
  if (typeof value === "string") {
    out.push({ text: JSON.stringify(value), tone: "string" });
    return;
  }
  out.push({ text: String(value), tone: "number" });
}

/** Convierte un objeto en tokens JSON indentados con 2 espacios. */
export function jsonTokens(value: unknown): CodeToken[] {
  const out: CodeToken[] = [];
  pushJson(value, 0, out);
  return out;
}

/** Bloque `<pre>` desplazable en horizontal (enfocable con teclado para poder leerlo completo). */
export function CodeBlock({ tokens, label, className = "" }: { tokens: CodeToken[]; label: string; className?: string }) {
  return (
    <pre
      tabIndex={0}
      role="region"
      aria-label={label}
      className={`overflow-x-auto px-5 py-5 font-mono text-[12.5px] leading-[1.75] text-slate-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-sky-300/70 sm:px-6 sm:text-[13px] ${className}`}
    >
      <code>
        {tokens.map((token, index) =>
          token.tone ? (
            <span key={index} className={TONES[token.tone]}>
              {token.text}
            </span>
          ) : (
            token.text
          )
        )}
      </code>
    </pre>
  );
}

/** Marco de ventana oscura (barra con título + meta a la derecha) para bloques de código. */
export function CodeWindow({
  title,
  meta,
  footer,
  beam = false,
  children,
}: {
  title: string;
  meta?: ReactNode;
  footer?: ReactNode;
  /** Borde con haz de luz animado (para el hero). */
  beam?: boolean;
  children: ReactNode;
}) {
  const body = (
    <>
      <div className="flex items-center justify-between gap-3 border-b border-white/[0.08] px-5 py-3.5">
        <span className="flex min-w-0 items-center gap-3">
          <span className="flex shrink-0 gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
          </span>
          <span className="truncate font-mono text-[12.5px] text-slate-300">{title}</span>
        </span>
        {meta ? <span className="shrink-0">{meta}</span> : null}
      </div>
      {children}
      {footer ? (
        <div className="border-t border-white/[0.08] px-5 py-3 font-mono text-[11.5px] leading-relaxed text-slate-400">{footer}</div>
      ) : null}
    </>
  );

  if (beam) {
    return (
      <div className="y-beam y-on-dark min-w-0 [color-scheme:dark]">
        <div className="y-beam__inner flex min-w-0 flex-col bg-[#0b1220] text-white">{body}</div>
      </div>
    );
  }

  return (
    <div className="y-on-dark flex min-w-0 flex-col overflow-hidden rounded-[1.5rem] bg-[#0b1220] text-white shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_40px_80px_-40px_rgba(11,18,32,0.7)] [color-scheme:dark]">
      {body}
    </div>
  );
}

/* ------------------------------ Datos de ejemplo ------------------------- */

/** Respuesta ilustrativa (datos ficticios, mismo documento de ejemplo que /ocr). */
export const SAMPLE_RESPONSE = {
  estado: "procesado",
  archivo: "factura_FC-20481.pdf",
  tipo_documento: "factura",
  paginas: 1,
  campos: {
    proveedor: "Transporte Andino",
    folio: "FC-20481",
    fecha: "2026-04-08",
    monto_total: 1248000,
    moneda: "CLP",
  },
};

/** Llamada ilustrativa con curl al endpoint central. */
export const SAMPLE_REQUEST: CodeToken[] = [
  { text: "# Envía el archivo al endpoint central", tone: "comment" },
  { text: "\n" },
  { text: "curl", tone: "command" },
  { text: " " },
  { text: "-X", tone: "flag" },
  { text: " POST " },
  { text: '"', tone: "string" },
  { text: "$OCR_MASTER_URL", tone: "variable" },
  { text: '/v1/process"', tone: "string" },
  { text: " \\", tone: "punct" },
  { text: "\n  " },
  { text: "-H", tone: "flag" },
  { text: " " },
  { text: '"x-api-key: ', tone: "string" },
  { text: "$OCR_MASTER_API_KEY", tone: "variable" },
  { text: '"', tone: "string" },
  { text: " \\", tone: "punct" },
  { text: "\n  " },
  { text: "-F", tone: "flag" },
  { text: " " },
  { text: '"file=@factura_FC-20481.pdf"', tone: "string" },
];

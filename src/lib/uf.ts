export type UfRate = {
  value: number;
  date: string;
  source: string;
  isFallback: boolean;
};

type SerieResponse = {
  serie?: {
    fecha?: string;
    valor?: number;
  }[];
};

type BoostrResponse = {
  data?: {
    date?: string;
    value?: number;
  };
};

/** Último valor conocido; solo se muestra si ninguna fuente responde. Actualizar de vez en cuando. */
export const UF_FALLBACK_RATE: UfRate = {
  value: 41237.01,
  date: "2026-10-29T12:00:00.000Z",
  source: "findic.cl",
  isFallback: true,
};

type UfSource = {
  name: string;
  url: string;
  parse: (data: unknown) => { valor?: number; fecha?: string } | undefined;
};

const fromSerie = (data: unknown) =>
  (data as SerieResponse).serie?.find((entry) => typeof entry.valor === "number" && entry.valor > 0);

// Se prueban en orden: si una fuente no responde (mindicador.cl no respondía en octubre de 2026), sigue la próxima.
const UF_SOURCES: UfSource[] = [
  { name: "findic.cl", url: "https://findic.cl/api/uf", parse: fromSerie },
  { name: "mindicador.cl", url: "https://mindicador.cl/api/uf", parse: fromSerie },
  {
    name: "boostr.cl",
    url: "https://api.boostr.cl/economy/indicator/uf.json",
    parse: (data) => {
      const latest = (data as BoostrResponse).data;
      return latest ? { valor: latest.value, fecha: latest.date } : undefined;
    },
  },
];

const DAILY_REVALIDATE_SECONDS = 60 * 60 * 24;

/** "2026-10-29" -> mediodía UTC, para que la fecha no retroceda un día al mostrarla en hora de Chile. */
function normalizeDate(fecha: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(fecha) ? `${fecha}T12:00:00.000Z` : fecha;
}

async function fetchFrom(source: UfSource): Promise<UfRate> {
  const response = await fetch(source.url, {
    next: { revalidate: DAILY_REVALIDATE_SECONDS },
    signal: AbortSignal.timeout(4000),
  });

  if (!response.ok) {
    throw new Error(`UF request to ${source.name} failed with status ${response.status}`);
  }

  const latest = source.parse(await response.json());

  if (!latest?.valor || latest.valor <= 0 || !latest.fecha) {
    throw new Error(`UF response from ${source.name} did not include a valid value`);
  }

  return {
    value: latest.valor,
    date: normalizeDate(latest.fecha),
    source: source.name,
    isFallback: false,
  };
}

export async function getDailyUfRate(): Promise<UfRate> {
  for (const source of UF_SOURCES) {
    try {
      return await fetchFrom(source);
    } catch {
      // probar la siguiente fuente
    }
  }

  return UF_FALLBACK_RATE;
}

export function formatUfPrice(value: number) {
  const digits = value < 1 ? 4 : 2;

  return `${new Intl.NumberFormat("es-CL", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(value)} UF`;
}

export function formatClpFromUf(ufAmount: number, ufRate: UfRate) {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
    maximumFractionDigits: 0,
  }).format(Math.round(ufAmount * ufRate.value));
}

export function formatUfRateLabel(ufRate: UfRate) {
  const date = new Intl.DateTimeFormat("es-CL", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    timeZone: "America/Santiago",
  }).format(new Date(ufRate.date));

  return `${ufRate.isFallback ? "UF referencial" : "UF actualizada"} al ${date} vía ${ufRate.source}`;
}

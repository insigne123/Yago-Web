export type UfRate = {
  value: number;
  date: string;
  source: string;
  isFallback: boolean;
};

type MindicadorUfResponse = {
  serie?: {
    fecha?: string;
    valor?: number;
  }[];
};

export const UF_FALLBACK_RATE: UfRate = {
  value: 40661.48,
  date: "2026-06-03T04:00:00.000Z",
  source: "mindicador.cl",
  isFallback: true,
};

const UF_ENDPOINT = "https://mindicador.cl/api/uf";
const DAILY_REVALIDATE_SECONDS = 60 * 60 * 24;

export async function getDailyUfRate(): Promise<UfRate> {
  try {
    const response = await fetch(UF_ENDPOINT, {
      next: { revalidate: DAILY_REVALIDATE_SECONDS },
    });

    if (!response.ok) {
      throw new Error(`UF request failed with status ${response.status}`);
    }

    const data = (await response.json()) as MindicadorUfResponse;
    const latest = data.serie?.find((entry) => typeof entry.valor === "number" && entry.valor > 0);

    if (!latest?.valor || !latest.fecha) {
      throw new Error("UF response did not include a valid value");
    }

    return {
      value: latest.valor,
      date: latest.fecha,
      source: "mindicador.cl",
      isFallback: false,
    };
  } catch {
    return UF_FALLBACK_RATE;
  }
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
  }).format(new Date(ufRate.date));

  return `${ufRate.isFallback ? "UF referencial" : "UF actualizada"} al ${date} via ${ufRate.source}`;
}

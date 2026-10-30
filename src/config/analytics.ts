const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID?.trim().toUpperCase() || "";

export const GOOGLE_ANALYTICS_ID = /^G-[A-Z0-9]+$/.test(measurementId) ? measurementId : "";
export const GOOGLE_ANALYTICS_OPT_OUT_KEY = "yago_ga_opt_out";

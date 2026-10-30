/**
 * Geometría del isotipo de YAGO, vectorizada desde el logo oficial (public/logo-yago.png).
 *
 * Construcción (viewBox 100×100, centro 50,50): círculo exterior de radio 48 y tres círculos
 * del mismo radio con el centro desplazado 0,41·R, separados 120° y girados 4,5°. Cada aspa va
 * del borde exterior al hueco por su propio círculo y vuelve por el del aspa siguiente, que la
 * tapa. El degradado oscurece cada aspa justo donde se mete bajo la siguiente.
 *
 * public/brand/yago-mark.svg y public/icon.svg usan estos mismos valores; si cambian aquí,
 * actualizar esos archivos y correr `npm run brand:assets`.
 */
export const YAGO_MARK_BLADES = [
  {
    d: "M56.12 97.61A48 48 0 0 1 34.92 18.38A48 48 0 0 0 5.71 31.5A48 48 0 0 0 56.12 97.61Z",
    gradient: [27.72, 84.75, 9.25, 32.98],
  },
  {
    d: "M5.71 31.5A48 48 0 0 1 84.92 52.75A48 48 0 0 0 88.17 20.89A48 48 0 0 0 5.71 31.5Z",
    gradient: [31.05, 13.33, 85.11, 23.22],
  },
  {
    d: "M88.17 20.89A48 48 0 0 1 30.16 78.87A48 48 0 0 0 56.12 97.61A48 48 0 0 0 88.17 20.89Z",
    gradient: [91.24, 51.92, 55.63, 93.8],
  },
] as const;

/** Del celeste de marca (#01ACEC) al azul profundo del pliegue. */
export const YAGO_MARK_STOPS = [
  ["0", "#0db1f0"],
  ["0.3", "#05a8e8"],
  ["0.56", "#0393cd"],
  ["0.8", "#06729f"],
  ["1", "#0a4b6e"],
] as const;

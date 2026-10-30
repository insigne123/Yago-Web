import { Fragment, type ReactNode } from "react";

const CODE = /(\b[A-Z]+\d*-\d+\b)/;

/**
 * Evita que el navegador corte códigos como "F30-1" en el guion ("F30-" al final de una línea y "1" en la
 * siguiente). El texto no cambia: el guion sigue siendo "-" para buscadores y lectores de pantalla.
 */
export function keepCodesTogether(text: string): ReactNode {
  const parts = text.split(CODE);
  if (parts.length === 1) return text;
  return parts.map((part, index) =>
    index % 2 ? (
      <span key={index} className="whitespace-nowrap">
        {part}
      </span>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  );
}

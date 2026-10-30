import { useId } from "react";
import { COMPANY } from "@/config/site";
import { YAGO_MARK_BLADES, YAGO_MARK_STOPS } from "@/components/brand/yagoMarkGeometry";

type YagoMarkProps = {
  size?: number;
  className?: string;
  /** Gira un tercio de vuelta al pasar el cursor por un ancestro con `group/logo`. */
  spinOnHover?: boolean;
};

/** Isotipo oficial de YAGO: tres aspas que se pliegan una bajo la otra alrededor de un hueco triangular. */
export function YagoMark({ size = 30, className = "", spinOnHover = false }: YagoMarkProps) {
  // Un id por instancia: el logo aparece varias veces por página y los degradados no deben pisarse.
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const spin = spinOnHover
    ? "transition-transform duration-700 ease-[cubic-bezier(0.65,0,0.35,1)] group-hover/logo:rotate-[120deg] motion-reduce:transition-none"
    : "";

  return (
    <svg
      viewBox="0 0 100 100"
      width={size}
      height={size}
      aria-hidden="true"
      focusable="false"
      className={`shrink-0 ${spin} ${className}`}
    >
      <defs>
        {YAGO_MARK_BLADES.map((blade, index) => (
          <linearGradient
            key={index}
            id={`ym-${uid}-${index}`}
            gradientUnits="userSpaceOnUse"
            x1={blade.gradient[0]}
            y1={blade.gradient[1]}
            x2={blade.gradient[2]}
            y2={blade.gradient[3]}
          >
            {YAGO_MARK_STOPS.map(([offset, color]) => (
              <stop key={offset} offset={offset} stopColor={color} />
            ))}
          </linearGradient>
        ))}
      </defs>
      {YAGO_MARK_BLADES.map((blade, index) => (
        <path key={index} fill={`url(#ym-${uid}-${index})`} d={blade.d} />
      ))}
    </svg>
  );
}

type YagoLogoProps = {
  size?: number;
  className?: string;
  textClassName?: string;
};

export function YagoLogo({ size = 30, className = "", textClassName = "" }: YagoLogoProps) {
  return (
    <span className={`group/logo inline-flex items-center gap-2.5 ${className}`}>
      <YagoMark size={size} spinOnHover />
      <span className={`font-headline text-[1.3rem] font-bold leading-none tracking-[-0.03em] ${textClassName}`}>{COMPANY.name}</span>
    </span>
  );
}

import { ArrowRight, Check } from "lucide-react";
import type { AutomationPage } from "@/config/automation-pages";
import { formatClpFromUf, formatUfPrice, formatUfRateLabel, type UfRate } from "@/lib/uf";

export const AXIS_PRICING_MEETING_URL = "https://calendar.app.google/X3T5GeoXVQhqKHJz5";

type Plan = AutomationPage["pricing"]["plans"][number];

function unitLine(plan: Plan) {
  const unit = plan.unitUf ? `${formatUfPrice(plan.unitUf)} ${plan.unitLabel}` : plan.unitLabel;
  return [unit, plan.unitDetail].filter(Boolean).join(" · ");
}

function periodLabel(plan: Plan) {
  // "+ IVA / mes" -> "+ IVA /mes"
  return plan.period.replace("/ mes", "/mes");
}

/** El plan recomendado lleva un borde con un haz de luz que lo recorre. */
function FeaturedFrame({ featured, children }: { featured: boolean; children: React.ReactNode }) {
  if (!featured) return <>{children}</>;
  return (
    <div className="y-beam y-beam-lg shadow-[0_40px_80px_-40px_rgba(11,18,32,0.8),0_0_60px_-20px_rgba(56,189,248,0.35)]">{children}</div>
  );
}

type PlanCardsProps = {
  page: AutomationPage;
  ufRate: UfRate;
  /** Destino del botón de cada plan (ancla del formulario o URL). */
  ctaHref?: string;
  ctaLabel?: string;
};

export function PlanCards({ page, ufRate, ctaHref = "#formulario", ctaLabel = "Agendar demo" }: PlanCardsProps) {
  const plans = page.pricing.plans;
  const extraUf = plans.find((plan) => plan.extraUf)?.extraUf;
  const cols = page.slug === "axis" ? "md:grid-cols-2 2xl:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className="flex flex-col gap-6">
      <div className={`grid items-stretch gap-5 ${cols}`}>
        {plans.map((plan) => {
          const featured = Boolean(plan.featured);
          return (
            <FeaturedFrame key={plan.name} featured={featured}>
            <div
              className={`relative flex h-full flex-col gap-6 rounded-[1.75rem] p-7 sm:p-8 ${
                featured ? "y-beam__inner y-on-dark bg-[#0b1220] text-white" : "y-card text-slate-950"
              }`}
            >
              {featured ? (
                <span className="absolute right-6 top-6 rounded-full bg-gradient-to-b from-sky-200 to-sky-400 px-3 py-1 text-xs font-semibold text-[#04101d]">
                  Recomendado
                </span>
              ) : null}
              <div className={`flex flex-col gap-1 ${featured ? "pr-28" : ""}`}>
                <h3 className="y-h3 text-[1.35rem]">{plan.name}</h3>
                <p className={`text-[15px] ${featured ? "text-slate-300" : "text-slate-600"}`}>{plan.volume}</p>
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="font-headline text-[2.6rem] font-semibold leading-none tracking-[-0.035em] tabular-nums">
                  {formatUfPrice(plan.priceUf)}
                  <span className={`ml-1.5 whitespace-nowrap text-base font-medium tracking-normal ${featured ? "text-slate-300" : "text-slate-500"}`}>
                    {periodLabel(plan)}
                  </span>
                </p>
                <p className={`text-sm ${featured ? "text-sky-200" : "text-sky-700"}`}>{unitLine(plan)}</p>
                <p className={`text-sm ${featured ? "text-slate-300" : "text-slate-500"}`}>
                  ≈ {formatClpFromUf(plan.priceUf, ufRate)} CLP hoy
                </p>
              </div>
              <ul className={`flex flex-col gap-3 border-t pt-5 ${featured ? "border-white/10" : "border-slate-200"}`}>
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2.5 text-[15px] leading-snug">
                    <Check
                      className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-sky-300" : "text-sky-600"}`}
                      strokeWidth={2.4}
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={ctaHref}
                className={`y-btn mt-auto w-full ${featured ? "y-btn-primary" : "y-btn-outline"} plausible-event-name=Plan+Click plausible-event-location=planes plausible-event-product=${page.slug}`}
              >
                {ctaLabel}
              </a>
            </div>
            </FeaturedFrame>
          );
        })}

        {page.slug === "axis" ? (
          <div className="flex flex-col gap-5 rounded-[1.75rem] border-[1.5px] border-dashed border-slate-300 p-7 sm:p-8">
            <span className="w-fit rounded-full bg-sky-50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-sky-800">
              Precio especial
            </span>
            <div className="flex flex-col gap-1">
              <h3 className="y-h3 text-[1.35rem] text-slate-950">Cotización 6 o 12 meses</h3>
              <p className="text-[15px] text-slate-600">Bolsas de créditos personalizadas</p>
            </div>
            <p className="font-headline text-[2.2rem] font-semibold leading-none tracking-[-0.03em] text-slate-950">A medida</p>
            <ul className="flex flex-col gap-3 border-t border-slate-200 pt-5 text-slate-800">
              {["Contratos semestrales o anuales", "Bolsa de créditos según operación", "Reunión de 30 minutos para ver AXIS", "Precio especial según volumen"].map(
                (feature) => (
                  <li key={feature} className="flex gap-2.5 text-[15px] leading-snug">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-sky-600" strokeWidth={2.4} aria-hidden="true" />
                    {feature}
                  </li>
                )
              )}
            </ul>
            <a
              href={AXIS_PRICING_MEETING_URL}
              target="_blank"
              rel="noreferrer"
              className="y-btn y-btn-ink mt-auto w-full plausible-event-name=Plan+Cotizacion plausible-event-location=planes plausible-event-product=axis"
            >
              Agendar reunión de 30 min
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ) : extraUf ? (
          <div className="flex flex-col gap-4 rounded-[1.75rem] p-7 text-slate-950 shadow-[inset_0_0_0_1.5px_#cbd5e1] sm:p-8">
            <h3 className="y-h3 text-[1.35rem]">Crédito adicional</h3>
            <p className="font-headline text-[2.1rem] font-semibold leading-none tracking-[-0.03em] tabular-nums">
              {formatUfPrice(extraUf)}
            </p>
            <p className="text-[15px] leading-relaxed text-slate-600">
              por interacción sobre tu plan (≈ {formatClpFromUf(extraUf, ufRate)} CLP hoy).
            </p>
            <p className="mt-2 border-t border-slate-200 pt-5 text-[15px] leading-relaxed text-slate-600">
              ¿Tu volumen es distinto o varía mucho entre meses? Te armamos una propuesta a la medida de tu operación.
            </p>
            <a href={ctaHref} className="y-link mt-auto">
              Conversar mi volumen
              <ArrowRight className="y-arrow h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        ) : null}
      </div>

      <p className="text-center text-sm leading-relaxed text-slate-600">
        {page.pricing.note} {formatUfRateLabel(ufRate)}.
      </p>
    </div>
  );
}

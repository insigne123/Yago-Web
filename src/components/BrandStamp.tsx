import { YagoMark } from "@/components/brand/YagoLogo";
import { COMPANY } from "@/config/site";

export function BrandStamp() {
  return (
    <section aria-label="Marca Yago" className="py-12">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4">
          <div className="relative w-full overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-6">
          <div
            aria-hidden="true"
            className="absolute inset-0 opacity-70"
            style={{
              background:
                "radial-gradient(700px 260px at 12% 20%, rgba(125,211,252,.1), transparent 60%), radial-gradient(720px 280px at 88% 80%, rgba(125,211,252,.07), transparent 60%)",
            }}
          />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4">
              <YagoMark size={56} />
              <div>
                <h3 className="text-xl font-semibold text-white">{COMPANY.name}</h3>
                <p className="mt-1 text-sm text-slate-300">
                  Automatización con IA: agentes, flujos y datos para acelerar tu operación.
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 text-xs text-slate-300">
              {["Agentes IA", "Automatización", "RAG", "Integraciones", "Analítica"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

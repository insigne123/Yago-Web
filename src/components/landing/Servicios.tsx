import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { features, processSteps } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Servicios() {
  return (
    <Section id="servicios">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold md:text-5xl ${gradientText}`}>Servicios</h2>
          <p className="mt-3 text-muted-foreground">
            Construimos soluciones extremo a extremo con foco en valor real para tu equipo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <Card
              key={title}
              className="group relative overflow-hidden border-white/5 bg-gradient-to-br from-background to-background/60"
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-cyan-400/30 to-emerald-400/30 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <CardTitle>{title}</CardTitle>
                </div>
                <CardDescription>{desc}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-muted-foreground">
                  • Descubrimiento · Diseño · Implementación · Mantenimiento
                </div>
              </CardContent>
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-r from-fuchsia-500/20 via-cyan-400/20 to-emerald-400/20 blur-2xl transition-opacity group-hover:opacity-70" />
            </Card>
          ))}
        </div>

        {/* Proceso */}
        <div className="mt-16 grid gap-6 md:grid-cols-4">
          {processSteps.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/5 p-5">
              <div className="mb-2 flex items-center gap-2">
                <Icon className="h-5 w-5" />
                <h3 className="font-semibold">{title}</h3>
              </div>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

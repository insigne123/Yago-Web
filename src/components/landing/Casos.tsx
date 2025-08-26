import { Building2 } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { caseStudies } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Casos() {
  return (
    <Section id="casos" className="bg-gradient-to-b from-transparent via-slate-950/40 to-transparent">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-3xl font-bold md:text-5xl ${gradientText}`}>Casos de éxito</h2>
          <p className="mt-3 text-muted-foreground">
            Resultados reales con enfoque en tiempo, costos y calidad de servicio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {caseStudies.map((study) => (
            <Card key={study.company} className="border-white/5">
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Building2 className="h-4 w-4" /> {study.company}
                </div>
                <CardTitle>{study.title}</CardTitle>
                <CardDescription>
                  {study.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3 text-sm">
                {study.stats.map(stat => {
                    const Icon = stat.icon;
                    return (
                        <div key={stat.text} className="flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          <span>{stat.text}</span>
                        </div>
                    )
                })}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

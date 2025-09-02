import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { products } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Productos() {
  return (
    <Section id="productos">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold md:text-5xl ${gradientText}`}>Productos</h2>
          <p className="mt-3 text-muted-foreground">
            Soluciones listas para usar que puedes personalizar a tu negocio.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {products.map(({ icon: Icon, name, subtitle, summary, bullets }) => (
            <Card key={name} className="border-white/5">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-gradient-to-br from-fuchsia-500/30 via-cyan-400/30 to-emerald-400/30 p-2">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <CardTitle>{name}</CardTitle>
                    {subtitle && (
                      <p className="text-sm text-muted-foreground">{subtitle}</p>
                    )}
                  </div>
                </div>
                <CardDescription className="pt-2">{summary}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid list-disc gap-1 pl-5 text-sm text-muted-foreground">
                  {bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="mt-5 flex gap-3">
                  <Button asChild variant="ghost" className="border border-white/15">
                     <Link href="#contacto">Ver demo</Link>
                  </Button>
                  <Button asChild className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white">
                    <Link href="#contacto">Solicitar cotización</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

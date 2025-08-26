import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Testimonios() {
  return (
    <Section>
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className={`text-3xl font-bold md:text-5xl ${gradientText}`}>Lo que dicen</h2>
          <p className="mt-3 text-muted-foreground">
            Testimonios de clientes sobre nuestro trabajo.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, idx) => (
            <Card key={testimonial.area} className="border-white/5">
              <CardContent className="p-6">
                <Quote className="mb-4 h-6 w-6 opacity-70" />
                <p className="text-sm text-muted-foreground">
                  "{testimonial.quote}"
                </p>
                <div className="mt-4 text-sm">
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-muted-foreground">Gerente de {testimonial.area}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}

import { technologies } from "@/config/site";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Tecnologia() {
  return (
    <Section id="tecnologia">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className={`text-3xl font-bold md:text-5xl ${gradientText}`}>Tecnología</h2>
          <p className="mt-3 text-muted-foreground">
            Pila moderna y escalable, con la que podemos conectarnos a cientos de aplicaciones como Excel, Gmail, WhatsApp, Instagram y muchas más.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {technologies.map(
            (t) => (
              <div
                key={t}
                className="flex items-center justify-center rounded-2xl border border-white/5 bg-background/60 p-6 text-sm text-muted-foreground"
              >
                {t}
              </div>
            )
          )}
        </div>
      </div>
    </Section>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast";
import { COMPANY } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Section } from "./Section";

const gradientText =
  "bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400";

export function Contacto() {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error al enviar el mensaje.");
      }
      form.reset();
      toast({ title: "¡Mensaje enviado!", description: "Te responderemos muy pronto." });
    } catch (err: any) {
      toast({
        title: "No pudimos enviar tu mensaje",
        description: err?.message ?? "Intenta nuevamente o escríbenos por WhatsApp",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Section id="contacto">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid items-start gap-8 md:grid-cols-2">
          <div>
            <h2 className={`text-3xl font-bold md:text-5xl ${gradientText}`}>Conversemos</h2>
            <p className="mt-3 text-muted-foreground">
              Cuéntanos tu caso y te proponemos un roadmap con quick wins medibles.
            </p>
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <div>
                📧 Email: <a className="underline hover:text-foreground" href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
              </div>
              <div>
                💬 WhatsApp: <a className="underline hover:text-foreground" href={COMPANY.whatsappLink} target="_blank" rel="noreferrer">{COMPANY.whatsapp}</a>
              </div>
              <div>📍 {COMPANY.location}</div>
            </div>
          </div>

          <Card className="border-white/5">
            <CardHeader>
              <CardTitle>Escríbenos</CardTitle>
              <CardDescription>Te responderemos muy pronto.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="grid gap-3">
                <Input name="nombre" placeholder="Tu nombre" required />
                <Input name="email" type="email" placeholder="Tu email" required />
                <Input name="empresa" placeholder="Empresa" />
                <Textarea name="mensaje" placeholder="Cuéntanos brevemente qué necesitas" rows={5} required />
                <Button type="submit" disabled={loading} className="bg-gradient-to-r from-fuchsia-500 via-cyan-400 to-emerald-400 text-white">
                  {loading ? "Enviando…" : "Enviar"}
                </Button>
              </form>
              <p className="mt-3 text-xs text-muted-foreground">
                Al enviar aceptas nuestra <Link href="#" className="underline hover:text-foreground">Política de Privacidad</Link>.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}

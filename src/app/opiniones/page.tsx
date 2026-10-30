import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeedbackPageShell } from "@/components/feedback/FeedbackPageShell";
import { QUESTIONNAIRES } from "@/config/questionnaires";
import { createPageMetadata } from "@/lib/seo";

export const metadata = {
  ...createPageMetadata({ title: "Cuestionarios de experiencia | YAGO", description: "Elige el cuestionario que corresponde a tu producto y rol: usuarios, responsables y contrapartes de proyectos.", path: "/opiniones" }),
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
};

export default function QuestionnairesPage() {
  return <FeedbackPageShell title="Elige el cuestionario para tu experiencia." badge="YAGO · Opiniones" description="Cada cuestionario está adaptado al producto y al rol de quien responde. Puedes compartir directamente el enlace que corresponde a cada persona.">
    <div className="grid gap-5 sm:grid-cols-2">{QUESTIONNAIRES.map((questionnaire) => <Link key={questionnaire.slug} href={`/opiniones/${questionnaire.slug}`} className="group flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/[0.035] p-6 transition-colors hover:border-sky-300/50 hover:bg-white/[0.06] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sky-300">
      <span className="font-mono text-xs uppercase tracking-wider text-sky-300">{questionnaire.product}</span>
      <h2 className="font-headline text-xl font-semibold text-white">{questionnaire.audience}</h2>
      <p className="text-sm leading-relaxed text-slate-300">{questionnaire.summary}</p>
      <span className="mt-auto inline-flex items-center gap-2 pt-2 text-sm font-semibold text-sky-300">Abrir cuestionario<ArrowRight className="h-4 w-4" aria-hidden="true" /></span>
    </Link>)}</div>
  </FeedbackPageShell>;
}

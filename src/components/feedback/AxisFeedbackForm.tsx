"use client";

import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { AXIS_EASE_OPTIONS, AXIS_FEATURE_OPTIONS, AXIS_FEEDBACK_QUESTIONS, AXIS_FEEDBACK_VERSION, AXIS_PUBLICATION_CONSENT_TEXT, AXIS_RECOMMENDATION_OPTIONS, axisFeedbackSchema } from "@/lib/axis-feedback";

const field = "w-full rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/30";
const label = "text-sm font-medium text-slate-200";

function Question({ number, title, children }: { number: number; title: string; children: ReactNode }) {
  return <fieldset data-question={number} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
    <legend className="max-w-full px-2 font-headline text-lg font-semibold leading-relaxed text-white"><span className="mr-2 text-sky-300">{number}.</span>{title}</legend>
    <div className="mt-1 grid gap-3">{children}</div>
  </fieldset>;
}

function LongAnswer({ name, title, hint, maxLength = 1800 }: { name: string; title: string; hint?: string; maxLength?: number }) {
  return <>
    <label htmlFor={`axis-${name}`} className={label}>{title}</label>
    {hint ? <p id={`axis-${name}-hint`} className="text-sm leading-relaxed text-slate-400">{hint}</p> : null}
    <textarea id={`axis-${name}`} name={name} rows={3} maxLength={maxLength} className={`${field} resize-y`} aria-describedby={hint ? `axis-${name}-hint` : undefined} />
  </>;
}

export function AxisFeedbackForm() {
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");
  const [feedbackId, setFeedbackId] = useState("");
  const [publicationConsent, setPublicationConsent] = useState(false);
  const pending = useRef(false);
  const lastPayload = useRef({ fingerprint: "", id: "" });
  const confirmation = useRef<HTMLHeadingElement>(null);
  useEffect(() => { if (feedbackId) confirmation.current?.focus(); }, [feedbackId]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current || feedbackId) return;
    setError("");
    const form = event.currentTarget;
    const values = new FormData(form);
    const fields = ["usage", "before", "ease", "easeComment", "featuresComment", "changes", "improvements", "support", "recommendation", "recommendationReason", "name", "role", "company", "email", "hp"];
    const answers = { ...Object.fromEntries(fields.map((name) => [name, String(values.get(name) || "")])), features: values.getAll("features").map(String), consent: values.get("consent") === "on",
      formVersion: AXIS_FEEDBACK_VERSION, publicationConsent: values.get("publicationConsent") === "on",
      publicationAttribution: String(values.get("publicationAttribution") || "anonymous") };
    const fingerprint = JSON.stringify(answers);
    if (lastPayload.current.fingerprint !== fingerprint) lastPayload.current = { fingerprint, id: crypto.randomUUID() };
    const result = axisFeedbackSchema.safeParse({ ...answers, submissionId: lastPayload.current.id });
    if (!result.success) { setError(result.error.issues[0]?.message || "Revisa las respuestas."); return; }
    pending.current = true;
    setSending(true);
    try {
      const response = await fetch("/api/axis-feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(result.data) });
      const data = await response.json();
      if (!response.ok || !data.ok || typeof data.feedbackId !== "string") throw new Error(data.error || "No pudimos recibir tus respuestas. Intenta nuevamente.");
      form.reset();
      lastPayload.current = { fingerprint: "", id: "" };
      setFeedbackId(data.feedbackId);
    } catch (issue) { setError(issue instanceof Error ? issue.message : "No pudimos enviar tus respuestas. Intenta nuevamente."); }
    finally { pending.current = false; setSending(false); }
  }

  if (feedbackId) return <section className="rounded-3xl border border-sky-300/30 bg-sky-300/[0.06] p-7 sm:p-10" role="status" aria-live="polite">
    <CheckCircle2 className="h-10 w-10 text-sky-300" aria-hidden="true" />
    <h2 ref={confirmation} tabIndex={-1} className="mt-5 font-headline text-2xl font-semibold text-white focus:outline-none">Gracias por compartir tu experiencia.</h2>
    <p className="mt-3 text-base leading-relaxed text-slate-300">Recibimos tus respuestas. Nos ayudarán a revisar cómo funciona AXIS en el día a día y qué podemos mejorar.</p>
    <p className="mt-4 break-all font-mono text-xs text-slate-400">Referencia: {feedbackId}</p>
    <p className="mt-5 text-sm leading-relaxed text-slate-400">{publicationConsent ? "Registramos tu autorización opcional. Si publicamos un extracto, respetaremos el sentido de tu respuesta y la atribución que elegiste." : "Tus comentarios se usarán para mejorar AXIS. No autorizaste su publicación como testimonio."}</p>
  </section>;

  return <form onSubmit={submit} className="grid gap-7" aria-label="Cuestionario de experiencia con AXIS" aria-busy={sending}>
    <input name="hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    <Question number={1} title={AXIS_FEEDBACK_QUESTIONS.usage}><LongAnswer name="usage" title="Tu respuesta (opcional)" /></Question>
    <Question number={2} title={AXIS_FEEDBACK_QUESTIONS.before}><LongAnswer name="before" title="Cómo lo hacías antes (opcional)" hint="También puedes indicar que no realizabas esa tarea antes." /></Question>
    <Question number={3} title={AXIS_FEEDBACK_QUESTIONS.ease}>
      <label htmlFor="axis-ease" className={label}>Facilidad de uso (opcional)</label>
      <select id="axis-ease" name="ease" defaultValue="" className={field}>
        <option value="" className="bg-[#0b1220]">Selecciona una opción</option>
        {AXIS_EASE_OPTIONS.map((option) => <option key={option} value={option} className="bg-[#0b1220]">{option}</option>)}
      </select>
      <LongAnswer name="easeComment" title="Comentario sobre facilidad de uso (opcional)" maxLength={1000} />
    </Question>
    <Question number={4} title={AXIS_FEEDBACK_QUESTIONS.features}>
      <p className="text-sm text-slate-400">Puedes marcar varias opciones o dejarlo en blanco.</p>
      <div className="grid gap-3 sm:grid-cols-2">{AXIS_FEATURE_OPTIONS.map((option) => <label key={option} className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-3 text-sm leading-relaxed text-slate-200 hover:border-white/25">
        <input name="features" type="checkbox" value={option} className="mt-1 h-4 w-4 shrink-0 accent-sky-300" />{option}
      </label>)}</div>
      <LongAnswer name="featuresComment" title="Qué te resulta más útil (opcional)" maxLength={1000} />
    </Question>
    <Question number={5} title={AXIS_FEEDBACK_QUESTIONS.changes}><LongAnswer name="changes" title="Cambios que has notado (opcional)" hint="Puedes comentar sobre tiempo dedicado, cantidad de pasos o facilidad para revisar resultados, o indicar que no has notado cambios." /></Question>
    <Question number={6} title={AXIS_FEEDBACK_QUESTIONS.improvements}><LongAnswer name="improvements" title="Dificultades y sugerencias (opcional)" /></Question>
    <Question number={7} title={AXIS_FEEDBACK_QUESTIONS.support}><LongAnswer name="support" title="Tu experiencia con el soporte (opcional)" hint="Si no lo has necesitado, puedes responder «No he utilizado el soporte»." /></Question>
    <Question number={8} title={AXIS_FEEDBACK_QUESTIONS.recommendation}>
      <label htmlFor="axis-recommendation" className={label}>Tu opinión (opcional)</label>
      <select id="axis-recommendation" name="recommendation" defaultValue="" className={field}>
        <option value="" className="bg-[#0b1220]">Selecciona una opción</option>
        {AXIS_RECOMMENDATION_OPTIONS.map((option) => <option key={option} value={option} className="bg-[#0b1220]">{option}</option>)}
      </select>
      <LongAnswer name="recommendationReason" title="Por qué (opcional)" maxLength={1000} />
    </Question>

    <fieldset className="rounded-2xl border border-white/10 p-5 sm:p-7">
      <legend className="px-2 font-headline text-lg font-semibold text-white">Si quieres identificarte</legend>
      <p className="mb-5 text-sm leading-relaxed text-slate-400">Todos estos datos son opcionales. Puedes enviar tu opinión sin nombre ni correo.</p>
      <div className="grid gap-5 sm:grid-cols-2">{[
        { name: "name", label: "Nombre", autoComplete: "name", max: 100 },
        { name: "role", label: "Cargo", autoComplete: "organization-title", max: 120 },
        { name: "company", label: "Empresa", autoComplete: "organization", max: 140 },
        { name: "email", label: "Correo para contactarte", autoComplete: "email", max: 254 },
      ].map((item) => <div key={item.name} className="grid gap-2"><label htmlFor={`axis-${item.name}`} className={label}>{item.label} (opcional)</label><input id={`axis-${item.name}`} name={item.name} type={item.name === "email" ? "email" : "text"} autoComplete={item.autoComplete} maxLength={item.max} className={field} /></div>)}</div>
    </fieldset>
    <fieldset className="rounded-2xl border border-white/10 p-5 sm:p-7">
      <legend className="px-2 font-headline text-lg font-semibold text-white">Publicación como testimonio (opcional)</legend>
      <p className="mb-5 text-sm leading-relaxed text-slate-400">Puedes enviar tu opinión sin autorizar su publicación. Esta elección no cambia el soporte ni el uso de AXIS.</p>
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-300">
        <input type="checkbox" name="publicationConsent" checked={publicationConsent} onChange={(event) => setPublicationConsent(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-sky-300" />
        <span>{AXIS_PUBLICATION_CONSENT_TEXT}</span>
      </label>
      {publicationConsent ? <div className="mt-5 grid gap-2">
        <label htmlFor="axis-publication-attribution" className={label}>¿Cómo prefieres que aparezca?</label>
        <select id="axis-publication-attribution" name="publicationAttribution" defaultValue="anonymous" className={field}>
          <option value="anonymous" className="bg-[#0b1220]">Sin mi nombre, cargo ni empresa</option>
          <option value="identified" className="bg-[#0b1220]">Con mi nombre y los datos de cargo y empresa que indiqué</option>
        </select>
        <p className="text-sm leading-relaxed text-slate-400">Tu correo no se publicará. El texto podrá usarse completo o como extracto fiel en yago.cl.</p>
      </div> : null}
    </fieldset>
    <div className="grid gap-5">
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-300">
        <input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-sky-300" />
        <span>Acepto que YAGO reciba y utilice estas respuestas para mejorar AXIS, según su <Link href="/privacidad" className="text-sky-300 underline underline-offset-4">Política de Privacidad</Link>.</span>
      </label>
      <p className="text-sm leading-relaxed text-slate-400">Solo podremos publicar tus comentarios si marcas la autorización opcional anterior. Revisaremos cualquier extracto antes de publicarlo.</p>
      {error ? <p role="alert" className="rounded-xl border border-white/25 bg-white/[0.06] p-4 text-sm leading-relaxed text-white">{error}</p> : null}
      <button type="submit" disabled={sending} className="y-btn y-btn-primary w-full disabled:cursor-wait disabled:opacity-70">
        {sending ? <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        {sending ? "Enviando respuestas…" : "Enviar mi opinión"}
      </button>
    </div>
  </form>;
}

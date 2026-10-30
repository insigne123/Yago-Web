"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, Send } from "lucide-react";
import { QUESTIONNAIRE_VERSION, questionnairePublicationText, type Questionnaire } from "@/config/questionnaires";
import { questionnaireFeedbackSchema } from "@/lib/questionnaire-feedback";

const field = "w-full rounded-xl border border-white/20 bg-white/[0.04] px-4 py-3 text-base text-white placeholder:text-slate-400 focus:border-sky-300 focus:outline-none focus:ring-2 focus:ring-sky-300/30";
const label = "text-sm font-medium text-slate-200";

export function QuestionnaireForm({ questionnaire }: { questionnaire: Questionnaire }) {
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
    const responses = Object.fromEntries(questionnaire.questions.map((question) => [question.id, question.type === "multiple" ? values.getAll(`answer-${question.id}`).map(String) : String(values.get(`answer-${question.id}`) || "")]));
    const answers = { variant: questionnaire.slug, formVersion: QUESTIONNAIRE_VERSION, responses,
      ...Object.fromEntries(["project", "name", "role", "company", "email", "hp"].map((name) => [name, String(values.get(name) || "")])),
      consent: values.get("consent") === "on", publicationConsent: values.get("publicationConsent") === "on",
      publicationAttribution: String(values.get("publicationAttribution") || "anonymous") };
    const fingerprint = JSON.stringify(answers);
    if (lastPayload.current.fingerprint !== fingerprint) lastPayload.current = { fingerprint, id: crypto.randomUUID() };
    const parsed = questionnaireFeedbackSchema.safeParse({ ...answers, submissionId: lastPayload.current.id });
    if (!parsed.success) { setError(parsed.error.issues[0]?.message || "Revisa las respuestas."); return; }
    pending.current = true;
    setSending(true);
    try {
      const response = await fetch("/api/questionnaire-feedback", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(parsed.data) });
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
    <p className="mt-3 text-base leading-relaxed text-slate-300">Recibimos tus respuestas al cuestionario de {questionnaire.product}. Nos ayudarán a revisar la experiencia y qué podemos mejorar.</p>
    <p className="mt-4 break-all font-mono text-xs text-slate-400">Referencia: {feedbackId}</p>
    <p className="mt-5 text-sm leading-relaxed text-slate-400">{publicationConsent ? "Registramos tu autorización opcional. Si publicamos un extracto, respetaremos el sentido de tu respuesta y la atribución que elegiste." : "No autorizaste la publicación de tus comentarios como testimonio."}</p>
  </section>;

  return <form onSubmit={submit} className="grid gap-7" aria-label={`Cuestionario ${questionnaire.product}: ${questionnaire.audience}`} aria-busy={sending}>
    <input name="hp" type="text" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
    {questionnaire.projectField ? <div className="grid gap-2 rounded-2xl border border-white/10 p-5 sm:p-7">
      <label htmlFor="feedback-project" className={label}>Nombre de la aplicación o proyecto (opcional)</label>
      <p id="feedback-project-hint" className="text-sm text-slate-400">Ayuda a identificar a qué solución corresponden tus respuestas.</p>
      <input id="feedback-project" name="project" maxLength={160} className={field} aria-describedby="feedback-project-hint" />
    </div> : null}
    {questionnaire.questions.map((question, index) => {
      const id = `feedback-${question.id}`;
      return <fieldset key={question.id} data-question={question.id} className="rounded-2xl border border-white/10 bg-white/[0.025] p-5 sm:p-7">
        <legend className="max-w-full px-2 font-headline text-lg font-semibold leading-relaxed text-white"><span className="mr-2 text-sky-300">{index + 1}.</span>{question.title}</legend>
        <div className="mt-1 grid gap-3">
          {question.hint ? <p id={`${id}-hint`} className="text-sm leading-relaxed text-slate-400">{question.hint}</p> : null}
          {question.type === "text" ? <>
            <label htmlFor={id} className={label}>Tu respuesta (opcional)</label>
            <textarea id={id} name={`answer-${question.id}`} rows={3} maxLength={1800} className={`${field} resize-y`} aria-describedby={question.hint ? `${id}-hint` : undefined} />
          </> : question.type === "choice" ? <>
            <label htmlFor={id} className={label}>Selecciona una respuesta (opcional)</label>
            <select id={id} name={`answer-${question.id}`} defaultValue="" className={field} aria-describedby={question.hint ? `${id}-hint` : undefined}>
              <option value="" className="bg-[#0b1220]">Prefiero dejarlo en blanco</option>
              {question.options?.map((option) => <option key={option} value={option} className="bg-[#0b1220]">{option}</option>)}
            </select>
          </> : <div className="grid gap-3 sm:grid-cols-2">{question.options?.map((option) => <label key={option} className="flex cursor-pointer items-start gap-3 rounded-xl border border-white/10 p-3 text-sm leading-relaxed text-slate-200">
            <input name={`answer-${question.id}`} type="checkbox" value={option} className="mt-1 h-4 w-4 shrink-0 accent-sky-300" />{option}
          </label>)}</div>}
        </div>
      </fieldset>;
    })}
    <fieldset className="rounded-2xl border border-white/10 p-5 sm:p-7">
      <legend className="px-2 font-headline text-lg font-semibold text-white">Si quieres identificarte</legend>
      <p className="mb-5 text-sm leading-relaxed text-slate-400">Todos estos datos son opcionales. Puedes enviar tu opinión sin nombre ni correo.</p>
      <div className="grid gap-5 sm:grid-cols-2">{[
        { name: "name", title: "Nombre", autoComplete: "name", max: 100 },
        { name: "role", title: "Cargo", autoComplete: "organization-title", max: 120 },
        { name: "company", title: "Empresa", autoComplete: "organization", max: 140 },
        { name: "email", title: "Correo para contactarte", autoComplete: "email", max: 254 },
      ].map((item) => <div key={item.name} className="grid gap-2"><label htmlFor={`feedback-${item.name}`} className={label}>{item.title} (opcional)</label><input id={`feedback-${item.name}`} name={item.name} type={item.name === "email" ? "email" : "text"} autoComplete={item.autoComplete} maxLength={item.max} className={field} /></div>)}</div>
    </fieldset>
    <fieldset className="rounded-2xl border border-white/10 p-5 sm:p-7">
      <legend className="px-2 font-headline text-lg font-semibold text-white">Publicación como testimonio (opcional)</legend>
      <p className="mb-5 text-sm leading-relaxed text-slate-400">Puedes responder sin autorizar publicación. Esta elección no cambia el soporte ni el servicio de YAGO.</p>
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-300"><input type="checkbox" name="publicationConsent" checked={publicationConsent} onChange={(event) => setPublicationConsent(event.target.checked)} className="mt-1 h-4 w-4 shrink-0 accent-sky-300" /><span>{questionnairePublicationText(questionnaire)}</span></label>
      {publicationConsent ? <div className="mt-5 grid gap-2">
        <label htmlFor="feedback-publication-attribution" className={label}>¿Cómo prefieres que aparezca?</label>
        <select id="feedback-publication-attribution" name="publicationAttribution" defaultValue="anonymous" className={field}>
          <option value="anonymous" className="bg-[#0b1220]">Sin mi nombre, cargo ni empresa</option>
          <option value="identified" className="bg-[#0b1220]">Con mi nombre y los datos de cargo y empresa que indiqué</option>
        </select><p className="text-sm leading-relaxed text-slate-400">Tu correo no se publicará. Cualquier extracto debe conservar el sentido de tu respuesta.</p>
      </div> : null}
    </fieldset>
    <div className="grid gap-5">
      <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed text-slate-300"><input type="checkbox" name="consent" required className="mt-1 h-4 w-4 shrink-0 accent-sky-300" /><span>Acepto que YAGO reciba y utilice estas respuestas para revisar y mejorar sus productos y servicios, según su <Link href="/privacidad" className="text-sky-300 underline underline-offset-4">Política de Privacidad</Link>.</span></label>
      <p className="text-sm leading-relaxed text-slate-400">Solo podremos publicar tus comentarios si marcas la autorización opcional anterior.</p>
      {error ? <p role="alert" className="rounded-xl border border-white/25 bg-white/[0.06] p-4 text-sm leading-relaxed text-white">{error}</p> : null}
      <button type="submit" disabled={sending} className="y-btn y-btn-primary w-full disabled:cursor-wait disabled:opacity-70">{sending ? <Loader2 className="h-4 w-4 animate-spin motion-reduce:animate-none" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}{sending ? "Enviando respuestas…" : "Enviar mi opinión"}</button>
    </div>
  </form>;
}

import { handleQuestionnaireFeedback } from "@/lib/questionnaire-feedback";
import { sendEmail } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const limit = checkRateLimit(request, { namespace: "questionnaire-feedback", limit: 30, windowMs: 10 * 60 * 1000 });
  if (!limit.allowed) return Response.json({ ok: false, error: "Recibimos muchos envíos. Intenta nuevamente en unos minutos." }, { status: 429, headers: { "Cache-Control": "no-store", "Retry-After": String(limit.retryAfterSeconds) } });
  return handleQuestionnaireFeedback(request, {
    to: process.env.CONTACT_TO || "", from: process.env.RESEND_FROM || process.env.SMTP_FROM || "",
    publicOrigin: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl").origin, send: sendEmail,
  });
}

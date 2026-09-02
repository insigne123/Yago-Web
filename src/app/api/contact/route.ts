import { NextResponse } from "next/server";
import { buildContactTemplate, sendEmail } from "@/lib/email";
import { EmailFormPayload } from "@/types/contact";
import { checkRateLimit } from "@/lib/rate-limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const MAX_CONTACT_BODY_BYTES = 64 * 1024;
function isEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function clampText(v: unknown, max = 5000) {
  const s = String(v ?? "").trim();
  return s.slice(0, max);
}

// Lee JSON, x-www-form-urlencoded o multipart/form-data (FormData)
async function readBody(req: Request): Promise<EmailFormPayload> {
  const ct = req.headers.get("content-type") || "";

  // helper para mapear sinónimos
  const pick = (obj: Record<string, any>, keys: string[]) => {
    for (const k of keys) {
      const v = obj[k];
      if (typeof v === "string" && v.trim().length > 0) return v;
    }
    return "";
  };

  // JSON
  if (ct.includes("application/json")) {
    const raw = (await req.json()) as Record<string, unknown>;
    const body = raw || {};
    return {
      name: pick(body as any, ["name", "nombre", "fullName", "full_name"]),
      email: pick(body as any, ["email", "mail", "correo"]),
      phone: pick(body as any, ["phone", "telefono", "tel"]),
      company: pick(body as any, ["company", "empresa", "org"]),
      role: pick(body as any, ["role", "cargo", "position"]),
      documentType: pick(body as any, ["documentType", "document_type", "tipo_documento"]),
      monthlyVolume: pick(body as any, ["monthlyVolume", "monthly_volume", "volumen_mensual"]),
      message: pick(body as any, ["message", "mensaje", "content", "consulta", "texto", "msg"]),
      topic: pick(body as any, ["topic", "motivo", "intent", "reason", "leadType", "lead_type"]),
      hp: pick(body as any, ["hp", "_hp", "honeypot"]),

      ft_utm_source: pick(body as any, ["ft_utm_source"]),
      ft_utm_medium: pick(body as any, ["ft_utm_medium"]),
      ft_utm_campaign: pick(body as any, ["ft_utm_campaign"]),
      ft_utm_term: pick(body as any, ["ft_utm_term"]),
      ft_utm_content: pick(body as any, ["ft_utm_content"]),
      ft_gclid: pick(body as any, ["ft_gclid"]),
      ft_fbclid: pick(body as any, ["ft_fbclid"]),
      ft_msclkid: pick(body as any, ["ft_msclkid"]),
      ft_referrer: pick(body as any, ["ft_referrer"]),
      ft_landing: pick(body as any, ["ft_landing"]),
      ft_ts: pick(body as any, ["ft_ts"]),

      lt_utm_source: pick(body as any, ["lt_utm_source"]),
      lt_utm_medium: pick(body as any, ["lt_utm_medium"]),
      lt_utm_campaign: pick(body as any, ["lt_utm_campaign"]),
      lt_utm_term: pick(body as any, ["lt_utm_term"]),
      lt_utm_content: pick(body as any, ["lt_utm_content"]),
      lt_gclid: pick(body as any, ["lt_gclid"]),
      lt_fbclid: pick(body as any, ["lt_fbclid"]),
      lt_msclkid: pick(body as any, ["lt_msclkid"]),
      lt_referrer: pick(body as any, ["lt_referrer"]),
      lt_landing: pick(body as any, ["lt_landing"]),
      lt_ts: pick(body as any, ["lt_ts"]),
    };
  }

  // URL-encoded
  if (ct.includes("application/x-www-form-urlencoded")) {
    const text = await req.text();
    const u = new URLSearchParams(text);
    const get = (...keys: string[]) => {
      for (const k of keys) {
        const v = u.get(k);
        if (v && v.trim()) return v;
      }
      return "";
    };
    return {
      name: get("name", "nombre", "fullName", "full_name"),
      email: get("email", "mail", "correo"),
      phone: get("phone", "telefono", "tel"),
      company: get("company", "empresa", "org"),
      role: get("role", "cargo", "position"),
      documentType: get("documentType", "document_type", "tipo_documento"),
      monthlyVolume: get("monthlyVolume", "monthly_volume", "volumen_mensual"),
      message: get("message", "mensaje", "content", "consulta", "texto", "msg"),
      topic: get("topic", "motivo", "intent", "reason", "leadType", "lead_type"),
      hp: get("hp", "_hp", "honeypot"),

      ft_utm_source: get("ft_utm_source"),
      ft_utm_medium: get("ft_utm_medium"),
      ft_utm_campaign: get("ft_utm_campaign"),
      ft_utm_term: get("ft_utm_term"),
      ft_utm_content: get("ft_utm_content"),
      ft_gclid: get("ft_gclid"),
      ft_fbclid: get("ft_fbclid"),
      ft_msclkid: get("ft_msclkid"),
      ft_referrer: get("ft_referrer"),
      ft_landing: get("ft_landing"),
      ft_ts: get("ft_ts"),

      lt_utm_source: get("lt_utm_source"),
      lt_utm_medium: get("lt_utm_medium"),
      lt_utm_campaign: get("lt_utm_campaign"),
      lt_utm_term: get("lt_utm_term"),
      lt_utm_content: get("lt_utm_content"),
      lt_gclid: get("lt_gclid"),
      lt_fbclid: get("lt_fbclid"),
      lt_msclkid: get("lt_msclkid"),
      lt_referrer: get("lt_referrer"),
      lt_landing: get("lt_landing"),
      lt_ts: get("lt_ts"),
    };
  }

  // Multipart/FormData
  if (ct.includes("multipart/form-data")) {
    const form = await req.formData();
    const get = (...keys: string[]) => {
      for (const k of keys) {
        const v = form.get(k);
        if (typeof v === "string" && v.trim()) return v;
      }
      return "";
    };
    return {
      name: get("name", "nombre", "fullName", "full_name"),
      email: get("email", "mail", "correo"),
      phone: get("phone", "telefono", "tel"),
      company: get("company", "empresa", "org"),
      role: get("role", "cargo", "position"),
      documentType: get("documentType", "document_type", "tipo_documento"),
      monthlyVolume: get("monthlyVolume", "monthly_volume", "volumen_mensual"),
      message: get("message", "mensaje", "content", "consulta", "texto", "msg"),
      topic: get("topic", "motivo", "intent", "reason", "leadType", "lead_type"),
      hp: get("hp", "_hp", "honeypot"),

      ft_utm_source: get("ft_utm_source"),
      ft_utm_medium: get("ft_utm_medium"),
      ft_utm_campaign: get("ft_utm_campaign"),
      ft_utm_term: get("ft_utm_term"),
      ft_utm_content: get("ft_utm_content"),
      ft_gclid: get("ft_gclid"),
      ft_fbclid: get("ft_fbclid"),
      ft_msclkid: get("ft_msclkid"),
      ft_referrer: get("ft_referrer"),
      ft_landing: get("ft_landing"),
      ft_ts: get("ft_ts"),

      lt_utm_source: get("lt_utm_source"),
      lt_utm_medium: get("lt_utm_medium"),
      lt_utm_campaign: get("lt_utm_campaign"),
      lt_utm_term: get("lt_utm_term"),
      lt_utm_content: get("lt_utm_content"),
      lt_gclid: get("lt_gclid"),
      lt_fbclid: get("lt_fbclid"),
      lt_msclkid: get("lt_msclkid"),
      lt_referrer: get("lt_referrer"),
      lt_landing: get("lt_landing"),
      lt_ts: get("lt_ts"),
    };
  }

  // Fallback: intentar JSON
  try {
    const raw = (await req.json()) as Record<string, unknown>;
    const body = raw || {};
    return {
      name: (body["name"] as string) || "",
      email: (body["email"] as string) || "",
      role: (body["role"] as string) || "",
      documentType: (body["documentType"] as string) || "",
      monthlyVolume: (body["monthlyVolume"] as string) || "",
      message: (body["message"] as string) || "",
    };
  } catch {
    return { name: "", email: "", message: "" };
  }
}

export async function POST(req: Request) {
  try {
    const rateLimit = checkRateLimit(req, { namespace: "contact", limit: 6, windowMs: 10 * 60 * 1000 });
    if (!rateLimit.allowed) {
      return NextResponse.json(
        { ok: false, error: "Demasiadas solicitudes. Intenta nuevamente en unos minutos." },
        { status: 429, headers: { "Retry-After": String(rateLimit.retryAfterSeconds), "Cache-Control": "no-store" } }
      );
    }

    const contentLength = Number(req.headers.get("content-length") || 0);
    if (Number.isFinite(contentLength) && contentLength > MAX_CONTACT_BODY_BYTES) {
      return NextResponse.json(
        { ok: false, error: "La solicitud es demasiado grande." },
        { status: 413, headers: { "Cache-Control": "no-store" } }
      );
    }

    const data = await readBody(req);

    // honeypot: si viene relleno, respondemos ok pero no enviamos
    if (data.hp && data.hp.trim().length > 0) {
      return NextResponse.json({ ok: true, message: "Mensaje recibido." }, { status: 200, headers: { "Cache-Control": "no-store" } });
    }

    const name = clampText(data.name, 120);
    const email = clampText(data.email, 200);
    const phone = clampText(data.phone, 60);
    const company = clampText(data.company, 120);
    const role = clampText(data.role, 120);
    const documentType = clampText(data.documentType, 160);
    const monthlyVolume = clampText(data.monthlyVolume, 120);
    const message = clampText(data.message, 5000);
    const topic = clampText(data.topic, 80);

    const ft = {
      utm_source: clampText(data.ft_utm_source, 200),
      utm_medium: clampText(data.ft_utm_medium, 200),
      utm_campaign: clampText(data.ft_utm_campaign, 200),
      utm_term: clampText(data.ft_utm_term, 200),
      utm_content: clampText(data.ft_utm_content, 200),
      gclid: clampText(data.ft_gclid, 300),
      fbclid: clampText(data.ft_fbclid, 300),
      msclkid: clampText(data.ft_msclkid, 300),
      referrer: clampText(data.ft_referrer, 800),
      landing: clampText(data.ft_landing, 500),
      ts: clampText(data.ft_ts, 60),
    };

    const lt = {
      utm_source: clampText(data.lt_utm_source, 200),
      utm_medium: clampText(data.lt_utm_medium, 200),
      utm_campaign: clampText(data.lt_utm_campaign, 200),
      utm_term: clampText(data.lt_utm_term, 200),
      utm_content: clampText(data.lt_utm_content, 200),
      gclid: clampText(data.lt_gclid, 300),
      fbclid: clampText(data.lt_fbclid, 300),
      msclkid: clampText(data.lt_msclkid, 300),
      referrer: clampText(data.lt_referrer, 800),
      landing: clampText(data.lt_landing, 500),
      ts: clampText(data.lt_ts, 60),
    };

    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }
    if (!isEmail(email)) {
      return NextResponse.json(
        { ok: false, error: "Email inválido." },
        { status: 400 }
      );
    }

    const leadId = crypto.randomUUID();

    const TO =
      process.env.CONTACT_TO ||
      process.env.NEXT_PUBLIC_CONTACT_TO ||
      "";
    const FROM =
      process.env.RESEND_FROM ||
      process.env.SMTP_FROM ||
      "Yago <no-reply@yago.local>";

    if (!TO) {
        console.error("[contact] error: No hay destinatario configurado. Define CONTACT_TO en .env.local");
        return NextResponse.json(
            {
            ok: false,
            error: "Error del servidor de correo.",
            },
            { status: 500 }
        );
    }

    const subject = `[Contacto YAGO${topic ? ` | ${topic}` : ""}] ${name} — ${company || "sin empresa"} — ${leadId}`;
    const { html, text } = buildContactTemplate({
      leadId,
      name,
      email,
      phone,
      company,
      role,
      documentType,
      monthlyVolume,
      message,
      topic,
      attribution: { firstTouch: ft, lastTouch: lt },
      meta: {
        userAgent: clampText(req.headers.get("user-agent"), 600),
        referer: clampText(req.headers.get("referer"), 800),
      },
    });

    await sendEmail({
      to: TO,
      from: FROM,
      subject,
      html,
      text,
      replyTo: email,
    });

    const webhookUrl = (process.env.CONTACT_WEBHOOK_URL || "").trim();
    if (webhookUrl) {
      const webhookController = new AbortController();
      const webhookTimeout = setTimeout(() => webhookController.abort(), 5_000);
      try {
        const webhookToken = (process.env.CONTACT_WEBHOOK_TOKEN || "").trim();
        const webhookResponse = await fetch(webhookUrl, {
          method: "POST",
          headers: {
            "content-type": "application/json",
            ...(webhookToken ? { authorization: `Bearer ${webhookToken}` } : {}),
          },
          body: JSON.stringify({
            type: "contact_lead",
            leadId,
            receivedAt: new Date().toISOString(),
            lead: { name, email, phone, company, role, documentType, monthlyVolume, message, topic },
            attribution: { firstTouch: ft, lastTouch: lt },
            meta: {
              userAgent: req.headers.get("user-agent"),
              referer: req.headers.get("referer"),
            },
          }),
          signal: webhookController.signal,
        });
        if (!webhookResponse.ok) {
          throw new Error(`Webhook respondió ${webhookResponse.status}`);
        }
      } catch (err: any) {
        console.error("[contact] webhook error:", err?.message || err);
      } finally {
        clearTimeout(webhookTimeout);
      }
    }

    return NextResponse.json(
      { ok: true, leadId, message: "Solicitud recibida." },
      { status: 200, headers: { "Cache-Control": "no-store" } }
    );
  } catch (err: any) {
    console.error("[contact] error:", err?.message || err);
    return NextResponse.json(
      {
        ok: false,
        error:
          "No se pudo enviar el correo en este momento. Intenta nuevamente más tarde.",
      },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { buildContactTemplate, sendEmail } from "@/lib/email";
import { EmailFormPayload } from "@/types/contact";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";


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
      message: pick(body as any, ["message", "mensaje", "content", "consulta", "texto", "msg"]),
      topic: pick(body as any, ["topic", "motivo", "intent", "reason", "leadType", "lead_type"]),
      hp: pick(body as any, ["hp", "_hp", "honeypot"]),

      ft_utm_source: pick(body as any, ["ft_utm_source"]),
      ft_utm_medium: pick(body as any, ["ft_utm_medium"]),
      ft_utm_campaign: pick(body as any, ["ft_utm_campaign"]),
      ft_utm_term: pick(body as any, ["ft_utm_term"]),
      ft_utm_content: pick(body as any, ["ft_utm_content"]),
      ft_referrer: pick(body as any, ["ft_referrer"]),
      ft_landing: pick(body as any, ["ft_landing"]),
      ft_ts: pick(body as any, ["ft_ts"]),

      lt_utm_source: pick(body as any, ["lt_utm_source"]),
      lt_utm_medium: pick(body as any, ["lt_utm_medium"]),
      lt_utm_campaign: pick(body as any, ["lt_utm_campaign"]),
      lt_utm_term: pick(body as any, ["lt_utm_term"]),
      lt_utm_content: pick(body as any, ["lt_utm_content"]),
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
      message: get("message", "mensaje", "content", "consulta", "texto", "msg"),
      topic: get("topic", "motivo", "intent", "reason", "leadType", "lead_type"),
      hp: get("hp", "_hp", "honeypot"),

      ft_utm_source: get("ft_utm_source"),
      ft_utm_medium: get("ft_utm_medium"),
      ft_utm_campaign: get("ft_utm_campaign"),
      ft_utm_term: get("ft_utm_term"),
      ft_utm_content: get("ft_utm_content"),
      ft_referrer: get("ft_referrer"),
      ft_landing: get("ft_landing"),
      ft_ts: get("ft_ts"),

      lt_utm_source: get("lt_utm_source"),
      lt_utm_medium: get("lt_utm_medium"),
      lt_utm_campaign: get("lt_utm_campaign"),
      lt_utm_term: get("lt_utm_term"),
      lt_utm_content: get("lt_utm_content"),
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
      message: get("message", "mensaje", "content", "consulta", "texto", "msg"),
      topic: get("topic", "motivo", "intent", "reason", "leadType", "lead_type"),
      hp: get("hp", "_hp", "honeypot"),

      ft_utm_source: get("ft_utm_source"),
      ft_utm_medium: get("ft_utm_medium"),
      ft_utm_campaign: get("ft_utm_campaign"),
      ft_utm_term: get("ft_utm_term"),
      ft_utm_content: get("ft_utm_content"),
      ft_referrer: get("ft_referrer"),
      ft_landing: get("ft_landing"),
      ft_ts: get("ft_ts"),

      lt_utm_source: get("lt_utm_source"),
      lt_utm_medium: get("lt_utm_medium"),
      lt_utm_campaign: get("lt_utm_campaign"),
      lt_utm_term: get("lt_utm_term"),
      lt_utm_content: get("lt_utm_content"),
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
      message: (body["message"] as string) || "",
    };
  } catch {
    return { name: "", email: "", message: "" };
  }
}

export async function POST(req: Request) {
  try {
    const data = await readBody(req);

    // honeypot: si viene relleno, respondemos ok pero no enviamos
    if (data.hp && data.hp.trim().length > 0) {
      return NextResponse.json({ ok: true, message: "¡Mensaje enviado con éxito!" }, { status: 200 });
    }

    const name = clampText(data.name, 120);
    const email = clampText(data.email, 200);
    const phone = clampText(data.phone, 60);
    const company = clampText(data.company, 120);
    const message = clampText(data.message, 5000);
    const topic = clampText(data.topic, 80);

    const ft = {
      utm_source: clampText(data.ft_utm_source, 200),
      utm_medium: clampText(data.ft_utm_medium, 200),
      utm_campaign: clampText(data.ft_utm_campaign, 200),
      utm_term: clampText(data.ft_utm_term, 200),
      utm_content: clampText(data.ft_utm_content, 200),
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

    const subject = `📩 [Contacto Yago${topic ? ` | ${topic}` : ""}] ${name} — ${company || "sin empresa"}`;
    const { html, text } = buildContactTemplate({
      name,
      email,
      phone,
      company,
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
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({
            type: "contact_lead",
            receivedAt: new Date().toISOString(),
            lead: { name, email, phone, company, message, topic },
            attribution: { firstTouch: ft, lastTouch: lt },
            meta: {
              userAgent: req.headers.get("user-agent"),
              referer: req.headers.get("referer"),
            },
          }),
        });
      } catch (err: any) {
        console.error("[contact] webhook error:", err?.message || err);
      }
    }

    return NextResponse.json({ ok: true, message: "¡Mensaje enviado con éxito!" }, { status: 200 });
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

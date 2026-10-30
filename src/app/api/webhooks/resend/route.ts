import mailbox from "../../../../../scripts/mailbox.config.json";
import { handleMailNotification } from "@/lib/mail-notification";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  return handleMailNotification(request, {
    apiKey: process.env.RESEND_API_KEY || "",
    webhookSecret: process.env.RESEND_MAIL_NOTIFY_WEBHOOK_SECRET || "",
    mailboxAddress: mailbox.address,
    receivingAddress: mailbox.receivingAddress,
    notifyTo: process.env.MAIL_NOTIFY_TO || "",
    notifyFrom: process.env.RESEND_FROM || "",
  });
}

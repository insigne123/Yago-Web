import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { Webhook } from "svix";
import { loadMailApiKey } from "./mailbox/credentials.mjs";
import { ResendMailbox } from "./mailbox/resend-client.mjs";

const require = createRequire(import.meta.url);

async function main() {
  const command = process.argv[2] || "status";
  if (!["setup", "status", "enable", "disable"].includes(command)) throw new Error("Usa setup, status, enable o disable.");
  const config = JSON.parse(await readFile(new URL("./mailbox.config.json", import.meta.url), "utf8"));
  const { endpoint, webhookSecret: secretName, to } = config.notification;
  const apiKey = await loadMailApiKey(config);
  const client = new ResendMailbox({ apiKey, config });
  const list = await client.request("/webhooks");
  const matches = (list.data || []).filter((item) => item.endpoint === endpoint);
  if (matches.length > 1) throw new Error("Hay varios webhooks para este endpoint; revisar antes de modificar.");
  let webhook = matches[0];

  if (command === "setup") {
    const root = process.env.FIREBASE_TOOLS_MODULE_ROOT;
    if (!root) throw new Error("Configura FIREBASE_TOOLS_MODULE_ROOT para guardar la firma en Secret Manager.");
    if (!webhook) {
      webhook = await client.request("/webhooks", { method: "POST", body: { endpoint, events: ["email.received"] } });
      // El endpoint se activa solo después de publicar y comprobar la ruta y sus credenciales.
      await client.request(`/webhooks/${webhook.id}`, { method: "PATCH", body: { status: "disabled" } });
    }
    const detail = await client.request(`/webhooks/${webhook.id}`);
    if (!detail.signing_secret) throw new Error("Resend no devolvió la firma del webhook.");
    new Webhook(detail.signing_secret);
    const manager = require(join(root, "lib", "gcp", "secretManager.js"));
    if (!await manager.secretExists(config.firebaseProject, secretName)) {
      await manager.createSecret(config.firebaseProject, secretName, { purpose: "pgongora-notifications" });
    }
    let version;
    try {
      const latest = await manager.getSecretVersion(config.firebaseProject, secretName, "latest");
      if (latest.state === "ENABLED" && await manager.accessSecretVersion(config.firebaseProject, secretName, latest.versionId) === detail.signing_secret) version = latest;
    } catch (error) {
      if (error.status !== 404) throw error;
    }
    if (!version) version = await manager.addVersion(config.firebaseProject, secretName, detail.signing_secret);
    console.log(JSON.stringify({ webhookId: detail.id, endpoint, status: detail.status, events: detail.events, notifyTo: to, secretName, secretVersion: version.versionId, signingSecretStored: true }, null, 2));
    return;
  }

  if (!webhook) {
    if (command !== "status") throw new Error("El webhook todavía no existe. Ejecuta setup.");
    console.log(JSON.stringify({ configured: false, endpoint, notifyTo: to }));
    return;
  }
  if (command === "enable" || command === "disable") {
    await client.request(`/webhooks/${webhook.id}`, { method: "PATCH", body: { endpoint, events: ["email.received"], status: command === "enable" ? "enabled" : "disabled" } });
  }
  const detail = await client.request(`/webhooks/${webhook.id}`);
  console.log(JSON.stringify({ webhookId: detail.id, endpoint: detail.endpoint, status: detail.status, events: detail.events, notifyTo: to }, null, 2));
}

main().catch((error) => {
  console.error(String(error.message || "Error de configuración").replace(/\bre_[A-Za-z0-9_-]+\b|\bwhsec_[A-Za-z0-9_+=/-]+/g, "[secreto omitido]"));
  process.exitCode = 1;
});

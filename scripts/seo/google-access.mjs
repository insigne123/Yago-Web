import { existsSync, readdirSync, readFileSync } from "node:fs";
import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);
export const METRIC_SCOPES = ["https://www.googleapis.com/auth/webmasters.readonly", "https://www.googleapis.com/auth/analytics.readonly"];

/** Ruta de firebase-tools: la variable de entorno o la versión más nueva que dejó `npx` en su caché. */
export function firebaseToolsRoot() {
  if (process.env.FIREBASE_TOOLS_MODULE_ROOT) return process.env.FIREBASE_TOOLS_MODULE_ROOT;
  const caches = [process.env.LOCALAPPDATA && join(process.env.LOCALAPPDATA, "npm-cache", "_npx"), process.env.HOME && join(process.env.HOME, ".npm", "_npx")].filter(Boolean);
  const found = [];
  for (const cache of caches) {
    if (!existsSync(cache)) continue;
    for (const entry of readdirSync(cache)) {
      const root = join(cache, entry, "node_modules", "firebase-tools");
      try { found.push({ root, version: JSON.parse(readFileSync(join(root, "package.json"), "utf8")).version.split(".").map(Number) }); } catch { /* Sin firebase-tools en esta entrada. */ }
    }
  }
  found.sort((a, b) => b.version[0] - a.version[0] || b.version[1] - a.version[1] || b.version[2] - a.version[2]);
  return found[0]?.root;
}

export async function cloudSession() {
  const root = firebaseToolsRoot();
  if (!root) throw new Error("No se encontró firebase-tools: ejecuta `npx --yes firebase-tools@15.32.1 --version` o define FIREBASE_TOOLS_MODULE_ROOT.");
  const { logger } = require(join(root, "lib/logger.js"));
  logger.silent = true;
  logger.clear();
  const auth = require(join(root, "lib/auth.js"));
  const account = auth.getProjectDefaultAccount(process.cwd());
  if (!account) throw new Error("No hay sesión de Firebase disponible.");
  const token = await auth.getAccessToken(account.tokens.refresh_token, [...(account.tokens.scopes || [])]);
  return { token: token.access_token, email: account.user.email, root, account, auth };
}

export async function googleJson(session, url, { method = "GET", body } = {}) {
  const target = new URL(url);
  if (target.protocol !== "https:" || !target.hostname.endsWith(".googleapis.com")) throw new Error("Origen de API no permitido.");
  const response = await fetch(url, {
    method, redirect: "error", signal: AbortSignal.timeout(30000),
    headers: { Authorization: `Bearer ${session.token}`, "Content-Type": "application/json" },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });
  const data = await response.json();
  if (!response.ok) {
    const error = new Error(`API ${target.hostname}: HTTP ${response.status} (${data.error?.status || "ERROR"}).`);
    error.status = response.status;
    error.reason = data.error?.details?.find((item) => item.reason)?.reason;
    throw error;
  }
  return data;
}

export async function metricsSession(config) {
  const cloud = await cloudSession();
  const result = await googleJson(cloud, `https://iamcredentials.googleapis.com/v1/projects/-/serviceAccounts/${config.readerEmail}:generateAccessToken`, {
    method: "POST", body: { scope: METRIC_SCOPES, lifetime: "3600s" },
  });
  if (!result.accessToken) throw new Error("No se pudo emitir la credencial de lectura.");
  return { token: result.accessToken };
}

export async function readBingKey(config) {
  if (process.env.BING_WEBMASTER_API_KEY?.trim()) return process.env.BING_WEBMASTER_API_KEY.trim();
  const session = await cloudSession();
  const secret = await googleJson(session, `https://secretmanager.googleapis.com/v1/projects/${encodeURIComponent(config.firebaseProject)}/secrets/${encodeURIComponent(config.bingSecret)}/versions/latest:access`);
  if (!secret.payload?.data) throw new Error("La clave de Bing no está disponible.");
  const key = Buffer.from(secret.payload.data, "base64").toString("utf8").trim();
  if (!key) throw new Error("La clave de Bing está vacía.");
  return key;
}

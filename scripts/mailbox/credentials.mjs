import { createRequire } from "node:module";
import { join } from "node:path";

const require = createRequire(import.meta.url);

/** La clave solo vive en memoria; no invoca el comando de CLI que imprime el secreto. */
export async function loadMailApiKey(config, env = process.env) {
  if (env.RESEND_MAIL_API_KEY?.trim()) return validateKey(env.RESEND_MAIL_API_KEY.trim());

  const root = env.FIREBASE_TOOLS_MODULE_ROOT;
  if (!root) {
    throw new Error("Define FIREBASE_TOOLS_MODULE_ROOT con el paquete firebase-tools disponible, o RESEND_MAIL_API_KEY para esta sesión.");
  }
  if (!/^[a-z0-9-]+$/.test(config.firebaseProject || "") || !/^[A-Za-z0-9_-]+$/.test(config.firebaseSecret || "") || !/^(latest|[0-9]+)$/.test(config.firebaseSecretVersion || "")) {
    throw new Error("La referencia pública del secreto de correo no es válida.");
  }

  try {
    const { logger } = require(join(root, "lib", "logger.js"));
    logger.silent = true;
    logger.clear();
    const { getProjectDefaultAccount, setActiveAccount } = require(join(root, "lib", "auth.js"));
    const { requireAuth } = require(join(root, "lib", "requireAuth.js"));
    const { accessSecretVersion } = require(join(root, "lib", "gcp", "secretManager.js"));
    const options = { project: config.firebaseProject, nonInteractive: true };
    const account = getProjectDefaultAccount(process.cwd());
    if (account) setActiveAccount(options, account);
    await requireAuth(options);
    const value = await accessSecretVersion(config.firebaseProject, config.firebaseSecret, config.firebaseSecretVersion);
    return validateKey(value.trim());
  } catch (error) {
    if (/Authentication Error|credentials are no longer valid|Failed to authenticate|firebase login/i.test(String(error.message || ""))) {
      throw new Error("La sesión de Firebase necesita reautenticación. Ejecuta: npx --yes firebase-tools@15.32.1 login --reauth");
    }
    throw new Error(`No se pudo cargar la clave desde Secret Manager (${config.firebaseProject}/${config.firebaseSecret}). Comprueba firebase login y el acceso al secreto.`);
  }
}

function validateKey(value) {
  if (!/^re_[A-Za-z0-9_-]+$/.test(value)) throw new Error("El secreto configurado no contiene una clave válida de Resend.");
  return value;
}

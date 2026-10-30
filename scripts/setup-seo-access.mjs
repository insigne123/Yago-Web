#!/usr/bin/env node
import { readFile } from "node:fs/promises";
import { cloudSession, googleJson, metricsSession } from "./seo/google-access.mjs";

const config = JSON.parse(await readFile(new URL("./seo.config.json", import.meta.url), "utf8"));
const command = process.argv[2] || "status";
if (!["setup", "status"].includes(command)) throw new Error("Uso: node scripts/setup-seo-access.mjs [setup|status]");
try {
  const cloud = await cloudSession();
  if (command === "setup") {
    const services = ["iam.googleapis.com", "iamcredentials.googleapis.com", "searchconsole.googleapis.com", "analyticsadmin.googleapis.com", "analyticsdata.googleapis.com"];
    const operation = await googleJson(cloud, `https://serviceusage.googleapis.com/v1/projects/${config.projectNumber}/services:batchEnable`, { method: "POST", body: { serviceIds: services } });
    if (operation.name && !operation.done) {
      let done = false;
      for (let attempt = 0; attempt < 30; attempt++) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const status = await googleJson(cloud, `https://serviceusage.googleapis.com/v1/${operation.name}`);
        if (status.error) throw new Error("Falló la habilitación de APIs.");
        if (status.done) { done = true; break; }
      }
      if (!done) throw new Error("La habilitación sigue procesándose; comprobar antes de continuar.");
    }
    const resource = `https://iam.googleapis.com/v1/projects/${config.firebaseProject}/serviceAccounts/${config.readerEmail}`;
    try { await googleJson(cloud, resource); } catch (error) {
      if (error.status !== 404) throw error;
      await googleJson(cloud, `https://iam.googleapis.com/v1/projects/${config.firebaseProject}/serviceAccounts`, { method: "POST", body: {
        accountId: config.readerAccountId,
        serviceAccount: { displayName: "YAGO SEO Reader", description: "Lectura de Search Console y GA4 para seguimiento SEO/GEO de yago.cl. Sin claves descargables." },
      } });
    }
    const policy = await googleJson(cloud, `${resource}:getIamPolicy`, { method: "POST", body: {} });
    const bindings = policy.bindings || [];
    let binding = bindings.find((item) => item.role === "roles/iam.serviceAccountTokenCreator" && !item.condition);
    if (!binding) { binding = { role: "roles/iam.serviceAccountTokenCreator", members: [] }; bindings.push(binding); }
    const member = `user:${cloud.email}`;
    if (!binding.members.includes(member)) {
      binding.members.push(member);
      await googleJson(cloud, `${resource}:setIamPolicy`, { method: "POST", body: { policy: { ...policy, bindings } } });
    }
    console.log(JSON.stringify({ reader: config.readerEmail, apisEnabled: services, impersonationUser: cloud.email, keyCreated: false }, null, 2));
  }
  let session;
  try { session = await metricsSession(config); } catch (error) {
    console.log(JSON.stringify({ reader: config.readerEmail, tokenReady: false, status: error.status || null, next: "Ejecutar setup o revisar el permiso de impersonación." }, null, 2));
    process.exitCode = 1;
  }
  if (session) {
    const access = {};
    try {
      const sites = await googleJson(session, "https://www.googleapis.com/webmasters/v3/sites");
      access.searchConsole = { connected: !!sites.siteEntry?.some((site) => site.siteUrl === config.searchConsoleProperty), property: config.searchConsoleProperty };
    } catch (error) { access.searchConsole = { connected: false, status: error.status || null }; }
    try {
      const accounts = await googleJson(session, "https://analyticsadmin.googleapis.com/v1beta/accountSummaries?pageSize=200");
      const properties = (accounts.accountSummaries || []).flatMap((account) => account.propertySummaries || []);
      access.ga4 = { connected: properties.length > 0, properties: properties.map((property) => ({ id: property.property, name: property.displayName })) };
    } catch (error) { access.ga4 = { connected: false, status: error.status || null }; }
    console.log(JSON.stringify({ reader: config.readerEmail, tokenReady: true, access }, null, 2));
  }
} catch (error) {
  console.error(`No se completó la configuración SEO: ${error.message}`);
  process.exitCode = 1;
}

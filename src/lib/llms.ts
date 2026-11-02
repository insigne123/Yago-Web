import { AUTOMATION_PAGES } from "@/config/automation-pages";
import { BLOG_AUTHOR, BLOG_POSTS, getBlogCollections } from "@/config/blog";
import { ENTITY, formatUpdated } from "@/config/entity";
import { GLOSSARY } from "@/config/glossary";
import { KEY_FACTS, mergeFaqs, type ProductKeyFacts } from "@/config/key-facts";
import { OCR_PAGE } from "@/config/ocr";
import { OCR_MASTER } from "@/config/ocr-master";
import { PRODUCTS } from "@/config/productos";
import { SEO_PAGES } from "@/config/seo-pages";
import { SERVICES } from "@/config/services";
import { COMPANY, PRIMARY_CTA } from "@/config/site";
import { HOME_FAQ } from "@/config/home";
import { getPublishedCaseStudies, getPublishedTestimonials } from "@/config/evidence";
import { TEAM_MEMBERS } from "@/config/team";
import { COMPANY_PROFILE, DISCOVERY_UPDATED } from "@/config/discovery";
import { PRODUCT_CHOICES, SERVICE_CHOICES } from "@/config/catalog-guidance";

/**
 * Genera /llms.txt (mapa corto) y /llms-full.txt (contenido completo en Markdown) desde la misma
 * configuración que usa el sitio, para que nunca queden desactualizados respecto de las páginas.
 * Formato según la propuesta llmstxt.org.
 */

const BASE = process.env.NEXT_PUBLIC_SITE_URL || "https://yago.cl";
const url = (path: string) => `${BASE}${path === "/" ? "/" : path}`;

const PRODUCT_PAGES: { facts: ProductKeyFacts; path: string; faqs: { question: string; answer: string }[] }[] = [
  { facts: KEY_FACTS.sadt, path: "/sadt", faqs: mergeFaqs(KEY_FACTS.sadt.faqs, AUTOMATION_PAGES.find((p) => p.slug === "sadt")!.faqs) },
  { facts: KEY_FACTS.axis, path: "/axis", faqs: mergeFaqs(KEY_FACTS.axis.faqs, AUTOMATION_PAGES.find((p) => p.slug === "axis")!.faqs) },
  { facts: KEY_FACTS.ocr, path: "/ocr", faqs: mergeFaqs(KEY_FACTS.ocr.faqs, OCR_PAGE.faqs) },
  { facts: KEY_FACTS["ocr-master"], path: "/ocr-master", faqs: mergeFaqs(KEY_FACTS["ocr-master"].faqs, OCR_MASTER.faqs) },
];

function header() {
  return [
    `# ${COMPANY.name}`,
    "",
    `> ${ENTITY.description}`,
    "",
    `- Sitio: ${url("/")}`,
    `- Razón social: ${ENTITY.legalName} (RUT ${ENTITY.taxID})`,
    `- País: Chile (atiende también a Latinoamérica de forma remota)`,
    `- Contacto: ${COMPANY.email} · WhatsApp ${COMPANY.whatsapp}`,
    `- Agendar diagnóstico: ${PRIMARY_CTA.href.startsWith("http") ? PRIMARY_CTA.href : url(PRIMARY_CTA.href)}`,
    `- Idioma: español de Chile`,
    `- Empresa y capacidades: ${url("/nosotros")}`,
    ...ENTITY.sameAs.map((profile) => `- Perfil oficial: ${profile}`),
    `- Autor de las guías: ${BLOG_AUTHOR.name} · ${url(BLOG_AUTHOR.url)}`,
    `- Contenido revisado: ${formatUpdated()}`,
  ].join("\n");
}

export function buildLlmsTxt() {
  const lines: string[] = [header(), ""];

  lines.push("## Servicios para empresas en Chile", "");
  for (const service of SERVICES) lines.push(`- [${service.title}](${url(`/servicios/${service.slug}`)}): ${service.short}`);
  lines.push(`- [OCR y digitalización de documentos](${url("/ocr")}): extracción, validación e integración de datos de PDFs e imágenes.`);
  lines.push(`- [Cómo trabajamos](${url("/proceso")}): diagnóstico, alcance, construcción y validación.`);
  lines.push("");

  lines.push("## Productos", "");
  for (const { facts, path } of PRODUCT_PAGES) {
    const price = facts.facts.find((fact) => fact.label === "Precio")?.value;
    lines.push(`- [${facts.name}](${url(path)}): ${facts.definition}${price ? ` Precio: ${price}.` : ""}`);
  }
  lines.push(`- [Precios de todos los productos](${url("/precios")}): planes de SADT y AXIS en UF con equivalente en pesos del día; OCR y proyectos a medida se cotizan.`);
  lines.push("");

  lines.push("## Agentes y productos configurables", "");
  for (const product of PRODUCTS) lines.push(`- [${product.name}](${url(`/productos/${product.slug}`)}): ${product.tagline}`);
  lines.push("");

  lines.push("## Soluciones por problema", "");
  for (const page of SEO_PAGES) lines.push(`- [${page.name}](${url(`/soluciones/${page.slug}`)}): ${page.seoDescription}`);
  lines.push("");

  lines.push("## Guías y blog", "");
  for (const collection of getBlogCollections()) {
    lines.push(`### ${collection.title}`, "", collection.description, "");
    for (const post of collection.posts) lines.push(`- [${post.title}](${url(`/blog/${post.slug}`)}): ${post.description}`);
    lines.push("");
  }
  lines.push(`- [Glosario](${url("/glosario")}): integración de IA, desarrollo asistido, aplicaciones, OCR, RAG y automatización, además de términos laborales de Chile.`);
  lines.push("");
  lines.push("## Empresa y evidencia", "");
  lines.push(`- [Nosotros](${url("/nosotros")}): empresa, capacidades y forma de implementación.`);
  lines.push(`- [Casos y metodología](${url("/casos")}): línea base y comparación de resultados.`);
  for (const item of getPublishedCaseStudies()) lines.push(`- [${item.title}](${url(`/casos/${item.slug}`)}): ${item.client}. ${item.summary}`);
  lines.push("");

  lines.push("## Optional", "");
  lines.push(`- [Contenido completo en Markdown](${url("/llms-full.txt")}): definiciones, datos clave, preguntas frecuentes y artículos completos.`);
  lines.push(`- [Casos y metodología](${url("/casos")})`);
  lines.push(`- [Privacidad](${url("/privacidad")}) · [Términos](${url("/terminos")})`);
  lines.push("");
  lines.push(
    "Nota: YAGO es un proveedor independiente; no representa a la Dirección del Trabajo ni al Poder Judicial. Los precios vigentes están en cada página de producto."
  );
  return lines.join("\n") + "\n";
}

export function buildLlmsFullTxt() {
  const out: string[] = [header(), ""];
  out.push("## Yago SpA: modalidad, productos y entregables", "", `URL: ${url("/nosotros")} · Revisado: ${DISCOVERY_UPDATED}`, "", COMPANY_PROFILE.definition, "");
  for (const product of COMPANY_PROFILE.products) out.push(`- [${product.name}](${url(product.href)}): ${product.description}`);
  out.push("", "Qué acordamos en una implementación:", ...COMPANY_PROFILE.deliverables.map((item) => `- ${item}`), "");
  for (const item of COMPANY_PROFILE.faqs) out.push(`### ${item.question}`, "", item.answer, "");
  out.push("## Elegir un servicio, producto o API", "", `Catálogos: ${url("/servicios")} · ${url("/productos")}`, "");
  for (const choice of SERVICE_CHOICES) out.push(`- **${choice.need}:** ${choice.scope} [${choice.label}](${url(choice.href)})`);
  out.push("");
  for (const choice of PRODUCT_CHOICES) out.push(`- [${choice.name}](${url(choice.href)}): ${choice.fit} ${choice.mode}`);
  out.push("");

  out.push("## Equipo y autoría", "");
  for (const member of TEAM_MEMBERS) {
    out.push(`### ${member.name}`, "", `Perfil: ${url(`/nosotros#${member.slug}`)}`, "", member.role, "", member.bio, "");
    if (member.profileUrl) out.push(`Perfil profesional: ${member.profileUrl}`, "");
  }

  out.push("## Preguntas frecuentes generales", "");
  for (const item of HOME_FAQ) out.push(`### ${item.q}`, "", item.a, "");

  out.push("## Servicios de YAGO", "");
  for (const service of SERVICES) {
    out.push(`### ${service.title}`, "", `URL: ${url(`/servicios/${service.slug}`)}`, "", service.definition || service.short, "");
    if (service.audience) out.push(`Público: ${service.audience}`, "");
    out.push(`Plazo: ${service.duration}`, "", "Entregables:", ...service.deliverables.map((item) => `- ${item}`), "");
    if (service.useCases?.length) out.push("Ejemplos de aplicación:", ...service.useCases.map((item) => `- ${item.title}: ${item.description}`), "");
    if (service.workflow) {
      const flow = service.workflow;
      out.push(`#### Ejemplo de alcance: ${flow.title}`, "", flow.description, "", "Flujo de referencia; conexiones, campos y acciones se confirman en el diagnóstico.", "",
        `Entrada: ${flow.input}`, `Salida: ${flow.output}`, `Conexiones: ${flow.connections}`, "");
      flow.steps.forEach((step, index) => out.push(`${index + 1}. **${step.title}:** ${step.description}`));
      out.push("", "Cómo comprobamos que funciona:", ...flow.acceptance.map((item) => `- ${item}`), "",
        "Opciones relacionadas:", ...flow.links.map((link) => `- [${link.label}](${url(link.href)})`), "");
    }
    if (service.costFactors?.length) out.push("Factores de costo:", ...service.costFactors.map((item) => `- ${item}`), "");
    for (const stage of service.stages) out.push(`- ${stage.name}: ${stage.description}`);
    out.push("");
    for (const faq of service.faq || []) out.push(`#### ${faq.question}`, "", faq.answer, "");
    if (service.relatedGuides?.length) out.push("Guías relacionadas:", ...service.relatedGuides.map((guide) => `- [${guide.label}](${url(guide.href)})`), "");
  }

  for (const { facts, path, faqs } of PRODUCT_PAGES) {
    out.push(`## ${facts.name}`, "", `URL: ${url(path)}`, "", `**${facts.question}** ${facts.definition}`, "");
    for (const fact of facts.facts) out.push(`- ${fact.label}: ${fact.value}`);
    out.push("");
    if (path === "/axis") {
      const axis = AUTOMATION_PAGES.find((page) => page.slug === "axis");
      if (axis?.resultGuide) {
        out.push(`Revisado: ${axis.modifiedDate}`, "", `### ${axis.resultGuide.title}`, "", axis.resultGuide.description, "");
        for (const state of axis.resultGuide.states) out.push(`- **${state.name}:** ${state.meaning} ${state.review}`);
        out.push("", axis.resultGuide.scope, "");
      }
    }
    if (path === "/ocr") {
      const example = OCR_PAGE.documentExample;
      out.push(`Actualizado: ${OCR_PAGE.modifiedDate}`, "", `### ${example.title}`, "", example.label, "", `Documento: ${example.filename}`, "");
      example.stages.forEach((stage, index) => {
        out.push(`${index + 1}. **${stage.title}:** ${stage.description}`);
        if (index === 1) out.push(...OCR_PAGE.hero.previewFields.map((field) => `   - ${field.label}: ${field.value}`));
        if (index === 2) out.push(`   - Excepción: ${example.exception}`);
      });
      out.push("", example.note, "", `### ${OCR_PAGE.capabilities.title}`, "", OCR_PAGE.capabilities.description, "");
      for (const item of OCR_PAGE.capabilities.items) out.push(`- **${item.title}:** ${item.description} [${item.label}](${url(item.href)})`);
      out.push("", OCR_PAGE.capabilities.prompt, "", `[${OCR_PAGE.hero.primaryCta}](${url("/ocr#formulario")})`, `[${OCR_PAGE.capabilities.companyLabel}](${url("/nosotros")})`, "");
    }
    for (const item of faqs) out.push(`### ${item.question}`, "", item.answer, "");
    if (facts.sources?.length) out.push(`Fuentes oficiales: ${facts.sources.map((s) => `[${s.label}](${s.href})`).join(" · ")}`, "");
  }

  out.push("## Glosario", "", `URL: ${url("/glosario")}`, "");
  for (const group of GLOSSARY) {
    out.push(`### ${group.title}`, "");
    for (const term of group.terms) {
      const aka = term.aka?.length ? ` (${term.aka.join(", ")})` : "";
      const source = term.source ? ` Fuente: ${term.source.href}` : "";
      out.push(`- **${term.term}**${aka}: ${term.definition}${term.detail ? ` ${term.detail}` : ""}${source}`);
    }
    out.push("");
  }

  out.push("## Artículos", "");
  for (const post of BLOG_POSTS) {
    out.push(`### ${post.title}`, "", `URL: ${url(`/blog/${post.slug}`)} · Publicado: ${post.date}${post.modifiedDate ? ` · Revisado: ${post.modifiedDate}` : ""}`, "", `Autor: ${BLOG_AUTHOR.name} · ${url(BLOG_AUTHOR.url)}`, "", post.intro, "");
    for (const section of post.sections) {
      out.push(`#### ${section.heading}`, "", ...section.paragraphs.flatMap((p) => [p, ""]));
      if (section.bullets?.length) out.push(...section.bullets.map((b) => `- ${b}`), "");
      if (section.table) {
        const row = (cells: string[]) => `| ${cells.map((cell) => cell.replace(/\|/g, "\\|").replace(/\r?\n/g, " ")).join(" | ")} |`;
        out.push(row(section.table.columns), row(section.table.columns.map(() => "---")), ...section.table.rows.map(row), "");
      }
      if (section.links?.length) out.push(...section.links.map((link) => `- [${link.label}](${url(link.href)})`), "");
    }
    if (post.resource) out.push(`[${post.resource.label}](${url(post.resource.href)}): ${post.resource.description}`, "");
    if (post.faq?.length) {
      out.push("#### Preguntas frecuentes", "");
      for (const item of post.faq) out.push(`**${item.question}** ${item.answer}`, "");
    }
    out.push(`**En resumen:** ${post.conclusion}`, "");
    if (post.sources?.length) out.push("Fuentes:", ...post.sources.map((s) => `- [${s.title}](${s.url})`), "");
    const offering = post.service || post.product;
    if (offering) out.push(`[${offering.name}](${url(offering.href)}): ${offering.text}`, "");
  }

  const testimonials = getPublishedTestimonials();
  if (testimonials.length) {
    out.push("## Testimonios autorizados", "");
    for (const item of testimonials) {
      out.push(`### ${item.company}`, "", `> ${item.quote.replace(/\n/g, "\n> ")}`, "", `${item.person} · ${item.role} · ${item.date}`, "");
      if (item.source) out.push(`Fuente: [${item.source.label}](${item.source.href})`, "");
    }
  }
  const cases = getPublishedCaseStudies();
  if (cases.length) {
    out.push("## Casos documentados", "");
    for (const item of cases) {
      out.push(`### ${item.title}`, "", `URL: ${url(`/casos/${item.slug}`)} · Cliente: ${item.client}`, "", item.summary, "", `Situación inicial: ${item.before}`, "", `Implementación: ${item.implemented}`, "", `Resultado: ${item.result}`, "", `Medición: ${item.measurement}`, "");
      for (const metric of item.metrics) out.push(`- ${metric.label}: ${metric.value}. ${metric.basis === "estimated" ? "Estimación" : "Medición"}; período: ${metric.period}; método: ${metric.method}`);
      if (item.source) out.push(`Fuente: [${item.source.label}](${item.source.href})`);
      out.push("");
    }
  }
  return out.join("\n") + "\n";
}

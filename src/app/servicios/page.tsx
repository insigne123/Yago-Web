import Link from "next/link";
import { ArrowRight, Bot, Boxes, Globe, GraduationCap, LayoutDashboard, PlugZap, SearchCheck, Workflow, type LucideIcon } from "lucide-react";
import { ImageLinkCard } from "@/components/catalog/CatalogKit";
import { SpotlightGroup } from "@/components/home/SpotlightGroup";
import { ActionLink, BOOKING_ACTION, CtaBand, IconTile, PageHero, PageSection, PageShell, SectionHeader, TextLink } from "@/components/site/PageKit";
import { SERVICES, type Service } from "@/config/services";
import { createCollectionJsonLd, createPageMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/JsonLd";
import { CATALOG_UPDATED, SERVICE_CHOICES } from "@/config/catalog-guidance";

export const metadata = createPageMetadata({
  title: "Automatización, integración de IA y desarrollo en Chile | YAGO",
  description:
    "Servicios de automatización empresarial, integración de IA, desarrollo de aplicaciones, agentes y OCR en Chile. Alcance, integraciones y validación definidos.",
  path: "/servicios",
});

const SERVICE_EXTRAS: Record<Service["slug"], { icon: LucideIcon; tag: string }> = {
  "auditoria-ia": { icon: SearchCheck, tag: "Te proponemos ideas" },
  "automatizacion-procesos": { icon: Workflow, tag: "Flujos e integraciones" },
  "integracion-ia": { icon: PlugZap, tag: "IA en tus procesos" },
  "apps-automatizacion": { icon: LayoutDashboard, tag: "Apps y software con IA" },
  "agentes-ia": { icon: Bot, tag: "Asistentes y herramientas" },
  "paginas-web": { icon: Globe, tag: "Sitios web" },
  "capacitacion-ia": { icon: GraduationCap, tag: "Equipos" },
};

const PRIMARY_SLUGS: Service["slug"][] = ["auditoria-ia", "automatizacion-procesos", "integracion-ia", "apps-automatizacion", "agentes-ia"];
const primaryServices = PRIMARY_SLUGS.map((slug) => SERVICES.find((service) => service.slug === slug)!);
const otherServices = SERVICES.filter((service) => !PRIMARY_SLUGS.includes(service.slug));

/** "MVP en 1–2 semanas; productivo en…" -> "MVP en 1–2 semanas"; "1–3 semanas según…" -> "1–3 semanas" */
function shortDuration(duration: string) {
  return duration.split(";")[0].split(" según ")[0].replace(/\.$/, "").trim();
}

export default function ServiciosPage() {
  return (
    <PageShell>
      <JsonLd id="jsonld-service-collection" data={createCollectionJsonLd({ name: "Servicios de YAGO", description: "Servicios para automatizar procesos, integrar IA, desarrollar aplicaciones, implementar agentes y procesar documentos.", path: "/servicios", modifiedDate: CATALOG_UPDATED, items: [...SERVICES.map((service) => ({ name: service.title, href: `/servicios/${service.slug}`, description: service.short })), { name: "OCR para empresas", href: "/ocr", description: "Extracción y validación de datos desde PDFs e imágenes." }] })} />
      {/* ---------------- HERO ---------------- */}
      <PageHero
        fx
        eyebrow="Servicios para empresas en Chile"
        title="Automatización, IA y aplicaciones"
        highlight="para tu operación."
        description="Integramos IA con tus datos y sistemas, desarrollamos software a medida y procesamos documentos. ¿No sabes por dónde partir? Con una auditoría IA revisamos tu empresa y te proponemos qué hacer primero."
        actions={
          <>
            <ActionLink action={BOOKING_ACTION} arrow />
            <ActionLink action={{ label: "Ver cómo trabajamos", href: "/proceso" }} variant="glass" />
          </>
        }
        aside={
          <div className="y-beam">
            <div className="y-beam__inner bg-[#0b1220] p-3 sm:p-4">
              <p className="flex items-center justify-between gap-3 px-3 pb-3 pt-2 font-mono text-[12px] uppercase tracking-[0.12em] text-slate-400">
                <span>Servicios</span>
                <span className="text-slate-300">{primaryServices.length + 1}</span>
              </p>
              <ul className="flex flex-col gap-1">
                {primaryServices.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/servicios/${service.slug}`}
                      className="group flex items-center gap-4 rounded-2xl px-3 py-3.5 transition-colors hover:bg-white/[0.05] focus-visible:bg-white/[0.05]"
                    >
                      <IconTile icon={SERVICE_EXTRAS[service.slug].icon} dark />
                      <span className="flex min-w-0 flex-1 flex-col gap-0.5">
                        <span className="font-headline text-[1.05rem] font-semibold leading-snug text-white">{service.title}</span>
                        <span className="font-mono text-[12.5px] text-sky-300">{shortDuration(service.duration)}</span>
                      </span>
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-slate-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-sky-300"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
                <li><Link href="/ocr" className="y-link m-3 text-sky-200">OCR y digitalización de documentos<ArrowRight className="h-4 w-4" aria-hidden="true" /></Link></li>
              </ul>
              <Link
                href="/productos"
                className="mt-2 flex items-center gap-4 rounded-2xl border-t border-white/[0.08] px-3 pb-2 pt-4 text-[14.5px] text-slate-300 transition-colors hover:text-white"
              >
                <Boxes className="h-5 w-5 shrink-0 text-sky-300" strokeWidth={1.8} aria-hidden="true" />
                <span className="min-w-0 flex-1">¿Buscas algo listo? Ver productos</span>
                <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
              </Link>
            </div>
          </div>
        }
      />

      <PageSection id="elegir-servicio" tone="light">
        <SectionHeader eyebrow="Cómo elegir" title="Parte por el trabajo que necesitas resolver." description="Estas opciones pueden combinarse. El diagnóstico confirma qué parte requiere reglas, IA, una aplicación o una integración." />
        <div role="region" aria-label="Comparación de servicios" tabIndex={0} className="mt-9 overflow-x-auto rounded-2xl border border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-700">
          <table className="w-full min-w-[36rem] text-left text-[15px] leading-relaxed text-slate-700"><caption className="sr-only">Necesidad, primer alcance y servicio relacionado</caption><thead className="bg-mist text-slate-950"><tr><th scope="col" className="px-5 py-4">Tu necesidad</th><th scope="col" className="px-5 py-4">Primer alcance</th><th scope="col" className="px-5 py-4">Servicio</th></tr></thead><tbody>{SERVICE_CHOICES.map((choice) => <tr key={choice.href} className="border-t border-slate-200"><th scope="row" className="px-5 py-4 font-medium text-slate-950">{choice.need}</th><td className="px-5 py-4">{choice.scope}</td><td className="px-5 py-4"><Link href={choice.href} className="y-link min-h-11">{choice.label}</Link></td></tr>)}</tbody></table>
        </div>
      </PageSection>

      {/* ---------------- SERVICIOS ---------------- */}
      <PageSection id="servicios-lista" tone="mist">
        <SectionHeader
          eyebrow="Qué hacemos"
          title="Elige el servicio por la necesidad de tu empresa."
          description="Cada servicio explica alcance, ejemplos, entregables y cómo evaluamos la implementación."
          action={<TextLink href="/casos">Ver casos</TextLink>}
        />

        <SpotlightGroup className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {primaryServices.map((service) => (
            <ImageLinkCard
              key={service.slug}
              href={`/servicios/${service.slug}`}
              image={service.image}
              imageAlt={service.imageAlt}
              tag={SERVICE_EXTRAS[service.slug].tag}
              title={service.title}
              description={service.short}
              meta={shortDuration(service.duration)}
              sizes="(min-width: 768px) 50vw, 100vw"
              large
            />
          ))}
          <ImageLinkCard href="/ocr" image="/images/blog-ocr-ia.png" tag="Documentos a datos" title="OCR y digitalización de documentos" description="Extracción y validación de información desde PDFs e imágenes para planillas, ERP y aplicaciones." meta="Evaluación con tus documentos" sizes="(min-width: 768px) 50vw, 100vw" large />
        </SpotlightGroup>
      </PageSection>

      <PageSection id="otros-servicios" tone="light">
        <SectionHeader eyebrow="Más capacidades" title="Sitios web y capacitación de equipos." />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {otherServices.map((service) => <ImageLinkCard key={service.slug} href={`/servicios/${service.slug}`} image={service.image} tag={SERVICE_EXTRAS[service.slug].tag} title={service.title} description={service.short} />)}
        </div>
      </PageSection>

      <PageSection id="guias-para-evaluar" tone="mist">
        <SectionHeader eyebrow="Para evaluar el alcance" title="Qué comprobar antes de contratar." />
        <ul className="mt-7 flex flex-col gap-5"><li><TextLink href="/blog/apps-ia-desarrollo-asistido-diferencias">Distinguir una app con IA del desarrollo asistido por IA</TextLink></li><li><TextLink href="/blog/agentes-de-ia-para-empresas">Elegir entre un asistente, un flujo y un agente</TextLink></li><li><TextLink href="/blog/elegir-proveedor-automatizacion-ia-chile">Comparar entregables, pruebas y continuidad del proveedor</TextLink></li></ul>
      </PageSection>

      {/* ---------------- CIERRE ---------------- */}
      <CtaBand
        eyebrow="Primer paso"
        title="¿No sabes por dónde partir?"
        text="Cuéntanos el proceso, volumen y sistemas que utilizas para recomendar un punto de partida y su alcance."
        primary={BOOKING_ACTION}
        secondary={{ label: "Ver productos listos", href: "/productos" }}
      />
    </PageShell>
  );
}

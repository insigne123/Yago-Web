import { CaseStudyCard } from "@/components/cases/CaseStudyCard";
import { PageSection, SectionHeader } from "@/components/site/PageKit";
import { getPublishedCaseStudies, type EvidenceService } from "@/config/evidence";

export function RelatedCases({ service }: { service: EvidenceService }) {
  const items = getPublishedCaseStudies(service).slice(0, 3);
  if (!items.length) return null;
  return (
    <PageSection id="casos-relacionados" tone="light">
      <SectionHeader eyebrow="Casos documentados" title="Implementaciones y resultados de este servicio." />
      <div className="mt-10 grid gap-5 md:grid-cols-3">{items.map((item) => <CaseStudyCard key={item.slug} item={item} />)}</div>
    </PageSection>
  );
}

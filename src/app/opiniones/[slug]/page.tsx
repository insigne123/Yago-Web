import { notFound } from "next/navigation";
import { FeedbackPageShell } from "@/components/feedback/FeedbackPageShell";
import { QuestionnaireForm } from "@/components/feedback/QuestionnaireForm";
import { getQuestionnaire, QUESTIONNAIRES } from "@/config/questionnaires";
import { createPageMetadata } from "@/lib/seo";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return QUESTIONNAIRES.filter((item) => !item.legacyAxis).map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const questionnaire = getQuestionnaire(slug);
  if (!questionnaire || questionnaire.legacyAxis) return {};
  return { ...createPageMetadata({ title: `${questionnaire.title} | YAGO`, description: questionnaire.description, path: `/opiniones/${slug}` }),
    robots: { index: false, follow: false, googleBot: { index: false, follow: false } } };
}

export default async function QuestionnairePage({ params }: PageProps) {
  const { slug } = await params;
  const questionnaire = getQuestionnaire(slug);
  if (!questionnaire || questionnaire.legacyAxis) notFound();
  return <FeedbackPageShell title={questionnaire.title} badge={`${questionnaire.product} · ${questionnaire.audience}`} description={questionnaire.description} help={questionnaire.help}>
    <QuestionnaireForm key={questionnaire.slug} questionnaire={questionnaire} />
  </FeedbackPageShell>;
}

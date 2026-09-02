import { AutomationLandingPage } from "@/components/automation/AutomationLandingPage";
import { getAutomationPage } from "@/config/automation-pages";
import { getDailyUfRate } from "@/lib/uf";
import { createPageMetadata } from "@/lib/seo";

const page = getAutomationPage("sadt")!;

export const revalidate = 86400;

export const metadata = createPageMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  keywords: page.keywords,
  path: "/sadt",
});

export default async function SadtPage() {
  const ufRate = await getDailyUfRate();

  return <AutomationLandingPage page={page} ufRate={ufRate} />;
}

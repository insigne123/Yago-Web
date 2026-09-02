import { AutomationLandingPage } from "@/components/automation/AutomationLandingPage";
import { getAutomationPage } from "@/config/automation-pages";
import { getDailyUfRate } from "@/lib/uf";
import { createPageMetadata } from "@/lib/seo";

const page = getAutomationPage("axis")!;

export const revalidate = 86400;

export const metadata = createPageMetadata({
  title: page.seoTitle,
  description: page.seoDescription,
  keywords: page.keywords,
  path: "/axis",
});

export default async function AxisPage() {
  const ufRate = await getDailyUfRate();

  return <AutomationLandingPage page={page} ufRate={ufRate} />;
}

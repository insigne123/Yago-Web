import type { Metadata } from "next";
import { AutomationLandingPage } from "@/components/automation/AutomationLandingPage";
import { getAutomationPage } from "@/config/automation-pages";
import { getDailyUfRate } from "@/lib/uf";

const page = getAutomationPage("axis")!;

export const revalidate = 86400;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  keywords: page.keywords,
  alternates: { canonical: "/axis" },
  openGraph: {
    title: page.seoTitle,
    description: page.seoDescription,
    url: "/axis",
    siteName: "Yago",
    type: "website",
  },
};

export default async function AxisPage() {
  const ufRate = await getDailyUfRate();

  return <AutomationLandingPage page={page} ufRate={ufRate} />;
}

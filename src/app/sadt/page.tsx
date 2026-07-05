import type { Metadata } from "next";
import { AutomationLandingPage } from "@/components/automation/AutomationLandingPage";
import { getAutomationPage } from "@/config/automation-pages";
import { getDailyUfRate } from "@/lib/uf";

const page = getAutomationPage("sadt")!;

export const revalidate = 86400;

export const metadata: Metadata = {
  title: page.seoTitle,
  description: page.seoDescription,
  keywords: page.keywords,
  alternates: { canonical: "/sadt" },
  openGraph: {
    title: page.seoTitle,
    description: page.seoDescription,
    url: "/sadt",
    siteName: "Yago",
    type: "website",
  },
};

export default async function SadtPage() {
  const ufRate = await getDailyUfRate();

  return <AutomationLandingPage page={page} ufRate={ufRate} />;
}

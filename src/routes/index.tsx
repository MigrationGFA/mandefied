import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { HowItWorks } from "@/components/how-it-works-section";
import { FeaturesGrid } from "@/components/features-grid";
import { OfflineSection } from "@/components/offline-section";
import { UseCases } from "@/components/use-cases-grid";
import { DashboardPreview } from "@/components/dashboard-preview";
import { ReportingSection } from "@/components/reporting-section";
import { IntegritySection } from "@/components/integrity-section";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mandefied — Turn Projects into Measurable Impact" },
      {
        name: "description",
        content:
          "Real-time monitoring & evaluation platform for governments, NGOs, and enterprises. Track performance, measure outcomes, and generate funder-ready reports.",
      },
      { property: "og:title", content: "Mandefied — Turn Projects into Measurable Impact" },
      {
        property: "og:description",
        content:
          "From data to decisions. The operating system for performance management, project tracking, and impact reporting.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <HowItWorks />
        <FeaturesGrid />
        <OfflineSection />
        <DashboardPreview />
        <UseCases />
        <ReportingSection />
        <IntegritySection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

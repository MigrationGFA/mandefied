import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { FeaturesGrid } from "@/components/features-grid";
import { OfflineSection } from "@/components/offline-section";
import { ReportingSection } from "@/components/reporting-section";
import { IntegritySection } from "@/components/integrity-section";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Mandefied M&E Platform" },
      {
        name: "description",
        content:
          "Logframe builder, KPI management, offline data collection, real-time dashboards, automated AfDB-ready reporting, and audit trails.",
      },
      { property: "og:title", content: "Features — Mandefied M&E Platform" },
      {
        property: "og:description",
        content:
          "Everything you need to prove impact: logframes, indicators, offline collection, dashboards, automated reporting and audit trails.",
      },
    ],
  }),
  component: FeaturesPage,
});

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-12">
          <SectionHeading
            eyebrow="Capabilities"
            title={<>One platform. Every M&E capability you'll ever need.</>}
            description="Mandefied brings the entire monitoring & evaluation lifecycle under one roof — purpose-built for the realities of donor-funded, multi-stakeholder programs."
          />
        </Section>
        <FeaturesGrid />
        <OfflineSection />
        <ReportingSection />
        <IntegritySection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

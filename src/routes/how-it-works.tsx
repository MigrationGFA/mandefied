import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { HowItWorks } from "@/components/how-it-works-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — Mandefied" },
      {
        name: "description",
        content:
          "From defining your logframe to real-time dashboards and auto-generated reports — see the full Mandefied workflow in five steps.",
      },
      { property: "og:title", content: "How Mandefied works" },
      {
        property: "og:description",
        content:
          "One continuous workflow: define, measure, collect, validate, and decide. See the full M&E loop.",
      },
    ],
  }),
  component: HowPage,
});

function HowPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="How it works"
            title={<>The full M&E loop, in one platform.</>}
            description="From the first logframe entry to the funder report — every step connected, traceable, and real-time."
          />
        </Section>
        <HowItWorks />
        <DashboardPreview />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { UseCases } from "@/components/use-cases-grid";
import { CtaBanner } from "@/components/cta-banner";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — Mandefied for Government, NGOs & Enterprise" },
      {
        name: "description",
        content:
          "How governments, NGOs, donors and enterprises use Mandefied to track impact across infrastructure, education, healthcare, and economic development programs.",
      },
      { property: "og:title", content: "Use Cases — Mandefied" },
      {
        property: "og:description",
        content:
          "From AfDB-funded programs to ministry KPIs and field health workflows — see how Mandefied adapts to any industry.",
      },
    ],
  }),
  component: UseCasesPage,
});

function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="Industries"
            title={<>Built for the people who deliver change.</>}
            description="Mandefied is in production today across public sector, donor-funded development, and enterprise programs. Here's how teams use it."
          />
        </Section>
        <UseCases />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

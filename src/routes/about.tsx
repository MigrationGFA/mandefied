import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import fieldImg from "@/assets/field-data.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mandefied" },
      {
        name: "description",
        content:
          "Mandefied is the operating system for impact — built for the realities of monitoring, evaluating, and reporting on programs that change lives.",
      },
      { property: "og:title", content: "About Mandefied" },
      {
        property: "og:description",
        content:
          "Why we built Mandefied — and how it's powering programs from the Ekiti Knowledge Zone to AfDB-grade reporting.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="About Mandefied"
            title={<>The operating system for impact.</>}
            description="We built Mandefied because the world's most important programs were still being managed in spreadsheets. Decisions worth millions — and lives — deserved better."
          />
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <img
              src={fieldImg}
              alt="Field officer using Mandefied for offline data collection"
              loading="lazy"
              width={1200}
              height={900}
              className="w-full h-auto rounded-2xl shadow-elegant border border-border"
            />
            <div>
              <h2 className="text-3xl font-semibold tracking-tight">From the field. For the field.</h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Mandefied is currently powering project tracking and reporting for the
                Ekiti Knowledge Zone — managing large-scale economic development
                programs, tracking indicators across multiple work-streams, and
                producing donor-ready reports for partners like the African
                Development Bank.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every feature we ship is shaped by what field officers, M&E leads,
                program directors, and funders actually need — not what looks good
                in a slide deck.
              </p>
            </div>
          </div>
        </Section>

        <Section className="bg-surface">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { k: "Real-time", v: "Indicator updates from field to dashboard in seconds." },
              { k: "Auditable", v: "Every number tied to a person, place and timestamp." },
              { k: "Adaptable", v: "Configurable for any sector, framework, or funder." },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card p-7">
                <p className="text-sm font-mono uppercase tracking-wider text-primary">{s.k}</p>
                <p className="mt-3 text-lg text-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </Section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

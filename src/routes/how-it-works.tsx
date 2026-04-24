import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { HowItWorks } from "@/components/how-it-works-section";
import { DashboardPreview } from "@/components/dashboard-preview";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, TrendingUp, FileCheck } from "lucide-react";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How it works — From field data to funder report | Mandefied" },
      {
        name: "description",
        content:
          "See the full Mandefied workflow: define the logframe, attach indicators, collect offline field data, validate through M&E approval, and generate live dashboards & AfDB reports.",
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

const before = [
  "Spreadsheets emailed back and forth weekly",
  "Field paper forms re-typed (and lost)",
  "Funder reports rebuilt by hand every quarter",
  "Numbers no one can fully trace or trust",
  "Approvals stuck in WhatsApp threads",
];

const after = [
  "Live dashboard auto-updates from every submission",
  "Mobile, offline-capable forms with GPS + photo evidence",
  "AfDB-template reports generated in minutes",
  "Every value signed by person, place, time, device",
  "Multi-tier approval flow built into the platform",
];

const outcomes = [
  {
    icon: Clock,
    k: "85%",
    v: "less time spent on quarterly reporting",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: TrendingUp,
    k: "10×",
    v: "faster from field submission to dashboard",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: FileCheck,
    k: "100%",
    v: "of indicator values traceable to source",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]",
  },
];

function HowPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="How it works"
            title={
              <>
                The full M&E loop, <span className="text-gradient-spectrum">in one platform</span>.
              </>
            }
            description="From the first logframe entry to the funder report — every step connected, traceable, and real-time."
          />
        </Section>

        <HowItWorks />

        {/* Before / After comparison */}
        <Section>
          <SectionHeading
            eyebrow="The transformation"
            title={
              <>
                Before Mandefied vs. <span className="text-gradient-warm">after Mandefied</span>
              </>
            }
            description="Most teams describe a similar story. Here's the shift."
          />
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            <div className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <span className="h-9 w-9 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center font-bold">
                  ×
                </span>
                <h3 className="text-lg font-semibold">Before</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {before.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border-2 border-transparent bg-gradient-to-br from-[oklch(0.42_0.14_155)] via-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)] p-[2px] shadow-elegant">
              <div className="rounded-[14px] bg-card p-7 h-full">
                <div className="flex items-center gap-3">
                  <span className="h-9 w-9 rounded-xl bg-gradient-to-br from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)] text-white flex items-center justify-center font-bold">
                    ✓
                  </span>
                  <h3 className="text-lg font-semibold">After Mandefied</h3>
                </div>
                <ul className="mt-5 space-y-3">
                  {after.map((a) => (
                    <li key={a} className="flex gap-3 text-sm text-foreground">
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)] shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Quantified outcomes */}
        <Section className="bg-surface">
          <SectionHeading
            eyebrow="Outcomes"
            title={
              <>
                What teams actually{" "}
                <span className="text-gradient-spectrum">measure differently</span>
              </>
            }
            description="Indicative results from teams who have moved their M&E onto Mandefied."
          />
          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {outcomes.map((o) => (
              <div
                key={o.v}
                className="rounded-2xl border border-border bg-card p-8 text-center hover:shadow-elegant transition-shadow"
              >
                <div
                  className={`mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br ${o.tone} flex items-center justify-center text-white shadow-soft`}
                >
                  <o.icon className="h-6 w-6" />
                </div>
                <p
                  className={`mt-6 text-5xl font-semibold tracking-tight bg-gradient-to-br ${o.tone} bg-clip-text text-transparent`}
                >
                  {o.k}
                </p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{o.v}</p>
              </div>
            ))}
          </div>
        </Section>

        <DashboardPreview />

        <Section className="py-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight">
              Want to see this on your own program?
            </h3>
            <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
              We'll set up a 30-minute walkthrough using your sector, your indicators, and your
              funder's report template.
            </p>
            <Link to="/demo" className="inline-block mt-7">
              <Button
                size="lg"
                className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white"
              >
                Request a tailored demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Section>

        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

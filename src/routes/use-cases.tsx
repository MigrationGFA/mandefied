import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { UseCases } from "@/components/use-cases-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — Mandefied for Government, NGOs & Enterprise" },
      {
        name: "description",
        content:
          "Mandefied powers mission-critical programmes across governments, development organizations, NGOs, enterprises and public institutions.",
      },
      { property: "og:title", content: "Use Cases — Mandefied" },
      {
        property: "og:description",
        content:
          "Mandefied helps governments, development organizations, NGOs and enterprises transform programme data into measurable impact.",
      },
    ],
  }),
  component: UseCasesPage,
});

const stories = [
  {
    sector: "Economic Development",
    title: "Government Economic Development Programme",
    body: "Mandefied supports the monitoring of large-scale economic development initiatives, tracking infrastructure delivery, enterprise support, investment promotion, beneficiary engagement and programme performance across multiple implementation teams.",
    metrics: [
      { v: "115,000+", k: "Beneficiaries monitored" },
      { v: "Multi-billion naira", k: "Programme value tracked" },
      { v: "12+", k: "Active implementation workstreams" },
    ],
    tone: "from-[oklch(0.42_0.14_155)] via-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    sector: "Public Health",
    title: "Community health network",
    body: "Healthcare workers collect field data offline from primary and secondary healthcare facilities while supervisors validate submissions in real time for operational reporting and decision-making.",
    metrics: [
      { v: "8.5k", k: "Patient touchpoints / mo" },
      { v: "94%", k: "Submissions validated < 24h" },
      { v: "0", k: "Lost records since launch" },
    ],
    tone: "from-[oklch(0.7_0.21_28)] via-[oklch(0.62_0.24_350)] to-[oklch(0.5_0.24_260)]",
  },
  {
    sector: "Education & Workforce Development",
    title: "Youth employment initiative",
    body: "Track vocational training, employment initiatives, infrastructure delivery and long-term programme outcomes through integrated performance dashboards and SDG-aligned indicators.",
    metrics: [
      { v: "8,500+", k: "Participants tracked" },
      { v: "120 km", k: "Infrastructure monitored" },
      { v: "On Track", k: "Programme Performance" },
    ],
    tone: "from-[oklch(0.78_0.22_140)] via-[oklch(0.42_0.14_155)] to-[oklch(0.5_0.24_260)]",
  },
];

const testimonials = [
  {
    q: "What once took weeks of manual reporting is now completed in a matter of hours. Our teams spend less time compiling data and more time improving programme performance.",
    title: "Programme Director",
    org: "Government Development Programme",
  },
  {
    q: "Every figure on our dashboard is supported by verifiable field evidence, giving management complete confidence in our reporting and decision-making.",
    title: "Head of Monitoring & Evaluation",
    org: "Public Sector Institution",
  },
  {
    q: "Mandefied has transformed how we manage projects across multiple locations. We now have one trusted source of truth for every programme.",
    title: "Programme Manager",
    org: "Development Organisation",
  },
];

function UseCasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="Industries"
            title={
              <>
                Built for organizations that{" "}
                <span className="text-gradient-spectrum">measure, manage and deliver impact</span>.
              </>
            }
            description="Mandefied powers mission-critical programmes across governments, development organizations, NGOs, enterprises and public institutions. Whether you're managing infrastructure, healthcare, education or economic development initiatives, Mandefied adapts to your programme—not the other way around."
          />
          <p className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
            Mandefied helps governments, development organizations, NGOs and enterprises transform
            programme data into measurable impact. From field data collection and performance
            monitoring to executive dashboards and automated reporting, every outcome is verifiable,
            traceable and decision-ready.
          </p>
        </Section>

        <UseCases />

        <Section className="bg-surface">
          <SectionHeading
            eyebrow="In production"
            title={
              <>
                Built for complex programmes.{" "}
                <span className="text-gradient-warm">Proven across sectors.</span>
              </>
            }
            description="Organizations use Mandefied to manage complex initiatives, monitor performance and generate reliable evidence for decision-making and accountability."
          />

          <div className="mt-16 grid lg:grid-cols-3 gap-5">
            {stories.map((s) => (
              <div
                key={s.title}
                className="relative rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-elegant transition-all"
              >
                <div className={`h-2 w-full bg-gradient-to-r ${s.tone}`} />
                <div className="p-7">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                    {s.sector}
                  </p>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-border">
                    {s.metrics.map((m) => (
                      <div key={m.k}>
                        <p
                          className={`text-xl font-semibold bg-gradient-to-br ${s.tone} bg-clip-text text-transparent`}
                        >
                          {m.v}
                        </p>
                        <p className="mt-1 text-[11px] text-muted-foreground leading-tight">
                          {m.k}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="relative rounded-2xl border border-border bg-card p-8 shadow-soft"
              >
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/15" />
                <p className="text-lg leading-relaxed text-foreground">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-spectrum" aria-hidden />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.title}</p>
                    <p className="text-xs text-muted-foreground">{t.org}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/demo">
              <Button
                size="lg"
                className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white"
              >
                Bring Mandefied to your program <ArrowRight className="ml-1 h-4 w-4" />
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

import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import fieldImg from "@/assets/field-data.jpg";
import { ArrowRight, Heart, Eye, Compass, Sprout } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — The Enterprise Platform for Performance & Impact | Mandefied" },
      {
        name: "description",
        content:
          "Mandefied is an enterprise-grade Monitoring, Evaluation, Learning and Performance Management platform for governments, development organizations, NGOs and enterprises.",
      },
      { property: "og:title", content: "About Mandefied" },
      {
        property: "og:description",
        content:
          "The operating system for measurable impact — built from real-world implementation across government, institutional and development programmes.",
      },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Heart,
    title: "Built with practitioners, not assumptions",
    body: "Every feature is designed and validated with real programme managers, monitoring and evaluation professionals, field officers and institutional users before deployment.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    body: "Every reported value should be traceable to verified evidence, including who submitted it, where it was captured, when it was recorded and how it was approved.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: Compass,
    title: "Built for accountability",
    body: "Reporting should be a natural outcome of programme delivery—not a separate administrative exercise. Mandefied enables organizations to produce accurate, consistent and evidence-backed reports with confidence.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: Sprout,
    title: "Africa-first. Globally relevant.",
    body: "Mandefied was born from the realities of implementing complex programmes across Africa and is designed to support organizations anywhere that require transparency, accountability and measurable impact.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  },
];

const stats = [
  { v: "115,000+", k: "Beneficiaries and participants monitored" },
  { v: "₦1.2B+", k: "Programme and project value tracked" },
  { v: "100%", k: "Audit-traceable performance records" },
  { v: "24/7", k: "Real-time monitoring and reporting" },
];

const gfaHighlights = [
  "Technology & Digital Transformation partner to Ogun State Government",
  "Digital Innovation & MSME Development partner to six State Governments in Nigeria",
  "Digital Transformation & SME Ecosystem partner to MTN Nigeria",
  "Official African Partner to Hub 71 — UAE's global tech ecosystem",
  "African Startup & SME Ecosystem partner to Microsoft",
  "Selected by Microsoft for its Entrepreneurship for Social Impact programme",
  "Selected by the U.S. State Department & Atlantic Council for AI Connect",
  "Up-skilled 600,000 entrepreneurs & SMEs in digital & business skills",
  "Former Technical Implementation Partners to the Nigeria AfCFTA Coordination Office",
  "Co-promoters of the Nigerian Startup Bill (now an Act)",
  "Accredited Training Provider for Nigeria's National 3MTT Programme",
  "SMME Development programme partner for the National Government of South Africa",
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="About Mandefied"
            title={
              <>
                The operating system for{" "}
                <span className="text-gradient-spectrum">measurable impact</span>.
              </>
            }
            description="We built Mandefied because too many critical programmes were still being managed with spreadsheets, disconnected tools and manual reporting. Projects worth billions in investment—and outcomes that affect millions of lives—deserve better."
          />
          <p className="mt-6 max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed">
            Mandefied is an enterprise-grade Monitoring, Evaluation, Learning and Performance
            Management (MELPM) platform that enables governments, development organizations, NGOs
            and enterprises to plan, monitor, measure and report programme performance in real time.
          </p>
        </Section>

        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div
                className="absolute -inset-4 bg-gradient-spectrum opacity-15 blur-3xl rounded-full"
                aria-hidden
              />
              <img
                src={fieldImg}
                alt="Field officer using Mandefied for offline data collection"
                loading="lazy"
                width={1200}
                height={900}
                className="relative w-full h-auto rounded-2xl shadow-elegant border border-border"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                Built from real-world{" "}
                <span className="text-gradient-warm">implementation experience.</span>
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Mandefied was developed through hands-on implementation across large-scale
                government, institutional and development programmes. Our platform supports
                organizations managing complex initiatives, coordinating multiple stakeholders,
                tracking performance indicators and producing reliable, evidence-based reports for
                executives, regulators and development partners.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every capability in Mandefied is shaped by the realities of programme
                implementation. We work alongside project teams, field officers, monitoring and
                evaluation professionals, programme managers and executive leadership to understand
                operational challenges before building solutions that simplify the work.
              </p>

              <p className="mt-6 text-sm font-semibold text-foreground">Platform Highlights</p>
              <div className="mt-4 grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.k} className="rounded-xl border border-border bg-card p-4">
                    <p className="text-2xl font-semibold text-gradient-spectrum">{s.v}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.k}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section className="bg-surface">
          <SectionHeading
            eyebrow="What we believe"
            title={
              <>
                Four principles that{" "}
                <span className="text-gradient-spectrum">guide everything we build</span>.
              </>
            }
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-elegant transition-all"
              >
                <div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${v.tone} flex items-center justify-center text-white shadow-soft`}
                >
                  <v.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section>
          <SectionHeading
            eyebrow="About GFA Technologies"
            title={
              <>
                Built by a team with{" "}
                <span className="text-gradient-warm">proven digital transformation experience</span>
                .
              </>
            }
            description="Mandefied is developed by GFA Technologies (formerly GetFundedAfrica) — a technology company with deep experience implementing large-scale government, enterprise and development programmes across Africa and beyond."
          />
          <ul className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {gfaHighlights.map((item) => (
              <li
                key={item}
                className="flex gap-2.5 rounded-xl border border-border bg-card px-4 py-3 text-sm text-muted-foreground"
              >
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-spectrum shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Section className="bg-surface">
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
              Our Headquarters
            </p>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Proudly Built at <span className="text-gradient-warm">Ogun Tech Hub</span>
            </h3>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Mandefied is developed by a team of technology professionals passionate about helping
              organizations improve programme delivery, institutional performance and evidence-based
              decision-making through digital innovation.
            </p>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you're managing a government initiative, a development programme, an
              enterprise portfolio or a social impact project, we're ready to help you transform the
              way you measure success.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <a
                href="tel:+2348030838906"
                className="text-foreground hover:text-primary transition-colors"
              >
                📞 +234 803 083 8906
              </a>
              <span className="hidden sm:inline text-border">·</span>
              <a
                href="mailto:hello@mandefied.com"
                className="text-foreground hover:text-primary transition-colors"
              >
                ✉ hello@mandefied.com
              </a>
            </div>
            <Link to="/demo" className="inline-block mt-8">
              <Button
                size="lg"
                className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white"
              >
                Request a demo <ArrowRight className="ml-1 h-4 w-4" />
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

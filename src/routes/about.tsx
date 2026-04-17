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
      { title: "About — The team building the OS for impact | Mandefied" },
      {
        name: "description",
        content:
          "Why we built Mandefied: because programs that change lives deserved better than spreadsheets. Built in Africa, for the realities of donor-funded, multi-stakeholder work.",
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

const values = [
  {
    icon: Heart,
    title: "Built with the field, not for it",
    body: "Every feature ships only after a real M&E officer or field supervisor has used it on a real program.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: Eye,
    title: "Radical transparency",
    body: "If a number can't be traced to a person, place, and timestamp, we don't show it. Period.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: Compass,
    title: "Funder-aligned",
    body: "We design templates and frameworks alongside donors so reporting is a byproduct, not a project.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: Sprout,
    title: "Africa-first, globally relevant",
    body: "Born from the realities of African development programs — designed to scale anywhere with similar challenges.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  },
];

const stats = [
  { v: "115k+", k: "beneficiaries tracked" },
  { v: "₦1.2B+", k: "in funding monitored" },
  { v: "100%", k: "audit-traceable values" },
  { v: "24/7", k: "real-time operation" },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-8">
          <SectionHeading
            eyebrow="About Mandefied"
            title={<>The <span className="text-gradient-spectrum">operating system</span> for impact.</>}
            description="We built Mandefied because the world's most important programs were still being managed in spreadsheets. Decisions worth millions — and lives — deserved better."
          />
        </Section>

        {/* Story */}
        <Section>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-spectrum opacity-15 blur-3xl rounded-full" aria-hidden />
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
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">From the field. <span className="text-gradient-warm">For the field.</span></h2>
              <p className="mt-5 text-muted-foreground leading-relaxed">
                Mandefied powers project tracking and reporting for the
                <strong className="text-foreground"> Ekiti Knowledge Zone</strong> — managing large-scale economic development
                programs, tracking indicators across multiple work-streams, and
                producing donor-ready reports for partners like the
                <strong className="text-foreground"> African Development Bank</strong>.
              </p>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                Every feature we ship is shaped by what field officers, M&E leads,
                program directors, and funders actually need — not what looks good
                in a slide deck. We sit with our customers, in their offices and
                their field sites, until we understand the work.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
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

        {/* Values */}
        <Section className="bg-surface">
          <SectionHeading
            eyebrow="What we believe"
            title={<>Four principles, <span className="text-gradient-spectrum">no shortcuts</span></>}
            description="The values that decide what we build, who we hire, and what we refuse to ship."
          />
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-elegant transition-all">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${v.tone} flex items-center justify-center text-white shadow-soft`}>
                  <v.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-base font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* HQ / contact tease */}
        <Section>
          <div className="rounded-3xl border border-border bg-card p-10 md:p-14 text-center shadow-soft">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Our HQ</p>
            <h3 className="mt-4 text-3xl md:text-4xl font-semibold tracking-tight">
              Built at <span className="text-gradient-warm">Ogun Tech Hub</span>
            </h3>
            <p className="mt-5 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Talk to a real human about your program. We answer every demo request within one business day.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center text-sm">
              <a href="tel:+2348030838906" className="text-foreground hover:text-primary transition-colors">📞 +234 803 083 8906</a>
              <span className="hidden sm:inline text-border">·</span>
              <a href="mailto:hello@mandefied.com" className="text-foreground hover:text-primary transition-colors">✉ hello@mandefied.com</a>
            </div>
            <Link to="/demo" className="inline-block mt-8">
              <Button size="lg" className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white">
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

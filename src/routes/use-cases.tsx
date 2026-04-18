import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { UseCases } from "@/components/use-cases-grid";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Quote } from "lucide-react";
import dayoImg from "@/assets/testimonial-dayo.jpg";

export const Route = createFileRoute("/use-cases")({
  head: () => ({
    meta: [
      { title: "Use Cases — Mandefied for Government, NGOs, Donors & Enterprise" },
      {
        name: "description",
        content:
          "From AfDB-funded development programs and ministry KPIs to healthcare logistics and infrastructure projects — see how teams use Mandefied to prove impact.",
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

const stories = [
  {
    sector: "Economic Development",
    title: "Ekiti Knowledge Zone",
    body: "A flagship economic development zone uses Mandefied to track infrastructure milestones, beneficiary enrollment, and AfDB indicator progress in real time across multiple work-streams.",
    metrics: [
      { v: "115k+", k: "Beneficiaries tracked" },
      { v: "₦1.2B", k: "Funding monitored" },
      { v: "12", k: "Active work-streams" },
    ],
    tone: "from-[oklch(0.42_0.14_155)] via-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    sector: "Public Health",
    title: "Community health network",
    body: "Field officers submit visit data offline from rural clinics. Supervisors validate within 24 hours; outbreak indicators feed straight into ministry dashboards.",
    metrics: [
      { v: "8.5k", k: "Patient touchpoints / mo" },
      { v: "94%", k: "Submissions validated < 24h" },
      { v: "0", k: "Lost records since launch" },
    ],
    tone: "from-[oklch(0.7_0.21_28)] via-[oklch(0.62_0.24_350)] to-[oklch(0.5_0.24_260)]",
  },
  {
    sector: "Skills & Employment",
    title: "Youth employment initiative",
    body: "Tracks 120 km of rural roads constructed and 8,500 trained youths from intake to 12-month post-program outcome — all rolled up into a single SDG-tagged indicator dashboard.",
    metrics: [
      { v: "8,500", k: "Trained youths" },
      { v: "120 km", k: "Roads constructed" },
      { v: "On Track", k: "Funder status" },
    ],
    tone: "from-[oklch(0.78_0.22_140)] via-[oklch(0.42_0.14_155)] to-[oklch(0.5_0.24_260)]",
  },
];

const testimonials = [
  {
    q: "What used to be a three-week reporting scramble now takes us a single afternoon. Our M&E officers can finally focus on insight, not data wrangling.",
    name: "Dayo Adeoye",
    role: "Programme Director, Ekiti Knowledge Zone",
    img: dayoImg,
  },
  {
    q: "We finally trust the numbers. Every single value on our dashboard is traceable back to a field officer, a GPS pin, and a timestamp.",
    name: "Head of M&E",
    role: "Public Sector Development Programme",
    img: null,
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
            title={<>Built for the people who <span className="text-gradient-spectrum">deliver change</span>.</>}
            description="Mandefied is in production today across public sector, donor-funded development, and enterprise programs. Here's how teams use it."
          />
        </Section>

        <UseCases />

        {/* Customer stories */}
        <Section className="bg-surface">
          <SectionHeading
            eyebrow="In production"
            title={<>Real programs. <span className="text-gradient-warm">Real results.</span></>}
            description="A snapshot of how organizations use Mandefied in the field today."
          />

          <div className="mt-16 grid lg:grid-cols-3 gap-5">
            {stories.map((s) => (
              <div key={s.title} className="relative rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-elegant transition-all">
                <div className={`h-2 w-full bg-gradient-to-r ${s.tone}`} />
                <div className="p-7">
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">{s.sector}</p>
                  <h3 className="mt-2 text-xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
                  <div className="mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-border">
                    {s.metrics.map((m) => (
                      <div key={m.k}>
                        <p className={`text-xl font-semibold bg-gradient-to-br ${s.tone} bg-clip-text text-transparent`}>{m.v}</p>
                        <p className="mt-1 text-[11px] text-muted-foreground leading-tight">{m.k}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Testimonials */}
        <Section>
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="relative rounded-2xl border border-border bg-card p-8 shadow-soft">
                <Quote className="absolute top-6 right-6 h-10 w-10 text-primary/15" />
                <p className="text-lg leading-relaxed text-foreground">"{t.q}"</p>
                <div className="mt-6 flex items-center gap-3">
                  {t.img ? (
                    <img
                      src={t.img}
                      alt={`${t.name}, ${t.role}`}
                      width={48}
                      height={48}
                      loading="lazy"
                      className="h-12 w-12 rounded-full object-cover ring-2 ring-border"
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-gradient-spectrum" aria-hidden />
                  )}
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link to="/demo">
              <Button size="lg" className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white">
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

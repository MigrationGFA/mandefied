import { Section, SectionHeading } from "@/components/section";
import {
  Building2,
  HeartPulse,
  GraduationCap,
  HardHat,
  Landmark,
  HandCoins,
  Globe2,
  Wheat,
  Leaf,
  BarChart3,
  Heart,
  Lightbulb,
  MapPin,
} from "lucide-react";

const cases = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    body: "Monitor ministry performance, coordinate departments and agencies, automate reporting, track strategic initiatives and publish citizen-focused performance dashboards.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: MapPin,
    title: "Local Government Administration",
    body: "Track local development initiatives, service delivery, community programmes and ward-level performance with field-verified data and executive reporting.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.5_0.24_260)]",
  },
  {
    icon: Globe2,
    title: "International Development Programmes",
    body: "Manage multi-partner programmes with standardized indicator frameworks, field data collection, compliance workflows and transparent reporting. Generate reports aligned with government requirements, institutional frameworks, international development standards and SDG reporting guidelines.",
    tone: "from-[oklch(0.62_0.24_350)] to-[oklch(0.5_0.24_260)]",
  },
  {
    icon: HandCoins,
    title: "NGOs & Foundations",
    body: "Run multi-country programmes with consistent indicator frameworks across partners, grant compliance and evidence-based impact reporting.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills Programmes",
    body: "Monitor enrolment, learning outcomes, certification, employment outcomes and institutional performance across training programmes.",
    tone: "from-[oklch(0.62_0.24_350)] to-[oklch(0.7_0.21_28)]",
  },
  {
    icon: HeartPulse,
    title: "Healthcare & Public Health",
    body: "Track patient services, outreach campaigns, disease surveillance, medicine distribution, healthcare facilities and programme outcomes from one platform.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: Wheat,
    title: "Agriculture & Rural Development",
    body: "Monitor farmers, extension activities, crop programmes, cooperatives, irrigation projects and agricultural interventions using mobile-first field data collection.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.42_0.14_155)]",
  },
  {
    icon: HardHat,
    title: "Infrastructure Projects",
    body: "Track project milestones, contractor performance, HSE compliance, geo-tagged site inspections and project delivery in real time.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  },
  {
    icon: Leaf,
    title: "Climate & Environmental Programmes",
    body: "Measure environmental indicators, conservation activities, carbon initiatives, afforestation programmes and sustainability performance.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: BarChart3,
    title: "Corporate ESG & Sustainability",
    body: "Track environmental, social and governance commitments alongside corporate social responsibility projects with measurable impact reporting.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: Heart,
    title: "CSR & Social Impact",
    body: "Manage community investment programmes, beneficiary tracking, volunteer initiatives and social impact reporting with full audit trails.",
    tone: "from-[oklch(0.62_0.24_350)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: Lightbulb,
    title: "Research & Innovation Programmes",
    body: "Monitor research outputs, innovation milestones, pilot deployments and programme outcomes across academic and institutional initiatives.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.7_0.21_28)]",
  },
];

export function UseCases() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Use cases"
        title={
          <>
            Mandefied adapts to <span className="text-gradient-warm">your workflow</span>
            <br className="hidden md:inline" />— not the other way around.
          </>
        }
        description="One intelligent platform, configured for every programme type—from government transformation initiatives to enterprise performance management."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cases.map((c) => (
          <div
            key={c.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
          >
            <div
              className={`absolute -top-16 -right-16 h-44 w-44 rounded-full bg-gradient-to-br ${c.tone} opacity-10 group-hover:opacity-25 blur-2xl transition-opacity`}
            />
            <div
              className={`relative h-12 w-12 rounded-2xl bg-gradient-to-br ${c.tone} flex items-center justify-center text-white shadow-soft`}
            >
              <c.icon className="h-6 w-6" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

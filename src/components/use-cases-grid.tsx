import { Section, SectionHeading } from "@/components/section";
import { Building2, HeartPulse, GraduationCap, HardHat, Landmark, HandCoins } from "lucide-react";

const cases = [
  {
    icon: Landmark,
    title: "Government & Public Sector",
    body: "Track ministry KPIs, coordinate agencies, and publish citizen-facing scorecards.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: HandCoins,
    title: "NGOs & Development",
    body: "Run multi-country programs with consistent indicator frameworks across partners.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: Building2,
    title: "Donor-Funded Projects",
    body: "AfDB, World Bank, EU, USAID — output reports in their templates, not yours.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: HardHat,
    title: "Infrastructure & Construction",
    body: "Site progress, milestone payments, and HSE indicators — all geo-tagged.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  },
  {
    icon: GraduationCap,
    title: "Education & Skills",
    body: "Enrollment, completion, and post-program outcome tracking across cohorts.",
    tone: "from-[oklch(0.62_0.24_350)] to-[oklch(0.7_0.21_28)]",
  },
  {
    icon: HeartPulse,
    title: "Healthcare Programs",
    body: "Patient touchpoints, supply chains, outbreak monitoring, and clinic KPIs.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.78_0.22_140)]",
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
        description="One platform, configured for any program type. Industries running on Mandefied today:"
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

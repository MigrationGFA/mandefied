import { Section, SectionHeading } from "@/components/section";
import { Building2, HeartPulse, GraduationCap, HardHat, Landmark, HandCoins } from "lucide-react";

const cases = [
  { icon: Landmark, title: "Government & Public Sector", body: "Track ministry KPIs, coordinate agencies, report to the public." },
  { icon: HandCoins, title: "NGOs & Development", body: "Run multi-country programs with consistent indicator frameworks." },
  { icon: Building2, title: "Donor-Funded Projects", body: "AfDB, World Bank, EU — output reports in their templates, not yours." },
  { icon: HardHat, title: "Infrastructure & Construction", body: "Site progress, milestone payments, and safety indicators in one place." },
  { icon: GraduationCap, title: "Education & Skills", body: "Enrollment, completion, and outcome tracking across cohorts." },
  { icon: HeartPulse, title: "Healthcare Programs", body: "Patient touch-points, supply chains, and outbreak monitoring." },
];

export function UseCases() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Use cases"
        title={<>Mandefied adapts to your workflow <br className="hidden md:inline" />— not the other way around.</>}
        description="One platform, configured for any program type. Industries running on Mandefied today:"
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {cases.map((c) => (
          <div
            key={c.title}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 hover:border-primary/30 hover:shadow-elegant transition-all"
          >
            <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-gradient-primary opacity-0 group-hover:opacity-10 blur-2xl transition-opacity" />
            <c.icon className="h-7 w-7 text-primary" strokeWidth={1.75} />
            <h3 className="mt-5 text-lg font-semibold text-foreground">{c.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

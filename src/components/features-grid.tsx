import { Section, SectionHeading } from "@/components/section";
import {
  Layers,
  Gauge,
  WifiOff,
  LineChart,
  FileBarChart,
  Users,
  History,
  Globe2,
} from "lucide-react";

const features = [
  {
    icon: Layers,
    title: "Logframe & Results Framework Builder",
    body: "Visually map impact → outcomes → outputs → activities. Drag, link, and version with confidence.",
  },
  {
    icon: Gauge,
    title: "KPI & Indicator Management",
    body: "Define targets, baselines, and milestones. Auto-calculate progress against any indicator.",
  },
  {
    icon: WifiOff,
    title: "Offline Data Collection",
    body: "Mobile-first forms that work without signal. Sync the moment connectivity returns.",
  },
  {
    icon: LineChart,
    title: "Real-Time Dashboards",
    body: "Every KPI, project, and field officer — live. Drill from impact to a single submission in seconds.",
  },
  {
    icon: FileBarChart,
    title: "Automated Reporting",
    body: "Quarterly, annual, and AfDB-template reports generated on demand — no copy-paste.",
  },
  {
    icon: Users,
    title: "Role-Based Access & Approvals",
    body: "Officers, supervisors, M&E leads, and admins each see exactly what they should.",
  },
  {
    icon: History,
    title: "Audit Trails & Verification",
    body: "Every edit, approval, and value change is signed, timestamped, and immutable.",
  },
  {
    icon: Globe2,
    title: "SDG Alignment Tracking",
    body: "Tag indicators against the UN SDGs and produce alignment reports automatically.",
  },
];

export function FeaturesGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Capabilities"
        title={<>Everything you need to prove impact.</>}
        description="A complete M&E stack — purpose-built for the realities of field-driven, donor-funded, multi-stakeholder programs."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-0.5 transition-all duration-300"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary/15 to-accent/15 border border-primary/10 flex items-center justify-center text-primary">
              <f.icon className="h-5 w-5" strokeWidth={2} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

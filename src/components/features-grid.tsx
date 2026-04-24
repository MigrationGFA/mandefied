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
    tone: "emerald",
  },
  {
    icon: Gauge,
    title: "KPI & Indicator Management",
    body: "Define targets, baselines, and milestones. Auto-calculate progress against any indicator.",
    tone: "cobalt",
  },
  {
    icon: WifiOff,
    title: "Offline Data Collection",
    body: "Mobile-first forms that work without signal. Sync the moment connectivity returns.",
    tone: "coral",
  },
  {
    icon: LineChart,
    title: "Real-Time Dashboards",
    body: "Every KPI, project, and field officer — live. Drill from impact to a single submission in seconds.",
    tone: "magenta",
  },
  {
    icon: FileBarChart,
    title: "Automated Reporting",
    body: "Quarterly, annual, and AfDB-template reports generated on demand — no copy-paste.",
    tone: "lime",
  },
  {
    icon: Users,
    title: "Role-Based Access & Approvals",
    body: "Officers, supervisors, M&E leads, and admins each see exactly what they should.",
    tone: "cobalt",
  },
  {
    icon: History,
    title: "Audit Trails & Verification",
    body: "Every edit, approval, and value change is signed, timestamped, and immutable.",
    tone: "emerald",
  },
  {
    icon: Globe2,
    title: "SDG Alignment Tracking",
    body: "Tag indicators against the UN SDGs and produce alignment reports automatically.",
    tone: "coral",
  },
] as const;

const toneStyles: Record<string, string> = {
  emerald: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  lime: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  cobalt: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  magenta: "from-[oklch(0.62_0.24_350)] to-[oklch(0.7_0.21_28)]",
  coral: "from-[oklch(0.7_0.21_28)] to-[oklch(0.78_0.22_140)]",
};

export function FeaturesGrid() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Capabilities"
        title={
          <>
            Everything you need to <span className="text-gradient-spectrum">prove impact</span>.
          </>
        }
        description="A complete M&E stack — purpose-built for the realities of field-driven, donor-funded, multi-stakeholder programs."
      />

      <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((f) => (
          <div
            key={f.title}
            className="group relative rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden"
          >
            <div
              className={`h-11 w-11 rounded-xl bg-gradient-to-br ${toneStyles[f.tone]} flex items-center justify-center text-white shadow-soft`}
            >
              <f.icon className="h-5 w-5" strokeWidth={2.25} />
            </div>
            <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
            <div
              className={`absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${toneStyles[f.tone]} opacity-0 group-hover:opacity-100 transition-opacity`}
            />
          </div>
        ))}
      </div>
    </Section>
  );
}

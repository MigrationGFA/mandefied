import { Section, SectionHeading } from "@/components/section";
import { Target, Gauge, Smartphone, ShieldCheck, BarChart4 } from "lucide-react";

const steps = [
  {
    n: "01",
    icon: Target,
    title: "Define your project",
    body: "Build the full logframe — impact, outcomes, outputs, and activities — in a guided visual editor.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    n: "02",
    icon: Gauge,
    title: "Attach indicators",
    body: "Set KPIs, baselines, targets, and SDG alignment. Roll-ups happen automatically.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Collect field data",
    body: "Mobile-first, offline-capable forms with GPS, photos, and timestamped evidence.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Review & approve",
    body: "Multi-tier M&E validation workflow — every submission is verified before it moves.",
    tone: "from-[oklch(0.62_0.24_350)] to-[oklch(0.7_0.21_28)]",
  },
  {
    n: "05",
    icon: BarChart4,
    title: "Real-time insights",
    body: "Dashboards update instantly. Reports auto-generate, ready for funders.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.78_0.22_140)]",
  },
];

export function HowItWorks() {
  return (
    <Section id="how" className="bg-surface">
      <SectionHeading
        eyebrow="The full loop"
        title={<>From <span className="text-gradient-spectrum">data to decisions</span>, in five clear steps.</>}
        description="One continuous workflow connects field officers, M&E teams, and decision-makers — without spreadsheets, email chains, or lost evidence."
      />

      <div className="mt-16 grid md:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-elegant">
        {steps.map((s, i) => (
          <div
            key={s.n}
            className="relative bg-card p-7 flex flex-col gap-4 hover:bg-surface-elevated transition-colors group"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${s.tone} flex items-center justify-center text-white shadow-soft group-hover:scale-110 transition-transform`}>
                <s.icon className="h-5 w-5" strokeWidth={2.25} />
              </div>
              <span className="text-xs font-mono font-semibold text-muted-foreground/60">{s.n}</span>
            </div>
            <div>
              <h3 className="text-base font-semibold text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-10 -right-3 z-10 h-6 w-6 rounded-full bg-card border border-border items-center justify-center text-muted-foreground">
                <svg viewBox="0 0 24 24" className="h-full w-full p-1" fill="none" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}

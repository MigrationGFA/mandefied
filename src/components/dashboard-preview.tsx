import { Section, SectionHeading } from "@/components/section";
import { TrendingUp, AlertTriangle, Clock, MapPin } from "lucide-react";

export function DashboardPreview() {
  return (
    <Section className="bg-surface">
      <SectionHeading
        eyebrow="Live insights"
        title={<>Every number is traceable. <br className="hidden md:inline" /> Every decision is data-backed.</>}
        description="A single, real-time view across every project, indicator, and field officer."
      />

      <div className="mt-16 grid lg:grid-cols-12 gap-4">
        {[
          { label: "On Track", value: "168", delta: "+12", icon: TrendingUp, tone: "success" as const },
          { label: "At Risk", value: "23", delta: "-4", icon: AlertTriangle, tone: "warning" as const },
          { label: "Delayed", value: "9", delta: "-2", icon: Clock, tone: "destructive" as const },
        ].map((k) => (
          <KpiCard key={k.label} {...k} />
        ))}

        <div className="lg:col-span-8 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Indicator progress vs target</p>
              <p className="text-xs text-muted-foreground">Last 12 months · all programs</p>
            </div>
            <div className="flex gap-2 text-xs">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Actual</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-accent" /> Target</span>
            </div>
          </div>
          <ChartMock />
        </div>

        <div className="lg:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-primary" />
            <p className="text-sm font-semibold">Field activity</p>
          </div>
          <p className="text-xs text-muted-foreground">Live submissions across regions</p>
          <MapMock />
          <ul className="mt-4 space-y-2">
            {[
              { region: "Ekiti Central", count: 142, tone: "success" },
              { region: "Ado-Ekiti", count: 88, tone: "info" },
              { region: "Ikere", count: 41, tone: "warning" },
            ].map((r) => (
              <li key={r.region} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${r.tone === "success" ? "bg-success" : r.tone === "info" ? "bg-info" : "bg-warning"}`} />
                  {r.region}
                </span>
                <span className="font-mono text-xs text-muted-foreground">{r.count} subs</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function KpiCard({
  label,
  value,
  delta,
  icon: Icon,
  tone,
}: {
  label: string;
  value: string;
  delta: string;
  icon: typeof TrendingUp;
  tone: "success" | "warning" | "destructive";
}) {
  const toneMap = {
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive",
  };
  return (
    <div className="lg:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-soft">
      <div className="flex items-start justify-between">
        <p className="text-sm text-muted-foreground">{label}</p>
        <div className={`h-9 w-9 rounded-lg flex items-center justify-center ${toneMap[tone]}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <p className="mt-3 text-4xl font-semibold tracking-tight">{value}</p>
      <p className="mt-1 text-xs text-muted-foreground">
        <span className={tone === "success" ? "text-success" : "text-foreground"}>{delta}</span> vs last quarter
      </p>
    </div>
  );
}

function ChartMock() {
  // simple SVG line chart
  const actual = [20, 28, 24, 35, 42, 48, 55, 60, 58, 68, 75, 82];
  const target = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
  const max = 100;
  const w = 100;
  const h = 40;
  const toPath = (data: number[]) =>
    data.map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (data.length - 1)) * w} ${h - (v / max) * h}`).join(" ");
  return (
    <div className="mt-5 h-56 relative">
      <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none" className="w-full h-full overflow-visible">
        <defs>
          <linearGradient id="gradActual" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.16 220)" stopOpacity="0.25" />
            <stop offset="100%" stopColor="oklch(0.55 0.16 220)" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={`${toPath(actual)} L ${w} ${h} L 0 ${h} Z`} fill="url(#gradActual)" />
        <path d={toPath(target)} fill="none" stroke="oklch(0.7 0.18 155)" strokeWidth="0.6" strokeDasharray="1.5 1" vectorEffect="non-scaling-stroke" />
        <path d={toPath(actual)} fill="none" stroke="oklch(0.45 0.15 220)" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
      </svg>
    </div>
  );
}

function MapMock() {
  return (
    <div className="mt-4 h-40 rounded-xl bg-gradient-to-br from-surface to-muted border border-border relative overflow-hidden">
      <svg viewBox="0 0 200 100" className="absolute inset-0 w-full h-full opacity-30">
        <path d="M30,30 Q60,10 90,30 T160,40 L170,70 L120,80 L60,70 L20,60 Z" fill="oklch(0.85 0.04 200)" stroke="oklch(0.7 0.04 200)" strokeWidth="0.4" />
      </svg>
      {[
        { x: 30, y: 40 },
        { x: 60, y: 55 },
        { x: 80, y: 30 },
        { x: 110, y: 60 },
        { x: 140, y: 45 },
      ].map((p, i) => (
        <span
          key={i}
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${(p.x / 200) * 100}%`, top: `${(p.y / 100) * 100}%` }}
        >
          <span className="block relative">
            <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" style={{ width: 12, height: 12, marginLeft: -6, marginTop: -6 }} />
            <span className="block h-3 w-3 rounded-full bg-primary border-2 border-card relative" />
          </span>
        </span>
      ))}
    </div>
  );
}

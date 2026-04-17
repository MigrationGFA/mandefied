import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section, SectionHeading } from "@/components/section";
import { FeaturesGrid } from "@/components/features-grid";
import { OfflineSection } from "@/components/offline-section";
import { ReportingSection } from "@/components/reporting-section";
import { IntegritySection } from "@/components/integrity-section";
import { CtaBanner } from "@/components/cta-banner";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, X, Zap, Database, Workflow, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — The complete M&E platform | Mandefied" },
      {
        name: "description",
        content:
          "Logframes, KPIs, offline mobile collection, real-time dashboards, automated AfDB-ready reports, audit trails, role-based access and SDG tracking — all in one platform.",
      },
      { property: "og:title", content: "Features — Mandefied M&E Platform" },
      {
        property: "og:description",
        content:
          "Everything you need to prove impact: logframes, indicators, offline collection, dashboards, automated reporting and audit trails.",
      },
    ],
  }),
  component: FeaturesPage,
});

const pillars = [
  {
    icon: Workflow,
    title: "Designed around the M&E lifecycle",
    body: "Most tools force you into a CRM, project tracker, or BI shape. Mandefied is built natively around impact → outcome → output → activity → indicator.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  },
  {
    icon: Database,
    title: "One source of truth",
    body: "Field submissions, validations, indicator values, and reports all live in one connected database — no exports, no broken spreadsheets.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: Zap,
    title: "Real-time, always",
    body: "Field officer presses submit → indicator updates → dashboard refreshes → funder report is recalculated. In seconds.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]",
  },
  {
    icon: ShieldCheck,
    title: "Audit-ready by default",
    body: "Every value is signed by a person, place, device, and timestamp. Pass audits without scrambling for evidence.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  },
];

const comparison = [
  { capability: "Logframe & results framework builder", us: true, sheets: false, generic: false },
  { capability: "Offline-capable mobile data collection", us: true, sheets: false, generic: "Limited" },
  { capability: "Real-time indicator roll-ups", us: true, sheets: false, generic: "Limited" },
  { capability: "AfDB / SDG-aligned report templates", us: true, sheets: false, generic: false },
  { capability: "Multi-tier M&E approval workflow", us: true, sheets: false, generic: false },
  { capability: "Immutable audit trail per indicator value", us: true, sheets: false, generic: "Limited" },
  { capability: "Role-based access for officers, supervisors, donors", us: true, sheets: false, generic: true },
  { capability: "Configurable per program (no rebuild)", us: true, sheets: "Manual", generic: false },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Section className="bg-mesh pt-20 pb-12">
          <SectionHeading
            eyebrow="Capabilities"
            title={<>One platform. <span className="text-gradient-spectrum">Every M&E capability</span> you'll ever need.</>}
            description="Mandefied brings the entire monitoring & evaluation lifecycle under one roof — purpose-built for the realities of donor-funded, multi-stakeholder programs."
          />
          <div className="mt-10 flex justify-center">
            <Link to="/demo">
              <Button size="lg" className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white">
                See it on your data <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </Section>

        {/* Why Mandefied pillars */}
        <Section className="py-12 md:py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.map((p) => (
              <div key={p.title} className="rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-shadow">
                <div className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${p.tone} flex items-center justify-center text-white shadow-soft`}>
                  <p.icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </Section>

        <FeaturesGrid />

        {/* Comparison table */}
        <Section className="bg-surface">
          <SectionHeading
            eyebrow="The honest comparison"
            title={<>Why teams switch <span className="text-gradient-warm">to Mandefied</span></>}
            description="Most M&E teams arrive from spreadsheets, KoboToolbox + Excel, or a generic project tracker bolted onto BI. Here's what changes."
          />
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-surface text-left">
                    <th className="px-6 py-4 font-semibold">Capability</th>
                    <th className="px-6 py-4 font-semibold text-center bg-gradient-to-b from-primary/5 to-transparent">Mandefied</th>
                    <th className="px-6 py-4 font-semibold text-center text-muted-foreground">Spreadsheets</th>
                    <th className="px-6 py-4 font-semibold text-center text-muted-foreground">Generic PM tools</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.capability} className={i % 2 === 0 ? "bg-card" : "bg-surface/50"}>
                      <td className="px-6 py-4 font-medium">{row.capability}</td>
                      <td className="px-6 py-4 text-center">
                        <Cell value={row.us} positive />
                      </td>
                      <td className="px-6 py-4 text-center"><Cell value={row.sheets} /></td>
                      <td className="px-6 py-4 text-center"><Cell value={row.generic} /></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Section>

        <OfflineSection />
        <ReportingSection />
        <IntegritySection />
        <CtaBanner />
      </main>
      <SiteFooter />
    </div>
  );
}

function Cell({ value, positive }: { value: boolean | string; positive?: boolean }) {
  if (value === true) {
    return (
      <span className={`inline-flex h-7 w-7 items-center justify-center rounded-full ${positive ? "bg-gradient-to-br from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)] text-white" : "bg-success/15 text-success"}`}>
        <Check className="h-4 w-4" strokeWidth={3} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground">
        <X className="h-4 w-4" />
      </span>
    );
  }
  return <span className="text-xs font-medium text-muted-foreground">{value}</span>;
}

import { Section } from "@/components/section";
import { FileText, Download, CheckCircle2 } from "lucide-react";

export function ReportingSection() {
  return (
    <Section>
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="order-2 lg:order-1 relative">
          <div
            className="absolute -inset-6 bg-gradient-primary opacity-15 blur-3xl rounded-full"
            aria-hidden
          />
          <div className="relative rounded-2xl border border-border bg-card shadow-elegant overflow-hidden">
            <div className="flex items-center justify-between px-5 py-3 border-b border-border bg-surface">
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-primary" />
                <p className="text-sm font-semibold">Q3 2025 — AfDB Quarterly Report</p>
              </div>
              <span className="text-[10px] font-mono uppercase text-muted-foreground">
                Auto-generated
              </span>
            </div>
            <div className="p-6 space-y-5">
              {[
                { label: "Output 1.1 — Beneficiaries trained", v: "12,480 / 12,000", pct: 104 },
                { label: "Output 2.3 — Sites operational", v: "38 / 40", pct: 95 },
                { label: "Outcome — Income increase", v: "+24%", pct: 87 },
                { label: "Impact — SDG 8 alignment", v: "On track", pct: 92 },
              ].map((r) => (
                <div key={r.label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground">{r.label}</span>
                    <span className="font-mono text-xs text-muted-foreground">{r.v}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-muted overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full"
                      style={{ width: `${Math.min(r.pct, 100)}%` }}
                    />
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 pt-2">
                <button className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted">
                  <Download className="h-3.5 w-3.5" /> PDF
                </button>
                <button className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted">
                  <Download className="h-3.5 w-3.5" /> Excel
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Reporting
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            From raw data to <span className="text-gradient-primary">funder-ready reports</span> in
            minutes.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Mandefied generates monthly, quarterly, and annual reports automatically — in the exact
            templates your funders expect.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Pre-built AfDB, World Bank, EU and SDG report templates",
              "PDF & Excel export with branded covers and signatures",
              "Narrative auto-fill from approved indicator commentary",
              "Schedule and distribute to stakeholders on a cadence",
            ].map((t) => (
              <li key={t} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                <span className="text-foreground">{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

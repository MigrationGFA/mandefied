import { Section } from "@/components/section";
import { CheckCircle2 } from "lucide-react";

const logos = [
  "Government Programme",
  "Development Finance",
  "SDG Reporting",
  "Donor Ready",
  "ISO 27001",
  "GDPR",
];

const highlights = [
  "Multi-agency implementation",
  "Hundreds of performance indicators",
  "Offline field data collection",
  "Executive dashboards",
  "GIS-enabled monitoring",
  "Automated quarterly reporting",
  "SDG-aligned indicators",
  "Audit-ready evidence management",
];

export function TrustBar() {
  return (
    <Section className="py-14 md:py-16">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
        Trusted for Government and Development Programme Monitoring
      </p>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-5 items-center justify-items-center">
        {logos.map((l) => (
          <div
            key={l}
            className="text-sm md:text-base font-semibold text-muted-foreground/80 tracking-tight whitespace-nowrap"
          >
            {l}
          </div>
        ))}
      </div>

      <div className="mt-12 max-w-4xl mx-auto rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-6 md:p-8 shadow-soft">
        <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
          Featured Deployment
        </p>
        <div className="mt-4">
          <span className="inline-flex items-center rounded-lg bg-gradient-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground">
            Live Government Deployment
          </span>
          <div className="mt-5">
            <h3 className="text-xl font-semibold text-foreground">
              National Economic Development Programme
            </h3>
            <p className="mt-3 text-base md:text-lg text-foreground leading-relaxed">
              Mandefied is currently deployed on a large-scale government-led economic development
              programme supporting investment promotion, infrastructure delivery, enterprise growth,
              workforce development and institutional performance management.
            </p>
            <p className="mt-3 text-base text-muted-foreground leading-relaxed">
              The platform enables real-time monitoring across multiple agencies while producing
              standardized reports for government executives and international development partners.
            </p>
            <p className="mt-4 text-sm text-muted-foreground">
              Live deployment · Government · Development Partner Reporting
            </p>

            <div className="mt-6 pt-6 border-t border-border">
              <p className="text-sm font-semibold text-foreground">Programme Highlights</p>
              <ul className="mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5">
                {highlights.map((h) => (
                  <li key={h} className="flex gap-2 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-success shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

import { Section } from "@/components/section";

const logos = [
  "Ekiti Knowledge Zone",
  "AfDB-aligned",
  "SDG Reporting",
  "World Bank ready",
  "ISO 27001",
  "GDPR",
];

export function TrustBar() {
  return (
    <Section className="py-14 md:py-16">
      <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
        Trusted for real-world impact tracking
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

      <div className="mt-12 max-w-3xl mx-auto rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-6 md:p-8 shadow-soft">
        <div className="flex flex-col md:flex-row items-start gap-6">
          <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-lg shrink-0">
            EKZ
          </div>
          <div>
            <p className="text-base md:text-lg text-foreground leading-relaxed">
              Mandefied powers the <strong>Ekiti Knowledge Zone</strong> — managing
              large-scale economic development programs, tracking indicators across
              dozens of work-streams, and producing donor-ready reports for partners
              like the African Development Bank.
            </p>
            <p className="mt-3 text-sm text-muted-foreground">Live deployment · Government & donor reporting</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

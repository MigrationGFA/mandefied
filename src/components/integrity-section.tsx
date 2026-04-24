import { Section } from "@/components/section";
import { ShieldCheck, UserCheck, GitBranch, Lock } from "lucide-react";

const items = [
  {
    icon: UserCheck,
    t: "Attribution by default",
    d: "Every submission is tied to a specific field officer, device, and timestamp.",
  },
  {
    icon: GitBranch,
    t: "Multi-stage approval",
    d: "Configurable workflows from supervisor to M&E lead — nothing slips through.",
  },
  {
    icon: ShieldCheck,
    t: "Full audit trail",
    d: "Immutable history of every edit, value change, and approval action.",
  },
  {
    icon: Lock,
    t: "Encrypted end-to-end",
    d: "TLS in transit, AES at rest, role-scoped access on every record.",
  },
];

export function IntegritySection() {
  return (
    <Section className="bg-surface">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            Trust & integrity
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            Built for compliance. <br />
            <span className="text-gradient-primary">Designed for trust.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            When funders ask "how do you know?", Mandefied gives you the chain of evidence —
            automatically, for every reported number.
          </p>
        </div>
        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
          {items.map((it) => (
            <div
              key={it.t}
              className="rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition"
            >
              <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary">
                <it.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 font-semibold">{it.t}</h3>
              <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

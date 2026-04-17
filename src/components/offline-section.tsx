import { Section } from "@/components/section";
import { WifiOff, Cloud, Fingerprint, ShieldCheck, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import mobileImg from "@/assets/mobile-app.jpg";

export function OfflineSection() {
  return (
    <Section className="bg-gradient-to-b from-background to-surface">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-foreground/90">
            <WifiOff className="h-3.5 w-3.5" /> Differentiator
          </div>
          <h2 className="mt-5 text-3xl md:text-5xl font-semibold tracking-tight">
            Built for the real world — <span className="text-gradient-primary">even without internet.</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            Field officers in remote areas can collect, photograph, and verify data
            on a mobile device with zero connectivity. The moment they're back online,
            everything syncs — encrypted, attributed, and audit-ready.
          </p>

          <div className="mt-8 space-y-4">
            {[
              { icon: WifiOff, t: "Works fully offline", d: "Forms, validation, and history available with no signal." },
              { icon: Cloud, t: "Auto-sync on reconnect", d: "Conflict-resolved, encrypted, and queued in the background." },
              { icon: Fingerprint, t: "Offline PIN + device binding", d: "Authenticated submissions even when no network is available." },
              { icon: ShieldCheck, t: "Token-based industry standard", d: "OAuth 2.0 / JWT for online sessions and integrations." },
            ].map((it) => (
              <div key={it.t} className="flex gap-4">
                <div className="h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0">
                  <it.icon className="h-4.5 w-4.5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{it.t}</p>
                  <p className="text-sm text-muted-foreground">{it.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-9">
            <Link to="/features">
              <Button variant="outline" className="bg-card">
                Explore all features <ArrowRight className="ml-1.5 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-8 bg-gradient-accent opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative rounded-3xl border border-border bg-card p-6 shadow-elegant">
            <img
              src={mobileImg}
              alt="Mandefied mobile app for offline data collection"
              loading="lazy"
              width={1000}
              height={1200}
              className="w-full h-auto rounded-2xl"
            />
            <div className="absolute -bottom-4 -left-4 rounded-xl bg-card border border-border shadow-elegant p-3 flex items-center gap-3 animate-float">
              <div className="h-9 w-9 rounded-lg bg-success/15 flex items-center justify-center">
                <Cloud className="h-4.5 w-4.5 text-success" />
              </div>
              <div>
                <p className="text-xs font-semibold">Synced</p>
                <p className="text-[10px] text-muted-foreground">42 records uploaded</p>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 rounded-xl bg-card border border-border shadow-elegant p-3 flex items-center gap-3 animate-float [animation-delay:1s]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-success" />
              </span>
              <p className="text-xs font-semibold">Offline mode</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

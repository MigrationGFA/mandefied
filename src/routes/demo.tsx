import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Request a Demo — Mandefied" },
      {
        name: "description",
        content:
          "Book a personalized 30-minute demo of Mandefied tailored to your program. See real-time dashboards, offline data collection, and AfDB-ready reporting in action.",
      },
      { property: "og:title", content: "Request a Demo — Mandefied" },
      {
        property: "og:description",
        content:
          "See Mandefied in action. Book a personalized 30-minute walkthrough with our team.",
      },
    ],
  }),
  component: DemoPage,
});

function DemoPage() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="bg-mesh">
        <Section className="pt-20">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                Get a personalized walkthrough
              </div>
              <h1 className="mt-5 text-4xl md:text-6xl font-semibold tracking-tight">
                See <span className="text-gradient-primary">Mandefied</span> in action.
              </h1>
              <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
                Book a 30-minute demo tailored to your program. We'll show you a
                live dashboard, walk through offline collection, and answer every
                question your team has.
              </p>

              <ul className="mt-8 space-y-3">
                {[
                  "Live dashboard tailored to your sector",
                  "Offline data collection walkthrough",
                  "AfDB / SDG report generation in real time",
                  "Pricing for your team size",
                ].map((t) => (
                  <li key={t} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 grid sm:grid-cols-3 gap-3">
                {[
                  { icon: Mail, label: "Email", v: "hello@mandefied.com" },
                  { icon: Phone, label: "Phone", v: "+234 803 083 8906" },
                  { icon: MapPin, label: "Office", v: "Ogun Tech Hub" },
                ].map((c) => (
                  <div key={c.label} className="rounded-xl border border-border bg-card p-4">
                    <c.icon className="h-4 w-4 text-primary" />
                    <p className="mt-2 text-xs text-muted-foreground">{c.label}</p>
                    <p className="text-sm font-medium">{c.v}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-primary opacity-15 blur-3xl rounded-full" aria-hidden />
              <div className="relative rounded-2xl border border-border bg-card p-7 md:p-9 shadow-elegant">
                {!submitted ? (
                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <Field label="Full name" id="name" required>
                        <Input id="name" placeholder="Adaeze Okoye" required />
                      </Field>
                      <Field label="Work email" id="email" required>
                        <Input id="email" type="email" placeholder="you@org.gov" required />
                      </Field>
                    </div>
                    <Field label="Organization" id="org" required>
                      <Input id="org" placeholder="Ministry of Development" required />
                    </Field>
                    <Field label="Role" id="role">
                      <Input id="role" placeholder="M&E Lead" />
                    </Field>
                    <Field label="What would you like to track?" id="use">
                      <Textarea
                        id="use"
                        placeholder="Tell us about your program — sectors, donors, scale, current tools…"
                        rows={4}
                      />
                    </Field>

                    <Button
                      type="submit"
                      className="w-full h-12 text-base bg-gradient-primary hover:opacity-90 shadow-soft"
                    >
                      Request my demo
                    </Button>
                    <p className="text-xs text-center text-muted-foreground">
                      We respond within one business day.
                    </p>
                  </form>
                ) : (
                  <div className="text-center py-8">
                    <div className="mx-auto h-14 w-14 rounded-full bg-success/15 flex items-center justify-center">
                      <CheckCircle2 className="h-7 w-7 text-success" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold tracking-tight">Request received</h3>
                    <p className="mt-3 text-muted-foreground max-w-sm mx-auto">
                      Thanks — a member of our team will reach out within one business
                      day to schedule your personalized demo.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section className="pt-0">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold tracking-tight text-center">
              Questions teams ask <span className="text-gradient-warm">before booking</span>
            </h2>
            <div className="mt-10 space-y-3">
              {[
                { q: "How long does the demo take?", a: "30 minutes. We spend the first 5 understanding your program, then walk you through a live dashboard mapped to your sector." },
                { q: "Do I need to prepare anything?", a: "No. Bring questions. If you have an existing logframe or indicator list, share it ahead and we'll mock it inside Mandefied for the call." },
                { q: "Can Mandefied match our donor's report template (e.g. AfDB)?", a: "Yes. Mandefied ships AfDB and SDG-aligned templates out of the box, and we configure custom donor templates during onboarding." },
                { q: "What about offline / low-connectivity field sites?", a: "Field officers collect data fully offline on mobile. The app syncs automatically the moment connectivity returns — with full audit trail intact." },
                { q: "How quickly can we go live?", a: "Most teams run a first program in 2–4 weeks, including logframe setup, indicator configuration, and field officer training." },
              ].map((f) => (
                <details key={f.q} className="group rounded-xl border border-border bg-card p-5 open:shadow-soft transition-shadow">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-foreground">
                    <span>{f.q}</span>
                    <span className="ml-4 h-7 w-7 rounded-full bg-gradient-to-br from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)] text-white flex items-center justify-center text-sm transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </Section>
      </main>
      <SiteFooter />
    </div>
  );
}

function Field({
  label,
  id,
  required,
  children,
}: {
  label: string;
  id: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <Label htmlFor={id} className="mb-2 block">
        {label} {required && <span className="text-destructive">*</span>}
      </Label>
      {children}
    </div>
  );
}

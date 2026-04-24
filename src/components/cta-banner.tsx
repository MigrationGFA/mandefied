import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-spectrum px-8 py-16 md:p-20 shadow-dramatic">
          <div className="absolute inset-0 opacity-30" aria-hidden>
            <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.78_0.22_140)] blur-3xl" />
            <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.7_0.21_28)] blur-3xl" />
            <div className="absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.62_0.24_350)] blur-3xl" />
          </div>
          <div className="relative max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground">
              See Mandefied in action.
            </h2>
            <p className="mt-5 text-lg text-primary-foreground/85 leading-relaxed">
              Book a personalized 30-minute demo. We'll show you a live dashboard tailored to your
              program and answer every question your team has.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/demo">
                <Button
                  size="lg"
                  className="h-12 px-6 text-base bg-card text-foreground hover:bg-card/90 shadow-elegant"
                >
                  Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/how-it-works">
                <Button
                  size="lg"
                  variant="ghost"
                  className="h-12 px-6 text-base text-primary-foreground hover:bg-primary-foreground/10"
                >
                  See how it works
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

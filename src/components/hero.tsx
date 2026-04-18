import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, PlayCircle, Sparkles } from "lucide-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import dashboardImg from "@/assets/dashboard-hero.jpg";
import indicatorsImg from "@/assets/dashboard-indicators.jpg";
import fieldmapImg from "@/assets/dashboard-fieldmap.jpg";
import reportsImg from "@/assets/dashboard-reports.jpg";

const SLIDES = [
  { src: dashboardImg, alt: "Mandefied real-time dashboard with KPIs, charts, and project map", label: "Overview" },
  { src: indicatorsImg, alt: "Indicator and KPI tracking against targets with SDG alignment", label: "Indicators" },
  { src: fieldmapImg, alt: "Live field officer submissions on a regional activity map", label: "Field Activity" },
  { src: reportsImg, alt: "Auto-generated funder-ready reports in AfDB format", label: "Reports" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-mesh">
      <div className="absolute inset-0 grid-pattern opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="mx-auto max-w-4xl text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3.5 py-1.5 text-xs font-medium shadow-soft">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-muted-foreground">Powering Ekiti Knowledge Zone & AfDB-grade reporting</span>
          </div>

          <h1 className="mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]">
            Turn projects into <br className="hidden md:block" />
            <span className="text-gradient-spectrum">measurable impact.</span>
          </h1>

          <p className="mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Mandefied is a real-time monitoring & evaluation platform that helps
            governments, NGOs, and enterprises track performance, measure outcomes,
            and generate funder-ready reports.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link to="/demo">
              <Button size="lg" className="bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-6 text-base text-white">
                Request a Demo <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/how-it-works">
              <Button size="lg" variant="outline" className="h-12 px-6 text-base bg-card/50 backdrop-blur">
                <PlayCircle className="mr-2 h-4 w-4" /> See how it works
              </Button>
            </Link>
          </div>

          <p className="mt-6 text-xs text-muted-foreground">
            No credit card required · Free 30-min strategy call · SDG aligned
          </p>
        </div>

        <div className="relative mt-16 md:mt-20 mx-auto max-w-6xl animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-x-20 -top-10 h-72 bg-gradient-primary opacity-20 blur-3xl rounded-full" aria-hidden />
          <div className="relative rounded-2xl border border-border bg-card shadow-dramatic overflow-hidden">
            <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-warning/70" />
              <span className="h-3 w-3 rounded-full bg-success/70" />
              <span className="ml-3 text-xs text-muted-foreground font-mono">app.mandefied.com/dashboard</span>
            </div>
            <HeroCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroCarousel() {
  const autoplay = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true }),
  );
  const [api, setApi] = useState<CarouselApi | null>(null);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <div className="relative">
      <Carousel
        opts={{ loop: true, align: "start" }}
        plugins={[autoplay.current]}
        setApi={setApi}
        className="w-full"
      >
        <CarouselContent className="ml-0">
          {SLIDES.map((s) => (
            <CarouselItem key={s.label} className="pl-0 basis-full">
              <img
                src={s.src}
                alt={s.alt}
                width={1600}
                height={1100}
                loading="lazy"
                className="w-full h-auto block"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-2.5 py-1.5 border border-border shadow-soft">
        {SLIDES.map((s, i) => (
          <button
            key={s.label}
            type="button"
            aria-label={`Show ${s.label}`}
            onClick={() => api?.scrollTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              selected === i ? "w-6 bg-gradient-spectrum" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

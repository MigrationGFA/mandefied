import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteHeader, c as SiteFooter, B as Button, a as Section, d as cn } from "./section-CSBmNayW.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { A as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
import { u as useEmblaCarousel } from "../_libs/embla-carousel-react.mjs";
import { H as HowItWorks, D as DashboardPreview } from "./dashboard-preview-DYovfhuL.mjs";
import { F as FeaturesGrid, O as OfflineSection, R as ReportingSection, I as IntegritySection } from "./integrity-section-COhLL7M3.mjs";
import { U as UseCases } from "./use-cases-grid-BFCZWo4j.mjs";
import { C as CtaBanner } from "./cta-banner-BfdESIG8.mjs";
import { f as Sparkles, A as ArrowRight, g as CirclePlay, b as CircleCheck, h as ArrowLeft } from "../_libs/lucide-react.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
const CarouselContext = reactExports.createContext(null);
function useCarousel() {
  const context = reactExports.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
const Carousel = reactExports.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = reactExports.useState(false);
  const [canScrollNext, setCanScrollNext] = reactExports.useState(false);
  const onSelect = reactExports.useCallback((api2) => {
    if (!api2) {
      return;
    }
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = reactExports.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = reactExports.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = reactExports.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  reactExports.useEffect(() => {
    if (!api || !setApi) {
      return;
    }
    setApi(api);
  }, [api, setApi]);
  reactExports.useEffect(() => {
    if (!api) {
      return;
    }
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          ref,
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          ...props,
          children
        }
      )
    }
  );
});
Carousel.displayName = "Carousel";
const CarouselContent = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: carouselRef, className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        className: cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        ),
        ...props
      }
    ) });
  }
);
CarouselContent.displayName = "CarouselContent";
const CarouselItem = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    const { orientation } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        ref,
        role: "group",
        "aria-roledescription": "slide",
        className: cn(
          "min-w-0 shrink-0 grow-0 basis-full",
          orientation === "horizontal" ? "pl-4" : "pt-4",
          className
        ),
        ...props
      }
    );
  }
);
CarouselItem.displayName = "CarouselItem";
const CarouselPrevious = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollPrev, canScrollPrev } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute  h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollPrev,
        onClick: scrollPrev,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Previous slide" })
        ]
      }
    );
  }
);
CarouselPrevious.displayName = "CarouselPrevious";
const CarouselNext = reactExports.forwardRef(
  ({ className, variant = "outline", size = "icon", ...props }, ref) => {
    const { orientation, scrollNext, canScrollNext } = useCarousel();
    return /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Button,
      {
        ref,
        variant,
        size,
        className: cn(
          "absolute h-8 w-8 rounded-full",
          orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
          className
        ),
        disabled: !canScrollNext,
        onClick: scrollNext,
        ...props,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Next slide" })
        ]
      }
    );
  }
);
CarouselNext.displayName = "CarouselNext";
const indicatorsImg = "/assets/dashboard-indicators-CHx2dgh8.jpg";
const fieldmapImg = "/assets/dashboard-fieldmap-e7DVbB36.jpg";
const reportsImg = "/assets/dashboard-reports-A1SM-ZZN.jpg";
const SLIDES = [
  {
    src: indicatorsImg,
    alt: "Indicator and KPI tracking against targets with SDG alignment",
    label: "Indicators"
  },
  {
    src: fieldmapImg,
    alt: "Live field officer submissions on a regional activity map",
    label: "Field Activity"
  },
  {
    src: reportsImg,
    alt: "Auto-generated development partner and funder-ready reports",
    label: "Reports"
  }
];
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden bg-mesh", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid-pattern opacity-40", "aria-hidden": true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl px-6 lg:px-8 pt-20 pb-16 md:pt-28 md:pb-24", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl text-center animate-fade-up", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/80 backdrop-blur px-3.5 py-1.5 text-xs font-medium shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-accent" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Powering Government Transformation & Development Programmes" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-7 text-5xl md:text-7xl font-semibold tracking-tight text-foreground leading-[1.05]", children: [
          "Turn projects into ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:block" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "measurable impact." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-7 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Trusted by governments, development agencies and implementing partners to monitor projects, measure outcomes and deliver transparent, funder-ready reporting." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-9 flex flex-col sm:flex-row items-center justify-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              className: "bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-6 text-base text-white",
              children: [
                "Request a Demo ",
                /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
              ]
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              variant: "outline",
              className: "h-12 px-6 text-base bg-card/50 backdrop-blur",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(CirclePlay, { className: "mr-2 h-4 w-4" }),
                " See how it works"
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-xs text-muted-foreground", children: "No credit card required · Free 30-min strategy call · SDG aligned" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-16 md:mt-20 mx-auto max-w-6xl animate-fade-up [animation-delay:200ms]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute -inset-x-20 -top-10 h-72 bg-gradient-primary opacity-20 blur-3xl rounded-full",
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card shadow-dramatic overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5 px-4 py-3 border-b border-border bg-surface", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-destructive/60" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-warning/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-3 rounded-full bg-success/70" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-3 text-xs text-muted-foreground font-mono", children: "app.mandefied.com/dashboard" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {})
        ] })
      ] })
    ] })
  ] });
}
function HeroCarousel() {
  const autoplay = reactExports.useRef(
    Autoplay({ delay: 4e3, stopOnInteraction: false, stopOnMouseEnter: true })
  );
  const [api, setApi] = reactExports.useState(null);
  const [selected, setSelected] = reactExports.useState(0);
  reactExports.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelected(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    api.on("reInit", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Carousel,
      {
        opts: { loop: true, align: "start" },
        plugins: [autoplay.current],
        setApi,
        className: "w-full",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "ml-0", children: SLIDES.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselItem, { className: "pl-0 basis-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: s.src,
            alt: s.alt,
            width: 1600,
            height: 1100,
            loading: "lazy",
            className: "w-full h-auto block"
          }
        ) }, s.label)) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 rounded-full bg-card/90 backdrop-blur px-2.5 py-1.5 border border-border shadow-soft", children: SLIDES.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        "aria-label": `Show ${s.label}`,
        onClick: () => api?.scrollTo(i),
        className: `h-1.5 rounded-full transition-all ${selected === i ? "w-6 bg-gradient-spectrum" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground/60"}`
      },
      s.label
    )) })
  ] });
}
const logos = [
  "Government Programme",
  "Development Finance",
  "SDG Reporting",
  "Donor Ready",
  "ISO 27001",
  "GDPR"
];
const highlights = [
  "Multi-agency implementation",
  "Hundreds of performance indicators",
  "Offline field data collection",
  "Executive dashboards",
  "GIS-enabled monitoring",
  "Automated quarterly reporting",
  "SDG-aligned indicators",
  "Audit-ready evidence management"
];
function TrustBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "py-14 md:py-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium", children: "Trusted for Government and Development Programme Monitoring" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid grid-cols-2 md:grid-cols-6 gap-x-6 gap-y-5 items-center justify-items-center", children: logos.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "text-sm md:text-base font-semibold text-muted-foreground/80 tracking-tight whitespace-nowrap",
        children: l
      },
      l
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 max-w-4xl mx-auto rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-6 md:p-8 shadow-soft", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: "Featured Deployment" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center rounded-lg bg-gradient-accent px-3 py-1.5 text-xs font-semibold text-accent-foreground", children: "Live Government Deployment" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-semibold text-foreground", children: "National Economic Development Programme" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base md:text-lg text-foreground leading-relaxed", children: "Mandefied is currently deployed on a large-scale government-led economic development programme supporting investment promotion, infrastructure delivery, enterprise growth, workforce development and institutional performance management." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-base text-muted-foreground leading-relaxed", children: "The platform enables real-time monitoring across multiple agencies while producing standardized reports for government executives and international development partners." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "Live deployment · Government · Development Partner Reporting" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 pt-6 border-t border-border", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Programme Highlights" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 grid sm:grid-cols-2 gap-x-6 gap-y-2.5", children: highlights.map((h) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-success shrink-0 mt-0.5" }),
              h
            ] }, h)) })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OfflineSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPreview, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UseCases, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntegritySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as Section, b as SectionHeading, B as Button, c as SiteFooter } from "./section-CSBmNayW.mjs";
import { H as HowItWorks, D as DashboardPreview } from "./dashboard-preview-DYovfhuL.mjs";
import { C as CtaBanner } from "./cta-banner-BfdESIG8.mjs";
import { C as Clock, T as TrendingUp, F as FileCheck, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
const before = ["Spreadsheets emailed back and forth weekly", "Field paper forms re-typed (and lost)", "Quarterly and annual reports manually compiled from multiple spreadsheets", "Numbers no one can fully trace or trust", "Approvals stuck in WhatsApp threads"];
const after = ["Live dashboard auto-updates from every submission", "Mobile, offline-capable forms with GPS + photo evidence", "Institutional and programme reports generated automatically in minutes", "Every value signed by person, place, time, device", "Multi-tier approval flow built into the platform"];
const outcomes = [{
  icon: Clock,
  k: "85%",
  v: "less time spent on quarterly reporting",
  tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]"
}, {
  icon: TrendingUp,
  k: "10×",
  v: "faster from field submission to dashboard",
  tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]"
}, {
  icon: FileCheck,
  k: "100%",
  v: "of indicator values traceable to source",
  tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]"
}];
function HowPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-mesh pt-20 pb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "How it works", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "The complete performance management and monitoring lifecycle—",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "on one intelligent platform" }),
        "."
      ] }), description: "From programme planning to executive reporting, every activity, indicator and result is connected, verifiable and available in real time." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The transformation", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Before Mandefied vs. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm", children: "after Mandefied" })
        ] }), description: "Most teams describe a similar story. Here's the shift." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid md:grid-cols-2 gap-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-destructive/10 text-destructive flex items-center justify-center font-bold", children: "×" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "Before" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: before.map((b) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-destructive/60 shrink-0" }),
              b
            ] }, b)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl border-2 border-transparent bg-gradient-to-br from-[oklch(0.42_0.14_155)] via-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)] p-[2px] shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-[14px] bg-card p-7 h-full", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-9 w-9 rounded-xl bg-gradient-to-br from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)] text-white flex items-center justify-center font-bold", children: "✓" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold", children: "After Mandefied" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3", children: after.map((a) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-sm text-foreground", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)] shrink-0" }),
              a
            ] }, a)) })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Outcomes", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "What teams actually",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "measure differently" })
        ] }), description: "Typical operational improvements experienced by organizations using Mandefied to manage programme performance and results." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid md:grid-cols-3 gap-5", children: outcomes.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-8 text-center hover:shadow-elegant transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mx-auto h-14 w-14 rounded-2xl bg-gradient-to-br ${o.tone} flex items-center justify-center text-white shadow-soft`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(o.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `mt-6 text-5xl font-semibold tracking-tight bg-gradient-to-br ${o.tone} bg-clip-text text-transparent`, children: o.k }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: o.v })
        ] }, o.v)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DashboardPreview, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl md:text-3xl font-semibold tracking-tight", children: "Want to see this on your own program?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground max-w-xl mx-auto", children: "We'll tailor a live 30-minute walkthrough around your sector, reporting framework, performance indicators and organizational objectives." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", className: "inline-block mt-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white", children: [
          "Request a tailored demo ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  HowPage as component
};

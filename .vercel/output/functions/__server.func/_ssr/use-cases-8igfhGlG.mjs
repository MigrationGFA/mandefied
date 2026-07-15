import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as Section, b as SectionHeading, B as Button, c as SiteFooter } from "./section-CSBmNayW.mjs";
import { U as UseCases } from "./use-cases-grid-BFCZWo4j.mjs";
import { C as CtaBanner } from "./cta-banner-BfdESIG8.mjs";
import { Q as Quote, A as ArrowRight } from "../_libs/lucide-react.mjs";
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
const stories = [{
  sector: "Economic Development",
  title: "Government Economic Development Programme",
  body: "Mandefied supports the monitoring of large-scale economic development initiatives, tracking infrastructure delivery, enterprise support, investment promotion, beneficiary engagement and programme performance across multiple implementation teams.",
  metrics: [{
    v: "115,000+",
    k: "Beneficiaries monitored"
  }, {
    v: "Multi-billion naira",
    k: "Programme value tracked"
  }, {
    v: "12+",
    k: "Active implementation workstreams"
  }],
  tone: "from-[oklch(0.42_0.14_155)] via-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]"
}, {
  sector: "Public Health",
  title: "Community health network",
  body: "Healthcare workers collect field data offline from primary and secondary healthcare facilities while supervisors validate submissions in real time for operational reporting and decision-making.",
  metrics: [{
    v: "8.5k",
    k: "Patient touchpoints / mo"
  }, {
    v: "94%",
    k: "Submissions validated < 24h"
  }, {
    v: "0",
    k: "Lost records since launch"
  }],
  tone: "from-[oklch(0.7_0.21_28)] via-[oklch(0.62_0.24_350)] to-[oklch(0.5_0.24_260)]"
}, {
  sector: "Education & Workforce Development",
  title: "Youth employment initiative",
  body: "Track vocational training, employment initiatives, infrastructure delivery and long-term programme outcomes through integrated performance dashboards and SDG-aligned indicators.",
  metrics: [{
    v: "8,500+",
    k: "Participants tracked"
  }, {
    v: "120 km",
    k: "Infrastructure monitored"
  }, {
    v: "On Track",
    k: "Programme Performance"
  }],
  tone: "from-[oklch(0.78_0.22_140)] via-[oklch(0.42_0.14_155)] to-[oklch(0.5_0.24_260)]"
}];
const testimonials = [{
  q: "What once took weeks of manual reporting is now completed in a matter of hours. Our teams spend less time compiling data and more time improving programme performance.",
  title: "Programme Director",
  org: "Government Development Programme"
}, {
  q: "Every figure on our dashboard is supported by verifiable field evidence, giving management complete confidence in our reporting and decision-making.",
  title: "Head of Monitoring & Evaluation",
  org: "Public Sector Institution"
}, {
  q: "Mandefied has transformed how we manage projects across multiple locations. We now have one trusted source of truth for every programme.",
  title: "Programme Manager",
  org: "Development Organisation"
}];
function UseCasesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-mesh pt-20 pb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Industries", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Built for organizations that",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "measure, manage and deliver impact" }),
          "."
        ] }), description: "Mandefied powers mission-critical programmes across governments, development organizations, NGOs, enterprises and public institutions. Whether you're managing infrastructure, healthcare, education or economic development initiatives, Mandefied adapts to your programme—not the other way around." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-3xl mx-auto text-center text-muted-foreground leading-relaxed", children: "Mandefied helps governments, development organizations, NGOs and enterprises transform programme data into measurable impact. From field data collection and performance monitoring to executive dashboards and automated reporting, every outcome is verifiable, traceable and decision-ready." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(UseCases, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "In production", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Built for complex programmes.",
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm", children: "Proven across sectors." })
        ] }), description: "Organizations use Mandefied to manage complex initiatives, monitor performance and generate reliable evidence for decision-making and accountability." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid lg:grid-cols-3 gap-5", children: stories.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card overflow-hidden hover:-translate-y-1 hover:shadow-elegant transition-all", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-2 w-full bg-gradient-to-r ${s.tone}` }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-mono uppercase tracking-wider text-muted-foreground", children: s.sector }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-semibold", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: s.body }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-3 gap-3 pt-5 border-t border-border", children: s.metrics.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `text-xl font-semibold bg-gradient-to-br ${s.tone} bg-clip-text text-transparent`, children: m.v }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-muted-foreground leading-tight", children: m.k })
            ] }, m.k)) })
          ] })
        ] }, s.title)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-3 gap-6", children: testimonials.map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card p-8 shadow-soft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Quote, { className: "absolute top-6 right-6 h-10 w-10 text-primary/15" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-lg leading-relaxed text-foreground", children: [
            '"',
            t.q,
            '"'
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-12 w-12 rounded-full bg-gradient-spectrum", "aria-hidden": true }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: t.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: t.org })
            ] })
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white", children: [
          "Bring Mandefied to your program ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  UseCasesPage as component
};

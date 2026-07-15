import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as Section, b as SectionHeading, B as Button, c as SiteFooter } from "./section-CSBmNayW.mjs";
import { F as FeaturesGrid, O as OfflineSection, R as ReportingSection, I as IntegritySection } from "./integrity-section-COhLL7M3.mjs";
import { C as CtaBanner } from "./cta-banner-BfdESIG8.mjs";
import { A as ArrowRight, W as Workflow, D as Database, Z as Zap, S as ShieldCheck, a as Check, X } from "../_libs/lucide-react.mjs";
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
const pillars = [{
  icon: Workflow,
  title: "Designed around the M&E lifecycle",
  body: "Most tools force you into a CRM, project tracker, or BI shape. Mandefied is built natively around impact → outcome → output → activity → indicator.",
  tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]"
}, {
  icon: Database,
  title: "One source of truth",
  body: "Field submissions, validations, indicator values, and reports all live in one connected database — no exports, no broken spreadsheets.",
  tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]"
}, {
  icon: Zap,
  title: "Real-time, always",
  body: "Field officer presses submit → indicator updates → dashboard refreshes → institutional report is recalculated. In seconds.",
  tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.62_0.24_350)]"
}, {
  icon: ShieldCheck,
  title: "Audit-ready by default",
  body: "Every value is signed by a person, place, device, and timestamp. Pass audits without scrambling for evidence.",
  tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]"
}];
const comparison = [{
  capability: "Logframe & results framework builder",
  us: true,
  sheets: false,
  generic: false
}, {
  capability: "Offline-capable mobile data collection",
  us: true,
  sheets: false,
  generic: "Limited"
}, {
  capability: "Real-time indicator roll-ups",
  us: true,
  sheets: false,
  generic: "Limited"
}, {
  capability: "Institutional & SDG Reporting Templates",
  us: true,
  sheets: false,
  generic: false
}, {
  capability: "Multi-tier M&E approval workflow",
  us: true,
  sheets: false,
  generic: false
}, {
  capability: "Immutable audit trail per indicator value",
  us: true,
  sheets: false,
  generic: "Limited"
}, {
  capability: "Role-based access for officers, supervisors, donors",
  us: true,
  sheets: false,
  generic: true
}, {
  capability: "Configurable per program (no rebuild)",
  us: true,
  sheets: "Manual",
  generic: false
}];
function FeaturesPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-mesh pt-20 pb-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "Capabilities", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "One platform. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "Every M&E capability" }),
          " ",
          "you'll ever need."
        ] }), description: "Mandefied brings the entire monitoring, evaluation, learning and performance management lifecycle under one platform—purpose-built for governments, development agencies, NGOs, enterprises and multi-stakeholder programmes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "lg", className: "bg-gradient-spectrum hover:opacity-90 shadow-glow h-12 px-7 text-base text-white", children: [
          "See it on your data ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-5", children: pillars.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-7 hover:shadow-elegant transition-shadow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-12 w-12 rounded-2xl bg-gradient-to-br ${p.tone} flex items-center justify-center text-white shadow-soft`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(p.icon, { className: "h-6 w-6", strokeWidth: 2 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-lg font-semibold", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: p.body })
      ] }, p.title)) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(FeaturesGrid, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-surface", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(SectionHeading, { eyebrow: "The honest comparison", title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Why teams switch ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm", children: "to Mandefied" })
        ] }), description: "Most M&E teams arrive from spreadsheets, KoboToolbox + Excel, or a generic project tracker bolted onto BI. Here's what changes." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-2xl border border-border bg-card shadow-soft", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "border-b border-border bg-surface text-left", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold", children: "Capability" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold text-center bg-gradient-to-b from-primary/5 to-transparent", children: "Mandefied" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold text-center text-muted-foreground", children: "Spreadsheets" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-6 py-4 font-semibold text-center text-muted-foreground", children: "Generic PM tools" })
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { children: comparison.map((row, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: i % 2 === 0 ? "bg-card" : "bg-surface/50", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 font-medium", children: row.capability }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.us, positive: true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.sheets }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-6 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cell, { value: row.generic }) })
          ] }, row.capability)) })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OfflineSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ReportingSection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(IntegritySection, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CtaBanner, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Cell({
  value,
  positive
}) {
  if (value === true) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `inline-flex h-7 w-7 items-center justify-center rounded-full ${positive ? "bg-gradient-to-br from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)] text-white" : "bg-success/15 text-success"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4", strokeWidth: 3 }) });
  }
  if (value === false) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-7 w-7 items-center justify-center rounded-full bg-muted text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-muted-foreground", children: value });
}
export {
  FeaturesPage as component
};

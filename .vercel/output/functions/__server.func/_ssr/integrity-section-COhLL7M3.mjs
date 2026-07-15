import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as Section, b as SectionHeading, B as Button } from "./section-CSBmNayW.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { v as Layers, r as Gauge, w as WifiOff, x as ChartLine, y as FileChartColumnIncreasing, U as Users, z as History, i as Earth, B as Cloud, I as FingerprintPattern, S as ShieldCheck, A as ArrowRight, J as FileText, K as Download, b as CircleCheck, N as UserCheck, O as GitBranch, R as Lock } from "../_libs/lucide-react.mjs";
const features = [
  {
    icon: Layers,
    title: "Logframe & Results Framework Builder",
    body: "Visually map impact → outcomes → outputs → activities. Drag, link, and version with confidence.",
    tone: "emerald"
  },
  {
    icon: Gauge,
    title: "KPI & Indicator Management",
    body: "Define targets, baselines, and milestones. Auto-calculate progress against any indicator.",
    tone: "cobalt"
  },
  {
    icon: WifiOff,
    title: "Offline Data Collection",
    body: "Mobile-first forms that work without signal. Sync the moment connectivity returns.",
    tone: "coral"
  },
  {
    icon: ChartLine,
    title: "Real-Time Dashboards",
    body: "Every KPI, project, and field officer — live. Drill from impact to a single submission in seconds.",
    tone: "magenta"
  },
  {
    icon: FileChartColumnIncreasing,
    title: "Automated Reporting",
    body: "Generate quarterly, annual and customised institutional reports automatically—without manual compilation or copy-and-paste.",
    tone: "lime"
  },
  {
    icon: Users,
    title: "Role-Based Access & Approvals",
    body: "Officers, supervisors, M&E leads, and admins each see exactly what they should.",
    tone: "cobalt"
  },
  {
    icon: History,
    title: "Audit Trails & Verification",
    body: "Every edit, approval, and value change is signed, timestamped, and immutable.",
    tone: "emerald"
  },
  {
    icon: Earth,
    title: "SDG Alignment Tracking",
    body: "Tag indicators against the UN SDGs and produce alignment reports automatically.",
    tone: "coral"
  }
];
const toneStyles = {
  emerald: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]",
  lime: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]",
  cobalt: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]",
  magenta: "from-[oklch(0.62_0.24_350)] to-[oklch(0.7_0.21_28)]",
  coral: "from-[oklch(0.7_0.21_28)] to-[oklch(0.78_0.22_140)]"
};
function FeaturesGrid() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Capabilities",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Everything you need to ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "prove impact" }),
          "."
        ] }),
        description: "A complete monitoring and evaluation platform designed for complex programmes, institutional performance management and results-based reporting."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "group relative rounded-2xl border border-border bg-card p-6 hover:shadow-elegant hover:-translate-y-1 transition-all duration-300 overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `h-11 w-11 rounded-xl bg-linear-to-br ${toneStyles[f.tone]} flex items-center justify-center text-white shadow-soft`,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-5 w-5", strokeWidth: 2.25 })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-base font-semibold text-foreground", children: f.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: f.body }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: `absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r ${toneStyles[f.tone]} opacity-0 group-hover:opacity-100 transition-opacity`
            }
          )
        ]
      },
      f.title
    )) })
  ] });
}
const mobileImg = "/assets/mobile-app-DjoWZg0D.jpg";
function OfflineSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-gradient-to-b from-background to-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent-foreground/90", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WifiOff, { className: "h-3.5 w-3.5" }),
        " Differentiator"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-3xl md:text-5xl font-semibold tracking-tight", children: [
        "Built for the real world —",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "even without internet." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "Field officers in remote areas can collect, photograph, and verify data on a mobile device with zero connectivity. The moment they're back online, everything syncs — encrypted, attributed, and audit-ready." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 space-y-4", children: [
        {
          icon: WifiOff,
          t: "Works fully offline",
          d: "Forms, validation, and history available with no signal."
        },
        {
          icon: Cloud,
          t: "Auto-sync on reconnect",
          d: "Conflict-resolved, encrypted, and queued in the background."
        },
        {
          icon: FingerprintPattern,
          t: "Offline PIN + device binding",
          d: "Authenticated submissions even when no network is available."
        },
        {
          icon: ShieldCheck,
          t: "Token-based industry standard",
          d: "OAuth 2.0 / JWT for online sessions and integrations."
        }
      ].map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-10 w-10 rounded-lg bg-card border border-border flex items-center justify-center text-primary shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-4.5 w-4.5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold text-foreground", children: it.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: it.d })
        ] })
      ] }, it.t)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/features", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", className: "bg-card", children: [
        "Explore all features ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -inset-8 bg-gradient-accent opacity-20 blur-3xl rounded-full",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-3xl border border-border bg-card p-6 shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: mobileImg,
            alt: "Mandefied mobile app for offline data collection",
            loading: "lazy",
            width: 1e3,
            height: 1200,
            className: "w-full h-auto rounded-2xl"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -bottom-4 -left-4 rounded-xl bg-card border border-border shadow-elegant p-3 flex items-center gap-3 animate-float", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-9 w-9 rounded-lg bg-success/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "h-4.5 w-4.5 text-success" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Synced" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] text-muted-foreground", children: "42 records uploaded" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute -top-4 -right-4 rounded-xl bg-card border border-border shadow-elegant p-3 flex items-center gap-3 animate-float [animation-delay:1s]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2.5 w-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2.5 w-2.5 bg-success" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold", children: "Offline mode" })
        ] })
      ] })
    ] })
  ] }) });
}
function ReportingSection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-2 lg:order-1 relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute -inset-6 bg-gradient-primary opacity-15 blur-3xl rounded-full",
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border bg-card shadow-elegant overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 py-3 border-b border-border bg-surface", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Q3 2025 — Development Programme Performance Report" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] font-mono uppercase text-muted-foreground", children: "Auto-generated" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6 space-y-5", children: [
          [
            { label: "Output 1.1 — Beneficiaries trained", v: "12,480 / 12,000", pct: 104 },
            { label: "Output 2.3 — Sites operational", v: "38 / 40", pct: 95 },
            { label: "Outcome — Income increase", v: "+24%", pct: 87 },
            { label: "Impact — SDG 8 alignment", v: "On track", pct: 92 }
          ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: r.label }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs text-muted-foreground", children: r.v })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-2 rounded-full bg-muted overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "h-full bg-gradient-primary rounded-full",
                style: { width: `${Math.min(r.pct, 100)}%` }
              }
            ) })
          ] }, r.label)),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 pt-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
              " PDF"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { className: "inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border border-border bg-card hover:bg-muted", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-3.5 w-3.5" }),
              " Excel"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "order-1 lg:order-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground", children: "Reporting" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-3xl md:text-5xl font-semibold tracking-tight", children: [
        "From raw data to ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "decision-ready reports" }),
        " in minutes."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "Mandefied automatically generates monthly, quarterly and annual reports in formats aligned with government, institutional and development partner reporting requirements." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 space-y-3", children: [
        "Pre-built templates for institutional reporting, development programmes, SDG tracking and performance management",
        "PDF & Excel export with branded covers and signatures",
        "Narrative auto-fill from approved indicator commentary",
        "Schedule and distribute to stakeholders on a cadence"
      ].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-success shrink-0" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: t })
      ] }, t)) })
    ] })
  ] }) });
}
const items = [
  {
    icon: UserCheck,
    t: "Attribution by default",
    d: "Every submission is tied to a specific field officer, device, and timestamp."
  },
  {
    icon: GitBranch,
    t: "Multi-stage approval",
    d: "Configurable workflows from supervisor to M&E lead — nothing slips through."
  },
  {
    icon: ShieldCheck,
    t: "Full audit trail",
    d: "Immutable history of every edit, value change, and approval action."
  },
  {
    icon: Lock,
    t: "Encrypted end-to-end",
    d: "TLS in transit, AES at rest, role-scoped access on every record."
  }
];
function IntegritySection() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "bg-surface", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-10 items-start", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground", children: "Trust & integrity" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 text-3xl md:text-5xl font-semibold tracking-tight", children: [
        "Built for compliance. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Designed for trust." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: 'When auditors, regulators or stakeholders ask "How was this result achieved?", Mandefied provides a complete chain of evidence for every reported outcome.' })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:col-span-7 grid sm:grid-cols-2 gap-4", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "rounded-2xl border border-border bg-card p-6 hover:shadow-soft transition",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-11 w-11 rounded-xl bg-primary/10 border border-primary/15 flex items-center justify-center text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 font-semibold", children: it.t }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-sm text-muted-foreground leading-relaxed", children: it.d })
        ]
      },
      it.t
    )) })
  ] }) });
}
export {
  FeaturesGrid as F,
  IntegritySection as I,
  OfflineSection as O,
  ReportingSection as R
};

import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { a as Section, b as SectionHeading } from "./section-CSBmNayW.mjs";
import { q as Target, r as Gauge, s as Smartphone, S as ShieldCheck, t as ChartColumnIncreasing, T as TrendingUp, u as TriangleAlert, C as Clock, c as MapPin } from "../_libs/lucide-react.mjs";
const steps = [
  {
    n: "01",
    icon: Target,
    title: "Design Your Programme",
    body: "Create your results framework, objectives, outcomes, outputs, activities and implementation plan.",
    tone: "from-[oklch(0.42_0.14_155)] to-[oklch(0.78_0.22_140)]"
  },
  {
    n: "02",
    icon: Gauge,
    title: "Define Performance Indicators",
    body: "Configure KPIs, targets, milestones, baselines and reporting schedules aligned with your organization's framework.",
    tone: "from-[oklch(0.78_0.22_140)] to-[oklch(0.5_0.24_260)]"
  },
  {
    n: "03",
    icon: Smartphone,
    title: "Capture Verified Field Data",
    body: "Collect evidence through mobile devices—even offline—with GPS, photos, documents and digital signatures.",
    tone: "from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)]"
  },
  {
    n: "04",
    icon: ShieldCheck,
    title: "Validate & Approve",
    body: "Route submissions through configurable approval workflows, ensuring every result is reviewed and verified before publication.",
    tone: "from-[oklch(0.62_0.24_350)] to-[oklch(0.7_0.21_28)]"
  },
  {
    n: "05",
    icon: ChartColumnIncreasing,
    title: "Monitor, Report & Improve",
    body: "Track programme performance in real time, generate executive dashboards and institutional reports, and use insights to drive better decisions.",
    tone: "from-[oklch(0.7_0.21_28)] to-[oklch(0.78_0.22_140)]"
  }
];
function HowItWorks() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { id: "how", className: "bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "The full loop",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "From ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-spectrum", children: "data to decisions" }),
          ", in five clear steps."
        ] }),
        description: "One continuous workflow connects field officers, M&E teams, and decision-makers — without spreadsheets, email chains, or lost evidence."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid md:grid-cols-5 gap-px bg-border rounded-2xl overflow-hidden border border-border shadow-elegant", children: steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        className: "relative bg-card p-7 flex flex-col gap-4 hover:bg-surface-elevated transition-colors group",
        style: { animationDelay: `${i * 80}ms` },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: `h-11 w-11 rounded-xl bg-gradient-to-br ${s.tone} flex items-center justify-center text-white shadow-soft group-hover:scale-110 transition-transform`,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5", strokeWidth: 2.25 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-mono font-semibold text-muted-foreground/60", children: s.n })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-semibold text-foreground", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.body })
          ] }),
          i < steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-10 -right-3 z-10 h-6 w-6 rounded-full bg-card border border-border items-center justify-center text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "svg",
            {
              viewBox: "0 0 24 24",
              className: "h-full w-full p-1",
              fill: "none",
              stroke: "currentColor",
              strokeWidth: 2,
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" })
            }
          ) })
        ]
      },
      s.n
    )) })
  ] });
}
function DashboardPreview() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Section, { className: "bg-surface", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      SectionHeading,
      {
        eyebrow: "Live insights",
        title: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          "Every number is traceable. ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", { className: "hidden md:inline" }),
          " Every decision is data-backed."
        ] }),
        description: "A single, real-time view across every project, indicator, and field officer."
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-16 grid lg:grid-cols-12 gap-4", children: [
      [
        {
          label: "On Track",
          value: "168",
          delta: "+12",
          icon: TrendingUp,
          tone: "success"
        },
        {
          label: "At Risk",
          value: "23",
          delta: "-4",
          icon: TriangleAlert,
          tone: "warning"
        },
        { label: "Delayed", value: "9", delta: "-2", icon: Clock, tone: "destructive" }
      ].map((k) => /* @__PURE__ */ jsxRuntimeExports.jsx(KpiCard, { ...k }, k.label)),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-8 rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Indicator progress vs target" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Last 12 months · all programs" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary" }),
              " Actual"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-accent" }),
              " Target"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChartMock, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold", children: "Field activity" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Live submissions across operational zones" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(MapMock, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: [
          { region: "North Region", count: 142, tone: "success" },
          { region: "Central Region", count: 88, tone: "info" },
          { region: "South Region", count: 41, tone: "warning" }
        ].map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center justify-between text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: `h-2 w-2 rounded-full ${r.tone === "success" ? "bg-success" : r.tone === "info" ? "bg-info" : "bg-warning"}`
              }
            ),
            r.region
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs text-muted-foreground", children: [
            r.count,
            " subs"
          ] })
        ] }, r.region)) })
      ] })
    ] })
  ] });
}
function KpiCard({
  label,
  value,
  delta,
  icon: Icon,
  tone
}) {
  const toneMap = {
    success: "bg-success/10 text-success",
    warning: "bg-warning/15 text-warning-foreground",
    destructive: "bg-destructive/10 text-destructive"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-4 rounded-2xl border border-border bg-card p-6 shadow-soft", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start justify-between", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-9 w-9 rounded-lg flex items-center justify-center ${toneMap[tone]}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-4xl font-semibold tracking-tight", children: value }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-1 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: tone === "success" ? "text-success" : "text-foreground", children: delta }),
      " vs last quarter"
    ] })
  ] });
}
function ChartMock() {
  const actual = [20, 28, 24, 35, 42, 48, 55, 60, 58, 68, 75, 82];
  const target = [25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80];
  const max = 100;
  const w = 100;
  const h = 40;
  const toPath = (data) => data.map((v, i) => `${i === 0 ? "M" : "L"} ${i / (data.length - 1) * w} ${h - v / max * h}`).join(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-56 relative", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "svg",
    {
      viewBox: `0 0 ${w} ${h}`,
      preserveAspectRatio: "none",
      className: "w-full h-full overflow-visible",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "gradActual", x1: "0", x2: "0", y1: "0", y2: "1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.55 0.16 220)", stopOpacity: "0.25" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.55 0.16 220)", stopOpacity: "0" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: `${toPath(actual)} L ${w} ${h} L 0 ${h} Z`, fill: "url(#gradActual)" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: toPath(target),
            fill: "none",
            stroke: "oklch(0.7 0.18 155)",
            strokeWidth: "0.6",
            strokeDasharray: "1.5 1",
            vectorEffect: "non-scaling-stroke"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            d: toPath(actual),
            fill: "none",
            stroke: "oklch(0.45 0.15 220)",
            strokeWidth: "0.8",
            vectorEffect: "non-scaling-stroke"
          }
        )
      ]
    }
  ) });
}
function MapMock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 h-40 rounded-xl bg-gradient-to-br from-surface to-muted border border-border relative overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 200 100", className: "absolute inset-0 w-full h-full opacity-30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "path",
      {
        d: "M30,30 Q60,10 90,30 T160,40 L170,70 L120,80 L60,70 L20,60 Z",
        fill: "oklch(0.85 0.04 200)",
        stroke: "oklch(0.7 0.04 200)",
        strokeWidth: "0.4"
      }
    ) }),
    [
      { x: 30, y: 40 },
      { x: 60, y: 55 },
      { x: 80, y: 30 },
      { x: 110, y: 60 },
      { x: 140, y: 45 }
    ].map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "span",
      {
        className: "absolute -translate-x-1/2 -translate-y-1/2",
        style: { left: `${p.x / 200 * 100}%`, top: `${p.y / 100 * 100}%` },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "block relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "span",
            {
              className: "absolute inset-0 rounded-full bg-primary/40 animate-ping",
              style: { width: 12, height: 12, marginLeft: -6, marginTop: -6 }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block h-3 w-3 rounded-full bg-primary border-2 border-card relative" })
        ] })
      },
      i
    ))
  ] });
}
export {
  DashboardPreview as D,
  HowItWorks as H
};

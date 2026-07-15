import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./section-CSBmNayW.mjs";
import { A as ArrowRight } from "../_libs/lucide-react.mjs";
function CtaBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "py-20 md:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 lg:px-8", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-3xl bg-gradient-spectrum px-8 py-16 md:p-20 shadow-dramatic", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 opacity-30", "aria-hidden": true, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-32 -right-32 h-96 w-96 rounded-full bg-[oklch(0.78_0.22_140)] blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-[oklch(0.7_0.21_28)] blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-[oklch(0.62_0.24_350)] blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-2xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-5xl font-semibold tracking-tight text-primary-foreground", children: "See Mandefied in action." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-primary-foreground/85 leading-relaxed", children: "Book a personalized 30-minute demonstration and discover how Mandefied can streamline monitoring, automate reporting and provide real-time visibility into your programmes, projects and organizational performance." }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col sm:flex-row gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/demo", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Button,
          {
            size: "lg",
            className: "h-12 px-6 text-base bg-card text-foreground hover:bg-card/90 shadow-elegant",
            children: [
              "Request a Demo ",
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-1 h-4 w-4" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/how-it-works", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            size: "lg",
            variant: "ghost",
            className: "h-12 px-6 text-base text-primary-foreground hover:bg-primary-foreground/10",
            children: "See how it works"
          }
        ) })
      ] })
    ] })
  ] }) }) });
}
export {
  CtaBanner as C
};

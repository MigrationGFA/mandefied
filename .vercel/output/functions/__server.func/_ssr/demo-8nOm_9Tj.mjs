import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteHeader, a as Section, B as Button, c as SiteFooter, d as cn } from "./section-CSBmNayW.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { b as CircleCheck, M as Mail, P as Phone, c as MapPin } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
function DemoPage() {
  const [submitted, setSubmitted] = reactExports.useState(false);
  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "bg-mesh", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-12 lg:gap-20 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground", children: "Get a personalized walkthrough" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-5 text-4xl md:text-6xl font-semibold tracking-tight", children: [
            "See ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-primary", children: "Mandefied" }),
            " in action."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-lg text-muted-foreground leading-relaxed", children: "Book a 30-minute demo tailored to your program. We'll show you a live dashboard, walk through offline collection, and answer every question your team has." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-8 space-y-3", children: ["Live dashboard tailored to your sector", "Offline data collection walkthrough", "Development partner & SDG report generation in real time", "Pricing for your team size"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-success shrink-0" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: t })
          ] }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid sm:grid-cols-3 gap-3", children: [{
            icon: Mail,
            label: "Email",
            v: "hello@mandefied.com"
          }, {
            icon: Phone,
            label: "Phone",
            v: "+234 803 083 8906"
          }, {
            icon: MapPin,
            label: "Office",
            v: "Ogun Tech Hub"
          }].map((c) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-4 w-4 text-primary" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs text-muted-foreground", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: c.v })
          ] }, c.label)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -inset-6 bg-gradient-primary opacity-15 blur-3xl rounded-full", "aria-hidden": true }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative rounded-2xl border border-border bg-card p-7 md:p-9 shadow-elegant", children: !submitted ? /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit, className: "space-y-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full name", id: "name", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "name", placeholder: "Adaeze Okoye", required: true }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Work email", id: "email", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "email", type: "email", placeholder: "you@org.gov", required: true }) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Organization", id: "org", required: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "org", placeholder: "Ministry of Development", required: true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Role", id: "role", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { id: "role", placeholder: "M&E Lead" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "What would you like to track?", id: "use", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, { id: "use", placeholder: "Tell us about your program — sectors, donors, scale, current tools…", rows: 4 }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", className: "w-full h-12 text-base bg-gradient-spectrum hover:opacity-90 shadow-glow text-white", children: "Request my demo" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-center text-muted-foreground", children: "We respond within one business day." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto h-14 w-14 rounded-full bg-success/15 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-7 w-7 text-success" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-5 text-2xl font-semibold tracking-tight", children: "Request received" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-muted-foreground max-w-sm mx-auto", children: "Thanks — a member of our team will reach out within one business day to schedule your personalized demo." })
          ] }) })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Section, { className: "pt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-3xl font-semibold tracking-tight text-center", children: [
          "Questions teams ask ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient-warm", children: "before booking" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-3", children: [{
          q: "How long does the demo take?",
          a: "30 minutes. We spend the first 5 understanding your program, then walk you through a live dashboard mapped to your sector."
        }, {
          q: "Do I need to prepare anything?",
          a: "No. Bring questions. If you have an existing logframe or indicator list, share it ahead and we'll mock it inside Mandefied for the call."
        }, {
          q: "Can Mandefied match our donor's report template?",
          a: "Yes. Mandefied ships development finance institution and SDG-aligned templates out of the box, and we configure custom donor templates during onboarding."
        }, {
          q: "What about offline / low-connectivity field sites?",
          a: "Field officers collect data fully offline on mobile. The app syncs automatically the moment connectivity returns — with full audit trail intact."
        }, {
          q: "How quickly can we go live?",
          a: "Most teams run a first program in 2–4 weeks, including logframe setup, indicator configuration, and field officer training."
        }].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("details", { className: "group rounded-xl border border-border bg-card p-5 open:shadow-soft transition-shadow", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("summary", { className: "cursor-pointer list-none flex items-center justify-between font-semibold text-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: f.q }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-4 h-7 w-7 rounded-full bg-gradient-to-br from-[oklch(0.5_0.24_260)] to-[oklch(0.62_0.24_350)] text-white flex items-center justify-center text-sm transition-transform group-open:rotate-45", children: "+" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-muted-foreground leading-relaxed", children: f.a })
        ] }, f.q)) })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function Field({
  label,
  id,
  required,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { htmlFor: id, className: "mb-2 block", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
    ] }),
    children
  ] });
}
export {
  DemoPage as component
};

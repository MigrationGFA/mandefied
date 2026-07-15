import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
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
const appCss = "/assets/styles-l_Aq46Gd.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
const Route$6 = createRootRoute({
  head: (ctx) => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mandefied — The Operating System for Impact" },
      {
        name: "description",
        content: "Mandefied is a real-time monitoring & evaluation platform for governments, NGOs, and enterprises. Track performance, measure outcomes, generate funder-ready reports."
      },
      { name: "author", content: "Mandefied" },
      { property: "og:title", content: "Mandefied — The Operating System for Impact" },
      {
        property: "og:description",
        content: "Real-time M&E for governments, NGOs and enterprises. From data to decisions — track what matters, prove what works."
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Mandefied" },
      { name: "twitter:title", content: "Mandefied — The Operating System for Impact" },
      {
        name: "description",
        content: "Mandefied is a real-time monitoring & evaluation platform that helps governments, NGOs, and enterprises track performance, measure outcomes, and generate funder"
      },
      {
        property: "og:description",
        content: "Mandefied is a real-time monitoring & evaluation platform that helps governments, NGOs, and enterprises track performance, measure outcomes, and generate funder"
      },
      {
        name: "twitter:description",
        content: "Mandefied is a real-time monitoring & evaluation platform that helps governments, NGOs, and enterprises track performance, measure outcomes, and generate funder"
      },
      {
        property: "og:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e1f1ce1-74b3-4f3d-a370-eaf556d644d7/id-preview-7ac11694--3faa17a4-ed8b-4b3c-9935-afff21e683cc.lovable.app-1776440939821.png"
      },
      {
        name: "twitter:image",
        content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e1f1ce1-74b3-4f3d-a370-eaf556d644d7/id-preview-7ac11694--3faa17a4-ed8b-4b3c-9935-afff21e683cc.lovable.app-1776440939821.png"
      }
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap"
      },
      { rel: "stylesheet", href: appCss }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter$5 = () => import("./use-cases-8igfhGlG.mjs");
const Route$5 = createFileRoute("/use-cases")({
  head: () => ({
    meta: [{
      title: "Use Cases — Mandefied for Government, NGOs & Enterprise"
    }, {
      name: "description",
      content: "Mandefied powers mission-critical programmes across governments, development organizations, NGOs, enterprises and public institutions."
    }, {
      property: "og:title",
      content: "Use Cases — Mandefied"
    }, {
      property: "og:description",
      content: "Mandefied helps governments, development organizations, NGOs and enterprises transform programme data into measurable impact."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./how-it-works-BAwMmRRX.mjs");
const Route$4 = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [{
      title: "How it works — From programme planning to executive reporting | Mandefied"
    }, {
      name: "description",
      content: "See the complete performance management and monitoring lifecycle: design programmes, define indicators, capture field data, validate results and generate institutional reports."
    }, {
      property: "og:title",
      content: "How Mandefied works"
    }, {
      property: "og:description",
      content: "One continuous workflow: define, measure, collect, validate, and decide. See the full M&E loop."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./features-IjyZNmIj.mjs");
const Route$3 = createFileRoute("/features")({
  head: () => ({
    meta: [{
      title: "Features — The complete M&E platform | Mandefied"
    }, {
      name: "description",
      content: "Logframes, KPIs, offline mobile collection, real-time dashboards, automated development-partner reports, audit trails, role-based access and SDG tracking — all in one platform."
    }, {
      property: "og:title",
      content: "Features — Mandefied M&E Platform"
    }, {
      property: "og:description",
      content: "Everything you need to prove impact: logframes, indicators, offline collection, dashboards, automated reporting and audit trails."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./demo-8nOm_9Tj.mjs");
const Route$2 = createFileRoute("/demo")({
  head: () => ({
    meta: [{
      title: "Request a Demo — Mandefied"
    }, {
      name: "description",
      content: "Book a personalized 30-minute demo of Mandefied tailored to your program. See real-time dashboards, offline data collection, and development-partner reporting in action."
    }, {
      property: "og:title",
      content: "Request a Demo — Mandefied"
    }, {
      property: "og:description",
      content: "See Mandefied in action. Book a personalized 30-minute walkthrough with our team."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DlJcU2RH.mjs");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — The Enterprise Platform for Performance & Impact | Mandefied"
    }, {
      name: "description",
      content: "Mandefied is an enterprise-grade Monitoring, Evaluation, Learning and Performance Management platform for governments, development organizations, NGOs and enterprises."
    }, {
      property: "og:title",
      content: "About Mandefied"
    }, {
      property: "og:description",
      content: "The operating system for measurable impact — built from real-world implementation across government, institutional and development programmes."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DqAEZPsM.mjs");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Mandefied — Turn Projects into Measurable Impact"
    }, {
      name: "description",
      content: "Real-time monitoring & evaluation platform for governments, NGOs, and enterprises. Track performance, measure outcomes, and generate funder-ready reports."
    }, {
      property: "og:title",
      content: "Mandefied — Turn Projects into Measurable Impact"
    }, {
      property: "og:description",
      content: "From data to decisions. The operating system for performance management, project tracking, and impact reporting."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const UseCasesRoute = Route$5.update({
  id: "/use-cases",
  path: "/use-cases",
  getParentRoute: () => Route$6
});
const HowItWorksRoute = Route$4.update({
  id: "/how-it-works",
  path: "/how-it-works",
  getParentRoute: () => Route$6
});
const FeaturesRoute = Route$3.update({
  id: "/features",
  path: "/features",
  getParentRoute: () => Route$6
});
const DemoRoute = Route$2.update({
  id: "/demo",
  path: "/demo",
  getParentRoute: () => Route$6
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$6
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$6
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  DemoRoute,
  FeaturesRoute,
  HowItWorksRoute,
  UseCasesRoute
};
const routeTree = Route$6._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router;
};
export {
  getRouter
};

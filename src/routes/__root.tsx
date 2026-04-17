import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Mandefied — The Operating System for Impact" },
      {
        name: "description",
        content:
          "Mandefied is a real-time monitoring & evaluation platform for governments, NGOs, and enterprises. Track performance, measure outcomes, generate funder-ready reports.",
      },
      { name: "author", content: "Mandefied" },
      { property: "og:title", content: "Mandefied — The Operating System for Impact" },
      {
        property: "og:description",
        content:
          "Real-time M&E for governments, NGOs and enterprises. From data to decisions — track what matters, prove what works.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Mandefied" },
      { name: "twitter:title", content: "Mandefied — The Operating System for Impact" },
      { name: "description", content: "Mandefied is a real-time monitoring & evaluation platform that helps governments, NGOs, and enterprises track performance, measure outcomes, and generate funder" },
      { property: "og:description", content: "Mandefied is a real-time monitoring & evaluation platform that helps governments, NGOs, and enterprises track performance, measure outcomes, and generate funder" },
      { name: "twitter:description", content: "Mandefied is a real-time monitoring & evaluation platform that helps governments, NGOs, and enterprises track performance, measure outcomes, and generate funder" },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e1f1ce1-74b3-4f3d-a370-eaf556d644d7/id-preview-7ac11694--3faa17a4-ed8b-4b3c-9935-afff21e683cc.lovable.app-1776440939821.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/0e1f1ce1-74b3-4f3d-a370-eaf556d644d7/id-preview-7ac11694--3faa17a4-ed8b-4b3c-9935-afff21e683cc.lovable.app-1776440939821.png" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Sora:wght@500;600;700;800&display=swap",
      },
      { rel: "stylesheet", href: appCss },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}

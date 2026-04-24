import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";
import viteReact from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [
    tanstackStart(),
    nitro({
      // This is where we tell Nitro to build for Vercel
      preset: "vercel",
    }),
    viteReact(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

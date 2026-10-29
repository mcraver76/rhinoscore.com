import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  // "production" only on the live site build; previews and local builds use Turnstile TEST keys.
  define: { __VERCEL_ENV__: JSON.stringify(process.env.VERCEL_ENV || "development") },
});

// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://webbmediareviews.com.au",
  trailingSlash: "always",
  build: { format: "directory" },
  integrations: [
    sitemap({
      // Utility pages stay out of the sitemap.
      filter: (page) => !page.includes("/leave-a-review/"),
    }),
  ],
});

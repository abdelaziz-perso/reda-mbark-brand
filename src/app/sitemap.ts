import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/mentions-legales/", "/politique-de-confidentialite/", "/conditions-de-vente/"];
  return routes.map((route) => ({
    url: `${SITE_URL}${route || "/"}`,
    changeFrequency: route === "" ? "weekly" : "yearly",
    priority: route === "" ? 1 : 0.3,
  }));
}

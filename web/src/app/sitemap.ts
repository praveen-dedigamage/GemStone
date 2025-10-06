import type { MetadataRoute } from "next";
import { GEMS } from "@/data/gems";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://www.example.com");
  const routes: MetadataRoute.Sitemap = [
    "",
    "/shop",
    "/about",
    "/ethics",
    "/education",
    "/contact",
  ].map((path) => ({ url: new URL(path, base).toString(), lastModified: new Date() }));

  const productRoutes: MetadataRoute.Sitemap = GEMS.map((g) => ({
    url: new URL(`/product/${g.id}`, base).toString(),
    lastModified: new Date(),
  }));

  return [...routes, ...productRoutes];
}

import type { MetadataRoute } from "next";
import { env } from "@/app/infrastructure/config/env";

// Mientras el sitio no esté publicado en el dominio final se bloquea a los buscadores
// (NEXT_PUBLIC_SITE_INDEXABLE distinto de "true").
export default function robots(): MetadataRoute.Robots {
  if (!env.indexable) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${env.siteUrl}/sitemap.xml`,
    host: env.siteUrl,
  };
}

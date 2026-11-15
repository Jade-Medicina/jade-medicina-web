import type { MetadataRoute } from "next";
import { env } from "@/app/infrastructure/config/env";
import { SERVICES, serviceHref } from "@/ui/content/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["/", "/servicios", ...SERVICES.map((service) => serviceHref(service.slug)), "/equipo", "/contacto"];
  return paths.map((path) => ({
    url: `${env.siteUrl}${path === "/" ? "" : path}`,
    changeFrequency: "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}

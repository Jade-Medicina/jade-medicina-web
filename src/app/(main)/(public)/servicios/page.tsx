import type { Metadata } from "next";
import { ServicesTemplate } from "@/ui/template/services/ServicesTemplate";
import { SERVICES_PAGE } from "@/ui/content/services";
import { buildPageMetadata } from "@/ui/content/seo";

export const metadata: Metadata = buildPageMetadata({ ...SERVICES_PAGE.seo, path: "/servicios" });

export default function ServicesPage() {
  return <ServicesTemplate />;
}

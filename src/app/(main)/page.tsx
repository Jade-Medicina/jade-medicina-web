import type { Metadata } from "next";
import { HomeTemplate } from "@/ui/template/landing/HomeTemplate";
import { HOME } from "@/ui/content/home";
import { buildPageMetadata } from "@/ui/content/seo";

export const metadata: Metadata = buildPageMetadata({ ...HOME.seo, path: "/", absoluteTitle: true });

export default function HomePage() {
  return <HomeTemplate />;
}

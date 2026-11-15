import type { Metadata } from "next";
import { TeamTemplate } from "@/ui/template/team/TeamTemplate";
import { TEAM_PAGE } from "@/ui/content/team";
import { buildPageMetadata } from "@/ui/content/seo";

export const metadata: Metadata = buildPageMetadata({ ...TEAM_PAGE.seo, path: "/equipo" });

export default function TeamPage() {
  return <TeamTemplate />;
}

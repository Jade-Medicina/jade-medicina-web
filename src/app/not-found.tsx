import type { Metadata } from "next";
import { PublicLayout } from "@/ui/layouts/PublicLayout";
import { NotFoundTemplate } from "@/ui/template/notFound/NotFoundTemplate";
import { UI_TEXT } from "@/ui/content/site";

export const metadata: Metadata = {
  title: UI_TEXT.notFound.title,
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <PublicLayout>
      <NotFoundTemplate />
    </PublicLayout>
  );
}

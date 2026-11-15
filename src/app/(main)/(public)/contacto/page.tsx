import type { Metadata } from "next";
import { ContactTemplate } from "@/ui/template/contact/ContactTemplate";
import { CONTACT_PAGE } from "@/ui/content/contact";
import { buildPageMetadata } from "@/ui/content/seo";

export const metadata: Metadata = buildPageMetadata({ ...CONTACT_PAGE.seo, path: "/contacto" });

export default function ContactPage() {
  return <ContactTemplate />;
}

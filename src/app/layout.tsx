import type { Metadata, Viewport } from "next";
import { Montserrat } from "next/font/google";
import StyledComponentsRegistry from "@/ui/styles/registry";
import { JsonLd } from "@/ui/atoms/JsonLd";
import { env } from "@/app/infrastructure/config/env";
import { HOME } from "@/ui/content/home";
import { SITE } from "@/ui/content/site";
import { buildClinicJsonLd, buildPageMetadata } from "@/ui/content/seo";

// Montserrat es la tipografía del manual de marca (variable: cubre los pesos 300 a 900).
const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-montserrat", display: "swap" });

export const metadata: Metadata = {
  ...buildPageMetadata({ ...HOME.seo, path: "/" }),
  metadataBase: new URL(env.siteUrl),
  title: { default: HOME.seo.title, template: `%s | ${SITE.shortName}` },
  applicationName: SITE.name,
  robots: env.indexable ? { index: true, follow: true } : { index: false, follow: false },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#003535",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={montserrat.variable}>
      <body>
        <JsonLd data={buildClinicJsonLd(env.siteUrl)} />
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}

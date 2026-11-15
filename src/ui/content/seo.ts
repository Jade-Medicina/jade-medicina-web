import type { Metadata } from "next";
import { SITE } from "./site";

export const OG_IMAGE = {
  url: "/images/equipo-grupo.jpg",
  width: 1600,
  height: 900,
  alt: "Profesionales de Jade Medicina y Rehabilitación",
};

/**
 * Datos estructurados MedicalClinic. Deben coincidir con la ficha de Google Business Profile
 * (nombre, dirección, teléfono y horario).
 */
export const buildClinicJsonLd = (siteUrl: string) => ({
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  name: SITE.name,
  legalName: SITE.legalName,
  url: siteUrl,
  logo: `${siteUrl}/images/logo-color.png`,
  image: `${siteUrl}${OG_IMAGE.url}`,
  description: SITE.description,
  telephone: SITE.phone.international,
  email: SITE.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: SITE.address.street,
    addressLocality: SITE.address.city,
    addressRegion: SITE.address.region,
    addressCountry: SITE.address.country,
  },
  geo: { "@type": "GeoCoordinates", latitude: SITE.geo.latitude, longitude: SITE.geo.longitude },
  openingHours: SITE.schedule.structured,
  hasMap: SITE.maps.url,
  sameAs: [SITE.social.instagram, SITE.social.facebook],
});

/** Metadata por página: canonical, Open Graph y Twitter con la imagen y el nombre del sitio. */
export const buildPageMetadata = ({
  title,
  description,
  path,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  absoluteTitle?: boolean;
}): Metadata => ({
  title: absoluteTitle ? { absolute: title } : title,
  description,
  alternates: { canonical: path },
  openGraph: {
    type: "website",
    locale: "es_CO",
    siteName: SITE.name,
    title,
    description,
    url: path,
    images: [OG_IMAGE],
  },
  twitter: { card: "summary_large_image", title, description, images: [OG_IMAGE.url] },
});

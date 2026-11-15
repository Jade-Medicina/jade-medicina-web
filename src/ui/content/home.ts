import type { IconName } from "@/models/content.model";
import { COVERAGE_WHATSAPP_MESSAGE, DEFAULT_WHATSAPP_MESSAGE, LOGOS, SITE, whatsappUrl } from "./site";

export const HOME = {
  seo: {
    title: "Jade Medicina y Rehabilitación | Especialistas y fisioterapia en Popayán",
    description: SITE.description,
  },
  hero: {
    titleStart: "Tu bienestar es",
    titleHighlight: "nuestra razón de ser",
    text: "En Jade unimos experiencia médica, atención especializada y rehabilitación integral para cuidar de tu salud, acompañar tu recuperación y ayudarte a vivir mejor. Todo lo que necesitas para cuidar de ti y de los tuyos,",
    textHighlight: "en un solo lugar.",
    cta: { label: "Agenda tu cita", href: whatsappUrl(DEFAULT_WHATSAPP_MESSAGE), external: true },
    wallLogo: { src: "/images/portada-logo-pared.png", alt: "", width: 670, height: 250 },
    team: {
      src: "/images/portada-equipo-batas.png",
      alt: "Equipo de profesionales de Jade con bata",
      width: 1200,
      height: 642,
    },
  },
  quickAccessLabel: "Accesos rápidos",
  quickAccess: [
    {
      icon: "calendar",
      title: "Pedir cita",
      detail: "Por WhatsApp",
      href: whatsappUrl(DEFAULT_WHATSAPP_MESSAGE),
      external: true,
    },
    { icon: "stethoscope", title: "Servicios", detail: "Especialidades y rehabilitación", href: "/servicios" },
    { icon: "handshake", title: "Convenios", detail: "Usa tu plan de salud", href: "/#convenios" },
    { icon: "location", title: "Cómo llegar", detail: SITE.address.street, href: SITE.maps.url, external: true },
  ] satisfies { icon: IconName; title: string; detail: string; href: string; external?: boolean }[],
  services: {
    titleStart: "Nuestros",
    titleHighlight: "servicios",
    subtitle: "Especialidades médicas y rehabilitación en un solo lugar.",
  },
  benefitsLabel: "Por qué elegir Jade",
  benefits: [
    { icon: "shield", lines: ["Atención integral", "y especializada"] },
    { icon: "people", lines: ["Especialistas y fisioterapia", "en un solo lugar"] },
    { icon: "handshake", lines: ["Convenios con", "Coomeva y Previred"] },
    { icon: "heart", lines: ["Acompañamiento en cada", "etapa de tu proceso"] },
  ] satisfies { icon: IconName; lines: [string, string] }[],
  closing: {
    label: "Sede, convenios y contacto",
    venue: {
      title: "Nuestra sede",
      address: SITE.address.street,
      area: `${SITE.address.neighborhood}, ${SITE.address.city}`,
      cta: { label: "Cómo llegar", href: SITE.maps.url, external: true },
    },
    agreements: {
      id: "convenios",
      title: "Convenios",
      text: "Si estás afiliado, trae la orden médica y la autorización de tu entidad.",
      logos: [LOGOS.coomeva, LOGOS.previred],
      note: "Jade cuenta con certificación de habilitación de la Secretaría de Salud.",
    },
    contact: {
      title: "Contáctanos",
      cta: { label: "Escríbenos por WhatsApp", href: whatsappUrl(DEFAULT_WHATSAPP_MESSAGE), external: true },
      coverage: {
        label: "Consulta la cobertura de tu convenio",
        href: whatsappUrl(COVERAGE_WHATSAPP_MESSAGE),
        external: true,
      },
    },
  },
} as const;

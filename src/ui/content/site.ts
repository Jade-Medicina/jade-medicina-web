import type { NavLink } from "@/models/content.model";

// Datos de contacto confirmados por el cliente.
export const SITE = {
  name: "Jade Medicina y Rehabilitación",
  shortName: "Jade",
  legalName: "JADE Medicina y Rehabilitación S.A.S.",
  nit: "901945522",
  slogan: "Experiencia y dedicación al servicio de tu salud.",
  description:
    "IPS en Popayán, Cauca: fisioterapia, ortopedia y traumatología (general, infantil y pie y tobillo), otorrinolaringología, medicina interna y plantillas ortopédicas personalizadas.",
  phone: { display: "315 373 3899", international: "+57 315 373 3899", whatsapp: "573153733899" },
  email: "jademedicinayrehabilitacion@gmail.com",
  address: {
    street: "Carrera 7A # 17N-50",
    neighborhood: "Barrio El Recuerdo",
    city: "Popayán",
    region: "Cauca",
    country: "CO",
    full: "Carrera 7A # 17N-50, barrio El Recuerdo, Popayán, Cauca",
  },
  geo: { latitude: 2.453504, longitude: -76.5979758 },
  schedule: {
    days: "Lunes a viernes",
    hours: "8:00 a. m. a 12:00 m. y 2:00 p. m. a 6:00 p. m.",
    /** Formato schema.org para los datos estructurados. */
    structured: ["Mo-Fr 08:00-12:00", "Mo-Fr 14:00-18:00"],
  },
  maps: {
    url: "https://www.google.com/maps/place/Jade+Centro+Medico+y+Rehabilitaci%C3%B3n/@2.453504,-76.5979758,17z/data=!3m1!4b1!4m6!3m5!1s0x8e300315b6888b5f:0xda6f240ff5468890!8m2!3d2.453504!4d-76.5979758!16s%2Fg%2F11mzbr6rvz",
    embed: "https://www.google.com/maps?q=Jade+Centro+Medico+y+Rehabilitaci%C3%B3n,+Popay%C3%A1n&z=17&output=embed",
  },
  social: {
    instagram: "https://www.instagram.com/jade.centromedico",
    facebook: "https://www.facebook.com/share/1RxWGyo1Gb/",
  },
  copyrightYear: 2026,
} as const;

export const DEFAULT_WHATSAPP_MESSAGE = "Hola, quiero agendar una cita en Jade";
export const COVERAGE_WHATSAPP_MESSAGE = "Hola, quiero consultar la cobertura de mi convenio";

/** Enlace de WhatsApp con mensaje predefinido escrito desde el paciente. */
export const whatsappUrl = (message?: string): string =>
  message
    ? `https://wa.me/${SITE.phone.whatsapp}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${SITE.phone.whatsapp}`;

export const NAV_LINKS: NavLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nuestro equipo", href: "/equipo" },
  { label: "Nuestra sede", href: "/contacto#sede" },
  { label: "Convenios", href: "/#convenios" },
  { label: "Contacto y ubicación", href: "/contacto" },
];

export const UI_TEXT = {
  skipLink: "Saltar al contenido",
  openMenu: "Abrir menú",
  closeMenu: "Cerrar menú",
  mainNav: "Principal",
  mobileNav: "Menú",
  headerWhatsapp: "WhatsApp",
  bookAppointment: "Agenda tu cita",
  logoAlt: "Jade Medicina y Rehabilitación, inicio",
  footer: {
    contactTitle: "Contacto",
    siteTitle: "Sitio",
    whatsappPrefix: "WhatsApp",
    instagram: "Instagram",
    facebook: "Facebook",
  },
  allServices: "Ver todos los servicios",
  servicesBreadcrumb: "Servicios",
  seeService: "Ver servicio",
  learnMore: "Conoce más",
  notFound: {
    title: "Página no encontrada",
    text: "La página que buscas no existe o cambió de dirección.",
    cta: "Volver al inicio",
  },
} as const;

export const LOGOS = {
  color: { src: "/images/logo-color.png", alt: "Jade Medicina y Rehabilitación", width: 5730, height: 1788 },
  colorOnDark: {
    src: "/images/logo-color-blanco.png",
    alt: "Jade Medicina y Rehabilitación",
    width: 5730,
    height: 1788,
  },
  coomeva: { src: "/images/logo-coomeva-mp.png", alt: "Coomeva Medicina Prepagada", width: 556, height: 122 },
  previred: { src: "/images/logo-previred.png", alt: "Previred", width: 962, height: 359 },
  ortomec: { src: "/images/logo-ortomec.png", alt: "ORTOMEC", width: 180, height: 79 },
} as const;

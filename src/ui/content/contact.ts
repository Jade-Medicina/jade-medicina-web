import type { ImageAsset } from "@/models/content.model";
import { DEFAULT_WHATSAPP_MESSAGE, SITE, whatsappUrl } from "./site";

export const CONTACT_PAGE = {
  seo: {
    title: "Nuestra sede, contacto y ubicación | IPS en Popayán, barrio El Recuerdo",
    description: `Visita la sede de Jade Medicina y Rehabilitación en Popayán: ${SITE.address.street}, barrio El Recuerdo. WhatsApp ${SITE.phone.display}. Lunes a viernes.`,
  },
  header: {
    title: "Contacto y ubicación",
    address: `${SITE.address.full}.`,
    phoneLabel: "Teléfono y WhatsApp:",
    whatsappCta: { label: "Escríbenos por WhatsApp", href: whatsappUrl(DEFAULT_WHATSAPP_MESSAGE), external: true },
    mapsCta: { label: "Abrir en Google Maps", href: SITE.maps.url, external: true },
    mapTitle: "Mapa de Google con la ubicación de Jade Medicina y Rehabilitación",
  },
  details: {
    title: "Datos de contacto",
    labels: {
      address: "Dirección",
      phone: "WhatsApp y teléfono",
      email: "Correo",
      schedule: "Horario",
      social: "Redes",
    },
  },
  venue: {
    id: "sede",
    title: "Nuestra sede",
    text: "Conoce nuestras instalaciones en el barrio El Recuerdo.",
  },
};

export const VENUE_GALLERY: { image: ImageAsset; wide?: boolean }[] = [
  {
    image: {
      src: "/images/sede-fachada.jpg",
      alt: "Fachada de la sede de Jade Medicina y Rehabilitación",
      width: 1448,
      height: 1086,
    },
    wide: true,
  },
  { image: { src: "/images/sede-recepcion.jpg", alt: "Sala de espera con el logo de Jade", width: 1086, height: 1448 } },
  { image: { src: "/images/sede-pasillo.jpg", alt: "Pasillo y zona de espera", width: 1086, height: 1448 } },
  { image: { src: "/images/sede-consultorio-1.jpg", alt: "Consultorio con camilla", width: 1086, height: 1448 } },
  { image: { src: "/images/sede-consultorio-2.jpg", alt: "Consultorio de Jade", width: 1086, height: 1448 } },
  {
    image: {
      src: "/images/sede-consultorio-3.jpg",
      alt: "Sala de fisioterapia con el mensaje Recuperamos movimiento, devolvemos bienestar",
      width: 1086,
      height: 1448,
    },
  },
  {
    image: {
      src: "/images/sede-gimnasio.jpg",
      alt: "Sala de fisioterapia con equipos de ejercicio",
      width: 1199,
      height: 1312,
    },
  },
];

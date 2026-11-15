import type { TeamCard } from "@/models/content.model";

export const TEAM_PAGE = {
  seo: {
    title: "Nuestro equipo | Especialistas en Popayán",
    description:
      "Conoce al equipo de Jade en Popayán: medicina interna, ortopedia infantil, cirugía de pie y tobillo, otorrinolaringología y fisioterapia.",
  },
  header: {
    title: "Nuestro equipo",
    text: "Especialistas y fisioterapia que te acompañan en todo tu proceso.",
  },
  groupPhotoLabel: "Foto del equipo",
  groupPhoto: {
    src: "/images/equipo-grupo.jpg",
    alt: "Profesionales de Jade Medicina y Rehabilitación",
    width: 1600,
    height: 900,
  },
  listTitle: "Nuestros profesionales",
};

// Formación ordenada de la más reciente a la más antigua (ajuste del 11/11/2026).
export const TEAM: TeamCard[] = [
  {
    image: {
      src: "/images/equipo-medicina-interna.jpg",
      alt: "Dra. Karen Urrego y Dr. Juan David Ospina, médicos internistas de Jade",
      width: 900,
      height: 1600,
    },
    members: [
      {
        name: "Dra. Karen Urrego",
        credentials: [
          { title: "Médica internista", institution: "Universidad del Cauca" },
          { title: "Médica y cirujana", institution: "Universidad del Cauca" },
        ],
      },
      {
        name: "Dr. Juan David Ospina",
        credentials: [
          { title: "Médico internista", institution: "Universidad del Cauca" },
          { title: "Médico y cirujano", institution: "Universidad del Cauca" },
        ],
      },
    ],
    serviceLink: { label: "Medicina interna", href: "/servicios/medicina-interna" },
  },
  {
    image: {
      src: "/images/equipo-hernan-herrera.jpg",
      alt: "Dr. Hernán Darío Herrera, cirujano de pie y tobillo",
      width: 758,
      height: 1104,
    },
    members: [
      {
        name: "Dr. Hernán Herrera",
        credentials: [
          { title: "Cirujano de pie y tobillo", institution: "Universidad Militar" },
          { title: "Ortopedista y traumatólogo", institution: "Universidad Nacional" },
          { title: "Médico y cirujano", institution: "Universidad del Cauca" },
        ],
      },
    ],
    serviceLink: { label: "Pie y tobillo", href: "/servicios/pie-tobillo" },
  },
  {
    image: {
      src: "/images/equipo-cristian-vanegas.jpg",
      alt: "Dr. Cristian Fernando Vanegas, ortopedista pediátrico",
      width: 477,
      height: 600,
    },
    members: [
      {
        name: "Dr. Cristian Fernando Vanegas",
        credentials: [
          { title: "Ortopedista pediátrico", institution: "Universidad Javeriana" },
          { title: "Ortopedista y traumatólogo", institution: "Universidad del Valle" },
          { title: "Médico y cirujano", institution: "Universidad del Cauca" },
        ],
      },
    ],
    serviceLink: { label: "Ortopedia infantil", href: "/servicios/ortopedia-infantil" },
  },
  {
    image: {
      src: "/images/equipo-giovanny-gonzalez.jpg",
      alt: "Dr. Erwin Giovanny González, otorrinolaringólogo",
      width: 900,
      height: 1200,
    },
    members: [
      {
        name: "Dr. Erwin Giovanny González",
        credentials: [
          { title: "Otorrinolaringólogo", institution: "Universidad de Ciencias Médicas de La Habana, Cuba" },
          { title: "Médico y cirujano", institution: "Universidad del Cauca" },
        ],
      },
    ],
    serviceLink: { label: "Otorrinolaringología", href: "/servicios/otorrinolaringologia" },
  },
  {
    image: {
      src: "/images/equipo-alejandra-daza.jpg",
      alt: "Janeth Alejandra Daza Sánchez, fisioterapeuta",
      width: 896,
      height: 1195,
    },
    members: [
      {
        name: "Ft. Janeth Alejandra Daza Sánchez",
        credentials: [
          { title: "Especialista en Neurorrehabilitación", institution: "Escuela Colombiana de Rehabilitación" },
          { title: "Fisioterapeuta", institution: "Fundación Universitaria María Cano" },
        ],
        note: "15 años de experiencia en rehabilitación física, deportiva y osteomuscular.",
      },
    ],
    serviceLink: { label: "Fisioterapia", href: "/servicios/fisioterapia" },
  },
];

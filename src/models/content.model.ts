// Tipos del contenido del sitio. Los textos viven en src/ui/content y se tipan aquí.

export type IconName =
  | "whatsapp"
  | "menu"
  | "close"
  | "calendar"
  | "stethoscope"
  | "shield"
  | "location"
  | "handshake"
  | "arrow"
  | "people"
  | "heart"
  | "physio"
  | "bone"
  | "child"
  | "foot"
  | "ear"
  | "pulse"
  | "insole"
  | "check"
  | "back";

export interface ImageAsset {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Encuadre CSS (object-position) cuando la foto se recorta. */
  position?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface CallToAction {
  label: string;
  href: string;
  external?: boolean;
}

/** Ítem de lista con un inicio opcional en negrita ("Registros de salud: …"). */
export interface RichItem {
  lead?: string;
  text: string;
}

export interface Credential {
  title: string;
  institution: string;
}

// ---------- Servicios ----------

export interface ServiceCard {
  /** Título y texto de la tarjeta de Inicio. */
  homeTitle: string;
  homeText: string;
  /** Subtítulo de la tarjeta del índice de Servicios. */
  indexDetail: string;
  icon: IconName;
  image: ImageAsset;
}

export interface ServiceCover {
  tag: string;
  breadcrumb: string;
  /** Primer párrafo en negrita (Plantillas ORTOMEC). */
  lead?: string;
  paragraphs: string[];
  highlights?: string[];
  partnerLogos?: { image: ImageAsset; dark?: boolean }[];
  cta: CallToAction;
  image: ImageAsset;
  imageVariant?: "default" | "square" | "product";
}

export interface ServicePerson {
  name: string;
  credentials: string[];
}

export interface BookingOption {
  title: string;
  text: string;
}

export interface RelatedService {
  slug: string;
  title: string;
  detail: string;
}

export type ServiceColumn =
  | { kind: "checklist"; title: string; items: RichItem[] }
  | { kind: "conditions"; title: string; items: string[] }
  | { kind: "booking"; title: string; text?: string; options?: BookingOption[]; cta: CallToAction }
  | { kind: "related"; title: string; items: RelatedService[] }
  | { kind: "text"; title: string; paragraphs: string[]; samples?: ImageAsset[] };

export type ServiceBlock =
  | {
      kind: "team";
      title: string;
      tag: string;
      image: ImageAsset;
      people: ServicePerson[];
      bio?: string;
      cta: CallToAction;
    }
  | { kind: "conditions"; title: string; items: string[] }
  | { kind: "route"; title: string; steps: { title: string; text: string }[] }
  | { kind: "columns"; columns: [ServiceColumn, ServiceColumn] }
  | { kind: "related"; title: string; items: RelatedService[] }
  | { kind: "back" };

export interface Service {
  slug: string;
  title: string;
  seo: { title: string; description: string };
  card: ServiceCard;
  cover: ServiceCover;
  blocks: ServiceBlock[];
}

// ---------- Equipo ----------

export interface TeamMember {
  name: string;
  credentials: Credential[];
  note?: string;
}

export interface TeamCard {
  image: ImageAsset;
  members: TeamMember[];
  serviceLink: NavLink;
}

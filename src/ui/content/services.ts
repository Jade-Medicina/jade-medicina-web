import type { BookingOption, RelatedService, Service } from "@/models/content.model";
import { whatsappUrl } from "./site";

export const SERVICES_PAGE = {
  seo: {
    title: "Servicios | Fisioterapia, ortopedia, otorrino y medicina interna en Popayán",
    description:
      "Fisioterapia, otorrinolaringología, medicina interna, ortopedia y traumatología general, infantil y de pie y tobillo, y plantillas ortopédicas personalizadas en Popayán.",
  },
  header: {
    title: "Nuestros servicios",
    text: "Elige un servicio para conocer cómo te atendemos, qué llevar a tu consulta y cómo agendar.",
  },
  indexLabel: "Índice de servicios",
};

const BOOKING_OPTIONS: BookingOption[] = [
  {
    title: "Con tu convenio",
    text: "Si estás afiliado a uno de nuestros convenios, trae la orden médica y la autorización de tu entidad.",
  },
  {
    title: "Particular",
    text: "No necesitas orden médica. Puedes pagar antes de tu consulta en efectivo o por transferencia bancaria.",
  },
];

const coverageCta = (service: string) => ({
  label: "Consulta cobertura",
  href: whatsappUrl(`Hola, quiero consultar la cobertura de mi convenio para ${service}`),
  external: true,
});

const RELATED = {
  insoles: { slug: "plantillas-ortomec", title: "Plantillas ortopédicas personalizadas", detail: "ORTOMEC" },
  physio: { slug: "fisioterapia", title: "Fisioterapia", detail: "Física y vestibular" },
  footAnkle: { slug: "pie-tobillo", title: "Ortopedia y traumatología de pie y tobillo", detail: "Subespecialidad" },
  pediatric: { slug: "ortopedia-infantil", title: "Ortopedia infantil", detail: "Bebés, niños y adolescentes" },
} satisfies Record<string, RelatedService>;

const ROUTE_TITLE = "Ruta de atención";
const RELATED_TITLE = "Servicios relacionados";

const IMG = {
  physio: { src: "/images/servicio-fisioterapia.jpg", width: 1200, height: 675 },
  doctorGonzalez: { src: "/images/equipo-giovanny-gonzalez.jpg", width: 900, height: 1200 },
  internal: { src: "/images/servicio-medicina-interna.jpg", width: 1200, height: 675 },
  pediatric: { src: "/images/servicio-ortopedia-infantil.jpg", width: 1200, height: 675 },
  office: { src: "/images/sede-consultorio-2.jpg", width: 1086, height: 1448 },
  footAnkle: { src: "/images/servicio-pie-tobillo.jpg", width: 900, height: 900 },
  insoles: { src: "/images/servicio-plantillas.jpg", width: 1000, height: 1000 },
};

export const SERVICES: Service[] = [
  {
    slug: "fisioterapia",
    title: "Fisioterapia",
    seo: {
      title: "Fisioterapia en Popayán",
      description:
        "Rehabilitación física y vestibular en Popayán, integrada con nuestras especialidades médicas para facilitar la continuidad del tratamiento.",
    },
    card: {
      homeTitle: "Fisioterapia",
      homeText: "Rehabilitación física y vestibular.",
      indexDetail: "Física y vestibular",
      icon: "physio",
      image: { ...IMG.physio, alt: "" },
    },
    cover: {
      tag: "Rehabilitación física y vestibular",
      breadcrumb: "Fisioterapia",
      paragraphs: [
        "Rehabilitación física y vestibular, integrada con nuestras especialidades médicas para facilitar la continuidad del tratamiento.",
        "Tratamientos personalizados para el manejo del dolor, la recuperación del movimiento, el fortalecimiento muscular y la rehabilitación de lesiones. Nuestro objetivo es recuperar la funcionalidad, favorecer la independencia y mejorar la calidad de vida.",
      ],
      highlights: ["Ejercicio supervisado", "Plan a tu medida"],
      cta: { label: "Agendar fisioterapia", href: whatsappUrl("Hola, quiero agendar fisioterapia"), external: true },
      image: { ...IMG.physio, alt: "Fisioterapeuta guiando un ejercicio de mano con pelota de estimulación" },
    },
    blocks: [
      {
        kind: "team",
        title: "Te acompaña",
        tag: "Fisioterapia",
        image: {
          src: "/images/equipo-alejandra-daza.jpg",
          alt: "Janeth Alejandra Daza Sánchez, fisioterapeuta",
          width: 896,
          height: 1195,
        },
        people: [
          {
            name: "Janeth Alejandra Daza Sánchez",
            credentials: [
              "Especialista en Neurorrehabilitación, Escuela Colombiana de Rehabilitación",
              "Fisioterapeuta, Fundación Universitaria María Cano",
              "15 años de experiencia en rehabilitación física, deportiva y osteomuscular",
            ],
          },
        ],
        bio: "Diseñamos tu programa a partir de tu valoración y tus exámenes médicos, y te acompañamos en cada sesión ajustando el ejercicio a tu respuesta.",
        cta: {
          label: "Agendar valoración",
          href: whatsappUrl("Hola, quiero agendar fisioterapia con Alejandra Daza"),
          external: true,
        },
      },
      {
        kind: "conditions",
        title: "¿Qué tratamos?",
        items: [
          "Rehabilitación postquirúrgica y postraumática",
          "Manejo del dolor musculoesquelético",
          "Terapia manual y técnicas mínimamente invasivas",
          "Ejercicio terapéutico y rehabilitación deportiva",
          "Prevención de lesiones y reeducación funcional",
          "Rehabilitación vestibular",
        ],
      },
      {
        kind: "route",
        title: ROUTE_TITLE,
        steps: [
          {
            title: "Valoración inicial",
            text: "Evaluamos tu condición física, identificamos tus necesidades y determinamos tus objetivos de recuperación.",
          },
          { title: "Plan a tu medida", text: "Diseñamos un tratamiento personalizado según tu diagnóstico y necesidades." },
          {
            title: "Sesiones supervisadas",
            text: "Realizamos terapias y ejercicios con acompañamiento profesional para favorecer tu recuperación.",
          },
          { title: "Educación", text: "Te enseñamos ejercicios y hábitos para cuidar tu salud y prevenir futuras lesiones." },
          { title: "Reevaluación", text: "Medimos tus avances y ajustamos el tratamiento para alcanzar tus objetivos." },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "Recomendaciones para asistir a fisioterapia",
            items: [
              { text: "Llega 10 minutos antes de tu cita para realizar el registro correspondiente." },
              {
                text: "Usa ropa deportiva o prendas cómodas que permitan el movimiento y faciliten la valoración de la zona a tratar.",
              },
              { text: "Evita asistir en ayunas o inmediatamente después de consumir alimentos abundantes." },
              {
                text: "Para la valoración, trae tus exámenes, imágenes diagnósticas, órdenes médicas e historia clínica relacionada con tu condición.",
              },
            ],
          },
          { kind: "booking", title: "¿Cómo iniciar?", options: BOOKING_OPTIONS, cta: coverageCta("fisioterapia") },
        ],
      },
      { kind: "back" },
    ],
  },
  {
    slug: "otorrinolaringologia",
    title: "Otorrinolaringología",
    seo: {
      title: "Otorrinolaringología en Popayán",
      description:
        "Prevención, diagnóstico y tratamiento de enfermedades del oído, la nariz y la garganta en adultos y niños, en Popayán.",
    },
    card: {
      homeTitle: "Otorrinolaringología",
      homeText: "Oído, nariz y garganta, en adultos y niños.",
      indexDetail: "Oído, nariz y garganta",
      icon: "ear",
      image: { ...IMG.doctorGonzalez, alt: "", position: "center 4%" },
    },
    cover: {
      tag: "Consulta",
      breadcrumb: "Otorrinolaringología",
      paragraphs: [
        "Atención especializada en la prevención, el diagnóstico y el tratamiento de enfermedades del oído, la nariz y la garganta, así como de alteraciones relacionadas con la audición, el equilibrio y la respiración.",
      ],
      cta: {
        label: "Agendar consulta",
        href: whatsappUrl("Hola, quiero agendar con el Dr. González (otorrinolaringología)"),
        external: true,
      },
      image: { ...IMG.doctorGonzalez, alt: "Dr. Erwin Giovanny González, otorrinolaringólogo de Jade", position: "center 4%" },
    },
    blocks: [
      {
        kind: "team",
        title: "Te atenderá",
        tag: "Otorrinolaringología",
        image: {
          src: "/images/servicio-otorrino.jpg",
          alt: "Dr. Erwin Giovanny González en su consultorio, con un modelo anatómico del oído",
          width: 900,
          height: 1200,
        },
        people: [
          {
            name: "Dr. Erwin Giovanny González",
            credentials: [
              "Otorrinolaringólogo, Universidad de Ciencias Médicas de La Habana, Cuba",
              "Médico y cirujano, Universidad del Cauca",
            ],
          },
        ],
        bio: "Soy el médico especialista encargado de prevenir, diagnosticar y tratar las enfermedades del oído, la nariz y la garganta. También evalúo alteraciones de la audición, el equilibrio, la voz y la respiración, tanto en niños como en adultos.",
        cta: {
          label: "Agendar con el Dr. González",
          href: whatsappUrl("Hola, quiero agendar con el Dr. González (otorrinolaringología)"),
          external: true,
        },
      },
      {
        kind: "conditions",
        title: "¿Qué condiciones atiendo?",
        items: [
          "Otitis",
          "Pérdida auditiva",
          "Tapones de cerumen",
          "Vértigo y mareos",
          "Rinitis",
          "Sinusitis",
          "Desviación del tabique nasal",
          "Amigdalitis y faringitis",
          "Ronquidos",
          "Tinnitus",
          "Alteraciones de la deglución",
        ],
      },
      {
        kind: "route",
        title: ROUTE_TITLE,
        steps: [
          { title: "Agendamiento", text: "Programa tu cita con nuestro especialista en otorrinolaringología." },
          {
            title: "Valoración especializada",
            text: "Evaluamos tus síntomas y realizamos un examen de oído, nariz y garganta.",
          },
          {
            title: "Diagnóstico",
            text: "Identificamos la condición y solicitamos estudios complementarios cuando sea necesario.",
          },
          { title: "Plan de tratamiento", text: "Definimos el manejo médico o terapéutico según tus necesidades." },
          { title: "Seguimiento", text: "Evaluamos tu evolución y tu respuesta al tratamiento." },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "¿Cómo puedes aprovechar tu consulta?",
            items: [
              {
                text: "Trae tu historia clínica y antecedentes médicos, exámenes auditivos, estudios de imágenes o resultados de exámenes anteriores, si los tienes.",
              },
              { text: "Lleva la lista de medicamentos que utilizas." },
              { text: "Los pacientes menores de edad deben asistir con su padre, madre o acudiente." },
            ],
          },
          {
            kind: "booking",
            title: "¿Cómo puedo agendar?",
            options: BOOKING_OPTIONS,
            cta: coverageCta("otorrinolaringología"),
          },
        ],
      },
      { kind: "back" },
    ],
  },
  {
    slug: "medicina-interna",
    title: "Medicina interna",
    seo: {
      title: "Medicina interna en Popayán",
      description:
        "Atención integral del adulto en Popayán: prevención, diagnóstico y tratamiento de enfermedades con una valoración médica personalizada.",
    },
    card: {
      homeTitle: "Medicina interna",
      homeText: "Atención integral del adulto.",
      indexDetail: "Atención integral del adulto",
      icon: "pulse",
      image: { ...IMG.internal, alt: "" },
    },
    cover: {
      tag: "Consulta",
      breadcrumb: "Medicina interna",
      paragraphs: [
        "Atención integral del adulto enfocada en la prevención, el diagnóstico y el tratamiento de enfermedades, con una valoración médica personalizada para cuidar la salud y mejorar la calidad de vida.",
      ],
      cta: {
        label: "Agendar con medicina interna",
        href: whatsappUrl("Hola, quiero agendar con medicina interna"),
        external: true,
      },
      image: { ...IMG.internal, alt: "Consulta de medicina interna en Jade" },
    },
    blocks: [
      {
        kind: "team",
        title: "Te atenderán",
        tag: "Medicina interna",
        image: {
          src: "/images/equipo-medicina-interna.jpg",
          alt: "Dra. Karen Alejandra Urrego Noguera y Dr. Juan David Ospina, médicos internistas",
          width: 900,
          height: 1600,
        },
        people: [
          {
            name: "Dra. Karen Alejandra Urrego Noguera",
            credentials: ["Médica internista, Universidad del Cauca", "Médica y cirujana, Universidad del Cauca"],
          },
          {
            name: "Dr. Juan David Ospina",
            credentials: ["Médico internista, Universidad del Cauca", "Médico y cirujano, Universidad del Cauca"],
          },
        ],
        cta: {
          label: "Agendar con medicina interna",
          href: whatsappUrl("Hola, quiero agendar con medicina interna"),
          external: true,
        },
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "¿Cuándo consultar con nosotros?",
            items: [
              { text: "Cuando necesitas una valoración integral de tu salud." },
              { text: "Para controlar enfermedades crónicas." },
              {
                text: "Para identificar síntomas persistentes, prevenir complicaciones o recibir orientación para cuidar tu bienestar.",
              },
            ],
          },
          {
            kind: "conditions",
            title: "Algunas condiciones que atendemos",
            items: [
              "Hipertensión arterial",
              "Diabetes mellitus",
              "Enfermedades cardiovasculares",
              "Alteraciones del colesterol y los triglicéridos",
              "Enfermedades tiroideas",
              "Enfermedades respiratorias",
              "Enfermedades gastrointestinales",
              "Enfermedades renales",
              "Anemia",
              "Chequeo médico integral",
            ],
          },
        ],
      },
      {
        kind: "route",
        title: ROUTE_TITLE,
        steps: [
          { title: "Agendamiento de cita", text: "Programa tu consulta con nuestro especialista en medicina interna." },
          {
            title: "Valoración médica",
            text: "Realizamos una evaluación integral de tu estado de salud, antecedentes y síntomas.",
          },
          {
            title: "Diagnóstico y tratamiento",
            text: "Establecemos un diagnóstico y definimos el manejo médico según tus necesidades.",
          },
          {
            title: "Solicitud de estudios",
            text: "Si es necesario, solicitamos exámenes complementarios para orientar tu diagnóstico.",
          },
          {
            title: "Seguimiento médico",
            text: "Evaluamos tu evolución y ajustamos el tratamiento para cuidar tu salud y bienestar.",
          },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "Para aprovechar tu consulta",
            items: [
              {
                text: "Lleva tus exámenes recientes y, si la tienes, la historia clínica de tus antecedentes médicos, diagnósticos y tratamientos previos.",
              },
              { text: "Lleva la lista de los medicamentos que tomas y sus dosis." },
              {
                lead: "Registros de salud:",
                text: "si eres hipertenso o diabético, lleva tus controles de presión arterial o glucosa.",
              },
              {
                lead: "Síntomas y molestias:",
                text: "ten presente cuándo comenzaron, con qué frecuencia aparecen y qué los mejora o empeora.",
              },
            ],
          },
          {
            kind: "booking",
            title: "¿Cómo puedo agendar?",
            options: BOOKING_OPTIONS,
            cta: coverageCta("medicina interna"),
          },
        ],
      },
      { kind: "back" },
    ],
  },
  {
    slug: "ortopedia-infantil",
    title: "Ortopedia y traumatología infantil",
    seo: {
      title: "Ortopedia y traumatología infantil en Popayán",
      description:
        "Ortopedia pediátrica en Popayán: diagnóstico y tratamiento de alteraciones del desarrollo musculoesquelético, deformidades y lesiones en niños y adolescentes.",
    },
    card: {
      homeTitle: "Ortopedia y traumatología infantil",
      homeText: "Atención especializada para bebés, niños y adolescentes.",
      indexDetail: "Bebés, niños y adolescentes",
      icon: "child",
      image: { ...IMG.pediatric, alt: "" },
    },
    cover: {
      tag: "Consulta",
      breadcrumb: "Ortopedia y traumatología infantil",
      paragraphs: [
        "Atención especializada para niños y adolescentes, enfocada en el diagnóstico y el tratamiento de alteraciones del desarrollo musculoesquelético, deformidades, lesiones y problemas osteoarticulares.",
      ],
      cta: {
        label: "Agendar con el Dr. Vanegas",
        href: whatsappUrl("Hola, quiero agendar con el Dr. Vanegas (ortopedia infantil)"),
        external: true,
      },
      image: { ...IMG.pediatric, alt: "Dr. Cristian Fernando Vanegas en consulta con un bebé y su acompañante" },
    },
    blocks: [
      {
        kind: "team",
        title: "Te atenderá",
        tag: "Ortopedia infantil",
        image: {
          src: "/images/equipo-cristian-vanegas.jpg",
          alt: "Dr. Cristian Fernando Vanegas, ortopedista infantil",
          width: 477,
          height: 600,
        },
        people: [
          {
            name: "Dr. Cristian Fernando Vanegas",
            credentials: [
              "Ortopedista pediátrico, Universidad Javeriana",
              "Ortopedista y traumatólogo, Universidad del Valle",
              "Médico y cirujano, Universidad del Cauca",
            ],
          },
        ],
        bio: "Soy el médico especialista en evaluar, diagnosticar y tratar las alteraciones del sistema musculoesquelético en bebés, niños y adolescentes. Me encargo de acompañar el desarrollo adecuado de los huesos, los músculos y las articulaciones, así como de tratar lesiones y deformidades durante el crecimiento.",
        cta: {
          label: "Agendar con el Dr. Vanegas",
          href: whatsappUrl("Hola, quiero agendar con el Dr. Vanegas (ortopedia infantil)"),
          external: true,
        },
      },
      {
        kind: "conditions",
        title: "¿Qué condiciones atiendo?",
        items: [
          "Pie plano infantil",
          "Pie equino varo",
          "Displasia del desarrollo de cadera",
          "Alteraciones de la marcha",
          "Deformidades de miembros inferiores",
          "Desviaciones de la columna vertebral",
          "Lesiones deportivas",
          "Alteraciones del crecimiento",
          "Dolor musculoesquelético infantil",
        ],
      },
      {
        kind: "route",
        title: ROUTE_TITLE,
        steps: [
          { title: "Agendamiento", text: "Programa tu cita con nuestro especialista." },
          {
            title: "Valoración especializada",
            text: "Evaluamos los síntomas, los antecedentes, la movilidad y el desarrollo musculoesquelético del niño o adolescente.",
          },
          {
            title: "Diagnóstico",
            text: "Identificamos la condición y, si es necesario, solicitamos estudios complementarios.",
          },
          { title: "Plan de tratamiento", text: "Definimos el manejo adecuado según el diagnóstico y las necesidades." },
          { title: "Seguimiento", text: "Evaluamos la evolución y los resultados del tratamiento." },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "¿Qué debes llevar a la consulta?",
            items: [
              {
                text: "Historia clínica, radiografías, resonancias o ecografías previas y exámenes médicos relacionados con la condición, si cuentas con ellos.",
              },
              { text: "Calzado o plantillas que se utilizan habitualmente, si aplica." },
              { text: "El paciente debe asistir con su padre, madre o acudiente." },
            ],
          },
          {
            kind: "booking",
            title: "¿Cómo puedo agendar?",
            options: BOOKING_OPTIONS,
            cta: coverageCta("ortopedia infantil"),
          },
        ],
      },
      { kind: "related", title: RELATED_TITLE, items: [RELATED.insoles, RELATED.physio] },
    ],
  },
  {
    slug: "ortopedia-general",
    title: "Ortopedia y traumatología",
    seo: {
      title: "Ortopedia y traumatología en Popayán",
      description:
        "Diagnóstico, tratamiento y seguimiento de lesiones de huesos, articulaciones, músculos, tendones y ligamentos en Popayán.",
    },
    card: {
      homeTitle: "Ortopedia y traumatología",
      homeText: "Huesos, articulaciones, músculos, tendones y ligamentos.",
      indexDetail: "Huesos, articulaciones y ligamentos",
      icon: "bone",
      image: { ...IMG.office, alt: "", position: "center 70%" },
    },
    cover: {
      tag: "Consulta",
      breadcrumb: "Ortopedia y traumatología",
      paragraphs: [
        "Diagnóstico, tratamiento y seguimiento de enfermedades y lesiones del sistema musculoesquelético, incluidos los problemas de huesos, articulaciones, músculos, tendones y ligamentos.",
      ],
      cta: {
        label: "Agendar",
        href: whatsappUrl("Hola, quiero agendar con ortopedia y traumatología"),
        external: true,
      },
      image: { ...IMG.office, alt: "Consultorio de Jade Medicina y Rehabilitación" },
    },
    blocks: [
      {
        kind: "columns",
        columns: [
          { kind: "booking", title: "¿Cómo puedo agendar?", options: BOOKING_OPTIONS, cta: coverageCta("ortopedia") },
          {
            kind: "related",
            title: RELATED_TITLE,
            items: [RELATED.footAnkle, RELATED.pediatric, RELATED.physio],
          },
        ],
      },
    ],
  },
  {
    slug: "pie-tobillo",
    title: "Ortopedia y traumatología de pie y tobillo",
    seo: {
      title: "Ortopedia y traumatología de pie y tobillo en Popayán",
      description:
        "Subespecialidad en cirugía de pie y tobillo en Popayán: valoración de enfermedades, lesiones y alteraciones del pie y el tobillo.",
    },
    card: {
      homeTitle: "Ortopedia de pie y tobillo",
      homeText: "Subespecialidad en cirugía de pie y tobillo.",
      indexDetail: "Subespecialidad en cirugía de pie y tobillo",
      icon: "foot",
      image: { ...IMG.footAnkle, alt: "", position: "center 30%" },
    },
    cover: {
      tag: "Subespecialidad en cirugía de pie y tobillo",
      breadcrumb: "Ortopedia y traumatología de pie y tobillo",
      paragraphs: [
        "Valoración especializada de enfermedades, lesiones y alteraciones del pie y el tobillo. Brindamos alternativas de tratamiento para aliviar el dolor, recuperar la funcionalidad y mejorar la movilidad.",
      ],
      cta: {
        label: "Agendar con el Dr. Herrera",
        href: whatsappUrl("Hola, quiero agendar con el Dr. Herrera (pie y tobillo)"),
        external: true,
      },
      image: { ...IMG.footAnkle, alt: "Dr. Hernán Darío Herrera valorando el pie de un paciente", position: "center" },
      imageVariant: "square",
    },
    blocks: [
      {
        kind: "team",
        title: "Te atenderá",
        tag: "Pie y tobillo",
        image: {
          src: "/images/equipo-hernan-herrera.jpg",
          alt: "Dr. Hernán Darío Herrera Burbano, ortopedista y traumatólogo",
          width: 758,
          height: 1104,
        },
        people: [
          {
            name: "Dr. Hernán Darío Herrera Burbano",
            credentials: [
              "Subespecialista en cirugía de pie y tobillo, Universidad Militar",
              "Ortopedista y traumatólogo, Universidad Nacional",
              "Médico y cirujano, Universidad del Cauca",
            ],
          },
        ],
        bio: "Trato enfermedades, lesiones y alteraciones que afectan los pies y los tobillos. Mi objetivo es aliviar el dolor, recuperar la movilidad y mejorar la función al caminar y al realizar las actividades cotidianas.",
        cta: {
          label: "Agendar con el Dr. Herrera",
          href: whatsappUrl("Hola, quiero agendar con el Dr. Herrera (pie y tobillo)"),
          external: true,
        },
      },
      {
        kind: "conditions",
        title: "Atiendo condiciones como",
        items: [
          "Fascitis plantar y espolón calcáneo",
          "Juanetes (hallux valgus)",
          "Pie plano y pie cavo",
          "Tendinitis y lesiones del tendón de Aquiles",
          "Esguinces y fracturas de pie y tobillo",
          "Deformidades de los dedos",
          "Neuroma de Morton",
          "Artrosis de pie y tobillo",
        ],
      },
      {
        kind: "route",
        title: ROUTE_TITLE,
        steps: [
          { title: "Agendamiento", text: "Programa tu cita con nuestro especialista." },
          {
            title: "Valoración especializada",
            text: "Evaluamos tus síntomas, antecedentes, movilidad y la función del pie y el tobillo.",
          },
          {
            title: "Diagnóstico",
            text: "Identificamos la condición y, si es necesario, solicitamos estudios complementarios.",
          },
          { title: "Plan de tratamiento", text: "Definimos el manejo adecuado según tu diagnóstico y necesidades." },
          { title: "Seguimiento", text: "Evaluamos tu evolución y los resultados del tratamiento." },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "¿Qué debes llevar a tu consulta?",
            items: [
              {
                text: "Historia clínica, radiografías, resonancias o ecografías previas y exámenes médicos relacionados con tu condición, si cuentas con ellos.",
              },
              { text: "El calzado o las plantillas que utilizas habitualmente, si aplica." },
            ],
          },
          {
            kind: "booking",
            title: "¿Cómo puedo agendar?",
            options: BOOKING_OPTIONS,
            cta: coverageCta("pie y tobillo"),
          },
        ],
      },
      { kind: "related", title: RELATED_TITLE, items: [RELATED.insoles, RELATED.physio] },
    ],
  },
  {
    slug: "plantillas-ortomec",
    title: "Plantillas ortopédicas personalizadas – ORTOMEC",
    seo: {
      title: "Plantillas ortopédicas personalizadas en Popayán",
      description:
        "Plantillas ortopédicas personalizadas con escaneo 3D en Popayán, en alianza con ORTOMEC, diseñadas según las características de cada pie.",
    },
    card: {
      homeTitle: "Plantillas ortopédicas",
      homeText: "Personalizadas con escaneo 3D, en alianza con ORTOMEC.",
      indexDetail: "En alianza con ORTOMEC",
      icon: "insole",
      image: { ...IMG.insoles, alt: "" },
    },
    cover: {
      tag: "Servicio especializado",
      breadcrumb: "Plantillas ortopédicas personalizadas",
      lead: "Diseñadas para tus pies, adaptadas a tus necesidades.",
      paragraphs: [
        "En Jade Medicina y Rehabilitación ofrecemos el servicio de elaboración de plantillas ortopédicas personalizadas en alianza con ORTOMEC, con tecnología de escaneo 3D para obtener las medidas y características específicas de cada pie.",
      ],
      partnerLogos: [
        {
          image: { src: "/images/logo-color.png", alt: "Jade Medicina y Rehabilitación", width: 5730, height: 1788 },
        },
        { image: { src: "/images/logo-ortomec.png", alt: "ORTOMEC", width: 180, height: 79 }, dark: true },
      ],
      cta: {
        label: "Agenda tu cita",
        href: whatsappUrl("Hola, quiero agendar una cita para plantillas ORTOMEC"),
        external: true,
      },
      image: { ...IMG.insoles, alt: "Escáner 3D de ORTOMEC para tomar las medidas del pie" },
      imageVariant: "product",
    },
    blocks: [
      {
        kind: "columns",
        columns: [
          {
            kind: "text",
            title: "¿En qué consiste el servicio?",
            paragraphs: [
              "Las plantillas ORTOMEC se elaboran de acuerdo con las características anatómicas y funcionales de cada paciente. Mediante un escaneo tridimensional del pie se obtienen medidas que permiten desarrollar un diseño personalizado, teniendo en cuenta las necesidades de cada persona.",
              "Nuestro objetivo es brindar soluciones personalizadas que favorezcan la distribución de las cargas, mejoren el confort al caminar y contribuyan al manejo de diferentes alteraciones biomecánicas del pie.",
            ],
            samples: [
              {
                src: "/images/plantillas-ejemplo-1.jpg",
                alt: "Ejemplo de plantillas personalizadas en amarillo y negro",
                width: 640,
                height: 426,
              },
              {
                src: "/images/plantillas-ejemplo-2.jpg",
                alt: "Ejemplo de plantillas personalizadas en gris y negro con borde morado",
                width: 640,
                height: 426,
              },
            ],
          },
          {
            kind: "checklist",
            title: "¿Por qué elegir nuestras plantillas?",
            items: [
              { text: "Diseño personalizado" },
              { text: "Tecnología de escaneo 3D" },
              { text: "Adaptación a las características de cada pie" },
              { text: "Alternativas para uso cotidiano y deportivo" },
              { text: "Acompañamiento y seguimiento profesional" },
            ],
          },
        ],
      },
      {
        kind: "conditions",
        title: "¿Para quién están indicadas?",
        items: [
          "Pie plano o pie cavo",
          "Fascitis plantar",
          "Espolón calcáneo",
          "Dolor en el talón o el antepié",
          "Alteraciones en la distribución de cargas plantares",
          "Sobrecarga durante la marcha o la actividad deportiva",
          "Necesidad de soporte y comodidad en actividades diarias",
          "Deportistas de alto rendimiento que buscan comodidad",
          "Personas que trabajan de pie durante largas jornadas",
        ],
      },
      {
        kind: "route",
        title: ROUTE_TITLE,
        steps: [
          {
            title: "Valoración inicial",
            text: "Evaluamos las características del pie, las molestias y las necesidades del paciente.",
          },
          {
            title: "Escaneo 3D",
            text: "Obtenemos un registro tridimensional de la anatomía del pie para personalizar el diseño.",
          },
          {
            title: "Diseño y elaboración",
            text: "Fabricamos las plantillas según las características y los requerimientos individuales.",
          },
          {
            title: "Entrega y adaptación",
            text: "Verificamos el ajuste y brindamos recomendaciones para su uso progresivo.",
          },
          { title: "Seguimiento", text: "Evaluamos la adaptación, la comodidad y la respuesta al uso de las plantillas." },
        ],
      },
      {
        kind: "columns",
        columns: [
          {
            kind: "checklist",
            title: "¿Qué debe llevar el paciente?",
            items: [
              { text: "El calzado que utiliza habitualmente con su plantilla." },
              { text: "Plantillas anteriores, si las utiliza." },
              { text: "Exámenes o estudios relacionados con sus pies, si los tiene." },
              { text: "Fórmula u orden médica, si cuenta con ella." },
            ],
          },
          {
            kind: "booking",
            title: "Agenda tu cita",
            text: "Escríbenos por WhatsApp para programar tu valoración y escaneo.",
            cta: {
              label: "Agenda tu cita",
              href: whatsappUrl("Hola, quiero agendar una cita para plantillas ORTOMEC"),
              external: true,
            },
          },
        ],
      },
      { kind: "related", title: RELATED_TITLE, items: [RELATED.footAnkle, RELATED.pediatric, RELATED.physio] },
    ],
  },
];

/** Orden de las tarjetas en Inicio (distinto del índice de Servicios, como en el diseño). */
export const HOME_SERVICE_ORDER = [
  "fisioterapia",
  "ortopedia-general",
  "ortopedia-infantil",
  "pie-tobillo",
  "otorrinolaringologia",
  "medicina-interna",
  "plantillas-ortomec",
];

export const getServiceBySlug = (slug: string): Service | undefined => SERVICES.find((s) => s.slug === slug);

export const getServicesInOrder = (order: string[]): Service[] =>
  order.map((slug) => getServiceBySlug(slug)).filter((s): s is Service => Boolean(s));

export const serviceHref = (slug: string) => `/servicios/${slug}`;

import type { ResumeData } from "./types";

export const fr: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Opératrice en horlogerie",
    siteDescription:
      "CV de Fortuna Chung, opératrice en horlogerie formée au Pôle Industrie du Locle et expérimentée chez Rolex SA, basée à La Chaux-de-Fonds, Suisse.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Opératrice en horlogerie",
    tagline: "Précision · Dextérité · Contrôle qualité",
    birth: "05.09.1997",
    nationality: "Suisse",
    availability: "80 – 100 %",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Suisse",
  },
  profile:
    "Opératrice en horlogerie formée au Pôle Industrie du Locle et expérimentée au sein de Rolex SA. Je maîtrise les gestes techniques de précision — assemblage de mouvements, huilage, pose et assemblage de bracelets, conditionnement et contrôle qualité (visitage). Rigoureuse, minutieuse et habituée aux exigences de production de la haute horlogerie suisse, je cherche à m’investir durablement dans un atelier où précision et qualité sont au cœur des priorités.",
  experience: [
    {
      period: "2022 — 2023",
      role: "Opératrice en horlogerie",
      company: "Rolex SA",
      via: "via Interima / Flexsis SA",
      location: "Bienne",
      bullets: [
        "Assemblage, huilage et graissage de composants horlogers en manufacture.",
        "Conditionnement, mise en bague et contrôle qualité — visitage des pièces.",
        "Travail de précision et de minutie dans le respect strict des cadences de production.",
        "Coordination et communication quotidiennes avec l’équipe de production.",
      ],
      highlight:
        "Intégration rapide aux équipes et adaptation efficace aux cadences exigeantes de la manufacture.",
    },
    {
      period: "2021",
      role: "Formation d’opératrice en horlogerie",
      company: "Pôle Industrie",
      location: "Le Locle",
      bullets: [
        "Assemblage de mouvements — pose et assemblage de bracelets.",
        "Conditionnement — triage, vissage, enfilage.",
        "Pose d’applique et cours théoriques d’horlogerie.",
        "Développement de la dextérité manuelle et du geste précis.",
      ],
      highlight:
        "Acquisition de gestes techniques précis et validation de l’ensemble des modules par les formateurs.",
    },
    {
      period: "2020",
      role: "Fille au pair (temps partiel)",
      company: "Famille privée",
      location: "Les Hauts-Geneveys",
      bullets: [
        "Animation d’activités adaptées et bienveillance au quotidien.",
        "Gestion du temps, rigueur et sens des responsabilités.",
      ],
    },
    {
      period: "2016 — 2019",
      role: "Assistante socio-éducative (apprentissage CFC)",
      company: "Association L’Accueil",
      location: "Saint-Blaise",
      bullets: [
        "Accompagnement d’enfants et coordination en équipe pluridisciplinaire.",
        "Développement de la gestion du stress, de l’autonomie et de l’organisation.",
      ],
      highlight:
        "Formation au travail rigoureux, méthodique et structuré — fondations transposées au geste horloger.",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Attestation modulaire d’opératrice en horlogerie",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Certificat fédéral de capacité (CFC) d’assistante socio-éducative",
      school: "Spécialisation enfance",
    },
  ],
  skills: {
    tools: ["Microsoft Word", "Microsoft Excel", "Adobe", "Gestion PDF"],
    admin: [
      "Assemblage mouvements & bracelets",
      "Pose d’applique",
      "Triage · Vissage · Enfilage",
      "Huilage & graissage",
      "Conditionnement & mise en bague",
      "Visitage & contrôle qualité",
    ],
    human: [
      "Dextérité manuelle",
      "Précision & minutie",
      "Respect strict des procédures",
      "Discrétion professionnelle",
      "Adaptabilité",
      "Collaboration d’équipe",
    ],
  },
  languages: [
    { name: "Français", level: "Langue maternelle", score: 100 },
    { name: "Anglais", level: "B1 — Intermédiaire", score: 55 },
    { name: "Allemand", level: "A1 – A2 — Élémentaire", score: 30 },
  ],
  interests: ["Photographie", "Voyages", "Lecture"],
};

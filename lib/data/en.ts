import type { ResumeData } from "./types";

export const en: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Watchmaking Operator",
    siteDescription:
      "Resume of Fortuna Chung, watchmaking operator trained at Pôle Industrie du Locle and experienced at Rolex SA, based in La Chaux-de-Fonds, Switzerland.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Watchmaking operator",
    tagline: "Precision · Dexterity · Quality control",
    birth: "05.09.1997",
    nationality: "Swiss",
    availability: "80 – 100 %",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Switzerland",
  },
  profile:
    "Watchmaking operator trained at Pôle Industrie in Le Locle and experienced within Rolex SA. I am skilled in precision techniques — movement assembly, oiling, bracelet assembly and fitting, conditioning and quality control (visual inspection). Diligent, meticulous and accustomed to the demands of Swiss high-watchmaking production, I am looking to commit long-term to a workshop where precision and quality are at the heart of priorities.",
  experience: [
    {
      period: "2022 — 2023",
      role: "Watchmaking operator",
      company: "Rolex SA",
      via: "via Interima / Flexsis SA",
      location: "Biel",
      bullets: [
        "Assembly, oiling and greasing of watch components in the manufacture.",
        "Conditioning, ring fitting and quality control — visual inspection of parts.",
        "Precision and meticulous work in strict adherence to production cadences.",
        "Daily coordination and communication with the production team.",
      ],
      highlight:
        "Rapid integration into teams and effective adaptation to the demanding cadences of the manufacture.",
    },
    {
      period: "2021",
      role: "Watchmaking operator training",
      company: "Pôle Industrie",
      location: "Le Locle",
      bullets: [
        "Movement assembly — bracelet fitting and assembly.",
        "Conditioning — sorting, screwing, threading.",
        "Applique fitting and theoretical watchmaking lessons.",
        "Development of manual dexterity and precision gestures.",
      ],
      highlight:
        "Acquired precise technical gestures and validated all modules by the trainers.",
    },
    {
      period: "2020",
      role: "Au pair (part-time)",
      company: "Private family",
      location: "Les Hauts-Geneveys",
      bullets: [
        "Activity facilitation and daily attentiveness with children.",
        "Time management, rigor and sense of responsibility.",
      ],
    },
    {
      period: "2016 — 2019",
      role: "Socio-educational assistant (CFC apprenticeship)",
      company: "Association L’Accueil",
      location: "Saint-Blaise",
      bullets: [
        "Support of children and coordination within a multidisciplinary team.",
        "Development of stress management, autonomy and organization.",
      ],
      highlight:
        "Trained in rigorous, methodical and structured work — foundations carried into the watchmaking gesture.",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Modular certification as watchmaking operator",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Federal Certificate of Capacity (CFC) — Socio-educational assistant",
      school: "Specialization in early childhood",
    },
  ],
  skills: {
    tools: ["Microsoft Word", "Microsoft Excel", "Adobe", "PDF management"],
    admin: [
      "Movement & bracelet assembly",
      "Applique fitting",
      "Sorting · Screwing · Threading",
      "Oiling & greasing",
      "Conditioning & ring fitting",
      "Visual inspection & quality control",
    ],
    human: [
      "Manual dexterity",
      "Precision & meticulousness",
      "Strict procedure compliance",
      "Professional discretion",
      "Adaptability",
      "Team collaboration",
    ],
  },
  languages: [
    { name: "French", level: "Native speaker", score: 100 },
    { name: "English", level: "B1 — Intermediate", score: 55 },
    { name: "German", level: "A1 – A2 — Elementary", score: 30 },
  ],
  interests: ["Photography", "Travel", "Reading"],
};

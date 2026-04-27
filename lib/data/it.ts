import type { ResumeData } from "./types";

export const it: ResumeData = {
  meta: {
    siteTitle: "Fortuna Chung — Operatrice in orologeria",
    siteDescription:
      "CV di Fortuna Chung, operatrice in orologeria formata al Pôle Industrie di Le Locle ed esperta presso Rolex SA, con sede a La Chaux-de-Fonds, Svizzera.",
  },
  identity: {
    firstName: "Fortuna",
    lastName: "Chung",
    role: "Operatrice in orologeria",
    tagline: "Precisione · Destrezza · Controllo qualità",
    birth: "05.09.1997",
    nationality: "Svizzera",
    availability: "80 – 100 %",
  },
  contact: {
    email: "chungfortuna@gmail.com",
    phone: "+41 78 715 09 97",
    phoneFormatted: "078 715 09 97",
    address: "Rue de la Charrière 89",
    postal: "2300 La Chaux-de-Fonds",
    country: "Svizzera",
  },
  profile:
    "Operatrice in orologeria formata al Pôle Industrie di Le Locle ed esperta presso Rolex SA. Padroneggio i gesti tecnici di precisione — assemblaggio di movimenti, oliatura, posa e assemblaggio di bracciali, condizionamento e controllo qualità (visitatura). Rigorosa, minuziosa e abituata alle esigenze produttive dell’alta orologeria svizzera, cerco di impegnarmi a lungo termine in un atelier in cui precisione e qualità siano al centro delle priorità.",
  experience: [
    {
      period: "2022 — 2023",
      role: "Operatrice in orologeria",
      company: "Rolex SA",
      via: "tramite Interima / Flexsis SA",
      location: "Bienne",
      bullets: [
        "Assemblaggio, oliatura e ingrassaggio di componenti orologieri in manifattura.",
        "Condizionamento, montaggio anelli e controllo qualità — visitatura dei pezzi.",
        "Lavoro di precisione e minuzia nel rispetto rigoroso dei ritmi di produzione.",
        "Coordinamento e comunicazione quotidiani con il team di produzione.",
      ],
      highlight:
        "Rapida integrazione nei team e adattamento efficace ai ritmi esigenti della manifattura.",
    },
    {
      period: "2021",
      role: "Formazione di operatrice in orologeria",
      company: "Pôle Industrie",
      location: "Le Locle",
      bullets: [
        "Assemblaggio movimento — posa e assemblaggio di bracciali.",
        "Condizionamento — selezione, avvitatura, infilatura.",
        "Posa di applique e lezioni teoriche di orologeria.",
        "Sviluppo della destrezza manuale e del gesto preciso.",
      ],
      highlight:
        "Acquisizione di gesti tecnici precisi e validazione di tutti i moduli da parte dei formatori.",
    },
    {
      period: "2020",
      role: "Ragazza alla pari (tempo parziale)",
      company: "Famiglia privata",
      location: "Les Hauts-Geneveys",
      bullets: [
        "Animazione di attività adatte e attenzione quotidiana ai bambini.",
        "Gestione del tempo, rigore e senso di responsabilità.",
      ],
    },
    {
      period: "2016 — 2019",
      role: "Assistente socio-educativa (apprendistato AFC)",
      company: "Association L’Accueil",
      location: "Saint-Blaise",
      bullets: [
        "Accompagnamento di bambini e coordinamento in équipe pluridisciplinare.",
        "Sviluppo della gestione dello stress, dell’autonomia e dell’organizzazione.",
      ],
      highlight:
        "Formazione al lavoro rigoroso, metodico e strutturato — fondamenta trasposte nel gesto orologiero.",
    },
  ],
  education: [
    {
      year: "2021",
      title: "Attestato modulare di operatrice in orologeria",
      school: "Pôle Industrie, Le Locle",
    },
    {
      year: "2019",
      title: "Certificato federale di capacità (AFC) — Assistente socio-educativa",
      school: "Specializzazione infanzia",
    },
  ],
  skills: {
    tools: ["Microsoft Word", "Microsoft Excel", "Adobe", "Gestione PDF"],
    admin: [
      "Assemblaggio movimenti & bracciali",
      "Posa di applique",
      "Selezione · Avvitatura · Infilatura",
      "Oliatura & ingrassaggio",
      "Condizionamento & montaggio anelli",
      "Visitatura & controllo qualità",
    ],
    human: [
      "Destrezza manuale",
      "Precisione & minuzia",
      "Rispetto rigoroso delle procedure",
      "Discrezione professionale",
      "Adattabilità",
      "Collaborazione di squadra",
    ],
  },
  languages: [
    { name: "Francese", level: "Madrelingua", score: 100 },
    { name: "Inglese", level: "B1 — Intermedio", score: 55 },
    { name: "Tedesco", level: "A1 – A2 — Elementare", score: 30 },
  ],
  interests: ["Fotografia", "Viaggi", "Lettura"],
};

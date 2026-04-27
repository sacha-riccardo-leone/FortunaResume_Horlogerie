import type { Locale } from "./locales";

export type UIDictionary = {
  nav: {
    profil: string;
    experience: string;
    competences: string;
    formation: string;
    contact: string;
    cta: string;
    navigation: string;
    contactDirect: string;
    openMenu: string;
    closeMenu: string;
    selectLanguage: string;
  };
  hero: {
    eyebrowIndex: string; // e.g. "01 — Atelier"
    locationLabel: string;
    phoneLabel: string;
    emailLabel: string;
    locatedIn: (city: string, availability: string) => string;
  };
  about: {
    eyebrow: string;
    bornOn: string;
    nationality: string;
    availability: string;
  };
  experience: {
    eyebrow: string;
    achievement: string;
  };
  skills: {
    eyebrow: string;
    tools: string;
    admin: string;
    human: string;
    languages: string;
  };
  education: {
    eyebrow: string;
  };
  contact: {
    eyebrow: string;
    headlineLead: string;
    headlineEmphasis: string;
    pitch: (availability: string, postal: string) => string;
    emailLabel: string;
    phoneLabel: string;
    addressLabel: string;
    cta: string;
  };
  footer: {
    rights: string;
    cv: string;
    location: string;
  };
  print: {
    button: string;
    ariaLabel: string;
    headerTagline: string;
    contactEmail: string;
    contactPhone: string;
    contactAddress: string;
    metaLine: (birth: string, nationality: string, availability: string) => string;
    profileTitle: string;
    experienceTitle: string;
    educationTitle: string;
    skillsTitle: string;
    skillsTools: string;
    skillsAdmin: string;
    skillsHuman: string;
    languagesTitle: string;
    interestsTitle: string;
  };
};

const fr: UIDictionary = {
  nav: {
    profil: "Atelier",
    experience: "Parcours",
    competences: "Métier",
    formation: "Formation",
    contact: "Contact",
    cta: "Prendre contact",
    navigation: "Navigation",
    contactDirect: "Contact direct",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
    selectLanguage: "Choisir la langue",
  },
  hero: {
    eyebrowIndex: "01 — Atelier",
    locationLabel: "Atelier",
    phoneLabel: "Téléphone",
    emailLabel: "E-mail",
    locatedIn: (city, availability) =>
      `Basée à ${city}, disponible ${availability}.`,
  },
  about: {
    eyebrow: "Profil",
    bornOn: "Née le",
    nationality: "Nationalité",
    availability: "Disponibilité",
  },
  experience: {
    eyebrow: "Parcours horloger",
    achievement: "Réalisation",
  },
  skills: {
    eyebrow: "Métier — gestes, qualités, outils",
    tools: "Outils numériques",
    admin: "Gestes techniques",
    human: "Qualités professionnelles",
    languages: "Langues",
  },
  education: {
    eyebrow: "Formation",
  },
  contact: {
    eyebrow: "Contact",
    headlineLead: "Un atelier à rejoindre, ",
    headlineEmphasis: "une main supplémentaire.",
    pitch: (availability, postal) =>
      `Disponible ${availability} pour un atelier exigeant, attachée à la discrétion et à l’excellence. Échange initial sous 48 heures — ${postal}, Suisse.`,
    emailLabel: "E-mail",
    phoneLabel: "Téléphone",
    addressLabel: "Atelier",
    cta: "Envoyer un message",
  },
  footer: {
    rights: "Tous droits réservés.",
    cv: "Curriculum Horloger",
    location: "Swiss Made · La Chaux-de-Fonds",
  },
  print: {
    button: "Télécharger PDF",
    ariaLabel: "Télécharger le CV au format PDF",
    headerTagline: "",
    contactEmail: "E-mail",
    contactPhone: "Téléphone",
    contactAddress: "Adresse",
    metaLine: (birth, nationality, availability) =>
      `Née le ${birth} · ${nationality} · Disponibilité ${availability}`,
    profileTitle: "Profil",
    experienceTitle: "Parcours horloger",
    educationTitle: "Formation",
    skillsTitle: "Métier — gestes, qualités, outils",
    skillsTools: "Outils",
    skillsAdmin: "Gestes",
    skillsHuman: "Qualités",
    languagesTitle: "Langues",
    interestsTitle: "Intérêts",
  },
};

const en: UIDictionary = {
  nav: {
    profil: "Workshop",
    experience: "Career",
    competences: "Craft",
    formation: "Education",
    contact: "Contact",
    cta: "Get in touch",
    navigation: "Navigation",
    contactDirect: "Direct contact",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    selectLanguage: "Select language",
  },
  hero: {
    eyebrowIndex: "01 — Workshop",
    locationLabel: "Workshop",
    phoneLabel: "Phone",
    emailLabel: "Email",
    locatedIn: (city, availability) =>
      `Based in ${city}, available ${availability}.`,
  },
  about: {
    eyebrow: "Profile",
    bornOn: "Born on",
    nationality: "Nationality",
    availability: "Availability",
  },
  experience: {
    eyebrow: "Watchmaking career",
    achievement: "Achievement",
  },
  skills: {
    eyebrow: "Craft — gestures, qualities, tools",
    tools: "Digital tools",
    admin: "Technical gestures",
    human: "Professional qualities",
    languages: "Languages",
  },
  education: {
    eyebrow: "Education",
  },
  contact: {
    eyebrow: "Contact",
    headlineLead: "A workshop to join, ",
    headlineEmphasis: "an extra pair of hands.",
    pitch: (availability, postal) =>
      `Available ${availability} for a demanding workshop, committed to discretion and excellence. Initial reply within 48 hours — ${postal}, Switzerland.`,
    emailLabel: "Email",
    phoneLabel: "Phone",
    addressLabel: "Workshop",
    cta: "Send a message",
  },
  footer: {
    rights: "All rights reserved.",
    cv: "Watchmaker’s Curriculum",
    location: "Swiss Made · La Chaux-de-Fonds",
  },
  print: {
    button: "Download PDF",
    ariaLabel: "Download CV as PDF",
    headerTagline: "",
    contactEmail: "Email",
    contactPhone: "Phone",
    contactAddress: "Address",
    metaLine: (birth, nationality, availability) =>
      `Born on ${birth} · ${nationality} · Availability ${availability}`,
    profileTitle: "Profile",
    experienceTitle: "Watchmaking career",
    educationTitle: "Education",
    skillsTitle: "Craft — gestures, qualities, tools",
    skillsTools: "Tools",
    skillsAdmin: "Gestures",
    skillsHuman: "Qualities",
    languagesTitle: "Languages",
    interestsTitle: "Interests",
  },
};

const de: UIDictionary = {
  nav: {
    profil: "Manufaktur",
    experience: "Werdegang",
    competences: "Handwerk",
    formation: "Ausbildung",
    contact: "Kontakt",
    cta: "Kontakt aufnehmen",
    navigation: "Navigation",
    contactDirect: "Direktkontakt",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
    selectLanguage: "Sprache wählen",
  },
  hero: {
    eyebrowIndex: "01 — Manufaktur",
    locationLabel: "Manufaktur",
    phoneLabel: "Telefon",
    emailLabel: "E-Mail",
    locatedIn: (city, availability) =>
      `Mit Sitz in ${city}, verfügbar ${availability}.`,
  },
  about: {
    eyebrow: "Profil",
    bornOn: "Geboren am",
    nationality: "Nationalität",
    availability: "Verfügbarkeit",
  },
  experience: {
    eyebrow: "Uhrmacherischer Werdegang",
    achievement: "Erfolg",
  },
  skills: {
    eyebrow: "Handwerk — Gesten, Qualitäten, Werkzeuge",
    tools: "Digitale Werkzeuge",
    admin: "Technische Gesten",
    human: "Berufliche Qualitäten",
    languages: "Sprachen",
  },
  education: {
    eyebrow: "Ausbildung",
  },
  contact: {
    eyebrow: "Kontakt",
    headlineLead: "Eine Manufaktur, ",
    headlineEmphasis: "eine zusätzliche Hand.",
    pitch: (availability, postal) =>
      `Verfügbar ${availability} für eine anspruchsvolle Manufaktur, verbunden mit Diskretion und Exzellenz. Erstantwort innerhalb von 48 Stunden — ${postal}, Schweiz.`,
    emailLabel: "E-Mail",
    phoneLabel: "Telefon",
    addressLabel: "Manufaktur",
    cta: "Nachricht senden",
  },
  footer: {
    rights: "Alle Rechte vorbehalten.",
    cv: "Uhrmacher-Lebenslauf",
    location: "Swiss Made · La Chaux-de-Fonds",
  },
  print: {
    button: "PDF herunterladen",
    ariaLabel: "Lebenslauf als PDF herunterladen",
    headerTagline: "",
    contactEmail: "E-Mail",
    contactPhone: "Telefon",
    contactAddress: "Adresse",
    metaLine: (birth, nationality, availability) =>
      `Geboren am ${birth} · ${nationality} · Verfügbarkeit ${availability}`,
    profileTitle: "Profil",
    experienceTitle: "Uhrmacherischer Werdegang",
    educationTitle: "Ausbildung",
    skillsTitle: "Handwerk — Gesten, Qualitäten, Werkzeuge",
    skillsTools: "Werkzeuge",
    skillsAdmin: "Gesten",
    skillsHuman: "Qualitäten",
    languagesTitle: "Sprachen",
    interestsTitle: "Interessen",
  },
};

const it: UIDictionary = {
  nav: {
    profil: "Atelier",
    experience: "Percorso",
    competences: "Mestiere",
    formation: "Formazione",
    contact: "Contatto",
    cta: "Mettiti in contatto",
    navigation: "Navigazione",
    contactDirect: "Contatto diretto",
    openMenu: "Apri il menu",
    closeMenu: "Chiudi il menu",
    selectLanguage: "Seleziona la lingua",
  },
  hero: {
    eyebrowIndex: "01 — Atelier",
    locationLabel: "Atelier",
    phoneLabel: "Telefono",
    emailLabel: "E-mail",
    locatedIn: (city, availability) =>
      `Con sede a ${city}, disponibile ${availability}.`,
  },
  about: {
    eyebrow: "Profilo",
    bornOn: "Nata il",
    nationality: "Nazionalità",
    availability: "Disponibilità",
  },
  experience: {
    eyebrow: "Percorso orologiero",
    achievement: "Realizzazione",
  },
  skills: {
    eyebrow: "Mestiere — gesti, qualità, strumenti",
    tools: "Strumenti digitali",
    admin: "Gesti tecnici",
    human: "Qualità professionali",
    languages: "Lingue",
  },
  education: {
    eyebrow: "Formazione",
  },
  contact: {
    eyebrow: "Contatto",
    headlineLead: "Un atelier da raggiungere, ",
    headlineEmphasis: "una mano in più.",
    pitch: (availability, postal) =>
      `Disponibile ${availability} per un atelier esigente, attenta alla discrezione e all’eccellenza. Risposta iniziale entro 48 ore — ${postal}, Svizzera.`,
    emailLabel: "E-mail",
    phoneLabel: "Telefono",
    addressLabel: "Atelier",
    cta: "Invia un messaggio",
  },
  footer: {
    rights: "Tutti i diritti riservati.",
    cv: "Curriculum Orologiero",
    location: "Swiss Made · La Chaux-de-Fonds",
  },
  print: {
    button: "Scarica PDF",
    ariaLabel: "Scarica il CV in formato PDF",
    headerTagline: "",
    contactEmail: "E-mail",
    contactPhone: "Telefono",
    contactAddress: "Indirizzo",
    metaLine: (birth, nationality, availability) =>
      `Nata il ${birth} · ${nationality} · Disponibilità ${availability}`,
    profileTitle: "Profilo",
    experienceTitle: "Percorso orologiero",
    educationTitle: "Formazione",
    skillsTitle: "Mestiere — gesti, qualità, strumenti",
    skillsTools: "Strumenti",
    skillsAdmin: "Gesti",
    skillsHuman: "Qualità",
    languagesTitle: "Lingue",
    interestsTitle: "Interessi",
  },
};

export const DICTIONARIES: Record<Locale, UIDictionary> = { fr, en, de, it };

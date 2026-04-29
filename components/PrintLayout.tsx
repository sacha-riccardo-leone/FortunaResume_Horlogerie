"use client";

import { resumeData } from "@/lib/data";

/**
 * Print-only A4 layout. Hidden on screen, fits a single page when printed.
 * Designed at 8.4pt body / 11mm vertical margins to absorb 4 experiences
 * + 2 educations + skills + languages without overflowing.
 */
export default function PrintLayout() {
  const { identity, contact, profile, experience, education, skills, languages, interests } =
    resumeData;

  return (
    <article className="hidden print:block text-onyx bg-white font-sans text-[8.4pt] leading-[1.4]">
      {/* Header */}
      <header className="pb-[2.5mm] border-b border-platinum-line flex items-center gap-[5mm]">
        <div className="flex-1 min-w-0">
          <h1 className="font-light tracking-[-0.02em] text-[21pt] leading-[1] text-onyx">
            {identity.firstName} {identity.lastName}
          </h1>
          <p className="mt-[1.2mm] text-[9pt] text-graphite">
            {identity.role} · {identity.tagline}.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpeg"
          alt={`${identity.firstName} ${identity.lastName}`}
          className="w-[22mm] h-[28mm] object-cover rounded-[1.2mm] flex-shrink-0"
        />
      </header>

      {/* Contact + meta strip */}
      <section className="mt-[2.5mm] grid grid-cols-4 gap-[5mm]">
        <PrintMeta label="E-mail" value={contact.email} />
        <PrintMeta label="Téléphone" value={contact.phoneFormatted} />
        <PrintMeta label="Adresse" value={`${contact.address}, ${contact.postal}`} />
        <PrintMeta
          label="Née le"
          value={`${identity.birth} · ${identity.nationality} · ${identity.availability}`}
        />
      </section>

      {/* Profile */}
      <section className="mt-[3mm] break-inside-avoid">
        <SectionTitle>Profil</SectionTitle>
        <p className="mt-[1.5mm] text-[8.3pt] leading-[1.4] text-graphite text-justify">
          {profile}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-[3mm]">
        <SectionTitle>Expérience professionnelle</SectionTitle>
        <div className="mt-[1.5mm] space-y-[2.2mm]">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-[24mm_1fr] gap-[4mm] break-inside-avoid"
            >
              <div className="text-[7.6pt] font-mono text-graphite leading-[1.35]">
                {exp.period}
                <div className="text-graphite-faint">{exp.location}</div>
              </div>
              <div>
                <h3 className="text-[9.2pt] font-medium text-onyx leading-[1.2]">
                  {exp.role}
                </h3>
                <p className="mt-[0.4mm] text-[7.9pt] text-graphite">
                  {exp.company}
                  {"via" in exp && exp.via ? (
                    <span className="text-graphite-faint"> · {exp.via}</span>
                  ) : null}
                </p>
                <ul className="mt-[1mm] space-y-[0.4mm]">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex text-[8.1pt] leading-[1.35] text-graphite">
                      <span
                        className="mr-[1.6mm] mt-[0.7em] h-px w-[1.8mm] flex-none bg-graphite-faint"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {"achievement" in exp && exp.achievement ? (
                  <p className="mt-[0.9mm] pl-[2mm] border-l-2 border-onyx text-[7.9pt] text-graphite leading-[1.3]">
                    Réalisation · {exp.achievement}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-[3mm] break-inside-avoid">
        <SectionTitle>Formation</SectionTitle>
        <ul className="mt-[1.5mm] space-y-[1mm]">
          {education.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-[14mm_1fr_auto] gap-[4mm] items-baseline break-inside-avoid"
            >
              <span className="text-[8pt] font-mono text-graphite">{e.year}</span>
              <span className="text-[8.4pt] text-onyx leading-[1.3]">{e.title}</span>
              <span className="text-[7.7pt] text-graphite text-right leading-[1.3] whitespace-nowrap">
                {e.school}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-[3mm] break-inside-avoid">
        <SectionTitle>Compétences</SectionTitle>
        <dl className="mt-[1.5mm] space-y-[1mm]">
          <SkillRow label="Gestes techniques" items={skills.technical} />
          <SkillRow label="Qualités" items={skills.qualities} />
          <SkillRow label="Outils" items={skills.tools} />
        </dl>
      </section>

      {/* Languages + Interests */}
      <section className="mt-[3mm] grid grid-cols-2 gap-[10mm] break-inside-avoid">
        <div>
          <SectionTitle>Langues</SectionTitle>
          <ul className="mt-[1.5mm] space-y-[0.7mm]">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between text-[8.1pt] leading-[1.3]"
              >
                <span className="text-onyx">{l.name}</span>
                <span className="text-graphite">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>Centres d’intérêt</SectionTitle>
          <p className="mt-[1.5mm] text-[8.1pt] text-graphite leading-[1.4]">
            {interests.join(" · ")}
          </p>
        </div>
      </section>

      {/* Canonical URL footer — always shows the deployed link in the printed PDF */}
      <footer className="mt-[3mm] pt-[1mm] border-t border-platinum-line flex items-baseline justify-between text-[6.6pt] text-graphite-faint">
        <span>Curriculum Vitæ · Fortuna Chung Ming Kan</span>
        <a
          href="https://fortuna-resume-horlogerie.vercel.app/"
          className="text-graphite no-underline"
        >
          https://fortuna-resume-horlogerie.vercel.app/
        </a>
      </footer>
    </article>
  );
}

function PrintMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="uppercase tracking-[0.18em] text-[6.3pt] text-graphite-faint">
        {label}
      </div>
      <div className="mt-[0.5mm] text-[8pt] text-onyx leading-[1.3] break-words">
        {value}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="uppercase tracking-[0.2em] text-[6.6pt] font-medium text-graphite pb-[0.8mm] border-b border-platinum-line">
      {children}
    </h2>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-[26mm_1fr] gap-[4mm]">
      <dt className="uppercase tracking-[0.14em] text-[6.6pt] text-graphite-faint pt-[0.3mm]">
        {label}
      </dt>
      <dd className="text-[8.1pt] text-graphite leading-[1.35]">{items.join(" · ")}</dd>
    </div>
  );
}

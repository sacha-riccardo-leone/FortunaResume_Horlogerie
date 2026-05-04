"use client";

import { resumeData } from "@/lib/data";

/**
 * Print-only A4 layout. Hidden on screen, sized to fit a single A4
 * page across desktop Chrome and iOS Safari. Sizing is deliberately
 * conservative — type at ~7.6pt, vertical rhythm in mm — so iOS
 * Safari (which renders print a few % bigger than Chrome) still has
 * headroom inside the 186 × 275 mm safe area.
 */
export default function PrintLayout() {
  const { identity, contact, profile, experience, education, skills, languages, interests } =
    resumeData;

  return (
    <article className="print-resume hidden print:block text-onyx bg-white font-sans text-[7.6pt] leading-[1.32]">
      {/* Header */}
      <header className="pb-[2mm] border-b border-platinum-line flex items-center gap-[4mm] break-inside-avoid">
        <div className="flex-1 min-w-0">
          <h1 className="font-light tracking-[-0.02em] text-[18pt] leading-[1] text-onyx">
            {identity.firstName} {identity.lastName}
          </h1>
          <p className="mt-[1mm] text-[8.2pt] text-graphite">
            {identity.role} · {identity.tagline}.
          </p>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/profile.jpeg"
          alt={`${identity.firstName} ${identity.lastName}`}
          className="w-[19mm] h-[24mm] object-cover rounded-[1mm] flex-shrink-0"
        />
      </header>

      {/* Contact + meta strip */}
      <section className="mt-[2mm] grid grid-cols-4 gap-[4mm] break-inside-avoid">
        <PrintMeta label="E-mail" value={contact.email} />
        <PrintMeta label="Téléphone" value={contact.phoneFormatted} />
        <PrintMeta label="Adresse" value={`${contact.address}, ${contact.postal}`} />
        <PrintMeta
          label="Née le"
          value={`${identity.birth} · ${identity.nationality} · ${identity.availability}`}
        />
      </section>

      {/* Profile */}
      <section className="mt-[2.4mm] break-inside-avoid">
        <SectionTitle>Profil</SectionTitle>
        <p className="mt-[1.2mm] text-[7.6pt] leading-[1.35] text-graphite text-justify">
          {profile}
        </p>
      </section>

      {/* Experience */}
      <section className="mt-[2.4mm]">
        <SectionTitle>Expérience professionnelle</SectionTitle>
        <div className="mt-[1.2mm] space-y-[1.6mm]">
          {experience.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-[22mm_1fr] gap-[3.5mm] break-inside-avoid"
            >
              <div className="text-[7pt] font-mono text-graphite leading-[1.3]">
                {exp.period}
                <div className="text-graphite-faint">{exp.location}</div>
              </div>
              <div>
                <h3 className="text-[8.4pt] font-medium text-onyx leading-[1.2]">
                  {exp.role}
                </h3>
                <p className="mt-[0.3mm] text-[7.4pt] text-graphite">
                  {exp.company}
                  {"via" in exp && exp.via ? (
                    <span className="text-graphite-faint"> · {exp.via}</span>
                  ) : null}
                </p>
                <ul className="mt-[0.8mm] space-y-[0.3mm]">
                  {exp.bullets.map((b, bi) => (
                    <li key={bi} className="flex text-[7.4pt] leading-[1.3] text-graphite">
                      <span
                        className="mr-[1.4mm] mt-[0.7em] h-px w-[1.6mm] flex-none bg-graphite-faint"
                        aria-hidden
                      />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                {"achievement" in exp && exp.achievement ? (
                  <p className="mt-[0.7mm] pl-[1.6mm] border-l-2 border-onyx text-[7.3pt] text-graphite leading-[1.28]">
                    Réalisation · {exp.achievement}
                  </p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mt-[2.4mm] break-inside-avoid">
        <SectionTitle>Formation</SectionTitle>
        <ul className="mt-[1.2mm] space-y-[0.8mm]">
          {education.map((e, i) => (
            <li
              key={i}
              className="grid grid-cols-[14mm_1fr_auto] gap-[4mm] items-baseline break-inside-avoid"
            >
              <span className="text-[7.4pt] font-mono text-graphite">{e.year}</span>
              <span className="text-[7.8pt] text-onyx leading-[1.28]">{e.title}</span>
              <span className="text-[7.1pt] text-graphite text-right leading-[1.28] whitespace-nowrap">
                {e.school}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Skills */}
      <section className="mt-[2.4mm] break-inside-avoid">
        <SectionTitle>Compétences</SectionTitle>
        <dl className="mt-[1.2mm] space-y-[0.7mm]">
          <SkillRow label="Gestes techniques" items={skills.technical} />
          <SkillRow label="Qualités" items={skills.qualities} />
          <SkillRow label="Outils" items={skills.tools} />
        </dl>
      </section>

      {/* Languages + Interests */}
      <section className="mt-[2.4mm] grid grid-cols-2 gap-[8mm] break-inside-avoid">
        <div>
          <SectionTitle>Langues</SectionTitle>
          <ul className="mt-[1.2mm] space-y-[0.5mm]">
            {languages.map((l) => (
              <li
                key={l.name}
                className="flex items-baseline justify-between text-[7.4pt] leading-[1.28]"
              >
                <span className="text-onyx">{l.name}</span>
                <span className="text-graphite">{l.level}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <SectionTitle>Centres d’intérêt</SectionTitle>
          <p className="mt-[1.2mm] text-[7.4pt] text-graphite leading-[1.35]">
            {interests.join(" · ")}
          </p>
        </div>
      </section>
    </article>
  );
}

function PrintMeta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="uppercase tracking-[0.16em] text-[5.8pt] text-graphite-faint">
        {label}
      </div>
      <div className="mt-[0.4mm] text-[7.4pt] text-onyx leading-[1.28] break-words">
        {value}
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="uppercase tracking-[0.2em] text-[6pt] font-medium text-graphite pb-[0.6mm] border-b border-platinum-line">
      {children}
    </h2>
  );
}

function SkillRow({ label, items }: { label: string; items: string[] }) {
  return (
    <div className="grid grid-cols-[24mm_1fr] gap-[3.5mm]">
      <dt className="uppercase tracking-[0.14em] text-[6pt] text-graphite-faint pt-[0.2mm]">
        {label}
      </dt>
      <dd className="text-[7.4pt] text-graphite leading-[1.3]">{items.join(" · ")}</dd>
    </div>
  );
}

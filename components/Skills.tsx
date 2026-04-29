"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/lib/data";

export default function Skills() {
  const { skills, languages } = resumeData;

  const groups = [
    { title: "Gestes techniques", items: skills.technical, accent: "bg-onyx text-bone" },
    { title: "Qualités professionnelles", items: skills.qualities, accent: "bg-bone text-onyx border border-platinum-line" },
    { title: "Outils", items: skills.tools, accent: "bg-platinum/60 text-onyx" },
  ];

  return (
    <section id="competences" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <SectionLabel index="03" eyebrow="Compétences / Savoir faire, savoir être" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 space-y-6">
            {groups.map((g, gi) => (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.8, delay: gi * 0.07 }}
                className="case-card rounded-case p-8 md:p-10"
              >
                <div className="flex items-baseline justify-between mb-6">
                  <h3 className="font-display text-2xl text-onyx">{g.title}</h3>
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite-faint">
                    {g.items.length} éléments
                  </span>
                </div>
                <div className="flex flex-wrap gap-2.5">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className={`inline-flex items-center rounded-full px-4 py-2 text-[13px] font-medium tracking-wide transition-all duration-300 hover:-translate-y-0.5 ${g.accent}`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4 case-card-dark rounded-case p-8 md:p-10 text-bone"
          >
            <div className="flex items-baseline justify-between mb-8">
              <h3 className="font-display text-2xl">Langues</h3>
              <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-bone/50">
                03
              </span>
            </div>
            <ul className="space-y-7">
              {languages.map((l) => (
                <li key={l.name}>
                  <div className="flex items-baseline justify-between mb-3">
                    <span className="font-display text-lg">{l.name}</span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-bone/50">
                      {l.level}
                    </span>
                  </div>
                  <div className="relative h-[2px] w-full bg-bone/15 overflow-hidden">
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: l.score / 100 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                      className="absolute inset-0 bg-bone origin-left"
                    />
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 pt-6 border-t border-bone/10">
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50 mb-2">
                Centres d’intérêt
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                {resumeData.interests.map((i) => (
                  <span
                    key={i}
                    className="text-[11px] uppercase tracking-[0.2em] px-3 py-1.5 rounded-full border border-bone/25"
                  >
                    {i}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

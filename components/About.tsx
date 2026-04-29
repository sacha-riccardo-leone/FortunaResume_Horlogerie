"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/lib/data";

export default function About() {
  const { narratives, modules } = resumeData;

  return (
    <section id="profil" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <SectionLabel index="01" eyebrow="Profil" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-8 lg:self-start space-y-6">
            {narratives.map((n, i) => (
              <motion.article
                key={n.place}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.9,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="case-card rounded-caseLg p-8 md:p-10"
              >
                <header className="flex items-baseline justify-between gap-4 mb-5 pb-4 border-b border-platinum-line">
                  <div className="min-w-0">
                    <h3 className="font-display text-xl md:text-2xl text-onyx leading-tight">
                      {n.place}
                    </h3>
                    <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.3em] text-graphite-faint">
                      {n.location}
                    </div>
                  </div>
                  <span className="font-mono text-[11px] text-graphite shrink-0 whitespace-nowrap">
                    {n.period}
                  </span>
                </header>
                <p className="text-base md:text-lg leading-[1.75] text-graphite">
                  {n.text}
                </p>
              </motion.article>
            ))}
          </div>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 lg:self-start case-card-dark rounded-caseLg p-10 text-bone"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/50 mb-6">
              Technique
            </div>
            <ul className="space-y-3">
              {modules.map((m, i) => (
                <li
                  key={m}
                  className="flex items-baseline gap-4 border-b border-bone/10 pb-3 last:border-b-0"
                >
                  <span className="font-mono text-[10px] text-bone/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-lg leading-snug">{m}</span>
                </li>
              ))}
            </ul>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}

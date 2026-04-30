"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-platinum/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <SectionLabel index="02" eyebrow="Expérience professionnelle" />

        <div className="tick-row h-[1px] mb-8 opacity-60" aria-hidden />

        <ol className="space-y-6">
          {resumeData.experience.map((exp, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.9, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="case-card rounded-case overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-0">
                <div className="md:col-span-3 bg-onyx text-bone p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/50 mb-3">
                      Période
                    </div>
                    <div className="font-display text-2xl">{exp.period}</div>
                    <div className="mt-1 font-mono text-[11px] text-bone/60">{exp.duration}</div>
                  </div>
                  <div className="mt-8 pt-6 border-t border-bone/10">
                    <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/50 mb-2">
                      Lieu
                    </div>
                    <div className="font-display text-lg">{exp.location}</div>
                  </div>
                </div>

                <div className="md:col-span-9 p-8 md:p-12">
                  <h3 className="font-display text-3xl md:text-4xl text-onyx leading-tight">
                    {exp.role}
                  </h3>
                  <p className="mt-2 text-graphite">
                    <span className="font-display text-onyx text-lg">{exp.company}</span>
                    {"via" in exp && exp.via ? (
                      <span className="text-graphite-faint"> · {exp.via}</span>
                    ) : null}
                  </p>
                  {exp.summary && (
                    <p className="mt-5 text-graphite leading-relaxed max-w-3xl">{exp.summary}</p>
                  )}
                  <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                    {exp.bullets.map((b, bi) => (
                      <li key={bi} className="flex text-graphite text-[15px] leading-relaxed">
                        <span className="mr-3 mt-2 h-1 w-1 rounded-full bg-onyx flex-none" aria-hidden />
                        <span className="whitespace-pre-line">{b}</span>
                      </li>
                    ))}
                  </ul>
                  {"achievement" in exp && exp.achievement ? (
                    <div className="mt-6 p-5 rounded-2xl bg-bone border border-platinum-line">
                      <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-graphite-faint mb-2">
                        Réalisation
                      </div>
                      <p className="font-display text-lg text-onyx leading-snug whitespace-pre-line">
                        {exp.achievement}
                      </p>
                    </div>
                  ) : null}
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}

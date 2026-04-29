"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/lib/data";

export default function About() {
  const { profile, modules } = resumeData;

  return (
    <section id="profil" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <SectionLabel index="01" eyebrow="Profil" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8 case-card rounded-caseLg p-10 md:p-14"
          >
            <p className="text-lg md:text-xl leading-[1.8] text-graphite">
              {profile}
            </p>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4 case-card-dark rounded-caseLg p-10 text-bone"
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

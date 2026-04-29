"use client";

import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";
import { resumeData } from "@/lib/data";

export default function Education() {
  return (
    <section id="formation" className="relative py-24 md:py-32 bg-platinum/40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <SectionLabel index="04" eyebrow="Formation" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 case-card rounded-case p-8 md:p-12"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-graphite-faint mb-6">
              Certifications
            </div>
            <ul className="divide-y divide-platinum-line">
              {resumeData.education.map((e, i) => (
                <li key={i} className="py-5 grid grid-cols-12 gap-3 md:gap-4 items-baseline">
                  <div className="col-span-3 md:col-span-2 font-mono text-sm text-onyx">{e.year}</div>
                  <div className="col-span-9 md:col-span-5 font-display text-xl md:text-2xl text-onyx leading-snug">
                    {e.title}
                  </div>
                  <div className="col-span-12 md:col-span-5 font-mono text-[12px] text-graphite md:text-right whitespace-nowrap">
                    {e.school}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 case-card rounded-case p-8 md:p-12"
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-graphite-faint mb-6">
              Chronologie
            </div>
            <ol className="relative border-l border-platinum-line pl-6 space-y-6">
              {resumeData.timeline.map((t, i) => (
                <li key={i} className="relative">
                  <span className="absolute -left-[29px] top-1 h-2 w-2 rounded-full bg-onyx" />
                  <div className="font-mono text-[11px] uppercase tracking-[0.3em] text-graphite-faint">
                    {t.year}
                  </div>
                  <div className="font-display text-lg text-onyx mt-0.5">{t.label}</div>
                </li>
              ))}
            </ol>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

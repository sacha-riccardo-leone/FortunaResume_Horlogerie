"use client";

import { motion } from "framer-motion";

export default function SectionLabel({
  index,
  eyebrow,
  title,
  subtitle,
}: {
  index: string;
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-14 md:mb-20">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="flex items-center gap-4"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-graphite-faint">
          {index}
        </span>
        <span className="h-px flex-1 max-w-[180px] bg-platinum-line" />
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-graphite">
          {eyebrow}
        </span>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
        className="mt-5 font-display font-light text-display-lg text-onyx max-w-4xl"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mt-5 max-w-2xl text-graphite leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}

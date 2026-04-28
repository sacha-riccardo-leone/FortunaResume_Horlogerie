"use client";

import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

export default function Contact() {
  const { contact, identity } = resumeData;

  return (
    <section id="contact" className="relative py-28 md:py-40">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative case-card-dark rounded-caseLg p-10 md:p-16 text-bone overflow-hidden"
        >
          {/* decorative arc */}
          <div
            className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full border border-bone/10"
            aria-hidden
          />
          <div
            className="absolute -top-32 -right-32 w-[400px] h-[400px] rounded-full border border-bone/10"
            aria-hidden
          />
          <div
            className="absolute -top-24 -right-24 w-[300px] h-[300px] rounded-full border border-bone/10"
            aria-hidden
          />

          <div className="relative flex items-center gap-4 mb-8">
            <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/50">
              05 — Contact
            </span>
            <span className="h-px flex-1 max-w-[200px] bg-bone/15" />
          </div>

          <h2 className="relative font-display font-light text-display-lg leading-[1.02]">
            Un atelier à rejoindre,
            <br />
            <span className="italic">une main supplémentaire.</span>
          </h2>

          <p className="relative mt-6 max-w-2xl text-bone/70 leading-[1.8]">
            Disponible {identity.availability} pour un atelier exigeant, attaché à la discrétion et
            à l’excellence. Échange initial sous 48 heures.
          </p>

          <div className="relative mt-14 grid grid-cols-1 md:grid-cols-3 gap-10 pt-10 border-t border-bone/15">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50 mb-3">
                Courrier électronique
              </div>
              <a
                href={`mailto:${contact.email}`}
                className="font-display italic text-xl md:text-2xl link-reveal break-all"
              >
                {contact.email}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50 mb-3">
                Téléphone
              </div>
              <a
                href={`tel:${contact.phone}`}
                className="font-display italic text-xl md:text-2xl link-reveal"
              >
                {contact.phoneFormatted}
              </a>
            </div>
            <div>
              <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50 mb-3">
                Atelier
              </div>
              <p className="font-display text-lg md:text-xl leading-snug">
                {contact.address}
                <br />
                {contact.postal}
                <br />
                {contact.country}
              </p>
            </div>
          </div>

          <div className="relative mt-14 flex flex-wrap items-center gap-5">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center gap-4 rounded-full bg-bone px-7 py-4 text-onyx hover:bg-platinum transition-colors"
            >
              <span className="font-display italic text-lg">Envoyer un courrier</span>
              <span className="transition-transform duration-500 group-hover:translate-x-1">→</span>
            </a>
            <a
              href={`tel:${contact.phone}`}
              className="inline-flex items-center gap-4 rounded-full border border-bone/30 px-7 py-4 text-bone hover:bg-bone/5 transition-colors font-mono text-[11px] uppercase tracking-[0.35em]"
            >
              Ou appeler
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

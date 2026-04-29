"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "#profil", label: "Profil" },
  { href: "#experience", label: "Expérience" },
  { href: "#competences", label: "Compétences" },
  { href: "#formation", label: "Formation" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-4 md:px-8 pt-3 sm:pt-4 md:pt-6"
      >
        <div
          className={`mx-auto max-w-[1400px] rounded-full transition-all duration-500 ${
            scrolled || open
              ? "bg-bone/90 backdrop-blur-xl shadow-dial-soft border border-platinum-line"
              : "bg-transparent"
          }`}
        >
          <div className="px-5 sm:px-6 md:px-8 py-3 sm:py-3.5 flex items-center justify-between">
            <a
              href="#top"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-full border border-onyx/30 bg-bone">
                <span className="absolute inset-[3px] rounded-full border border-onyx/10" />
                <span className="relative font-display text-sm text-onyx">F</span>
              </span>
              <div className="hidden sm:block leading-tight">
                <div className="font-display text-[15px] text-onyx">
                  Fortuna Chung Ming Kan
                </div>
              </div>
            </a>

            <nav className="hidden md:flex items-center gap-7">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-[12px] uppercase tracking-[0.25em] text-graphite hover:text-onyx transition-colors"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href="#contact"
                className="hidden md:inline-flex text-[11px] uppercase tracking-[0.3em] px-5 py-2.5 rounded-full bg-onyx text-bone hover:bg-onyx-deep transition-colors"
              >
                Contacter
              </a>
              <button
                type="button"
                aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="md:hidden relative h-10 w-10 flex items-center justify-center rounded-full border border-platinum-line bg-bone text-onyx"
              >
                <span className="sr-only">Menu</span>
                <span className="relative block w-4 h-[10px]">
                  <span
                    className={`absolute left-0 top-0 h-px w-full bg-onyx transition-transform duration-300 ${
                      open ? "translate-y-[5px] rotate-45" : ""
                    }`}
                  />
                  <span
                    className={`absolute left-0 bottom-0 h-px w-full bg-onyx transition-transform duration-300 ${
                      open ? "-translate-y-[5px] -rotate-45" : ""
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-onyx text-bone"
          >
            <div
              className="absolute inset-0 opacity-[0.06] pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
              aria-hidden
            />
            <div className="relative flex flex-col h-full pt-24 pb-10 px-6 sm:px-10">
              <div className="flex items-center gap-3 mb-10">
                <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-bone/60">
                  Navigation
                </span>
                <span className="h-px flex-1 bg-bone/15" />
              </div>
              <nav className="flex flex-col gap-4">
                {links.map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    onClick={() => setOpen(false)}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.05 }}
                    className="flex items-baseline gap-4 font-display text-4xl sm:text-5xl text-bone"
                  >
                    <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-bone/50">
                      0{i + 1}
                    </span>
                    {l.label}
                  </motion.a>
                ))}
              </nav>
              <div className="mt-auto pt-8 border-t border-bone/15">
                <div className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/55 mb-2">
                  Contact
                </div>
                <a
                  href="mailto:chungfortuna@gmail.com"
                  onClick={() => setOpen(false)}
                  className="font-display text-xl break-all link-reveal"
                >
                  chungfortuna@gmail.com
                </a>
                <div className="mt-1">
                  <a
                    href="tel:+41787150997"
                    onClick={() => setOpen(false)}
                    className="font-mono text-sm text-bone/75 link-reveal"
                  >
                    +41 78 715 09 97
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

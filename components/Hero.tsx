"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLocale } from "./LocaleProvider";

const ease = [0.22, 1, 0.36, 1];

function Dial() {
  const ticks = Array.from({ length: 60 });
  const hourRef = useRef<SVGGElement>(null);
  const minuteRef = useRef<SVGGElement>(null);
  const secondRef = useRef<SVGGElement>(null);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const now = new Date();
      const s = now.getSeconds() + now.getMilliseconds() / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;
      secondRef.current?.setAttribute("transform", `rotate(${s * 6} 50 50)`);
      minuteRef.current?.setAttribute("transform", `rotate(${m * 6} 50 50)`);
      hourRef.current?.setAttribute("transform", `rotate(${h * 30} 50 50)`);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-[420px] mx-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease }}
        className="absolute inset-0 rounded-full bg-gradient-to-br from-paper to-paper-warm border border-paper-line shadow-[0_30px_70px_-30px_rgba(10,10,10,0.25),0_10px_25px_-12px_rgba(10,10,10,0.1)]"
      >
        <div className="absolute inset-4 rounded-full border border-ink/[0.04]" />
        <div className="absolute inset-12 rounded-full border border-ink/[0.06]" />
        <div className="absolute inset-20 rounded-full border border-ink/[0.08]" />

        {/* Ticks */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          {ticks.map((_, i) => {
            const isMajor = i % 5 === 0;
            return (
              <line
                key={i}
                x1="50"
                y1="4"
                x2="50"
                y2={isMajor ? "8" : "6"}
                stroke="#0A0A0A"
                strokeOpacity={isMajor ? 1 : 0.3}
                strokeWidth={isMajor ? 0.55 : 0.25}
                strokeLinecap="round"
                transform={`rotate(${i * 6} 50 50)`}
              />
            );
          })}
        </svg>

        {/* Center label */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none">
          <div className="font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-ink-faint mb-2">
            Manufacture
          </div>
          <div className="font-display text-2xl md:text-3xl text-ink leading-none tracking-tight">
            Fortuna
          </div>
          <div className="font-display text-base md:text-lg text-ink-muted mt-1 leading-none">
            Chung
          </div>
          <div className="mt-3 h-px w-10 bg-ink/40" />
          <div className="mt-3 font-mono text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-ink-faint">
            Swiss Made
          </div>
        </div>

        {/* Live hour · minute · second hands — synced to visitor's local time */}
        <svg
          className="absolute inset-0 h-full w-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid meet"
          aria-hidden
        >
          <g ref={hourRef} transform="rotate(0 50 50)">
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="28"
              stroke="#0A0A0A"
              strokeWidth="1.1"
              strokeLinecap="round"
            />
          </g>
          <g ref={minuteRef} transform="rotate(0 50 50)">
            <line
              x1="50"
              y1="50"
              x2="50"
              y2="17"
              stroke="#0A0A0A"
              strokeWidth="0.7"
              strokeLinecap="round"
            />
          </g>
          <g ref={secondRef} transform="rotate(0 50 50)">
            <line
              x1="50"
              y1="56"
              x2="50"
              y2="13"
              stroke="#0A0A0A"
              strokeWidth="0.3"
              strokeLinecap="round"
            />
          </g>
          <circle cx="50" cy="50" r="1.6" fill="#0A0A0A" />
          <circle cx="50" cy="50" r="0.6" fill="#FFFFFF" />
        </svg>
      </motion.div>
    </div>
  );
}

const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease },
});

export default function Hero() {
  const { data, t } = useLocale();
  const { identity, contact } = data;
  const city = contact.postal.split(" ").slice(1).join(" ");

  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex items-center pt-28 sm:pt-32 pb-20 sm:pb-24"
    >
      <div className="absolute inset-0 -z-10 dot-grid opacity-50" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-paper to-transparent -z-10"
        aria-hidden
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 sm:px-6 md:px-10 lg:px-16">
        <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
          <motion.div {...reveal(0)} className="col-span-12 lg:col-span-2">
            <span className="text-eyebrow uppercase text-ink-faint">{t.hero.eyebrowIndex}</span>
          </motion.div>

          <div className="col-span-12 lg:col-span-7">
            <motion.h1
              {...reveal(0.2)}
              className="font-display font-light text-display-xl text-ink"
            >
              {identity.firstName}
              <br />
              <span className="italic">{identity.lastName}.</span>
            </motion.h1>

            <motion.div
              {...reveal(0.4)}
              className="mt-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end"
            >
              <div className="md:col-span-7 max-w-xl">
                <p className="text-ink-muted text-lg leading-relaxed">
                  {identity.tagline}.
                </p>
                <p className="mt-3 text-sm text-ink-subtle">
                  {t.hero.locatedIn(city, identity.availability)}
                </p>
              </div>

              <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-4 md:gap-2 text-sm">
                <div className="border-t border-paper-line pt-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-1">
                    {t.hero.locationLabel}
                  </div>
                  <div>{contact.postal}</div>
                </div>
                <div className="border-t border-paper-line pt-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-1">
                    {t.hero.phoneLabel}
                  </div>
                  <a href={`tel:${contact.phone}`} className="link-reveal">
                    {contact.phoneFormatted}
                  </a>
                </div>
                <div className="border-t border-paper-line pt-3">
                  <div className="text-eyebrow uppercase text-ink-faint mb-1">
                    {t.hero.emailLabel}
                  </div>
                  <a href={`mailto:${contact.email}`} className="link-reveal break-all">
                    {contact.email}
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.1, delay: 0.3, ease }}
            className="col-span-12 lg:col-span-3 flex justify-center lg:justify-end"
          >
            <Dial />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

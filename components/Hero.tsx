"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { resumeData } from "@/lib/data";

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
    <div className="flex flex-col items-center gap-5 w-full">
      <div className="relative aspect-square w-full max-w-[520px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="absolute inset-0 rounded-full"
        >
          <div className="absolute inset-16 rounded-full border border-onyx/10" />
          <div className="absolute inset-28 rounded-full border border-onyx/15" />

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
                  stroke="#0B0B0B"
                  strokeOpacity={isMajor ? 1 : 0.35}
                  strokeWidth={isMajor ? 0.55 : 0.25}
                  strokeLinecap="round"
                  transform={`rotate(${i * 6} 50 50)`}
                />
              );
            })}
          </svg>

          {/* Live hour, minute, second hands synced to visitor's local time */}
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
                stroke="#0B0B0B"
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
                stroke="#0B0B0B"
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
                stroke="#0B0B0B"
                strokeWidth="0.3"
                strokeLinecap="round"
              />
            </g>
            <circle cx="50" cy="50" r="1.6" fill="#0B0B0B" />
            <circle cx="50" cy="50" r="0.6" fill="#F3F1EE" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
}

export default function Hero() {
  const { identity } = resumeData;

  return (
    <section id="top" className="relative pt-32 sm:pt-36 md:pt-44 pb-20 sm:pb-24">
      <h1 className="sr-only">
        {identity.firstName} {identity.lastName} · {identity.role}
      </h1>
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 lg:px-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 lg:items-start">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1, ease }}
              className="relative w-full max-w-[300px] aspect-[4/5] overflow-hidden rounded-caseLg case-card"
            >
              <Image
                src="/profile.jpeg"
                alt={`${identity.firstName} ${identity.lastName}`}
                fill
                priority
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease }}
              className="mt-5 max-w-xl text-lg text-graphite leading-[1.7]"
            >
              <span className="font-display text-onyx text-xl">
                {identity.firstName} {identity.lastName}
              </span>{" "}
              · {identity.role.toLowerCase()}, formée au{" "}
              <em className="font-display not-italic text-onyx">Pôle Industrie du Locle</em> et
              expérimentée en manufacture chez{" "}
              <em className="font-display not-italic text-onyx">Rolex SA</em>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="mt-6 flex flex-wrap items-center gap-4"
            >
              <a
                href="#profil"
                className="inline-flex items-center gap-3 rounded-full bg-onyx text-bone px-6 py-3.5 text-[11px] uppercase tracking-[0.35em] hover:bg-onyx-deep transition"
              >
                Découvrir
                <span>→</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-onyx/30 text-onyx px-6 py-3.5 text-[11px] uppercase tracking-[0.35em] hover:bg-onyx hover:text-bone transition"
              >
                Prendre contact
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-10 md:gap-x-12 gap-y-6 pt-5 border-t border-platinum-line"
            >
              {[
                { k: "Depuis", v: identity.since },
                { k: "Lieu", v: "La Chaux-de-Fonds" },
                { k: "Disponibilité", v: identity.availability },
                { k: "Nationalité", v: identity.nationality },
              ].map((s) => (
                <div key={s.k}>
                  <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-graphite-faint mb-2">
                    {s.k}
                  </div>
                  <div className="font-display text-base md:text-lg text-onyx">
                    {s.v}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-5 order-1 lg:order-2 lg:-mt-14 flex flex-col items-center gap-8">
            <Dial />
            <motion.figure
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.6, ease }}
              className="w-full text-center"
            >
              <blockquote className="inline-block text-left italic font-display text-base md:text-lg text-graphite leading-[1.8]">
                <div>« Le geste.</div>
                <div className="pl-10 md:pl-16">La précision.</div>
                <div>Le temps. »</div>
              </blockquote>
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}

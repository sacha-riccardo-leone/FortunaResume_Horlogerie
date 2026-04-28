import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        onyx: {
          DEFAULT: "#0B0B0B",
          deep: "#151514",
          warm: "#1C1B1A",
        },
        platinum: {
          DEFAULT: "#F3F1EE",
          soft: "#EDEAE4",
          cool: "#E4E1DA",
          line: "#D6D3CC",
        },
        bone: "#FAF8F4",
        graphite: {
          DEFAULT: "#4A4743",
          light: "#6B6762",
          faint: "#8F8B85",
        },
      },
      fontFamily: {
        display: ["var(--font-sans)", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 10vw, 9rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4.5rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.1", letterSpacing: "-0.015em" }],
        "eyebrow": ["0.7rem", { lineHeight: "1", letterSpacing: "0.32em" }],
      },
      boxShadow: {
        "dial": "0 40px 80px -40px rgba(11, 11, 11, 0.25), 0 12px 32px -16px rgba(11, 11, 11, 0.12)",
        "dial-soft": "0 30px 60px -30px rgba(11, 11, 11, 0.15), 0 8px 20px -10px rgba(11, 11, 11, 0.08)",
        "inset-fine": "inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(0,0,0,0.04)",
      },
      borderRadius: {
        "case": "28px",
        "caseLg": "42px",
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import { resumeData } from "@/lib/data";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: resumeData.meta.siteTitle,
  description: resumeData.meta.siteDescription,
  authors: [{ name: `${resumeData.identity.firstName} ${resumeData.identity.lastName}` }],
  openGraph: {
    title: resumeData.meta.siteTitle,
    description: resumeData.meta.siteDescription,
    type: "profile",
    locale: "fr_CH",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="font-sans text-onyx bg-bone">{children}</body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "100 Visual LightBurn Mind Maps: From Beginner to Advanced",
  description:
    "100 visual mind maps with real LightBurn screenshots that show you which tool to use, where to click, and what to check before you hit Start.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#c8060f",
};

// Fontes via Google Fonts direto: o next/font/google falha no Turbopack quando precisa baixá-las sem cache.
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Nunito:wght@700;800;900&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel + UTMify: entram aqui quando os pixels desta oferta forem enviados. */}
      </head>
      <body>{children}</body>
    </html>
  );
}

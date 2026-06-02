import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteShell from "@/app/_components/SiteShell";

const neueHaasGrotesk = localFont({
  src: [
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",        weight: "400", style: "normal" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRomanItalic.ttf",  weight: "400", style: "italic" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediu.ttf",        weight: "500", style: "normal" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediumItalic.ttf", weight: "500", style: "italic" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBold.ttf",         weight: "700", style: "normal" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBoldItalic.ttf",   weight: "700", style: "italic" },
  ],
  variable: "--font-neue-haas",
});

export const metadata: Metadata = {
  title: "Somethings Off Studio",
  description: "A digital design studio.",
  icons: { icon: '/assets/icons/favicon.svg' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${neueHaasGrotesk.variable} h-full`}>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]" style={{ fontFamily: "var(--font-neue-haas)" }}>
        <SiteShell />
        <main>{children}</main>
      </body>
    </html>
  );
}

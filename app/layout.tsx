import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import SiteShell from "@/app/_components/SiteShell";

const facultyGlyphic = localFont({
  src: [
    { path: "../public/assets/fonts/faculty-glyphic/FacultyGlyphic-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-faculty-glyphic",
});

const siteDescription =
  "Somethings Off Studio is Idris Noordien's design practice - brand identity, art direction, and web work out of Cape Town.";

export const metadata: Metadata = {
  metadataBase: new URL("https://somethingsoffstudio.com"),
  title: {
    default: "Somethings Off Studio",
    template: "%s",
  },
  description: siteDescription,
  icons: { icon: "/assets/icons/favicon.svg" },
  openGraph: {
    title: "Somethings Off Studio",
    description: siteDescription,
    url: "https://somethingsoffstudio.com",
    siteName: "Somethings Off Studio",
    images: [{ url: "/assets/images/work/sos/cover.jpg", width: 750, height: 1124 }],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Somethings Off Studio",
    description: siteDescription,
    images: ["/assets/images/work/sos/cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${facultyGlyphic.variable} h-full`}>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]" style={{ fontFamily: "var(--font-faculty-glyphic)" }}>
        <SiteShell />
        <main>{children}</main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}

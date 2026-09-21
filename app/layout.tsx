import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import SiteShell from "@/app/_components/SiteShell";

const facultyGlyphic = localFont({
  src: [
    { path: "../public/assets/fonts/faculty-glyphic/FacultyGlyphic-Regular.ttf", weight: "400", style: "normal" },
  ],
  variable: "--font-faculty-glyphic",
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
    <html lang="en" className={`${facultyGlyphic.variable} h-full`}>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]" style={{ fontFamily: "var(--font-faculty-glyphic)" }}>
        <SiteShell />
        <main>{children}</main>
      </body>
    </html>
  );
}

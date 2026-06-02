import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteShell from "@/app/_components/SiteShell";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-space-grotesk",
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
    <html lang="en" className={`${spaceGrotesk.variable} h-full`}>
      <body className="min-h-full bg-[var(--color-bg)] text-[var(--color-text)]" style={{ fontFamily: "var(--font-space-grotesk)" }}>
        <SiteShell />
        <main>{children}</main>
      </body>
    </html>
  );
}

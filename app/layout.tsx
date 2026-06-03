import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const neueHaasGrotesk = localFont({
  src: [
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayRoman.ttf",       weight: "400", style: "normal" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayMediu.ttf",       weight: "500", style: "normal" },
    { path: "../public/assets/fonts/neue-haas-grotesk-display-pro-cufonfonts/NeueHaasDisplayBold.ttf",        weight: "700", style: "normal" },
  ],
  variable: "--font-neue-haas",
});

export const metadata: Metadata = {
  title: "Somethings Off Studio",
  description: "A digital design studio.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${neueHaasGrotesk.variable} h-full`}>
      <body className="h-full bg-white" style={{ fontFamily: "var(--font-neue-haas)" }}>
        {children}
      </body>
    </html>
  );
}

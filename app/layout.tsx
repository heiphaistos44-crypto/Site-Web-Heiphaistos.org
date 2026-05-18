import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Barlow } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  title: "Heiphaistos IT — Maintenance & Solutions Informatiques",
  description:
    "Technicien en maintenance, réparation, récupération de données et solutions informatiques sur mesure.",
  keywords: [
    "maintenance informatique",
    "réparation PC",
    "récupération données",
    "technicien informatique",
    "installation système",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${bebasNeue.variable} ${barlow.variable} h-full`}
    >
      <body className="min-h-full flex flex-col noise-overlay antialiased">
        {children}
      </body>
    </html>
  );
}

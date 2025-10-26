import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Léopold Schwarz - Artiste Multidisciplinaire",
  description: "Portfolio de Léopold Schwarz - Artiste peintre, illustrateur et sculpteur basé à Paris. Découvrez mes œuvres, expositions et projets artistiques.",
  keywords: ["art", "artiste", "peinture", "illustration", "sculpture", "Paris", "portfolio", "galerie"],
  authors: [{ name: "Léopold Schwarz" }],
  openGraph: {
    title: "Léopold Schwarz - Artiste Multidisciplinaire",
    description: "Portfolio de Léopold Schwarz - Artiste peintre, illustrateur et sculpteur basé à Paris.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased bg-neutral-50 text-neutral-900">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

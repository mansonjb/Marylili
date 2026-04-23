import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.lemarylili.fr"),
  title: {
    default: "Le Mary Lili | Bar à Cocktails & Événements à La Rochelle",
    template: "%s | Le Mary Lili — La Rochelle",
  },
  description:
    "Bar à cocktails éphémère à La Rochelle. Ateliers cocktail, bar mobile mariage, EVJF, team building en Charente-Maritime et Nouvelle-Aquitaine.",
  keywords: [
    "bar cocktails La Rochelle",
    "bar mobile mariage La Rochelle",
    "atelier cocktail La Rochelle",
    "EVJF La Rochelle",
    "bar éphémère Charente-Maritime",
    "team building cocktail La Rochelle",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.lemarylili.fr",
    siteName: "Le Mary Lili",
    title: "Le Mary Lili | Bar à Cocktails & Événements à La Rochelle",
    description:
      "Bar à cocktails éphémère à La Rochelle. Ateliers, bar mobile mariage, EVJF, team building.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Mary Lili — Bar à Cocktails La Rochelle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Mary Lili | Bar à Cocktails La Rochelle",
    description: "Bar à cocktails éphémère, ateliers & événements à La Rochelle.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://www.lemarylili.fr" },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "BarOrPub",
  name: "Le Mary Lili",
  description:
    "Bar à cocktails éphémère à La Rochelle. Ateliers cocktail, bar mobile pour mariages, EVJF, team building.",
  url: "https://www.lemarylili.fr",
  telephone: "",
  email: "contact@lemarylili.fr",
  address: {
    "@type": "PostalAddress",
    streetAddress: "20 rue de la Chaîne",
    addressLocality: "La Rochelle",
    postalCode: "17000",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 46.1591,
    longitude: -1.1517,
  },
  areaServed: [
    "La Rochelle",
    "Île de Ré",
    "Charente-Maritime",
    "Rochefort",
    "Saintes",
    "Royan",
    "Niort",
    "Angoulême",
    "Bordeaux",
    "Poitiers",
    "Nouvelle-Aquitaine",
  ],
  servedCuisine: ["Cocktails", "Mocktails", "Mixologie"],
  priceRange: "€€",
  sameAs: [
    "https://www.instagram.com/lemarylili",
    "https://www.facebook.com/lemarylili",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Le Mary Lili",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Atelier Cocktail" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bar Mobile Mariage" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Bar Éphémère EVJF" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Team Building Cocktail" } },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="grain min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Le Bar — Mary Lili, Bar à Cocktails La Rochelle | 20 rue de la Chaîne",
  description: "Le Mary Lili, bar à cocktails au cœur de La Rochelle. Sirops maison, spiritueux charentais, mixologie contemporaine. 20 rue de la Chaîne, ouvert mar-sam 18h-2h.",
  alternates: { canonical: "https://www.lemarylili.fr/le-bar" },
};

const specialties = [
  { title: "Sirops Maison", desc: "Préparés chaque semaine avec des produits frais et locaux. Fraise, lavande, gingembre, hibiscus, bergamote… Notre différence fondamentale." },
  { title: "Spiritueux Charentais", desc: "Cognac, pineau, fine de champagne : nous célébrons le terroir de Charente-Maritime avec des maisons sélectionnées directement chez les producteurs." },
  { title: "Créations Saisonnières", desc: "Notre carte cocktails change au fil des saisons pour refléter les produits du marché local. Chaque visite est une nouvelle découverte." },
  { title: "Cask Experience", desc: "L'offre la plus exclusive : créez votre blend de cognac et laissez-le vieillir en fût. Une expérience sensorielle et patrimoniale unique." },
];

const hours = [
  { day: "Mardi – Jeudi", time: "18h00 – 01h00" },
  { day: "Vendredi – Samedi", time: "18h00 – 02h00" },
  { day: "Dimanche – Lundi", time: "Fermé" },
];

export default function LeBarPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BarOrPub",
    name: "Le Mary Lili",
    description: "Bar à cocktails à La Rochelle. Sirops maison, spiritueux charentais, mixologie contemporaine.",
    url: "https://www.lemarylili.fr/le-bar",
    telephone: "+33-5-46-00-00-00",
    email: "contact@lemarylili.fr",
    address: {
      "@type": "PostalAddress",
      streetAddress: "20 rue de la Chaîne",
      addressLocality: "La Rochelle",
      postalCode: "17000",
      addressCountry: "FR",
    },
    geo: { "@type": "GeoCoordinates", latitude: 46.1591, longitude: -1.1522 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "18:00", closes: "01:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "18:00", closes: "02:00" },
    ],
    servesCuisine: "Cocktails",
    priceRange: "€€",
    hasMap: "https://maps.google.com/?q=20+rue+de+la+Chaine+La+Rochelle",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-40 pb-24 px-6"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, var(--bg) 100%)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            20 rue de la Chaîne · La Rochelle
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight" style={{ color: "var(--cream)" }}>
            Le Mary Lili —<br />
            <span className="text-gold-gradient">L'âme cocktail</span><br />
            de La Rochelle
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--cream-muted)" }}>
            Au cœur du vieux port, une adresse où la mixologie charentaise rencontre la créativité contemporaine.
            Sirops maison, spiritueux locaux, créations saisonnières.
          </p>
        </div>
      </section>

      {/* Specialties */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-6">
          {specialties.map((item) => (
            <div
              key={item.title}
              className="p-8"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <div className="w-8 h-px mb-6" style={{ background: "var(--gold)" }} />
              <h2 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--cream)" }}>
                {item.title}
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Info section */}
      <section
        className="py-24"
        style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Hours */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--cream)" }}>
                Horaires
              </h2>
              <div className="flex flex-col gap-4">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between items-center py-3" style={{ borderBottom: "1px solid var(--border)" }}>
                    <span className="text-sm" style={{ color: "var(--cream-muted)" }}>{h.day}</span>
                    <span className="text-sm font-semibold" style={{ color: h.time === "Fermé" ? "var(--cream-muted)" : "var(--gold)" }}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs" style={{ color: "var(--cream-muted)" }}>
                Événements privatisés toute l'année sur réservation
              </p>
            </div>

            {/* Address */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--cream)" }}>
                Adresse
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cream-muted)" }}>
                20 rue de la Chaîne<br />
                17000 La Rochelle<br />
                <a href="mailto:contact@lemarylili.fr" className="hover:text-[--gold] transition-colors mt-2 inline-block">
                  contact@lemarylili.fr
                </a>
              </p>
              <a
                href="https://maps.google.com/?q=20+rue+de+la+Chaine+La+Rochelle"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm inline-block"
              >
                Voir sur la carte →
              </a>
            </div>

            {/* Events */}
            <div>
              <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--cream)" }}>
                Événements
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cream-muted)" }}>
                Le Mary Lili propose bien plus que le bar : ateliers cocktail, bar mobile mariage, privatisation pour EVJF, team building corporate.
              </p>
              <Link href="/contact" className="btn-gold text-sm inline-block">
                Demander un devis
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services links */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <h2 className="font-display text-3xl font-bold mb-10 text-center" style={{ color: "var(--cream)" }}>
          Nos prestations événementielles
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label: "Atelier Cocktail", href: "/atelier-cocktail" },
            { label: "Bar Mobile Mariage", href: "/mariage" },
            { label: "EVJF & EVG", href: "/evjf" },
            { label: "Team Building", href: "/team-building" },
            { label: "Bar Éphémère", href: "/bar-ephemere" },
            { label: "Anniversaire", href: "/anniversaire" },
          ].map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group flex items-center justify-between p-5 transition-all"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              <span className="text-sm font-medium group-hover:text-[--gold] transition-colors" style={{ color: "var(--cream)" }}>
                {s.label}
              </span>
              <span style={{ color: "var(--gold)" }}>→</span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Devis Gratuit | Le Mary Lili La Rochelle",
  description: "Demandez votre devis gratuit pour un atelier cocktail, bar mobile mariage, EVJF ou team building à La Rochelle. Réponse sous 48h.",
  alternates: { canonical: "https://www.lemarylili.fr/contact" },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Le Mary Lili",
    url: "https://www.lemarylili.fr/contact",
    mainEntity: {
      "@type": "LocalBusiness",
      name: "Le Mary Lili",
      telephone: "+33-5-46-00-00-00",
      email: "contact@lemarylili.fr",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20 rue de la Chaîne",
        addressLocality: "La Rochelle",
        postalCode: "17000",
        addressCountry: "FR",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, var(--bg) 100%)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-xs tracking-[0.4em] uppercase mb-4" style={{ color: "var(--gold)" }}>
            Parlons de votre projet
          </p>
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6" style={{ color: "var(--cream)" }}>
            Demandez votre devis gratuit
          </h1>
          <p className="text-lg max-w-xl mx-auto" style={{ color: "var(--cream-muted)" }}>
            Atelier cocktail, bar mobile mariage, EVJF, team building — réponse sous 48h, devis personnalisé.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16">

          {/* Contact info */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--cream)" }}>
              Nos coordonnées
            </h2>

            <div className="flex flex-col gap-6">
              {[
                { label: "Adresse", value: "20 rue de la Chaîne\n17000 La Rochelle" },
                { label: "Email", value: "contact@lemarylili.fr" },
                { label: "Zone d'intervention", value: "La Rochelle · Île de Ré · Charente-Maritime\nNouvelle-Aquitaine" },
                { label: "Réponse", value: "Devis sous 48h ouvrées" },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="w-px self-stretch" style={{ background: "var(--gold)", opacity: 0.4 }} />
                  <div>
                    <p className="text-xs tracking-widest uppercase mb-1" style={{ color: "var(--gold)" }}>
                      {item.label}
                    </p>
                    <p className="text-sm whitespace-pre-line" style={{ color: "var(--cream-muted)" }}>
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-6" style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}>
              <p className="font-display text-lg font-bold mb-2" style={{ color: "var(--cream)" }}>
                Horaires du bar
              </p>
              <p className="text-sm" style={{ color: "var(--cream-muted)" }}>
                Mardi – Samedi : 18h – 2h<br />
                Dimanche – Lundi : Fermé<br />
                <span style={{ color: "var(--gold)" }}>Événements : toute l'année sur réservation</span>
              </p>
            </div>
          </div>

          {/* Form */}
          <div>
            <h2 className="font-display text-2xl font-bold mb-8" style={{ color: "var(--cream)" }}>
              Votre demande
            </h2>

            <form
              action="https://formspree.io/f/contact@lemarylili.fr"
              method="POST"
              className="flex flex-col gap-5"
            >
              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                  Type d'événement *
                </label>
                <select
                  name="event_type"
                  required
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                  style={{ border: "1px solid var(--border)", color: "var(--cream-muted)" }}
                >
                  <option value="">Sélectionnez…</option>
                  <option>EVJF</option>
                  <option>EVG</option>
                  <option>Mariage</option>
                  <option>Team Building</option>
                  <option>Anniversaire</option>
                  <option>Atelier Cocktail</option>
                  <option>Bar Éphémère / Festival</option>
                  <option>Autre</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                    Prénom *
                  </label>
                  <input
                    type="text"
                    name="first_name"
                    required
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                    style={{ border: "1px solid var(--border)", color: "var(--cream)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                    Nom *
                  </label>
                  <input
                    type="text"
                    name="last_name"
                    required
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                    style={{ border: "1px solid var(--border)", color: "var(--cream)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                  style={{ border: "1px solid var(--border)", color: "var(--cream)" }}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                    Date envisagée
                  </label>
                  <input
                    type="date"
                    name="event_date"
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                    style={{ border: "1px solid var(--border)", color: "var(--cream-muted)" }}
                  />
                </div>
                <div>
                  <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                    Nombre de personnes
                  </label>
                  <input
                    type="number"
                    name="guests"
                    min="2"
                    className="w-full px-4 py-3 text-sm bg-transparent outline-none"
                    style={{ border: "1px solid var(--border)", color: "var(--cream)" }}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase mb-2" style={{ color: "var(--gold)" }}>
                  Votre message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="w-full px-4 py-3 text-sm bg-transparent outline-none resize-none"
                  style={{ border: "1px solid var(--border)", color: "var(--cream)" }}
                  placeholder="Décrivez votre projet : lieu, thème, besoins particuliers…"
                />
              </div>

              <button type="submit" className="btn-gold w-full">
                Envoyer ma demande
              </button>

              <p className="text-xs text-center" style={{ color: "var(--cream-muted)" }}>
                Réponse garantie sous 48h ouvrées · Devis sans engagement
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

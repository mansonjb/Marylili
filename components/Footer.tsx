import Link from "next/link";

const links = {
  Services: [
    { label: "Atelier Cocktail", href: "/atelier-cocktail" },
    { label: "Bar Mobile Mariage", href: "/mariage" },
    { label: "EVJF & EVG", href: "/evjf" },
    { label: "Team Building", href: "/team-building" },
    { label: "Bar Éphémère", href: "/bar-ephemere" },
    { label: "Anniversaire", href: "/anniversaire" },
  ],
  Destinations: [
    { label: "La Rochelle", href: "/guides/la-rochelle" },
    { label: "Île de Ré", href: "/mariage/bar-mobile-mariage-ile-de-re" },
    { label: "Charente-Maritime", href: "/mariage/bar-mobile-mariage-charente-maritime" },
    { label: "Rochefort", href: "/mariage/bar-mobile-mariage-rochefort" },
    { label: "Bordeaux", href: "/mariage/bar-mobile-mariage-bordeaux" },
    { label: "Nouvelle-Aquitaine", href: "/mariage/bar-mobile-mariage-nouvelle-aquitaine" },
  ],
  Guides: [
    { label: "Organiser un EVJF à La Rochelle", href: "/evjf/organiser-evjf-la-rochelle" },
    { label: "Meilleurs bars à cocktails La Rochelle", href: "/guides/meilleurs-bars-cocktails-la-rochelle" },
    { label: "Cocktails mariage : tendances", href: "/mariage/cocktails-signature-mariage" },
    { label: "Que faire à La Rochelle en groupe", href: "/guides/que-faire-la-rochelle-en-groupe" },
    { label: "Atelier cocktail cadeau", href: "/atelier-cocktail/atelier-cocktail-cadeau" },
  ],
};

export function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <p className="font-display text-2xl font-bold mb-2" style={{ color: "var(--gold)" }}>
              LE MARY LILI
            </p>
            <p className="text-xs tracking-[0.3em] uppercase mb-6" style={{ color: "var(--cream-muted)" }}>
              Bar à Cocktails · La Rochelle
            </p>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cream-muted)" }}>
              20 rue de la Chaîne<br />
              17000 La Rochelle<br />
              <a href="mailto:contact@lemarylili.fr" className="hover:text-[--gold] transition-colors">
                contact@lemarylili.fr
              </a>
            </p>
            <div className="flex gap-4">
              {["Instagram", "Facebook", "TikTok"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="text-xs tracking-widest uppercase transition-colors hover:text-[--gold]"
                  style={{ color: "var(--cream-muted)" }}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h3
                className="text-xs tracking-[0.25em] uppercase font-semibold mb-5"
                style={{ color: "var(--gold)" }}
              >
                {title}
              </h3>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm transition-colors hover:text-[--gold]"
                      style={{ color: "var(--cream-muted)" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="divider-gold my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs" style={{ color: "var(--cream-muted)" }}>
          <p>© {new Date().getFullYear()} Le Mary Lili — Tous droits réservés</p>
          <div className="flex gap-6">
            <Link href="/mentions-legales" className="hover:text-[--gold] transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-[--gold] transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

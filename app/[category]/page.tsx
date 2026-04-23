import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { allPagesByCategory, categoryMeta } from "@/data/pages";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return Object.keys(allPagesByCategory).map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category];
  if (!meta) return {};
  return {
    title: meta.title,
    description: meta.description,
    openGraph: { title: meta.title, description: meta.description },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const pages = allPagesByCategory[category];
  const meta = categoryMeta[category];

  if (!pages || !meta) notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: meta.h1,
    description: meta.description,
    url: `https://www.lemarylili.fr/${category}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Le Mary Lili",
      address: { "@type": "PostalAddress", addressLocality: "La Rochelle", addressCountry: "FR" },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, var(--bg) 100%)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-4xl mb-4">{meta.icon}</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight" style={{ color: "var(--cream)" }}>
            {meta.h1}
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: "var(--cream-muted)" }}>
            {meta.description}
          </p>
        </div>
      </section>

      {/* Pages grid */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pages.map((page) => (
            <Link
              key={page.slug}
              href={`/${category}/${page.slug}`}
              className="group block p-8 transition-all duration-300"
              style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
            >
              {page.localite && (
                <span
                  className="text-xs tracking-widest uppercase px-3 py-1 mb-4 inline-block"
                  style={{ background: "rgba(196,163,90,0.1)", color: "var(--gold)" }}
                >
                  {page.localite}
                </span>
              )}
              <h2
                className="font-display text-xl font-bold mb-3 leading-snug group-hover:text-[--gold] transition-colors"
                style={{ color: "var(--cream)" }}
              >
                {page.title}
              </h2>
              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--cream-muted)" }}>
                {page.intro.slice(0, 120)}…
              </p>
              <span
                className="text-xs tracking-widest uppercase flex items-center gap-2 group-hover:gap-3 transition-all"
                style={{ color: "var(--gold)" }}
              >
                Lire la suite <span>→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-20 px-6 text-center"
        style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}
      >
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--cream)" }}>
            Parlons de votre projet
          </h2>
          <p className="mb-8" style={{ color: "var(--cream-muted)" }}>
            Devis gratuit sous 48h — Nous adaptons chaque prestation à votre événement et votre budget.
          </p>
          <Link href="/contact" className="btn-gold">
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

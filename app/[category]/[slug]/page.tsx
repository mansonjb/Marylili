import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { allPagesByCategory } from "@/data/pages";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return Object.entries(allPagesByCategory).flatMap(([category, pages]) =>
    pages.map((page) => ({ category, slug: page.slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const page = allPagesByCategory[category]?.find((p) => p.slug === slug);
  if (!page) return {};
  return {
    title: page.metaTitle,
    description: page.metaDescription,
    keywords: page.keywords,
    openGraph: {
      title: page.metaTitle,
      description: page.metaDescription,
      url: `https://www.lemarylili.fr/${category}/${slug}`,
    },
    alternates: { canonical: `https://www.lemarylili.fr/${category}/${slug}` },
  };
}

export default async function SlugPage({ params }: Props) {
  const { category, slug } = await params;
  const page = allPagesByCategory[category]?.find((p) => p.slug === slug);
  if (!page) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.metaDescription,
    url: `https://www.lemarylili.fr/${category}/${slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "Le Mary Lili",
      telephone: "+33-5-46-00-00-00",
      address: {
        "@type": "PostalAddress",
        streetAddress: "20 rue de la Chaîne",
        addressLocality: "La Rochelle",
        postalCode: "17000",
        addressCountry: "FR",
      },
      url: "https://www.lemarylili.fr",
    },
    areaServed: page.localite ?? "Charente-Maritime",
  };

  const faqSchema = page.faq
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: page.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Hero */}
      <section
        className="pt-40 pb-20 px-6"
        style={{ background: "linear-gradient(180deg, #0d0d0d 0%, var(--bg) 100%)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Link
              href={`/${category}`}
              className="text-xs tracking-widest uppercase transition-colors hover:text-[--gold]"
              style={{ color: "var(--cream-muted)" }}
            >
              ← {category.replace(/-/g, " ").toUpperCase()}
            </Link>
            {page.localite && (
              <>
                <span style={{ color: "var(--border)" }}>·</span>
                <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>
                  {page.localite}
                </span>
              </>
            )}
          </div>

          <h1
            className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "var(--cream)" }}
          >
            {page.h1}
          </h1>

          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "var(--cream-muted)" }}>
            {page.intro}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        {/* Keywords / tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {page.keywords.map((kw) => (
            <span
              key={kw}
              className="text-xs px-3 py-1 tracking-wider"
              style={{ border: "1px solid var(--border)", color: "var(--cream-muted)" }}
            >
              {kw}
            </span>
          ))}
        </div>

        {/* FAQ */}
        {page.faq && page.faq.length > 0 && (
          <div className="mb-16">
            <h2
              className="font-display text-3xl font-bold mb-8"
              style={{ color: "var(--cream)" }}
            >
              Questions fréquentes
            </h2>
            <div className="flex flex-col gap-6">
              {page.faq.map((item) => (
                <div
                  key={item.q}
                  className="p-6"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
                >
                  <h3
                    className="font-display text-lg font-semibold mb-3"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.q}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div
          className="p-10 text-center"
          style={{ background: "var(--bg-card)", border: "1px solid var(--border)" }}
        >
          <h2 className="font-display text-3xl font-bold mb-4" style={{ color: "var(--cream)" }}>
            Prêt à commencer ?
          </h2>
          <p className="mb-8 max-w-md mx-auto" style={{ color: "var(--cream-muted)" }}>
            Devis gratuit sous 48h — Chaque prestation est personnalisée selon votre événement et votre budget.
          </p>
          {page.cta ? (
            <Link href={page.cta.href} className="btn-gold">
              {page.cta.label}
            </Link>
          ) : (
            <Link href="/contact" className="btn-gold">
              Demander un devis gratuit
            </Link>
          )}
        </div>
      </section>
    </>
  );
}

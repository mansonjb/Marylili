"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { AnimatedSection } from "@/components/AnimatedSection";

const services = [
  { icon: "🥂", title: "EVJF & EVG", desc: "L'atelier cocktail incontournable pour démarrer votre célébration en beauté.", href: "/evjf", tag: "Dès 48€/pers" },
  { icon: "💍", title: "Mariage", desc: "Bar mobile sur mesure pour sublimer votre réception, de La Rochelle à Bordeaux.", href: "/mariage", tag: "Sur devis" },
  { icon: "🏆", title: "Team Building", desc: "Atelier cocktail et bar mobile pour séminaires et événements corporate.", href: "/team-building", tag: "5-50 pers" },
  { icon: "🎂", title: "Anniversaire", desc: "Privatisez le bar ou réservez un bar mobile pour votre soirée privée.", href: "/anniversaire", tag: "Jusqu'à 80 pers" },
  { icon: "🍹", title: "Atelier Cocktail", desc: "2h de mixologie au cœur de La Rochelle. Initiation, cognac, mocktails.", href: "/atelier-cocktail", tag: "Dès 48€/pers" },
  { icon: "🚚", title: "Bar Éphémère", desc: "Le bar mobile qui s'invite partout : plage, domaine, jardin, festival.", href: "/bar-ephemere", tag: "Charente-Maritime" },
];

const destinations = ["La Rochelle", "Île de Ré", "Charente-Maritime", "Rochefort", "Saintes", "Royan", "Bordeaux", "Poitiers", "Nouvelle-Aquitaine"];

const stats = [
  { n: "500+", label: "Événements réalisés" },
  { n: "48€", label: "Atelier dès" },
  { n: "300", label: "Invités max" },
  { n: "9", label: "Départements couverts" },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(196,163,90,0.08) 0%, transparent 65%), #080808" }} />
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(196,163,90,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(196,163,90,0.5) 1px, transparent 1px)", backgroundSize: "80px 80px" }} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs tracking-[0.4em] uppercase mb-6" style={{ color: "var(--gold)" }}>
            La Rochelle · Charente-Maritime · Nouvelle-Aquitaine
          </motion.p>

          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }} className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6" style={{ color: "var(--cream)" }}>
            Le Bar à Cocktails{" "}
            <span className="text-gold-gradient">qui s&apos;invite</span>
            <br />à votre événement
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }} className="text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed" style={{ color: "var(--cream-muted)" }}>
            Ateliers cocktail, bar mobile mariage, EVJF, team building.<br />
            La mixologie charentaise au service de vos moments inoubliables.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Demander un devis gratuit</Link>
            <Link href="/atelier-cocktail" className="btn-outline">Réserver un atelier</Link>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <span className="text-xs tracking-widest uppercase" style={{ color: "var(--gold)" }}>Découvrir</span>
            <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }} className="w-px h-8" style={{ background: "var(--gold)" }} />
          </motion.div>
        </div>
      </section>

      {/* ── STATS */}
      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <AnimatedSection key={s.label} delay={i * 0.1} className="text-center">
              <p className="font-display text-4xl font-bold mb-1" style={{ color: "var(--gold)" }}>{s.n}</p>
              <p className="text-sm tracking-wider uppercase" style={{ color: "var(--cream-muted)" }}>{s.label}</p>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── INTRO */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="left">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Notre histoire</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight" style={{ color: "var(--cream)" }}>La mixologie, comme une signature</h2>
            <p className="text-base leading-relaxed mb-4" style={{ color: "var(--cream-muted)" }}>
              Au cœur de La Rochelle historique, le Mary Lili est né d&apos;une passion pour les spiritueux charentais et la mixologie contemporaine. 20 rue de la Chaîne, nous créons chaque jour des expériences gustatives uniques.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "var(--cream-muted)" }}>
              Produits frais, sirops maison préparés chaque semaine, cognac et pineau des Charentes sélectionnés chez les producteurs locaux : notre approche est artisanale et passionnée.
            </p>
            <Link href="/le-bar" className="btn-outline">Découvrir le bar</Link>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.2}>
            <div className="aspect-square relative overflow-hidden" style={{ border: "1px solid var(--border)" }}>
              <div className="absolute inset-0 flex items-center justify-center" style={{ background: "var(--bg-muted)" }}>
                <p className="font-display text-6xl" style={{ color: "var(--gold)" }}>ML</p>
              </div>
              <div className="absolute top-0 right-0 w-16 h-16" style={{ background: "linear-gradient(225deg, var(--gold) 0%, transparent 60%)", opacity: 0.6 }} />
              <div className="absolute bottom-0 left-0 w-16 h-16" style={{ background: "linear-gradient(45deg, var(--gold) 0%, transparent 60%)", opacity: 0.6 }} />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SERVICES */}
      <section style={{ background: "var(--bg-card)" }} className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Nos Services</p>
            <h2 className="font-display text-4xl lg:text-5xl font-bold" style={{ color: "var(--cream)" }}>Votre moment, notre passion</h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <AnimatedSection key={s.title} delay={i * 0.08}>
                <Link href={s.href} className="group block p-8 h-full transition-all duration-300" style={{ background: "var(--bg)", border: "1px solid var(--border)" }}>
                  <div className="flex items-start justify-between mb-6">
                    <span className="text-3xl">{s.icon}</span>
                    <span className="text-xs tracking-widest uppercase px-3 py-1" style={{ background: "rgba(196,163,90,0.1)", color: "var(--gold)" }}>{s.tag}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold mb-3 transition-colors group-hover:text-[--gold]" style={{ color: "var(--cream)" }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>{s.desc}</p>
                  <div className="mt-6 text-xs tracking-widest uppercase flex items-center gap-2 transition-all group-hover:gap-3" style={{ color: "var(--gold)" }}>
                    En savoir plus <span>→</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── DESTINATIONS */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32">
        <AnimatedSection className="text-center mb-12">
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Zone d&apos;intervention</p>
          <h2 className="font-display text-4xl font-bold mb-4" style={{ color: "var(--cream)" }}>Nous nous déplaçons partout</h2>
          <p className="text-base max-w-xl mx-auto" style={{ color: "var(--cream-muted)" }}>Basés à La Rochelle, nous intervenons dans toute la Nouvelle-Aquitaine pour vos événements.</p>
        </AnimatedSection>
        <div className="flex flex-wrap justify-center gap-3">
          {destinations.map((d, i) => (
            <AnimatedSection key={d} delay={i * 0.05}>
              <span className="px-4 py-2 text-sm tracking-wider uppercase" style={{ border: "1px solid var(--border)", color: "var(--cream-muted)" }}>{d}</span>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── SAVOIR-FAIRE */}
      <section className="py-24 lg:py-32" style={{ background: "linear-gradient(135deg, var(--bg-card) 0%, #0f0f0f 100%)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {[
              { title: "Sirops maison", desc: "Préparés chaque semaine avec des produits frais et locaux. Notre différence fondamentale." },
              { title: "Spiritueux charentais", desc: "Cognac, pineau, fine de champagne : nous célébrons le terroir de Charente-Maritime." },
              { title: "Sur mesure", desc: "Chaque événement a sa carte cocktails unique, créée avec vous selon vos goûts et votre thème." },
            ].map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.15} className="text-center lg:text-left">
                <div className="w-8 h-px mb-6 mx-auto lg:mx-0" style={{ background: "var(--gold)" }} />
                <h3 className="font-display text-2xl font-bold mb-3" style={{ color: "var(--cream)" }}>{item.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--cream-muted)" }}>{item.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-8 py-24 lg:py-32 text-center">
        <AnimatedSection>
          <p className="text-xs tracking-[0.3em] uppercase mb-4" style={{ color: "var(--gold)" }}>Prêt à commencer ?</p>
          <h2 className="font-display text-4xl lg:text-6xl font-bold mb-6" style={{ color: "var(--cream)" }}>Parlons de votre projet</h2>
          <p className="text-base max-w-xl mx-auto mb-10" style={{ color: "var(--cream-muted)" }}>Devis gratuit sous 48h. Nous adaptons chaque prestation à votre événement, votre budget et vos envies.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="/contact" className="btn-gold">Demander un devis gratuit</Link>
            <a href="mailto:contact@lemarylili.fr" className="btn-outline">contact@lemarylili.fr</a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}

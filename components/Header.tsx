"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const nav = [
  { label: "Le Bar", href: "/le-bar" },
  {
    label: "Événements",
    href: "/evenements",
    children: [
      { label: "EVJF & EVG", href: "/evjf" },
      { label: "Mariage", href: "/mariage" },
      { label: "Team Building", href: "/team-building" },
      { label: "Anniversaire", href: "/anniversaire" },
    ],
  },
  { label: "Atelier Cocktail", href: "/atelier-cocktail" },
  { label: "Bar Éphémère", href: "/bar-ephemere" },
  { label: "Guides", href: "/guides" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(8,8,8,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,163,90,0.15)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none">
          <span
            className="font-display text-2xl font-bold tracking-wider"
            style={{ color: "var(--gold)" }}
          >
            LE MARY LILI
          </span>
          <span
            className="text-xs tracking-[0.3em] uppercase"
            style={{ color: "var(--cream-muted)" }}
          >
            Bar à Cocktails · La Rochelle
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setDropdown(item.label)}
                onMouseLeave={() => setDropdown(null)}
              >
                <button
                  className="text-sm tracking-widest uppercase transition-colors"
                  style={{ color: dropdown === item.label ? "var(--gold)" : "var(--cream-muted)" }}
                >
                  {item.label}
                </button>
                <AnimatePresence>
                  {dropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                      className="absolute top-full left-0 mt-3 w-52 py-2"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border)",
                      }}
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-5 py-3 text-sm tracking-wider uppercase transition-colors hover:text-[--gold]"
                          style={{ color: "var(--cream-muted)" }}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm tracking-widest uppercase transition-colors hover:text-[--gold]"
                style={{ color: "var(--cream-muted)" }}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA */}
        <Link href="/contact" className="hidden lg:block btn-gold text-xs">
          Demander un devis
        </Link>

        {/* Mobile burger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="block w-6 h-px"
              style={{ background: "var(--gold)" }}
              animate={{
                rotate: open ? (i === 0 ? 45 : i === 2 ? -45 : 0) : 0,
                y: open ? (i === 0 ? 8 : i === 2 ? -8 : 0) : 0,
                opacity: open && i === 1 ? 0 : 1,
              }}
              transition={{ duration: 0.25 }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
            style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}
          >
            <nav className="px-6 py-6 flex flex-col gap-4">
              {nav.map((item) => (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm tracking-widest uppercase"
                    style={{ color: "var(--gold)" }}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-4 mt-2 flex flex-col gap-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          onClick={() => setOpen(false)}
                          className="text-sm tracking-wider"
                          style={{ color: "var(--cream-muted)" }}
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Link href="/contact" className="btn-gold text-center mt-2">
                Demander un devis
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

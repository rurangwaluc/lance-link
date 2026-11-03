"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
/*
 * Language links intentionally trigger full document navigation.
 * The server root layout derives its language from the request path.
 * Other internal links continue using Next.js Link.
 */


import { getTranslations, getWhatsAppUrl, type Language } from "@/lib/lance-link-i18n";

import Image from "next/image";
import Link from "next/link";
import WhatsAppIcon from "./whatsapp-icon";
import { useEffect, useState } from "react";

export default function SiteHeader({ language }: { language: Language }) {
  const t = getTranslations(language);
  const base = language === "rw" ? "/rw" : "/";
  const links = [
    { label: t.navigation.home, href: base },
    { label: t.navigation.about, href: `${base}#about` },
    { label: t.navigation.services, href: `${base}#services` },
    { label: t.navigation.projects, href: `${base}#projects` },
    { label: t.navigation.contact, href: `${base}#contact` },
  ];
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link
          className="site-header__brand"
          href={base}
          aria-label="Lance Link, home"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/assets/lance-link-logo-header.png"
            alt="Lance Link"
            width={685}
            height={190}
            priority
          />
        </Link>

        <nav className="site-header__desktop-nav" aria-label="Main navigation">
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              aria-current={label === t.navigation.home ? "page" : undefined}
              className={label === t.navigation.home ? "is-active" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <nav className="ll-language" aria-label="Website language">
            <a
              href="/" hrefLang="en" lang="en" aria-label="Switch to English" aria-current={language === "en" ? "true" : undefined} className={language === "en" ? "is-selected" : ""}>
              <span className="ll-language__flag" aria-hidden="true">🇬🇧</span>
              <span>EN</span>
            </a>
            <span className="ll-language__separator" aria-hidden="true">/</span>
            <a
              href="/rw" hrefLang="rw" lang="rw" aria-label="Hindura mu Kinyarwanda" aria-current={language === "rw" ? "true" : undefined} className={language === "rw" ? "is-selected" : ""}>
              <span className="ll-language__flag" aria-hidden="true">🇷🇼</span>
              <span>RW</span>
            </a>
          </nav>
        <Link className="site-header__quote" href={getWhatsAppUrl(language)} target="_blank" rel="noopener noreferrer">
          {t.navigation.quote}
          <WhatsAppIcon />
        </Link>
        </div>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={menuOpen ? (language === "rw" ? "Funga menu" : "Close navigation menu") : (language === "rw" ? "Fungura menu" : "Open navigation menu")}
          aria-controls="lance-link-mobile-navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((value) => !value)}
        >
          {menuOpen ? (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 5l14 14M19 5 5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      <nav
        id="lance-link-mobile-navigation"
        className="site-header__mobile-nav"
        aria-label="Mobile navigation"
        data-open={menuOpen}
        inert={!menuOpen}
      >
        {links.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            aria-current={label === t.navigation.home ? "page" : undefined}
            className={label === t.navigation.home ? "is-active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="site-header__mobile-quote"
          href={getWhatsAppUrl(language)} target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          {t.navigation.quote} <WhatsAppIcon />
        </Link>
      </nav>
    </header>
  );
}

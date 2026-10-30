"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function SiteHeader() {
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
          href="/"
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
              aria-current={label === "Home" ? "page" : undefined}
              className={label === "Home" ? "is-active" : undefined}
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link className="site-header__quote" href="https://wa.me/250788328626?text=Hello%20Lance%20Link%2C%20I%20would%20like%20to%20request%20a%20consultation%20or%20quotation%20for%20an%20engineering%20or%20construction%20project.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%20Thank%20you." target="_blank" rel="noopener noreferrer">
          Request a Quote
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 12h14m-6-6 6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <button
          className="site-header__menu-button"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
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
            aria-current={label === "Home" ? "page" : undefined}
            className={label === "Home" ? "is-active" : undefined}
            onClick={() => setMenuOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          className="site-header__mobile-quote"
          href="https://wa.me/250788328626?text=Hello%20Lance%20Link%2C%20I%20would%20like%20to%20request%20a%20consultation%20or%20quotation%20for%20an%20engineering%20or%20construction%20project.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%20Thank%20you." target="_blank" rel="noopener noreferrer"
          onClick={() => setMenuOpen(false)}
        >
          Request a Quote <span aria-hidden="true">→</span>
        </Link>
      </nav>
    </header>
  );
}

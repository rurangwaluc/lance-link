import { getTranslations, type Language } from "@/lib/lance-link-i18n";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter({ language }: { language: Language }) {
  const t = getTranslations(language);
  const base = language === "rw" ? "/rw" : "/";
  const links = [
    { label: t.navigation.home, href: base },
    { label: t.navigation.about, href: `${base}#about` },
    { label: t.navigation.services, href: `${base}#services` },
    { label: t.navigation.projects, href: `${base}#projects` },
    { label: t.navigation.contact, href: `${base}#contact` },
  ];
  return (
    <footer className="ll-footer">
      <div className="ll-footer__inner">
        <div className="ll-footer__top">
          <div className="ll-footer__brand">
            <Link href={base} aria-label="Lance Link homepage">
              <Image
                src="/assets/lance-link-logo-header.png"
                alt="Lance Link"
                width={685}
                height={190}
              />
            </Link>
            <p>{t.footer.tagline}</p>
          </div>

          <div className="ll-footer__contact">
            <span className="ll-footer__label">{t.footer.contact}</span>
            <a className="ll-footer__phone" href="tel:+250788328626">
              +250 788 328 626
            </a>
            <a href="mailto:info@lancelink.site">
              info@lancelink.site
            </a>
          </div>
        </div>

        <div className="ll-footer__bottom">
          <nav aria-label="Footer navigation">
            {links.map(({ label, href }) => (
              <Link href={href} key={label}>{label}</Link>
            ))}
          </nav>
          <p>© {new Date().getFullYear()} Lance Link. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}

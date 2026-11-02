import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
] as const;

export default function SiteFooter() {
  return (
    <footer className="ll-footer">
      <div className="ll-footer__inner">
        <div className="ll-footer__top">
          <div className="ll-footer__brand">
            <Link href="/" aria-label="Lance Link homepage">
              <Image
                src="/assets/lance-link-logo-header.png"
                alt="Lance Link"
                width={685}
                height={190}
              />
            </Link>
            <p>
              Building tomorrow with precision,
              quality, and integrity.
            </p>
          </div>

          <div className="ll-footer__contact">
            <span className="ll-footer__label">GET IN TOUCH</span>
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
          <p>© {new Date().getFullYear()} Lance Link. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

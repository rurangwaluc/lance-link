import { getTranslations, type Language } from "@/lib/lance-link-i18n";
export default function HomeHero({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section className="ll-hero" aria-labelledby="hero-title">
      <div className="ll-hero__content">
        <p className="ll-hero__eyebrow">
          {t.hero.eyebrow}
        </p>

        <h1 id="hero-title" className="ll-hero__title">
          {t.hero.line1}
          <br />
          {t.hero.line2}
          <br />
          {t.hero.line3} <span>{t.hero.highlight}</span>
        </h1>

        <p className="ll-hero__description">{t.hero.description}</p>

        <div className="ll-hero__actions">
          <a href="#projects" className="ll-hero__button ll-hero__button--primary">
            {t.hero.projects} <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="ll-hero__button ll-hero__button--secondary">
            {t.hero.contact}
          </a>
        </div>
      </div>

      <div
        className="ll-hero__visual"
        role="img"
        aria-label={language === "rw" ? "Ishusho y’inyubako igezweho" : "Illustrative modern building from the approved Lance Link design reference"}
      />
    </section>
  );
}

import { getTranslations, type Language } from "@/lib/lance-link-i18n";
export default function HomeHero({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section className="ll-hero" aria-labelledby="hero-title">
      <div className="ll-hero__content">
        <h1 id="hero-title" className="ll-hero__title">
          {t.hero.line1}
          <br />
          {t.hero.line2}
          <br />
          {t.hero.line3} <span>{t.hero.highlight}</span>
        </h1>

      </div>

      <div
        className="ll-hero__visual"
        role="img"
        aria-label={language === "rw" ? "Ishusho y’inyubako igezweho" : "Illustrative modern building from the approved Lance Link design reference"}
      />
    </section>
  );
}

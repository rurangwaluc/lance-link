import { getTranslations, type Language } from "@/lib/lance-link-i18n";
import Image from "next/image";

export default function HomeAbout({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section className="ll-about" id="about"
      aria-labelledby="ll-about-heading">
      <div className="ll-about__inner">
        <div className="ll-about__visual">
          <div className="ll-about__frame">
            <Image
              src="/assets/lance-link-about-photo.png"
              alt={language === "rw" ? "Ishusho y’inyubako igezweho" : "Illustrative contemporary building"}
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 900px) 42vw, 470px"
              className="ll-about__image"
            />
          </div>
        </div>

        <div className="ll-about__copy">
          <h2 id="ll-about-heading">{t.about.title}</h2>
          <div className="ll-about__accent" aria-hidden="true" />
          <p>{t.about.description}</p>
          <a href="#experience" className="ll-about__link">
            {t.about.more} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

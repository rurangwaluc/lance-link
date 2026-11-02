import { getTranslations, type Language } from "@/lib/lance-link-i18n";
import Image from "next/image";

export default function HomeExperience({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section
      className="ll-experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="ll-experience__inner">
        <div className="ll-experience__map">
          <Image
            src="/assets/rwanda-provinces.svg"
            alt={language === "rw" ? "Ikarita y’intara z’u Rwanda" : "Map showing the provinces of Rwanda"}
            width={682}
            height={598}
            className="ll-experience__map-image"
          />
          <div className="ll-experience__markers" aria-hidden="true">
            {[
              { name: t.experience.northern, x: 51, y: 27 },
              { name: t.experience.western, x: 25, y: 47 },
              { name: t.experience.kigali, x: 54, y: 48 },
              { name: t.experience.eastern, x: 75, y: 46 },
              { name: t.experience.southern, x: 39, y: 75 },
            ].map((marker) => (
              <span
                key={marker.name}
                className="ll-experience__marker"
                style={{
                  left: `${marker.x}%`,
                  top: `${marker.y}%`,
                }}
              >
                <svg viewBox="0 0 24 30" aria-hidden="true">
                  <path
                    d="M12 1C5.9 1 1 5.9 1 12c0 8 11 17 11 17s11-9 11-17C23 5.9 18.1 1 12 1Z"
                    fill="#E9AD27"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="4" fill="#ffffff" />
                </svg>
                <span>{marker.name}</span>
              </span>
            ))}
          </div>
        </div>

        <div className="ll-experience__content">
          <p className="ll-experience__eyebrow">
            {t.experience.eyebrow}
          </p>

          <h2 id="experience-heading">
            {t.experience.completed}
          </h2>

          <div
            className="ll-experience__accent"
            aria-hidden="true"
          />

          <p>{t.experience.description}</p>

          <a href="#about">
            {t.experience.about}
          </a>
        </div>
      </div>
    </section>
  );
}

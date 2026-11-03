import { getTranslations, type Language } from "@/lib/lance-link-i18n";
import Image from "next/image";

export default function HomeProjects({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section id="projects" className="ll-projects"
      aria-labelledby="projects-heading">
      <div className="ll-projects__inner">
        <div className="ll-projects__heading">
          <h2 id="projects-heading">{t.projects.title}</h2>
        </div>

        <div className="ll-projects__grid">
          {t.projects.items.map(([title, category], index) => {
            const number = index + 1;
            const src = `/assets/lance-link-project-preview-${number}.jpg`;
            return (
              <article className="ll-projects__card" key={number}>
                <div className="ll-projects__photo">
                  <Image src={src} alt={language === "rw" ? `Ishusho: ${category}` : `${category} illustration`}
                    fill sizes="(max-width: 768px) 85vw, 33vw" />
                  <div className="ll-projects__overlay">

                    <h3>{title}</h3>
                    <a href={src} target="_blank"
                      rel="noopener noreferrer">
                      {t.projects.preview} ↗
                    </a>
                  </div>
                </div>
                <div className="ll-projects__touch">

                  <h3>{title}</h3>
                  <a href={src} target="_blank"
                    rel="noopener noreferrer">
                    {t.projects.preview} ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

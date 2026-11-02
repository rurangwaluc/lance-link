import { getTranslations, type Language } from "@/lib/lance-link-i18n";
export default function HomeWhyChoose({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section
      className="ll-why"
      id="why-choose-us"
      aria-labelledby="ll-why-title"
    >
      <div className="ll-why__inner">
        <div className="ll-why__intro">
          <h2 id="ll-why-title">{t.why.title}</h2>
          <span className="ll-why__accent" aria-hidden="true" />
        </div>

        <div className="ll-why__reasons">
          {t.why.items.map((reason) => (
            <article className="ll-why__reason" key={reason.title}>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

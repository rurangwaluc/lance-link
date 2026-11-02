import { getTranslations, getWhatsAppUrl, type Language } from "@/lib/lance-link-i18n";
import WhatsAppIcon from "./whatsapp-icon";

export default function HomeContact({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section
      id="contact"
      className="ll-contact"
      aria-labelledby="contact-heading"
    >
      <div className="ll-contact__inner">
        <div className="ll-contact__copy">
          <h2 id="contact-heading">
            {t.contact.title}
          </h2>
          <p>
            {t.contact.description}
          </p>
        </div>

        <a
          className="ll-contact__button"
          href={getWhatsAppUrl(language)} target="_blank" rel="noopener noreferrer"
          aria-label={t.navigation.quote + " on WhatsApp"}
        >
          {t.navigation.quote}
          <WhatsAppIcon />
        </a>
      </div>
    </section>
  );
}

import WhatsAppIcon from "./whatsapp-icon";

export default function HomeContact() {
  return (
    <section
      id="contact"
      className="ll-contact"
      aria-labelledby="contact-heading"
    >
      <div className="ll-contact__inner">
        <div className="ll-contact__copy">
          <h2 id="contact-heading">
            Let&apos;s Build Your Next Project
          </h2>
          <p>
            Contact our team for a consultation and a tailored proposal.
          </p>
        </div>

        <a
          className="ll-contact__button"
          href="https://wa.me/250788328626?text=Hello%20Lance%20Link%2C%20I%20would%20like%20to%20request%20a%20consultation%20or%20quotation%20for%20an%20engineering%20or%20construction%20project.%20Please%20let%20me%20know%20how%20we%20can%20proceed.%20Thank%20you." target="_blank" rel="noopener noreferrer"
          aria-label="Request a quote on WhatsApp"
        >
          Request a Quote
          <WhatsAppIcon />
        </a>
      </div>
    </section>
  );
}

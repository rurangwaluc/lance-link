import Image from "next/image";

export default function HomeAbout() {
  return (
    <section className="ll-about" id="about"
      aria-labelledby="ll-about-heading">
      <div className="ll-about__inner">
        <div className="ll-about__visual">
          <div className="ll-about__frame">
            <Image
              src="/assets/lance-link-about-photo.png"
              alt="Illustrative contemporary building"
              fill
              sizes="(max-width: 640px) 90vw, (max-width: 900px) 42vw, 470px"
              className="ll-about__image"
            />
          </div>
        </div>

        <div className="ll-about__copy">
          <h2 id="ll-about-heading">About Lance Link</h2>
          <div className="ll-about__accent" aria-hidden="true" />
          <p>
            We are a Rwanda-based engineering
            company delivering end-to-end design and engineering
            solutions with a focus on quality, innovation and
            client satisfaction.
          </p>
          <a href="/about" className="ll-about__link">
            Learn More <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HomeHero() {
  return (
    <section className="ll-hero" aria-labelledby="hero-title">
      <div className="ll-hero__content">
        <p className="ll-hero__eyebrow">
          Building Tomorrow
        </p>

        <h1 id="hero-title" className="ll-hero__title">
          Engineering
          <br />
          Solutions
          <br />
          You Can <span>Trust.</span>
        </h1>

        <p className="ll-hero__description">
          Architectural design, engineering,
          supervision and renovation services
          for residential and commercial
          projects in Rwanda.
        </p>

        <div className="ll-hero__actions">
          <a href="#projects" className="ll-hero__button ll-hero__button--primary">
            Our Projects <span aria-hidden="true">→</span>
          </a>
          <a href="#contact" className="ll-hero__button ll-hero__button--secondary">
            Get in Touch
          </a>
        </div>
      </div>

      <div
        className="ll-hero__visual"
        role="img"
        aria-label="Illustrative modern building from the approved Lance Link design reference"
      />
    </section>
  );
}

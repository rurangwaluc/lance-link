const reasons = [
  {
    title: "Engineering Expertise",
    description:
      "Architectural, structural, geotechnical, and MEP solutions for diverse project needs.",
  },
  {
    title: "Integrated Project Delivery",
    description:
      "Coordinated design, construction, management, and supervision services.",
  },
  {
    title: "Commitment to Quality",
    description:
      "A focus on thoughtful planning, technical precision, and reliable project execution.",
  },
  {
    title: "Client-Focused Approach",
    description:
      "Clear communication and solutions tailored to each project's requirements.",
  },
] as const;

export default function HomeWhyChoose() {
  return (
    <section
      className="ll-why"
      id="why-choose-us"
      aria-labelledby="ll-why-title"
    >
      <div className="ll-why__inner">
        <div className="ll-why__intro">
          <h2 id="ll-why-title">Why Choose Us?</h2>
          <span className="ll-why__accent" aria-hidden="true" />
        </div>

        <div className="ll-why__reasons">
          {reasons.map((reason) => (
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

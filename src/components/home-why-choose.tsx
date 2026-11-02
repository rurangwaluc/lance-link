const reasons = [
  {
    title: "Engineering Expertise",
    description:
      "We bring together technical knowledge and innovative engineering solutions to deliver safe, functional, and sustainable building projects.",
  },
  {
    title: "Integrated Project Delivery",
    description:
      "From initial design and planning to construction and final handover, we coordinate every stage to ensure seamless project execution.",
  },
  {
    title: "Commitment to Quality",
    description:
      "We uphold high standards through quality materials, precise workmanship, and strict attention to technical specifications at every stage.",
  },
  {
    title: "Client-Focused Approach",
    description:
      "We put our clients first by understanding their needs, providing practical solutions, and maintaining transparency throughout every project.",
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

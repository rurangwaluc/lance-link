import Image from "next/image";

const projects = [
  ["Residential Design Example", "Residential Architecture", 1],
  ["Commercial Design Example", "Commercial Architecture", 2],
  ["Apartment Design Example", "Residential Development", 3],
  ["Villa Design Example", "Residential Architecture", 4],
  ["Office Design Example", "Commercial Development", 5],
  ["Renovation Example", "Renovation & Remodeling", 6],
] as const;

export default function HomeProjects() {
  return (
    <section id="projects" className="ll-projects"
      aria-labelledby="projects-heading">
      <div className="ll-projects__inner">
        <div className="ll-projects__heading">
          <h2 id="projects-heading">Featured Projects</h2>
          <span>View All Projects →</span>
        </div>

        <div className="ll-projects__grid">
          {projects.map(([title, category, number]) => {
            const src = `/assets/lance-link-project-preview-${number}.jpg`;
            return (
              <article className="ll-projects__card" key={number}>
                <div className="ll-projects__photo">
                  <Image src={src} alt={`${category} illustration`}
                    fill sizes="(max-width: 768px) 85vw, 33vw" />
                  <div className="ll-projects__overlay">
                    <p>{category}</p>
                    <h3>{title}</h3>
                    <a href={src} target="_blank"
                      rel="noopener noreferrer">
                      View Preview ↗
                    </a>
                  </div>
                </div>
                <div className="ll-projects__touch">
                  <p>{category}</p>
                  <h3>{title}</h3>
                  <a href={src} target="_blank"
                    rel="noopener noreferrer">
                    View Preview ↗
                  </a>
                </div>
              </article>
            );
          })}
        </div>
        <p className="ll-projects__notice">
          Illustrative images only; these are not verified Lance Link projects.
        </p>
      </div>
    </section>
  );
}

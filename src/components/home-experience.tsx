import Image from "next/image";

export default function HomeExperience() {
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
            alt="Map showing the provinces of Rwanda"
            width={682}
            height={598}
            className="ll-experience__map-image"
          />
          <div className="ll-experience__markers" aria-hidden="true">
            {[
              { name: "Northern", x: 51, y: 27 },
              { name: "Western", x: 25, y: 47 },
              { name: "Kigali City", x: 54, y: 48 },
              { name: "Eastern", x: 75, y: 46 },
              { name: "Southern", x: 39, y: 75 },
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
            Our Experience
          </p>

          <h2 id="experience-heading">
            30+ Completed Projects
          </h2>

          <div
            className="ll-experience__accent"
            aria-hidden="true"
          />

          <p>
            Discover Lance Link&apos;s engineering, project management,
            and project management services.
          </p>

          <a href="#about">
            About Lance Link
          </a>
        </div>
      </div>
    </section>
  );
}

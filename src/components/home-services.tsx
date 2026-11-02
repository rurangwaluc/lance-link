import { getTranslations, type Language } from "@/lib/lance-link-i18n";
import type { ReactNode } from "react";

type ServiceKind =
  | "design"
  | "building"
  | "supervision"
  | "geotechnical"
  | "mep";

const services: {
  title: number;
  icon: ServiceKind;
}[] = [
  {
    title: 0,
    icon: "design",
  },
  {
    title: 1,
    icon: "supervision",
  },
  {
    title: 2,
    icon: "building",
  },
  {
    title: 3,
    icon: "geotechnical",
  },
  {
    title: 4,
    icon: "mep",
  },
];

function ServiceIcon({ kind }: { kind: ServiceKind }) {
  const artwork: Record<ServiceKind, ReactNode> = {
    design: (
      <>
        <path d="M5 4h12a2 2 0 0 1 2 2v11H5a2 2 0 0 0 0 4h14" />
        <path d="M5 4a2 2 0 0 0-2 2v13" />
        <path className="gold" d="m8 12 4-4 4 4M9 12v4h6v-4" />
        <path d="m15 18 6-6 2 2-6 6-3 1z" />
      </>
    ),
    building: (
      <>
        <path d="M3 21V10l7-4v15M10 21V4l7-2v19M17 21V9l4 2v10M2 21h20" />
        <path className="gold"
          d="M6 12v2M6 17v2M13 7v2M13 12v2M13 17v2M19 13v2M19 18v2" />
      </>
    ),
    supervision: (
      <>
        <path className="gold"
          d="M4 13v-2a8 8 0 0 1 16 0v2M8 6V4M16 6V4" />
        <path d="M2 13h20M8 17a4 4 0 0 0 8 0" />
        <path d="M7 17 12 22l5-5M12 22v1" />
      </>
    ),
    geotechnical: (
      <>
        <path d="M3 8h18M3 13h18M3 18h18" />
        <path className="gold"
          d="M7 5v16M7 5l3 3-3 3M16 5v16M13 16l3 3 3-3" />
        <path d="M3 8l4 2 5-2 4 2 5-2" />
      </>
    ),
    mep: (
      <>
        <path d="M3 5h8v7H3zM15 5h6v7h-6z" />
        <path d="M7 12v8h10v-8" />
        <path className="gold"
          d="m13 3-3 7h4l-3 7M2 16h5M17 16h5" />
      </>
    ),
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.65"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {artwork[kind]}
    </svg>
  );
}

export default function HomeServices({ language }: { language: Language }) {
  const t = getTranslations(language);
  return (
    <section
      className="ll-services"
      id="services"
      aria-labelledby="ll-services-title"
    >
      <div className="ll-services__inner">
        <div className="ll-services__intro">
          <p className="ll-services__eyebrow">
            <span aria-hidden="true" />
            {t.services.eyebrow}
          </p>

          <h2 id="ll-services-title">
            {language === "en" ? <>Our <span>Services</span></> : t.services.title}
          </h2>

          <div className="ll-services__underline" aria-hidden="true" />


        </div>

        <div className="ll-services__grid">
          {services.map((service) => (
            <article
              className="ll-services__card"
              key={service.icon}
            >
              <div className="ll-services__icon">
                <ServiceIcon kind={service.icon} />
              </div>

              <h3>{t.services.items[service.title]}</h3>

              <span
                className="ll-services__card-line"
                aria-hidden="true"
              />
              <svg
                className="ll-services__blueprint"
                viewBox="0 0 160 100"
                fill="none"
                aria-hidden="true"
              >
                <path d="M5 96V55l38-21 36 21v41M43 34V10l50-6 50 23v69M79 55l38-20 38 20v41M20 67h13v19H20zM50 60h12v25H50zM94 30h13v13H94zM117 33h13v13h-13zM93 57h14v29H93zM119 57h14v29h-14zM0 96h160" />
                <path d="M5 55l38 19 36-19M43 10l50 22 50-5M79 55l38 18 38-18" />
              </svg>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

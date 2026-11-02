import type { Language } from "@/lib/lance-link-i18n";
import HomeHero from "./home-hero";
import HomeAbout from "./home-about";
import HomeExperience from "./home-experience";
import HomeServices from "./home-services";
import HomeWhyChoose from "./home-why-choose";
import HomeProjects from "./home-projects";
import HomeContact from "./home-contact";

export default function HomeContent({ language }: { language: Language }) {
  return (
    <main>
      <HomeHero language={language} />
      <HomeAbout language={language} />
      <HomeExperience language={language} />
      <HomeServices language={language} />
      <HomeWhyChoose language={language} />
      <HomeProjects language={language} />
      <HomeContact language={language} />
    </main>
  );
}

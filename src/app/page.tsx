import HomeHero from "@/components/home-hero";
import HomeAbout from "@/components/home-about";
import HomeExperience from "@/components/home-experience";
import HomeServices from "@/components/home-services";
import HomeWhyChoose from "@/components/home-why-choose";
import HomeProjects from "@/components/home-projects";
import HomeContact from "@/components/home-contact";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeExperience />
      <HomeServices />
      <HomeWhyChoose />
      <HomeProjects />
      <HomeContact />
    </main>
  );
}

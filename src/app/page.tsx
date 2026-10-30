import HomeHero from "@/components/home-hero";
import HomeAbout from "@/components/home-about";
import HomeServices from "@/components/home-services";
import HomeProjects from "@/components/home-projects";
import HomeContact from "@/components/home-contact";

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeAbout />
      <HomeServices />
      <HomeProjects />
      <HomeContact />
    </main>
  );
}

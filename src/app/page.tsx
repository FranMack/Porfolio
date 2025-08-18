import { AboutMe } from "./home-sections/AboutMe";
import { Contact } from "./home-sections/Contact";
import { Hero } from "./home-sections/Hero";
import { Projects } from "./home-sections/Projects";
import { Technologies } from "./home-sections/Technologies";


export default function Home() {
  return (
    <main className="bg-bgColor">
      <Hero />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </main>
  );
}

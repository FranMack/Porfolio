import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Hero } from "./pages/Hero";
import { Projects } from "./pages/Projects";
import { Technologies } from "./pages/Technologies";


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

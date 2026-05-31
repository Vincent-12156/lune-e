import HomeHero from "../sections/HomeHero";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import About from "../sections/About";
import Contact from "../sections/Contact";

export default function Home() {
  return (
    <>
      <HomeHero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
}

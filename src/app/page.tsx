import Image from "next/image";
import AboutSection from "./components/homepage/about";
import Blog from "./components/homepage/blog";
import ContactSection from "./components/homepage/contact";
import Education from "./components/homepage/education";
import Experience from "./components/homepage/experience";
import HeroSection from "./components/homepage/hero-section";
import Projects from "./components/homepage/projects";
import Skills from "./components/homepage/skills";
import { personalData } from "../../utils/data/personal-data";


export default function Home() {
  return (
    <div>
      {/* <h1 className="text-3xl font-bold underline">Hello, Next.js!</h1> */}
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      {/* <Blog blogs={blogs} /> */}
      <ContactSection />
    </div>
  );
}

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skill/Skill"; 
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <main className="h-fit bg-[#FFF8FA]"> 
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>  
      <Experience/>
      <Project/>
      <Certificate/>
      <Contact/>
    </main>
  );
}

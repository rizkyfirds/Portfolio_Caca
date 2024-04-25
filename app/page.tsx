"use client";
import { useState, useEffect } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Experience from "./components/experience/Experience";
import Project from "./components/project/Project";
import Certificate from "./components/certificate/Certificate";
import Contact from "./components/contact/Contact";

export default function Home() {
  const [navbarStatus, setNavbarStatus] = useState<string>("");

  useEffect(() => {
    const element = document.getElementById(navbarStatus);
    console.log("navbarStatus ", navbarStatus);
    console.log("elemntt ", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarStatus("")
    }
  }, [navbarStatus]);
  return (
    <main className="h-fit bg-[#FFF8FA] text-[#373737]">
      <Navbar setNavbarStat={setNavbarStatus} />
      <Hero />
      <div id="About">
        <About />
      </div>
      <div id="Skills">
        <Skill />
      </div>
      <div id="Experience">
        <Experience />
      </div>
      <div id="Project">
        <Project />
      </div>
      <div id="Certificate">
        <Certificate />
      </div>
      <div id="Contact">
        <Contact />
      </div>
    </main>
  );
}

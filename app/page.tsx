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
import { BiSolidToTop } from "react-icons/bi";

export default function Home() {
  const [navbarStatus, setNavbarStatus] = useState<string>("");
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY === 0 ? false : true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const element = document.getElementById(navbarStatus);
    
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNavbarStatus("")
    }
  }, [navbarStatus]);

  const handleMoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      {showScrollButton && (
          <button
            className="fixed bottom-8 right-8 z-10 bg-[#FD7092] rounded-full shadow-xl p-3 md:p-4 text-white animate-bounce"
            onClick={handleMoveToTop}
          >
            <BiSolidToTop className="text-xl " />
          </button>
        )}
    </main>
  );
}

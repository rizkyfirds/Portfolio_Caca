import React from "react";
import Image from "next/image";
import AboutMe from "../../assets/AboutMe.svg";

const About = () => {
  return (
    <div className="py-[80px] w-full text-[40px] grid gap-y-[64px] font-medium text-justify bg-white px-[156px]">
      <p>
        🌈 Hello, I'm Salsa, a recent graduate from the Bachelor of Informatics
        program at 🎓 Telkom University. I have a strong interest in ❤️ data
        analysis. My skills include statistical analysis, data visualization,
        and proficiency in programming languages such as Python and SQL.
      </p>
      <p className="relative">
        I enjoy applying my creativity to create engaging and informative 📊
        data visualizations. From the experiences and knowledge I gained during
        📗my studies, I am confident that pursuing a career as a 👩‍🏫 data analyst
        is the right path for me. I am eager to continue developing my skills
        and knowledge in this field, and to make a positive contribution in
        tackling real-world data challenges in the future.
        <Image src={AboutMe} alt="About Me and Experience" className=" absolute z-10 -bottom-14 -right-14"/>
      </p>
    </div>
  );
};

export default About;

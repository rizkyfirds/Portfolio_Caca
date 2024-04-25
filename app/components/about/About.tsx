import React from "react";
import Image from "next/image";
import AboutMe from "../../assets/AboutMe.svg";

const About = () => {
  return (
    <div className="py-[24px] px-[15px] lg:px-[150px] lg:py-[80px] w-full text-[15px] lg:text-[40px] grid gap-y-[22px] lg:gap-y-[64px] font-medium text-justify bg-white">
      <p>
        🌈 Hello, I am Salsa, a recent graduate from the Bachelor of Informatics
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
        <Image src={AboutMe} alt="About Me and Experience" className="w-[50px] lg:w-[120px] absolute z-10 -bottom-6 -right-4 lg:-bottom-14 lg:-right-14"/>
      </p>
    </div>
  );
};

export default About;

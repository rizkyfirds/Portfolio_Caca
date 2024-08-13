import React from "react";
import Image from "next/image";
import AboutMe from "../../assets/AboutMe.svg";

const About = () => {
  return (
    <div className="flex h-fit w-full py-[24px] lg:py-[80px] w-full bg-white">
      <div className="h-fit w-4/5 lg:w-3/5 mx-auto grid gap-y-[22px] lg:gap-y-[40px] text-[15px] lg:text-[22px]  font-medium text-justify text-[#373737]">
        <p>
          🌈 Hello, I am Salsa, a fresh graduate from the Bachelor of
          Informatics program at 🎓 Telkom University. I have a strong interest
          in ❤️ data analysis. My skills include statistical analysis, data
          visualization, and proficiency in programming languages such as Python
          and SQL.
        </p>
        <p className="relative">
          I enjoy applying my creativity to create engaging and informative 📊
          data visualizations. From the experiences and knowledge I gained
          during 📗my studies, I am confident that pursuing a career as a 👩‍🏫
          data analyst is the right path for me. I am eager to continue
          developing my skills and knowledge in this field, and to make a
          positive contribution in tackling real-world data challenges in the
          future.
          <Image
            src={AboutMe}
            alt="About Me and Experience"
            className="w-[50px] lg:w-[100px] absolute z-10 -bottom-6 -right-4 lg:-bottom-12 lg:-right-14"
          />
        </p>
      </div>
    </div>
  );
};

export default About;

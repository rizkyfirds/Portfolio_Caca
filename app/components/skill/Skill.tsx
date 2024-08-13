import React from "react";
import HardSkill from "./HardSkill";
const Skill = () => {
  return (
    <div className="py-[24px] px-[25px] lg:px-[156px] lg:py-[80px] flex justify-center gap-x-[17px] lg:gap-x-[27px]">
      <div className="bg-pinkImgBg bg-pinkImg w-1/2 lg:w-[549px] p-[15px] lg:p-[40px] rounded-2xl font-bold">
        <p className="text-[20px] lg:text-[30px] mb-[12px] lg:mb-[20px]">Soft Skills</p>
        <div className="text-[12px] lg:text-[20px] grid gap-y-[6px] lg:gap-y-[10px]">
          <p>💬 Communicative</p>
          <p>🧩 Problem Solving</p>
          <p>🤝 Teamwork</p>
          <p>🕰️ Time Management</p>
          <p>🎨 Creative</p>
        </div>
      </div>
      <div className="bg-pinkImgBg bg-pinkImg w-1/2 lg:w-[549px] p-[15px] lg:p-[40px] rounded-2xl">
        <p className="text-[20px] lg:text-[30px] mb-[12px] lg:mb-[20px] font-bold">Hard Skills</p>
        <div className="grid gap-y-[10px]">
          <HardSkill
            skill="🗃️ Databasae"
            desc="Retrieving Data, Join Tables, Common Table Expressions"
          />
          <HardSkill
            skill="📊 Data Analytics"
            desc="Data cleaning, EDA, Creating Dashboard Visualization"
          />
          <HardSkill
            skill="🤖 Machine Learning"
            desc="Clustering, Prediction, Classification"
          />
        </div>
      </div>
    </div>
  );
};

export default Skill;

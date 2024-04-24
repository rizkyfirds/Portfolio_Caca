import React from "react";
import HardSkill from "./HardSkill";
const Skill = () => {
  return (
    <div className="py-[24px] px-[15px] lg:px-[156px] lg:py-[80px] flex justify-center gap-x-[17px] lg:gap-x-[27px]">
      <div className="bg-[#FFE5EC] w-1/2 lg:w-[549px] p-[15px] lg:p-[40px] rounded-2xl font-bold">
        <p className="text-[20px] lg:text-[40px] mb-[12px] lg:mb-[24px]">Soft Skills</p>
        <div className="text-[12px] lg:text-[24px] grid gap-y-[6px] lg:gap-y-[12px]">
          <p>🧩 Problem Solving</p>
          <p>🤝 Teamwork</p>
          <p>💬 Communicative</p>
          <p>🤔 Critical Thinking</p>
          <p>🎨 Creative</p>
        </div>
      </div>
      <div className="bg-[#FFE5EC] w-1/2 lg:w-[549px] p-[15px] lg:p-[40px] rounded-2xl">
        <p className="text-[20px] lg:text-[40px] mb-[12px] lg:mb-[24px] font-bold">Hard Skills</p>
        <div className="grid gap-y-[12px]">
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

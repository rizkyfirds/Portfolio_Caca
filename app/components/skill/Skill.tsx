import React from "react";
import HardSkill from "./HardSkill";
const Skill = () => {
  return (
    <div className="px-[156px] py-[80px] flex justify-center gap-x-[27px]">
      <div className="bg-[#FFE5EC] w-[549px] p-[40px] rounded-2xl font-bold">
        <p className="text-[40px] mb-[24px]">Soft Skills</p>
        <div className="text-[24px] grid gap-y-[12px]">
          <p>🧩 Problem Solving</p>
          <p>🤝 Teamwork</p>
          <p>💬 Communicative</p>
          <p>🤔 Critical Thinking</p>
          <p>🎨 Creative</p>
        </div>
      </div>
      <div className="bg-[#FFE5EC] w-[549px] p-[40px] rounded-2xl">
        <p className="text-[40px] mb-[24px] font-bold">Hard Skills</p>
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

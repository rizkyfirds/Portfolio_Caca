import React from "react";
import DescExperience from "./DescExperience";
const Experience = () => {
  return (
    <div className="py-[24px] px-[15px] lg:px-[156px] lg:py-[80px] bg-white">
      <p className="w-full text-[#FD7092] font-bold text-[47px] lg:text-7xl text-center mb-[32px] lg:mb-[64px]">
        Experience
      </p>
      <DescExperience startDate="Aug 2023" endDate="Dec 2023" company="MSIB Batch 5 at LLDIKTI IV" position="Student Data Processor" desc={["Processing student data such as Tracer Study, PKM, and KIP.","Creating machine learning with Python to merge excel files.", "Developing Tracer Study and PKM visualization dashboard with Google Looker Studio and Spreadsheet"]}/>
      <DescExperience startDate="Jul 2023" endDate="Oct 2023" company="Research Center of Human Centric Engineering Telkom University" position="Programmer" desc={["Creating visualization graphs from Tracer Study Data using python.","Designing a web interface.", "Creating a web dashboard using streamlit."]}/>
      <DescExperience startDate="Feb 2023" endDate="Jun 2023" company="MSIB Batch 4 Startup Campus - Data Science Track" position="Participant Study Independent" desc={["Modeled machine failure classification and failure time prediction, and analyzed reports in Power BI.","Created a heart disease classification model with Python, and analysis report using Google Looker Studio."]}/>
      <DescExperience startDate="Dec 2022" endDate="Present" company="Sweetpink_by.ca" position="Owner" desc={["Selling bead accessories both online and offline."]}/>
    </div>
  );
};

export default Experience;

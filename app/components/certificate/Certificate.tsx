import React from "react";
import Image from "next/image";
import Certif_MSIB5 from "../../assets/Certif_MSIB 5.jpg";
import Certif_MSIB4 from "../../assets/Certif_Startup Campus.jpg";
import Certif_DataScienceFoundation from "../../assets/Certif_DataScienceFoundation.jpg";
import Certif_ExcelDataPreparation from "../../assets/Certif_ExcelDataPreparation.jpg";
import Certif_NgulikExcelDashboard from "../../assets/Certif_NgulikExcelDashboard.jpg";
import Certif_NgulikExcelPivotTable from "../../assets/Certif_NgulikExcelPivotTable.jpg";
import CertifImg from "./CertifImg";

const Certificate = () => {
  return (
    <div className="py-[80px] px-[156px] bg-white">
      <p className="w-full text-[#FD7092] font-bold text-[148px] text-center mb-[64px]">
        Certificate
      </p>
      <div className="flex justify-center gap-x-[24px] mb-[64px]">
        <CertifImg imgTitle="Certif_MSIB5" altText="Certificate MSIB 5" />
        <CertifImg imgTitle="Certif_MSIB4" altText="Certificate MSIB 4" />
      </div>
      <div className="flex justify-center gap-x-[24px] mb-[64px]">
        <CertifImg
          imgTitle="Certif_DataScienceFoundation"
          altText="Certificate Data Science Foundation"
        />
        <CertifImg
          imgTitle="Certif_ExcelDataPreparation"
          altText="Certificate Excel Data Preparation"
        />
      </div>
      <div className="flex justify-center gap-x-[24px] mb-[64px]">
        <CertifImg
          imgTitle="Certif_NgulikExcelDashboard"
          altText="Certificate Ngulik Excel Dashboard"
        />
        <CertifImg
          imgTitle="Certif_NgulikExcelPivotTable"
          altText="Certificate Ngulik Excel Pivot Table"
        />
      </div>
      <div className="flex justify-center gap-x-[24px] mb-[64px]">
        <CertifImg imgTitle="Certif_Humic" altText="Certificate RC Humic" />
      </div>
    </div>
  );
};

export default Certificate;

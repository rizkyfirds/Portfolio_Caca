import React from "react";
import CertifImg from "./CertifImg";

const Certificate = () => {
  return (
    <div className="py-[24px] px-[15px] lg:px-[156px] lg:py-[80px] bg-white">
      <p className="w-full text-[#FD7092] font-bold text-[47px] lg:text-[148px] text-center mb-[32px] lg:mb-[64px]">
        Certificate
      </p>
      <div className="flex justify-center gap-x-[14px] lg:gap-x-[24px] mb-[32px] lg:mb-[64px]">
        <CertifImg imgTitle="Certif_MSIB5" altText="Certificate MSIB 5" />
        <CertifImg imgTitle="Certif_MSIB4" altText="Certificate MSIB 4" />
      </div>
      <div className="flex justify-center gap-x-[24px] mb-[32px] lg:mb-[64px]">
        <CertifImg
          imgTitle="Certif_DataScienceFoundation"
          altText="Certificate Data Science Foundation"
        />
        <CertifImg
          imgTitle="Certif_ExcelDataPreparation"
          altText="Certificate Excel Data Preparation"
        />
      </div>
      <div className="flex justify-center gap-x-[24px] mb-[32px] lg:mb-[64px]">
        <CertifImg
          imgTitle="Certif_NgulikExcelDashboard"
          altText="Certificate Ngulik Excel Dashboard"
        />
        <CertifImg
          imgTitle="Certif_NgulikExcelPivotTable"
          altText="Certificate Ngulik Excel Pivot Table"
        />
      </div>
      <div className="flex justify-center gap-x-[24px] mb-[32px] lg:mb-[64px]">
        <CertifImg imgTitle="Certif_Humic" altText="Certificate RC Humic" />
      </div>
    </div>
  );
};

export default Certificate;

import React from "react";
import CertifImg from "./CertifImg";

const Certificate = () => {
  return (
    <div className="py-[24px] lg:py-[80px] bg-white">
      <div className="w-5/6 lg:w-3/5 mx-auto">
        <p className="w-full text-[#FD7092] font-bold text-[47px] lg:text-7xl text-center mb-[32px] lg:mb-[44px]">
          Certificate
        </p>
        <div className="flex lg:flex-col gap-x-[18px] overflow-x-auto">
            <div className="flex lg:justify-center gap-x-[18px] lg:gap-x-[24px] mb-[16px] lg:mb-[44px]">
              <CertifImg imgTitle="Certif_MSIB5" altText="Certificate MSIB 5" />
              <CertifImg imgTitle="Certif_MSIB4" altText="Certificate MSIB 4" />
            </div>
            <div className="flex lg:justify-center gap-x-[18px] lg:gap-x-[24px] mb-[16px] lg:mb-[44px]">
              <CertifImg
                imgTitle="Certif_DataScienceFoundation"
                altText="Certificate Data Science Foundation"
                />
              <CertifImg
                imgTitle="Certif_ExcelDataPreparation"
                altText="Certificate Excel Data Preparation"
                />
            </div>
            <div className="flex lg:justify-center gap-x-[18px] lg:gap-x-[24px] mb-[16px] lg:mb-[44px]">
              <CertifImg
                imgTitle="Certif_NgulikExcelDashboard"
                altText="Certificate Ngulik Excel Dashboard"
                />
              <CertifImg
                imgTitle="Certif_NgulikExcelPivotTable"
                altText="Certificate Ngulik Excel Pivot Table"
                />
            </div>
            <div className="flex lg:justify-center gap-x-[18px] lg:gap-x-[24px] mb-[16px] lg:mb-[44px]">
              <CertifImg imgTitle="Certif_Humic" altText="Certificate RC Humic" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default Certificate;

import React from "react";
import Image from "next/image";
import Certif_MSIB5 from "../../assets/Certif_MSIB 5.jpg";
import Certif_MSIB4 from "../../assets/Certif_Startup Campus.jpg";
import Certif_DataScienceFoundation from "../../assets/Certif_DataScienceFoundation.jpg";
import Certif_ExcelDataPreparation from "../../assets/Certif_ExcelDataPreparation.jpg";
import Certif_NgulikExcelDashboard from "../../assets/Certif_NgulikExcelDashboard.jpg";
import Certif_NgulikExcelPivotTable from "../../assets/Certif_NgulikExcelPivotTable.jpg";
import Certif_Humic from "../../assets/Certif_Humic.jpg";
import { GoArrowUpRight } from "react-icons/go";

interface CertifImgProps {
  altText: string;
  imgTitle: string;
}

const CertifImg: React.FC<CertifImgProps> = ({ altText, imgTitle }) => {
  const getImage = (imgTitle: CertifImgProps["imgTitle"]) => {
    switch (imgTitle) {
      case "Certif_MSIB5":
        return Certif_MSIB5;
      case "Certif_MSIB4":
        return Certif_MSIB4;
      case "Certif_DataScienceFoundation":
        return Certif_DataScienceFoundation;
      case "Certif_ExcelDataPreparation":
        return Certif_ExcelDataPreparation;
      case "Certif_NgulikExcelDashboard":
        return Certif_NgulikExcelDashboard;
      case "Certif_NgulikExcelPivotTable":
        return Certif_NgulikExcelPivotTable;
      case "Certif_Humic":
        return Certif_Humic;
      default:
        return "";
    }
  };

  const handleViewImage = () => {
    const imageSrc = getImage(imgTitle);
    const imageUrl = typeof imageSrc === "string" ? imageSrc : imageSrc.src;
    window.open(imageUrl, "_blank");
  };

  const image = getImage(imgTitle);

  return (
    <div className="relative h-[120px] w-[140px] md:h-[200px] md:w-[240px] lg:h-[380px] lg:w-[552px] border-4 border-[#FD7092] p-2 rounded-3xl flex justify-center overflow-hidden">
      <Image src={image} alt={altText} className="rounded-3xl h-full w-fit" />
      <button
        className="absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 opacity-0 hover:opacity-90 hover:bg-white"
        onClick={handleViewImage}
      >
        <div className="flex bg-[#FD7092] rounded-2xl p-1 font-semibold">
          <p className="text-white">View</p>
          <GoArrowUpRight className="text-white my-auto ml-1" />
        </div>
      </button>
    </div>
  );
};

export default CertifImg;

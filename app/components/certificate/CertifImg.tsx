import React from "react";
import Image from "next/image";
import Certif_MSIB5 from "../../assets/Certif_MSIB 5.jpg";
import Certif_MSIB4 from "../../assets/Certif_Startup Campus.jpg";
import Certif_DataScienceFoundation from "../../assets/Certif_DataScienceFoundation.jpg";
import Certif_ExcelDataPreparation from "../../assets/Certif_ExcelDataPreparation.jpg";
import Certif_NgulikExcelDashboard from "../../assets/Certif_NgulikExcelDashboard.jpg";
import Certif_NgulikExcelPivotTable from "../../assets/Certif_NgulikExcelPivotTable.jpg";
import Certif_Humic from "../../assets/Certif_Humic.jpg";

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
  const image = getImage(imgTitle);

  return (
    <div className="h-[380px] w-fit border border-4 border-[#FD7092] p-2 rounded-3xl">
      <Image src={image} alt={altText} className="rounded-3xl h-full w-fit" />
    </div>
  );
};

export default CertifImg;

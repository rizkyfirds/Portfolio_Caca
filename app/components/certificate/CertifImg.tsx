import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Certif_MSIB5 from "../../assets/Certif_MSIB 5.jpg";
import Certif_MSIB4 from "../../assets/Certif_Startup Campus.jpg";
import Certif_DataScienceFoundation from "../../assets/Certif_DataScienceFoundation.jpg";
import Certif_ExcelDataPreparation from "../../assets/Certif_ExcelDataPreparation.jpg";
import Certif_NgulikExcelDashboard from "../../assets/Certif_NgulikExcelDashboard.jpg";
import Certif_NgulikExcelPivotTable from "../../assets/Certif_NgulikExcelPivotTable.jpg";
import Certif_Humic from "../../assets/Certif_Humic.jpg";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5";

interface CertifImgProps {
  altText: string;
  imgTitle: string;
}

const CertifImg: React.FC<CertifImgProps> = ({ altText, imgTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const image = getImage(imgTitle);

  return (
    <div className="relative w-1/2 border-4 border-[#FD7092] p-2 rounded-3xl flex justify-center overflow-hidden">
      <Image
        src={image}
        alt={altText}
        className="rounded-3xl h-full w-fit"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <button
        className={`absolute inset-0 flex items-center justify-center bg-transparent transition-all duration-300 ${
          isHovered ? "opacity-90 bg-white" : "opacity-0"
        }`}
        onClick={handleViewImage}
      >
        <div className="flex bg-[#FD7092] rounded-2xl p-1 font-semibold px-3">
          <p className="text-white">View</p>
          <GoArrowUpRight className="text-white my-auto ml-1" />
        </div>
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-[#FD7092]/5  0">
          <div
            ref={modalRef}
            className="relative flex items-center justify-center bg-[#FD7092]/90 border-white border-2 rounded-xl p-4 h-1/2 lg:h-3/4"
          >
            <button
              onClick={handleCloseModal}
              className="absolute top-0 right-0 m-2 text-xl font-bold text-[#FD7092] bg-white hover:bg-[#FD7092] hover:text-white rounded-full"
            >
              <IoClose className="text-2xl" />
            </button>
            <Image src={image} alt={altText} className="w-fit h-full" />
          </div>
        </div>
      )}
    </div>
  );
};

export default CertifImg;

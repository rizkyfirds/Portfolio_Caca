import React from "react";
import Image from "next/image";
import PKM from "../../assets/PKM.png";
import heartRate from "../../assets/heartRate.png";
import tracerStudy from "../../assets/tracerStudy.png";
import FoodRecipe from "../../assets/FoodRecipe.jpg";
import FinalProject from "../../assets/FinalProject.jpg";
import { MdOutlineArrowOutward } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

interface PerProjectProps {
  title: string;
  width: number;
  desc: string;
  link: string;
  imgTitle: string;
  tasks: string[];
}

const PerProject: React.FC<PerProjectProps> = ({
  desc,
  link,
  title,
  width,
  imgTitle,
  tasks,
}) => {
  const getImage = (imgTitle: PerProjectProps["imgTitle"]) => {
    switch (imgTitle) {
      case "PKM":
        return PKM;
      case "heartRate":
        return heartRate;
      case "tracerStudy":
        return tracerStudy;
      case "FoodRecipe":
        return FoodRecipe;
      case "FinalProject":
        return FinalProject;
      default:
        return "";
    }
  };

  const image = getImage(imgTitle);
  return (
    <div
      className={`bg-[#FFE5EC] w-[200px] md:w-[400px] lg:w-[${width}px] p-[12px] lg:p-[24px] pb-[65px] rounded-2xl relative`}
    >
      <Image src={image} alt={title} className="w-full mb-[12px] lg:mb-[24px]" />
      <p
        className={
          (width !== 400 ? "text-[14px] lg:text-[22px] " : "text-[14px] ") +
          "mb-[12px] font-bold"
        }
      >
        {title}
      </p>

      <p className="text-[10px] lg:text-[14px] text-justify mb-[12px]">{desc}</p>
      <p
        className={
          (width !== 400 ? "text-[14px] lg:text-[20px] " : "text-[14px] ") +
          "mb-[10px] font-semibold"
        }
      >
        Task Done:
      </p>
      {tasks.map((task, index) => (
        <div key={index} className="flex font-medium mb-1">
          <TbPointFilled className="h-fit w-3 lg:w-6 text-[4px] lg:text-[6px] mr-2" />
          <p className="text-[10px] lg:text-[14px] text-justify w-full">{task}</p>
        </div>
      ))}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-0 right-0 m-[8px] lg:m-[14px] pt-[6px] lg:pt-[14px]"
      >
        <div className="bg-[#FD7092] py-[12px] px-[24px] lg:py-[14px] lg:px-[32px] rounded-full">
          <MdOutlineArrowOutward className="text-white" />
        </div>
      </a>
    </div>
  );
};

export default PerProject;

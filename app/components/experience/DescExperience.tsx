import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";

interface DescExperienceProps {
  startDate: string;
  endDate: string;
  company: string;
  position: string;
  desc: string[];
}

const DescExperience: React.FC<DescExperienceProps> = ({
  startDate,
  endDate,
  company,
  position,
  desc,
}) => {
  return (
    <div className="flex gap-x-[20px] lg:gap-x-[74px] mb-[12px] lg:mb-[20px]">
      <div className="h-fit w-1/3 flex justify-end font-medium text-[10px] lg:text-[20px] gap-x-1">
        <p>{startDate}</p>
        <IoIosArrowRoundForward className="my-auto lg:mx-4" />
        <p>{endDate}</p>
      </div>
      <div className="w-2/3">
        <div className="mb-[8px] lg:mb-[10px]">
          <p className="font-bold text-[14px] lg:text-[20px]">{company}</p>
          <p className="italic font-medium text-[12px] lg:text-[18px]">{position}</p>
        </div>
        {desc.map((descItem, index) => (
        <div key={index} className="flex font-medium text-[12px] lg:text-[18px] mb-2">
          <TbPointFilled className="h-fit w-4 lg:w-6 mx-auto text-base mt-1 mr-2" />
          <p className="w-full">{descItem}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DescExperience;

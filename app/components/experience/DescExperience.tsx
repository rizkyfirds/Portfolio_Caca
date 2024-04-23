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
    <div className="flex gap-x-[74px] mb-[64px]">
      <div className="h-fit w-1/3 flex justify-end font-medium text-[35px]">
        <p>{startDate}</p>
        <IoIosArrowRoundForward className="my-auto mx-4" />
        <p>{endDate}</p>
      </div>
      <div className="w-2/3">
        <div className="mb-[30px]">
          <p className="font-bold text-[35px]">{company}</p>
          <p className="italic font-medium text-[25px]">{position}</p>
        </div>
        {desc.map((descItem, index) => (
        <div key={index} className="flex font-medium text-[27px] gap-x-4 mb-1">
          <TbPointFilled className="h-fit w-6 my-auto text-xl" />
          <p className="w-fit">{descItem}</p>
        </div>
      ))}
      </div>
    </div>
  );
};

export default DescExperience;

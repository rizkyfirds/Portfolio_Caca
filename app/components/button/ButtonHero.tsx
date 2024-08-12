import React from "react";
import { MdArrowOutward } from "react-icons/md";

interface ButtonNavbar {
  command: string;
  link: string;
}

const ButtonNavbar: React.FC<ButtonNavbar> = ({ command, link }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-x-[4px] h-fit w-fit rounded-full border-2 border-[#FD7092] px-[4px] py-[4px] lg:px-[22px] lg:py-[12px] text-center bg-white hover:bg-[#FD7092] text-[#FD7092] hover:text-white text-[6px] lg:text-[12px]"
    >
      <p className="">{command}</p>
      <MdArrowOutward className="my-auto" />
    </a>
  );
};

export default ButtonNavbar;

import React from "react";
import ProfileImg from "../../assets/ProfileNavbar.svg";
import Image from "next/image";
import ButtonNavbar from "../button/ButtonNavbar";

const Navbar = () => {
  return (
    <div className="h-[80px] py-[24px] px-[156px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-x-[8px]">
          <Image src={ProfileImg} alt="Photo Profile" />
          <p className="my-auto text-[#FD7092] font-semibold">
            Salsabila Awwaliyyah Lestari
          </p>
        </div>
        <div className="flex gap-x-[16px]">
            <ButtonNavbar section="About"/>
            <ButtonNavbar section="Skills"/>
            <ButtonNavbar section="Project"/>
            <ButtonNavbar section="Certificate"/>
            <ButtonNavbar section="Contact"/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

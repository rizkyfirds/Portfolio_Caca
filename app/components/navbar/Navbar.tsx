"use client";

import React from "react";
import ProfileImg from "../../assets/ProfileNavbar.svg";
import Image from "next/image";
import ButtonNavbar from "../button/ButtonNavbar";

interface NavbarProps{
  setNavbarStat: (status: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({setNavbarStat}) => {
  
  return (
    <div className="h-[80px] py-[24px] px-[15px] lg:px-[156px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-x-[8px]">
          <Image src={ProfileImg} alt="Photo Profile" />
          <p className="my-auto text-[#FD7092] text-[6px] md:text-[12px] lg:text-[20px] font-semibold">
            Salsabila Awwaliyyah Lestari
          </p>
        </div>
        <div className="flex gap-x-[4px] md:gap-x-[12px] lg:gap-x-[16px] my-auto">
            <ButtonNavbar section="About" setNavbarStat={setNavbarStat}/>
            <ButtonNavbar section="Skills" setNavbarStat={setNavbarStat}/>
            <ButtonNavbar section="Project" setNavbarStat={setNavbarStat}/>
            <ButtonNavbar section="Certificate" setNavbarStat={setNavbarStat}/>
            <ButtonNavbar section="Contact" setNavbarStat={setNavbarStat}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

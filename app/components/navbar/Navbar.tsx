"use client";

import React, { useState } from "react";
import ProfileImg from "../../assets/ProfileNavbar.svg";
import Image from "next/image";
import ButtonNavbar from "../button/ButtonNavbar";
import ButtonMenuBurger from "../button/ButtonMenuBurger";
import { TiThMenuOutline } from "react-icons/ti";

interface NavbarProps {
  setNavbarStat: (status: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setNavbarStat }) => {
  const [isClickedMenu, setClickMenu] = useState<boolean>(false);
  const handleClickedMenu = () => {
    setClickMenu(!isClickedMenu);
  };
  return (
    <div className="h-[80px] py-[24px] px-[15px] lg:px-[156px] w-full">
      <div className="flex justify-between">
        <div className="flex gap-x-[8px]">
          <Image src={ProfileImg} alt="Photo Profile" />
          <p className="my-auto text-[#FD7092] text-[10px] md:text-[15px] lg:text-[20px] font-semibold">
            Salsabila Awwaliyyah Lestari
          </p>
        </div>
        <div className="">
          <div className="hidden md:flex gap-x-[4px] md:gap-x-[12px] lg:gap-x-[16px] my-auto">
            <ButtonNavbar section="About" setNavbarStat={setNavbarStat} />
            <ButtonNavbar section="Skills" setNavbarStat={setNavbarStat} />
            <ButtonNavbar section="Project" setNavbarStat={setNavbarStat} />
            <ButtonNavbar section="Certificate" setNavbarStat={setNavbarStat} />
            <ButtonNavbar section="Contact" setNavbarStat={setNavbarStat} />
          </div>
          <button
            onClick={handleClickedMenu}
            className="relative md:hidden p-2 rounded-full border-2 border-[#FD7092] text-[#FD7092] hover:bg-[#FD7092] hover:text-white"
          >
            <TiThMenuOutline className="text-[12px]" />
            {isClickedMenu ? (
              <div className="absolute z-10 bg-white top-0 right-0 mt-8 p-2 rounded-2xl border-2 border-[#FD7092] text-[#FD7092]">
                <ButtonMenuBurger setNavbarStat={setNavbarStat} text="About"/>
                <ButtonMenuBurger setNavbarStat={setNavbarStat} text="Skills"/>
                <ButtonMenuBurger setNavbarStat={setNavbarStat} text="Project"/>
                <ButtonMenuBurger setNavbarStat={setNavbarStat} text="Certificate"/>
                <ButtonMenuBurger setNavbarStat={setNavbarStat} text="Contact"/>
              </div>
            ) : (
              ""
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

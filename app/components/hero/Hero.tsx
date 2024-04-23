import React from "react";
import Profile from "../../assets/ProfileHero.svg";
import Image from "next/image";
import ButtonHero from "../button/ButtonHero";

const Hero = () => {
  return (
    <div className="px-[156px] py-[80px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[#FD7092] italic text-[80px] font-bold font-allan">
            😍 Hello!
          </p>
          <p className="text-[64px] font-bold text-[#3A3A3A] font-['Poppins']">
            I'm Salsabila <br />
            Awwaliyyah Lestari
          </p>
          <p className="text-[64px] italic font-bold font-['Allan'] text-[#3A3A3A]">
            Data Analyst
          </p>
          <div className="flex gap-x-[16px]">
            <ButtonHero command="View Github" />
            <ButtonHero command="Resume" />
          </div>
        </div>
        <div>
          <Image src={Profile} alt="Photo Profile" className="h-fit relative"> 

          </Image>
        </div>
      </div>
    </div>
  );
};

export default Hero;

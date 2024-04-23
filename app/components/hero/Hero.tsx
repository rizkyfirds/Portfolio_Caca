import React from "react";
import Profile from "../../assets/ProfileHero.svg";
import Image from "next/image";
import ButtonHero from "../button/ButtonHero";
import Matplotlib from "../../assets/Matplotlib.svg";
import Seaborn from "../../assets/Seaborn.svg";
import LookerStudio from "../../assets/LookerStudio.svg";
import Tableu from "../../assets/Tableu.svg";
import PowerBI from "../../assets/PowerBI.svg";
import Pandas from "../../assets/Pandas.svg";
import Python from "../../assets/python-5.svg";
import SQL from "../../assets/SQL.svg";

const Hero = () => {
  return (
    <div className="px-[156px] py-[80px]">
      <div className="flex justify-between">
        <div>
          <p className="text-[#FD7092] italic text-[80px] font-bold font-allan">
            😊 Hello!
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
        <div className="relative">
          <Image src={Profile} alt="Photo Profile" className="h-fit" />
          <div className="absolute -bottom-4 -left-8 border-4 border-[#FFE5EC]  p-3 bg-white rounded-full">
            <Image src={Matplotlib} alt=""/>
          </div>
          <div className="absolute -bottom-4 -right-8 border-4 border-[#FFE5EC] p-3 bg-white rounded-full">
            <Image src={Seaborn} alt="" />
          </div>
          <div className="absolute bottom-24 -left-6 border-4 border-[#FFE5EC]  p-3 px-5 bg-white rounded-full">
            <Image src={LookerStudio} alt=""/>
          </div>
          <div className="absolute bottom-24 -right-6 border-4 border-[#FFE5EC] p-3 bg-white rounded-full">
            <Image src={Tableu} alt="" />
          </div>
          <div className="absolute bottom-52 -left-8 border-4 border-[#FFE5EC]  p-3 bg-white rounded-full">
            <Image src={PowerBI} alt=""/>
          </div>
          <div className="absolute bottom-52 -right-8 border-4 border-[#FFE5EC] p-3 px-5 bg-white rounded-full">
            <Image src={Pandas} alt="" />
          </div>
          <div className="absolute bottom-80 -left-6 border-4 border-[#FFE5EC]  p-3 bg-white rounded-full">
            <Image src={Python} alt=""/>
          </div>
          <div className="absolute bottom-80 -right-6 border-4 border-[#FFE5EC] p-3 bg-white rounded-full">
            <Image src={SQL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

import React from "react";
import Image from "next/image";
import Profile from "../../assets/ProfileHero.svg";
import ButtonHero from "../button/ButtonHero";
import HeroIcon from "./HeroIcon";

const Hero = () => {
  return (
    <div className="h-[320px] lg:h-[649px] py-[24px] px-[15px] lg:px-[156px] lg:py-[80px]">
      <div className="h-full flex justify-center gap-x-[30px] md:gap-x-[120px] lg:gap-x-[229px]">
        <div>
          <p className="text-[#FD7092] italic text-[25px] lg:text-[80px] font-bold font-allan">
            😊 Hello!
          </p>
          <p className="text-[20px] md:text-[35px] lg:text-[64px] font-bold text-[#3A3A3A] font-['Poppins']">
            I am Salsabila <br />
            Awwaliyyah Lestari
          </p>
          <p className="text-[15px] lg:text-[54px] italic font-bold font-['Allan'] text-[#3A3A3A]">
            Data Analyst
          </p>
          <div className="flex gap-x-[4px] lg:gap-x-[16px] mt-4">
            <ButtonHero
              command="View Github"
              link="https://github.com/salsabilaawwaliyyah"
            />
            <ButtonHero command="Resume" link="https://drive.google.com/file/d/1UOgDYZMfZ9-zGmMDgerKy9Tl1__0yT7V/view?usp=sharing" />
          </div>
        </div>
        <div className="h-full">
          <div className="h-fit relative">
            <Image
              src={Profile}
              alt="Photo Profile"
              className="h-[200px] md:h-[250px] lg:h-[450px] w-full px-3 md:px-4 lg:px-6"
            />
            <div className="absolute bottom-0 h-full w-full grid grid-rows-5 grid-flow-col gap-4">
              <div></div>
              <div className="flex justify-between">
                <HeroIcon icon="Matplotlib" />
                <HeroIcon icon="Seaborn" />
              </div>
              <div className="flex justify-between px-2">
                <HeroIcon icon="LookerStudio" />
                <HeroIcon icon="Tableu" />
              </div>
              <div className="flex justify-between">
                <HeroIcon icon="PowerBI" />
                <HeroIcon icon="Pandas" />
              </div>
              <div className="flex justify-between px-2">
                <HeroIcon icon="Python" />
                <HeroIcon icon="SQL" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

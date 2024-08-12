import React from "react";
import Image from "next/image";
import Profile from "../../assets/ProfileHero.svg";
import ButtonHero from "../button/ButtonHero";
import HeroIcon from "./HeroIcon";

const Hero = () => {
  return (
    <div className="h-fit py-[24px] px-[15px] lg:px-[156px] lg:py-[60px]">
      <div className="h-fit md:flex justify-center gap-x-[30px] md:gap-x-[80px] lg:gap-x-[229px]">
        <div className="h-full w-fit md:order-1 mx-auto">
          <div className="h-fit relative">
            <Image
              src={Profile}
              alt="Photo Profile"
              className="h-[220px] md:h-[250px] lg:h-[450px] w-full px-3 md:px-4 lg:px-6"
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
                <HeroIcon icon="Excel" />
              </div>
              <div className="flex justify-between px-2">
                <HeroIcon icon="Python" />
                <HeroIcon icon="SQL" />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto w-fit ">
          <p className="text-[#FD7092] sm:text-center md:text-left italic text-[15px] md:text-[25px] lg:text-[60px] font-bold font-allan sm:mt-4 md:mt-0">
            😊 Hello!
          </p>
          <p className="text-[18px] md:text-[35px] lg:text-[44px] sm:text-center md:text-left font-bold text-[#3A3A3A] font-['Poppins']">
            I am Salsabila <br className="sm:hidden lg:flex"/>
            Awwaliyyah Lestari
          </p>
          <p className="text-[13px] lg:text-[34px] sm:text-center md:text-left italic font-bold font-['Allan'] text-[#3A3A3A]">
            Data Analyst
          </p>
          <div className="flex sm:justify-center md:justify-start gap-x-[4px] lg:gap-x-[16px] my-4">
            <ButtonHero
              command="View Github"
              link="https://github.com/salsabilaawwaliyyah"
            />
            <ButtonHero command="Resume" link="https://drive.google.com/file/d/1UOgDYZMfZ9-zGmMDgerKy9Tl1__0yT7V/view?usp=sharing" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;

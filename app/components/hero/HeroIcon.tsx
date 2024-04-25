import React from "react";
import Image from "next/image";
import Matplotlib from "../../assets/Matplotlib.svg";
import Seaborn from "../../assets/Seaborn.svg";
import LookerStudio from "../../assets/LookerStudio.svg";
import Tableu from "../../assets/Tableu.svg";
import PowerBI from "../../assets/PowerBI.svg";
import Pandas from "../../assets/Pandas.svg";
import Excel from "../../assets/Excel.svg";
import Python from "../../assets/python-5.svg";
import SQL from "../../assets/SQL.svg";

interface HeroIconProps {
  icon: string;
}

const HeroIcon: React.FC<HeroIconProps> = ({ icon}) => {
  const getIcon = (icon: HeroIconProps["icon"]) => {
    switch (icon) {
      case "Matplotlib":
        return Matplotlib;
      case "Seaborn":
        return Seaborn;
      case "LookerStudio":
        return LookerStudio;
      case "Tableu":
        return Tableu;
      case "PowerBI":
        return PowerBI;
      case "Excel":
        return Excel;
      case "Python":
        return Python;
      case "SQL":
        return SQL;
      default:
        return "";
    }
  };
  const Icon = getIcon(icon);

  return (
    <div className="grid content-end">
      <div
        className={`h-fit w-fit border-4 border-[#FFE5EC] p-1 lg:p-3 bg-white rounded-full`}
      >
        <Image
          src={Icon}
          alt=""
          className="h-[9px] w-[9px] md:h-[18px] md:w-[18px] lg:h-[36px] lg:w-[36px]"
        />
      </div>
    </div>
  );
};

export default HeroIcon;

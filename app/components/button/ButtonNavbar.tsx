import React from "react";

interface ButtonNavbarProps {
  section: string;
  setNavbarStat: (section: string) => void;
}

const ButtonNavbar: React.FC<ButtonNavbarProps> = ({
  section,
  setNavbarStat,
}) => {
  let emoji = "";
  if (section === "About") {
    emoji = "👩‍💼";
  } else if (section === "Skills") {
    emoji = "💻";
  } else if (section === "Project") {
    emoji = "🚀";
  } else if (section === "Certificate") {
    emoji = "🎓";
  } else if (section === "Contact") {
    emoji = "💌";
  }

  const handleClick = () => {
    setNavbarStat(section);
  };

  return (
    <button
      onClick={handleClick}
      className="h-fit rounded-3xl border-2 border-[#FD7092] px-[2px] py-[2px] md:px-[8px] md:py-[4px] lg:px-[16px] lg:py-[8px] text-center bg-white hover:bg-[#FD7092] text-[#FD7092] hover:text-white"
    >
      <p className="text-[6px] md:text-[8px] lg:text-[12px]">
        {emoji} {section}
      </p>
    </button>
  );
};

export default ButtonNavbar;

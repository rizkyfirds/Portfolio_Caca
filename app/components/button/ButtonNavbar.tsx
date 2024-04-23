import React from "react";

interface ButtonNavbar {
  section: string;
}

const ButtonNavbar: React.FC<ButtonNavbar> = ({ section }) => {
  return (
    <div className="h-fit rounded-3xl border-2 border-[#FD7092] px-[16px] py-[8px] text-center bg-white">
      <p className="text-[#FD7092] text-[12px]">
        {section === "About"
          ? "👩‍💼"
          : section === "Skills"
          ? "💻"
          : section === "Project"
          ? "🚀"
          : section === "Certificate"
          ? "🎓"
          : section === "Contact"
          ? "💌"
          : ""}{" "}
        {section}
      </p>
    </div>
  );
};

export default ButtonNavbar;

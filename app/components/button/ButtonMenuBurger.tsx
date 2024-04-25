import React from 'react'

interface ButtonMenuBurgerProps {
    text : string;
    setNavbarStat: (section: string) => void;
}

const ButtonMenuBurger: React.FC<ButtonMenuBurgerProps> = ({setNavbarStat,text}) => {
    const handleClick = () => {
        setNavbarStat(text);
      };
  return (
    <button onClick={handleClick} className="w-full px-2 rounded-lg text-sm hover:bg-[#FD7092] hover:text-white">{text}</button>
  )
}

export default ButtonMenuBurger
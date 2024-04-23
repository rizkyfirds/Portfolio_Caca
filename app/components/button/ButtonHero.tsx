import React from 'react'
import { MdArrowOutward } from "react-icons/md";

interface ButtonNavbar {
    command : string;
}

const ButtonNavbar: React.FC<ButtonNavbar> = ({
    command
}) => {
  return (
    <div className='flex gap-x-[4px] h-fit w-fit rounded-full border-2 border-[#FD7092] px-[32px] py-[16px] text-center bg-white hover:bg-[#FD7092] text-[#FD7092] hover:text-white'>
        <p className='text-[16px]'>{command}</p>
        <MdArrowOutward className='my-auto'/>
    </div>
  )
}

export default ButtonNavbar
import React from 'react'

interface HardSkillProps{
  skill: string;
  desc: string;

}

const HardSkill: React.FC<HardSkillProps> = ({skill, desc}) => {
  return (
    <div className="grid gap-y-[4px] lg:gap-y-[6px]">
            <p className="text-[12px] lg:text-[20px] font-bold">{skill}</p>
            <p className="text-[9px] lg:text-[16px] font-medium">
              {desc}
            </p>
          </div>
  )
}

export default HardSkill
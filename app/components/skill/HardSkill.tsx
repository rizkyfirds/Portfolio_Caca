import React from 'react'

interface HardSkillProps{
  skill: string;
  desc: string;

}

const HardSkill: React.FC<HardSkillProps> = ({skill, desc}) => {
  return (
    <div className="grid gap-y-[6px] lg:gap-y-[8px]">
            <p className="text-[12px] lg:text-[24px] font-bold">{skill}</p>
            <p className="text-[9px] lg:text-[18px] font-medium">
              {desc}
            </p>
          </div>
  )
}

export default HardSkill
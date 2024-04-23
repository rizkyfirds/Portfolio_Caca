import React from 'react'

interface HardSkillProps{
  skill: string;
  desc: string;

}

const HardSkill: React.FC<HardSkillProps> = ({skill, desc}) => {
  return (
    <div className="grid gap-y-[8px]">
            <p className="text-[24px] font-bold">{skill}</p>
            <p className="text-[18px] font-medium">
              {desc}
            </p>
          </div>
  )
}

export default HardSkill
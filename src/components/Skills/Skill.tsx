import { SkillType } from "./Skills";

export default function Skill({skill}: {skill: SkillType}) {

  return (
    <div className='skill'>
      <div className='skill-icon'>
        <img src={`/assets/icons/${skill.name}.svg`} alt={skill.name} />
        <span className='skill-name'>{skill.name}</span>
      </div>

      {skill.text && <ul>{skill.text.map((text, index) => <li key={index}> - {text}</li>)}</ul>}
    </div>
  )
}
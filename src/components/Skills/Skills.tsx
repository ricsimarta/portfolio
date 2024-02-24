import Skill from './Skill'
import './Skills.css'

export type SkillType = {
  name: string,
  text?: string[]
}

export default function Skills() {
  const skills: SkillType[] = [
    {
      name: "HTML5",
      text: ["DOM - DOM tree", "Box-model", "Rendering flow", "Semantic tags"]
    },
    {
      name: "CSS3",
      text: ["SCSS", "Transitions, animations", "Variables", "Media query", "Flexbox, grid", "Responsive layouts"]
    },
    {
      name: "Javascript",
      text: ["ES6", "MVC architecture", "DOM manipulation", "Form handling", "JSON"]
    },
    {
      name: "nodeJS",
      text: ["NPM"]
    },
    {
      name: "React",
      text: ["States, hooks", "Context", "Conditional rendering", "Functional components", "Components lifecycle", "React router"]
    },
    {
      name: "ExpressJS",
      text: ["File system", "Router", "JSON - FormData", "Express-fileupload"]
    },
    {
      name: "Firebase",
      text: ["Auth", "Firestore DB", "Realtime DB", "Storage"]
    },
    {
      name: "MongoDB",
      text: ["Locale DB", "MongoDB Atlas", "MERN"]
    },
    {
      name: "Git"
    },
    {
      name: "GitHub"
    }
  ]

  return (
    <section className='skills'>
      <div className='skills container'>
        {skills.map((skill: SkillType, index) => <Skill key={index} skill={skill} />)}
      </div>
    </section>
  )
}
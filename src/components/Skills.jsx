import React from 'react'

function Skills() {
  const hardSkills = ["HTML5", "CSS3", "Javascript", "Git", "GitHub", "nodeJS", "ExpressJS", "React", "Jest", "MongoDB", "Docker"]
  return (
    <section id='Skills'>
      <div className='hardSkills'>
        <p className='hardSkillsText'>Programming skills:</p>
        <div className='hardSkillsIcons'>
          {hardSkills.map((logo, index) =>
            <div className='logo' key={index}>
              <img className='logoImage' src={require(`./../images/logos/${logo}.svg`)} alt="logo" />
              <p className='logoText'>{logo}</p>
            </div>)}
        </div>
      </div>

      <div className='otherSkills'>
        <ul>
          <p>Other developer skills:</p>
          <li>Wireframing</li>
          <li>UI/UX designing</li>
          <li>Clean coding practices</li>
          <li>Async programming</li>
        </ul>

        <ul>
          <p>Soft skills:</p>
          <li>Hard working</li>
          <li>Teamplayer</li>
          <li>Fast learner</li>
          <li>SCRUM</li>
          <li>Motivated</li>
        </ul>
      </div>
    </section>
  )
}

export default Skills
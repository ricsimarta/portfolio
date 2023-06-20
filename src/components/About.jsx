import React from 'react'

function About() {
  return (
    <section id='About'>
      <div className='aboutMe'>  

        <img className='aboutImage' src={require(`./../images/profile.jpg`)} alt="profile" />

        <p className='aboutText'>
          <span>Hi! I am Richard Marta, a frontend developer born in Serbia, but living in Hungary.</span>
          <span>I fell in love with coding in high school, where I was learning C# and old school HTML and CSS. After finishing high school in Serbia, I moved to Hungary at the age of 19. That's when I drifted away from IT, and started working in other fields, but at the age of 26, I decided to get back on the road and started a bootcamp at Codecool.</span>
          <span>With 4 months of tears and sweat, I became a full fledged frontend developer, with the knowledge of modern frameworks and practices, like Javascript, NodeJS, ExpressJS and React. Now I'm on my journey to build my career in the maze of frontend developing.</span>
          <span>After a year of frontend mentoring at the very same course that I was learning on, I am open to new experiences, and looking for a company that can use my skills and even help me get new ones in the field of developing.</span>
          <span>Outside of coding, I am deeply into hardware and software. I like to build PC's, install and maintain them, and even do smaller repairs as well. I enjoy playing games, watching movies and series, and playing the guitar (or at least pretend it). I think of myself as a cheerful and motivated guy, and I think with a little humour, everything can be better.</span>
        </p>
      </div>
      <button className='cv' type='button' onClick={e => {
        e.preventDefault();
        window.open("https://drive.google.com/file/d/1l_xA3V9mMq9hNW3vYvxuwiUhgTgSqYNR/view?usp=sharing");
      }}>Check out my CV!</button>

    </section>
  )
}

export default About
import './About.css'

export default function About() {
  return (
    <>
      <section className='about'>
        <div className='about container'>
          <h3>About me</h3>

          <p>
            I was born in 1995 in Serbia, and grew up here. After finishing high school, I've moved to Hungary at the age of 19.
          </p>

          <p>
            I am deeply into IT since I was a child. I am the family tech support guy for better or worse.  I wrote my first line of code at the age of 10 <span className='italic off'>(it was a terrible, copied HTML from some websites source)</span>, and from then, my passion for coding has begun.
          </p>

          <p>
            I learnt algorithmic thinking in high school, where I was intruced to <span className='italic'>real</span> coding, in the form of C#. The greatest achievement I have in it is that I've made a server-client based TCP/IP chat application for graduation <span className='italic off'>(in Serbia, we've had to make a kind of thesis for successful graduation from high school)</span>.
          </p>

          <p>
            After moving to Hungary, I couldn't start working as a developer, so coding got pushed to the side for a few years. I've tried myself out in different fields. I've worked for 2 years in CNC machining, as machine operator. After that, I started my carreer in commerce, and reached store manager position in 4 years.
          </p>

          <p>
            But I always wanted to get back to coding. So I joined a bootcamp at Codecool, where I learnt the basics of frontend development. After finishing the course, I've got a job offer to work as a mentor on the frontend courses. Since then, I am working as a frontend mentor, and also freelancing as a developer.
          </p>

          <p>
            In my free time, I enjoy playing computer and board games, watching movies and series, learning to play the guitar, and spend times with my friends.
          </p>
        </div>
      </section>
      <div className='banner'>
        <button>Contact me!</button>
      </div>
    </>
  )
}
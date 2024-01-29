import './Landing.css'

export default function About() {
  return (
    <>
      <section className='landing'>
        <div className='container'>
          <img src='/assets/profile.jpg' alt='profile' />

          <div className='landing-title'>
            <h2><span>R</span>ichard <span>M</span>arta</h2>
            <h3>Frontend Developer</h3>
          </div>

          <div className='landing-text'>
            <p>Hi! I am Richard Marta, a frontend developer based in Budapest, Hungary.</p>

            <p>I've finished the frontend course of Codecool in May of 2022, and been working on the very same course as a mentor since then.</p>

            <p>I have advanced knowledge in the field of frontend development, especially in CSS, Javascript and React.</p>
          </div>

        </div>
      </section>
      <div className='banner'>
        <button>Check out my CV!</button>
      </div>
    </>
  )
}
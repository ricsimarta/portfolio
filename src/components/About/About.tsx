import { aboutTextType } from '../../App'
import './About.css'

export default function About({ aboutText }: { aboutText: aboutTextType }) {
  return (
    <>
      <section className='about'>
        <div className='about container'>
          <h3>{aboutText.title}</h3>

          {aboutText.texts.map((text, index) => <p key={index} dangerouslySetInnerHTML={{__html: text}}></p>)}
        </div>
      </section>
      <div className='banner'>
        <button>Contact me!</button>
      </div>
    </>
  )
}
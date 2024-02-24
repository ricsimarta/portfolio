import { Fragment, useEffect, useMemo, useRef, useState } from 'react'

import { landingTextType } from '../../App'

import './Landing.css'

export default function About({ landingText }: { landingText: landingTextType }) {
  const ref = useRef<null | HTMLDivElement>(null)
  const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsIntersecting(entry.isIntersecting)), [])

  const [isIntersecting, setIsIntersecting] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)
  const [shadow, setShadow] = useState(0)
  const [showCv, setShowCv] = useState(false)

  const handleScroll = () => setScrollPosition(window.scrollY)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (isIntersecting) {
      if (ref.current) {
        setShadow(0.8 - ((ref.current.offsetTop + ref.current.offsetHeight) - scrollPosition) / (ref.current.offsetTop + ref.current.offsetHeight))
      }
    }
  }, [scrollPosition, isIntersecting])

  useEffect(() => {
    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [ref, observer])

  return (
    <>
      <section className='landing'>
        <div className='shadow' style={{ opacity: shadow }}/>
        <div className='container' ref={ref}>
          <img src='/assets/profile.jpg' alt='profile' />

          <div className='landing-title'>
            <h2>{landingText.name.split(' ').map((word, index) => <Fragment key={index}><span>{word[0]}</span>{word.substring(1)} </Fragment>)}</h2>
            <h3>{landingText.title}</h3>
          </div>

          <div className='landing-text'>
            {landingText.texts.map((text, index) => <p key={index}>{text}</p>)}
          </div>

        </div>
      </section>
      <div className='banner'>
        <button onClick={() => setShowCv(!showCv)}>{landingText.buttonText}</button>
      </div>
      {showCv && <div className='cv'></div>}
    </>
  )
}
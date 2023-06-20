import React from 'react'
import Website from './Website'

function Portfolio() {
  return (
    <section id='Portfolio'>
      <p className='portfolioText'>Here are some websites, that I've made:</p>
      <div className='websites'>
        <Website 
          name="Pharmacenter"
          img="pharmacenter"
          text={"A website made as an introduction for a  pharmaceutical industry company"}
          logos={["HTML5", "CSS3", "Javascript", "React"]}
          link={"https://pharmacenter.hu"}
          gitLink={"https://github.com/ricsimarta/pharmacenter"}
        />
      </div>
    </section>
  )
}

export default Portfolio
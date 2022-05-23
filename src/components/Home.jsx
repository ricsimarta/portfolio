import React from 'react'

function Home() {
  return (
    <section id='Home'>
      <p>Richard Marta</p>
      <p>Frontend Developer</p>

      <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href='#About'
        }}><span className="material-icons arrow">arrow_downward</span></button>    
    </section>
  )
}

export default Home

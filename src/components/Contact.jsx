import React from 'react'

function Contact() {
  return (
    <section id='Contact'>
      <p className='contact'>Contact me!</p>
      <button onClick={_ => {
        window.location.href = 'mailto:ricsimarta@gmail.com'
      }}><span className="material-symbols-outlined"> mail </span></button>
    </section>
  )
}

export default Contact
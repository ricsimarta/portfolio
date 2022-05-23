import React from 'react'

function Contact() {
  return (
    <section className='Contact'>
      <form>
        <p className='contact'>Contact me!</p>

        <input type='text' placeholder='Your name' />
        <input type='text' placeholder='Title of the message' />
        <input className='message' type='text' placeholder='Your message' />
        <button onClick={_ => { }}>Send</button>
      </form>
    </section>
  )
}

export default Contact
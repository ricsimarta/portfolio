import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

function Contact() {
  function captcha(value) {
    const isHuman = fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-type": "application/x-www-form-urlencoded; charset=utf-8"
      },
      body: `secret=6Lf8shIgAAAAADX-EzLHxxefk9kTpOHtoq8ozAbf&response=${value}`
    })
      .then(res => res.json())
      .then(json => json.success)
      .catch(err => {
        throw new Error(`Error in Google Siteverify API. ${err.message}`)
      })
    
    if (value === null || !isHuman) {
      throw new Error('You are a robot')
    }

    console.log('success');
  }

  return (
    <section id='Contact'>
      <form>
        <p className='contact'>Contact me!</p>

        <input name='name' type='text' placeholder='Your name' />
        <input name='title' type='text' placeholder='Title of the message' />
        <textarea className='message' name='message' type='text' placeholder='Your message' />
        <button type='button' onClick={e => {
          e.preventDefault();
        }}>Send</button>
      </form>

      <div className='captcha'>
        <ReCAPTCHA
          sitekey='6Lf8shIgAAAAADX-EzLHxxefk9kTpOHtoq8ozAbf'
          onChange={captcha}
          theme='dark'
        />
      </div>
    </section>
  )
}

export default Contact
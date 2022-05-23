import React from 'react'

function Website({ name, img, text, logos, link, gitLink }) {
  return (
    <div className='website'>
      <p className='websiteName'>{name}</p>
      <div className='imageContainer'>
        <img className='websiteImage' src={require(`./../images/websites/${img}.png`)} alt="codecool_final_website" />

        <div className='imageText'>
          {text}
          <div className='buttons'>
            {link != null && <button type='button' onClick={e => {
              e.preventDefault();
              window.open(link)
            }}>Take a look!</button>}
            
            {gitLink != null && <button type='button' onClick={e => {
              e.preventDefault();
              window.open(gitLink)
            }}>Open GitHub</button>}
          </div>
        </div>
      </div>

      <div className='stacksContainer'>
        <p className='stacks'>Used stacks:</p>
        <div className='logoContainer'>
          {logos.map((logo, index) =>
            <div className='logo' key={index}>
              <img className='logoImage' src={require(`./../images/logos/${logo}.svg`)} alt="logo" />
              <p className='logoText'>{logo}</p>
            </div>)}
        </div>
      </div>

    </div>
  )
}

export default Website
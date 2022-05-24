import React from 'react'

function Header() {
  const icons = ["GitHub", "LinkedIn"]
  const links = ["https://github.com/ricsimarta", "https://www.linkedin.com/in/ricsimarta/"]

  return (
    <header>
      <nav>
        <button type='button' onClick={e => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}><span className="material-icons navIcon">home</span>Home</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#About'
        }}><span className="material-icons navIcon">person</span>About</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#Skills'
        }}><span className="material-icons navIcon code">code</span>Skills</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#Portfolio'
        }}><span className="material-icons navIcon">menu_book</span>Portfolio</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#Contact'
        }}><span className="material-icons navIcon mail">mail</span>Contact</button>
      </nav>

      <button className='menuShow'><span className="material-icons navIcon menu">menu</span></button>
      
      <menu>
        <button type='button' onClick={e => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}><span className="material-icons navIcon">home</span>Home</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#About'
        }}><span className="material-icons navIcon">person</span>About</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#Skills'
        }}><span className="material-icons navIcon code">code</span>Skills</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#Portfolio'
        }}><span className="material-icons navIcon">menu_book</span>Portfolio</button>

        <button type='button' onClick={e => {
          e.preventDefault();
          window.location.href = '#Contact'
        }}><span className="material-icons navIcon mail">mail</span>Contact</button>
      </menu>

      <div className='links'>
        {icons.map((icon, index) => <button type='button' key={index} onClick={e => {
          e.preventDefault();
          window.open(links[index])
        }}><img className={`navbarIcon ${icon}`} src={require(`./../images/navbar/${icon}.svg`)} alt={icon} /></button>)}
      </div>
    </header>
  )
}

export default Header
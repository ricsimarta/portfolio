import React from 'react'
import Website from './Website'

function Portfolio() {
  return (
    <section id='Portfolio'>
      <p className='portfolioText'>Here are some websites, that I've made:</p>
      <div className='websites'>
        <Website 
          name="Codecool final exam design"
          img="codecool_final" 
          text="A simple design made for the Codecool final test." 
          logos={["HTML5", "CSS3", "Javascript"]} 
          link={"https://ricsimarta.github.io/codecool-final/"}
          gitLink={"https://github.com/ricsimarta/codecool-final"}
        />

        <Website
          name="Codecool beer webshop"
          img="beerlak" 
          text={"A webshop design, made in React. My part was the menu element with the filters."}
          logos={["HTML5", "CSS3", "Javascript", "React", "GitHub"]} 
          link={"https://ricsimarta.github.io/beer-project-teamwork/"} 
          gitLink={"https://github.com/ricsimarta/beer-project-teamwork"}
        />

        <Website
          name="Codecool test exam design"
          img="codecool_test" 
          text={"A simple design made for the Codecool test exam."}
          logos={["HTML5", "CSS3", "Javascript"]} 
          link={"https://ricsimarta.github.io/w18-test-design/frontend/index.html"}
          gitLink={"https://github.com/ricsimarta/w18-test-design"}
        />

        <Website
          name="Codecool pizza order"
          img="pizza_order"
          text={"A pizza ordering webpage prototype made by 4 students. My part was the javascript, backend, database control and some styling."}
          logos={["HTML5", "CSS3", "Javascript", "GitHub", "nodeJS", "ExpressJS"]}
          gitLink={"https://github.com/ricsimarta/pizza-order-team-project"}
        />

        <Website
          name="Codecool artworks design"
          img="artworks_react"
          text={"A React project made by 3 students. My part was the login, registration and token components, also I made the backend server, the routing and the database connections."}
          logos={["HTML5", "CSS3", "Javascript", "GitHub", "nodeJS", "ExpressJS", "React"]}
          gitLink={"https://github.com/ricsimarta/artworks-team-project"}
        />
      </div>
    </section>
  )
}

export default Portfolio
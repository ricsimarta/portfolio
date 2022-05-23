import React from 'react'

function About() {
  return (
    <section id='About'>
      <div className='aboutMe'>  

        <img className='aboutImage' src={require(`./../images/profile.jpg`)} alt="profile" />

        <p className='aboutText'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates non, dolorem itaque unde molestias accusamus, nesciunt consectetur sint enim neque reprehenderit ab nihil iure officiis fuga commodi reiciendis quia iste.
          Laborum voluptates reprehenderit hic vitae vero accusamus laboriosam rerum voluptatem pariatur possimus, deleniti aliquam quaerat? Tempora aut ut, eum ab exercitationem quis, explicabo cupiditate animi repudiandae delectus debitis eius ullam!
          Temporibus eligendi recusandae cumque, nesciunt vel eius quis numquam sunt voluptatum quo necessitatibus enim laboriosam aliquid, nihil soluta sapiente unde voluptas culpa cupiditate sint esse. Maxime accusamus ipsam eius eveniet.
          Eligendi magni et earum dolorem inventore. Pariatur in inventore quas nisi nobis, sapiente quam unde mollitia ad a, quaerat illum ea aperiam at assumenda ex id quod exercitationem tempora fugit.
          Sint, maxime quaerat. Hic blanditiis exercitationem explicabo velit, repellat eveniet perspiciatis voluptates molestias, itaque animi assumenda, libero nulla veritatis a aperiam sint aliquam quibusdam saepe excepturi voluptate repudiandae adipisci natus.
        </p>
      </div>

      <button className='cv' type='button' onClick={e => {
        e.preventDefault();
        window.open("https://drive.google.com/file/d/1zULNdiogHHV-st8hsTvUqSiKTIFC9jvz/view?usp=sharing");
      }}>Check out my CV!</button>

    </section>
  )
}

export default About
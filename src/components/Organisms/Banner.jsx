import React from 'react'

const Banner = () => (
<div className="main-banner img-container l-section" id="main-banner">
  <div className="ed-grid lg-grid-6">
    <div className="lg-cols-4 lg-x-2">
      <img className="main-banner__img" alt="baner" src="https://edteam-media.s3.amazonaws.com/courses/small/f7dad9a6-e060-4305-9adf-b9a9079075de.jpg" />
      <div className="main-banner__data s-center">
        <p className="t2 s-mb-0">Cursos de EDteam</p>
        <p> Tu futuro te está esperando</p>
        <a href="http://ed.team" className="button">Suscribirse</a>
      </div>
    </div>
  </div>
</div>
)

export default Banner
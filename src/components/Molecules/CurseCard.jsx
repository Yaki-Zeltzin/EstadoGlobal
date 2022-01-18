import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


const CurseCard = ({id,title, image, price, professor}) =>(
  <article className="card">
  <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
    <Link to={`/cursos/${id}`}>
    <img src={image} alt={title} />
    </Link>
  </div>
  <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
   <h3 className="center">{ title }</h3>
   <div className="s-main-center">
        {`Prof.: ${professor}`}
   </div>
    <div className="s-main-center">
      <a className="button--ghost-alert button--tiny" href="https://ed.team">{ price }</a>
    </div>
  </div>
</article>
)

//se esta esperando
CurseCard.propTypes = {
     title: PropTypes.string,
     image: PropTypes.string,
     price: PropTypes.string,
     professor: PropTypes.string,
}
//si no se recibe nada , toma esto por default
CurseCard.defaultProps = {
     title: "No se encontro título",
     image: "https://ed.team/static/images/logo/logo-premium-alt.svg",
     price: "--",
     professor: "",
}

export default CurseCard
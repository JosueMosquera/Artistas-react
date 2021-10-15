import React from 'react'

function Card({artista}) {
    return (
        <div className="col-12 offset-md-0 col-md-6 col-lg-4 mb-4">
        
        <div className="card animate__animated animate__fadeIn animate__delay-0.5" style={{"width": "15rem",height:'22rem'}}>
          <img src={artista.img} className="card-img-top img-fluid" alt={artista.nombre} style={{height: "170px"}}/>
          <div className="card-body">
            <h5 className="card-title">{artista.nombre}</h5>
            <p className="card-text" style={{fontFamily:"sans-serif",fontSize: "15px",fontWeight:550}}>{artista.descripcion}</p>
            <a href={artista.url} className="btn btn-primary" target='_blank' rel='noreferrer'>Conoce mas</a>
          </div>
        </div>
        
   
      
      </div>
    )
}

export default Card

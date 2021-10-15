import React from 'react'
import Card from '../components/Card'
import styles from "../styles/Cards.module.css"
function CardsGrid({artistas,search}) {
    const filteredCards =artistas.filter((artista)=>artista.nombre.toLowerCase().includes(search))
    return (
        <div className="container">
                <div className="row">
                    <div className="col mb-3 mt-4  text-uppercase" id="subtitle">
                        <h2 className={styles.title} id='artistastitle'>Artistas</h2>
                    </div>
                    <center>
                    <div className="container">
                        <div className="row">
                        {filteredCards.map(artista=><Card artista={artista} key={artista.uid} />)}
                        </div>
                    </div>
                    </center>
                </div>
            </div>
    )
}

export default CardsGrid

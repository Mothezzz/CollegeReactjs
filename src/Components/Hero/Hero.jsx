import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Vi säkerställer bättre utbildning för en bättre värld</h1>
        <p>Vår banbrytande läroplan är utformad för att ge studenterna de kunskaper, färdigheter och erfarenheter som krävs för att utmärka sig inom det dynamiska utbildningsområdet</p>
        <button className='btn'>Läs mer <img src={dark_arrow} alt="" /></button>
      </div>
    </div>
  )
}

export default Hero

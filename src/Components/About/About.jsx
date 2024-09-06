import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>OM UNIVERSITETET</h3>
        <h2>Att fostra morgondagens ledare idag</h2>
        <p>Ge dig ut på en omvälvande utbildningsresa med vårt universitets omfattande utbildningsprogram. Vår banbrytande läroplan är utformad för att ge studenterna den kunskap, de färdigheter och de erfarenheter som krävs för att utmärka sig inom det dynamiska utbildningsområdet.</p>
        <p>Med fokus på innovation, praktiskt lärande och personligt mentorskap förbereder våra program blivande pedagoger för att göra en meningsfull insats i klassrum, skolor och samhällen.</p>
        <p>Oavsett om du vill bli lärare, administratör, rådgivare eller utbildningsledare erbjuder vårt breda utbud av program den perfekta vägen för att uppnå dina mål och frigöra din fulla potential när det gäller att forma utbildningens framtid.</p>
      </div>
    </div>
  )
}

export default About

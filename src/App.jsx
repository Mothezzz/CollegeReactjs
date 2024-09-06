import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] = useState(false);

  return (
    <div>
     <Navbar/>
     <Hero/>
     <div className="container">
        <Title subTitle='Vårt PROGRAM' title='Vad vi erbjuder'/>
        <Programs/>
        <About setPlayState={setPlayState}/>
        <Title subTitle='Galleri' title='Bilder från campus'/>
        <Campus/>
        <Title subTitle='TESTIMONIALER' title='Vad studenten säger'/>
        <Testimonials/>
        <Title subTitle='Kontakta oss' title='Ta kontakt med oss'/>
        <Contact/>
        <Footer/>
     </div>
     <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
import React, { useEffect } from "react";

// Imported assets
import video from '../../assets/video.mp4';
import aeroplane from '../../assets/takeOff.png';

// Import AOS
import aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    aos.init({duration: 2000})
  }, [])

  return (
    <div className="home flex container">
        <div className="mainText">
          <h1 data-aos='fade-down' data-aos-duration='2500'>Fly with Care, Fly with Dignity</h1>
        </div>

        <div data-aos='fade-up' data-aos-duration='2500' className="homeImages flex">
          <div className="videoDiv">
            <video src={video} autoPlay muted loop className="video" />
          </div>
          
          <img src={aeroplane} className="plane" />
        </div>
    </div>
  )
}
export default Home;

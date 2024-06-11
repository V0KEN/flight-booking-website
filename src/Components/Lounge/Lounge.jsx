import React, {useEffect}  from "react";

//Imported Imamges ==========>
import imageGrid from '../../assets/images-Grid2.png'

// Import AOS
import aos from 'aos'
import 'aos/dist/aos.css'

const Lounge = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    aos.init({duration: 2000})
  }, [])

  return (
    <div className="lounge container section">
      <div className="sectionContainer grid">

        <div data-aos='fade-left' data-aos-duration='2500' className="imgDiv">
          <img src={imageGrid} />
        </div>

        <div className="textDiv">
          <h2 data-aos='fade-down' data-aos-duration='2500'>Unaccompanied Minor Lounge</h2>

          <div className="grids grid">

          <div data-aos='fade-down' data-aos-duration='3500' className="singleGrid">
            <span className='gridTitle'>
              Help through the airport
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourtie destinations.
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='4500' className="singleGrid">
            <span className='gridTitle'>
              Priority Boarding
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourtie destinations.
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='4f500' className="singleGrid">
            <span className='gridTitle'>
              Care on Flight
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourtie destinations.
            </p>
          </div>

          <div data-aos='fade-down' data-aos-duration='2500' className="singleGrid">
            <span className='gridTitle'>
              Chauffer-drive Service 
            </span>
            <p>
              You can also call airlines from your phone and book a flight ticket to one of your favourtie destinations.
            </p>
          </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}
export default Lounge;

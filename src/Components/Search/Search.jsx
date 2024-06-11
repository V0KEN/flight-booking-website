import React, {useEffect}  from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { RiAccountPinCircleLine } from "react-icons/ri";
import { FaRegCalendarAlt } from "react-icons/fa";

// Import AOS
import aos from 'aos'
import 'aos/dist/aos.css'

const Search = () => {
  // UseEffect to set animation duration
  useEffect(() => {
  aos.init({duration: 2000})
  }, [])

  return (
    <div className="search container section">
      <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer grid">

        <div className="btns flex">
          <div className="singleBtn">
            <span>Economy</span>
          </div>

          <div className="singleBtn">
            <span>Business Class</span>
          </div>

          <div className="singleBtn">
            <span>First Class</span>
          </div>
          
        </div>

        <div data-aos='fade-up' data-aos-duration='2000' className="searchInputs flex">
          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
            <HiOutlineLocationMarker className="icon"/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder="Where we heading?"/>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
            <RiAccountPinCircleLine className="icon"/>
            </div>
            <div className="texts">
              <h4>Passengers</h4>
              <input type="text" placeholder="Add guests"/>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
            <FaRegCalendarAlt className="icon"/>
            </div>
            <div className="texts">
              <h4>Check In</h4>
              <input type="text" placeholder="Add date"/>
            </div>
          </div>

          {/* Single Input */}
          <div className="singleInput flex">
            <div className="iconDiv">
            <FaRegCalendarAlt className="icon"/>
            </div>
            <div className="texts">
              <h4>Check Out</h4>
              <input type="text" placeholder="Add date"/>
            </div>
          </div>

          <button className="btn btnBlock flex">Search Flight</button>
        </div>
      </div>
    </div>
  )
}
export default Search;

import React, {useEffect} from 'react';

// imported images
import Logo from '../../assets/bluewings.png'

// imported icons
import { TiSocialFacebook } from "react-icons/ti";
import { TiSocialInstagram } from "react-icons/ti";
import { TiSocialTwitter } from "react-icons/ti";
import { TiSocialPinterest } from "react-icons/ti";

// Import AOS
import aos from 'aos'
import 'aos/dist/aos.css'


const Footer = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    aos.init({duration: 2000})
  }, [])

    return (
       <div className="footer">
            <div data-aos='fade-up' data-aos-duration='2500' className="sectionContainer container grid">
                <div className="gridOne">
                    <div className="logoDiv">
                        <img src={Logo} className='logo'/>
                    </div>
                    <p>Go where you want to go. Wherever you're going, we'll get you there.</p>
                    <div className="socialIcon flex">
                        <TiSocialFacebook className='icon'/>
                        <TiSocialInstagram className='icon'/>
                        <TiSocialTwitter className='icon'/>
                        <TiSocialPinterest className='icon'/>
                    </div>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                        <a href="">Explore</a>
                    </li>
                    <li>
                        <a href="">Flight Status</a>
                    </li>
                    <li>
                        <a href="">Travel</a>
                    </li>
                    <li>
                        <a href="">Check-In</a>
                    </li>
                    <li>
                        <a href="">Manage Your Booking</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Quick Guide</span>
                    <li>
                        <a href="">FAQ</a>
                    </li>
                    <li>
                        <a href="">How To</a>
                    </li>
                    <li>
                        <a href="">Features</a>
                    </li>
                    <li>
                        <a href="">Baggage</a>
                    </li>
                    <li>
                        <a href="">Route Map</a>
                    </li>
                    <li>
                        <a href="">Our Communities</a>
                    </li>
                </div>

                <div className="footerLinks">
                    <span className="linkTitle">Information</span>
                    <li>
                        <a href="">Chauffer</a>
                    </li>
                    <li>
                        <a href="">Our Partners</a>
                    </li>
                    <li>
                        <a href="">Destination</a>
                    </li>
                    <li>
                        <a href="">Careers</a>
                    </li>
                    <li>
                        <a href="">Transportation</a>
                    </li>
                    <li>
                        <a href="">Programme Rules</a>
                    </li>
                </div>
            </div>

            <div className="copyRightDiv flex">
                <p>Courtesy Design | Developed by <a href="https://github.com/V0KEN" target='_blank'>V0KEN</a></p>
            </div>
       </div>
    );
}

export default Footer;
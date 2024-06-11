import React, {useState} from 'react';

// import icons
import {SiConsul} from 'react-icons/si';
import { BsPhoneVibrate } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";
import { CgMenuGridO } from "react-icons/cg";

// import images
import logo from '../../assets/bluewings.png';

const Navbar = () => {
    // Remove the NavBar in the small width screens
    const [active, setActive] = useState('navBarMenu');
    const showNavBar = () => {
        setActive('navBarMenu showNavBar')
    };

    const removeNavBar = () => {
        setActive('navBarMenu')
    };

    // Add a background color to the second Navbar
    const [noBg, addBg] = useState('navBarMenu');

    const addBgColor = () => {
        if(window.scrollY >= 10) {
           addBg('navBarTwo navbar_With_Bg')
        }else{
            addBg('navBarTwo')
        }
    }
    window.addEventListener('scroll', addBgColor)

    return(
        <div className="navBar flex">
            <div className="navBarOne flex">
                <div>
                    <SiConsul className='icon'/>
                </div>

                <div className="none flex">
                    <li className='flex'> <BsPhoneVibrate  /> Support </li>
                    <li className='flex'> <IoGlobeOutline/> Languages</li>
                </div>

                <div className="atb flex">
                    <span>Sign In</span>
                    <span>Sign out</span>
                </div>
            </div>

            <div className={noBg}>

                <div className="logoDiv">
                    <img src={logo} className="Logo"/>
                </div>

                <div className={active}>
                    <ul className="menu flex">
                        <li onClick={removeNavBar} className='listItem'>Home</li>
                        <li onClick={removeNavBar} className='listItem'>About</li>
                        <li onClick={removeNavBar} className='listItem'>Offers</li>
                        <li onClick={removeNavBar} className='listItem'>Seats</li>
                        <li onClick={removeNavBar} className='listItem'>Destinations</li>
                    </ul>

                   <button onClick={removeNavBar} className='btn flex btnOne'>
                        Contact
                    </button>
                </div>

                <button className='btn flex btnTwo'>
                        Contact
                </button>

                <div onClick={showNavBar} className='toggleIcon'>
                    <CgMenuGridO className='icon'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
 
import React, { useState } from "react";
import './hero.css'
import {RxHamburgerMenu} from 'react-icons/rx'
import {FiX} from 'react-icons/fi'
import logo from '../../Images/logo (3).png';
import people from '../../Images/Group 81.png';



const Hero = () =>{
    const [tog, setTog] = useState(false);
    const [open, setOpen] = useState(false);
    const handleClick = () =>{
        setTog(!tog)
    }
    const handleService = (e) =>{
        e.preventDefault()
        setOpen(!open)
        
    }

    return(
        <div className="hero">
            <nav>
                <div className="destop-menu">
                    <img src={logo} alt="" />
                    <div className="desktop-nav">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a onClick={handleService} className="serv" href="">Services</a>
                            <div className= {open? "dropdown":"dropdown-sub"}>
                                <a href="">Honeymoon packages</a>
                                <a href="">Tour packages</a>
                                <a href="">Musical Event</a>
                                <a href="">Build Package</a>
                            </div>
                        <a href="">Upcoming Packages</a>
                    </div>
                    <button className="desktop-btn">Get in Touch</button>
                    <button onClick={handleClick} className="hamburger">
                        {tog? <FiX/>:<RxHamburgerMenu/>}
                    </button>
                </div>
                <div className={tog? "mobile-after":"mobile-nav"}>
                <a href="">Home</a>
                    <a href="">About</a>
                    <a href="">Services</a>
                    <a href="">Upcoming Packages</a>
                    <a href="">Get in Touch</a>
                </div>
            </nav>
            <div className="destop-content">
                <h1>No matter where you're going to, we'll take you there</h1>
                <div className="backfit-container">
                    <div className="backfit">
                        <div>
                            <p>Where to?</p>
                        </div>
                        <div >
                            <p>Travel type?</p>
                        </div>
                        <div className="desktop-duration">
                            <p>Duration</p>
                        </div>
                            <button className="desktop-btn">Submit</button>
                    </div>
                    <div className="people">
                        <img src={people} alt="" />
                        <p>2,500 people booked Tomorrow and event in last 24 hours</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
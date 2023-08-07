import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BiLogoTwitter, BiInfinite} from 'react-icons/bi'
import logo from '../../Images/logo (4).png'


const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer-content'>
            <div className='foot-content2'>
                <div className='travel'>
                    <img src={logo} alt="" />
                    <p>Travel helps companies manage payment properly</p>
                    <div className='medias'>
                        <AiOutlineInstagram/>
                        <BsMessenger/>
                        <BiLogoTwitter/>
                        <BiInfinite/>
                    </div>
                </div>
                <div className='company'>
                    <h4>Company</h4>
                    <a href="">About us</a>
                    <a href="#career">Career</a>
                    <a href="#career">Blog</a>
                    <a href="#career">Pricing</a>
                </div>
                <div className='destination'>
                    <h4>Destination</h4>
                    <a href="">Maidlives</a>
                    <a href="">Los Angeles</a>
                    <a href="">Las vegas</a>
                    <a href="">Toronto</a>
                </div>
                <div className='newsletter'>
                    <h4>Join our Newsletter</h4>
                    <div className='subscribe'>
                        <input placeholder='Your email address' type="text" />
                        <button>Subscribe</button>
                    </div>
                    <p>* We will send you weekly update for your better tour packages</p>
                </div>
            </div>
            <div className='stroke'></div>
            <div className='researve'>
                <p>Copyright@ Xpro 2022. All right Reserved.</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;
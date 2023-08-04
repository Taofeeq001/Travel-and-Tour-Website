import React from 'react'
import './Footer.css'
import {AiOutlineInstagram} from 'react-icons/ai'
import {BsMessenger} from 'react-icons/bs'
import {BiLogoTwitter, BiInfinite} from 'react-icons/bi'


const Footer = () => {
  return (
    <div>
        <div>
            <div className='travel'>
                <img src="" alt="" />
                <p>Travel helps companies manage payment properly</p>
                <div className='medias'>
                    <AiOutlineInstagram/>
                    <BsMessenger/>
                    <BiLogoTwitter/>
                    <BiInfinite/>
                </div>
            </div>
            <div>
                <h4>Company</h4>
                <a href="">About us</a>
                <a href="#career">Career</a>
                <a href="#career">Blog</a>
                <a href="#career">Pricing</a>
            </div>
            <div>
                <h4>Destination</h4>
                <a href="">Maidlives</a>
                <a href="">Los Angeles</a>
                <a href="">Las vegas</a>
                <a href="">Toronto</a>
            </div>
            <div>
                <h4>Join our Newletter</h4>
                <div>
                    <input type="text" />
                    <button className='desktop-btn'></button>
                </div>
                <p>* We will send you weekly update for your better tour packages</p>
            </div>
        </div>
    </div>
  )
}

export default Footer;
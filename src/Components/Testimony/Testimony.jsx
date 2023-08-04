import React from 'react'
import './Testimony.css';
import person from '../../Images/switzerland.png'


const Testimony = () => {
  return(
    <div className='testimony'>
        <div className='testimony-container'>
            <h4>PROMOTION</h4>
            <h1>See What Our Clients Say About Us</h1>
            <div>
                <img className='testimony-img' src={person} alt="" />
            </div>
            <div className='testimony-div'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore porro, labore maxime temporibus nesciunt ipsa perspiciatis nulla sequi voluptas minima et dolorum, ad veniam ducimus deserunt repellat pariatur eum commodi?</p>
                <h4>Christine Beckam - Designer</h4>
            </div>
        </div>
    </div>
  )
}

export default Testimony
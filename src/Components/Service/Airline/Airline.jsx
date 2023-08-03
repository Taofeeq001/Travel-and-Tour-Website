import React from 'react';
import './Airline.css';
import emirate from '../../../Images/emirate.png'
import triv from '../../../Images/trivago.png'
import bnb from '../../../Images/bnb.png'
import Turkish from '../../../Images/turkish.png'
import swiss from '../../../Images/swiss.png'


const Airline = () => {
  return (
    <div className="airlines">
        <img src={emirate} alt="" />
        <img src={triv} alt="" />
        <img src={bnb} alt="" />
        <img src={Turkish} alt="" />
        <img src={swiss} alt="" />
    </div>
  )
}

export default Airline;
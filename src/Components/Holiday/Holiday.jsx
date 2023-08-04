import React from 'react';
import './Holiday.css';
import Amazing from './Amazing/Amazing';
import Promotion from './Promotion/Promotion';
import Explore from './Explore/Explore';

const Holiday = () => {
  return (
    <div className='holiday'>
        <Amazing/>
        <Promotion/>
        <Explore/>
    </div>
  )
}

export default Holiday;
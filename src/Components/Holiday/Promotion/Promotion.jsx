import React from "react";
import './Promotion.css';
import paris from '../../../Images/Paris2.png'
import dest1 from '../../../Images/Destination 1.png'
import dest2 from '../../../Images/Destination 2.png'
import dest3 from '../../../Images/Destination 3.png'
// import dest1 from '../../../Images/Destination 1.png'

const Promotion = () =>{
  return(
    <div className="promotion">
      <div className="promotion-container">
        <div className="promotion-text">
          <h4>PROMOTION</h4>
          <h1>We Provide You Best Europe Sightseeing Tours</h1>
          <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
          <div>
            <button className="desktop-btn">View Packages</button>
          </div>
          <div className="promotion-images">
            <img src={dest1} alt="" />
            <img src={dest2} alt="" />
            <img src={dest3} alt="" />
            <img src={dest3} alt="" />
          </div>
        </div>
        <div>
          <img className="promotion-img" src={paris} alt="" />
        </div>
      </div>
    </div>
  )
}
export default Promotion;
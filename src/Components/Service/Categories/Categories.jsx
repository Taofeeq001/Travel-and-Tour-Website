import React from "react";
import './Categories.css';
import Categoryprop from "./Categoryprop";
import tour from '../../../Images/tour-guide 1.png';
import plane from '../../../Images/plane.png';
import rel from '../../../Images/hands 1.png';
import medical from '../../../Images/medical-team 1.png'
import rectangle from '../../../Images/Rectangle 157.png'
import honey from '../../../Images/Illustration.png'
import data from "./Data";
import flights from '../../../Images/Illustration flight.png'

const Categories = () =>{
    return(
        <div className="categories">
            <h4>CATEGORY</h4>
            <h1>We Offer Best Services</h1>
            <div className="offeredService">
                <Categoryprop
                    image = {tour}
                    header = 'Guided Tour'
                    paragraph = 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
                    class = "one"
                />
                <Categoryprop
                    image = {plane}
                    header = 'Guided Tour'
                    paragraph = 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
                    class = "two"
                />
                <img className="rect" src={rectangle} alt="" />
                <Categoryprop
                    image = {rel}
                    header = 'Guided Tour'
                    paragraph = 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
                    class = "three"
                />
                <Categoryprop
                    image = {medical}
                    header = 'Guided Tour'
                    paragraph = 'sunt qui repellat saepe quo velit aperiam id aliquam placeat.'
                    class = "four"
                />
            </div>
            <div className="romantic-tropical">
                <div>
                    <img className="romantic-image" src={honey} alt="" />
                    <img src="" alt="" />
                </div>
                <div className="romantic-content">
                    <h4>HONEYMOON SPECIALS</h4>
                    <h1>Our Romantic Tropical Destinations</h1>
                    <p>Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos. Non quis eius quo eligendi corrupti et fugiat nulla qui soluta recusandae in maxime quasi aut ducimus illum aut optio quibusdam!</p>
                    <div>
                        <button className="desktop-btn">View Packages</button>
                    </div>
                </div>
            </div>
            <div className="fast-easy">
                <div className="fast-container">
                    <h4>Fast & Easy</h4>
                    <div className="fast-details">
                        <div className="fast-detailsContent">
                            <div>
                                <h1>Get Your Favourite Resort Booking</h1>
                                <div>
                                    {
                                        data.map((data)=>{
                                            return(
                                                <div className="mapper">
                                                    <div>
                                                        <img src={data.image} alt="" />
                                                    </div>
                                                    <div>
                                                        <h4>{data.head}</h4>
                                                        <p>{data.para}</p>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div>
                                <img src={flights} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Categories;
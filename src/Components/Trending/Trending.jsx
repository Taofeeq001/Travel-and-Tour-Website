import React from "react";
import './Trending.css'
import Trendingprops from "./Trendingprops";
import destination from '../../Images/Destination 1.png';
import dest from '../../Image/switzerland.png'

const Trending = () =>{
    return(
        <div className="trending">
            <div className="trending-container">
                <h4>TRENDY</h4>
                <h1>Our Trending Tour Packages</h1>
                <div>
                    <Trendingprops
                        heroImage = {destination}
                        Image = {dest}
                        days = {<fiX/>+ ""}
                    />
                </div>
            </div>
        </div>
    )
}
export default Trending;
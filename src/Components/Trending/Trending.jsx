import React from "react";
import './Trending.css'
import Trend from "./Trendmap";


const Trending = () =>{
    return(
        <div className="trending">
            <div className="trending-container">
                <h4>TRENDY</h4>
                <div className="trend-heading">
                    <h1>Our Trending Tour Packages</h1>
                </div>
                <div className="trendingMap">
                    {
                        Trend.map((trend)=>{
                            return(
                                <div className="countryMap">
                                    <img className="country-img" src={trend.image} alt="" />
                                    <img className="img2" src={trend.image2} alt="" />
                                    <div className="content-mapped">
                                        <div className="calender" >
                                            <div className="cal-sub">
                                                <i>{trend.calander}</i>
                                                <p>{trend.days}</p>
                                            </div>
                                            <div className="cal-sub">
                                                <i>{trend.profile}</i>
                                                <p style={{color:'grey'}}>{trend.people}</p>
                                            </div>
                                        </div>
                                        <div className="country-star">
                                            <h1 style={{color:"#2F2F2F", fontWeight:'bold', fontFamily:"sans-serif"}}>{trend.country}</h1>
                                            <img className="stars" src={trend.star} alt="" />
                                        </div>
                                        <div className="loc-continent" > 
                                            <i>{trend.location}</i>
                                            <p>{trend.continent}</p>
                                        </div>
                                        <div className="heading-del">
                                            <h3 style={{color:"#DF6951"}}>{trend.heading}</h3>
                                            <del><h5 style={{color:'grey'}}>{trend.del}</h5></del>
                                        </div>
                                        <p className="word">{trend.word}</p>
                                        <div>
                                            <button>{trend.btn}</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
export default Trending;
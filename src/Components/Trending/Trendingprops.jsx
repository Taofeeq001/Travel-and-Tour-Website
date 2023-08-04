import React from "react";

const Trendingprops = (props) =>{
    return(
        <div className={props.class}>
            <img src={props.heroImage} alt="" />
            <img src={props.image} alt="" />
            <div style={{display:'flex', gap:'30px'}}>
                <p>{props.days}</p>
                <p>{props.people}</p>
            </div>
            <div style={{display:'flex', gap:'4rem'}}>
                <h1>{props.country}</h1>
                <img src={props.stars} alt="" />
            </div>
            <p>{props.continent}</p>
            <div style={{display:'flex', gap:'30px'}}>
                <h2>{props.amount}</h2>
                <del>{props.del}</del>
            </div>
            <p>{props.paragraph}</p>
            <button>{props.trendingBtn}</button>

        </div>
    )
}
export default Trendingprops;
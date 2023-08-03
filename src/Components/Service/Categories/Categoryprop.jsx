import React from "react";

const Categoryprop = (props) =>{
    return(
        <div className="props.class">
            <img src={props.image} alt="" />
            <h4>{props.header}</h4>
            <p>{props.paragraph}</p>
        </div>
    )
}
export default Categoryprop;
import React from "react";
import './Service.css';
import Airline from "./Airline/Airline";
import Categories from "./Categories/Categories";

const Service = () =>{
    return(
        <div className="service-page">
            <Airline/>
            <Categories/>
        </div>
    )
}
export default Service;
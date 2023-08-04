import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Holiday from "./Holiday/Holiday";
import Testimony from "./Testimony/Testimony";

const Landingpage = () =>{
    return(
        <div>
            <Hero/>
            <Service/>
            <Holiday/>
            <Testimony/>
        </div>
    )
}
export default Landingpage;
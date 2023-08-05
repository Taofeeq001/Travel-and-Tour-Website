import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Holiday from "./Holiday/Holiday";
import Testimony from "./Testimony/Testimony";
import Trending from "./Trending/Trending";

const Landingpage = () =>{
    return(
        <div>
            <Hero/>
            <Service/>
            <Holiday/>
            <Trending/>
            <Testimony/>
        </div>
    )
}
export default Landingpage;
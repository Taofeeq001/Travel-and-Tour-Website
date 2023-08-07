import React from "react";
import Hero from "./Hero/Hero";
import Service from "./Service/Service";
import Holiday from "./Holiday/Holiday";
import Testimony from "./Testimony/Testimony";
import Trending from "./Trending/Trending";
import Footer from "./Footer/Footer";

const Landingpage = () =>{
    return(
        <div>
            <Hero/>
            <Service/>
            <Holiday/>
            <Trending/>
            <Testimony/>
            <Footer/>
        </div>
    )
}
export default Landingpage;
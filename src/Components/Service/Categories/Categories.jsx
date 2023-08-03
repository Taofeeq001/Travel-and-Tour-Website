import React from "react";
import './Categories.css';
import Categoryprop from "./Categoryprop";
import tour from '../../../Images/tour-guide 1.png';
import plane from '../../../Images/plane.png';
import rel from '../../../Images/hands 1.png';
import medical from '../../../Images/medical-team 1.png'


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
        </div>
    )
}
export default Categories;
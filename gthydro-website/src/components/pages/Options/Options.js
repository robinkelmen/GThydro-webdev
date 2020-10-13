import React from 'react'
import { Link } from 'react-router-dom';
import { Model } from './Model';
import "./Options.css";

function Options() {
    return (
        <div>
        <h1 id="model-header" style={{  display:"block",  "paddingLeft": "30px" ,"marginTop":"30px", alignContent:"center", "textTransform": "uppercase"}}>Check Out Our Models</h1>
        <p id="model-intro" style={{  "fontFamily":"'Abel', sans-serif", "fontSize":"20px", display:"block",  "paddingLeft": "30px" ,"marginTop":"30px", alignContent:"center"}}>GT Hydro Patented Technology can be customized to meet your renewable project needs.  Units can be stacked to achieve desired project kw goal.
Tell us about your project. <Link className="quick-link"to="/contact"> Contact us now</Link>.
</p>
        <div className="container-options">
           
            <Model
             Size="model--small" 
             name="GT30"
             dimensions="30' Diameter Wheel"

            description="Generates 147kw/1,234,033kw Annually"
            homes="Enough energy for 100 homes annually"
            ></Model>
            <Model  
            Size="model--medium" 
            name="GT60"
            dimensions="60' Diameter Wheel"
            description="Generates 588kw/4,936,134kw Annually"
            homes="Enough energy for 430 homes annually"
            >

            </Model>
            <Model  Size="model--large" dimensions="50ft"
            name="GT250"
            dimensions="250' Diameter Wheel"
            description="Generates 10,202kw/85,696,763kw Annually"
            homes="Enough energy for 7,500 homes annually"
            ></Model>
        </div>
        </div>
    )
}

export default Options

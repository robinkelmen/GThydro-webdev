import React from 'react'
import { Model } from './Model';
import "./Options.css";

function Options() {
    return (
        <div>
        <h1 style={{display:"block",  "padding-left": "30px" ,"margin-top":"30px", alignContent:"center", "text-transform": "uppercase"}}>Check Out Our Models</h1>
        <div className="container-options">
           
            <Model
             Size="model--small" 
             dimensions="30ft"
            description="147 Kilowatts of Power in Deep Rivers Current."
            >10 ft</Model>
            <Model  
            Size="model--medium" 
            dimensions="100ft" 
            description=" 1.5 Megawatts of Power in Ocean Current.">27ft</Model>
            <Model  Size="model--large" dimensions="50ft"
            dimensions="250ft" 
            description="10 Megawatts of Power in Ocean Current."
            >50ft</Model>
        </div>
        </div>
    )
}

export default Options

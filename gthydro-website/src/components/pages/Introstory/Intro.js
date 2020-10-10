
import React from 'react';
import "./Intro.css";
import good from "./good.png";
import bad from "./bad.png";


function Intro() {
    return (
        <div>
            
            <div className="intro-content">
            <div className="info-wrapper">
                <div className="images-container">
                <img id="bad-scene" src={bad} alt="bad scene"/>
                <img id="good-scene" src={good} alt="good scene"/>
                </div>


<div className="intro_paragragh">
    
    <p></p>
<p>
The world continues to search for new and innovative ways to create cleaner energy sources.  Solar and Wind has made huge improvements in efficiencies, but are reaching a number of physical limits on power output with today’s technology and mechanical components.  Solar uses the sun’s energy to create electricity.  Wind captures “kinetic” energy as the source to create electricity. 
</p><p></p>
<p>
Both require tremendous amount of land which is scarce.  Both are also intermittent sources and not capable of generating electricity 24/7.
</p><p></p>
<p>
Hydro utilizes “kinetic” energy just like Wind.  Hydro power also faces its physical limitations.  Even with huge strides in the renewable hydropower sector it also is reaching similar technology and mechanical limitations today. 
</p><p></p>
<p>
So, what if innovation led us to a technology that is a renewable energy, zero carbon footprint, zero fuel costs, producing commercial grade electricity 24/7, environmentally benign, more cost efficient than any of the current technology and saves our land and natural views. GT Hydro did just that.  The commercial grade patented hydrokinetic technology utilizes the natural energy of flowing water to generate motion that in turn is 100X’s faster than the flow of the Ocean/River current.  This patented technology generates renewable power at a fraction of the cost of traditional electrical generation technologies.  
</p><p></p>
<p>
Not visible to the human eye.  You have to go below the surface to see…
</p><p></p>


</div>

</div> 
             </div>
        </div>
    )
}

export default Intro

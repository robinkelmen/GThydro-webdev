import React from 'react'
import {Button} from '../Button';
import {Link} from 'react-router-dom';
import './Infosection.css';
import logo from '../logo.png';
import turbine from './turbine.png'

function Infosection() {
 

    return (
        <>
        <div>

        <img src={logo}  alt="Logo" className='logo--home' />


{/* <div className="tag-line">
    Energy Solutions
</div> */}
<div className="wave-container">
    <div className="wave"></div>
    <div className="wave"></div>
    <div className="wave"></div>
    
</div>
<div className="description">
    <h1>What We Are All About</h1>
    

</div>


</div>





        </>
    )
}

export default Infosection

import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../Button';




function howitworks() {
    return (
        <div>
            <div className="container-butt">
            <h3>How it Works</h3>
            
                <Link to='/aboutpdf' className="blue"></Link>
              
               </div>
            </div>

    )
}

export default howitworks

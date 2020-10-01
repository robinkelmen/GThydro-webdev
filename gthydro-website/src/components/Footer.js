import React from "react";
import "./Footer.css";
import {FiPhone, FiFacebook, FiTwitter, FiMail} from 'react-icons/fi'
import {FaLocationArrow, FaGlobeAmericas, FaFax, FaInstagram} from 'react-icons/fa'

 

function Footer() {
  return (

    <div className="main-footer">
        <div className="phantom"></div>
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>GT HYDRO, LLC </h4>
            <ui className="list-unstyled">
              <li><FiPhone/> (901) 229-1395</li>
              <li><FaFax/> (901) 323-0846</li>
              <li> <FaLocationArrow/> 3540 Summer Ave, Suite 200</li>
              <li> <FaGlobeAmericas/> Memphis, TN 38122</li>
              </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Social Media</h4>
            <ui className="list-unstyled">
              <li> 
                <FiFacebook/> Facebook</li>
              <li> <FaInstagram/> Instagram</li>
              <li> <FiTwitter/> Twitter</li>
              <li><FiMail/> Email</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Information</h4>
            <ui className="list-unstyled">
              <li>Contact Us</li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} GT Hydrokinetic, LLC | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
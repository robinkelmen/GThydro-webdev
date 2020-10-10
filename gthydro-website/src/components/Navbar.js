import React, {useState, useEffect }from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Button } from './Button';
import './Navbar.css';
import {IconContext} from 'react-icons/lib'




function Navbar() {
    const [clicked, setClicked] = useState(false);
    const [buttonMob, setButtonMob] = useState(false);

    const handleClick = ()=> setClicked(!clicked);
    const closeMobileMenu = ()=> setClicked(false);
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButtonMob(false);
        }else{
            setButtonMob(true)
        }
    }

    useEffect(() => {
        showButton();
      }, []);
      const toTop = () =>{
        window.scrollTo(0,0);
      }
    window.addEventListener('resize', showButton);

    return (
       <>
       <IconContext.Provider value={{color: '#fff'}}>
        <div className="navbar">
            <div className="navbar-container container">

                <Link to="/" className="navbar-logo">
                <div id="gt">GT</div>HYDRO

                </Link>
                <div className="menu-icon" onClick={handleClick }>
                     {clicked ?<FaTimes/> : <FaBars/>}
                </div>
                
                <ul className={clicked ? 'nav-menu active': 'nav-menu'}>
                    <li  className="nav-item">
                    
                        
                        <Link to='/' className="nav-links" onClick={closeMobileMenu}>
                            Home
                        </Link>
                       
                        
                    </li>
                    <li  className="nav-item">
                        <Link to='/whoweare' className="nav-links" onClick={closeMobileMenu}>
                            Who We Are 
                        </Link>
                    </li>
                    <li  className="nav-item">
                        <Link to='/howitworks' className="nav-links" onClick={closeMobileMenu}>
                            How It Works
                        </Link>
                    </li>
                    <li  className="nav-item">
                        <Link to='/News' className="nav-links" onClick={closeMobileMenu}>
                            News
                        </Link>
                    </li>
                    <li  className="nav-item">
                        <Link to='/projects' className="nav-links" onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li className='nav-btn'>
                {!buttonMob ? (
                  <Link to='/contact' className='btn-link'>
                    <Button 
                    buttonStyle='btn--outline'
                    onClick={closeMobileMenu}
                    >Contact Us</Button>
                  </Link>
                ) : (
                  <Link to='/contact' className='btn-link'>
                    <Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={toTop}>Contact Us</Button>
                  </Link>
                )}
              </li>
                </ul>

            </div>
        </div>
        </IconContext.Provider>
        
</>
        
    )
}

export default Navbar

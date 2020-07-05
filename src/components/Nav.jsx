import React, {useState} from "react";
import { Link } from "react-router-dom"

import styles from "../styles/nav.module.css";
import "../styles/nav.css"

const Nav = () => {

  const [isOpen, setNav] = useState(false)

    const toggleNav = () => {
        setNav(isOPen => !isOpen)
    }


  return (
    <nav className='navbar'>
        <img 
                        type="button" 
                        className="logo-menu"
                        src="../../menulogo.svg"
                        onClick={toggleNav}/>
        <ul className={isOpen? 'show-nav' : 'nav-list hide-nav'}>
          <Link to="/"><li className='logo-li'>
            <img src="../../2020motorcyclepreviews.svg"/>
          </li></Link>
          <Link to="/collection"><li onClick={toggleNav} className='nav-li'>Collection</li></Link>
          <Link to="/mybikes"><li onClick={toggleNav} className='nav-li'>My Bikes</li></Link>
          <Link to="/dashboard"><li onClick={toggleNav} className='nav-li'>Dashboard</li></Link>
          <Link to='/about'><li onClick={toggleNav} className='nav-li'>About</li></Link>
          <Link to="/authentification"><li onClick={toggleNav} className='nav-li'>Log in | Sign Up</li></Link>
        </ul>
      </nav>
  );
};

export default Nav;

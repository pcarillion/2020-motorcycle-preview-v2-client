import React from "react";
import { Link } from "react-router-dom"

import styles from "../styles/nav.module.css";
import "../styles/nav.css"

const Nav = () => {
  return (
    <nav className='navbar'>
      <ul className='nav-list'>
        {/* <Link to="/"><li>Home</li></Link> */}
        <Link to="/"><li className='logo-li'>
          <img src="../../2020motorcyclepreviews.svg"/>
        </li></Link>
        <Link to="/collection"><li className='nav-li'>Collection</li></Link>
        <Link to="/mybikes"><li className='nav-li'>My Bikes</li></Link>
        <Link to="/dashboard"><li className='nav-li'>Dashboard</li></Link>
        <Link to='/about'><li className='nav-li'>About</li></Link>
        <Link to="/authentification"><li className='nav-li'>Log in | Sign Up</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;

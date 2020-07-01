import React from "react";
import { Link } from "react-router-dom"

import styles from "../styles/nav.module.css";

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <Link to="/"><li>Home</li></Link>
        <Link to="/collection"><li>Collection</li></Link>
        <Link to="/mybikes"><li>My Bikes</li></Link>
        <Link to="/dashboard"><li>Dashboard</li></Link>
        <Link to="/authentification"><li>Log in / Sign Up</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;

import React from 'react'


// style

import styles from '../styles/nav.module.css'

const Nav = () => {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li>Home</li>
                <li>Collections</li>
                <li>My Bikes</li>
                <li>Dashboard</li>
                <li>Log in / Sign Up</li>
            </ul>
        </nav>
    )
}

export default Nav

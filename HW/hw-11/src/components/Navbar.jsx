import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <NavLink to="/" className={styles.link}>Главная</NavLink>
            <NavLink to="/articles" className={styles.link}>Статьи</NavLink>
        </nav>
    )
}

export default Navbar; 
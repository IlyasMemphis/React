import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">Мой Сайт</Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Главная</Link></li>
          <li><Link to="/about">О нас</Link></li>
          <li><Link to="/services">Услуги</Link></li>
          <li><Link to="/contacts">Контакты</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

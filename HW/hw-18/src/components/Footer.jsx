import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <p>&copy; {new Date().getFullYear()} Мой Сайт. Все права защищены.</p>
        <nav className={styles.footerNav}>
          <ul>
            <li><a href="/privacy">Политика конфиденциальности</a></li>
            <li><a href="/terms">Условия использования</a></li>
            <li><a href="/contacts">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

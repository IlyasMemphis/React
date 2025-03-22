import React from "react";
import styles from "../styles/Contacts.module.css";
import snapchatLogo from "../assets/snapchat-logo.svg";
import facebookLogo from "../assets/Facebook-f_Logo-Blue-Logo.wine.svg";
import xLogo from "../assets/x-2.svg";

const Contacts = () => {
  return (
    <section className={styles.contacts}>
      <div className={styles.contactInfo}>
        <h1>Контакты</h1>
        <ul>
          <li>Телефон: +7 (123) 456-78-90</li>
          <li>Email: example@email.com</li>
        </ul>

        <form className={styles.contactForm}>
          <input type="email" placeholder="Ваша почта" required />
          <input type="text" placeholder="Ваше имя" required />
          <textarea placeholder="Ваше сообщение" required></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>

      <div className={styles.socials}>
        <p>Найдите нас на:</p>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
          <img src={snapchatLogo} alt="Snapchat" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <img src={xLogo} alt="X" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;

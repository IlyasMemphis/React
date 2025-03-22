import React from 'react';
import styles from "../Contacts.module.css";
import snapchatLogo from '../../src/assets/snapchat-logo.svg';
import facebookLogo from '../assets/Facebook-f_Logo-Blue-Logo.wine.svg';
import xLogo from '../assets/x-2.svg';

const Contacts = () => {
  return (
    <section className={styles.contactsSection}>
      <div className={styles.contactInfo}>
        <h1>Контакты</h1>
        <ul>
          <li>8.800.000.00.00</li>
          <li>emailiosample@gmail.com</li>
        </ul>
        <form className={styles.contactForm}>
          <input type="email" placeholder="Введите ваш email" required />
          <input type="text" placeholder="Введите ваше имя" required />
          <textarea placeholder="Введите сообщение" required />
          <button type="submit">Отправить</button>
        </form>
      </div>
      <div className={styles.socialLinks}>
        <p>Найдите нас на:</p>
        <a href="https://snapchat.com" target="_blank" rel="noopener noreferrer">
          <img src={snapchatLogo} alt="Snapchat" />
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <img src={facebookLogo} alt="Facebook" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          <img src={xLogo} alt="X" />
        </a>
      </div>
    </section>
  );
};

export default Contacts;
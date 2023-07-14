import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import home from "../../assets/home.png"
const Header = () => {
    
  return (
    <header className={styles.container}>
      <img src={logo} alt="gemtopia" className={styles.logo}/>
      <nav className={styles.navbar}>
        <ul>
          <li>Games</li>
          <li>Gemyto</li>
          <li>About</li>
          <li className={styles.icon}>
            <img src={home} alt="home" />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

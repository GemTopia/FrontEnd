import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className={styles.container}>
      <Link to="/home">
        <img src={logo} alt="gemtopia" className={styles.logo} />
      </Link>
      <nav className={styles.navbar}>
        <ul>
          <Link to="/games">
            <li>Games</li>
          </Link>
          <li>Gemyto</li>
          <li>About</li>
          <Link to="/profile">
            <li className={styles.icon}>
              <img src={profile} alt="home" />
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

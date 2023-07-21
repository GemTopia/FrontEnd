import React, { Fragment, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Link } from "react-router-dom";
import Clock from "../other/Clock";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  if (localStorage.getItem("username")) setIsLoggedIn(true);

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={logo} alt="gemtopia" className={styles.logo} />
      </Link>
      {isLoggedIn ? (
        <Fragment>
          <Clock className={styles.Clock} />
          <nav className={styles.navbar}>
            <ul>
              <Link to="/games">
                <li>Games</li>
              </Link>
              <li>Gemyto</li>
              <li>About</li>
              <Link to="/profile">
                <li className={styles.icon}>
                  <img src={profile} alt="profile" />
                </li>
              </Link>
            </ul>
          </nav>
        </Fragment>
      ) : (
        <Fragment>
          <nav className={styles.navbar}>
            <ul>
              <li>Roadmap</li>
              <li>Community</li>
              <li>FAQ</li>
            </ul>
          </nav>
          <nav className={`${styles.navbar} ${styles.auth}`}>
            <ul>
              <Link to="/login">
                <li>Log in</li>
              </Link>
              <Link to="signup" className={styles.signup}>
                <li>Sign up</li>
              </Link>
            </ul>
          </nav>
        </Fragment>
      )}
    </header>
  );
};

export default Header;

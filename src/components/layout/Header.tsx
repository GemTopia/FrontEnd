import React, { Fragment, useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.png";
import { Link, useNavigate } from "react-router-dom";
import Clock from "../other/Clock";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
  }, [localStorage.getItem("username")]);
  const roadmapHandler = () => {
    const element = document.getElementById("roadmap");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const communityHandler = () => {
    const element = document.getElementById("community");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const faqHandler = () => {
    const element = document.getElementById("faq");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.clear();
    setIsLoggedIn(false);
    navigate("/");

    if (document.location.pathname === "/") document.location.reload();
  };
  return (
    <header className={styles.container}>
      <Link to="/home">
        <img src={logo} alt="gemtopia" className={styles.logo} />
      </Link>
      {isLoggedIn ? (
        <Fragment>
          <Clock className={styles.Clock} />
          <nav className={`${styles.navbar} ${styles.right}`}>
            <ul>
              <Link to="/games">
                <li>Games</li>
              </Link>
              <li>Gemyto</li>
              <li onClick={logoutHandler}>Logout</li>
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
              <li onClick={roadmapHandler}>Roadmap</li>
              <li onClick={communityHandler}>Community</li>
              <li onClick={faqHandler}>FAQ</li>
            </ul>
          </nav>
          <nav className={`${styles.navbar} ${styles.right}`}>
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

import React, { Fragment, useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import profile from "../../assets/profile.svg";
import { Link, useNavigate } from "react-router-dom";
import Clock from "../other/Clock";
import home from "../../assets/home-icon.png";
import menu from "../../assets/menu.svg";
import X from "../../assets/menu-X.svg";
const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [homeIcon, setHomeIcon] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [openMenu, setMenuOpen] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("username")) {
      setIsLoggedIn(true);
    } else setIsLoggedIn(false);
    if (document.location.pathname === "/profile") setHomeIcon(true);
    else setHomeIcon(false);
    if (window.screen.width < 768) setIsMobile(true);
    else setIsMobile(false);
  }, [
    localStorage.getItem("username"),
    document.location.pathname,
    document.getElementsByTagName("body"),
  ]);
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
  const menuHandler = () => {
    setMenuOpen((current) => !current);
  };
  return (
    <Fragment>
      <header className={styles.container}>
        <Link to="/home">
          <img src={logo} alt="gemtopia" className={styles.logo} />
        </Link>
        {isMobile ? (
          openMenu ? (
            <Fragment>
              <Link to="/profile" className={styles.right}>
                <img
                  src={profile}
                  alt="profile"
                  className={`${styles.icon} `}
                />
              </Link>
              <img
                src={X}
                alt="X"
                className={styles.icon}
                onClick={menuHandler}
              />
            </Fragment>
          ) : (
            <Fragment>
              <Link to="/profile" className={styles.right}>
                <img
                  src={profile}
                  alt="profile"
                  className={`${styles.icon} `}
                />
              </Link>
              <img
                src={menu}
                alt="menu"
                className={styles.icon}
                onClick={menuHandler}
              />
            </Fragment>
          )
        ) : isLoggedIn ? (
          <Fragment>
            <Clock className={styles.Clock} />
            <nav className={`${styles.navbar} ${styles.right}`}>
              <ul>
                <Link to="/games">
                  <li>Games</li>
                </Link>
                <Link to="/inventory">
                  <li>Gemyto</li>
                </Link>
                <li onClick={logoutHandler}>Logout</li>
                <Link to={homeIcon ? "/home" : "/profile"}>
                  <li className={styles.icon}>
                    {homeIcon ? (
                      <img src={home} alt="home" />
                    ) : (
                      <img src={profile} alt="profile" />
                    )}
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
      {openMenu && (
        <div className={styles.menu}>
          <ul>
            <li>
              <Link to="/games">Games</Link>
            </li>
            <li>
              <Link to="/inventory">Gemyto</Link>
            </li>
            <li onClick={logoutHandler}>Logout</li>
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default Header;

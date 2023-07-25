import React, { useEffect, useState } from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/logo.svg";
import telegram from "../../assets/social-media/footer/telegram.png";
import hoveredTelegram from "../../assets/social-media/footer/hovered telegram.png";
import twitter from "../../assets/social-media/footer/twitter.png";
import hoveredTwitter from "../../assets/social-media/footer/hovered twitter.png";
import discord from "../../assets/social-media/footer/discord.png";
import hoveredDiscord from "../../assets/social-media/footer/hovered discord.png";
import email from "../../assets/social-media/footer/gmail.png";
import hoveredEmail from "../../assets/social-media/footer/hovered gmail.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [telegramIsHovered, setTelegramIsHovered] = useState<boolean>(false);
  const [twitterIsHovered, setTwitterIsHovered] = useState<boolean>(false);
  const [discordIsHovered, setDiscordIsHovered] = useState<boolean>(false);
  const [emailIsHovered, setEmailIsHovered] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState(false);
  const handleTelegramHover = () => {
    setTelegramIsHovered((current) => !current);
  };
  const handleTwitterMouseHover = () => {
    setTwitterIsHovered((current) => !current);
  };

  const handleDiscordMouseHover = () => {
    setDiscordIsHovered((current) => !current);
  };

  const handleEmailMouseHover = () => {
    setEmailIsHovered((current) => !current);
  };
  useEffect(() => {
    if (window.screen.width < 768) setIsMobile(true);
  }, []);
  return (
    <footer className={styles.container}>
      <Link to="/">
        <img src={logo} alt="gemtopia" className={styles.logo} />
      </Link>
      {!isMobile && (
        <nav className={styles.navbar}>
          <ul>
            <Link to="/term-of-use">
              <li>Terms of Use</li>
            </Link>
            <Link to="/learn-more">
              <li>Learn more</li>
            </Link>
          </ul>
        </nav>
      )}
      <div className={styles["social-media-container"]}>
        <img
          src={telegramIsHovered ? hoveredTelegram : telegram}
          alt="telegram"
          onMouseEnter={handleTelegramHover}
          onMouseLeave={handleTelegramHover}
        />
        <img
          src={twitterIsHovered ? hoveredTwitter : twitter}
          alt="twitter"
          onMouseEnter={handleTwitterMouseHover}
          onMouseLeave={handleTwitterMouseHover}
        />
        <img
          src={discordIsHovered ? hoveredDiscord : discord}
          alt="discord"
          onMouseEnter={handleDiscordMouseHover}
          onMouseLeave={handleDiscordMouseHover}
        />
        <img
          src={emailIsHovered ? hoveredEmail : email}
          alt="email"
          onMouseEnter={handleEmailMouseHover}
          onMouseLeave={handleEmailMouseHover}
        />
      </div>
    </footer>
  );
};

export default Footer;

import React, { Fragment } from "react";
import style from "./ProfileEdit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import youtube from "../assets/youtube.png";
import discord from "../assets/discord.png";
import twitch from "../assets/twitch.png";
import steam from "../assets/steam.png";
import instagram from "../assets/instagram.png";
import telegram from "../assets/telegram.png";
import { faL, faXmark } from "@fortawesome/free-solid-svg-icons";
import useInput from "../components/hooks/use-input";

const ProfileEdit = () => {
  const {
    enteredValue: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    inputChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "Jasmin-Drogon");
  const {
    enteredValue: bioValue,
    isValid: bioIsValid,
    hasError: bioHasError,
    inputChangeHandler: bioChangeHandler,
    inputBlurHandler: bioBlurHandler,
  } = useInput(() => {},
  "I'm Mathias Yeo, and I'm passionate about writing engaging content for businesses");

  return (
    <Fragment>
      <div className={style["social-media"]}>
        <a href="/" target="balnk">
          {" "}
          <img src={youtube} alt="youtube" />{" "}
        </a>
        <a href="/" target="balnk">
          {" "}
          <img src={discord} alt="discord" />{" "}
        </a>
        <a href="/" target="balnk">
          {" "}
          <img src={twitch} alt="twitch" />{" "}
        </a>
        <a href="/" target="balnk">
          {" "}
          <img src={steam} alt="steam" />{" "}
        </a>
        <a href="/" target="balnk">
          {" "}
          <img src={instagram} alt="instagram" />{" "}
        </a>
        <a href="/" target="balnk">
          {" "}
          <img src={telegram} alt="telegram" />{" "}
        </a>
      </div>
      <form action="" className={style["info-form"]}>
        <label htmlFor="username">user name</label>
        <input
          name="username"
          type="text"
          id="username"
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
          className={style.usernameEdit}
          value={usernameValue}
        />

        <label htmlFor="bio">bio</label>

        <textarea
          id="bio"
          className={style.bioEdit}
          cols={35}
          rows={3}
          value={bioValue}
          onChange={bioChangeHandler}
          onBlur={bioBlurHandler}
        ></textarea>
      </form>
      <div className={style.editContect}>
        <a className={style.changPassword}>change password</a>
        <form>
          <label htmlFor="showScores" className={style.toggleLable}>
            show scores in public
          </label>
          <input
            type="checkbox"
            // onChange={toggleHandler}
            // checked={!beProtected}
          />
          <br />
          <input type="submit" className={style.submitEditButton} />
        </form>
      </div>
    </Fragment>
  );
};

export default ProfileEdit;

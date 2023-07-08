import React, { FormEvent, Fragment, useState } from "react";
import styles from "./ProfileEdit.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import youtube from "../../assets/youtube.png";
import discord from "../../assets/discord.png";
import twitch from "../../assets/twitch.png";
import steam from "../../assets/steam.png";
import instagram from "../../assets/instagram.png";
import telegram from "../../assets/telegram.png";
import useInput from "../../components/hooks/use-input";
import ChangePassword from "./ChangePassword";
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import SocialEdit from "./SocialEdit";

const ProfileEdit = () => {
  const [pageState, setPageState] = useState<String>("full-edit");
  const [profilePrivacy, setProfilePrivacy] = useState<String>("public");
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

  const changePassHandler = () => {
    setPageState("change-pass");
  };
  const cancelHandler = () => {
    setPageState("full-edit");
  };
  const switchHandler = (event: any) => {
    if (event.target.checked === true) setProfilePrivacy("private");
    else setProfilePrivacy("public");
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  const editSocialHandler = () => {
    setPageState("social-edit");
  };
  return (
    <Fragment>
      {pageState === "full-edit" ? (
        <Fragment>
          <div className={styles["social-media"]} onClick={editSocialHandler}>
            <FontAwesomeIcon
              icon={faPenToSquare}
              className={styles["edit-icon"]}
            />
            Edit social media
          </div>
          {/* <a href="/" target="balnk">
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
          </a> */}
          <form className={styles["info-form"]} onSubmit={submitHandler}>
            <label htmlFor="username">user name</label>
            <input
              name="username"
              type="text"
              onChange={usernameChangeHandler}
              onBlur={usernameBlurHandler}
              className={styles.usernameEdit}
              value={usernameValue}
            />

            <label htmlFor="bio">bio</label>

            <textarea
              className={styles.bioEdit}
              cols={35}
              rows={3}
              value={bioValue}
              onChange={bioChangeHandler}
              onBlur={bioBlurHandler}
            ></textarea>
            <button
              className={styles.changePassword}
              onClick={changePassHandler}
            >
              change password
            </button>
            <div>
              <label>Keep achivments hidden</label>
              <label className={styles.switch}>
                <input type="checkbox" onChange={switchHandler} />
                <span className={styles.slider}></span>
              </label>
            </div>
            {profilePrivacy === "private" && (
              <p className={styles.warning}>
                Scores and total gemyto remain hidden, but will be shown within
                each game. You won't appear in the top 20 players list. Click to
                reveal them
              </p>
            )}
            <button type="submit" className={styles.submitEditButton}>
              Submit
            </button>
          </form>
        </Fragment>
      ) : pageState === "change-pass" ? (
        <ChangePassword cancelChange={cancelHandler} />
      ) : (
        <SocialEdit cancelEditSocial={cancelHandler} />
      )}
    </Fragment>
  );
};

export default ProfileEdit;

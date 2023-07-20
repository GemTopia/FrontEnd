import React, { FormEvent } from "react";
import styles from "./SocialEdit.module.css";
import useInput from "../hooks/use-input";
import youtube from "../../assets/social-media/youtube.png";
import discord from "../../assets/social-media/discord.png";
import twitch from "../../assets/social-media/twitch.png";
import steam from "../../assets/social-media/steam.png";
import instagram from "../../assets/social-media/instagram.png";
import telegram from "../../assets/social-media/telegram.png";
const SocialEdit: React.FC<{ cancelEditSocial: Function }> = (props) => {
  const {
    enteredValue: discordValue,
    isValid: discordIsValid,
    hasError: discordHasError,
    inputChangeHandler: discordChangeHandler,
    inputBlurHandler: discordBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: twitchValue,
    isValid: twitchIsValid,
    hasError: twitchHasError,
    inputChangeHandler: twitchChangeHandler,
    inputBlurHandler: twitchBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: steamValue,
    isValid: steamIsValid,
    hasError: steamHasError,
    inputChangeHandler: steamChangeHandler,
    inputBlurHandler: steamBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: youtubeValue,
    isValid: youtubeIsValid,
    hasError: youtubeHasError,
    inputChangeHandler: youtubeChangeHandler,
    inputBlurHandler: youtubeBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: telegramValue,
    isValid: telegramIsValid,
    hasError: telegramHasError,
    inputChangeHandler: telegramChangeHandler,
    inputBlurHandler: telegramBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: instagramValue,
    isValid: instagramIsValid,
    hasError: instagramHasError,
    inputChangeHandler: instagramChangeHandler,
    inputBlurHandler: instagramBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const cancelHandler = () => {
    props.cancelEditSocial();
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles["input-container"]}>
        <label htmlFor="discord">
          <img src={discord} alt="discord" /> Discord
        </label>
        <input
          name="discord"
          type="text"
          onChange={discordChangeHandler}
          onBlur={discordBlurHandler}
          className={styles.input}
          id="discord"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="twitch">
          <img src={twitch} alt="twitch" /> Twitch
        </label>
        <input
          name="twitch"
          type="text"
          onChange={twitchChangeHandler}
          onBlur={twitchBlurHandler}
          className={styles.input}
          id="twitch"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="steam">
          <img src={steam} alt="steam" /> Steam
        </label>
        <input
          name="steam"
          type="text"
          onChange={steamChangeHandler}
          onBlur={steamBlurHandler}
          className={styles.input}
          id="steam"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="youtube">
          <img src={youtube} alt="youtube" /> Youtube
        </label>
        <input
          name="youtube"
          type="text"
          onChange={youtubeChangeHandler}
          onBlur={youtubeBlurHandler}
          className={styles.input}
          id="youtube"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="telegram">
          <img src={telegram} alt="telegram" /> Telegram
        </label>
        <input
          name="telegram"
          type="text"
          onChange={telegramChangeHandler}
          onBlur={telegramBlurHandler}
          className={styles.input}
          id="telegram"
        />
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="instagram">
          <img src={instagram} alt="instagram" /> Instagram
        </label>
        <input
          name="instagram"
          type="text"
          onChange={instagramChangeHandler}
          onBlur={instagramBlurHandler}
          className={styles.input}
          id="instagram"
        />
      </div>
      <div className={styles.buttons}>
        <button className={styles["cancel-button"]} onClick={cancelHandler}>
          cancel
        </button>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};

export default SocialEdit;

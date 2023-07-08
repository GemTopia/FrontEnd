import React, { useState } from "react";
import ProfileGameItem from "./ProfileGameItem";
import styles from "./ProfileGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import gameItem from "../../models/models";

const ProfileGames: React.FC<{ games: gameItem[] }> = (props) => {
  const [topGame, setTopGame] = useState("0");
  const [disableDown, setDisableDown] = useState(false);
  const [disableUp, setDisableUp] = useState(true);

  const scrollUpHandler = () => {
    if (Number(topGame) - 4 > 0) {
      const element = document.getElementById(String(Number(topGame) - 4));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTopGame((current) => String(Number(current) - 4));
      }
      setDisableUp(false);
      setDisableDown(false);
    } else if (topGame !== "0") {
      const element = document.getElementById("0");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTopGame("0");
      }
      setDisableUp(true);
      setDisableDown(false);
    }
  };
  const scrollDownHandler = () => {
    const element = document.getElementById(String(Number(topGame) + 4));
    if (Number(topGame) + 8 >= props.games.length) setDisableDown(true);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTopGame((current) => String(Number(current) + 4));
      setDisableUp(false);
    }
  };
  const loadedGames = props.games;
  return (
    <div className={styles.ContentContainer}>
      <div className={styles.title}>
        <p className={styles["score-title"]}>scores</p>
        <span className={styles.icon} onClick={scrollUpHandler}>
          <FontAwesomeIcon
            icon={faAngleUp}
            className={disableUp ? styles.disabled : ""}
          />
        </span>
        <span className={styles.icon} onClick={scrollDownHandler}>
          <FontAwesomeIcon
            icon={faAngleDown}
            className={disableDown ? styles.disabled : ""}
          />
        </span>
      </div>

      <div className={styles["game-container"]}>
        {loadedGames &&
          loadedGames.map((item) => {
            return <ProfileGameItem key={item.name} game={item} />;
          })}
      </div>
    </div>
  );
};

export default ProfileGames;

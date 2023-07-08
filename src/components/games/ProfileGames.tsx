import React, { useState } from "react";
import ProfileGameItem from "./ProfileGameItem";
import style from "./ProfileGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import profileGameItem from "../../models/profileGameItem";

const ProfileGames: React.FC<{ games: profileGameItem[] }> = (props) => {
  const [topGame, setTopGame] = useState("0");
  const scrollUpHandler = () => {
    const element = document.getElementById(String(Number(topGame) - 4));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTopGame((current) => String(Number(current) - 4));
      console.log(topGame);
    }
  };
  const scrollDownHandler = () => {
    const element = document.getElementById(String(Number(topGame) + 4));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setTopGame((current) => String(Number(current) + 4));
      console.log(topGame);
    }
  };
  const loadedGames = props.games;
  return (
    <div className={style.ContentContainer}>
      <div className={style.title}>
        <p className={style["score-title"]}>scores</p>
        <span className={style.icon}>
          <FontAwesomeIcon icon={faAngleUp} onClick={scrollUpHandler} />
        </span>
        <span className={style.icon}>
          <FontAwesomeIcon icon={faAngleDown} onClick={scrollDownHandler} />
        </span>
      </div>

      <div className={style["game-container"]}>
        {loadedGames &&
          loadedGames.map((item) => {
            return <ProfileGameItem key={item.name} game={item} />;
          })}
      </div>
    </div>
  );
};

export default ProfileGames;

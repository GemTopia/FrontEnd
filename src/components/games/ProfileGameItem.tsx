import React from "react";
import style from "./ProfileGameItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import profileGameItem from "../../models/profileGameItem";
import GameItem from "../../models/GameItem";
import { baseUrl } from "../../shares/shared";

const ProfileGameItem: React.FC<{ game: GameItem; index: number }> = (
  props
) => {
  return (
    <div
      className={`${style.game} ${
        Number(props.index) % 2 == 0 ? style.dark_back : style.light_back
      }`}
      id={`profile${props.index}`}
    >
      <img
        src={baseUrl + props.game.logo_image}
        alt=""
        className={style["game-pic"]}
      />
      <p className={style["game-name"]}>{props.game.name}</p>
      {/* <FontAwesomeIcon icon={faAngleUp} className={style['up-icon']} /> */}
      <p className={style["score"]}>{props.game.scores}</p>
    </div>
  );
};

export default ProfileGameItem;

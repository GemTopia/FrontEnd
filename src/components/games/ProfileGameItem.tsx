import React from "react";
import style from "./ProfileGameItem.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import profileGameItem from "../../models/profileGameItem";

const ProfileGameItem: React.FC<{ game: profileGameItem }> = (props) => {
  return (
    <div
      className={`${style.game} ${
        Number(props.game.id) % 2 == 0 ? style.dark_back : style.light_back
      }`}
      id={`profile${props.game.id}`}
    >
      {/* <img
        src={require(`../../assets/${props.game.image_name}`)}
        alt=""
        className={style["game-pic"]}
      /> */}
      <p className={style["game-name"]}>{props.game.name}</p>
      {/* <FontAwesomeIcon icon={faAngleUp} className={style['up-icon']} /> */}
      <p className={style["score"]}>{props.game.score}</p>
    </div>
  );
};

export default ProfileGameItem;

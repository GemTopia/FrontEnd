import React, { useState } from "react";
import style from "./GameInfo.module.css";
import GameItem from "../../models/GameItem";
import { Link } from "react-router-dom";
import axios, * as others from "axios";
import { baseUrl } from "../../shares/shared";
const GameInfo: React.FC<{ game: GameItem }> = (props) => {
  const [liked, setLiked] = useState<boolean>(props.game.is_liked_by_user);
  const [isHovered, setIsHovered] = useState(false);
  const [likeCount, setLikeCount] = useState<number>(props.game.num_of_like);

  const likeHandler = () => {
    axios
      .get(`${baseUrl}/game/like/${props.game.id}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        // if ((isLiked && likedNow) || (!isLiked && disLikedNow)) {
        //   setLikedNow(false);
        //   setDisLikedNow(false);
        // } else if (isLiked) {
        //   setDisLikedNow(true);
        //   setLikedNow(false);
        // } else {
        //   setDisLikedNow(false);
        //   setIsLiked(true);
        // }
        // setIsLiked((current) => {
        //   return !current;
        // });
        setLiked((current) => !current);

        if (liked === false) {
          setLikeCount((current) => current + 1);
        } else {
          setLikeCount((current) => current - 1);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  ///////////////////////////////////////////////////////////////////////

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className={style["container"]}>
      <div className={style["game-info-container"]}>
        <img
          src={require("../../assets/GamePic.png")}
          // {props.game.logo_image}
          alt="game thumbnail"
          className={style.thumbnail}
        />
        <div className={style["info-box"]}>
          <h1>{props.game.name}</h1>
          <p className={style["game-name"]}>{props.game.game_type}</p>
          {/* <p className={style.rank}>#1</p> */}
          <p className={style.description}>{props.game.bio}</p>
          <div className={style.buttons}>
            <div className={style["like-container"]}>
              <img
                src={require(`../../assets/${
                  liked ? "liked-icon.png" : "unliked-icon.png"
                }`)}
                alt="like icon"
                onClick={likeHandler}
                className={style["like-icon"]}
              />
              <p className={style["like-count"]}>{likeCount}</p>
            </div>
            <Link to="/report" className={style["report"]}>
              <img
                src={require(`../../assets/${
                  isHovered ? "hovered-report.png" : "report.png"
                }`)}
                alt="report icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={style["report-icon"]}
              />
            </Link>
            <a href={props.game.link} className={style.link} target="blank">
              <button className={style["play-button"]}>Play now</button>
            </a>
          </div>
        </div>
      </div>
      <img
        src={require("../../assets/roadmap.png")}
        alt="roadmap"
        className={style.roadmap}
      />
    </div>
  );
};

export default GameInfo;

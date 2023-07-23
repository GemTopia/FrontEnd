import React, { useState } from "react";
import style from "./GameInfo.module.css";
import GameItem from "../../models/GameItem";
import { Link } from "react-router-dom";
import axios, * as others from "axios";
import { baseUrl } from "../../shares/shared";
const GameInfo: React.FC<{
  game: GameItem;
  rewards: number[];
  scoreLevels: number[];
}> = (props) => {
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
          <p className={style["game-type"]}>{props.game.game_type}</p>
          <p className={style.rank}>#1</p>
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
              <p className={style["like-count"]}>{likeCount.toLocaleString()}</p>
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
      <div className={style.roadmap}>
        <div className={style["fourth-level"]}>
          <p className={style["third-level-score"]}>
            {props.scoreLevels[2].toLocaleString()} Scores
          </p>
          <img
            src={require("../../assets/Game/3rdTo4thArrow.png")}
            alt="Arrow"
            className={style["third-to-fourth-arrow"]}
          />
          <img
            src={require("../../assets/Game/eachStepButton.png")}
            alt="button"
            className={style["fourth-step-button"]}
          />
          <div>
            <p className={style["fourth-level-score"]}>
              {props.scoreLevels[3].toLocaleString()} Scores
            </p>
            <p className={style["fourth-level-label"]}>
              {props.rewards[3]} Gemyto
            </p>
          </div>
        </div>
        <div className={style["third-level"]}>
          <p className={style["third-level-label"]}>
            {props.rewards[2]} Gemyto
          </p>
          <img
            src={require("../../assets/Game/eachStepButton.png")}
            alt="button"
            className={style["third-step-button"]}
          />
          <img
            src={require("../../assets/Game/2ndTo3rdArrow.png")}
            alt="Arrow"
            className={style["second-to-third-arrow"]}
          />
          <p className={style["second-level-score"]}>
            {props.scoreLevels[1].toLocaleString()} Scores
          </p>
        </div>
        <div className={style["first-and-second-level"]}>
          <div className={style["first-level"]}>
            <p className={style["first-level-score"]}>
              {props.scoreLevels[0].toLocaleString()} Scores
            </p>
            <p className={style["first-level-label"]}>
              {props.rewards[0]} Gemyto
            </p>
          </div>
          <div>
            <img
              src={require("../../assets/Game/1stTo2ndArrow.png")}
              alt="Arrow"
              className={style["first-to-second-arrow"]}
            />
            <img
              src={require("../../assets/Game/eachStepButton.png")}
              alt="button"
              className={style["first-step-button"]}
            />
          </div>
          <div className={style["second-level-container"]}>
            <img
              src={require("../../assets/Game/eachStepButton.png")}
              alt="button"
              className={style["second-step-button"]}
            />

            <pre className={style["second-level-label"]}>
              {props.rewards[1]} Gemyto
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;

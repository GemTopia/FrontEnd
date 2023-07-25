// import { faL } from "@fortawesome/free-solid-svg-icons";
import GameItem from "../../models/GameItem";
import style from "./CompactGames.module.css";
import React, { useState } from "react";
import axios, * as others from "axios";
import { baseUrl } from "../../shares/shared";
const CompactGames: React.FC<{ games: GameItem[]; dropdownIsOpen: boolean }> = (
  props
) => {
  let firstState = props.games.map((gameItem) => gameItem.is_liked_by_user);
  const [IsLiked, setIsLiked] = useState<boolean[]>(firstState);
  const [likeCounts, setLikeCount] = useState<number[]>(
    props.games.map((gameItem) => gameItem.num_of_like)
  );

  const likeClickHandler = (event: any) => {
    axios
      .get(`${baseUrl}game/like/${event.target.id}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        setIsLiked((firstState: boolean[]) => {
          let secondState = [...firstState];
          secondState[+event.target.id - 1] =
            !secondState[+event.target.id - 1];
          return secondState;
        });

        // if (isLiked === false) {
        //   setLikeCount((current) => current + 1);
        // } else {
        //   setLikeCount((current) => current - 1);
        // }
        // setIsLiked((current) => !current);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className={style["compact-games-body"]}>
      {props.games.map((gameItem, index) => {
        return (
          <div
            className={`${style["game-item"]} ${
              (index !== 2 || props.dropdownIsOpen === false) &&
              style["game-item-hover"]
            }`}
            key={String(gameItem.id)}
            id={`recent${gameItem.id}`}
          >
            <div className={style["thumbnail-container"]}>
              {gameItem.cover_image && (
                <img
                  src={baseUrl + gameItem.cover_image}
                  alt=""
                  className={`${style["game-thumbnail"]} ${
                    (index !== 2 || props.dropdownIsOpen === false) &&
                    style["game-thumbnail-hover"]
                  }`}
                />
              )}
            </div>
            <div className={style["game-info-container"]}>
              {gameItem.logo_image && (
                <img
                  src={baseUrl + gameItem.logo_image}
                  alt=""
                  className={style["game-logo"]}
                />
              )}

              <div className={style["game-text-info-container"]}>
                <p>{gameItem.name}</p>
                <p className={style["game-category"]}>{gameItem.game_type}</p>
                {/* <p className={style.rank}>#{gameItem.rank}</p> */}
              </div>
              {/* <div className={style["likes-container"]}>
                <img
                  src={require(`../../assets/${
                    IsLiked[+gameItem.id - 1]
                      ? "liked-icon.png"
                      : "unliked-icon.png"
                  }`)}
                  alt="like icon"
                  id={String(gameItem.id)}
                  onClick={likeClickHandler}
                />
                <p className={style["game-likes-count"]}>
                  {" "}
                  {String(gameItem.num_of_like)}{" "}
                </p>
              </div> */}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompactGames;

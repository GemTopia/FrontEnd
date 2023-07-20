// import { faL } from "@fortawesome/free-solid-svg-icons";
import GameItem from "../../models/GamesPageItem";
import style from "./CompactGames.module.css";
import React , { useState } from "react";
 
const CompactGames: React.FC<{ games: GameItem[];dropdownIsOpen:boolean;}> = (props) => {
  let firstState = props.games.map((gameItem) => false);
  const [IsLiked, setIsLiked] = useState<boolean[]>(firstState);
  const likeClickHandler = (event: any) => {
    setIsLiked((firstState: boolean[]) => {
      let secondState = [...firstState];
      secondState[+event.target.id - 1] = !secondState[+event.target.id - 1];
      return secondState;
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
              <img
                src={require(`../../assets/${gameItem.cover_image}`)}
                alt=""
                className={`${style["game-thumbnail"]} ${
                  (index !== 2 || props.dropdownIsOpen === false) &&
                  style["game-thumbnail-hover"]
                }`}
              />
            </div>
            <div className={style["game-info-container"]}>
              <img
                src={require(`../../assets/${gameItem.cover_image}`)}
                alt=""
                className={style["game-logo"]}
              />
              <div className={style["game-text-info-container"]}>
                <p>{gameItem.name}</p>
                <p className={style["game-category"]}>{gameItem.game_type}</p>
                {/* <p className={style.rank}>#{gameItem.rank}</p> */}
              </div>
              <div className={style["likes-container"]}>
                <img
                  src={require(`../../assets/${
                    IsLiked[+gameItem.id - 1]
                      ? "liked-icon.png"
                      : "unliked-icon.png"
                  }`)}
                  alt="like icon"
                  // id={gameItem.rank}
                  onClick={likeClickHandler}
                />
                <p className={style["game-likes-count"]}>
                  {" "}
                  {String(gameItem.num_of_like)}{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CompactGames;

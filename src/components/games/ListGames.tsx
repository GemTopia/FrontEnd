import GameItem from "../../models/GamesPageItem";
import style from "./ListGames.module.css";
import PopularGameItem from "../../models/popularGameItem";
import React, { useState } from "react";
const ListGames: React.FC<{
  games: GameItem[] | PopularGameItem[];
  page: string;
  sortby?: string;
}> = (props) => {
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
    <div className={style["list-games-body"]}>
      {props.games.map((gameItem, index) => {
        return (
          <div
            className={style["list-game-item-container"]}
            key={String(gameItem.id)}
            id={`categoryList${gameItem}${props.page === "games" && index}`}
          >
            {/* <img
              src={require(`../../assets/${gameItem.game_type}`)}
              alt=""
              className={style["game-logo"]}
            /> */}
            <div className={style["game-info-container"]}>
              <h4 className={style["game-name"]}>{gameItem.name}</h4>
              <p className={style["game-category"]}>{gameItem.game_type}</p>
              <p className={style["game-rank"]}>#{String(gameItem.id)}</p>
            </div>

            <div className={style["likes-container"]}>
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
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default ListGames;

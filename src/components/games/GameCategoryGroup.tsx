import GameItem from "../../models/GameItem";
import style from "./GameCategoryGroup.module.css";
import React , { useState } from "react";

const GameCategoryGroup: React.FC<{
  categorisedGames: GameItem[];
  dropdownIsOpen: boolean;
  categoryIndex: number;
}> = (props) => {
  let firstState = props.categorisedGames.map((gameItem) => false);
  const [IsLiked, setIsLiked] = useState<boolean[]>(firstState);
  const likeClickHandler = (event: any) => {
    setIsLiked((firstState: boolean[]) => {
      let secondState = [...firstState];
      secondState[+event.target.id - 1] = !secondState[+event.target.id - 1];
      return secondState;
    });
  };
  return (
    <div className={style["category-games-container"]}>
      {props.categorisedGames.map((gameItem: GameItem, index) => {
        return (
          <div
            className={`${style["game-item"]} ${
              !(
                index === 2 &&
                props.categoryIndex === 0 &&
                props.dropdownIsOpen === true
              ) && style["game-item-hover"]
            }`}
            // key={gameItem.id}
            id={`categoryCompact${gameItem.game_type}${index}`}
          >
            <div className={style["thumbnail-container"]}>
              <img
                src={require(`../../assets/${gameItem.cover_image}`)}
                alt=""
                className={`${style["game-thumbnail"]} ${
                  !(
                    index === 2 &&
                    props.categoryIndex === 0 &&
                    props.dropdownIsOpen === true
                  ) && style["game-thumbnail-hover"]
                }`}
              />
            </div>
            <div className={style["game-info-container"]}>
              <img
                src={require(`../../assets/${gameItem.cover_image}`)}
                alt=""
                className={style["game-logo"]}
              />
              <div>
                <p>{gameItem.name}</p>
                <p className={style["game-category"]}>{gameItem.game_type}</p>
                {/* <p className={style.rank}>
                  #{gameItem.rank}
                </p> */}
              </div>
              <div className={style["likes-container"]}>
                <img
                  src={require(`../../assets/${
                    IsLiked[+gameItem.id - 1]
                      ? "liked-icon.png"
                      : "unliked-icon.png"
                  }`)}
                  alt="like icon"
                  // id={gameItem.id}
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
export default GameCategoryGroup;

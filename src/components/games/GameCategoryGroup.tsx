import GameItem from "../../models/GamesPageItem";
import style from "./GameCategoryGroup.module.css";
import { useState } from "react";

const GameCategoryGroup: React.FC<{ categorisedGames: GameItem[] }> = (
  props
) => {
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
    <div className={style.categoryGamesContainer}>
        
      {props.categorisedGames.map((gameItem: GameItem,index) => {
        return (
          
            
            <div
              className={style.gameItem}
              key={gameItem.id}
              id={`categoryCompact${gameItem.gameCategory}${index}`}
            >
              <div className={style.thumbnailContainer}>
                <img
                  src={require(`../../assets/${gameItem.thumnailImageAddress}`)}
                  alt=""
                  className={style["gameThumnail"]}
                />
              </div>
              <div className={style.gameInfoContainer}>
                <img
                  src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                  alt=""
                  className={style["gameLogo"]}
                />
                <div className={style.gameTextInfoContainer}>
                  {gameItem.gameName}
                  <br />
                  <div className={style.gameCategory}>
                    {gameItem.gameCategory}
                  </div>
                  <div className={style.rank}>
                  #{gameItem.rank}
                </div>
                </div>
                <div className={style.likesContainer} >
                <img
                  src={require(`../../assets/${IsLiked[+(gameItem.rank)-1]?'liked-icon.png':'unliked-icon.png'}`)}
                  alt="like icon"
                  id={gameItem.rank}
                  onClick={likeClickHandler}
                />
                <p className={style.GameLikesCount}> {gameItem.likesCount} </p>
              </div>
              </div>
            </div>
          
        );
      })}
    </div>
  );
};
export default GameCategoryGroup;

import GameItem from "../../models/GamesPageItem";
import style from "./ListGames.module.css"
import PopularGameItem from "../../models/popularGameItem";
import { useState } from "react";
const ListGames: React.FC<{ games: GameItem[]|PopularGameItem[]}> = (props) => {
  let firstState = props.games.map((gameItem) => false);
  const [IsLiked, setIsLiked] = useState<boolean[]>(firstState);
  const likeClickHandler = (event: any) => {
    setIsLiked((firstState: boolean[]) => {
      let secondState = [...firstState];
      secondState[+event.target.id - 1] = !secondState[+event.target.id - 1];
      return secondState;
    });
  };
    return(
        <div className={style.listGamesBody}>
        {props.games.map((gameItem) => {
          return (
            <div className={style.listGameItemContainer} key={gameItem.rank}>
              <img
                src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                alt=""
                className={style["gameLogo"]}
              />
              <div className={style.gameInfoContainer}>
                <h4 className={style.gameName}>{gameItem.gameName}</h4>
                <p className={style.gameCategory}>{gameItem.gameCategory}</p>
                <p className={style.gameRank}>#{gameItem.rank}</p>
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
          );
        })}
      </div>
    );
};
export default ListGames;
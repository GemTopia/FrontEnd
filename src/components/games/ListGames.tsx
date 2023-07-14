import GameItem from "../../models/GamesPageItem";
import style from "./ListGames.module.css"
import PopularGameItem from "../../models/popularGameItem";
import { useState } from "react";
const ListGames: React.FC<{ games: GameItem[]|PopularGameItem[],page:string,sortby?:string}> = (props) => {
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
        <div className={style["list-games-body"]}>
        {props.games.map((gameItem,index) => {
          // console.log(props.viewType=='category')
          // if (props.page=='games'&&props.sortby=='category'){
          //   console.log(props.page=='games'&&index);

          // }
          return (
            <div className={style["list-game-item-container"]} key={gameItem.rank}id={`categoryList${gameItem.gameCategory}${props.page=='games'&&index}`}>
              <img
                src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                alt=""
                className={style["game-logo"]}
              />
              <div className={style["game-info-container"]}>
                <h4 className={style["game-name"]}>{gameItem.gameName}</h4>
                <p className={style["game-category"]}>{gameItem.gameCategory}</p>
                <p className={style["game-rank"]}>#{gameItem.rank}</p>
              </div>
              
              <div className={style["likes-container"]} >
                <img
                  src={require(`../../assets/${IsLiked[+(gameItem.rank)-1]?'liked-icon.png':'unliked-icon.png'}`)}
                  alt="like icon"
                  id={gameItem.rank}
                  onClick={likeClickHandler}
                />
                <p className={style["game-likes-count"]}> {gameItem.likesCount} </p>
              </div>
                
                
            </div>
          );
        })}
      </div>
    );
};
export default ListGames;
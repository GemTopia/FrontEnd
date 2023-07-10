import { faL } from "@fortawesome/free-solid-svg-icons";
import GameItem from "../../models/GamesPageItem";
import style from "./CompactGames.module.css";
import { useState } from "react";

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
    return(
        <div className={style.compactGamesBody}>
      {props.games.map((gameItem) => {
        return (
          <div className={`${style.gameItem} ${((gameItem.rank)!='3'||props.dropdownIsOpen==false)&& style.gameItemHover}`} key={gameItem.id} id={`recent${gameItem.id}`}>
            <div className={style.thumbnailContainer}>
              <img
                src={require(`../../assets/${gameItem.thumnailImageAddress}`)}
                alt=""
                className={`${style.gameThumnail} ${((gameItem.rank)!='3'||props.dropdownIsOpen==false)&& style.gameThumnailHover}`}
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

export default CompactGames;
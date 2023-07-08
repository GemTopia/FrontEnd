import PopularGameItem from "../../models/popularGameItem";
import style from "./PopularGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import useInput from "../hooks/use-input";
import { Link } from "react-router-dom";

const PopularGames: React.FC<{ games: PopularGameItem[] }> = (props) => {
    // let firstState = props.games.map((gameItem)=>[gameItem.rank,false])
    // const [IsLiked, setIsLiked] = useState<any>(firstState);
    // const likeClickHandler=()=>{
    //     let secondState = firstState[]
    //     setIsLiked()
    // }
  const {
    enteredValue: searchValue,
    isValid: searchIsValid,
    hasError: searchHasError,
    inputChangeHandler: searchChangeHandler,
    inputBlurHandler: searchBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  return (
    <div className={style.popularGamesContainer}>
      <div className={style.popularGamesHeader}>
        <h2>Popular Games</h2>
        <div className={style.searchBar}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
          <form>
            <input
              name="search"
              id="search"
              onChange={searchChangeHandler}
              onBlur={searchBlurHandler}
              value={searchValue}
              type="text"
              className={style.searchInput}
              placeholder="search game ..."
            />
          </form>
        </div>
      </div>
      <div className={style.popularGamesBody}>
        {props.games.map((gameItem) => {
          return (
            <div className={style.popularGameItemContainer} key={gameItem.rank}>
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

              <div className={style.likesContainer}>
                
                <FontAwesomeIcon icon={faHeart} className={style.likeIcon} />
                <p className={style.GameLikesCount}> {gameItem.likesCount} </p>
              </div>
            </div>
          );
        })}
        
      </div>
        <Link to="/Home" className={style.popularGamesFooter}>veiw more</Link>
    </div>
  );
};

export default PopularGames;

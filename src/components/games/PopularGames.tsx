import PopularGameItem from "../../models/popularGameItem";
import style from "./PopularGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useInput from "../hooks/use-input";
import { Link } from "react-router-dom";
import ListGames from "./ListGames";


const PopularGames: React.FC<{ games: PopularGameItem[] }> = (props) => {
  let firstState = props.games.map((gameItem) => false);
  const [IsLiked, setIsLiked] = useState<boolean[]>(firstState);
  const likeClickHandler = (event: any) => {
    setIsLiked((firstState: boolean[]) => {
      let secondState = [...firstState];
      secondState[+event.target.id - 1] = !secondState[+event.target.id - 1];
      return secondState;
    });
  };


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
      <ListGames games={props.games}/>
      <Link to="/Home" className={style.popularGamesFooter}>
        veiw more
      </Link>
    </div>
  );
};

export default PopularGames;

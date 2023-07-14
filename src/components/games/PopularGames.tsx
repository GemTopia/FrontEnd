import PopularGameItem from "../../models/popularGameItem";
import style from "./PopularGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import useInput from "../hooks/use-input";
import { Link } from "react-router-dom";
import ListGames from "./ListGames";


const PopularGames: React.FC<{ games: PopularGameItem[] }> = (props) => {

  const {
    enteredValue: searchValue,
    isValid: searchIsValid,
    hasError: searchHasError,
    inputChangeHandler: searchChangeHandler,
    inputBlurHandler: searchBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");


  return (
    <div className={style["popular-games-container"]}>
      <div className={style["popular-games-header"]}>
        <h2>Popular Games</h2>
        
        <div className={style["search-bar"]}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
          <form> 
            <input
              name="search"
              id="search"
              onChange={searchChangeHandler}
              onBlur={searchBlurHandler}
              value={searchValue}
              type="text"
              className={style["search-input"]}
              placeholder="search game ..."
            />
          </form>
        </div>
         
      </div>
      <ListGames games={props.games} page="home"/>
      <Link to="/Home" className={style["popular-games-footer"]}>
        veiw more
      </Link>
    </div>
  );
};

export default PopularGames;

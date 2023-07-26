import GameItem from "../../models/GameItem";
import style from "./PopularGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import useInput from "../hooks/use-input";
import { Link } from "react-router-dom";
import ListGames from "./ListGames";

const PopularGames: React.FC<{ games: GameItem[] }> = (props) => {
  // const {
  //   enteredValue: searchValue,
  //   isValid: searchIsValid,
  //   hasError: searchHasError,
  //   inputChangeHandler: searchChangeHandler,
  //   inputBlurHandler: searchBlurHandler,
  // } = useInput((input: string) => input.trim().length !== 0, "");
  const [loadedGames, setLoadedGames] = useState<GameItem[]>();
  useEffect(() => {
    setLoadedGames(props.games);
  }, [props]);
  const searchHandler = (event: any) => {
    // console.log(event.target.value);
    setLoadedGames(
      props.games.filter((item) =>
        item.name.toLocaleLowerCase().includes(String(event.target.value).toLocaleLowerCase())
      )
    );
  };
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
              onChange={searchHandler}
              type="text"
              className={style["search-input"]}
              placeholder="search game ..."
            />
          </form>
        </div>
      </div>
      {loadedGames && <ListGames games={loadedGames} page="home" />}

      {/* <Link to="/Home" className={style["popular-games-footer"]}>
        veiw more
      </Link> */}
    </div>
  );
};

export default PopularGames;

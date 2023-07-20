import style from "./HomeTopPlayers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HomeTopPlayerItem from "./HomeTopPlayerItem";
import homeTopPlayerItem from "../../models/homeTopPlayerItem";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";

const HomeTopPlayers: React.FC<{ players: homeTopPlayerItem[] }> = (props) => {
  const {
    enteredValue: searchValue,
    isValid: searchIsValid,
    hasError: searchHasError,
    inputChangeHandler: searchChangeHandler,
    inputBlurHandler: searchBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");

  const loadedPlayers = props.players;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Top Players</h2>
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
      {loadedPlayers.map((player, index) => {
        return (
          <HomeTopPlayerItem
            key={String(player.id)}
            player={player}
            rank={index}
          />
        );
      })}
      <Link to="/Home" className={style.footer}>
        veiw more
      </Link>
    </div>
  );
};

export default HomeTopPlayers;

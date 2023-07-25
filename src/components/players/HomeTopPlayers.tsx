import style from "./HomeTopPlayers.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import HomeTopPlayerItem from "./HomeTopPlayerItem";
import homeTopPlayerItem from "../../models/homeTopPlayerItem";
import { Link } from "react-router-dom";
import useInput from "../hooks/use-input";
import { useState, useEffect } from "react";
const HomeTopPlayers: React.FC<{ players: homeTopPlayerItem[] }> = (props) => {
  const [loadedPlayers, setLoadedPlayers] = useState<homeTopPlayerItem[]>();

  useEffect(() => {
    setLoadedPlayers(props.players);
  }, [props]);
  const searchHandler = (event: any) => {
    // console.log(event.target.value);
    setLoadedPlayers(
      props.players.filter((item) =>
        item.user_name.includes(String(event.target.value))
      )
    );
  };
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
              onChange={searchHandler}
              type="text"
              className={style["search-input"]}
              placeholder="search game ..."
            />
          </form>
        </div>
      </div>
      {loadedPlayers &&
        loadedPlayers.map((player, index) => {
          return (
            <HomeTopPlayerItem
              key={String(player.id)}
              player={player}
              rank={index}
              index={index}
            />
          );
        })}
      {/* <Link to="/Home" className={style.footer}>
        veiw more
      </Link> */}
    </div>
  );
};

export default HomeTopPlayers;

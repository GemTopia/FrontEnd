import recentPlayedGameItem from "../../models/recentPlayedGameItem";
import style from "./RecentPlayed.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
const RecentPlayedItems: React.FC<{ games: recentPlayedGameItem[] }> = (
  props
) => {
  return (
    <div className={style.gameItemContainer}>
      <span className={style.icon}>
        <FontAwesomeIcon icon={faAngleLeft} />
      </span>
      {props.games.map((gameItem) => {
        return (
          <div className={style.recentPlayedItem} key={gameItem.id}>
            <div className={style.thumbnailContainer}>
              <img
                src={require(`../../assets/${gameItem.thumnailImageAddress}`)}
                alt=""
                className={style["gameThumnail"]}
              />
            </div>
            <div className={style.gameInfo}>
              <img
                src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                alt=""
                className={style["gameLogo"]}
              />
              <div>
                {gameItem.gameName}
                <br />
                <div className={style.gameCategory}>
                  {gameItem.gameCategory}
                </div>
              </div>
            </div>
          </div>
        );
      })}
      <span className={style.icon}>
        <FontAwesomeIcon icon={faAngleRight} />
      </span>
    </div>
  );
};

export default RecentPlayedItems;

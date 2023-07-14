import { useState } from "react";
import recentPlayedGameItem from "../../models/recentPlayedGameItem";
import style from "./RecentPlayedGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";


const RecentPlayedItems: React.FC<{ games: recentPlayedGameItem[] }> = (
  props
) => {
  const [leftGame, setLeftGame] = useState("0");
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);

  const scrollLeftHandler = () => {
    if (+(leftGame) - 4 > 0) {
      const element = document.getElementById(`recent${+(leftGame) - 4}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setLeftGame((current) => String(+(current) - 4));
      }
      setDisableLeft(false);
      setDisableRight(false);
    } else if (leftGame !== "0") {
      const element = document.getElementById("recent0");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setLeftGame("0");
      }
      setDisableLeft(true);
      setDisableRight(false);
    }
  };
  const scrollRightHandler = () => {
    const element = document.getElementById(`recent${+(leftGame) + 7}`);
    if (+(leftGame) + 8 >= props.games.length) setDisableRight(true);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setLeftGame((current) => String(+(current) + 4));
      setDisableLeft(false);
    }
  };

  return (
    <div>
      <h2 className={style["recent-played-title"]}>Recent played</h2>
    <div className={style["body-container"]}>
      <span className={`${style.icon} ${!disableLeft&&style["icon-background"]}`}>
        <FontAwesomeIcon icon={faAngleLeft} onClick={scrollLeftHandler} className={disableLeft ? style.disabled : ''} />
      </span>
      <div className={style["game-items-container"]}>
      {props.games.map((gameItem) => {
        return (
          <div className={style["recent-played-item"]} key={gameItem.id} id={`recent${gameItem.id}`}>
            <div className={style["thumbnail-container"]}>
              <img
                src={require(`../../assets/${gameItem.thumbnailImageAddress}`)}
                alt=""
                className={style["game-thumbnail"]}
              />
            </div>
            <div className={style["game-info"]}>
              <img
                src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                alt=""
                className={style["game-logo"]}
              />
              <div>
                <p>{gameItem.gameName}</p>
                <p className={style["game-category"]}>
                  {gameItem.gameCategory}
                </p>
              </div>
            </div>
          </div>
        );
      })}
      </div>
      <span className={`${style.icon} ${!disableRight&&style["icon-background"]}`}>
        <FontAwesomeIcon icon={faAngleRight} onClick={scrollRightHandler} className={disableRight ? style.disabled : ''} />
      </span>
    </div>
    </div>
  );
};

export default RecentPlayedItems;

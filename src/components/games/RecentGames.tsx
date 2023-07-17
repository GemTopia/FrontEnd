import { Fragment, useState } from "react";
import recentPlayedGameItem from "../../models/recentPlayedGameItem";
import style from "./RecentGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const RecentGames: React.FC<{ games: recentPlayedGameItem[] }> = (props) => {
  const [leftGame, setLeftGame] = useState("0");
  const [disableRight, setDisableRight] = useState(false);
  const [disableLeft, setDisableLeft] = useState(true);

  const scrollLeftHandler = () => {
    if (+leftGame - 4 > 0) {
      const element = document.getElementById(`recent${+leftGame - 4}`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setLeftGame((current) => String(+current - 4));
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
    const element = document.getElementById(`recent${+leftGame + 7}`);
    if (+leftGame + 8 >= props.games.length) setDisableRight(true);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setLeftGame((current) => String(+current + 4));
      setDisableLeft(false);
    }
  };

  return (
    <Fragment>
      <h2 className={style.title}>Recently played</h2>
      <div className={style.container}>
        <span
          className={`${style.icon} ${!disableLeft && style.iconBackground}`}
          onClick={scrollLeftHandler}
        >
          <FontAwesomeIcon
            icon={faAngleLeft}
            className={disableLeft ? style.disabled : ""}
          />
        </span>
        <div className={style.gameItemsContainer}>
          {props.games.map((gameItem) => {
            return (
              <div
                className={style.recentPlayedItem}
                key={gameItem.id}
                id={`recent${gameItem.id}`}
              >
                <div className={style.thumbnailContainer}>
                  <img
                    src={require(`../../assets/${gameItem.thumbnailImageAddress}`)}
                    alt=""
                    className={style.gameThumnail}
                  />
                </div>
                <div className={style.gameInfo}>
                  <img
                    src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                    alt=""
                    className={style.gameLogo}
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
        </div>
        <span
          className={`${style.icon} ${!disableRight && style.iconBackground}`}
          onClick={scrollRightHandler}
        >
          <FontAwesomeIcon
            icon={faAngleRight}
            className={disableRight ? style.disabled : ""}
          />
        </span>
      </div>
    </Fragment>
  );
};

export default RecentGames;

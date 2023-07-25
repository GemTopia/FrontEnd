import { Fragment, useState } from "react";
import recentPlayedGameItem from "../../models/recentPlayedGameItem";
import style from "./RecentPlayedGames.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { baseUrl } from "../../shares/shared";

const RecentPlayedGames: React.FC<{ games: recentPlayedGameItem[] }> = (
  props
) => {
  const [leftGame, setLeftGame] = useState("0");
  const [disableRight, setDisableRight] = useState(
    props.games.length > 4 ? false : true
  );
  const [disableLeft, setDisableLeft] = useState(true);

  const scrollLeftHandler = () => {
    if (+leftGame - 4 > 0) {
      const element = document.getElementById(`recent${+leftGame - 4}`);
      const titleElement = document.getElementById("root");
      titleElement?.scrollIntoView({ behavior: "smooth" });

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
    const titleElement = document.getElementById("root");
    titleElement?.scrollIntoView({ behavior: "smooth" });

    if (+leftGame + 8 >= props.games.length) setDisableRight(true);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setLeftGame((current) => String(+current + 4));
      setDisableLeft(false);
    }
  };

  return (
    <div className={style["recent-container"]}>
      <h2 className={style["recent-played-title"]} id="title">
        Recently played
      </h2>
      {props.games.length > 0 ? (
        <div className={style["body-container"]}>
          {!disableLeft && (
            <span
              className={`${style.icon} ${
                !disableLeft && style["icon-background"]
              }`}
              onClick={scrollLeftHandler}
            >
              <FontAwesomeIcon
                icon={faAngleLeft}
                className={disableLeft ? style.disabled : ""}
              />
            </span>
          )}

          <div className={style["game-items-container"]}>
            {props.games.map((gameItem) => {
              return (
                <Link to={`/games/${gameItem.id}`} className={style.link}>
                  <div
                    className={style["recent-played-item"]}
                    key={String(gameItem.id)}
                    id={`recent${gameItem.id}`}
                  >
                    <div className={style["thumbnail-container"]}>
                      {gameItem.cover_image && (
                        <img
                          src={baseUrl + gameItem.cover_image}
                          alt=""
                          className={style["game-thumbnail"]}
                        />
                      )}
                    </div>
                    <div className={style["game-info"]}>
                      {gameItem.logo_image && (
                        <img
                          src={baseUrl + gameItem.logo_image}
                          alt=""
                          className={style["game-logo"]}
                        />
                      )}

                      <div>
                        <p className={style["game-name"]}>{gameItem.name}</p>
                        <p className={style["game-category"]}>
                          {gameItem.game_type}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
          {!disableRight && (
            <span
              className={`${style.icon} ${
                !disableRight && style["icon-background"]
              }`}
              onClick={scrollRightHandler}
            >
              <FontAwesomeIcon
                icon={faAngleRight}
                className={disableRight ? style.disabled : ""}
              />
            </span>
          )}
        </div>
      ) : (
        <p className={style["no-recent"]}>You haven't played recently !!</p>
      )}
    </div>
  );
};

export default RecentPlayedGames;

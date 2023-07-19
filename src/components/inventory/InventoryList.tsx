import style from "./InventoryLlist.module.css";
import InventoryGameItem from "../../models/InventoryGameItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const InventoryLlist: React.FC<{
  title: string;
  gameItems: InventoryGameItem[];
}> = (props) => {
  if (props.gameItems[0]) {
    return (
      <div className={style["list-container"]}>
        <p className={style["list-title"]}>{props.title}</p>
        {props.gameItems.map((gameItem) => {
          return (
            <div className={style["game-item"]}>
              <div className={style['game-info']}>
              <img
                src={require(`../../assets/${gameItem.gameLogoAddress}`)}
                alt="game logo"
              />
              <pre className={style["game-name"]}>{gameItem.gameName}</pre>

              </div>
              <p>{gameItem.earnedCount}</p>
              <img
                src={require("../../assets/gemyto2.png")}
                alt="gemyto"
                className={style.gemyto}
              />
            </div>
          );
        })}
        {props.title == "Waiting List" && (
          <div className={style["list-warning-container"]}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={`${style["warning-icon"]} ${style["blue-icon"]}`}
            />
            <p className={style["list-description"]}>
              if you stay among the top players in each game by the end of the
              day yow will earn Gemyto .
            </p>
          </div>
        )}
      </div>
    );
  } else if (props.title == "Waiting List") {
    return (
      <div className={style["list-container"]}>
        <p className={style["list-title"]}>{props.title}</p>
        <p className={style["no-game-warning"]}>
          You haven’t played any games today .
        </p>
      </div>
    );
  } else {
    return (
      <div className={style["list-container"]}>
        <p className={style["list-title"]}>{props.title}</p>
        <p className={style["no-game-warning"]}>
          You haven’t earned any tokens yet.
        </p>
      </div>
    );
  }
};
export default InventoryLlist;

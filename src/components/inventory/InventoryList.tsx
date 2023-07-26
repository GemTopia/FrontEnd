import style from "./InventoryLlist.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import InventoryGameItem from "../../models/InventoryGameItem";
import { baseUrl } from "../../shares/shared";

const InventoryLlist: React.FC<{
  title: string;
  gameItems: InventoryGameItem[];
}> = (props) => {
  if (props.gameItems[0]) {
    return (
      <div className={style["list-container"]}>
        <p className={style["list-title"]}>{props.title}</p>
        {props.gameItems.map((gameItem, index) => {
          return (
            <div className={style["game-item"]} key={index}>
              <div className={style["game-info"]}>
                {gameItem.cover_image && (
                  <img src={baseUrl + '/media'+ gameItem.cover_image} alt="game logo" />
                )}

                <pre className={style["game-name"]}>{gameItem.game_name}</pre>
              </div>
              <p>{gameItem.game_gemyto}</p>
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
              day you will earn Gemyto .
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

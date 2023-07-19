import style from "./GameCategoryPage.module.css";
import CategorisedGameGroupItem from "../../models/CategorisedGameGroupItem";
import GameCategoryGroup from "./GameCategoryGroup";
import ListGames from "./ListGames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const GameCategory: React.FC<{
  categorisedGames: CategorisedGameGroupItem[];
  scrollLeftHandler:any;
  scrollRightHandler:any;
  scrollUpHandler:any;
  scrollDownHandler:any;
  disableDownOrRights: {category:string,disableDownOrRight:boolean}[];
  disableUpOrLefts: {category:string,disableUpOrLeft:boolean}[];
  viewType: string;
  dropdownIsOpen:boolean;
}> = (props) => {

  return (
    <div className={style["category-games-body"]}>
      {props.categorisedGames.map(
        (CategoryGroup: CategorisedGameGroupItem, index: number) => {
          if (props.viewType == "compact") {
            return (
              <div className={style["one-category-container"]} key={CategoryGroup.category}>
                <div className={style["category-header"]}>
                  <p className={style["compact-category-title"]}>
                    {CategoryGroup.category}
                  </p>
                  <div className={style["scroll-icons-container"]}>
                    <span className={style.icon}>
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        id={`${CategoryGroup.category} ${index}`}
                        onClick={props.scrollLeftHandler}
                        className={props.disableUpOrLefts[index].disableUpOrLeft ? style.disabled : ''}
                      />
                    </span>
                    <span className={style.icon}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        id={`${CategoryGroup.category} ${index}`}
                        onClick={props.scrollRightHandler}
                        className={props.disableDownOrRights[index].disableDownOrRight ? style.disabled : ''}
                      />
                    </span>
                  </div>
                </div>

                <GameCategoryGroup
                  dropdownIsOpen={props.dropdownIsOpen}
                  categoryIndex={index}
                  categorisedGames={CategoryGroup.games.sort(
                    (game1, game2) => +game1.rank - +game2.rank
                  )}
                />
              </div>
            );
          } else if (props.viewType == "list") {
            return (
              <div className={style["list-category-group-container"]}key={CategoryGroup.category}>
                <div className={style["category-header"]}>
                  <p className={style["list-category-title"]}>
                    {CategoryGroup.category}
                  </p>
                  <div className={style["scroll-icons-container"]}>
                    <span className={style.icon}>
                      <FontAwesomeIcon
                        onClick={props.scrollUpHandler}
                        icon={faAngleUp}
                        id={`${CategoryGroup.category} ${index}`}
                        className={
                          props.disableUpOrLefts[index].disableUpOrLeft
                            ? style.disabled
                            : ""
                        }
                      />
                    </span>
                    <span className={style.icon}>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        id={`${CategoryGroup.category} ${index}`}
                        onClick={props.scrollDownHandler}
                        className={props.disableDownOrRights[index].disableDownOrRight ? style.disabled : ''}
                      />
                    </span>
                  </div>
                </div>
                <div className={style["list-category-games-container"]}>
                  <ListGames
                    page="games"
                    games={CategoryGroup.games.sort(
                      (game1, game2) => +game1.rank - +game2.rank
                    )}
                    sortby="category"
                  />
                </div>
              </div>
            );
          }
        }
      )}
    </div>
  );
};

export default GameCategory;

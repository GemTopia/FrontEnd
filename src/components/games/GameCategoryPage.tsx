import style from "./GameCategoryPage.module.css";
import CategorisedGameGroupItem from "../../models/CategorisedGameGroupItem";
import GameCategoryGroup from "./GameCategoryGroup";
import ListGames from "./ListGames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const GameCategory: React.FC<{
  categorisedGames: CategorisedGameGroupItem[];
  scrollLeftHandler:any;
  scrollRightHandler:any;
  scrollUpHandler:any;
  scrollDownHandler:any;
  disableDownOrRights: {category:string,disableDownOrRight:boolean}[];
  disableUpOrLefts: {category:string,disableUpOrLeft:boolean}[];
  viewType: string;
}> = (props) => {
  
  return (
    <div className={style.CategoryGamesBody}>
      {props.categorisedGames.map(
        (CategoryGroup: CategorisedGameGroupItem, index: number) => {
          if (props.viewType == "compact") {
            return (
              <div className={style.oneCategoryContainer}>
                <div className={style.categoryHeader}>
                  <p className={style.compactCategoryTitle}>
                    {CategoryGroup.category}
                  </p>
                  <div className={style.scrollIconsContainer}>
                    <span className={style.icon}>
                      <FontAwesomeIcon
                        icon={faAngleLeft}
                        id={`${CategoryGroup.category} ${index}`}
                        onClick={props.scrollLeftHandler}
                        className={
                          props.disableUpOrLefts[index].disableUpOrLeft
                            ? style.disabled
                            : ""
                        }
                      />
                    </span>
                    <span className={style.icon}>
                      <FontAwesomeIcon
                        icon={faAngleRight}
                        id={`${CategoryGroup.category} ${index}`}
                        onClick={props.scrollRightHandler}
                        className={
                          props.disableDownOrRights[index].disableDownOrRight
                            ? style.disabled
                            : ""
                        }
                      />
                    </span>
                  </div>
                </div>

                <GameCategoryGroup
                  categorisedGames={CategoryGroup.games.sort(
                    (game1, game2) => +game1.rank - +game2.rank
                  )}
                />
              </div>
            );
          } else if (props.viewType == "list") {
            return (
              <div className={style.listCategoryGroupContainer}>
                <div className={style.categoryHeader}>
                  <p className={style.listCategoryTitle}>
                    {CategoryGroup.category}
                  </p>
                  <div className={style.scrollIconsContainer}>
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
                        className={
                          props.disableDownOrRights[index].disableDownOrRight
                            ? style.disabled
                            : ""
                        }
                      />
                    </span>
                  </div>
                </div>
                <div className={style.listCategoryGamesContainer}>
                  <ListGames
                    page="games"
                    games={CategoryGroup.games.sort(
                      (game1, game2) => +game1.rank - +game2.rank
                    )}
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

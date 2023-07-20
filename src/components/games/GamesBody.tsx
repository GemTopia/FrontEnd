import GameItem from "../../models/GamesPageItem";
import style from "./GamesBody.module.css";
import ListGames from "./ListGames";
import CompactGames from "./CompactGames";
import GameCategory from "./GameCategoryPage";
import CategorisedGameGroupItem from "../../models/CategorisedGameGroupItem";
import React from "react";

const GamesBody: React.FC<{
  games: GameItem[];
  viewType: string;
  sortby: string;
  dropdownIsOpen: boolean;
  disableDownOrRights: { category: string; disableDownOrRight: boolean }[];
  disableUpOrLefts: { category: string; disableUpOrLeft: boolean }[];
  scrollUpHandler: any;
  scrollDownHandler: any;
  scrollLeftHandler: any;
  scrollRightHandler: any;
  categorisedGames: CategorisedGameGroupItem[];
}> = (props) => {
  let sortedGames = [...props.games];
  if (props.sortby === "rate" || props.sortby === "category") {
    sortedGames.sort((game1, game2) => +game1.id - +game2.id);
  }

  if (props.sortby === "earliest") {
    sortedGames.sort((game1 , game2) => new Date(game1.created_at).getTime() - new Date(game2.created_at).getTime());
  }

  if (props.sortby === "latest") {
    sortedGames.sort((game1 , game2) => new Date(game2.created_at).getTime() - new Date(game1.created_at).getTime())
  }

  
  return (
    <div className={style["body-container"]}>
      {props.viewType === "list" &&
        (props.sortby === "rate" ||
          props.sortby === "earliest" ||
          props.sortby === "latest") && (
          <ListGames games={sortedGames} page="games" />
        )}
      {props.viewType === "compact" &&
        (props.sortby === "rate" ||
          props.sortby === "earliest" ||
          props.sortby === "latest") && (
          <CompactGames
            games={sortedGames}
            dropdownIsOpen={props.dropdownIsOpen}
          />
        )}
      {props.sortby === "category" && (
        // <GameCategory
        //   viewType={props.viewType}
        //   categorisedGames={groupBy(sortedGames)}
        // />
        <GameCategory
          viewType={props.viewType}
          categorisedGames={props.categorisedGames}
          disableDownOrRights={props.disableDownOrRights}
          disableUpOrLefts={props.disableUpOrLefts}
          scrollUpHandler={props.scrollUpHandler}
          scrollDownHandler={props.scrollDownHandler}
          scrollLeftHandler={props.scrollLeftHandler}
          scrollRightHandler={props.scrollRightHandler}
          dropdownIsOpen = {props.dropdownIsOpen}
        />
      )}
    </div>
  );
};

export default GamesBody;

import GameItem from "../../models/GameItem";
import style from "./ListGames.module.css";
import React, { useEffect, useState } from "react";

import ListGamesItem from "./ListGamesItem";

const ListGames: React.FC<{
  games: GameItem[];
  page: string;
  sortby?: string;
}> = (props) => {
  
  return (
    <div className={style["list-games-body"]}>
      {props.games.map((gameItem, index) => (
        <div
          className={style["list-game-item-container"]}
          key={String(gameItem.id)}
          id={`categoryList${gameItem}${props.page === "games" && index}`}
        >
          <ListGamesItem gameItem={gameItem} />
        </div>
      ))}
    </div>
  );
};

export default ListGames;

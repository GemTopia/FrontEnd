import style from "./Game.module.css";
import React from "react";
import gameTopPlayerItem from "../models/gameTopPlayer";
import GameTopPlayers from "../components/players/GameTopPlayers";
import GameInfo from "../components/game/GameInfo";
import GamePictures from "../components/game/GamePictures";

const Game = () => {
  let dummyPictures: { imgAddress: string; id: string }[] = [
    { imgAddress: "screenshot.png", id: "0" },
    { imgAddress: "screenshot.png", id: "1" },
    { imgAddress: "screenshot.png", id: "2" },
    { imgAddress: "screenshot.png", id: "3" },
    { imgAddress: "screenshot.png", id: "4" },
    { imgAddress: "screenshot.png", id: "5" },
  ];

  let topPlayersDummy: gameTopPlayerItem[] = [
    {
      // rank: "first-place-medal.png",
      avatar: "player.png",
      user_name: "Jasmine Dragon",
      total_gemyto: 12,
      id: 0,
      hide_button: false,
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style["header-content"]}>
          The top 4 players will not only dominate the game, but also earn{" "}
          <span>Gemytos</span>
        </p>
        <img
          src={require("../assets/stareye.png")}
          alt="emoji1"
          className={style.emoji}
        />
        <img
          src={require("../assets/happy.png")}
          alt="emoji2"
          className={style.emoji}
        />
      </div>
      <GameInfo />
      <GamePictures pictures={dummyPictures} />
      <GameTopPlayers players={topPlayersDummy} />
    </div>
  );
};

export default Game;

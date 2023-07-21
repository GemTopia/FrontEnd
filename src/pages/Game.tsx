import style from "./Game.module.css";
import React, { useEffect, useState } from "react";
import gameTopPlayerItem from "../models/gameTopPlayer";
import GameTopPlayers from "../components/players/GameTopPlayers";
import GameInfo from "../components/game/GameInfo";
import GamePictures from "../components/game/GamePictures";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { useParams } from "react-router";
import GameItem from "../models/GameItem";

const Game = () => {
  let dummyPictures: { imgAddress: string; id: string }[] = [
    { imgAddress: "screenshot.png", id: "0" },
    { imgAddress: "screenshot.png", id: "1" },
    { imgAddress: "screenshot.png", id: "2" },
    { imgAddress: "screenshot.png", id: "3" },
    { imgAddress: "screenshot.png", id: "4" },
    { imgAddress: "screenshot.png", id: "5" },
    { imgAddress: "screenshot.png", id: "6" },
    { imgAddress: "screenshot.png", id: "7" },
    { imgAddress: "screenshot.png", id: "8" },
    { imgAddress: "screenshot.png", id: "9" },

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
  const [game, setGame] = useState<GameItem>();
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${baseUrl}/game/${params.gameId}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        setGame(response.data.game);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style["header-content"]}>
          The top {game?.num_of_users_get_gemyto} players will not only dominate
          the game, but also earn <span>Gemytos</span>
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
      {game && <GameInfo game={game} />}
      <GamePictures pictures={dummyPictures} />
      <GameTopPlayers players={topPlayersDummy} />
    </div>
  );
};

export default Game;

import style from "./Game.module.css";
import React, { Fragment, useEffect, useState } from "react";
import gameTopPlayerItem from "../models/gameTopPlayer";
import GameTopPlayers from "../components/players/GameTopPlayers";
import GameInfo from "../components/game/GameInfo";
import GamePictures from "../components/game/GamePictures";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { useParams } from "react-router";
import GameItem from "../models/GameItem";
import Header from "../components/layout/Header";

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
  let pictures = [
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
    "screenshot.png",
  ];
  let rewards: number[] = [12, 12, 12, 12];
  const [scoreLevels, setScoreLevels] = useState<number[]>([]);
  let dummyGame = {
    cover_image: "GamePic.png",
    logo_image: "",
    name: "subway surfers1",
    game_type: "category",
    // rank:string;
    num_of_like: 576544,
    id: 1,
    created_at: "2022-03-25",
    is_liked_by_user: false,
    game_pictures: pictures,

    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  };
  const [game, setGame] = useState<GameItem>();
  const params = useParams();
  useEffect(() => {
    axios
      .get(`${baseUrl}/game/${params.gameId}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        setGame(response.data.game);
        const scores = response.data.scores;
        setScoreLevels([
          scores.first_level_score,
          scores.second_level_score,
          scores.third_level_score,
          scores.fourth_level_score,
        ]);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <Header />

      <div className={style.container}>
        <div className={style.header}>
          <p className={style["header-content"]}>
            The top {game?.num_of_users_get_gemyto} players will not only
            dominate the game, but also earn <span>Gemytos</span>
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
        {/* {game && <GameInfo game={game} />} */}
        {game && <GameInfo game={game} scoreLevels={scoreLevels} />}
        <div className={style["mobile-size-game-description"]}>
          <h2>About this game</h2>
          <p className={style.description}>{dummyGame.bio}</p>
        </div>
        <GamePictures pictures={dummyPictures} />
        <GameTopPlayers players={topPlayersDummy} />
      </div>
    </Fragment>
  );
};

export default Game;

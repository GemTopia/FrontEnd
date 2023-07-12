import style from "./Game.module.css";
import gameTopPlayerItem from "../models/gameTopPlayer";
import GameTopPlayers from "../components/users/GameTopPlayers";
import GameInfo from "../components/games/GameInfo";
import GamePictures from "../components/games/GamePictures";

const Game = () => {


  let dummyPictures :{imgAddress : string , id : string}[] = [
    {imgAddress :'screenshot.png',
     id : '0'},
     {imgAddress :'screenshot.png',
     id : '1'},
     {imgAddress :'screenshot.png',
     id : '2'},
     {imgAddress :'screenshot.png',
     id : '3'},
     {imgAddress :'screenshot.png',
     id : '4'},
     {imgAddress :'screenshot.png',
     id : '5'}, ];


  let topPlayersDummy: gameTopPlayerItem[] = [
    {
      rank: "first-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "0",
    },
    {
      rank: "second-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "1",
    },
    {
      rank: "third-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "2",
    },
    {
      rank: "fourth-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "3",
    },
    {
      rank: "5",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "4",
    },
    {
      rank: "6",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "5",
    },
    {
      rank: "7",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "6",
    },
    {
      rank: "8",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "7",
    },
    {
      rank: "9",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "8",
    },
    {
      rank: "10",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      score: "120,000",
      id: "9",
    },
  ];


  return (
    <div className={style.container}>
      <div className={style.header}>
        <p className={style.headerContent}>
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
      <GamePictures pictures = {dummyPictures} />
      <GameTopPlayers players={topPlayersDummy} />
    </div>
  );
};

export default Game;

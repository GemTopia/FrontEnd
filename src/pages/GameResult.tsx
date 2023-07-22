import React , { useState } from "react";
import style from "./GameResult.module.css";

const GameResult = () => {

  const [isWinner , setIsWinner] = useState<boolean>(false); 


  return (
    <div className={style.container}>
      {!isWinner ?
      <div className={style["losing-message-container"]}>
      <p>OH ! YOU FAILDED ! </p>
        <img
          src={require("../assets/sad.png")}
          alt="sad-emoji"
          className={style.emoji}
        />
      </div> :
      <div className={style["winning-message-container"]}>
      <img
          src={require("../assets/crown.png")}
          alt="winning-gif"
          className={style.crown}
        />
      <p>NEW BEST ! </p>
        <img
          src={require("../assets/winning.gif")}
          alt="winning-gif"
          className={style["winning-gif"]}
        />
      </div>}
      {!isWinner ? <p className={style.score}>Score : 2,788</p> :
        <p className={style.score}>Best Score : 2,788</p>
        }
      <div className={style.body}>
        <p className={style.rank}>Rank :&nbsp;&nbsp;&nbsp;&nbsp;143</p>
        <div className={style.token}>
          <img src={require("../assets/rotated-gemyto.png")} alt="gemyto" className={style.gemyto} />
          <p className={style["token-count"]}>12</p>
        </div>
        <p className={style["earning-condition"]}>You will earn Gemyto by the end of the day if you stay among the top players .</p>
        <button className={style["play-button"]}> Play Again</button>
        <div className={style["footer-buttons-container"]}>
          <span className={style["footer-button"]}>
            <img src={require("../assets/back.png")}/>
          </span>
          <span className={style["footer-button"]}>
            <img src={require("../assets/home.png")}/>
          </span>
        </div>
      </div>
    </div>
  );
};

export default GameResult;

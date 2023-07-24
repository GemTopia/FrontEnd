import React, { useEffect, useState } from "react";
import style from "./GameResult.module.css";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { useParams } from "react-router";
import gameResult from "../models/gameResult";
import { Link } from "react-router-dom";

const GameResult = () => {
  const [isWinner, setIsWinner] = useState<boolean>(false);
  const param = useParams();
  const [result, setResult] = useState<gameResult>();
  useEffect(() => {
    axios
      .post(
        `${baseUrl}game/result/`,
        {
          game: param.gameId,
          user: String(1),
          score: String(120),
        },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        console.log(response);
        setResult(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
    const messageEle = document.getElementById("message");
    function receiveMessage(event: any) {
      console.log(event.origin);
      if (event.origin !== "http://game3.gem.kveh.ir/") return;
      console.log(event.data);
    }
    window.addEventListener("message", receiveMessage);
  }, []);
  return (
    <div className={style.container}>
      <div id="message" hidden></div>
      {!isWinner ? (
        <div className={style["losing-message-container"]}>
          <p>OH ! YOU FAILDED ! </p>
          <img
            src={require("../assets/sad.png")}
            alt="sad-emoji"
            className={style.emoji}
          />
        </div>
      ) : (
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
        </div>
      )}
      <div className={style.body}>
        {!isWinner ? (
          <p className={style.score}>Score : {result?.score}</p>
        ) : (
          <p className={style.score}>Best Score : {result?.score}</p>
        )}
        {/* <p className={style.rank}>Rank : 143</p> */}
        <div className={style.token}>
          <img
            src={require("../assets/rotated-gemyto.png")}
            alt="gemyto"
            className={style.gemyto}
          />
          <p className={style["token-count"]}>{result?.game_gemyto}</p>
        </div>
        <Link to="http://game3.gem.kveh.ir/" className={style.link}>
          <button className={style["play-button"]}> Play Again</button>
        </Link>

        <div className={style["footer-buttons-container"]}>
          <Link to={`/games/${param.gameId}`} className={style.link}>
            <span className={style["footer-button"]}>
              <img src={require("../assets/back.png")} />
            </span>
          </Link>
          <Link to="/home" className={style.link}>
            <span className={style["footer-button"]}>
              <img src={require("../assets/home.png")} />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default GameResult;

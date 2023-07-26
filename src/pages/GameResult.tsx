import React, { useEffect, useState } from "react";
import style from "./GameResult.module.css";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { useParams } from "react-router";
import gameResult from "../models/gameResult";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
const GameResult = () => {
  // const [isWinner, setIsWinner] = useState<boolean>(false);
  const param = useParams();
  const [result, setResult] = useState<gameResult>();
  // const [score, setScore] = useState<number>();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
    if (param.score) {
      axios
        .post(
          `${baseUrl}game/result/`,
          {
            game: param.gameId,
            user: String(1),
            score: (Number(param.score) + 68) / 17,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          setResult(response.data);
        })
        .catch(function (error) {
          // console.log(error);
        });
    }
    // if (param.score) setScore(Number(param.score + 68) / 17);
    //   window.addEventListener( "message",
    //       function (event) {
    //             if(event.origin !== 'http://127.0.0.1:5500/'){ return; }
    //             alert(event.data);
    //       },
    //       false);
    // // const messageEle = document.getElementById("receiver");
    // function receiveMessage(event: any) {
    //   console.log(event.data);
    //   if (event.origin !== "http://127.0.0.1:5500/index.html") return;
    //   console.log(event.data);
    // }
    // window.addEventListener("message", receiveMessage);
  }, []);
  return (
    <div className={style.container}>
      {/* <div id="message" hidden></div> */}
      {/* <iframe src="http://127.0.0.1:5500/" hidden></iframe> */}
      {/* <iframe
        id="receiver"
        src="http://127.0.0.1:5500/index.html"
        width="0"
        height="0"
        hidden
        title="receiver"
      ></iframe> */}
      {!result?.is_new_record ? (
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
        {!result?.is_new_record ? (
          <p className={style.score}>Score : {result?.score}</p>
        ) : (
          <p className={style.score}>Best Score : {result?.score}</p>
        )}
        {/* <p className={style.rank}>Rank : 143</p> */}
        {/* <div className={style.token}>
          <img
            src={require("../assets/rotated-gemyto.png")}
            alt="gemyto"
            className={style.gemyto}
          />
          <p className={style["token-count"]}>{result?.game_gemyto}</p>
        </div> */}
        <Link to={`/games/${param.gameId}`} className={style.link}>
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

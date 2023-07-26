import React, { Fragment, useState } from "react";
import style from "./ListGamesItem.module.css";
import GameItem from "../../models/GameItem";
import axios, * as others from "axios";
import { baseUrl } from "../../shares/shared";
import { Link, useNavigate } from "react-router-dom";
const ListGamesItem: React.FC<{
  gameItem: GameItem;
}> = (props) => {
  const [isLiked, setIsLiked] = useState<boolean>(
    props.gameItem.is_liked_by_user
  );
  const [likeCounts, setLikeCount] = useState(props.gameItem.num_of_like);
  const likeClickHandler = (event: any) => {
    // console.log(isLiked);
    axios
      .get(`${baseUrl}game/like/${event.target.id}/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        if (isLiked === false) {
          setLikeCount((current) => current + 1);
        } else {
          setLikeCount((current) => current - 1);
        }
        setIsLiked((current) => !current);
      })
      .catch(function (error) {
        // console.log(error);
      });
  };
  const navigate = useNavigate();
  const gameOpenHandler = () => {
    navigate(`/games/${props.gameItem.id}`);
  };
  return (
    <Fragment>
      {props.gameItem.logo_image && (
        <img
          src={baseUrl + props.gameItem.logo_image}
          alt=""
          className={style["game-logo"]}
        />
      )}

      <Link to={`/games/${props.gameItem.id}`}></Link>
      <div className={style["game-info-container"]} onClick={gameOpenHandler}>
        <h4 className={style["game-name"]}>{props.gameItem.name}</h4>
        <p className={style["game-category"]}>{props.gameItem.game_type}</p>
        <p className={style["game-rank"]}>#{String(props.gameItem.rank)}</p>
      </div>

      <div className={style["likes-container"]}>
        <img
          src={require(`../../assets/${
            isLiked ? "liked-icon.png" : "unliked-icon.png"
          }`)}
          alt="like icon"
          id={String(props.gameItem.id)}
          onClick={likeClickHandler}
        />
        <p className={style["game-likes-count"]}>
          {likeCounts.toLocaleString()}
        </p>
      </div>
    </Fragment>
  );
};

export default ListGamesItem;

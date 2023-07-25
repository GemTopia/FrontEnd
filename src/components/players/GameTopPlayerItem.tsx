import gameTopPlayerItem from "../../models/gameTopPlayer";
import style from "./GameTopPlayerItem.module.css";
import { Link } from "react-router-dom";
const GameTopPlayerItem: React.FC<{
  player: gameTopPlayerItem;
  rank: number;
}> = (props) => {
  return (
    <Link
      to={`../profile${
        props.player.user_name === localStorage.getItem("username")
          ? ""
          : "/" + props.player.user_name
      }`}
    >
      <div
        className={`${style.container} ${
          Number(props.rank) % 2 == 0
            ? style["dark-background"]
            : style["light-backgeround"]
        }`}
        id={String(props.player.id)}
      >
        <div className={style["rank-container"]}>
          {props.rank < 4 ? (
            <img
              src={require(`../../assets/home/${props.rank + 1}-medal.png`)}
              alt=""
              className={style.medal}
            />
          ) : (
            <p>{props.rank + 1}</p>
          )}
        </div>
        {/* {props.player.avatar && (
          <img
            src={require(props.player.avatar)}
            alt=""
            className={style["player-image"]}
          />
        )} */}

        <p className={style.username}>{props.player.user_name}</p>

        <div className={style["token-container"]}>
          <p className={style["token-count"]}>
            {String(props.player.total_gemyto)}
          </p>
          <img src={require("../../assets/gemyto.png")} alt="gemyto" />
        </div>
      </div>
    </Link>
  );
};

export default GameTopPlayerItem;

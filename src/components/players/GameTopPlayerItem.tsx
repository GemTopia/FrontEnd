import gameTopPlayerItem from "../../models/gameTopPlayer";
import style from "./GameTopPlayerItem.module.css";

const GameTopPlayerItem: React.FC<{ player: gameTopPlayerItem }> = (props) => {
  return (
    <div
      className={`${style.container} ${
        Number(props.player.id) <= 3
          ? style["light-backgeround"]
          : style["dark-background"]
      }`}
      id={String(props.player.id)}
    >
      <div className={style["rank-container"]}>
        {/* {isNaN(parseInt(props.player.rank)) ? (
          <img
            src={require(`../../assets/${props.player.rank}`)}
            alt=""
            className={style.medal}
          />
        ) : (
          <p>{props.player.rank}</p>
        )} */}
      </div>
      <img
        src={require(`../../assets/${props.player.avatar}`)}
        alt=""
        className={style["player-image"]}
      />
      <p className={style.username}>{props.player.user_name}</p>

      <p className={style["score-count"]}>
        {String(props.player.total_gemyto)}
      </p>
    </div>
  );
};

export default GameTopPlayerItem;

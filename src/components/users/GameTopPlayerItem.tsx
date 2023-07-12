import gameTopPlayerItem from "../../models/gameTopPlayer";
import style from "./GameTopPlayerItem.module.css";

const GameTopPlayerItem: React.FC<{ player: gameTopPlayerItem }> = (props) => {
  return (
    <div
      className={`${style.container} ${
        Number(props.player.id) <= 3
          ? style.lightBackgeround
          : style.darkBackground 
      }`}
      id={props.player.id}
    >
      <div className={style.rankContainer}>
        {isNaN(parseInt(props.player.rank)) ? (
          <img
            src={require(`../../assets/${props.player.rank}`)}
            alt=""
            className={style.medal}
          />
        ) : (
          <p>{props.player.rank}</p>
        )}
      </div>
      <img
        src={require(`../../assets/${props.player.imageAddress}`)}
        alt=""
        className={style.playerImage}
      />
      <p className={style.username}>{props.player.userName}</p>

        <p className={style.scoreCount}>{props.player.score}</p>
    </div>
  );
};

export default GameTopPlayerItem;
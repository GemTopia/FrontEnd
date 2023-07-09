import topPlayerItem from "../../models/topPlayerItem";
import style from "./TopPlayerItem.module.css";

const TopPlayerItem: React.FC<{ player: topPlayerItem }> = (props) => {
  return (
    <div
      className={`${style.container} ${
        Number(props.player.id) % 2 == 0
          ? style.darkBackground
          : style.lightBackgeround
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

      <div className={style.tokenContainer}>
        <p className={style.tokenCount}>{props.player.score}</p>
        <img
          src={require("../../assets/gemyto.png")}
          alt="gemyto"
        />
      </div>
    </div>
  );
};

export default TopPlayerItem;

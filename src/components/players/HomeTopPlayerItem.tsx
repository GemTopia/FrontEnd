import homeTopPlayerItem from "../../models/homeTopPlayerItem";
import style from "./HomeTopPlayerItem.module.css";

const HomeTopPlayerItem: React.FC<{ player: homeTopPlayerItem }> = (props) => {
  return (
    <div
      className={`${style.container} ${
        Number(props.player.id) % 2 == 0
          ? style["dark-background"]
          : style["light-backgeround"]
      }`}
      id={props.player.id}
    >
      <div className={style["rank-container"]}>
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
        className={style["player-image"]}
      />
      <p className={style.username}>{props.player.userName}</p>

      <div className={style["token-container"]}>
        <p className={style["token-count"]}>{props.player.token}</p>
        <img src={require("../../assets/gemyto.png")} alt="gemyto" />
      </div>
    </div>
  );
};

export default HomeTopPlayerItem;

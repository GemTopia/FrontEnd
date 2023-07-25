import { Link } from "react-router-dom";
import homeTopPlayerItem from "../../models/homeTopPlayerItem";
import style from "./HomeTopPlayerItem.module.css";

const HomeTopPlayerItem: React.FC<{
  player: homeTopPlayerItem;
  rank: number;
  index: number;
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
          Number(props.index) % 2 == 0
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
        <img
        src={require(`../../assets/${props.player.avatar}`)}
        alt=""
        className={style["player-image"]}
      />
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

export default HomeTopPlayerItem;

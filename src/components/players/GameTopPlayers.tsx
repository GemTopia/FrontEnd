import style from "./GameTopPlayers.module.css";
import GameTopPlayerItem from "./GameTopPlayerItem";
import gameTopPlayerItem from "../../models/gameTopPlayer";

const GameTopPlayers: React.FC<{ players: gameTopPlayerItem[] }> = (props) => {
  const loadedPlayers = props.players;
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2>Top Players</h2>
        <p>The ranking is based on scores from the last 24 hours.</p>
      </div>
      {loadedPlayers.map((player, index) => {
        return (
          <GameTopPlayerItem key={String(index)} player={player} rank={index} />
        );
      })}
    </div>
  );
};

export default GameTopPlayers;

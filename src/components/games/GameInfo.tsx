import { useState } from "react";
import style from "./GameInfo.module.css";

const GameInfo = () => {

    const [liked, setLiked] = useState<boolean>(false);
    const [isHovered, setIsHovered] = useState(false);
    const [likeCount, setLikeCount] = useState<number>(6278);

    const likeHandler = () => {
        setLiked((current) => !current);
    
        if (liked === false) {
          setLikeCount((current) => current + 1);
        } else {
          setLikeCount((current) => current - 1);
        }
      };
    
      ///////////////////////////////////////////////////////////////////////
    
      const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };
    

  return (
    <div className={style.infoBox}>
      <div className={style.gameInfoContainer}>
        <img
          src={require("../../assets/GamePic.png")}
          alt="game thumbnail"
          className={style.thumbnail}
        />
        <div className={style.infoContainer}>
          <h1>2048</h1>
          <p className={style.gameName}>Puzzle game</p>
          <p className={style.rank}>#1</p>
          <p className={style.description}>
            You join the numbers and get to the 2048 tile! Supports tiny (3x3),
            classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes.
            Be ready for a new challenge!
          </p>
          <div className={style.buttons}>
            <div className={style.likeContainer}>
              <img
                src={require(`../../assets/${
                  liked ? "liked-icon.png" : "unliked-icon.png"
                }`)}
                alt="like icon"
                onClick={likeHandler}
              />
              <p className={style.likeCount}>{likeCount}</p>
            </div>
            <a href="/Game" className={style.reportIcon}>
              <img
                src={require(`../../assets/${
                  isHovered ? "hovered-report.png" : "report.png"
                }`)}
                alt="report icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              />
            </a>
            <div className={style.playButtonContainer}>
              <button className={style.playButton}>Play now</button>
            </div>
          </div>
        </div>
      </div>
      <img
        src={require("../../assets/roadmap.png")}
        alt="roadmap"
        className={style.roadmap}
      />
    </div>
  );
};

export default GameInfo;

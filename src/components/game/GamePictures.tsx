import React , { useState } from "react";
import style from "./GamePictures.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const GamePictures: React.FC<{ pictures: {imgAddress : string , id : string}[] }> = (props) => {

    const [leftPic, setLeftPic] = useState("0");
    const [disableRight, setDisableRight] = useState(false);
    const [disableLeft, setDisableLeft] = useState(true);

    const scrollLeftHandler = () => {
        if (+(leftPic) - 3 > 0) {
          const element = document.getElementById(`gameShot${+(leftPic) - 3}`);
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setLeftPic((current) => String(+(current) - 3));
          }
          setDisableLeft(false);
          setDisableRight(false);
        } else if (leftPic !== "0") {
          const element = document.getElementById("gameShot0");
          if (element) {
            console.log(element.id)
            element.scrollIntoView({ behavior: "smooth" });
            setLeftPic("0");
          }
          setDisableLeft(true);
          setDisableRight(false);
        }
      };
      const scrollRightHandler = () => {
        const element = document.getElementById(`gameShot${+(leftPic) + 5}`);
        if (+(leftPic) + 6 >= props.pictures.length) setDisableRight(true);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          setLeftPic((current) => String(+(current) + 3));
          setDisableLeft(false);
        }
      };
      console.log(leftPic);
    return(
        <div className={style.container}>
        <h2 className={style["pics-header"]}>Screenshots</h2>
        <div className={style["game-pics-body"]}>
          <span
            className={`${style["icon-container"]} ${!disableLeft && style["icon-background"]}`}
          >
            <FontAwesomeIcon
              icon={faAngleLeft}
              onClick={scrollLeftHandler}
              className={disableLeft ? style.disabled : style.icon}
            />
          </span>
          <div className={style["pics-container"]}>
            {props.pictures.map((pic) =><div id={`gameShot${pic.id}`} key={pic.id}> <img src={require(`../../assets/${pic.imgAddress}`)} className={style["game-picture"]} /> </div>)}
          </div>
          <span
            className={`${style["icon-container"]} ${!disableRight && style["icon-background"]}`}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              onClick={scrollRightHandler}
              className={disableRight ? style.disabled : style.icon}
            />
          </span>
        </div>
      </div>
    )

}

export default GamePictures;
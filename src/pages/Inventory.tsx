import style from "./Inventory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Inventory = () => {
  return (
    <div className={style.container}>
      <div className={style.header}>
        <h2 className={style["header-title"]}>Inventory</h2>
        <hr className={style["header-line"]} />
        <div className={style["token-count-container"]}>
          <img
            src={require("../assets/gemyto2.png")}
            alt="gemyto"
            className={style.gemyto}
          />
          <p className={style["token-count"]}>0</p>
        </div>
        <div className={style["withdraw-container"]}>
            <button className={style["withdraw-button"]}>Withdraw</button>
            <FontAwesomeIcon icon={faCircleExclamation} className={style["warning-icon"]} />
            <p className={style.description}>To ensure optimal performance when connecting your wallet, we recommend connecting only   one account.</p>
        </div>
      </div>
    </div>
  );
};

export default Inventory;

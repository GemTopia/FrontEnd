import style from "./Inventory.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InventoryGameItem from "../models/InventoryGameItem";
import InventoryLlist from "../components/games/InventoryList";
const Inventory = () => {
  let dummy:InventoryGameItem[] =[
    {
      gameLogoAddress:'Rectangle 846.png',
      gameName:'Subway sufers',
      earnedCount:'5',
      id:'0'
    },
    {
      gameLogoAddress:'Rectangle 846.png',
      gameName:'Subway sufers',
      earnedCount:'5',
      id:'1'
    },
    {
      gameLogoAddress:'Rectangle 846.png',
      gameName:'Subway sufers',
      earnedCount:'5',
      id:'2'
    },
    {
      gameLogoAddress:'Rectangle 846.png',
      gameName:'Subway sufers',
      earnedCount:'5',
      id:'3'
    },
    {
      gameLogoAddress:'Rectangle 846.png',
      gameName:'Subway sufers',
      earnedCount:'5',
      id:'4'
    },
  ]
  const [yesterdayWinning,setYesterdayWinning]=useState(true);
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
        {yesterdayWinning&&
        
        <div className={style['winning-message']}>
        <p>Yesteday ,You received the tokens you were eligible for !</p>
        <img
          src={require("../assets/stareye.png")}
          alt="emoji1"
          className={style.emoji}
        />
        <img
          src={require("../assets/happy.png")}
          alt="emoji2"
          className={style.emoji}
        />
        </div>
        }
        <div className={style["withdraw-container"]}>
            <button className={style["withdraw-button"]}>Withdraw</button>
            <FontAwesomeIcon icon={faCircleExclamation} className={`${style["warning-icon"]} ${style['yellow-icon']}`} />
            <p className={style['header-description']}>To ensure optimal performance when connecting your wallet, we recommend connecting only   one account.</p>
        </div>
      </div>
        <div className={style['lists-container']}>
          <InventoryLlist title="Waiting List" gameItems={[]}/>
          <InventoryLlist title="Earned Gemyto" gameItems={dummy}/>
        </div>
        
    </div>
  );
};

export default Inventory;

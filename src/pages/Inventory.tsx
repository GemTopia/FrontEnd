import style from "./Inventory.module.css";
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import InventoryGameItem from "../models/InventoryGameItem";
import InventoryLlist from "../components/inventory/InventoryList";
import transaction from "../models/InventoryTransaction";
import ErrorModal from "../components/inventory/ErrorModal";
const Inventory = () => {
  let dummy: InventoryGameItem[] = [
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "Subway sufers",
      earnedCount: "5",
      id: "0",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "Subway sufers",
      earnedCount: "5",
      id: "1",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "Subway sufers",
      earnedCount: "5",
      id: "2",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "Subway sufers",
      earnedCount: "5",
      id: "3",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "Subway sufers",
      earnedCount: "5",
      id: "4",
    },
  ];
  let transactionDummy: transaction[] = [
    {
      id: "0",
      Date: "2023-04-20",
      From: "0xCA78eA7E4508641b38D3CC509B661825043C8802",
      To: "0x65f87038b375460f4B412bDf647DbaF8e8d89C12",
      Quantity: 50000000000000,
    },
    {
      id: "1",
      Date: "2023-04-20",
      From: "0xCA78eA7E4508641b38D3CC509B661825043C8802",
      To: "0x65f87038b375460f4B412bDf647DbaF8e8d89C12",
      Quantity: 50000000000000,
    },
    {
      id: "2",
      Date: "2023-04-20",
      From: "0xCA78eA7E4508641b38D3CC509B661825043C8802",
      To: "0x65f87038b375460f4B412bDf647DbaF8e8d89C12",
      Quantity: 50000000000000,
    },
  ];
  const [yesterdayWinning, setYesterdayWinning] = useState(true);
  const [transactionCondition, setTransactionCondition] = useState("");
  // const [transactionCondition, setTransactionCondition] = useState('success');
  // const [transactionCondition, setTransactionCondition] = useState('connect wallet');
  // const [transactionCondition, setTransactionCondition] = useState('lack of amount');
  const successTransactionHandler = () => {
    setTransactionCondition("success");
  };
  const walletConnectErrorHandler = () => {
    setTransactionCondition("connect wallet");
  };
  const lackOfAmountErrorHandler = () => {
    setTransactionCondition("lack of amount");
  };
  const confirmHandler = () => {
    setTransactionCondition("");
  };

  return (
    <div className={style.container}>
      {transactionCondition && (
        <ErrorModal
          transactionCondition={transactionCondition}
          onConfirm={confirmHandler}
        />
      )}
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
        {yesterdayWinning && (
          <div className={style["winning-message"]}>
            <p>Yesteday ,You received the tokens you were eligible for !</p>
            <img src={require("../assets/stareye.png")} alt="emoji1" />
            <img src={require("../assets/happy.png")} alt="emoji2" />
          </div>
        )}
        <div className={style["withdraw-container"]}>
          <button className={style["withdraw-button"]}>Withdraw</button>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className={`${style["warning-icon"]} ${style["yellow-icon"]}`}
          />
          <p className={style["header-description"]}>
            To ensure optimal performance when connecting your wallet, we
            recommend connecting only one account.
          </p>
        </div>
      </div>
      <div className={style["lists-container"]}>
        <InventoryLlist title="Waiting List" gameItems={dummy} />
        <InventoryLlist title="Earned Gemyto" gameItems={dummy} />
      </div>
      <table>
        <thead>
          <tr>
            <th></th>
            <th scope="col">Date</th>
            <th scope="col">From</th>
            <th scope="col">To</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {transactionDummy.map((transaction, index) => {
            return (
              <tr>
                <td className={style["table-index"]}>{index}</td>
                <td className={style["table-date"]}>
                  {dateFormater(transaction.Date)}
                </td>
                <td className={style["table-from"]}>
                  {transaction.From.slice(0, 8) +
                    "...." +
                    transaction.To.slice(transaction.To.length - 8)}
                  <img
                    src={require("../assets/copy.png")}
                    alt="copy icon"
                    className={style["copy-icon"]}
                  />
                </td>
                <td className={style["table-to"]}>
                  <img
                    src={require("../assets/right arrow.png")}
                    alt="right arrow icon"
                    className={style["to-arrow-icon"]}
                  />
                  {transaction.To.slice(0, 8) +
                    "..." +
                    transaction.To.slice(transaction.To.length - 8)}
                  <img
                    src={require("../assets/copy.png")}
                    alt="copy icon"
                    className={style["copy-icon"]}
                  />
                </td>
                <td className={style["table-quantity"]}>
                  {transaction.Quantity.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
function dateFormater(dateString: string) {
  let date = new Date(dateString);
  let day: string | number = date.getDate();
  // add +1 to month because getMonth() returns month from 0 to 11
  let month: string | number = date.getMonth() + 1;
  let year = date.getFullYear();

  // show date and month in two digits
  // if month is less than 10, add a 0 before it
  if (day < 10) {
    day = "0" + day;
  }
  if (month < 10) {
    month = "0" + month;
  }

  // now we have day, month and year
  // use the separator / to join them
  return year + "/" + month + "/" + day;
}

export default Inventory;

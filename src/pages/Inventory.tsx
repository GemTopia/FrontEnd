import style from "./Inventory.module.css";
// import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useEffect, useState } from "react";
import InventoryGameItem from "../models/InventoryGameItem";
import InventoryLlist from "../components/inventory/InventoryList";
import transaction from "../models/InventoryTransaction";
import ErrorModal from "../components/inventory/ErrorModal";
import Header from "../components/layout/Header";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { ethers } from "ethers";
import GameItem from "../models/GameItem";
import { useNavigate } from "react-router";
import Modal from "../components/layout/Modal";
import warning from "../assets/warning.svg";
import metamask from "../assets/metamask.svg";
import X from "../assets/menu-X.svg"
const Inventory = () => {
  // let dummy: InventoryGameItem[] = [
  //   {
  //     gameLogoAddress: "Rectangle 846.png",
  //     gameName: "Subway sufers",
  //     earnedCount: "5",
  //     id: "0",
  //   },
  //   {
  //     gameLogoAddress: "Rectangle 846.png",
  //     gameName: "Subway sufers",
  //     earnedCount: "5",
  //     id: "1",
  //   },
  //   {
  //     gameLogoAddress: "Rectangle 846.png",
  //     gameName: "Subway sufers",
  //     earnedCount: "5",
  //     id: "2",
  //   },
  //   {
  //     gameLogoAddress: "Rectangle 846.png",
  //     gameName: "Subway sufers",
  //     earnedCount: "5",
  //     id: "3",
  //   },
  //   {
  //     gameLogoAddress: "Rectangle 846.png",
  //     gameName: "Subway sufers",
  //     earnedCount: "5",
  //     id: "4",
  //   },
  // ];
  // let transactionDummy: transaction[] = [
  // {
  //   id: 0",
  //   Date: "2023-04-20",
  //   From: "0xCA78eA7E4508641b38D3CC509B661825043C8802",
  //   To: "0x65f87038b375460f4B412bDf647DbaF8e8d89C12",
  //   Quantity: 50000000000000,
  // },
  // {
  //   id: "1",
  //   Date: "2023-04-20",
  //   From: "0xCA78eA7E4508641b38D3CC509B661825043C8802",
  //   To: "0x65f87038b375460f4B412bDf647DbaF8e8d89C12",
  //   Quantity: 50000000000000,
  // },
  // {
  //   id: "2",
  //   Date: "2023-04-20",
  //   From: "0xCA78eA7E4508641b38D3CC509B661825043C8802",
  //   To: "0x65f87038b375460f4B412bDf647DbaF8e8d89C12",
  //   Quantity: 50000000000000,
  // },
  // ];
  const [yesterdayWinning, setYesterdayWinning] = useState(false);
  const [transactionCondition, setTransactionCondition] = useState("");
  // const [transactionCondition, setTransactionCondition] = useState('success');
  // const [transactionCondition, setTransactionCondition] = useState('connect wallet');
  // const [transactionCondition, setTransactionCondition] = useState('lack of amount');
  const [waitingGames, setWaitingGames] = useState<InventoryGameItem[]>();
  const [earnedGames, setEarnedGames] = useState<InventoryGameItem[]>();
  const [transactions, setTransactions] = useState<transaction[]>();
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
    axios
      .get(`${baseUrl}wallet/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        console.log(response);
        setWaitingGames(response.data.daily_played);
        setEarnedGames(response.data.played);
        setTransactions(response.data.transactions);
        if (response.data.played.length > 0) setYesterdayWinning(true);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [localStorage.getItem("token")]);
  // const successTransactionHandler = () => {
  //   setTransactionCondition("success");
  // };
  // const walletConnectErrorHandler = () => {
  //   setTransactionCondition("connect wallet");
  // };
  // const lackOfAmountErrorHandler = () => {
  //   setTransactionCondition("lack of amount");
  // };
  // const confirmHandler = () => {
  //   setTransactionCondition("");
  // };
  async function connectWallet() {
    if (typeof (window as any).ethereum !== "undefined") {
      try {
        await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });
        const provider = new ethers.BrowserProvider((window as any).ethereum);
        const signer = provider.getSigner();
        const connectedAddress = (await signer).getAddress();
        return connectedAddress.toString();
      } catch (error) {
        // console.log(error); // اینجاهم ارور برای کاربر نشون داده میشه مثلا گفته میشه که شما درخواست رو رد کردید اینم باز سارا طراحی میکنه مثلا هنگام اتصال به ولت مشکلی روی داد
      }
    } else {
      setTransactionCondition("connect wallet");
    }
  }
  const withdrawHandler = async () => {
    const userAddress = await connectWallet(); //connected user address
  };
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // const PRIVATE_KEY = process.env.REACT_APP_PRIVATE_KEY;
  // const INFURA_SEPOLIA_ENDPOINT = process.env.REACT_APP_INFURA_SEPOLIA_ENDPOINT;
  // const ABI = process.env.REACT_APP_ABI
  //   ? JSON.parse(process.env.REACT_APP_ABI)
  //   : [];
  // connect wallet

  // async function send_token(send_token_amount: any, to_address: any) {
  //   try {
  //     const contractAddress = "0x09126279272F568515111d5796368Dfc85A1Dd7C"; //Gemyto
  //     (window as any).provider = new ethers.JsonRpcProvider(
  //       INFURA_SEPOLIA_ENDPOINT
  //     ); //sepolia
  //     if (PRIVATE_KEY) {
  //       const walletSigner = new ethers.Wallet(
  //         PRIVATE_KEY,
  //         (window as any).provider
  //       );
  //       const tokenContract = new ethers.Contract(
  //         contractAddress,
  //         ABI,
  //         walletSigner
  //       ); //for using contract
  //       const amountToSend = ethers.parseUnits(send_token_amount, 18);
  //       //trx
  //       const transaction = await tokenContract.transfer(
  //         to_address,
  //         amountToSend
  //       );
  //       //wait
  //       const receipt = await transaction.wait();
  //       //
  //       alert("done");
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }
  // //وقتی دکمه برداشت زده میشه این تابع فراخوانی میشه که شامل فراخوانی دو تابع بالاس
  // async function withdraw(amount: number) {
  //   const userAddress = await connectWallet(); //connected user address
  //   // اینجا این ادرس فرستاده میشه برای بک هر بار

  //   // if (userAddress) send_token(amount.toString(), userAddress);
  //   //اینجا مقدار هم فرستاده میشه برای بک
  //   else console.log("wallet did not connected"); //اینجا کامپوننتی که سارا طراحی کرده نشون داده میشه
  // }

  // withdraw(0.003); //این مقدار  تمام موجودی کاربر میشه ولی قبلش یه چک کنید از یه مقداری بیشتر باشه مثلا بیاد چک کنه اگه از 100 بیشتره اجازه برداشت بده اگه کمتره دوباره چیزی که سارا طراحی کرده رو بذارید

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // <ErrorModal
  //   transactionCondition={transactionCondition}
  //   onConfirm={confirmHandler}
  // />
  const cancelModal = () => {
    setTransactionCondition("");
  };
  return (
    <Fragment>
      <Header />
      <div className={style.container}>
        {transactionCondition === "connect wallet" && (
          <Modal
            cancel={cancelModal}
            children={
              <div className={style.modal}>
                <img src={X} alt="X" className={style['x-icon']} onClick={cancelModal}/>
                <div className={style["modal-text"]}>
                  <img src={warning} alt="warning" />
                  <p>Please connnect your wallet first(MetaMask)</p>
                </div>
                <img src={metamask} alt="metamask" />
              </div>
            }
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
              <img
                src={require("../assets/winning.gif")}
                alt="winning gif"
                className={style["winning-gif"]}
              />
            </div>
          )}
          <div className={style["withdraw-container"]}>
            <button
              className={style["withdraw-button"]}
              onClick={withdrawHandler}
            >
              Withdraw
            </button>
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
          {waitingGames && (
            <InventoryLlist title="Waiting List" gameItems={waitingGames} />
          )}
          {earnedGames && (
            <InventoryLlist title="Earned Gemyto" gameItems={earnedGames} />
          )}
        </div>
        <table className={style.transaction}>
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
            {transactions &&
              transactions.map((transaction, index) => {
                return (
                  <tr key={index}>
                    <td className={style["table-index"]}>{index + 1}</td>
                    <td className={style["table-date"]}>
                      {dateFormater(transaction.created_at)}
                    </td>
                    <td className={style["table-from"]}>
                      {transaction.from_wallet.slice(0, 8) +
                        "...." +
                        transaction.from_wallet.slice(
                          transaction.from_wallet.length - 8
                        )}
                      <img
                        src={require("../assets/copy.png")}
                        alt="copy icon"
                        className={style["copy-icon"]}
                      />
                    </td>
                    <td className={style["table-to"]}>
                      {/* <img
                    src={require("../assets/right arrow.png")}
                    alt="right arrow icon"
                    className={style["to-arrow-icon"]}
                  /> */}
                      {transaction.wallet_address.slice(0, 8) +
                        "..." +
                        transaction.wallet_address.slice(
                          transaction.wallet_address.length - 8
                        )}
                      <img
                        src={require("../assets/copy.png")}
                        alt="copy icon"
                        className={style["copy-icon"]}
                      />
                    </td>
                    <td className={style["table-quantity"]}>
                      {transaction.value.toLocaleString()}
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </Fragment>
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

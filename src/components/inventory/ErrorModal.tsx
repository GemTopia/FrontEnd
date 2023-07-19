import React from "react";
import style from "./ErrorModal.module.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const ErrorModal: React.FC<{ onConfirm: any; transactionCondition: string }> = (
  props
) => {
  let content: any;
  switch (props.transactionCondition) {
    case "success":
      content = (
        <div className={style["success-content"]}>
          <FontAwesomeIcon
            icon={faCircleExclamation}
            className={style["green-icon"]}
          />
          <p>Your withdrawal was successful.</p>
        </div>
      );
      break;
    case "connect wallet":
      content = (
        <div className={style["wallet-connect-content-container"]}>
          <div className={style["wallet-connect-content"]}>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              className={style["red-icon"]}
            />
            <pre>Please connect your wallet first (MetaMask)</pre>
          </div>
          <div className={style["meta-mask-fox"]}>
            <img
              src={require("../../assets/Meta Mask Fox.png")}
              alt="meta mask fox"
            />
          </div>
        </div>
      );
      break;
    case "lack of amount":
      content = (
        <div className={style["lack-of-amount-content"]}>
          <img
            src={require("../../assets/orange warning.png")}
            alt="meta mask fox"
            className={style["orange-icon"]}
          />
          <p>The minimum withdrawal amount for Gemyto is 100 .</p>
        </div>
      );
      break;
  }
  return (
    <>
      <div className={style.backdrop} onClick={props.onConfirm} />
      <div className={style.modal}>
        <FontAwesomeIcon
          icon={faXmark}
          className={style.cross}
          onClick={props.onConfirm}
        />
        {content}
      </div>
    </>
  );
};

export default ErrorModal;

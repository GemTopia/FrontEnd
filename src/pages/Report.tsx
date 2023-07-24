import style from "./Report.module.css";
import React, { FormEvent, useState } from "react";
import useInput from "../components/hooks/use-input";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const Report: React.FC = (props) => {
  // const [showMessage, setShowMessage] = useState<boolean>(false);

  const {
    enteredValue: reportValue,
    isValid: reportIsValid,
    hasError: reportHasError,
    inputChangeHandler: reportChangeHandler,
    inputBlurHandler: reportBlurHandler,
  } = useInput(() => {},
  "");
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    axios.post(
      `${baseUrl}/api/reports/`,
      {},
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    // setShowMessage(true);
  };

  // const cancleHandler = () => {
  //   setShowMessage(false)
  // }

  return (
    <div className={style["page-container"]}>
      {/* {showMessage && (
        <div className={style.backdrop}>
          <div className={style.modal}>
            <FontAwesomeIcon icon={faXmark} className={style.cross} onClick={cancleHandler} />
            <div className={style.content}>
              <FontAwesomeIcon icon={faCircleCheck} className={style.check} />
              <p>
                Your report has been successfully submitted.
                <br />
                <br />
                Thank you for taking the time to submit your report and help us
                improve GemTopia.<img src={require("../assets/heart eye.png")} className={style.emoji} />
                <br />
                <br />
                our experts will review the issue and work to fix the problem as
                soon as possible.
              </p>
            </div>
          </div>
        </div>
      )} */}
      <div className={style["report-issue-container"]}>
        <div className={style["report-header-container"]}>
          <p className={style["header-title"]}>Report Issues</p>
          <p className={style["header-body"]}>
            Thanks for reporting any issues you've encountered while playing the
            game. Our experts will work to fix any problems as soon as possible.
          </p>
        </div>
        <div className={style["report-input-container"]}>
          <form onSubmit={submitHandler}>
            <textarea
              className={style["report-input"]}
              placeholder="Report"
              cols={35}
              rows={3}
              value={reportValue}
              onChange={reportChangeHandler}
              onBlur={reportBlurHandler}
            ></textarea>
            <button type="submit" className={style["submit-edit-button"]}>
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className={style["side-pictures-container"]}>
        <img
          src={require("../assets/characterReportBoy.png")}
          alt=""
          className={style["left-image"]}
        />

        <img
          src={require("../assets/characterReportGirl.png")}
          alt=""
          className={style["right-image"]}
        />
      </div>
    </div>
  );
};

export default Report;

import style from "./Report.module.css";
import React, { FormEvent } from "react";
import useInput from "../components/hooks/use-input";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";

const Report: React.FC = (props) => {
  const {
    enteredValue: reportValue,
    isValid: reportIsValid,
    hasError: reportHasError,
    inputChangeHandler: reportChangeHandler,
    inputBlurHandler: reportBlurHandler,
  } = useInput(() => {},
  "I'm Mathias Yeo, and I'm passionate about writing engaging content for businesses");
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
  };
  return (
    <div className={style["page-container"]}>
      <div className={style["report-issue-container"]}>
        <div className={style["report-header-container"]}>
          <p className={style["header-title"]}>Report Issues</p>
          <p className={style["header-body"]}>
            Thanks for reporting any issues you've encountered while playing the
            game. Our experts will work to fix any problems as soon as possible.
          </p>
        </div>
        <div className={style["report-input-container"]}>
          <p className={style["input-title"]}>Report</p>
          <form onSubmit={submitHandler}>
            <textarea
              className={style["report-input"]}
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

import style from "./Report.module.css";
import useInput from "../components/hooks/use-input";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import React, { FormEvent, Fragment, useState } from "react";
import Header from "../components/layout/Header";
import { useNavigate, useParams } from "react-router";
import Modal from "../components/layout/Modal";
import tik from "../assets/tik.svg";
import X from "../assets/menu-X.svg"
const Report: React.FC = (props) => {
  // const [showMessage, setShowMessage] = useState<boolean>(false);

  const {
    enteredValue: reportValue,
    isValid: reportIsValid,
    hasError: reportHasError,
    inputChangeHandler: reportChangeHandler,
    inputBlurHandler: reportBlurHandler,
  } = useInput((input: string) => input.trim().length > 0, "");
  const [errorMessage, setErrorMessage] = useState("");
  const [modal, setModal] = useState(false);
  const param = useParams();
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (reportIsValid) {
      axios
        .post(
          `${baseUrl}game/report/`,
          {
            game: param.gameId,
            report_text: reportValue,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(function (response) {
          // console.log(response);
          setModal(true);
        })
        .catch(function (error) {
          // console.log(error);
        });
    } else setErrorMessage("Please enter your information first");
  };
  const navigate = useNavigate();
  const cancelModal = () => {
    setModal(false);
    navigate(`/games/${param.gameId}`);
  };

  // const cancleHandler = () => {
  //   setShowMessage(false)
  // }

  return (
    <Fragment>
      {modal && (
        <Modal
          cancel={cancelModal}
          children={
            <div className={style.modal}>
              <img src={X} alt="" className={style.x} onClick={cancelModal}/>
              <p className={style["modal-text"]}>
                <img src={tik} alt="" className={style.icon}/>
                Your report has been successfully submitted.
              </p>
              <p className={style["modal-text"]}>
                Thank you for taking the time to submit your report and help us
                improve GemTopia.
              </p>
              <p className={style["modal-text"]}>
                our experts will review the issue and work to fix the problem as
                soon as possible.
              </p>
            </div>
          }
        />
      )}
      <Header />
      <div className={style["page-container"]}>
        <div className={style["report-issue-container"]}>
          <div className={style["report-header-container"]}>
            <p className={style["header-title"]}>Report Issues</p>
            <p className={style["header-body"]}>
              Thanks for reporting any issues you've encountered while playing
              the game. Our experts will work to fix any problems as soon as
              possible.
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
                placeholder="Your report"
              ></textarea>
              {errorMessage && (
                <p className={style["error-message"]}>{errorMessage}</p>
              )}
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
    </Fragment>
  );
};

export default Report;

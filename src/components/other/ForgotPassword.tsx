import React, { useState, FormEvent, MouseEvent } from "react";
import styles from "./ForgotPassword.module.css";
import useInput from "../hooks/use-input";
import axios, * as others from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const ForgotPassword: React.FC<{ cancelForgot: Function }> = (props) => {
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  //////////////////////////////////////
  const {
    enteredValue: verificationValue,
    isValid: verificationIsValid,
    hasError: verificationHasError,
    inputChangeHandler: verificationChangeHandler,
    inputBlurHandler: verificationBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: newPassValue,
    isValid: newPassIsValid,
    hasError: newPassHasError,
    inputChangeHandler: newPassChangeHandler,
    inputBlurHandler: newPassBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: confirmPassValue,
    isValid: confirmPassIsValid,
    hasError: confirmPassHasError,
    inputChangeHandler: confirmPassChangeHandler,
    inputBlurHandler: confirmPassBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  ////////////////////////////////////////

  const showNewPassHandler = (event: MouseEvent) => {
    setShowNewPass((prevState) => !prevState);
  };
  const showConfirmPassHandler = (event: MouseEvent) => {
    setShowConfirmPass((prevState) => !prevState);
  };
  const cancelHandler = () => {
    props.cancelForgot();
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    console.log({ password: newPassValue, token: verificationValue });
    axios
      .post("http://localhost:8000/password_reset/confirm/", {
        password: newPassValue,
        token: verificationValue,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <form action="" className={styles["form"]} onSubmit={submitHandler}>
      <p className={styles["inform-text"]}>
        Please enter the verification code sent to your Email
      </p>
      <div className={styles["input-container"]}>
        <label htmlFor="verification">Verification code</label>
        <span
          className={
            verificationHasError ? styles["invalid-input"] : styles.input
          }
        >
          <input
            type="text"
            name="verification"
            onChange={verificationChangeHandler}
            onBlur={verificationBlurHandler}
            className={styles["inner-input"]}
          ></input>
        </span>
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="new-password">New password</label>
        <span
          className={newPassHasError ? styles["invalid-input"] : styles.input}
        >
          <input
            type={showNewPass ? "text" : "password"}
            name="new-password"
            onChange={newPassChangeHandler}
            onBlur={newPassBlurHandler}
            className={styles["inner-input"]}
          ></input>
          <FontAwesomeIcon
            icon={showNewPass ? faEyeSlash : faEye}
            className={styles.icon}
            onClick={showNewPassHandler}
          />
        </span>
      </div>
      <div className={styles["input-container"]}>
        <label htmlFor="confirm-password">Confirm password</label>
        <span
          className={
            confirmPassHasError ? styles["invalid-input"] : styles.input
          }
        >
          <input
            type={showConfirmPass ? "text" : "password"}
            name="confirm-password"
            onChange={confirmPassChangeHandler}
            onBlur={confirmPassBlurHandler}
            className={styles["inner-input"]}
          ></input>
          <FontAwesomeIcon
            icon={showConfirmPass ? faEyeSlash : faEye}
            className={styles.icon}
            onClick={showConfirmPassHandler}
          />
        </span>
      </div>
      <div className={styles.buttons}>
        <button className={styles["cancel-button"]} onClick={cancelHandler}>
          cancel change
        </button>
        <button type="submit">change password</button>
      </div>
    </form>
  );
};

export default ForgotPassword;

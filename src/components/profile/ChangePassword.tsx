import React, { useState, MouseEvent, FormEvent } from "react";
import styles from "./ChangePassword.module.css";
import useInput from "../hooks/use-input";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
const ChangePassword: React.FC<{ cancelChange: Function }> = (props) => {
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  //////////////////////////////////////
  const {
    enteredValue: oldPassValue,
    isValid: oldPassIsValid,
    hasError: oldPassHasError,
    inputChangeHandler: oldPassChangeHandler,
    inputBlurHandler: oldPassBlurHandler,
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
  const showOldPassHandler = (event: MouseEvent) => {
    setShowOldPass((prevState) => !prevState);
  };
  const showNewPassHandler = (event: MouseEvent) => {
    setShowNewPass((prevState) => !prevState);
  };
  const showConfirmPassHandler = (event: MouseEvent) => {
    setShowConfirmPass((prevState) => !prevState);
  };
  const cancelHandler = () => {
    props.cancelChange();
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
  };
  return (
    <form action="" className={styles["form"]} onSubmit={submitHandler}>
      <div className={styles["input-container"]}>
        <label htmlFor="old-password">Old password</label>
        <span
          className={oldPassHasError ? styles["invalid-input"] : styles.input}
        >
          <input
            type={showOldPass ? "text" : "password"}
            name="old-password"
            onChange={oldPassChangeHandler}
            onBlur={oldPassBlurHandler}
            className={styles["inner-input"]}
          ></input>
          <FontAwesomeIcon
            icon={showOldPass ? faEyeSlash : faEye}
            className={styles.icon}
            onClick={showOldPassHandler}
          />
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

export default ChangePassword;

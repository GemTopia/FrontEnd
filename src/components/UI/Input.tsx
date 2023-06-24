import React from "react";
import styles from "./Input.module.css"
import useInput from "../hooks/use-input";
const Input = () => {
  const {
    enteredValue: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput(() => {});
  return (
    <input
      type="email"
      name="email"
      placeholder="Email"
      onChange={emailChangeHandler}
      onBlur={emailBlurHandler}
      className={emailHasError ? styles["invalid-input"] : styles.input}
    />
  );
};

export default Input;

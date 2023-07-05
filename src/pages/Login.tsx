import React, { useState, FormEvent, MouseEvent, useRef } from "react";
import styles from "./Signup-Login.module.css";
import useInput from "../components/hooks/use-input";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios, * as others from 'axios';
/////////////////////////////////////////////////////////////////////////
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;
  const captchaRef = useRef(null);

  const {
    enteredValue: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,

    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((input: string) => input.trim().length > 7);
  const validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    enteredValue: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((input: string) => validEmail.test(input));
  const formIsValid = passwordIsValid && emailIsValid;
  /////////////////////////////////////////////////////////////////////////
  const showPassHandler = (event: MouseEvent) => {
    setShowPass((prevState) => !prevState);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      setErrorMessage("Please enter your information first");
    } else {
      axios
        .post("http://localhost:8000/users/login/", {
          email: emailValue,
          password: passwordValue,
        })
        .then(function (response) {
          console.log(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />

      <form action="" className={styles.form} onSubmit={submitHandler}>
        <h1>Sign In</h1>
        <p>Please fill the input below here</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={emailHasError ? styles["invalid-input"] : styles.input}
        />

        <div
          className={passwordHasError ? styles["invalid-input"] : styles.input}
        >
          <input
            type={showPass ? "text" : "password"}
            name="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            className={styles["inner-input"]}
          ></input>
          <FontAwesomeIcon
            icon={faEye}
            className={styles.icon}
            onClick={showPassHandler}
          />
        </div>
        <ReCAPTCHA
          className={styles.recaptcha}
          sitekey={SITE_KEY}
          ref={captchaRef}
        />
        <button type="submit" className={styles.button}>
          Login
        </button>

        {/* {requestIsLoading ? (
        <LoaderSpinner />
      ) : (
        <button type="submit" className={styles.button}>
          Create account
        </button>
      )} */}
        {errorMessage && (
          <p className={styles["error-message"]}>{errorMessage}</p>
        )}
        <span>
          already have an account?{" "}
          <Link to="/signup" className={styles["footer-link"]}>
            Signup
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Login;

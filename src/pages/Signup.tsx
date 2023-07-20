import React, {
  FormEvent,
  FormEventHandler,
  MouseEvent,
  useRef,
  useState,
} from "react";
import styles from "./Signup-Login.module.css";
import useInput from "../components/hooks/use-input";
import Axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import { Link, Navigate, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";

/////////////////////////////////////////////////////////////////////////
const Signup = () => {
  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;
  const [showPass, setShowPass] = useState(false);
  const captchaRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  //////////////////////////////////////////////////////////////////INPUTS
  const {
    enteredValue: usernameValue,
    isValid: usernameIsValid,
    hasError: usernameHasError,
    inputChangeHandler: usernameChangeHandler,
    inputBlurHandler: usernameBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");
  const {
    enteredValue: passwordValue,
    isValid: passwordIsValid,
    hasError: passwordHasError,

    inputChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
  } = useInput((input: string) => input.trim().length > 7, "");
  const validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const {
    enteredValue: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((input: string) => validEmail.test(input), "");
  const {
    enteredValue: referralValue,
    isValid: referralIsValid,
    inputChangeHandler: referralChangeHandler,
    inputBlurHandler: referralBlurHandler,
  } = useInput(() => {}, "");
  const formIsValid = usernameIsValid && passwordIsValid && emailIsValid;
  /////////////////////////////////////////////////////////////////////////
  const showPassHandler = (event: MouseEvent) => {
    setShowPass((prevState) => !prevState);
  };
  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    if (!formIsValid) {
      setErrorMessage("Please enter your information first");
    } else {
      console.log({
        user_name: usernameValue,
        email: emailValue,
        password: passwordValue,
        referrer_code: referralValue,
      });
      axios
        .post(`${baseUrl}users/register/`, {
          user_name: usernameValue,
          email: emailValue,
          password: passwordValue,
          referrer_code: referralValue,
        })
        .then(function (response) {
          navigate('/home')
          console.log(response);
        })
        .catch(function (error) {
          setErrorMessage(error.response.data.detail)
        });
    }
  };
  return (
    <div className={styles.container}>
      <img src={logo} alt="" className={styles.logo} />

      <form action="" className={styles.form} onSubmit={submitHandler}>
        <h1>Sign Up</h1>
        <p>Please fill the input below here</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={emailHasError ? styles["invalid-input"] : styles.input}
        />
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={usernameChangeHandler}
          onBlur={usernameBlurHandler}
          className={usernameHasError ? styles["invalid-input"] : styles.input}
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
            icon={showPass ? faEyeSlash : faEye}
            className={styles.icon}
            onClick={showPassHandler}
          />
        </div>

        <input
          type="referral"
          name="referral"
          placeholder="Referral code"
          onChange={referralChangeHandler}
          onBlur={referralBlurHandler}
          className={styles.input}
        />

        <ReCAPTCHA
          className={styles.recaptcha}
          sitekey={SITE_KEY}
          ref={captchaRef}
        />

        <button type="submit" className={styles.button}>
          Create account
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
          <Link to="/login" className={styles["footer-link"]}>
            login
          </Link>
        </span>
      </form>
    </div>
  );
};

export default Signup;

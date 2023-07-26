import React, { useState, FormEvent, MouseEvent, useRef } from "react";
import styles from "./Signup-Login.module.css";
import useInput from "../components/hooks/use-input";
import logo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import axios, * as others from "axios";
import ForgotPassword from "../components/other/ForgotPassword";
import { baseUrl } from "../shares/shared";
/////////////////////////////////////////////////////////////////////////
const Login = () => {
  const [showPass, setShowPass] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [pageState, setPageState] = useState("ligin");
  const [valid_token, setValidToken] = useState([]);
  const SITE_KEY = process.env.REACT_APP_reCAPTCHA_SITE_KEY;
  // const SECRET_KEY = process.env.REACT_APP_reCAPTCHA_SECRET_KEY;
  const captchaRef: any = useRef(null);
  const navigate = useNavigate();
  //////////////////////////////////////////////////////////////////////

  // const handleSubmit = async (event: any) => {};
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
  const formIsValid = passwordIsValid && emailIsValid;
  /////////////////////////////////////////////////////////////////////////
  const showPassHandler = (event: MouseEvent) => {
    setShowPass((prevState) => !prevState);
  };
  const forgotPassHandler = (event: MouseEvent) => {
    event.preventDefault();
    if (!emailIsValid) {
      setErrorMessage("Please enter your email");
    } else {
      setErrorMessage("");
      setPageState("forgot");

      axios
        .post(`${baseUrl}password_reset/`, { email: emailValue })
        .then(function (response) {
          // console.log(response);
        })
        .catch(function (error) {
          setErrorMessage('This email is not registered')
          // console.log(error);
        });
    }
  };
  const cancelForgotHandler = () => {
    setPageState("login");
  };

  // const verifyToken = async (token: any) => {
  //   let APIResponse = [];

  //   try {
  //     let response = await axios.post(`http://localhost:8000/verify-token`, {
  //       reCAPTCHA_TOKEN: token,
  //       Secret_Key: SECRET_KEY,
  //     });

  //     APIResponse.push(response["data"]);
  //     return APIResponse;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  const submitHandler = async (event: FormEvent) => {
    event.preventDefault();
    let token: any = captchaRef.current.getValue();
    captchaRef.current.reset();
    // console.log(token);
    if (token) {
      // let valid_token: any = await verifyToken(token);
      setValidToken(valid_token);

      // if (valid_token[0].success === true) {
      //   console.log("verified");
      // } else {
      //   console.log("not verified");
      //   setErrorMessage(" Sorry!! Verify you are not a bot");
      // }
    }
    if (!formIsValid) {
      setErrorMessage("Please enter your information first");
    } else {
      axios
        .post(`${baseUrl}users/login/`, {
          email: emailValue,
          password: passwordValue,
          recaptcha_response: token,
          // Secret_Key: SECRET_KEY,
        })
        .then(function (response) {
          // console.log(response.data);
          const refresh = response.data.refresh;
          const token = response.data.access;
          localStorage.setItem("token", token);
          localStorage.setItem("refresh", refresh);
          navigate("/home");
        })
        .catch(function (error) {
          // console.log(error.response.data[0]);
          if (error.response)
            setErrorMessage(
              error.response.data[0] ||
                error.response.data.detail ||
                error.response.data.email ||
                error.response.data.password
            );
          else setErrorMessage("Something went wrong please try again");
          // setErrorMessage("Your email or your password is wrong");
        });
    }
  };
  return (
    <div className={styles.container}>
      <Link to="/" className={styles.link}>
        <img src={logo} alt="" className={styles.logo} />
      </Link>
      <div className={styles["right-side-pic"]}></div>
      <div className={styles["left-side-pic"]}></div>
      {pageState === "forgot" ? (
        <ForgotPassword cancelForgot={cancelForgotHandler} />
      ) : (
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
            className={
              passwordHasError ? styles["invalid-input"] : styles.input
            }
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
          <button
            type="button"
            className={styles["forgot-password"]}
            onClick={forgotPassHandler}
          >
            Forgot your password?
          </button>
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
            Don't hava an account?{" "}
            <Link to="/signup" className={styles["footer-link"]}>
              Sign up
            </Link>
          </span>
        </form>
      )}
    </div>
  );
};

export default Login;

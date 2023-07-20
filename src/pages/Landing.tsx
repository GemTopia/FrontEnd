import { useState } from "react";
import style from "./Landing.module.css";
import useInput from "../components/hooks/use-input";

const Landing = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let price : {priceAmount : string , changes : number} = {
    priceAmount : "0.0060",
    changes : -0.92
  }

  let volume : {priceAmount : string , changes : number} = {
    priceAmount : "0.0060",
    changes : 0.92
  }

  let marketCap : {priceAmount : string , changes : number} = {
    priceAmount : "0.0060",
    changes : -0.92
  }

  const validEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


  const {
    enteredValue: emailValue,
    isValid: emailIsValid,
    hasError: emailHasError,
    inputChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((input: string) => validEmail.test(input), "");



  return (
    <div className={style.container}>
      <div className={style["intro-container"]}>
        <div className={style["intro-content"]}>
          <h1>Welcome to GemTopia</h1>
          <p className={style.description}>Play various games here</p>
          <p className={style.description}>
            Compete with others and get tokens.
          </p>
          <div className={style["second-description-container"]}>
            <p className={style["second-description"]}>
              <span className={style["blue-txt"]}>Fun</span> and{" "}
              <span className={style["blue-txt"]}>earning</span> both together{" "}
            </p>
            <img src={require("../assets/stareye.png")} />
          </div>
          <button className={style["learn-more-button"]}>learn more</button>
        </div>
      </div>
      <div className={style["token-description-container"]}>
        <div className={style["gemyto-description-container"]}>
          <div className={style.title}>
            <h2>Gemyto</h2>
          </div>
          <p className={style["gemyto-description"]}>
            Gemyto is a token with which you will earn, Invest in it or
            participate in competitions and win money. We hope to increase the
            value of our tokens together.
          </p>
          <p className={style["buy-guidance-title"]}>Where you can buy </p>
          <div className={style["buying-guidance-container"]}>
            <div className={style["buying-platform-container"]}>
              <p>ETHEREUM</p>
              <img
                src={require("../assets/uniswap.png")}
                alt="uniswap"
                className={style.uniswap}
              />
            </div>
            <div className={style["buying-platform-container"]}>
              <p>POLYGON</p>
              <img src={require("../assets/quickswap.png")} alt="quickswap" />
            </div>
          </div>
          <div className={style["buying-guidance-container"]}>
            <div className={style["buying-platform-container"]}>
              <p>ETHEREUM</p>
              <img
                src={require("../assets/pancakeswap.png")}
                alt="pancakeswap"
              />
            </div>
            <div className={style["buying-platform-container"]}>
              <p>ETHEREUM</p>
              <img src={require("../assets/apeswap.png")} className={style["apeswap-img"]} />
            </div>
          </div>
        </div>
        <div className={style["gemyto-info"]}>
          <div className={style["gemyto-info-title"]}>
            <p>Gemyto</p>
            <img src={require("../assets/gemyto2.png")} />
          </div>
          <div className={style["contract-address-container"]}>
            <img
              src={require("../assets/ethereum.png")}
              alt="ethereum"
              className={style.ethereum}
            />
            <span>0x728f30fa2f10074261804fa8e0b1387d</span>
            <img
              src={require(`../assets/${
                isHovered ? "hovered copy.png" : "copy.png"
              }`)}
              alt="copy icon"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className={style["copy-icon"]}
            />
          </div>
          <div className={style["prices-container"]}>
            <div className={style["price-item"]}>
                <p className={style["price-item-title"]}>PRICE(24h)</p>
                <p className={style["price-amount"]}>${price.priceAmount}</p>
                <div className={style["price-change-container"]}>
                    <p className={`${price.changes <= 0 ? style["red-text"] : style["green-text"]}`}>{Math.abs(price.changes)}</p>
                    <img src={require(`../assets/${price.changes <= 0 ? "arrow down.png" : "arrow up.png"}`)} />
                </div>
            </div>
            <div className={style["price-item"]}>
                <p className={style["price-item-title"]}>Volume(24h)</p>
                <p className={style["price-amount"]}>${volume.priceAmount}</p>
                <div className={style["price-change-container"]}>
                    <p className={`${volume.changes <= 0 ? style["red-text"] : style["green-text"]}`}>{Math.abs(volume.changes)}</p>
                    <img src={require(`../assets/${volume.changes <= 0 ? "arrow down.png" : "arrow up.png"}`)} />
                </div>
            </div>
            <div className={style["price-item"]}>
                <p className={style["price-item-title"]}>Market Cap(24h)</p>
                <p className={style["price-amount"]}>${marketCap.priceAmount}</p>
                <div className={style["price-change-container"]}>
                    <p className={`${marketCap.changes <= 0 ? style["red-text"] : style["green-text"]}`}>{Math.abs(marketCap.changes)}</p>
                    <img src={require(`../assets/${marketCap.changes <= 0 ? "arrow down.png" : "arrow up.png"}`)} />
                </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style["subscribe-container"]}>
        <p>Be The First To Know </p>
        <form className={style["input-container"]}>
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          className={emailHasError ? style["invalid-input"] : style.input}
        />
        <button className={style["subscribe-button"]}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Landing;

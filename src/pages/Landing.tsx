import React, { useState, useEffect } from "react";
import style from "./Landing.module.css";
import GameItem from "../models/GamesPageItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import useInput from "../components/hooks/use-input";
import Footer from "../components/layout/Footer";
const Landing = () => {
  let dummy: GameItem[] = [
    {
      cover_image: "Rectangle 8.png",
      logo_image: "Rectangle 846.png",
      name: "subway surfers1",
      game_type: "category1",
      num_of_like: 5278,
      rank: "1",
      id: 0,
      created_at: "2022-03-25",
    },
    {
      cover_image: "Rectangle 8.png",
      logo_image: "Rectangle 846.png",
      name: "subway surfers1",
      game_type: "category1",
      num_of_like: 5279,
      rank: "2",
      id: 1,
      created_at: "2022-03-26",
    },
    {
      cover_image: "Rectangle 8.png",
      logo_image: "Rectangle 846.png",
      name: "subway surfers1",
      game_type: "category1",
      num_of_like: 5277,
      rank: "3",
      id: 2,
      created_at: "2022-03-28",
    },
  ];

  const [dropdownIsOpen1, setDropdownIsOpen1] = useState<boolean>(false);
  const [dropdownIsOpen2, setDropdownIsOpen2] = useState<boolean>(false);
  const [dropdownIsOpen3, setDropdownIsOpen3] = useState<boolean>(false);
  const [dropdownIsOpen4, setDropdownIsOpen4] = useState<boolean>(false);
  const dropdownClickHandler1 = () => {
    setDropdownIsOpen1((current) => !current);
  };
  const dropdownClickHandler2 = () => {
    setDropdownIsOpen2((current) => !current);
  };
  const dropdownClickHandler3 = () => {
    setDropdownIsOpen3((current) => !current);
  };
  const dropdownClickHandler4 = () => {
    setDropdownIsOpen4((current) => !current);
  };
  const now = new Date();
  const greenwichHours = now.getUTCHours();
  const greenwichMinutes = now.getUTCMinutes();
  const greenwichSeconds = now.getUTCSeconds();
  const [seconds, setSeconds] = useState<number>(
    3600 * greenwichHours + 60 * greenwichMinutes + greenwichSeconds
  );
  useEffect(() => {
    const interval = setInterval(() => {
      //code inside here will run every second
      setSeconds((current) => (current + 1) % 86400);

      // console.log('working')
    }, 1000); //change the 1000 to however many miliseconds you want between execution
    return () => clearInterval(interval);
  }, []);

  const [IsLiked, setIsLiked] = useState<boolean[]>([false, false, false]);
  const likeClickHandler = (event: any) => {
    setIsLiked((firstState: boolean[]) => {
      let secondState = [...firstState];
      secondState[+event.target.id] = !secondState[+event.target.id];
      return secondState;
    });
  };
  const [chosenGame, setChosenGame] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      //code inside here will run every second
      setChosenGame((current) => (current + 1) % 3);
      // console.log('working')
    }, 3000); //change the 1000 to however many miliseconds you want between execution
    return () => clearInterval(interval);
  }, []);
  const gameClickHandler = (event: any) => {
    setChosenGame(+event.target.id);
  };

  const [isHovered, setIsHovered] = useState<boolean>(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  let price: { priceAmount: string; changes: number } = {
    priceAmount: "0.0060",
    changes: -0.92,
  };

  let volume: { priceAmount: string; changes: number } = {
    priceAmount: "0.0060",
    changes: 0.92,
  };

  let marketCap: { priceAmount: string; changes: number } = {
    priceAmount: "0.0060",
    changes: -0.92,
  };

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

      <div className={style["game-switch-container"]}>
        <div
          className={`${
            chosenGame == 0 && style["first-big-game-background-image"]
          } ${chosenGame == 1 && style["second-big-game-background-image"]} ${
            chosenGame == 2 && style["third-big-game-background-image"]
          }`}
        >
          <div className={`${style["bottom-blur-background"]}`}>
            <div className={style["game-info-container"]}>
              <div className={style["game-text-info-container"]}>
                <p>{dummy[chosenGame].name}</p>
                <p className={style["game-category"]}>
                  {dummy[chosenGame].game_type}
                </p>
                <p className={style.rank}>#{dummy[chosenGame].rank}</p>
              </div>
              <div className={style["likes-container"]}>
                <img
                  src={require(`../assets/${
                    IsLiked[chosenGame] ? "liked-icon.png" : "unliked-icon.png"
                  }`)}
                  alt="like icon"
                  id={String(chosenGame)}
                  onClick={likeClickHandler}
                />
                <p className={style["game-likes-count"]}>
                  {" "}
                  {String(dummy[chosenGame].num_of_like)}{" "}
                </p>
              </div>
              <button className={style["play-now-button"]}>learn more</button>
            </div>
          </div>
        </div>
        <div className={style["small-size-games-container"]}>
          <div className={`${style["first-small-game-background-image"]} `}>
            <div
              className={`${
                chosenGame != 0 && style["fully-blur-background-color"]
              } ${chosenGame == 0 && style["bottom-blur-background"]}`}
              id="0"
              onClick={gameClickHandler}
            ></div>
          </div>
          <div className={`${style["second-small-game-background-image"]}`}>
            <div
              className={`${
                chosenGame != 1 && style["fully-blur-background-color"]
              } ${chosenGame == 1 && style["bottom-blur-background"]}`}
              id="1"
              onClick={gameClickHandler}
            ></div>
          </div>
          <div className={`${style["third-small-game-background-image"]}`}>
            <div
              className={`${
                chosenGame != 2 && style["fully-blur-background-color"]
              } ${chosenGame == 2 && style["bottom-blur-background"]}`}
              id="2"
              onClick={gameClickHandler}
            ></div>
          </div>
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
              <img
                src={require("../assets/apeswap.png")}
                className={style["apeswap-img"]}
              />
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
                <p
                  className={`${
                    price.changes <= 0 ? style["red-text"] : style["green-text"]
                  }`}
                >
                  {Math.abs(price.changes)}
                </p>
                <img
                  src={require(`../assets/${
                    price.changes <= 0 ? "arrow down.png" : "arrow up.png"
                  }`)}
                />
              </div>
            </div>
            <div className={style["price-item"]}>
              <p className={style["price-item-title"]}>Volume(24h)</p>
              <p className={style["price-amount"]}>${volume.priceAmount}</p>
              <div className={style["price-change-container"]}>
                <p
                  className={`${
                    volume.changes <= 0
                      ? style["red-text"]
                      : style["green-text"]
                  }`}
                >
                  {Math.abs(volume.changes)}
                </p>
                <img
                  src={require(`../assets/${
                    volume.changes <= 0 ? "arrow down.png" : "arrow up.png"
                  }`)}
                />
              </div>
            </div>
            <div className={style["price-item"]}>
              <p className={style["price-item-title"]}>Market Cap(24h)</p>
              <p className={style["price-amount"]}>${marketCap.priceAmount}</p>
              <div className={style["price-change-container"]}>
                <p
                  className={`${
                    marketCap.changes <= 0
                      ? style["red-text"]
                      : style["green-text"]
                  }`}
                >
                  {Math.abs(marketCap.changes)}
                </p>
                <img
                  src={require(`../assets/${
                    marketCap.changes <= 0 ? "arrow down.png" : "arrow up.png"
                  }`)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={style["clock-and-description-container"]}>
        <div className={style["clock-container"]}>
          {Math.floor(seconds / 3600).toString().padStart(2,'0') +
            ":" +
            Math.floor((seconds - 3600 * Math.floor(seconds / 3600)) / 60).toString().padStart(2,'0') +
            ":" +
            (seconds -
              3600 * Math.floor(seconds / 3600) -
              60 *
                Math.floor((seconds - 3600 * Math.floor(seconds / 3600)) / 60)).toString().padStart(2,'0')}
        </div>
        <p className={style["clock-description"]}>
          You have the opportunity to earn tokens by actively participating in
          games and steadily improving your ranking among fellow players. <br /> <br />Strive
          to maintain your position at the top of the leaderboard until the
          day's end, and you'll be rewarded with tokens as a sign of your skill
          and dedication. <br /> <br />Engage in gameplay, showcase your talent, and seize
          the chance to earn even more rewards as you climb higher in the
          rankings. <br /><br />So, embrace the challenge, compete with determination, and
          let your success in the games be the key to unlocking a plethora of
          tokens.
        </p>
      </div>
      <img src={require("../assets/Road map.png")} className={style.roadmap} />

      <div className={style["faq-container"]}>
        <h3 className={style["faq-title"]}>FAQ</h3>
        <div className={style["faq-item"]}>
          <div className={style["faq-item-header"]}>
            <p>1.What is GemTopia?</p>
            <FontAwesomeIcon
              icon={dropdownIsOpen1 ? faAngleUp : faAngleDown}
              onClick={dropdownClickHandler1}
            />
          </div>
          {dropdownIsOpen1 && (
            <p className={style["faq-answer"]}>
              A site full of games with the ability to earn money for users and
              great ideas for the future.
            </p>
          )}
        </div>
        <div className={style["faq-item"]}>
          <div className={style["faq-item-header"]}>
            <p>2.How to earn money on this site?</p>
            <FontAwesomeIcon
              icon={dropdownIsOpen2 ? faAngleUp : faAngleDown}
              onClick={dropdownClickHandler2}
            />
          </div>
          {dropdownIsOpen2 && (
            <p className={style["faq-answer"]}>
              It is easy. You play and try to win the four stages in each game.
              In addition, you have to be among the top players in each game.
              After the day is over, you will receive your tokens.
            </p>
          )}
        </div>
        <div className={style["faq-item"]}>
          <div className={style["faq-item-header"]}>
            <p>3.What is GemTopia?</p>
            <FontAwesomeIcon
              icon={dropdownIsOpen3 ? faAngleUp : faAngleDown}
              onClick={dropdownClickHandler3}
            />
          </div>
          {dropdownIsOpen3 && (
            <p className={style["faq-answer"]}>
              You can directly buy our token from the above exchanges and invest
              on it. We hope you have a profitable investment.
            </p>
          )}
        </div>
        <div className={style["faq-item"]}>
          <div className={style["faq-item-header"]}>
            <p>4.What are the exact four stages that exist in every game?</p>
            <FontAwesomeIcon
              icon={dropdownIsOpen4 ? faAngleUp : faAngleDown}
              onClick={dropdownClickHandler4}
            />
          </div>
          {dropdownIsOpen4 && (
            <p className={style["faq-answer"]}>
              In each game, specific scores are determined, which are divided
              into four stages.When you can obtain the score of each stage in
              the desired game, tokens for that stage will be awarded to you. At
              the end of the day, if you are among the top players of each game,
              the number of these top players depends on your game rank, you can
              view your earned tokens on your financial page, which have been
              added to the total number of your previous tokens. You need to
              first install and have the MetaMask wallet.Then, you should reach
              a suitable amount of Gemyto to be eligible for withdrawal.
              Afterwards, you can go to the financial section of your profile
              page and withdraw your Gemytos. It's as simple as that.
            </p>
          )}
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
      <Footer/>
    </div>
  );
};

export default Landing;

{
  /* <div className={style["games-scroll-container"]}>
          <div
            className={`${
              positions[0].position == 0 && style["first-game-background-image"]
            } ${
              positions[0].position == 1 &&
              style["second-game-background-image"]
            } ${
              positions[0].position == 2 && style["third-game-background-image"]
            }`}
          >
            <div className={style["blur-backgroung-color"]}></div>
          </div>
          <div
            className={`${
              positions[1].position == 0 && style["first-game-background-image"]
            } ${
              positions[1].position == 1 &&
              style["second-game-background-image"]
            } ${
              positions[1].position == 2 && style["third-game-background-image"]
            }`}
          >
            <div
              className={`${
                positions[1].position == 1 && style["second-game-container"]
              } ${style["blur-backgroung-color"]}`}
            />
          </div>
          <div
            className={`${
              positions[2].position == 0 && style["first-game-background-image"]
            } ${
              positions[2].position == 1 &&
              style["second-game-background-image"]
            } ${
              positions[2].position == 2 && style["third-game-background-image"]
            }`}
          >
            <div className={style["blur-backgroung-color"]} />
          </div>
          <span onClick={scrollHandler}>
            <FontAwesomeIcon
              icon={faAngleRight}
              className={style["scroll-icon"]}
            />
          </span>
        </div> */
}

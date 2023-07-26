import React, { useState, useEffect, Fragment, FormEvent } from "react";
import style from "./Landing.module.css";
import GameItem from "../models/GameItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import useInput from "../components/hooks/use-input";
import Footer from "../components/layout/Footer";
import Clock from "../components/other/Clock";
import Header from "../components/layout/Header";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import { Link, useNavigate } from "react-router-dom";
import Chart from "../components/other/Chart";
import Roadmap from "../components/other/Roadmap";
const Landing = () => {
  // let dummy: GameItem[] = [
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers1",
  //     game_type: "category1",
  //     num_of_like: 5278,
  //     // rank: "1",
  //     id: 0,
  //     created_at: "2022-03-25",
  //     is_liked_by_user: true,
  //     game_pictures: [],
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     link: "",
  //     bio: "",
  //     scores: 0,
  //   },
  // ]
  const [sliderGames, setSliderGames] = useState<GameItem[]>();
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

  // const copyHandler = () => {
  //   window.navigator.clipboard.writeText("0x728f30fa2f10074261804fa8e0b1387d");
  // };

  const [tokenData, setTokenData] = useState<any[]>();
  const [chosenGame, setChosenGame] = useState<number>(0);
  useEffect(() => {
    axios
      .get(`${baseUrl}`)
      .then(function (response) {
        const usd: any = response.data.token.token_value.MANA.USD;
        setTokenData([
          usd.CHANGE24HOUR,
          usd.PRICE,
          usd.VOLUME24HOUR,
          usd.MKTCAP,
        ]);
        setSliderGames(response.data.top_3_games);
        // console.log(tokenData);
        // console.log("http://api.gem.kveh.ir" + response.data.top_3_games[0].cover_image)
      })
      .catch(function (error) {
        // console.log(error);
      });

    const interval = setInterval(() => {
      //code inside here will run every second
      setChosenGame((current) => (current + 1) % 3);
      // console.log('working')
    }, 5000); //change the 1000 to however many miliseconds you want between execution
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
  const navigate = useNavigate();
  const playNowHandler = () => {
    if (localStorage.getItem("token")) navigate("/games");
    else navigate("/signup");
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
  const [thankYou, setThankYou] = useState("");
  const subscribeHandler = (event: FormEvent) => {
    event.preventDefault();
    axios
      .post(baseUrl, { email: emailValue })
      .then(function (response) {
        setThankYou("Thank you for your subscription");
        setTimeout(() => {
          setThankYou("");
        }, 3000);
      })
      .catch(function (error) {
        setThankYou("You have registered before!");
        setTimeout(() => {
          setThankYou("");
        }, 3000);
      });
  };
  return (
    <Fragment>
      <Header />
      <div className={style.container}>
        <div className={style["fading-background"]}></div>
        <div className={style["fading-background-2"]}></div>

        <div className={style["intro-container"]}>
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
          <Link to="/learn-more" className={style.link}>
            <button className={style["learn-more-button"]}>Learn more</button>
          </Link>
        </div>

        {sliderGames && (
          <div className={style["game-switch-container"]}>
            <div
              className={`${
                chosenGame === 0 && style["first-big-game-background-image"]
              } ${
                chosenGame === 1 && style["second-big-game-background-image"]
              } ${
                chosenGame === 2 && style["third-big-game-background-image"]
              }`}
              style={{
                backgroundImage:
                  "http://api.gem.kveh.ir" + sliderGames[0].cover_image,
              }}
              //   chosenGame === 0
              //     ? {
              //         backgroundImage:
              //           "http://api.gem.kveh.ir" + sliderGames[0].cover_image,
              //       }
              //     : chosenGame === 1
              //     ? {
              //         backgroundImage:
              //           "http://api.gem.kveh.ir" + sliderGames[1].cover_image,
              //       }
              //     : {
              //         backgroundImage:
              //           "http://api.gem.kveh.ir" + sliderGames[2].cover_image,
              //       }
              // }
            >
              <img
                src={baseUrl + sliderGames[chosenGame].cover_image}
                alt=""
                className={style["main-slider"]}
              />
              <div className={`${style["bottom-blur-background"]}`}>
                <div className={style["game-info-container"]}>
                  <div className={style["game-text-info-container"]}>
                    <p>{sliderGames[chosenGame].name}</p>
                    <p className={style["game-category"]}>
                      {sliderGames[chosenGame].game_type}
                    </p>
                    <p className={style.rank}>#{sliderGames[chosenGame].id}</p>
                  </div>
                  {/* <div className={style["likes-container"]}>
                  <img
                    src={require(`../assets/${
                      IsLiked[chosenGame]
                        ? "liked-icon.png"
                        : "unliked-icon.png"
                    }`)}
                    alt="like icon"
                    id={String(chosenGame)}
                    onClick={likeClickHandler}
                  />
                  <p className={style["game-likes-count"]}>
                    {" "}
                    {String(sliderGames[chosenGame].num_of_like)}{" "}
                  </p>
                </div> */}
                  {/* <Link to={"/signup"} className={style.link}> */}
                  {/* <button
                    className={style["play-now-button"]}
                    onClick={playNowHandler}
                  >
                    Play now
                  </button> */}
                  {/* </Link> */}
                </div>
              </div>
            </div>
            <div className={style["small-size-games-container"]}>
              <div className={`${style["first-small-game-background-image"]} `}>
                <img
                  src={baseUrl + sliderGames[0].cover_image}
                  alt=""
                  className={style["slider"]}
                />{" "}
                <div
                  className={`${
                    chosenGame !== 0 && style["fully-blur-background-color"]
                  } ${chosenGame === 0 && style["bottom-blur-background"]}`}
                  id="0"
                  onClick={gameClickHandler}
                ></div>
              </div>
              <div className={`${style["second-small-game-background-image"]}`}>
                <img
                  src={baseUrl + sliderGames[1].cover_image}
                  alt=""
                  className={style["slider"]}
                />
                <div
                  className={`${
                    chosenGame !== 1 && style["fully-blur-background-color"]
                  } ${chosenGame === 1 && style["bottom-blur-background"]}`}
                  id="1"
                  onClick={gameClickHandler}
                ></div>
              </div>
              <div className={`${style["third-small-game-background-image"]}`}>
                <img
                  src={baseUrl + sliderGames[2].cover_image}
                  alt=""
                  className={style["slider"]}
                />
                <div
                  className={`${
                    chosenGame !== 2 && style["fully-blur-background-color"]
                  } ${chosenGame === 2 && style["bottom-blur-background"]}`}
                  id="2"
                  onClick={gameClickHandler}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div className={style["token-description-container"]}>
          <div className={style["gemyto-description-container"]}>
            <h2 className={style.title}>Gemyto</h2>
            <p className={style["gemyto-description"]}>
              Gemyto is a token with which you will earn, Invest in it or
              participate in competitions and win money. We hope to increase the
              value of our tokens together.
            </p>
            <p className={style["buy-guidance-title"]}>Where you can buy </p>
            <div className={style["buying-guidance-container"]}>
              <div className={style["buying-platform-container"]}>
                <p>ETHEREUM</p>
                <a href="https://uniswap.org/" target="blank">
                  <img
                    src={require("../assets/uniswap.png")}
                    alt="uniswap"
                    className={style.uniswap}
                  />
                </a>
              </div>
              <div className={style["buying-platform-container"]}>
                <p>POLYGON</p>
                <a href="https://quickswap.exchange/" target="blank">
                  <img
                    src={require("../assets/quickswap.png")}
                    alt="quickswap"
                  />
                </a>
              </div>
            </div>
            <div className={style["buying-guidance-container"]}>
              <div className={style["buying-platform-container"]}>
                <p>ETHEREUM</p>{" "}
                <a href="https://pancakeswap.finance/" target="blank">
                  <img
                    src={require("../assets/pancakeswap.png")}
                    alt="pancakeswap"
                  />
                </a>
              </div>
              <div className={style["buying-platform-container"]}>
                <p>ETHEREUM</p>{" "}
                <a href="https://apeswap.finance/" target="blank">
                  <img
                    src={require("../assets/apeswap.png")}
                    className={style["apeswap-img"]}
                  />
                </a>
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
              <span>0x09126279272F568515111d5796368Dfc85A1Dd7C</span>
              {/* <img
                onClick={copyHandler}
                src={require(`../assets/${
                  isHovered ? "hovered copy.png" : "copy.png"
                }`)}
                alt="copy icon"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                className={style["copy-icon"]}
              /> */}
            </div>
            <div className={style["prices-container"]}>
              <div className={style["price-item"]}>
                <p className={style["price-item-title"]}>PRICE(24h)</p>
                <p className={style["price-amount"]}>
                  {tokenData && tokenData[1]}
                </p>
                {tokenData && Number(tokenData[0].slice(1)) !== 0 && (
                  <div className={style["price-change-container"]}>
                    <p
                      className={`${
                        tokenData && Number(tokenData[0].slice(1)) <= 0
                          ? style["red-text"]
                          : style["green-text"]
                      }`}
                    >
                      {tokenData && Math.abs(Number(tokenData[0].slice(1)))}
                    </p>
                    <img
                      src={require(`../assets/${
                        tokenData && Number(tokenData[0].slice(1)) <= 0
                          ? "arrow down.png"
                          : "arrow up.png"
                      }`)}
                    />
                  </div>
                )}
              </div>
              <div className={style["price-item"]}>
                <p className={style["price-item-title"]}>Volume(24h)</p>
                <p className={style["price-amount"]}>
                  {tokenData && tokenData[2].slice(4)}
                </p>
                {/* <div className={style["price-change-container"]}>
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
                </div> */}
              </div>
              <div className={style["price-item"]}>
                <p className={style["price-item-title"]}>Market Cap(24h)</p>
                <p className={style["price-amount"]}>
                  {tokenData && tokenData[3]}
                </p>
                {/* <div className={style["price-change-container"]}>
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
                </div> */}
              </div>
            </div>
          </div>
        </div>

        <div className={style.tokenomics}>
          <h3 className={style["tokenomics-title"]}>Tokenomics</h3>
          <div className={style.chart}>
            <p>
              We have a total of 560,000,000 tokens, which have been minted only
              once. This total amount is divided into different sections to meet
              the needs of users, the market, and our project collaborators. The
              distribution of our tokens is as follows:
            </p>
            <Chart />
          </div>
        </div>

        <div className={style["clock-and-description-container"]}>
          <Clock className={style["clock-container"]} />
          <p className={style["clock-description"]}>
            You have the opportunity to earn tokens by actively participating in
            games and steadily improving your ranking among fellow players.{" "}
            <br /> <br />
            Strive to maintain your position at the top of the leaderboard until
            the day's end, and you'll be rewarded with tokens as a sign of your
            skill and dedication. <br /> <br />
            Engage in gameplay, showcase your talent, and seize the chance to
            earn even more rewards as you climb higher in the rankings. <br />
            <br />
            So, embrace the challenge, compete with determination, and let your
            success in the games be the key to unlocking a plethora of tokens.
          </p>
        </div>

        {/* <div className={style["roadmap-container"]}>
          <h2>Roadmap</h2>
          <img
            src={require("../assets/roadmap.png")}
            className={style["roadmap-pic"]}
          />
          <div className={style["roadmap-descriptions-container"]}>
            <div className={style["description-container"]}>
              <p>
                1. At this stage, it’s only possible to gain income through
                gamers. <br /> <br />
                2. Gamers will earn tokens as income by playing default site
                games. <br /> <br />
                3. It will be practical to receive the award through air drop
                after the project has been published.
              </p>
            </div>
            <div className={style["description-container"]}>
              <p>
                1. It includes all the features of the first version <br />
                <br />
                2. The game developers can earn tokens by uploading games.{" "}
                <br /> <br />
                3. game developer can also withdraw tokens <br /> <br />
                4. Developers receive tokens based on the ranking of the games
                they upload <br /> <br />
                5. Users get tokens as rewards.
              </p>
            </div>
            <div className={style["description-container"]}>
              <p>
                1. We can deposit tokens. <br /> <br />
                2. There is the possibility of buying or unlocking some stages
                of the game. <br />
                <br />
                3. Users have the ability to buy and sell NFTs. <br />
                <br />
                4. You have the option to buy some features or NFTs from the
                site or directly from our company.
              </p>
            </div>
          </div>
        </div> */}

        <div className={style["roadmap-container"]}>
          <h2 id="roadmap">Roadmap</h2>
          <div className={style.roadmap}>
            <Roadmap />
          </div>
        </div>

        <div className={style["faq-container"]} id="faq">
          <h3 className={style["faq-title"]}>FAQ</h3>
          <div className={style["faq-item"]} onClick={dropdownClickHandler1}>
            <div className={style["faq-item-header"]}>
              <p>1. What is GemTopia?</p>
              <FontAwesomeIcon
                icon={dropdownIsOpen1 ? faAngleUp : faAngleDown}
              />
            </div>
            {dropdownIsOpen1 && (
              <p className={style["faq-answer"]}>
                A site full of games with the ability to earn money for users
                and great ideas for the future.
              </p>
            )}
          </div>
          <div className={style["faq-item"]} onClick={dropdownClickHandler2}>
            <div className={style["faq-item-header"]}>
              <p>2. How to earn money on this site?</p>
              <FontAwesomeIcon
                icon={dropdownIsOpen2 ? faAngleUp : faAngleDown}
              />
            </div>
            {dropdownIsOpen2 && (
              <p className={style["faq-answer"]}>
                It is easy. You play and try to win the four stages in each
                game. In addition, you have to be among the top players in each
                game. After the day is over, you will receive your tokens.
              </p>
            )}
          </div>
          <div className={style["faq-item"]} onClick={dropdownClickHandler3}>
            <div className={style["faq-item-header"]}>
              <p>3. Where can I get Gemyto?</p>
              <FontAwesomeIcon
                icon={dropdownIsOpen3 ? faAngleUp : faAngleDown}
              />
            </div>
            {dropdownIsOpen3 && (
              <p className={style["faq-answer"]}>
                You can directly buy our token from the above exchanges and
                invest on it. We hope you have a profitable investment.
              </p>
            )}
          </div>
          <div className={style["faq-item"]} onClick={dropdownClickHandler4}>
            <div className={style["faq-item-header"]}>
              <p>4. What are the exact four stages that exist in every game?</p>
              <FontAwesomeIcon
                icon={dropdownIsOpen4 ? faAngleUp : faAngleDown}
              />
            </div>
            {dropdownIsOpen4 && (
              <p className={style["faq-answer"]}>
                In each game, specific scores are determined, which are divided
                into four stages.When you can obtain the score of each stage in
                the desired game, tokens for that stage will be awarded to you.{" "}
                <br /> <br />
                At the end of the day, if you are among the top players of each
                game, the number of these top players depends on your game rank,
                you can view your earned tokens on your financial page, which
                have been added to the total number of your previous tokens.{" "}
                <br /> <br /> You need to first install and have the MetaMask
                wallet.Then, you should reach a suitable amount of Gemyto to be
                eligible for withdrawal. Afterwards, you can go to the financial
                section of your profile page and withdraw your Gemytos. It's as
                simple as that.
              </p>
            )}
          </div>
        </div>

        <div className={style["subscribe-container"]}>
          <p  id="community">Be The First To Know </p>
          <form
            className={style["input-container"]}
            onSubmit={subscribeHandler}
          >
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              className={style.input}
            />

            <button className={style["subscribe-button"]}>Subscribe</button>
          </form>{" "}
          {thankYou && <p className={style.thankyou}>{thankYou}</p>}
        </div>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Landing;

// {
/* <div className={style["games-scroll-container"]}>
          <div
            className={`${
              positions[0].position === 0 && style["first-game-background-image"]
            } ${
              positions[0].position === 1 &&
              style["second-game-background-image"]
            } ${
              positions[0].position === 2 && style["third-game-background-image"]
            }`}
          >
            <div className={style["blur-backgroung-color"]}></div>
          </div>
          <div
            className={`${
              positions[1].position === 0 && style["first-game-background-image"]
            } ${
              positions[1].position === 1 &&
              style["second-game-background-image"]
            } ${
              positions[1].position === 2 && style["third-game-background-image"]
            }`}
          >
            <div
              className={`${
                positions[1].position === 1 && style["second-game-container"]
              } ${style["blur-backgroung-color"]}`}
            />
          </div>
          <div
            className={`${
              positions[2].position === 0 && style["first-game-background-image"]
            } ${
              positions[2].position === 1 &&
              style["second-game-background-image"]
            } ${
              positions[2].position === 2 && style["third-game-background-image"]
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
// }

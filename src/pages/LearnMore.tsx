import React, { useState } from "react";
import style from "./LearnMore.module.css";
import Chart from "../components/other/Chart";
import Roadmap from "../components/other/Roadmap";
const LearnMore = () => {
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  const handleHover = (index: number | null) => {
    setHoveredImage(index);
  };
  const clickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    const element = document.getElementById(event.currentTarget.name);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };
  return (
      <div className={style.container}>
      <h1>Learn more</h1>
      <hr />
      <nav className={style["short-cut-container"]}>
        <button onClick={clickHandler} name="signin">
          sign in to site
        </button>
        <button onClick={clickHandler} name="games">
          Games
        </button>
        <button onClick={clickHandler} name="tokens">
          Tokens
        </button>
        <button onClick={clickHandler} name="tokenomics">
          Tokenomics
        </button>
        <button onClick={clickHandler} name="financial-page">
          Financial Page
        </button>
        <button onClick={clickHandler} name="roadmap">
          Roadmap
        </button>
        <button onClick={clickHandler} name="team">
          Team
        </button>
      </nav>
      <p className={style.title} id="signin">
        sign in to site
      </p>
      <p className={style.description}>
        In this website, users first need to register with their email, which
        cannot be changed. Once registered, they can log in to the site. Each
        user on Gemtopia has a profile where they can add links to their social
        media accounts. They can also choose whether they want others to see
        their rankings and scores.
      </p>
      <p className={style.title} id="games">
        Games
      </p>
      <p className={style.description}>
        The site offers a variety of entertaining games that users can enjoy
        without any limitations. By playing these games, users can earn Gemyto
        tokens. Each game has a path to earning tokens, and there are top
        performers for each game based on their rankings. The ranking of each
        game is determined by the number of likes received from other users.
      </p>
      <p className={style.title} id="tokens">
        Tokens
      </p>
      <p className={style["token-description"]}>
        Tokens are earned through a four-stage path in each game. Until a user
        reaches the score of the first stage, they cannot earn the tokens for
        that stage. Once they achieve the record score for the first stage, they
        can try to earn tokens for the subsequent stages. Tokens that are
        blocked will only be received on the next day if the user is among the
        top performers for each game on the current day.
      </p>
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
        <div className={style["buying-platform-container"]}>
          <p>ETHEREUM</p>
          <img src={require("../assets/pancakeswap.png")} alt="pancakeswap" />
        </div>
        <div className={style["buying-platform-container"]}>
          <p>ETHEREUM</p>
          <img
            src={require("../assets/apeswap.png")}
            className={style["apeswap-img"]}
          />
        </div>
      </div>
      <p className={style.title} id="tokenomics">
        Tokenomics
      </p>
      <p className={style.description}>
        We have a total of 560,000,000 tokens, which have been minted only once.
        This total amount is divided into different sections to meet the needs
        of users, the market, and our project collaborators. The distribution of
        our tokens is as follows: 
      </p>
      <div  className={style["chart-container"]}>
      <Chart/>
      </div>
      <p className={style.title} id="financial-page">
        Financial Page
      </p>
      <p className={style.description}>
        Each user has a financial page where they can view the following:
        <br />
        1. Tokens earned overall (until yesterday)
        <br />
        2. Tokens earned today, which can only be received at the end of the
        current day
        <br />
        3. Tokens earned from each game
        <br />
        4. Withdrawal history, including dates and amounts
        <br />
        5. Users can also make withdrawals, but it should be noted that there
        are limitations and the amount must exceed a certain value to withdraw
        all tokens.
      </p>
      <p className={style.title} id="roadmap">
        Roadmap
      </p>
      <p className={style["road-map-description"]}>
        Everything mentioned on this page pertains to Phase 1 of the project.
        This project has additional phases and higher goals. As you can see, our
        roadmap is as follows: (insert roadmap here)
      </p>
      <div className={style["roadmap-container"]}>
      <Roadmap />
      </div>
      <p className={style.title} id="team">
        Team
      </p>
      <p className={style.description}>
        Our development team is tirelessly working with dedication, talent, and
        higher goals. Our aim is to enhance the project and provide better
        services to our users. As a committed team, we stay updated with new
        technologies and strive to utilize the best practices and industry
        standards to deliver a better user experience for everyone. We proudly
        state that we are continuously progressing and improving, always
        striving to offer the best results.
      </p>
      <p className={style.title} id="">
        Don't forget to contact us
      </p>
      <p className={style["contact-description"]}>
        We would be happy to receive your feedback, suggestions, and reports.
        Your feedback drives our progress and helps us build the world we want
        together. Follow us on social media and stay updated with our news.
        (insert social media links)
      </p>
      <div className={style["social-media-container"]}>
        <img
          src={require(`../assets/social-media/footer/${
            hoveredImage === 0 ? "hovered telegram.png" : "telegram.png"
          }`)}
          alt="telegram"
          onMouseEnter={() => handleHover(0)}
          onMouseLeave={() => handleHover(null)}
        />
        <img
          src={require(`../assets/social-media/footer/${
            hoveredImage === 1 ? "hovered twitter.png" : "twitter.png"
          }`)}
          alt="twitter"
          onMouseEnter={() => handleHover(1)}
          onMouseLeave={() => handleHover(null)}
        />
        <img
          src={require(`../assets/social-media/footer/${
            hoveredImage === 2 ? "hovered discord.png" : "discord.png"
          }`)}
          alt="discord"
          onMouseEnter={() => handleHover(2)}
          onMouseLeave={() => handleHover(null)}
        />
        <img
          src={require(`../assets/social-media/footer/${
            hoveredImage === 3 ? "hovered gmail.png" : "gmail.png"
          }`)}
          alt="telegram"
          onMouseEnter={() => handleHover(3)}
          onMouseLeave={() => handleHover(null)}
        />
      </div>
      <p className={style.description}>
        Thank you for being here.
        <br />
        <br />
        The GemTopia and Gemyto Team.
      </p>
      </div>
  );
};

export default LearnMore;

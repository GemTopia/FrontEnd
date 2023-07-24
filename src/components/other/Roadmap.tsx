import style from "./Roadmap.module.css";

const Roadmap = () => {
  return (
    <div className={style["roadmap-container"]}>
      <img
        src={require("../../assets/roadmap.png")}
        alt="Roadmap"
        className={style["roadmap-pic"]}
      />
      <div className={style["roadmap-descriptions-container"]}>
        <div className={style["description-container"]}>
          <p>
            1. At this stage, it’s only possible to gain income through gamers.{" "}
            <br /> <br />
            2. Gamers will earn tokens as income by playing default site games.{" "}
            <br /> <br />
            3. It will be practical to receive the award through air drop after
            the project has been published.
          </p>
        </div>
        <div className={style["description-container"]}>
          <p>
            1. It includes all the features of the first version <br />
            <br />
            2. The game developers can earn tokens by uploading games. <br />{" "}
            <br />
            3. game developer can also withdraw tokens <br /> <br />
            4. Developers receive tokens based on the ranking of the games they
            upload <br /> <br />
            5. Users get tokens as rewards.
          </p>
        </div>
        <div className={style["description-container"]}>
          <p>
            1. We can deposit tokens. <br /> <br />
            2. There is the possibility of buying or unlocking some stages of
            the game. <br />
            <br />
            3. Users have the ability to buy and sell NFTs. <br />
            <br />
            4. You have the option to buy some features or NFTs from the site or
            directly from our company.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;

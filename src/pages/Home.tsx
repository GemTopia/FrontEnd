import style from "./Home.module.css";
import RecentPlayedItems from "../components/games/RecentPlayedGames";
import PopularGames from "../components/games/PopularGames";
import recentPlayedGameItem from "../models/recentPlayedGameItem";
import PopularGameItem from "../models/popularGameItem";
import HomeTopPlayers from "../components/players/HomeTopPlayers";
import homeTopPlayerItem from "../models/homeTopPlayerItem";

const Home = () => {
  let recentPlayedDummy: recentPlayedGameItem[] = [
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category",
      id: "0",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers2",
      gameCategory: "category",
      id: "1",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers3",
      gameCategory: "category",
      id: "2",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers4",
      gameCategory: "category",
      id: "3",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers5",
      gameCategory: "category",
      id: "4",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers6",
      gameCategory: "category",
      id: "5",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers7",
      gameCategory: "category",
      id: "6",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers8",
      gameCategory: "category",
      id: "7",
    },
  ];

  let popularGamesDummy: PopularGameItem[] = [
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "1",
      id: "0",
      likesCount: "5279",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "2",
      id: "1",
      likesCount: "5278",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "3",
      id: "2",
      likesCount: "5277",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "4",
      id: "3",
      likesCount: "5276",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "5",
      id: "4",
      likesCount: "5275",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "6",
      id: "5",
      likesCount: "5274",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "7",
      id: "6",
      likesCount: "5273",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "8",
      id: "7",
      likesCount: "5272",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "9",
      id: "8",
      likesCount: "5271",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "10",
      id: "9",
      likesCount: "5270",
    },
  ];

  let topPlayersDummy: homeTopPlayerItem[] = [
    {
      rank: "first-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "120",
      id: "0",
    },
    {
      rank: "second-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "119",
      id: "1",
    },
    {
      rank: "third-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "118",
      id: "2",
    },
    {
      rank: "fourth-place-medal.png",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "117",
      id: "3",
    },
    {
      rank: "5",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "116",
      id: "4",
    },
    {
      rank: "6",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "115",
      id: "5",
    },
    {
      rank: "7",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "114",
      id: "6",
    },
    {
      rank: "8",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "113",
      id: "7",
    },
    {
      rank: "9",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "112",
      id: "8",
    },
    {
      rank: "10",
      imageAddress: "player.png",
      userName: "Jasmine Dragon",
      token: "111",
      id: "9",
    },
  ];

  return (
    <div className={style["page-container"]}>
      <RecentPlayedItems games={recentPlayedDummy} />
      <PopularGames games={popularGamesDummy} />
      <HomeTopPlayers players={topPlayersDummy} />
    </div>
  );
};

export default Home;

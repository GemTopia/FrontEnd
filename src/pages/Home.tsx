import style from "./Home.module.css";
import RecentPlayedItems from "../components/games/RecentPlayedItems";
import PopularGames from "../components/games/PopularGames";
import recentPlayedGameItem from "../models/recentPlayedGameItem";
import PopularGameItem from "../models/popularGameItem";
import TopPlayers from "../components/users/TopPlayers";
import topPlayerItem from "../models/topPlayerItem";

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
      likesCount: "5279",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "2",
      likesCount: "5278",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "3",
      likesCount: "5277",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "4",
      likesCount: "5276",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "5",
      likesCount: "5275",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "6",
      likesCount: "5274",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "7",
      likesCount: "5273",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "8",
      likesCount: "5272",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "9",
      likesCount: "5271",
    },
    {
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      rank: "10",
      likesCount: "5270",
    },
  ];

  let topPlayersDummy: topPlayerItem[] = [
    {
      rank : "first-place-medal.png",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "120",
      id : "0"
    },
    {
      rank : "second-place-medal.png",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "119",
      id : "1"
    },
    {
      rank : "third-place-medal.png",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "118",
      id : "2"
    },
    {
      rank : "fourth-place-medal.png",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "117",
      id : "3"
    },
    {
      rank : "5",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "116",
      id : "4"
    },
    {
      rank : "6",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "115",
      id : "5"
    },
    {
      rank : "7",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "114",
      id : "6"
    },
    {
      rank : "8",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "113",
      id : "7"
    },
    {
      rank : "9",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "112",
      id : "8"
    },
    {
      rank : "10",
      imageAddress : "player.png",
      userName : "Jasmine Dragon",
      score : "111",
      id : "9"
    },
  ]

  return (
    <div className={style.pageContainer}>
      <div className={style.recentPlayedContainer}>
        <h2 className={style.recentPlayedTitle}>Recent played</h2>
        <RecentPlayedItems games={recentPlayedDummy} />
      </div>
          <PopularGames games={popularGamesDummy} />
          <TopPlayers players={topPlayersDummy} />

    </div>
  );
};

export default Home;

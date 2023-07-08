import style from "./Home.module.css";
import RecentPlayedItems from "../components/games/RecentPlayedItems";
import PopularGames from "../components/games/PopularGames";
import recentPlayedGameItem from "../models/recentPlayedGameItem";
import PopularGameItem from "../models/popularGameItem";

const Home = () => {
  let recentPlayedDummy: recentPlayedGameItem[] = [
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      id: "0",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      id: "1",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      id: "2",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers",
      gameCategory: "category",
      id: "3",
    },
    // {
    //     thumnailImageAddress: "Rectangle 8.png",
    //     gameLogoAddress: "Rectangle 846.png",
    //     gameName: "subway surfers",
    //     gameCategory: "category",
    //     id: "4",
    //   },
    //   {
    //     thumnailImageAddress: "Rectangle 8.png",
    //     gameLogoAddress: "Rectangle 846.png",
    //     gameName: "subway surfers",
    //     gameCategory: "category",
    //     id: "5",
    //   },
    //   {
    //     thumnailImageAddress: "Rectangle 8.png",
    //     gameLogoAddress: "Rectangle 846.png",
    //     gameName: "subway surfers",
    //     gameCategory: "category",
    //     id: "6",
    //   },
    //   {
    //     thumnailImageAddress: "Rectangle 8.png",
    //     gameLogoAddress: "Rectangle 846.png",
    //     gameName: "subway surfers",
    //     gameCategory: "category",
    //     id: "7",
    //   },
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

  return (
    <div className={style.pageContainer}>
      <div className={style.recentPlayedContainer}>
        <h2 className={style.recentPlayedTitle}>Recent played</h2>
        <RecentPlayedItems games={recentPlayedDummy} />
      </div>
          <PopularGames games={popularGamesDummy} />

    </div>
  );
};

export default Home;

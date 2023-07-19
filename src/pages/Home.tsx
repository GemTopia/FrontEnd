import style from "./Home.module.css";
import RecentPlayedGames from "../components/games/RecentPlayedGames";
import PopularGames from "../components/games/PopularGames";
import RecentPlayedGameItem from "../models/recentPlayedGameItem";
import PopularGameItem from "../models/popularGameItem";
import HomeTopPlayers from "../components/players/HomeTopPlayers";
import homeTopPlayerItem from "../models/homeTopPlayerItem";
import { Fragment, useEffect, useState } from "react";
import Header from "../components/layout/Header";
import axios, * as others from "axios";

const Home = () => {
  const [recentGames, setRecentGames] = useState<RecentPlayedGameItem[]>([]);
  // let recentPlayedDummy: RecentPlayedGameItem[] = [
  // {
  //   thumnailImageAddress: "Rectangle 8.png",
  //   gameLogoAddress: "Rectangle 846.png",
  //   gameName: "subway surfers1",
  //   gameCategory: "category",
  //   id: "0",
  // },
  // ];
  const [popularGames, setPopularGames] = useState<PopularGameItem[]>([]);
  // let popularGamesDummy: PopularGameItem[] = [
  // {
  //   gameLogoAddress: "Rectangle 846.png",
  //   gameName: "subway surfers",
  //   gameCategory: "category",
  //   rank: "1",
  //   id: "0",
  //   likesCount: "5279",
  // },
  // ];
  const [topPlayers, setTopPlayers] = useState<homeTopPlayerItem[]>([]);
  // let topPlayersDummy: homeTopPlayerItem[] = [
  // {
  //   rank: "first-place-medal.png",
  //   imageAddress: "player.png",
  //   userName: "Jasmine Dragon",
  //   token: "120",
  //   id: "0",
  // },

  // {
  // ];
  function getCookie(name: string) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts && parts.length === 2) return parts.pop()?.split(";").shift();
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/home/", {
        headers: { Authorization: `Bearer ${getCookie("token")}` },
      })
      .then(function (response) {
        // console.log(response);
        const loadedRecentGames = response.data.recent_games.map(
          (game: RecentPlayedGameItem) => {}
        );
        const loadedPopularGames = response.data.ranking_games.map(
          (game: PopularGameItem) => {}
        );

        document.cookie = `username=${response.data.user_profile.user_name}`;
      })
      .catch(function (error) {
        // console.log(error);
      });
  }, []);

  return (
    <Fragment>
      <Header />
      <div className={style["page-container"]}>
        <RecentPlayedGames games={recentGames} />
        <PopularGames games={popularGames} />
        <HomeTopPlayers players={topPlayers} />
      </div>
    </Fragment>
  );
};

export default Home;

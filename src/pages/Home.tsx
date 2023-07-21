import style from "./Home.module.css";
import RecentPlayedGames from "../components/games/RecentPlayedGames";
import PopularGames from "../components/games/PopularGames";
import RecentPlayedGameItem from "../models/recentPlayedGameItem";
import GameItem from "../models/GameItem";
import HomeTopPlayers from "../components/players/HomeTopPlayers";
import homeTopPlayerItem from "../models/homeTopPlayerItem";
import { Fragment, useEffect, useState } from "react";
import Header from "../components/layout/Header";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";

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
  const [popularGames, setPopularGames] = useState<GameItem[]>([]);
  // let popularGamesDummy: GameItem[] = [
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

  useEffect(() => {
    axios
      .get(`${baseUrl}home/`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(function (response) {
        // console.log(response);
        localStorage.setItem("username", response.data.user_profile.user_name);

        const loadedRecentGames = response.data.recent_games.map(
          (game: RecentPlayedGameItem) => {
            return {
              cover_image: game.cover_image,
              logo_image: game.logo_image,
              name: game.name,
              game_type: game.game_type,
              id: game.id,
            };
          }
        );
        setRecentGames((prevGames) => {
          let updatedGames = [...prevGames];
          loadedRecentGames.map((game: RecentPlayedGameItem) => {
            if (
              !updatedGames.find((item) => {
                return item.id === game.id;
              })
            )
              updatedGames.push(game);
          });
          return updatedGames;
        });

        const loadedPopularGames: GameItem[] = response.data.ranking_games.map(
          (game: GameItem) => {
            return {
              logo_image: game.logo_image,
              name: game.name,
              game_type: game.game_type,
              num_of_like: game.num_of_like,
              id: game.id,
              is_liked_by_user: game.is_liked_by_user,
            };
          }
        );
        setPopularGames((prevGames) => {
          let updatedGames = [...prevGames];
          loadedPopularGames.map((game: GameItem) => {
            if (
              !updatedGames.find((item) => {
                return item.id === game.id;
              })
            )
              updatedGames.push(game);
          });
          return updatedGames;
        });
        const loadedTopPlayers: homeTopPlayerItem[] =
          response.data.top_players.map((player: homeTopPlayerItem) => {
            return {
              avatar: player.avatar,
              user_name: player.user_name,
              id: player.id,
              total_gemyto: player.total_gemyto,
            };
          });
        setTopPlayers((prevPlayers) => {
          let updatedPlayers = [...prevPlayers];
          loadedTopPlayers.map((player: homeTopPlayerItem) => {
            if (
              !updatedPlayers.find((item) => {
                return item.id === player.id;
              })
            )
              updatedPlayers.push(player);
          });
          return updatedPlayers;
        });
        // console.log(loadedPopularGames);
      })
      .catch(function (error) {
        console.log(error);
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

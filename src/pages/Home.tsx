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
  let recentPlayedDummy: RecentPlayedGameItem[] = [
  // {
  //   thumnailImageAddress: "Rectangle 8.png",
  //   gameLogoAddress: "Rectangle 846.png",
  //   gameName: "subway surfers1",
  //   gameCategory: "category",
  //   id: 0,
  // },
  {
    logo_image: "pic.png",
    cover_image: "Rectangle 8.png",
    name: "string",
    game_type: "string",
    id: 0,
  },
  {
    logo_image: "pic.png",
    cover_image: "Rectangle 8.png",
    name: "string",
    game_type: "string",
    id: 1,
  },
  {
    logo_image: "pic.png",
    cover_image: "Rectangle 8.png",
    name: "string",
    game_type: "string",
    id: 2,
  },
  {
    logo_image: "pic.png",
    cover_image: "Rectangle 8.png",
    name: "string",
    game_type: "string",
    id: 3,
  },
  ];

  const [popularGames, setPopularGames] = useState<GameItem[]>([]);
  let popularGamesDummy: GameItem[] = [
  // {
  //   gameLogoAddress: "Rectangle 846.png",
  //   gameName: "subway surfers",
  //   gameCategory: "category",
  //   rank: "1",
  //   id: "0",
  //   likesCount: "5279",
  // },
  {
    cover_image: "Rectangle 8.png",
    logo_image: "Rectangle 846.png",
    name: "subway surfers1",
    game_type: "category1",
    // rank:string;
    num_of_like: 576544,
    id: 0,
    created_at: "2022-03-25",
    is_liked_by_user: false,
    game_pictures: ["pictures"],
    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
    scores:120
  },
  {
    cover_image: "Rectangle 8.png",
    logo_image: "Rectangle 846.png",
    name: "subway surfers1",
    game_type: "category1",
    // rank:string;
    num_of_like: 576543,
    id: 1,
    created_at: "2022-03-26",
    is_liked_by_user: false,
    game_pictures: ["pictures"],
    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
    scores:120
  },
  {
    cover_image: "Rectangle 8.png",
    logo_image: "Rectangle 846.png",
    name: "subway surfers1",
    game_type: "category1",
    // rank:string;
    num_of_like: 576542,
    id: 2,
    created_at: "2022-03-24",
    is_liked_by_user: false,
    game_pictures: ["pictures"],
    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
    scores:120
  },
  {
    cover_image: "Rectangle 8.png",
    logo_image: "Rectangle 846.png",
    name: "subway surfers1",
    game_type: "category1",
    // rank:string;
    num_of_like: 576541,
    id: 3,
    created_at: "2022-03-23",
    is_liked_by_user: false,
    game_pictures: ["pictures"],
    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
    scores:120
  },
  {
    cover_image: "Rectangle 8.png",
    logo_image: "Rectangle 846.png",
    name: "subway surfers1",
    game_type: "category1",
    // rank:string;
    num_of_like: 576546,
    id: 4,
    created_at: "2022-03-27",
    is_liked_by_user: false,
    game_pictures: ["pictures"],
    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
    scores:120
  },
  {
    cover_image: "Rectangle 8.png",
    logo_image: "Rectangle 846.png",
    name: "subway surfers2",
    game_type: "category2",
    // rank:string;
    num_of_like: 576547,
    id: 5,
    created_at: "2022-03-29",
    is_liked_by_user: false,
    game_pictures: ["pictures"],
    link: "string",
    num_of_report: 0,
    num_of_users_get_gemyto: 0,
    bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
    scores:120
  },
  ];
  const [topPlayers, setTopPlayers] = useState<homeTopPlayerItem[]>([]);
  let topPlayersDummy: homeTopPlayerItem[] = [
  // {
  //   rank: "first-place-medal.png",
  //   imageAddress: "player.png",
  //   userName: "Jasmine Dragon",
  //   token: "120",
  //   id: "0",
  // },

  {
  rank: "1",
  avatar: "player.png",
  user_name: "Jasmine Dragon",
  total_gemyto: 120,
  id: 0,
  },
  {
    rank: "2",
    avatar: "player.png",
    user_name: "Jasmine Dragon",
    total_gemyto: 120,
    id: 1,
  },
  {
    rank: "3",
    avatar: "player.png",
    user_name: "Jasmine Dragon",
    total_gemyto: 120,
    id: 2,
  },
  {
    rank: "4",
    avatar: "player.png",
    user_name: "Jasmine Dragon",
    total_gemyto: 120,
    id: 3,
  },
  {
    rank: "5",
    avatar: "player.png",
    user_name: "Jasmine Dragon",
    total_gemyto: 120,
    id: 4,
  },

  

  ];

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
      {/* <Header /> */}
      <div className={style["page-container"]}>
        <RecentPlayedGames games={recentPlayedDummy} />
        <PopularGames games={popularGamesDummy} />
        <HomeTopPlayers players={topPlayersDummy} />
      </div>
    </Fragment>
  );
};

export default Home;

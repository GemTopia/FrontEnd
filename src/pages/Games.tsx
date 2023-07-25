import style from "./Games.module.css";
import React, { useState, useEffect, Fragment } from "react";
import useInput from "../components/hooks/use-input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import GameItem from "../models/GameItem";
import GamesBody from "../components/games/GamesBody";
import CategorisedGameGroupItem from "../models/CategorisedGameGroupItem";
import axios, * as others from "axios";
import { baseUrl } from "../shares/shared";
import Header from "../components/layout/Header";
import { useNavigate } from "react-router";
const Games = () => {
  // let dummy: GameItem[] = [
  //   // {
  //   //   cover_image: "Rectangle 846.png",
  //   //   logo_image: "",
  //   //   name: "subway surfers1",
  //   //   game_type: "category1",
  //   //   // rank: "2",
  //   //   num_of_like: 78,
  //   //   id: 1,
  //   //   created_at: "2022-03-25",
  //   //   is_liked_by_user: true,
  //   // },
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers1",
  //     game_type: "category1",
  //     // rank:string;
  //     num_of_like: 576544,
  //     id: 0,
  //     created_at: "2022-03-25",
  //     is_liked_by_user: false,
  //     game_pictures: ["pictures"],
  //     link: "string",
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  //     scores: 120,
  //     rank: 1,
  //   },
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers1",
  //     game_type: "category1",
  //     // rank:string;
  //     num_of_like: 576543,
  //     id: 1,
  //     created_at: "2022-03-26",
  //     is_liked_by_user: false,
  //     game_pictures: ["pictures"],
  //     link: "string",
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  //     scores: 120,
  //     rank: 2,
  //   },
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers1",
  //     game_type: "category1",
  //     // rank:string;
  //     num_of_like: 576542,
  //     id: 2,
  //     created_at: "2022-03-24",
  //     is_liked_by_user: false,
  //     game_pictures: ["pictures"],
  //     link: "string",
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  //     scores: 120,
  //     rank: 3,
  //   },
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers1",
  //     game_type: "category1",
  //     // rank:string;
  //     num_of_like: 576541,
  //     id: 3,
  //     created_at: "2022-03-23",
  //     is_liked_by_user: false,
  //     game_pictures: ["pictures"],
  //     link: "string",
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  //     scores: 120,
  //     rank: 4,
  //   },
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers1",
  //     game_type: "category1",
  //     // rank:string;
  //     num_of_like: 576546,
  //     id: 4,
  //     created_at: "2022-03-27",
  //     is_liked_by_user: false,
  //     game_pictures: ["pictures"],
  //     link: "string",
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  //     scores: 120,
  //     rank: 5,
  //   },
  //   {
  //     cover_image: "Rectangle 8.png",
  //     logo_image: "Rectangle 846.png",
  //     name: "subway surfers2",
  //     game_type: "category2",
  //     // rank:string;
  //     num_of_like: 576547,
  //     id: 5,
  //     created_at: "2022-03-29",
  //     is_liked_by_user: false,
  //     game_pictures: ["pictures"],
  //     link: "string",
  //     num_of_report: 0,
  //     num_of_users_get_gemyto: 0,
  //     bio: "You join the numbers and get to the 2048 tile! Supports tiny (3x3), classic (4x4), big (5x5), bigger (6x6) and huge (8x8) board sizes. Be ready for a new challenge!",
  //     scores: 120,
  //     rank: 6,
  //   },
  // ];
  const [games, setGames] = useState<GameItem[]>([]);
  // const [categorisedGames, setCategorisedGames] = useState<
  //   CategorisedGameGroupItem[]
  // >([]);
  const [categorisedGames, setCategorisedGames] = useState<
    CategorisedGameGroupItem[]
  >(groupBy(games));

  const [firstGames, setFirstGames] = useState(
    categorisedGames.map((categoryGroup: CategorisedGameGroupItem) => {
      return { category: categoryGroup.category, firstGame: "0" };
    })
  );
  const [disableDownOrRights, setDisableDownOrRight] = useState(
    categorisedGames.map((categoryGroup: CategorisedGameGroupItem) => {
      return {
        category: categoryGroup.category,
        disableDownOrRight: categoryGroup.games.length > 3 ? false : true,
      };
    })
  );
  const [disableUpOrLefts, setDisableUpOrLeft] = useState(
    categorisedGames.map((categoryGroup: CategorisedGameGroupItem) => {
      return { category: categoryGroup.category, disableUpOrLeft: true };
    })
  );

  const scrollUpHandler = (event: any) => {
    let categoryIndex = event.target.id.split(" ")[1];
    let category = event.target.id.split(" ")[0];
    categoryIndex = +categoryIndex;
    let topGame = firstGames[categoryIndex].firstGame;
    if (+topGame - 3 > 0) {
      const element = document.getElementById(
        `categoryList${category}${+topGame - 3}`
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setFirstGames((currentState) => {
          let firsGamesSecondState = [...currentState];
          firsGamesSecondState[categoryIndex].firstGame = String(
            +firsGamesSecondState[categoryIndex].firstGame - 3
          );
          return firsGamesSecondState;
        });
      }
      setDisableUpOrLeft((currentState) => {
        let disableUpSecondState = [...currentState];
        disableUpSecondState[categoryIndex].disableUpOrLeft = false;
        return disableUpSecondState;
      });
      setDisableDownOrRight((currentState) => {
        let disableDownSecondState = [...currentState];
        disableDownSecondState[categoryIndex].disableDownOrRight = false;
        return disableDownSecondState;
      });
    } else if (topGame !== "0") {
      const element = document.getElementById(`categoryList${category}0`);

      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setFirstGames((currentState) => {
          let firsGamesSecondState = [...currentState];
          firsGamesSecondState[categoryIndex].firstGame = "0";
          return firsGamesSecondState;
        });
      }
      setDisableUpOrLeft((currentState) => {
        let disableUpSecondState = [...currentState];
        disableUpSecondState[categoryIndex].disableUpOrLeft = true;
        return disableUpSecondState;
      });
      setDisableDownOrRight((currentState) => {
        let disableDownSecondState = [...currentState];
        disableDownSecondState[categoryIndex].disableDownOrRight = false;
        return disableDownSecondState;
      });
    }
  };

  const scrollDownHandler = (event: any) => {
    let categoryIndex = event.target.id.split(" ")[1];
    let category = event.target.id.split(" ")[0];
    categoryIndex = +categoryIndex;
    let topGame = firstGames[categoryIndex].firstGame;

    const element = document.getElementById(
      `categoryList${category}${+topGame + 3}`
    );

    if (+topGame + 6 >= categorisedGames[categoryIndex].games.length) {
      setDisableDownOrRight((currentState) => {
        let disableDownSecondState = [...currentState];
        disableDownSecondState[categoryIndex].disableDownOrRight = true;
        return disableDownSecondState;
      });
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setFirstGames((currentState) => {
        let firsGamesSecondState = [...currentState];
        firsGamesSecondState[categoryIndex].firstGame = String(
          +firsGamesSecondState[categoryIndex].firstGame + 3
        );
        return firsGamesSecondState;
      });
      setDisableUpOrLeft((currentState) => {
        let disableUpSecondState = [...currentState];
        disableUpSecondState[categoryIndex].disableUpOrLeft = false;
        return disableUpSecondState;
      });
    }
  };

  const scrollLeftHandler = (event: any) => {
    let categoryIndex = event.target.id.split(" ")[1];
    let category = event.target.id.split(" ")[0];
    categoryIndex = +categoryIndex;
    let topGame = firstGames[categoryIndex].firstGame;
    if (+topGame - 3 > 0) {
      const element = document.getElementById(
        `categoryCompact${category}${+topGame - 3}`
      );
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setFirstGames((currentState) => {
          let firsGamesSecondState = [...currentState];
          firsGamesSecondState[categoryIndex].firstGame = String(
            +firsGamesSecondState[categoryIndex].firstGame - 3
          );
          return firsGamesSecondState;
        });
      }
      setDisableUpOrLeft((currentState) => {
        let disableUpSecondState = [...currentState];
        disableUpSecondState[categoryIndex].disableUpOrLeft = false;
        return disableUpSecondState;
      });
      setDisableDownOrRight((currentState) => {
        let disableDownSecondState = [...currentState];
        disableDownSecondState[categoryIndex].disableDownOrRight = false;
        return disableDownSecondState;
      });
    } else if (topGame !== "0") {
      const element = document.getElementById(`categoryCompact${category}0`);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setFirstGames((currentState) => {
          let firsGamesSecondState = [...currentState];
          firsGamesSecondState[categoryIndex].firstGame = "0";
          return firsGamesSecondState;
        });
      }
      setDisableUpOrLeft((currentState) => {
        let disableUpSecondState = [...currentState];
        disableUpSecondState[categoryIndex].disableUpOrLeft = true;
        return disableUpSecondState;
      });
      setDisableDownOrRight((currentState) => {
        let disableDownSecondState = [...currentState];
        disableDownSecondState[categoryIndex].disableDownOrRight = false;
        return disableDownSecondState;
      });
    }
  };

  const scrollRightHandler = (event: any) => {
    let categoryIndex = event.target.id.split(" ")[1];
    let category = event.target.id.split(" ")[0];
    categoryIndex = +categoryIndex;
    let topGame = firstGames[categoryIndex].firstGame;
    const element = document.getElementById(
      `categoryCompact${category}${+topGame + 5}`
    );

    if (+topGame + 6 >= categorisedGames[categoryIndex].games.length) {
      setDisableDownOrRight((currentState) => {
        let disableDownSecondState = [...currentState];
        disableDownSecondState[categoryIndex].disableDownOrRight = true;
        return disableDownSecondState;
      });
    }
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });

      setFirstGames((currentState) => {
        let firsGamesSecondState = [...currentState];
        firsGamesSecondState[categoryIndex].firstGame = String(
          +firsGamesSecondState[categoryIndex].firstGame + 3
        );
        return firsGamesSecondState;
      });
      setDisableUpOrLeft((currentState) => {
        let disableUpSecondState = [...currentState];
        disableUpSecondState[categoryIndex].disableUpOrLeft = false;
        return disableUpSecondState;
      });
    }
  };

  const [dropdownIsOpen, setdropdownIsOpen] = useState<boolean>(false);
  const [viewType, setVeiwType] = useState<string>("list");
  const [sortby, setSortby] = useState<string>("rate");
  const {
    enteredValue: searchValue,
    isValid: searchIsValid,
    hasError: searchHasError,
    inputChangeHandler: searchChangeHandler,
    inputBlurHandler: searchBlurHandler,
  } = useInput((input: string) => input.trim().length !== 0, "");

  const dropdownIconClickHandler = () => {
    setdropdownIsOpen((current) => !current);
  };
  const categorySortHandler = () => {
    if (sortby !== "category") {
      setSortby("category");
    }
    setdropdownIsOpen((current) => !current);
  };
  const rateSortHandler = () => {
    if (sortby !== "rate") {
      setSortby("rate");
    }
    setdropdownIsOpen((current) => !current);
  };
  const earliestSortHandler = () => {
    if (sortby !== "earliest") {
      setSortby("earliest");
    }
    setdropdownIsOpen((current) => !current);
  };
  const latestSortHandler = () => {
    if (sortby !== "latest") {
      setSortby("latest");
    }
    setdropdownIsOpen((current) => !current);
  };
  const compactIconClickHandler = () => {
    if (viewType !== "compact") {
      setVeiwType("compact");
    }
  };
  const listIconClickHandler = () => {
    if (viewType !== "list") {
      setVeiwType("list");
    }
  };
  // console.log(groupBy(dummy));
  function removewithfilter(arr: string[]) {
    let outputArray = arr.filter(function (v, i, self) {
      return i === self.indexOf(v);
    });
    return outputArray;
  }

  function groupBy(array: GameItem[]) {
    let categoryGroups: any = [];
    categoryGroups = array.map((game) => game.game_type);
    categoryGroups = removewithfilter(categoryGroups);
    categoryGroups = categoryGroups.map((category: string) => {
      return { category: category, games: [] };
    });

    for (let j = 0; j < categoryGroups.length; j++) {
      let categoryGroup = categoryGroups[j];
      for (let i = 0; i < array.length; i++) {
        if (categoryGroup.category === array[i].game_type) {
          categoryGroup.games.push(array[i]);
        }
      }
    }
    // [
    //     gameItem={category:'cat',gameItems:[]}
    // ]

    // for (let i=0; i<array.length; i++) {

    //   let c = array[i][prop];
    //   if (!grouped.gameCategory===c)
    //   {
    //     grouped[c] = [];
    // };
    //   grouped[c].push(array[i]);
    // }
    return categoryGroups;
  }

  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) navigate("/");
    axios
      .get(
        `${baseUrl}home/games/?sort_by=${
          sortby === "category" ? "rate" : sortby
        }`,
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then(function (response) {
        setGames(response.data);
        console.log(response.data);
        setCategorisedGames(groupBy(response.data));
        setDisableDownOrRight(
          groupBy(response.data).map(
            (categoryGroup: CategorisedGameGroupItem) => {
              return {
                category: categoryGroup.category,
                disableDownOrRight:
                  categoryGroup.games.length > 3 ? false : true,
              };
            }
          )
        );
        setDisableUpOrLeft(
          groupBy(response.data).map(
            (categoryGroup: CategorisedGameGroupItem) => {
              return {
                category: categoryGroup.category,
                disableUpOrLeft: true,
              };
            }
          )
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sortby]);
  return (
    <Fragment>
      <Header />
      <div className={style["page-container"]}>
        <div className={style.header}>
          <div className={style["search-bar"]}>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className={style["search-icon"]}
            />
            <form>
              <input
                name="search"
                id="search"
                onChange={searchChangeHandler}
                onBlur={searchBlurHandler}
                value={searchValue}
                type="text"
                className={style["search-input"]}
                placeholder="search game ..."
              />
            </form>
          </div>
          <div className={style["header-right-side-container"]}>
            <div className={style["dropdown-container"]}>
              <div className={style["sortby-title"]}>
                <p className={style.sortby}>sort by</p>

                <FontAwesomeIcon
                  icon={dropdownIsOpen ? faAngleUp : faAngleDown}
                  className={style["dropdown-icon"]}
                  onClick={dropdownIconClickHandler}
                />
                <p className={style["veiw-title"]}>view</p>
              </div>
              {dropdownIsOpen && (
                <div
                  className={`${style["choice-container"]} ${
                    viewType === "list"
                      ? style["list-dropdown-background"]
                      : style["compact-dropdown-background"]
                  }`}
                >
                  <p
                    onClick={rateSortHandler}
                    className={`${style.choice} ${
                      sortby === "rate"
                        ? style["selected-choice"]
                        : style["not-selected-choice"]
                    }`}
                  >
                    rate
                  </p>
                  <p
                    onClick={categorySortHandler}
                    className={`${style.choice} ${
                      sortby === "category"
                        ? style["selected-choice"]
                        : style["not-selected-choice"]
                    }`}
                  >
                    category
                  </p>
                  <p
                    onClick={earliestSortHandler}
                    className={`${style.choice} ${
                      sortby === "earliest"
                        ? style["selected-choice"]
                        : style["not-selected-choice"]
                    }`}
                  >
                    earliest
                  </p>
                  <p
                    onClick={latestSortHandler}
                    className={`${style.choice} ${
                      sortby === "latest"
                        ? style["selected-choice"]
                        : style["not-selected-choice"]
                    }`}
                  >
                    latest
                  </p>
                </div>
              )}
            </div>

            <img
              src={require(`../assets/${
                viewType === "list"
                  ? "listIconViewSelected.png"
                  : "listIconViewUnselect.png"
              }`)}
              alt="view icon"
              className={style["view-icon"]}
              onClick={listIconClickHandler}
            />
            <img
              src={require(`../assets/${
                viewType === "list"
                  ? "CompactIconViewUnselect.png"
                  : "CompactIconViewSelected.png"
              }`)}
              alt="view icon"
              className={style["view-icon"]}
              onClick={compactIconClickHandler}
            />
          </div>
        </div>
        <GamesBody
          viewType={viewType}
          sortby={sortby}
          // games={games}
          // categorisedGames={groupBy(games)}
          games={games}
          categorisedGames={groupBy(games)}
          dropdownIsOpen={dropdownIsOpen}
          disableDownOrRights={disableDownOrRights}
          disableUpOrLefts={disableUpOrLefts}
          scrollUpHandler={scrollUpHandler}
          scrollDownHandler={scrollDownHandler}
          scrollLeftHandler={scrollLeftHandler}
          scrollRightHandler={scrollRightHandler}
        />
      </div>
    </Fragment>
  );
};

export default Games;

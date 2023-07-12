import style from "./Games.module.css";
import useInput from "../components/hooks/use-input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import GameItem from "../models/GamesPageItem";
import GamesBody from "../components/games/GamesBody";
import CategorisedGameGroupItem from "../models/CategorisedGameGroupItem";
const Games = () => {
  let dummy: GameItem[] = [
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "2",
      likesCount: "5278",
      id: "1",
      date: "2022-03-25",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "1",
      likesCount: "5279",
      id: "0",
      date: "2022-03-26",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "3",
      likesCount: "5277",
      id: "2",
      date: "2022-03-28",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "4",
      likesCount: "5278",
      id: "3",
      date: "2022-03-25",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "5",
      likesCount: "5279",
      id: "4",
      date: "2022-03-26",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "6",
      likesCount: "5277",
      id: "5",
      date: "2022-03-28",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "13",
      likesCount: "5273",
      id: "12",
      date: "2022-02-27",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "14",
      likesCount: "5272",
      id: "13",
      date: "2022-02-28",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "15",
      likesCount: "5271",
      id: "14",
      date: "2022-02-29",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "16",
      likesCount: "5273",
      id: "15",
      date: "2022-02-27",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "17",
      likesCount: "5272",
      id: "16",
      date: "2022-02-28",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "18",
      likesCount: "5271",
      id: "17",
      date: "2022-02-29",
    },
  ];
  let categorisedGames: CategorisedGameGroupItem[]=groupBy(dummy);

  const [firstGames, setFirstGames] = useState(
    categorisedGames.map((categoryGroup: CategorisedGameGroupItem) => {
      return { category: categoryGroup.category, firstGame: "0" };
    })
  );
  const [disableDownOrRights, setDisableDownOrRight] = useState(
    categorisedGames.map((categoryGroup: CategorisedGameGroupItem) => {
      return { category: categoryGroup.category, disableDownOrRight: false };
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
    } else if (topGame != "0") {
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
    if (sortby != "category") {
      setSortby("category");
    }
    setdropdownIsOpen((current) => !current);
  };
  const rateSortHandler = () => {
    if (sortby != "rate") {
      setSortby("rate");
    }
    setdropdownIsOpen((current) => !current);
  };
  const earliestSortHandler = () => {
    if (sortby != "earliest") {
      setSortby("earliest");
    }
    setdropdownIsOpen((current) => !current);
  };
  const latestSortHandler = () => {
    if (sortby != "latest") {
      setSortby("latest");
    }
    setdropdownIsOpen((current) => !current);
  };
  const compactIconClickHandler = () => {
    if (viewType != "compact") {
      setVeiwType("compact");
    }
  };
  const listIconClickHandler = () => {
    if (viewType != "list") {
      setVeiwType("list");
    }
  };
  // console.log(groupBy(dummy));
  return (
    <div className={style.pageContainer}>
      <div className={style.Header}>
        <div className={style.searchBar}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={style.icon} />
          <form>
            <input
              name="search"
              id="search"
              onChange={searchChangeHandler}
              onBlur={searchBlurHandler}
              value={searchValue}
              type="text"
              className={style.searchInput}
              placeholder="search game ..."
            />
          </form>
        </div>
        <div className={style.headerRightSideContainer}>
          <div className={style.dropdownContainer}>
            <div className={style.sortbyTitle}>
              <p className={style.sortby}>sort by</p>

              <FontAwesomeIcon
                icon={dropdownIsOpen ? faAngleUp : faAngleDown}
                className={style.dropdownIcon}
                onClick={dropdownIconClickHandler}
              />
              <p className={style.veiwTitle}>view</p>
            </div>
            {dropdownIsOpen && (
              <div
                className={`${style.choiceContainer} ${
                  viewType == "list"
                    ? style.listDropdownBackground
                    : style.compactDropdownBackground
                }`}
              >
                <p
                  onClick={rateSortHandler}
                  className={`${style.choice} ${
                    sortby == "rate"
                      ? style.selectedChoice
                      : style.notSelectedChoice
                  }`}
                >
                  rate
                </p>
                <p
                  onClick={categorySortHandler}
                  className={`${style.choice} ${
                    sortby == "category"
                      ? style.selectedChoice
                      : style.notSelectedChoice
                  }`}
                >
                  category
                </p>
                <p
                  onClick={earliestSortHandler}
                  className={`${style.choice} ${
                    sortby == "earliest"
                      ? style.selectedChoice
                      : style.notSelectedChoice
                  }`}
                >
                  earliest
                </p>
                <p
                  onClick={latestSortHandler}
                  className={`${style.choice} ${
                    sortby == "latest"
                      ? style.selectedChoice
                      : style.notSelectedChoice
                  }`}
                >
                  latest
                </p>
              </div>
            )}
          </div>

          <img
            src={require(`../assets/${
              viewType == "list"
                ? "listIconViewSelected.png"
                : "listIconViewUnselect.png"
            }`)}
            alt="like icon"
            className={style.Icon}
            onClick={listIconClickHandler}
          />
          <img
            src={require(`../assets/${
              viewType == "list"
                ? "CompactIconViewUnselect.png"
                : "CompactIconViewSelected.png"
            }`)}
            alt="like icon"
            className={style.Icon}
            onClick={compactIconClickHandler}
          />
        </div>
      </div>
      <GamesBody
        viewType={viewType}
        sortby={sortby}
        games={dummy}
        categorisedGames={groupBy(dummy)}
        dropdownIsOpen={dropdownIsOpen}
        disableDownOrRights={disableDownOrRights}
        disableUpOrLefts={disableUpOrLefts}
        scrollUpHandler={scrollUpHandler}
        scrollDownHandler={scrollDownHandler}
        scrollLeftHandler={scrollLeftHandler}
        scrollRightHandler={scrollRightHandler}
      />
    </div>
  );
};
function removewithfilter(arr: string[]) {
  let outputArray = arr.filter(function (v, i, self) {
    return i == self.indexOf(v);
  });
  return outputArray;
}

function groupBy(array: GameItem[]) {
  let categoryGroups: any = [];
  categoryGroups = array.map((game) => game.gameCategory);
  categoryGroups = removewithfilter(categoryGroups);
  categoryGroups = categoryGroups.map((category: string) => {
    return { category: category, games: [] };
  });

  for (let j = 0; j < categoryGroups.length; j++) {
    let categoryGroup = categoryGroups[j];
    for (let i = 0; i < array.length; i++) {
      if (categoryGroup.category == array[i].gameCategory) {
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

export default Games;

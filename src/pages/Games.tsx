import style from "./Games.module.css";
import useInput from "../components/hooks/use-input";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import GameItem from "../models/GamesPageItem";
import GamesBody from "../components/games/GamesBody";
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
      date:"2022-03-25",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "1",
      likesCount: "5279",
      id: "0",
      date:"2022-03-26",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category1",
      rank: "3",
      likesCount: "5277",
      id: "2",
      date:"2022-03-28",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category2",
      rank: "4",
      likesCount: "5276",
      id: "3",
      date:"2022-03-29",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category2",
      rank: "5",
      likesCount: "5275",
      id: "4",
      date:"2023-02-25",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category2",
      rank: "6",
      likesCount: "5274",
      id: "5",
      date:"2022-02-26",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "7",
      likesCount: "5273",
      id: "6",
      date:"2022-02-27",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "8",
      likesCount: "5272",
      id: "7",
      date:"2022-02-28",
    },
    {
      thumnailImageAddress: "Rectangle 8.png",
      gameLogoAddress: "Rectangle 846.png",
      gameName: "subway surfers1",
      gameCategory: "category3",
      rank: "9",
      likesCount: "5271",
      id: "8",
      date:"2022-02-29",
    },
  ];
  const [dropdownIsOpen, setdropdownIsOpen] = useState<boolean>(false);
  const [viewType, setVeiwType] = useState<string>("compact");
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
  const categorySortHandler=()=>{
    if (sortby != 'category') {
      setSortby('category');
    }
    setdropdownIsOpen((current) => !current);
  };
  const rateSortHandler = () => {
    if (sortby != 'rate') {
      setSortby('rate');
    }
    setdropdownIsOpen((current) => !current);
  };
  const earliestSortHandler = () => {
    if (sortby != 'earliest') {
      setSortby('earliest');
    }
    setdropdownIsOpen((current) => !current);
  };
  const latestSortHandler = () => {
    if (sortby != 'latest') {
      setSortby('latest');
    }
    setdropdownIsOpen((current) => !current);
  }
  const compactIconClickHandler = () => {
    if (viewType == "list") {
      setVeiwType("compact");
    }
  };
  const listIconClickHandler = () => {
    if (viewType == "compact") {
      setVeiwType("list");
    }
  };
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
              <div className={`${style.choiceContainer} ${viewType=='list'?style.listDropdownBackground:style.compactDropdownBackground}`}>
                <p onClick={rateSortHandler} className={`${style.choice} ${sortby=='rate'?style.selectedChoice:style.notSelectedChoice}` }>rate</p>
                <p onClick={categorySortHandler} className={`${style.choice} ${sortby=='category'?style.selectedChoice:style.notSelectedChoice}`}>category</p>
                <p onClick={earliestSortHandler} className={`${style.choice} ${sortby=='earliest'?style.selectedChoice:style.notSelectedChoice}`}>earliest</p>
                <p onClick={latestSortHandler} className={`${style.choice} ${sortby=='latest'?style.selectedChoice:style.notSelectedChoice}`}>latest</p>
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
      <GamesBody viewType={viewType} sortby={sortby} games={dummy} dropdownIsOpen={dropdownIsOpen}/>
    </div>
  );
};

export default Games;

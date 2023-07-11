import GameItem from "../../models/GamesPageItem";
import style from "./GamesBody.module.css";
import ListGames from "./ListGames";
import CompactGames from "./CompactGames";
import GameCategory from "./GameCategoryPage";
import CategorisedGameGroupItem from "../../models/CategorisedGameGroupItem";

const GamesBody: React.FC<{
  games: GameItem[];
  viewType: string;
  sortby: string;
  dropdownIsOpen: boolean;
  disableDownOrRights: { category: string; disableDownOrRight: boolean }[];
  disableUpOrLefts: { category: string; disableUpOrLeft: boolean }[];
  scrollUpHandler: any;
  scrollDownHandler: any;
  scrollLeftHandler: any;
  scrollRightHandler: any;
  categorisedGames: CategorisedGameGroupItem[];
}> = (props) => {
  let sortedGames = [...props.games];
  if (props.sortby == "rate") {
    sortedGames.sort((game1, game2) => +game1.rank - +game2.rank);
  }

  if (props.sortby == "earliest") {
    sortedGames.sort((game1 , game2) => new Date(game1.date).getTime() - new Date(game2.date).getTime());
  }

  if (props.sortby == "latest") {
    sortedGames.sort((game1 , game2) => new Date(game2.date).getTime() - new Date(game1.date).getTime())
  }

  let categorisedGames: CategorisedGameGroupItem[] = [
    {
      category: "category1",
      games: [
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category1",
          rank: "2",
          likesCount: "5278",
          id: "1",
          date : "2022-03-25"
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
      ],
    },
    {
      category: "category2",
      games: [
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
          date:"2022-02-25",
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
      ],
    },
    {
      category: "category3",
      games: [
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
      ],
    },
  ];

  return (
    <div className={style.bodyContainer}>
      {props.viewType == "list" &&
        (props.sortby == "rate" ||
          props.sortby == "earliest" ||
          props.sortby == "latest") && (
          <ListGames games={sortedGames} page="games" />
        )}
      {props.viewType == "compact" &&
        (props.sortby == "rate" ||
          props.sortby == "earliest" ||
          props.sortby == "latest") && (
          <CompactGames
            games={sortedGames}
            dropdownIsOpen={props.dropdownIsOpen}
          />
        )}
      {props.sortby == "category" && (
        // <GameCategory
        //   viewType={props.viewType}
        //   categorisedGames={groupBy(sortedGames)}
        // />
        <GameCategory
          viewType={props.viewType}
          categorisedGames={props.categorisedGames}
          disableDownOrRights={props.disableDownOrRights}
          disableUpOrLefts={props.disableUpOrLefts}
          scrollUpHandler={props.scrollUpHandler}
          scrollDownHandler={props.scrollDownHandler}
          scrollLeftHandler={props.scrollLeftHandler}
          scrollRightHandler={props.scrollRightHandler}
        />
      )}
    </div>
  );
};

export default GamesBody;

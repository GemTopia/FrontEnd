import GameItem from "../../models/GamesPageItem";
import style from "./GamesBody.module.css";
import ListGames from "./ListGames";
import CompactGames from "./CompactGames";
import GameCategory from "./GameCategoryPage";
import CategorisedGameGroup from "../../models/CategorisedGameGroupItem";
import CategorisedGameGroupItem from "../../models/CategorisedGameGroupItem";

const GamesBody: React.FC<{
  games: GameItem[];
  viewType: string;
  sortby: string;
  dropdownIsOpen: boolean;
}> = (props) => {
  let sortedGames = [...props.games];
  if (props.sortby == "rate") {
    sortedGames.sort((game1, game2) => +game1.rank - +game2.rank);
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
        },
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category1",
          rank: "1",
          likesCount: "5279",
          id: "0",
        },
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category1",
          rank: "3",
          likesCount: "5277",
          id: "2",
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
        },
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category2",
          rank: "5",
          likesCount: "5275",
          id: "4",
        },
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category2",
          rank: "6",
          likesCount: "5274",
          id: "5",
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
        },
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category3",
          rank: "8",
          likesCount: "5272",
          id: "7",
        },
        {
          thumnailImageAddress: "Rectangle 8.png",
          gameLogoAddress: "Rectangle 846.png",
          gameName: "subway surfers1",
          gameCategory: "category3",
          rank: "9",
          likesCount: "5271",
          id: "8",
        },
      ],
    },
  ];

  return (
    <div className={style.bodyContainer}>
      {props.viewType == "list" &&
        (props.sortby == "rate" ||
          props.sortby == "earliest" ||
          props.sortby == "latest") && <ListGames games={sortedGames} />}
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
          categorisedGames={categorisedGames}
        />
        
      )}
    </div>
  );
};

function groupBy(array: GameItem[]) {
  let categoryGroups: CategorisedGameGroup[] = [];
  for (let game of array) {
    categoryGroups.push({ category: game.gameCategory, games: [] });
  }

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
export default GamesBody;

import style from "./GameCategoryPage.module.css";
import CategorisedGameGroupItem from "../../models/CategorisedGameGroupItem";
import GameCategoryGroup from "./GameCategoryGroup";
import ListGames from "./ListGames";

const GameCategory: React.FC<{
  categorisedGames: CategorisedGameGroupItem[];
  viewType: string;
}> = (props) => {
  
  return (
    <div className={style.CategoryGamesBody}>
      {props.categorisedGames.map((CategoryGroup: CategorisedGameGroupItem) => {
        if (props.viewType == "compact") {
          return (
            <div className={style.oneCategoryContainer}>
              <div className={style.categoryHeader}>
                <p className={style.compactCategoryTitle}>{CategoryGroup.category}</p>
              </div>

              <GameCategoryGroup categorisedGames={CategoryGroup.games.sort((game1,game2)=>(+game1.rank)-(+game2.rank))} />
            </div>
          );
        } else if (props.viewType == "list") {
          return (
            <div>
              
              <p className={style.listCategoryTitle}>{CategoryGroup.category}</p>
              
              <ListGames games={CategoryGroup.games.sort((game1,game2)=>(+game1.rank)-(+game2.rank))}/>
            </div>
          );
        }
      })}
    </div>
  );
};

export default GameCategory;
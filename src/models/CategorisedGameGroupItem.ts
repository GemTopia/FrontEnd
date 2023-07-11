interface CategorisedGameGroupItem {
  category: string;
  games: {
    thumnailImageAddress: string;
    gameLogoAddress: string;
    gameName: string;
    gameCategory: string;
    rank: string;
    likesCount: string;
    id: string;
    date:string;
  }[];
}
export default CategorisedGameGroupItem;

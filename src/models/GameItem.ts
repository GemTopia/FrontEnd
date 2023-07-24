interface GameItem {
  cover_image: string;
  logo_image: string;
  name: string;
  game_type: string;
  // rank:string;
  num_of_like: number;
  id: number;
  created_at: string;
  is_liked_by_user: boolean;
  game_pictures: string[];

  link: string;
  num_of_report: number;
  num_of_users_get_gemyto: number;
  bio: string;
  scores:number
}
export default GameItem;

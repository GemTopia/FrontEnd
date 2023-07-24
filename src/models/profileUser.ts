import GameItem from "./GameItem";

interface profileUser {
  avatar: string;
  bio: string;
  email: String;
  hide_button: boolean;
  links: { name: string; link: string }[];
  referrer_code: string;
  user_game: GameItem[];
  user_name: string;
}
export default profileUser;

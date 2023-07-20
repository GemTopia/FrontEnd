import profileGameItem from "./profileGameItem";

interface profileUser {
  avatar: string;
  bio: String;
  email: String;
  hide_button: boolean;
  links: String[];
  referrer_code: String;
  user_games: profileGameItem[];
  user_name: String;
}
export default profileUser;

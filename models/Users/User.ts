import Role from "./Role";
import Avatar from "../Images/Avatar";

export default class User {
  id: number;
  username: string;
  password: string;
  first_name: string;
  last_name: string;
  email: string;
  avatar?: Avatar;
  role?: Role;
}

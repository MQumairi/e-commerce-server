import User from "../Users/User";
import Product from "./Product";

export default class UserComment {
  id: number;
  title: string;
  description: string;
  date_posted: Date;
  author: User;
  product: Product;
  parent_comment?: UserComment;
}

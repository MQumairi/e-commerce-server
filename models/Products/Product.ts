import ProductImage from "../Images/ProductImage";
import Rating from "./Rating";
import UserComment from "./UserComment";

export default class Product {
  id: number;
  name: string;
  price_gbp: number;
  ratings?: Rating[];
  commnets?: UserComment[];
  product_image: ProductImage[];
  stock: number;
}

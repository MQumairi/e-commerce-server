import Customer from "../Users/Customer";
import Product from "./Product";

export default class Rating {
  id: number;
  customer: Customer;
  product: Product;
  score: number;
}

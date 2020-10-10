import Order from "../Products/Order";
import Product from "../Products/Product";
import Address from "./Address";

export default class StorageAddress extends Address {
  owner: string;
  phone: string;
  orders: Order[];
  products_in_stock: Product[];
}

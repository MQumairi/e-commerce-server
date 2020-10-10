import Address from "./address";

export default class StorageAddress extends Address {
  owner: string;
  phone: string;
  orders: Order[];
  products: Product[];
}

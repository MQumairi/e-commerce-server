import CustomerAddress from "../Address/CustomerAddress";
import Order from "../Products/Order";
import User from "./User";

export default class Customer extends User {
  address: CustomerAddress;
  phone: string;
  card_no: string;
  card_exp: Date;
  card_cvc: string;
  orders?: Order[];
}

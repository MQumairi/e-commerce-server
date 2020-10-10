import Address from "../Address/Address";
import CustomerAddress from "../Address/CustomerAddress";
import StorageAddress from "../Address/StorageAddress";
import Customer from "../Users/Customer";
import Product from "./Product";

export default class Order {
  id: number;
  customer: Customer;
  products: Product[];
  destination: CustomerAddress;
  origin: StorageAddress;
  order_date: Date;
  arrival_date: Date;
  payment_gbp: number;
  is_shipped: boolean = false;
  is_delivered: boolean = false;
  current_address: Address;
}

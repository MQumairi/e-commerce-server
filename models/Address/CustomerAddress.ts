import Customer from "../Users/Customer";
import Address from "./Address";

export default class CustomerAddress extends Address {
  customer: Customer;
  date_assigned_to_customer: Date;
}

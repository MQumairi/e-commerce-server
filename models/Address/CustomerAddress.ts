import Address from "./address";

export default class CustomerAddress extends Address {
  customer: Customer;
  date_assigned_to_customer: Date;
}

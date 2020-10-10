import { ChildEntity, Column, OneToMany, OneToOne } from "typeorm";
import Order from "../Products/Order";
import Customer from "../Users/Customer";
import Address from "./Address";

@ChildEntity()
export default class CustomerAddress extends Address {
  @OneToOne((type) => Customer, (customer) => customer.address)
  customer: Customer;

  @Column()
  date_assigned_to_customer: Date;

  @OneToMany((type) => Order, (order) => order.destination)
  orders_to: Order[];
}

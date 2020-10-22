import { ChildEntity, Column, OneToMany, OneToOne } from "typeorm";
import Order from "../Products/Order";
import Customer from "../Users/Customer";
import Address from "./Address";

@ChildEntity()
export default class CustomerAddress extends Address {
  @OneToOne((type) => Customer, (customer) => customer.address, {
    nullable: true,
  })
  customer?: Customer;

  @Column("date")
  date_assigned_to_customer: string;

  @OneToMany((type) => Order, (order) => order.destination, { nullable: true })
  orders_to?: Order[];
}

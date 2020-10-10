import { ChildEntity, Column, JoinColumn, OneToMany, OneToOne } from "typeorm";
import CustomerAddress from "../Address/CustomerAddress";
import Order from "../Products/Order";
import Rating from "../Products/Rating";
import UserComment from "../Products/UserComment";
import User from "./User";

@ChildEntity()
export default class Customer extends User {
  @OneToOne(
    (type) => CustomerAddress,
    (customerAdress) => customerAdress.customer
  )
  @JoinColumn()
  address: CustomerAddress;

  @Column()
  phone: string;

  @Column()
  card_no: string;

  @Column()
  card_exp: Date;

  @Column()
  card_cvc: string;

  @OneToMany((type) => Order, (order) => order.customer)
  orders?: Order[];

  @OneToMany((type) => Rating, (ratings) => ratings.customer)
  published_ratings: Rating[];
}

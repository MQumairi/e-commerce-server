import { ChildEntity, Column, JoinColumn, OneToMany, OneToOne } from "typeorm";
import CustomerAddress from "../Address/CustomerAddress";
import Order from "../Products/Order";
import Rating from "../Products/Rating";
import User from "./User";

@ChildEntity()
export default class Customer extends User {
  @OneToOne(
    (type) => CustomerAddress,
    (customerAdress) => customerAdress.customer
  )
  @JoinColumn()
  address: CustomerAddress;

  @Column("text")
  phone: string;

  @Column("text")
  card_no: string;

  @Column()
  card_exp: Date;

  @Column("text")
  card_cvc: string;

  // @Column({ default: null, nullable: true })
  @OneToMany((type) => Order, (order) => order.customer)
  orders?: Order[];

  // @Column({ default: null, nullable: true })
  @OneToMany((type) => Rating, (ratings) => ratings.customer)
  published_ratings?: Rating[];
}

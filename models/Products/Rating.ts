import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Customer from "../Users/Customer";
import Product from "./Product";

export default class Rating {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Customer, (customer) => customer.published_ratings)
  customer: Customer;

  @ManyToOne((type) => Product, (product) => product.ratings, {
    cascade: true,
    onDelete: "CASCADE",
  })
  product: Product;

  @Column()
  score: number;
}

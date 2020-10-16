import { ChildEntity, Column, OneToMany } from "typeorm";
import Order from "../Products/Order";
import Product from "../Products/Product";
import Address from "./Address";

@ChildEntity()
export default class StorageAddress extends Address {
  @Column("text")
  owner: string;

  @Column("text")
  phone: string;

  @OneToMany((type) => Order, (order) => order.origin, { nullable: true })
  orders?: Order[];

  @OneToMany((type) => Product, (product) => product.stored_in, {
    nullable: true,
  })
  products_in_stock?: Product[];
}

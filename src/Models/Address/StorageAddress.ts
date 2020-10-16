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

  // @Column({ default: null, nullable: true })
  @OneToMany((type) => Order, (order) => order.origin)
  orders_from?: Order[];

  // @Column({ default: null, nullable: true })
  @OneToMany((type) => Product, (product) => product.stored_in)
  products_in_stock?: Product[];
}

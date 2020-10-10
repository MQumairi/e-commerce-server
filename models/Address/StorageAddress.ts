import { ChildEntity, Column, OneToMany } from "typeorm";
import Order from "../Products/Order";
import Product from "../Products/Product";
import Address from "./Address";

@ChildEntity()
export default class StorageAddress extends Address {
  @Column()
  owner: string;

  @Column()
  phone: string;

  @OneToMany((type) => Order, (order) => order.origin)
  orders: Order[];

  @OneToMany((type) => Product, (product) => product.stored_in)
  products_in_stock: Product[];
}

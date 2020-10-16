import { ChildEntity, Column, OneToMany } from "typeorm";
import Item from "../Products/Item";
import Order from "../Products/Order";
import Product from "../Products/Product";
import Address from "./Address";

@ChildEntity()
export default class StorageAddress extends Address {
  @Column("text")
  owner: string;

  @Column("text")
  phone: string;

  @Column({ default: null, nullable: true })
  @OneToMany((type) => Order, (order) => order.origin, {
    cascade: true,
    onDelete: "NO ACTION",
  })
  orders_from?: Order[];

  @Column({ default: null, nullable: true })
  @OneToMany((type) => Item, (item) => item.stored_in, {
    cascade: true,
    onDelete: "NO ACTION",
  })
  items_in_stock?: Item[];
}

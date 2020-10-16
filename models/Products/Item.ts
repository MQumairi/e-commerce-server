import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import StorageAddress from "../Address/StorageAddress";
import Order from "./Order";
import Product from "./Product";

@Entity()
export default class Item {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Product, (product) => product.items)
  product: Product;

  @Column({ default: null, nullable: true })
  @ManyToOne((type) => Order, (order) => order.items, {
    cascade: false,
    onDelete: "NO ACTION",
  })
  ordered_in?: Order;

  @ManyToOne(
    (type) => StorageAddress,
    (storageAddress) => storageAddress.items_in_stock,
    { cascade: true, onDelete: "CASCADE" }
  )
  stored_in: StorageAddress;
}

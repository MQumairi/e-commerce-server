import { Column, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";
import Product from "./Product";

export default class OrderToProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Order, (order) => order.products, {
    cascade: false,
    onDelete: "NO ACTION",
  })
  order: Order;

  @ManyToOne((type) => Product, (product) => product.orders, {
    cascade: false,
    onDelete: "NO ACTION",
  })
  products: Product;

  @Column()
  quantity: number;
}

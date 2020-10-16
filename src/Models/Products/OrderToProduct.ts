import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Order from "./Order";
import Product from "./Product";

@Entity()
export default class OrderToProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Order, (order) => order.products)
  order: Order;

  @ManyToOne((type) => Product, (product) => product.orders)
  products: Product;

  @Column()
  quantity: number;
}

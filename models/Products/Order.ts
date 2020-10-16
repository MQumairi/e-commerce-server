import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import CustomerAddress from "../Address/CustomerAddress";
import StorageAddress from "../Address/StorageAddress";
import Customer from "../Users/Customer";
import OrderToProduct from "./OrderToProduct";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Customer, (customer) => customer.orders, {
    cascade: true,
    onDelete: "NO ACTION",
  })
  customer: Customer;

  @ManyToOne(
    (type) => CustomerAddress,
    (customerAddress) => customerAddress.orders_to,
    { cascade: true, onDelete: "NO ACTION" }
  )
  destination: CustomerAddress;

  @ManyToOne(
    (type) => StorageAddress,
    (storageAddress) => storageAddress.orders_from,
    { cascade: true, onDelete: "NO ACTION" }
  )
  origin: StorageAddress;

  @Column()
  order_date: Date;

  @Column()
  arrival_date: Date;

  @Column()
  payment_gbp: number;

  @Column()
  is_shipped: boolean = false;

  @Column()
  is_delivered: boolean = false;

  @OneToMany((type) => OrderToProduct, (product) => product.order)
  products: OrderToProduct[];
}

import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import Address from "../Address/Address";
import CustomerAddress from "../Address/CustomerAddress";
import StorageAddress from "../Address/StorageAddress";
import Customer from "../Users/Customer";
import Product from "./Product";

@Entity()
export default class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne((type) => Customer, (customer) => customer.orders, {
    cascade: true,
    onDelete: "NO ACTION",
  })
  customer: Customer;

  @ManyToMany((type) => Product, (product) => product.ordered_in, {
    cascade: false,
    onDelete: "NO ACTION",
  })
  @JoinColumn()
  products: Product[];

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
}

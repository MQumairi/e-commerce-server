import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
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

  @ManyToOne((type) => Customer, (customer) => customer.orders)
  customer: Customer;

  @ManyToMany((type) => Product, (product) => product.orders_for)
  @JoinColumn()
  products: Product[];

  @ManyToOne(
    (type) => CustomerAddress,
    (customerAddress) => customerAddress.orders_to
  )
  destination: CustomerAddress;

  @ManyToOne(
    (type) => StorageAddress,
    (storageAddress) => storageAddress.orders
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

  @ManyToOne((type) => Address, (address) => address.orders_in)
  current_address: Address;
}

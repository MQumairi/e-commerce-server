import {
  Entity,
  Column,
  TableInheritance,
  PrimaryGeneratedColumn,
  OneToMany,
} from "typeorm";
import Order from "../Products/Order";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  line_1: string;

  @Column()
  line_2: string;

  @Column()
  city: string;

  @Column()
  country: string;

  @Column()
  postcode: string;

  @OneToMany((type) => Order, (order) => order.current_address)
  orders_in: Order[];
}

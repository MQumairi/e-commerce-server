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

  @Column("text")
  line_1: string;

  @Column("text")
  line_2: string;

  @Column("text")
  city: string;

  @Column("text")
  country: string;

  @Column("text")
  postcode: string;
}

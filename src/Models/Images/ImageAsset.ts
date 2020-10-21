import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  TableInheritance,
} from "typeorm";
// import User from "../Users/User";

@Entity()
@TableInheritance({ column: { type: "varchar", name: "type" } })
export default class ImageAsset {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  data: string;
}

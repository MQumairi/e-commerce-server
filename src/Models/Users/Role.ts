import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text", { default: null, nullable: true })
  description?: string;

  @OneToMany((type) => User, (users) => users.role, { nullable: true })
  users?: User[];
}

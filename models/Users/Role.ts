import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column({ default: null, nullable: true })
  @Column("text")
  description?: string;

  @Column({ default: null, nullable: true })
  @OneToMany((type) => User, (users) => users.role)
  users?: User[];
}

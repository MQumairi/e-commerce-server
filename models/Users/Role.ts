import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";

@Entity()
export default class Role {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description?: string;

  @OneToMany((type) => User, (users) => users.role)
  users: User[];
}

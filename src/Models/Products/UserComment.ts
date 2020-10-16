import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "../Users/User";
import Product from "./Product";

@Entity()
export default class UserComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  title: string;

  @Column("text")
  description: string;

  @Column()
  date_posted: Date;

  @ManyToOne((type) => User, (user) => user.published_comments)
  author: User;

  @ManyToOne((type) => Product, (product) => product.commnets)
  product: Product;

  @ManyToOne(
    (type) => UserComment,
    (child_comments) => child_comments.child_comments,
    { nullable: true }
  )
  parent_comment?: UserComment;

  @OneToMany(
    (type) => UserComment,
    (parent_comment) => parent_comment.parent_comment,
    { nullable: true }
  )
  child_comments?: UserComment[];
}

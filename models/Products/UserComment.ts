import {
  Column,
  ManyToMany,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import User from "../Users/User";
import Product from "./Product";

export default class UserComment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  date_posted: Date;

  @ManyToOne((type) => User, (user) => user.published_comments)
  author: User;

  @ManyToOne((type) => Product, (product) => product.commnets)
  product: Product;

  @ManyToOne(
    (type) => UserComment,
    (child_comments) => child_comments.child_comments
  )
  parent_comment?: UserComment;

  @OneToMany(
    (type) => UserComment,
    (parent_comment) => parent_comment.parent_comment
  )
  child_comments?: UserComment[];
}

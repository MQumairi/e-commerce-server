import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import ProductImage from "../Images/ProductImage";
import Order from "./Order";
import Rating from "./Rating";
import UserComment from "./UserComment";

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  name: string;

  @Column("text")
  description: string;

  @Column()
  price_gbp: number;

  @Column({ default: null, nullable: true })
  @OneToMany((type) => Rating, (rating) => rating.product, {
    cascade: true,
    onDelete: "CASCADE",
  })
  ratings?: Rating[];

  @Column({ default: null, nullable: true })
  @OneToMany((type) => UserComment, (userComment) => userComment.product, {
    cascade: true,
    onDelete: "CASCADE",
  })
  commnets?: UserComment[];

  @OneToMany((type) => ProductImage, (productImage) => productImage.product, {
    cascade: true,
    onDelete: "CASCADE",
  })
  product_images: ProductImage[];

  @Column()
  stock: number;

  @ManyToMany((type) => Order, (order) => order.products)
  @Column({ default: null, nullable: true })
  ordered_in?: Order;
}

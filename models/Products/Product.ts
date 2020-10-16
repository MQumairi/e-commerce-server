import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import ProductImage from "../Images/ProductImage";
import Item from "./Item";
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

  @Column({ default: null, nullable: true })
  @OneToMany((type) => Item, (item) => item.product, {
    cascade: true,
    onDelete: "CASCADE",
  })
  items?: Item[];
}

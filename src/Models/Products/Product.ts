import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import StorageAddress from "../Address/StorageAddress";
import ProductImage from "../Images/ProductImage";
import OrderToProduct from "./OrderToProduct";
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

  @OneToMany((type) => Rating, (rating) => rating.product, { nullable: true })
  ratings?: Rating[];

  @OneToMany((type) => UserComment, (userComment) => userComment.product, {
    nullable: true,
  })
  comments?: UserComment[];

  @OneToMany((type) => ProductImage, (productImage) => productImage.product)
  product_images: ProductImage[];

  @Column()
  stock: number;

  @ManyToOne((type) => StorageAddress)
  stored_in: StorageAddress;

  @OneToMany((type) => OrderToProduct, (order) => order.products)
  orders?: OrderToProduct[];
}

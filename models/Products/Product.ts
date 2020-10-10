import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import StorageAddress from "../Address/StorageAddress";
import ProductImage from "../Images/ProductImage";
import Order from "./Order";
import Rating from "./Rating";
import UserComment from "./UserComment";

@Entity()
export default class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  price_gbp: number;

  @OneToMany((type) => Rating, (rating) => rating.product)
  ratings?: Rating[];

  @OneToMany((type) => UserComment, (userComment) => userComment.product)
  commnets?: UserComment[];

  @OneToMany((type) => ProductImage, (productImage) => productImage.product)
  product_images: ProductImage[];

  @ManyToOne(
    (type) => StorageAddress,
    (storageAddress) => storageAddress.products_in_stock
  )
  stored_in: StorageAddress;

  @Column()
  stock: number;

  @ManyToMany((type) => Order, (order) => order.products)
  orders_for: Order[];
}

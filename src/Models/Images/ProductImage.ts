import { ChildEntity, ManyToOne } from "typeorm";
import Product from "../Products/Product";
import ImageAsset from "./ImageAsset";

@ChildEntity()
export default class ProductImage extends ImageAsset {
  @ManyToOne((type) => Product, (product) => product.product_images, {
    onDelete: "CASCADE",
    onUpdate: "CASCADE",
    cascade: true,
  })
  product: Product;
}

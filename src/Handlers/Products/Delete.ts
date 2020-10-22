import { Request, Response } from "express";
import { getRepository } from "typeorm";
import ProductImage from "../../Models/Images/ProductImage";
import Product from "../../Models/Products/Product";
import { deleteImage } from "../../Functions/ImageUploader";

//TODO: Need to delete the images when deleting the product

const Delete = async (req: Request, res: Response): Promise<void> => {
  //Find the product
  const id = +req.params.id;
  const productRepo = getRepository(Product);
  const product = await productRepo.findOne(id);
  if (product === undefined) {
    res.status(404).send("Not found");
    return;
  }

  //Delete the product's iamage
  const productImageRepo = getRepository(ProductImage);

  product.product_images.forEach(async (productImage) => {
    console.log("Deleting " + productImage.public_id);
    await deleteImage(productImage.public_id);
    await productImageRepo.remove(productImage);
  });

  //Delete the product
  await productRepo.remove(product!);
  res.status(200).send("Removed " + product.name);
};

export default Delete;

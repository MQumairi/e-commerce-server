import { Request, Response } from "express";
import { getRepository } from "typeorm";
import ProductImage from "../../Models/Images/ProductImage";
import Product from "../../Models/Products/Product";
import cloudinary from "cloudinary";
import dotenv from "dotenv";

//TODO: Need to delete the images when deleting the product

const Delete = async (req: Request, res: Response): Promise<void> => {
  dotenv.config();

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  //Find the product
  const id = +req.params.id;
  const productRepo = getRepository(Product);
  const product = await productRepo.findOne(id);
  if (product === undefined) res.status(404).send("Not found");

  //Delete the product's iamage
  const productImageRepo = getRepository(ProductImage);

  product.product_images.forEach((productImage) => {
    console.log("Deleting " + productImage.public_id);
    cloudinary.v2.uploader.destroy(productImage.public_id, async () => {
      await productImageRepo.remove(productImage);
    });
  });

  //Delete the product
  await productRepo.remove(product!);
  res.status(200).send("Removed " + product.name);
};

export default Delete;

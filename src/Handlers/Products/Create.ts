import { Request, Response } from "express";
import ProductImage from "../../Models/Images/ProductImage";
import fs from "fs";
import cloudinary from "cloudinary";
import dotenv from "dotenv";
import Product from "../../Models/Products/Product";
import { getRepository } from "typeorm";
import StorageAddress from "../../Models/Address/StorageAddress";

const Create = async (req: Request, res: Response) => {
  //The repository
  let productRepo = getRepository(Product);
  let productImageRepo = getRepository(ProductImage);
  let storageAddressRepo = getRepository(StorageAddress);

  //Find the address specified in the id
  let storageAddress = await storageAddressRepo.findOne(req.body.stored_in);

  if (storageAddress === undefined) {
    res.status(404).send("Address not found");
    return;
  }

  //Create the product
  //Include: name, p, price_gbp, product_images, stock, stored_in address
  let product: Product = {
    name: req.body.name,
    description: req.body.description,
    price_gbp: req.body.price_gbp,
    stock: req.body.stock,
    stored_in: storageAddress,
  };
  await productRepo.save(product);

  //Create the images
  const files = req.files;

  dotenv.config();

  cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLOUDNAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
  });

  for (let i = 0; i < files.length; i++) {
    cloudinary.v2.uploader
      .upload_stream(async (err, result) => {
        if (err) {
          console.log(err);
        }

        let productImage: ProductImage = {
          data: result.secure_url,
          public_id: result.public_id,
          product: product,
        };

        await productImageRepo.save(productImage);
      })
      .end(files[i].buffer);
  }

  res.status(200).send(req.body);
};

export default Create;

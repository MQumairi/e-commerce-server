import { Request, Response } from "express";
import ProductImage from "../../Models/Images/ProductImage";
import Product from "../../Models/Products/Product";
import { getRepository } from "typeorm";
import StorageAddress from "../../Models/Address/StorageAddress";
import uploadImages from "../../Functions/ImageUploader";

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

  //NEW STUFF START
  let images = await uploadImages(files);

  //NEW STUFF END

  images.forEach(async (image) => {
    let productImage: ProductImage = {
      data: image.secure_url,
      public_id: image.public_id,
      product: product,
    };

    await productImageRepo.save(productImage);
  });

  res.status(200).send(req.body);
};

export default Create;

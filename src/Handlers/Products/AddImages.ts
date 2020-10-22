import { Request, Response } from "express";
import { getRepository } from "typeorm";
import uploadImages from "../../Functions/ImageUploader";
import ProductImage from "../../Models/Images/ProductImage";
import Product from "../../Models/Products/Product";

//Add images to a product
const AddImages = async (req: Request, res: Response) => {
  //Find the product
  const id = +req.params.id;
  const productRepo = getRepository(Product);
  let foundProduct = await productRepo.findOne(id);

  if (foundProduct === undefined) {
    res.status(404).send("Product not found");
    return;
  }

  //Create the productImage
  let productImageRepo = getRepository(ProductImage);

  //Create the images
  const files = req.files;

  //NEW STUFF START
  let images = await uploadImages(files);

  console.log("Image array: ✅");
  console.log(images);

  //NEW STUFF END
  images.forEach(async (image) => {
    // let foundProduct = await productRepo.findOne(id);

    console.log("Id of found product is " + foundProduct.id);

    let productImage: ProductImage = {
      data: image.secure_url,
      public_id: image.public_id,
      product: foundProduct,
    };

    console.log("The ProductImage we're about to save...");
    console.log(productImage);

    await productImageRepo.save(productImage);
  });

  res.status(201).send("Added Image");
};

export default AddImages;

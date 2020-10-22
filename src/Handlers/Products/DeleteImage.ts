import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { deleteImage } from "../../Functions/ImageUploader";
import ProductImage from "../../Models/Images/ProductImage";

const DeleteImage = async (req: Request, res: Response): Promise<void> => {
  const id = +req.params.imageid;
  const productImageRepo = getRepository(ProductImage);
  const productImage = await productImageRepo.findOne(id);
  if (productImage === undefined) {
    res.status(404).send("Not found");
    return;
  }

  //Delete the image from cloudinary
  await deleteImage(productImage.public_id);

  //Delete the image from the database
  await productImageRepo.remove(productImage!);
  res.status(200).send("Removed " + productImage.public_id);
};

export default DeleteImage;

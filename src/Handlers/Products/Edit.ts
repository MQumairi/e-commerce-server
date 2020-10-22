import { Request, Response } from "express";
import { getRepository } from "typeorm";
import EditMapper from "../../Functions/EditMapper";
import Product from "../../Models/Products/Product";

//Need to find a way to edit the images

const Edit = async (
  req: Request,
  res: Response
): Promise<Product | undefined> => {
  const id = +req.params.id;
  const productRepo = getRepository(Product);

  //Find the product
  let foundProduct = await productRepo.findOne(id);

  //Check that they exist
  if (foundProduct === undefined) res.status(404).send("Product not found");

  //Get the requested changes
  let request = req.body;

  //Map the changes to the new product
  foundProduct = EditMapper(foundProduct, request);

  //Save to database
  await productRepo.save(foundProduct!);

  //Respond with message
  res.status(201).send(foundProduct);

  //Return
  return foundProduct;
};

export default Edit;

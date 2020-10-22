import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../../Models/Products/Product";

const Details = async (
  req: Request,
  res: Response
): Promise<Product | undefined> => {
  const id = +req.params.id;
  const product = await getRepository(Product).findOne(id);

  if (product === undefined) {
    res.status(404).send("Product not found");
    return;
  }
  res.json(product);

  return product;
};

export default Details;

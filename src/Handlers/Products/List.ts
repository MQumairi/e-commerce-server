import { Request, Response } from "express";
import { getRepository } from "typeorm";
import Product from "../../Models/Products/Product";

const List = async (req: Request, res: Response): Promise<Product[]> => {
  const productRepo = getRepository(Product);
  const productList = await productRepo.find();
  res.json(productList);
  return productList;
};

export default List;
